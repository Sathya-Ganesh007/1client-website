"use client";

import Link from "next/link";
import { ThemeSwitcher } from "@/components/theme-switcher";

export default function Navbar() {
  const links = [
    { name: "Home", href: "#home" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Expertise", href: "#strategy" },
    { name: "Studio", href: "#studio" },
    { name: "About", href: "#about" },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-6 px-12 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="text-[17px] font-bold tracking-tighter uppercase transition-opacity hover:opacity-70 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        TUSHAR
      </div>
      <div className="flex items-center gap-10">
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
    </nav>
  );
}
