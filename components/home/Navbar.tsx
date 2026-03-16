"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Menu, X, ChevronLeft } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

interface NavLink {
  name: string;
  href: string;
  isExternal?: boolean;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();
  const router = useRouter();
  
  const isHomePage = pathname === "/";
  const isStudioPage = pathname === "/studio";

  // Dynamic links based on context
  const mainLinks: NavLink[] = [
    { name: "About",      href: "#home"       },
    { name: "Experience", href: "#experience" },
    { name: "Projects",   href: "#projects"   },
    { name: "Expertise",  href: "#strategy"   },
  ];

  const studioLinks: NavLink[] = [
    { name: "About",      href: "#about"      },
    { name: "Services",   href: "#services"   },
    { name: "Roadmap",    href: "#roadmap"    },
  ];

  const commonLinks: NavLink[] = [
    { name: "Education",  href: "#education"  },
    { name: "Speaking",   href: "#about"      },
  ];

  // Decide which links to show
  const currentLinks: NavLink[] = isStudioPage 
    ? [{ name: "Main Home", href: "/", isExternal: true }, ...studioLinks, { name: "Contact", href: "#contact" }]
    : [...mainLinks, ...commonLinks];

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
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.3 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [pathname, currentLinks]);

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
      <nav className="fixed top-0 left-0 right-0 z-[100] flex justify-between items-center py-4 md:py-6 px-6 md:px-12 bg-background/80 backdrop-blur-md border-b border-border/50">
        <CardContainer containerClassName="py-0" className="py-0">
        <CardItem translateZ="50">
          <div
            className="flex items-center gap-2 cursor-pointer transition-opacity hover:opacity-70"
            onClick={handleLogoClick}
          >
            {isStudioPage && <ChevronLeft size={16} className="text-orange-500" />}
            <div className="flex items-center gap-3">
              <div className="relative w-40 h-10">
                <Image 
                  src="/signature.png" 
                  alt="Tushar Kasarlewar Signature" 
                  fill 
                  className="object-contain dark:invert" 
                  priority
                />
              </div>
            </div>
            {isStudioPage && <span className="text-orange-500 font-bold tracking-tighter uppercase text-[17px]"> / STUDIO</span>}
          </div>
        </CardItem>
      </CardContainer>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-10">
        <div className="flex items-center gap-8">
          {currentLinks.map((link) => (
            <Link
              key={link.name}
              href={link.isExternal ? link.href : `${pathname}${link.href}`}
              onClick={(e) => handleLinkClick(e, link.href, link.isExternal)}
              className={`text-[14px] font-medium transition-all duration-200 relative group ${
                isActive(link.href) ? "text-foreground" : "text-muted hover:text-foreground"
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-[2px] transition-all duration-300 ${
                isStudioPage ? "bg-orange-500" : "bg-[#ffcc01]"
              } ${isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"}`} />
            </Link>
          ))}
        </div>
        <div className="h-4 w-[1px] bg-border" />
        <ThemeSwitcher />
      </div>

      {/* Mobile Toggle */}
      <div className="flex md:hidden items-center gap-4 relative z-[101]">
        <ThemeSwitcher />
        <button onClick={() => setIsOpen(true)} className="p-2 text-muted hover:text-foreground transition-all">
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
          className="fixed inset-0 bg-background/98 backdrop-blur-3xl z-[9999] md:hidden overflow-y-auto overscroll-contain flex flex-col"
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
                  className={`text-[40px] font-bold tracking-tighter transition-all active:scale-95 block ${
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
