"use client";

import Navbar from "@/components/home/Navbar";
import { motion, Variants } from "framer-motion";
import React from "react";

export default function LaboratoryPage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col relative selection:bg-[#ffcc01] selection:text-black">
      <Navbar />
      
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Subtle mesh/grain effect */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
        
        {/* Soft atmospheric glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#ffcc01]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#ffcc01]/5 rounded-full blur-[100px]" />
      </div>

      <main className="flex-1 flex flex-col items-center justify-center p-6 md:p-12 lg:p-24 relative z-10 w-full max-w-[1400px] mx-auto min-h-screen pt-32 pb-24 border-x border-border/10">
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-5xl flex flex-col items-start gap-12 lg:gap-16"
        >
          {/* Top subtle indicators */}
          <div className="w-full flex justify-between items-center border-b border-border/30 pb-6">
            <motion.div variants={itemVariants} className="flex flex-col gap-1">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted">Status</span>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#ffcc01] animate-pulse" />
                <span className="text-xs font-medium tracking-widest text-foreground uppercase">In Development</span>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="text-right">
               <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted block">Index</span>
               <span className="text-xs font-mono text-foreground/50 text-right">007.LAB</span>
            </motion.div>
          </div>

          {/* Main Title Area */}
          <div className="space-y-8 w-full">
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-7xl lg:text-[100px] font-bold tracking-tighter leading-[0.9] text-foreground"
            >
              The <span className="text-muted/50 italic font-medium">Laboratory</span>
              <br />
              <span className="text-[#ffcc01]">Coming Soon.</span>
            </motion.h1>
          </div>

          {/* Body content */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 w-full pt-8 border-t border-border/10"
          >
            <div className="space-y-6">
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-muted">What is this space?</h3>
              <p className="text-lg md:text-xl text-foreground/80 font-light leading-relaxed">
                A sandbox for experimental design, mental models, and abstract interactive ideas. This is where utility meets unrestricted visual exploration.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-muted">Current Focus</h3>
              <ul className="space-y-4">
                {['Generative Typography', 'Abstract Component Systems', 'Interaction Analogies', 'Spatial Layouts'].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-sm md:text-base text-foreground/70 bg-foreground/5 px-4 py-3 rounded-xl border border-border/30">
                    <span className="text-[#ffcc01] font-mono text-[10px] bg-[#ffcc01]/10 px-2 py-1 rounded-md">0{i + 1}</span>
                    <span className="font-medium tracking-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          
          {/* Footer visual */}
          <motion.div variants={itemVariants} className="w-full pt-16 flex justify-between items-end border-t border-border/10 mt-auto">
             <div className="flex gap-2">
               {[1, 2, 3].map((i) => (
                 <div key={i} className={`w-12 h-1 bg-[#ffcc01] ${i === 1 ? 'opacity-100' : i === 2 ? 'opacity-50' : 'opacity-20'}`} />
               ))}
             </div>
             <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted text-right max-w-[200px]">
               Please stand by while we calibrate the environment.
             </p>
          </motion.div>

        </motion.div>
      </main>
    </div>
  );
}
