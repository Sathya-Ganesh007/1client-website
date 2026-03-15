"use client";

import Navbar from "@/components/home/Navbar";
import { motion } from "framer-motion";
import { FlaskConical, Beaker, Atom, Zap } from "lucide-react";
import React from "react";

export default function LaboratoryPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <div className="min-h-screen bg-[#000000] text-white overflow-hidden relative selection:bg-[#ffcc01] selection:text-black">
      <Navbar />
      
      <main className="min-h-screen flex flex-col items-center justify-center p-6 md:p-12 lg:p-24 relative">
        {/* Background Gradients/Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ffcc01]/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#ffcc01]/5 rounded-full blur-[150px]" />
          
          {/* Grid lines equivalent */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ 
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="max-w-[1200px] mx-auto w-full text-center space-y-12 relative z-10">
          <motion.div {...fadeIn} className="flex flex-col items-center gap-8 md:gap-12">
            <div className="flex gap-4 md:gap-8">
              <FlaskConical size={32} className="text-[#ffcc01] animate-pulse" />
              <Beaker size={32} className="text-[#ffcc01] opacity-50" />
              <Atom size={32} className="text-[#ffcc01] opacity-80" />
              <Zap size={32} className="text-[#ffcc01] animate-bounce" />
            </div>
            
            <div className="space-y-4">
              <span className="text-[12px] md:text-[14px] font-black uppercase tracking-[0.5em] md:tracking-[0.8em] text-[#ffcc01] italic block">Experimental Environment</span>
              <h1 className="text-5xl md:text-9xl font-black tracking-tighter leading-none italic uppercase">
                Laboratory <br />
                <span className="text-[#ffcc01] border-b-4 md:border-b-8 border-[#ffcc01]/20">Coming Soon</span>
              </h1>
            </div>

            <p className="text-lg md:text-2xl opacity-60 font-light max-w-2xl mx-auto italic leading-relaxed">
              We&apos;re currently synthesizing new experiments where utility meets experimental art. 
              The 7th Studio Laboratory is a space for analogies, mental models, and the track I&apos;m on.
            </p>

            <motion.div 
              animate={{ width: ["0%", "100%", "0%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="h-[2px] bg-[#ffcc01] w-48 opacity-30 mt-8"
            />
            
            <div className="pt-8 md:pt-12">
               <div className="px-6 md:px-8 py-3 rounded-full border border-[#ffcc01]/20 bg-[#ffcc01]/5 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#ffcc01] animate-ping" />
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#ffcc01]">Synthesis in Progress</span>
               </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative version text */}
        <div className="absolute bottom-12 left-12 opacity-10 hidden lg:block">
           <span className="text-[10px] font-black uppercase tracking-[0.5em] [writing-mode:vertical-lr]">experimental_art v0.1</span>
        </div>
      </main>
    </div>
  );
}
