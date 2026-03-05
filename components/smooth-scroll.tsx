"use client";

import { useLenis } from "lenis/react";
import { ReactLenis } from "lenis/react";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root>
      {children}
    </ReactLenis>
  );
}
//https://github.com/Sathya-Ganesh007/1client-website.git