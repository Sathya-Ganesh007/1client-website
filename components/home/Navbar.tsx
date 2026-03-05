"use client";

import Link from "next/link";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Expertise", href: "#strategy" },
    { name: "Studio", href: "#studio" },
    { name: "Education", href: "#education" },
    { name: "About", href: "#about" },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      setIsOpen(false);
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex justify-between items-center py-4 md:py-6 px-6 md:px-12 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="text-[17px] font-bold tracking-tighter uppercase transition-opacity hover:opacity-70 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        TUSHAR
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-10">
        <div className="flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="text-[14px] font-medium text-muted hover:text-foreground transition-all duration-200"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="h-4 w-[1px] bg-border" />
        <ThemeSwitcher />
      </div>

      {/* Mobile Menu Toggle */}
      <div className="flex md:hidden items-center gap-4">
        <ThemeSwitcher />
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-muted hover:text-foreground transition-all z-[101]"
        >
          {isOpen ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-background z-[99] md:hidden p-8 pt-32"
          >
            <div className="flex flex-col gap-8">
              {links.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                >
                  <Link
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="text-[40px] font-bold tracking-tighter text-muted hover:text-primary transition-all active:scale-95 block"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 0.7 }}
                className="mt-12 flex flex-col gap-4 text-xs font-bold uppercase tracking-[0.3em] text-muted/50"
              >
                <span>Based in Pune, India</span>
                <span>Available for Projects &copy; 2026</span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
