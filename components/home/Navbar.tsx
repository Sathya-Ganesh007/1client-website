"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Menu, X, ChevronLeft } from "lucide-react";
import { useState, useEffect, useLayoutEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavLink {
  name: string;
  href: string;
  isExternal?: boolean;
}

const MAIN_LINKS: NavLink[] = [
  { name: "About", href: "#home" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Expertise", href: "#strategy" },
];

const STUDIO_LINKS: NavLink[] = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Roadmap", href: "#roadmap" },
];

const COMMON_LINKS: NavLink[] = [
  { name: "Education", href: "#education" },
  { name: "Speaking", href: "#about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();
  const router = useRouter();
  
  const isHomePage = pathname === "/";
  const isStudioPage = pathname === "/studio";

  const currentLinks = useMemo((): NavLink[] => {
    if (isStudioPage) {
      return [
        { name: "Main Home", href: "/", isExternal: true },
        ...STUDIO_LINKS,
        { name: "Contact", href: "#contact" },
      ];
    }
    return [...MAIN_LINKS, ...COMMON_LINKS];
  }, [isStudioPage]);

  // Before paint on home: keep About (#home) active so the yellow underline shows immediately on load/reload
  useLayoutEffect(() => {
    if (pathname !== "/" || typeof window === "undefined") return;
    if (window.scrollY < 120) setActiveSection("home");
  }, [pathname]);

  // Track active section on current page
  useEffect(() => {
    const sectionIds = currentLinks
      .filter(l => l.href.startsWith("#"))
      .map((l) => l.href.substring(1));
      
    if (sectionIds.length === 0) return;

    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          if (pathname === "/" && window.scrollY < 120 && id !== "home") return;
          setActiveSection(id);
        },
        { threshold: 0.3 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [pathname, isStudioPage]);

  // While at top of home page, keep About (#home) active when scrolling back
  useEffect(() => {
    if (pathname !== "/") return;

    const syncHome = () => {
      if (window.scrollY < 120) setActiveSection("home");
    };

    syncHome();
    window.addEventListener("scroll", syncHome, { passive: true });
    return () => window.removeEventListener("scroll", syncHome);
  }, [pathname]);

  const smoothScrollTo = (id: string) => {
    const offset = 80;
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isExternal?: boolean) => {
    if (isExternal || !href.startsWith("#")) {
      // Normal navigation
      setIsOpen(false);
      return;
    }

    e.preventDefault();
    setIsOpen(false);
    const sectionId = href.substring(1);

    // If section exists on current page, scroll. Otherwise navigate home first.
    if (document.getElementById(sectionId)) {
      smoothScrollTo(sectionId);
    } else {
      router.push(`/${href}`);
    }
  };

  const handleLogoClick = () => {
    setIsOpen(false);
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  // Handle cross-page hash scrolling
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.substring(1);
      const timer = setTimeout(() => smoothScrollTo(id), 500);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  const isActive = (href: string) => {
    return activeSection === href.substring(1);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] flex justify-between items-center py-4 md:py-6 px-6 md:px-10 lg:px-16 xl:px-24 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div
          className="flex items-center gap-2 cursor-pointer transition-opacity hover:opacity-70"
          onClick={handleLogoClick}
        >
          {isStudioPage && <ChevronLeft size={16} className="text-orange-500" />}
          <div className="flex items-center gap-2">
            <span className="text-lg md:text-xl xl:text-2xl font-black tracking-tighter text-foreground uppercase whitespace-nowrap">
              TUSHAR 
            </span>
          </div>
          {isStudioPage && <span className="text-orange-500 font-bold tracking-tighter uppercase text-[12px] md:text-[14px] xl:text-[17px] whitespace-nowrap"> / STUDIO</span>}
        </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center gap-4 xl:gap-10">
        <div className="flex items-center gap-4 lg:gap-6 xl:gap-8">
          {currentLinks.map((link) => (
            <Link
              key={link.name}
              href={link.isExternal ? link.href : `${pathname}${link.href}`}
              onClick={(e) => handleLinkClick(e, link.href, link.isExternal)}
              className={`text-[13px] xl:text-[14px] font-medium transition-all duration-200 relative group ${
                isActive(link.href) ? "text-foreground" : "text-muted hover:text-foreground"
              }`}
            >
              {link.name}
              <span
                className={`absolute -bottom-1 left-0 h-[2px] ${
                  isStudioPage ? "bg-orange-500" : "bg-[#ffcc01]"
                } ${
                  isActive(link.href)
                    ? "w-full"
                    : "w-0 transition-all duration-300 group-hover:w-full"
                } ${isActive(link.href) && pathname === "/" && link.href === "#home" ? "!transition-none" : ""}`}
              />
            </Link>
          ))}
        </div>
        <div className="h-4 w-[1px] bg-border" />
        <ThemeSwitcher />
      </div>

      {/* Mobile Toggle */}
      <div className="flex lg:hidden items-center gap-4 relative z-[101]">
        <ThemeSwitcher />
        <button onClick={() => setIsOpen(true)} className="p-2 rounded-none text-muted hover:text-foreground transition-all">
          <Menu size={26} strokeWidth={1.5} />
        </button>
      </div>
    </nav>

    {/* Mobile Menu Overlay */}
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed inset-0 bg-background/98 backdrop-blur-3xl z-[9999] lg:hidden overflow-y-auto overscroll-contain flex flex-col"
        >
          {/* Top Bar inside Menu */}
          <div className="flex justify-end items-center py-4 px-6 mb-8 border-b border-border/10">
            <div className="flex items-center gap-4">
              <ThemeSwitcher />
              <button onClick={() => setIsOpen(false)} className="p-2 text-foreground transition-all hover:rotate-90">
                <X size={26} strokeWidth={1.5} />
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-8 px-8 pb-20 pt-4 flex-grow">
            {currentLinks.map((link, i) => (
              <motion.div key={link.name} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 * i }}>
                <Link
                  href={link.isExternal ? link.href : `${pathname}${link.href}`}
                  onClick={(e) => handleLinkClick(e, link.href, link.isExternal)}
                  className={`text-[32px] md:text-[40px] font-bold tracking-tighter transition-all active:scale-95 block ${
                    isActive(link.href) ? (isStudioPage ? "text-orange-500" : "text-[#ffcc01]") : "text-muted hover:text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}
