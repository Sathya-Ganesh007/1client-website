"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, UserCheck, Layout, GitBranch, Target, Brain, ArrowRight } from 'lucide-react';
import Navbar from '@/components/home/Navbar';

const approachSteps = [
  {
    title: "1. User Intent Mapping",
    desc: "Instead of organizing the experience around features, the platform should organize around user intent.",
    icon: <Target className="w-8 h-8" />,
    examples: [
      {
        platform: "Eblity",
        goals: [
          "Parent seeking help for a child",
          "Teacher seeking training",
          "Specialist sharing expertise"
        ]
      },
      {
        platform: "Flourish Portal",
        goals: [
          "User discovering opportunities",
          "User applying to a program",
          "User tracking application status"
        ]
      }
    ],
    principle: "Intent-first navigation"
  },
  {
    title: "2. Information Architecture Simplification",
    desc: "Both platforms benefit from clearer structural zones to reduce exploration friction.",
    icon: <Layout className="w-8 h-8" />,
    iaStructures: [
      {
        name: "Eblity IA",
        structure: ["Learn (courses & training)", "Experts (therapists & specialists)", "Resources (guides & tools)", "Community"]
      },
      {
        name: "Flourish Portal IA",
        structure: ["Discover Opportunities", "Program Details", "Apply", "Track Application"]
      }
    ]
  },
  {
    title: "3. Task-Focused Interaction Design",
    desc: "Key flows redesigned for clarity, aligning the interface with the user’s decision journey.",
    icon: <GitBranch className="w-8 h-8" />,
    flows: [
      {
        name: "Eblity Flows",
        items: [
          { label: "Parent Journey", flow: "Problem → Guidance → Expert → Resource" },
          { label: "Teacher Journey", flow: "Training → Learning Modules → Community" }
        ]
      },
      {
        name: "Flourish Portal Flows",
        items: [
          { label: "Opportunity Discovery", flow: "Explore → Eligibility → Application → Status" }
        ]
      }
    ]
  }
];

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

export default function EblityCaseStudy() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar />
      
      <main className="pt-32 pb-40 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1200px] mx-auto">
          
          {/* Header */}
          <motion.div {...fadeIn} className="space-y-8 mb-20">
            <Link href="/#projects" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#ffcc01] hover:text-[#e6b800] transition-colors">
              <ArrowLeft size={16} /> Back to Projects
            </Link>
            <div className="space-y-6">
              <span className="text-[12px] font-black uppercase tracking-[0.4em] text-muted block italic">UX Case Study</span>
              <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] text-foreground">
                Designing Clear Digital <span className="text-[#ffcc01]">Ecosystems</span>
              </h1>
              <p className="text-xl md:text-2xl text-foreground/60 font-light leading-relaxed max-w-3xl">
                Streamlining learning & opportunity platforms for educators, parents, and applicants.
              </p>
            </div>
          </motion.div>

          {/* Hero Banner */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-[21/9] relative rounded-[48px] overflow-hidden mb-32 border border-border/50 shadow-2xl bg-card"
          >
            <Image 
              src="/portfolio_thumbnail_2.png" 
              alt="Eblity UX Case Study" 
              fill 
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          </motion.div>

          {/* Context & Problem Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-40">
            <motion.div {...fadeIn} className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#ffcc01]/10 flex items-center justify-center text-[#ffcc01]">
                   <Brain size={24} />
                </div>
                <h2 className="text-3xl font-bold tracking-tight">Context</h2>
              </div>
              <div className="space-y-6 text-lg text-muted font-light leading-relaxed">
                <p>
                  Two digital platforms—<span className="text-foreground font-medium">Eblity</span> and the <a href="https://www.eblity.com/flourish" target="_blank" rel="noopener noreferrer" className="text-[#ffcc01] hover:underline font-medium">Flourish Opportunity Portal</a>—serve users navigating complex journeys.
                </p>
                <p>
                  Eblity connects educators, parents, and specialists to support children with learning and behavioural challenges through training programs, resources, and expert guidance.
                </p>
                <p>
                  The Flourish portal enables users to discover and apply to programs or opportunities, requiring clear onboarding, eligibility understanding, and application flows.
                </p>
                <div className="p-6 bg-[#ffcc01]/5 border-l-4 border-[#ffcc01] rounded-r-2xl italic">
                   Both platforms share a common UX challenge: Users must quickly understand what to do, where to go, and how to complete their goals.
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeIn} className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500">
                   <Target size={24} />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-red-500">The Problem</h2>
              </div>
              <div className="grid gap-6">
                 {[
                   { title: "Cognitive Overload", desc: "Users must process large amounts of information before taking action." },
                   { title: "Fragmented User Journeys", desc: "Key actions (learning access, applications, resources) are not always clearly structured." },
                   { title: "Unclear User Intent Pathways", desc: "Different users (parents, educators, applicants) have different goals, but navigation often treats them similarly." }
                 ].map((prob, i) => (
                   <div key={i} className="p-8 bg-card border border-border/50 rounded-3xl space-y-2">
                      <span className="text-xs font-black text-red-500/80 uppercase tracking-widest">Problem #0{i+1}</span>
                      <h3 className="text-xl font-bold">{prob.title}</h3>
                      <p className="text-muted text-sm font-light leading-relaxed">{prob.desc}</p>
                   </div>
                 ))}
              </div>
            </motion.div>
          </div>

          {/* Role Section */}
          <motion.div {...fadeIn} className="py-24 border-t border-border/10 mb-40">
             <div className="grid grid-cols-1 lg:grid-cols-[0.4fr_1fr] gap-12">
                <div className="space-y-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#ffcc01] italic">My Role</span>
                  <h2 className="text-4xl font-bold tracking-tight">UX Strategy & Experience Design</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   {[
                     "Understanding user workflows",
                     "Mapping user journeys",
                     "Structuring information architecture",
                     "Designing simplified interaction flows"
                   ].map((item, i) => (
                     <div key={i} className="flex gap-4 items-center p-6 bg-foreground/5 rounded-2xl border border-border/10 group hover:border-[#ffcc01]/30 transition-all">
                        <CheckCircle2 className="text-[#ffcc01]" size={20} />
                        <span className="text-md font-medium">{item}</span>
                     </div>
                   ))}
                </div>
             </div>
          </motion.div>

          {/* Approach Section */}
          <div className="space-y-12 mb-40">
            <motion.div {...fadeIn} className="max-w-xl">
               <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#ffcc01] italic">The Methodology</span>
               <h2 className="text-5xl font-black tracking-tight mt-4">UX Approach</h2>
               <p className="text-xl text-muted font-light mt-6">Transforming complex functionality into intuitive task-oriented systems.</p>
            </motion.div>

            <div className="grid grid-cols-1 gap-12">
              {approachSteps.map((step, idx) => (
                <motion.div 
                  key={idx}
                  {...fadeIn}
                  className="group p-12 bg-card border border-border/50 rounded-[48px] hover:border-[#ffcc01]/50 transition-all shadow-sm hover:shadow-2xl"
                >
                  <div className="flex flex-col lg:flex-row gap-12">
                    <div className="lg:w-1/3 space-y-6">
                       <div className="w-16 h-16 rounded-2xl bg-[#ffcc01] flex items-center justify-center text-black shadow-lg">
                          {step.icon}
                       </div>
                       <h3 className="text-3xl font-bold tracking-tight">{step.title}</h3>
                       <p className="text-muted leading-relaxed font-light">{step.desc}</p>
                       {step.principle && (
                         <div className="pt-4">
                           <span className="px-4 py-2 bg-[#ffcc01]/10 rounded-full text-[#ffcc01] text-[10px] font-black uppercase tracking-widest italic">👉 {step.principle}</span>
                         </div>
                       )}
                    </div>
                    
                    <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 lg:border-l lg:border-border/20 lg:pl-12">
                        {step.examples && step.examples.map((ex, i) => (
                          <div key={i} className="space-y-4">
                            <h4 className="text-xs font-black uppercase tracking-widest text-[#ffcc01] opacity-70 italic">{ex.platform}</h4>
                            <div className="space-y-2">
                              {ex.goals.map((goal, g) => (
                                <div key={g} className="flex gap-3 text-sm font-medium items-center py-2 px-4 bg-foreground/5 rounded-xl border border-border/10">
                                   <ArrowRight size={14} className="text-[#ffcc01]" /> {goal}
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                        
                        {step.iaStructures && step.iaStructures.map((ia, i) => (
                          <div key={i} className="space-y-4">
                            <h4 className="text-xs font-black uppercase tracking-widest text-[#ffcc01] opacity-70 italic">{ia.name}</h4>
                            <div className="flex flex-wrap gap-2">
                              {ia.structure.map((item, g) => (
                                <span key={g} className="px-4 py-2 bg-background border border-border/30 rounded-full text-xs font-bold tracking-tight group-hover:border-[#ffcc01]/40 transition-colors">
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}

                        {step.flows && step.flows.map((f, i) => (
                          <div key={i} className="space-y-4">
                            <h4 className="text-xs font-black uppercase tracking-widest text-[#ffcc01] opacity-70 italic">{f.name}</h4>
                            <div className="space-y-4">
                               {f.items.map((item, g) => (
                                 <div key={g} className="space-y-2">
                                    <span className="text-[10px] font-bold text-muted/60 uppercase tracking-widest">{item.label}</span>
                                    <div className="p-4 bg-background border border-border/30 rounded-2xl text-xs font-medium tracking-tight">
                                      {item.flow}
                                    </div>
                                 </div>
                               ))}
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Outcome & Skills Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 mb-40">
             <motion.div {...fadeIn} className="p-12 md:p-16 bg-[#ffcc01] rounded-[60px] text-black space-y-8 shadow-[0_30px_100px_rgba(255,204,1,0.2)]">
                <span className="text-[10px] font-black uppercase tracking-[0.5em] italic opacity-60">The Impact</span>
                <h2 className="text-5xl font-black tracking-tight leading-[0.9]">Outcome</h2>
                <div className="grid gap-6 mt-8">
                   {[
                     "Clear user intent pathways",
                     "Reduced cognitive load",
                     "Structured task-oriented flows"
                   ].map((item, i) => (
                     <div key={i} className="flex gap-4 items-center text-2xl font-bold tracking-tight">
                        <ArrowRight size={32} />
                        <span>{item}</span>
                     </div>
                   ))}
                </div>
                <p className="text-lg font-medium opacity-80 pt-8 border-t border-black/10">
                   This approach helps transform complex ecosystems into clear, guided user journeys.
                </p>
             </motion.div>

             <motion.div {...fadeIn} className="p-12 md:p-16 bg-card border border-border/50 rounded-[60px] space-y-12">
                <div className="space-y-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#ffcc01] italic">Expertise Leveraged</span>
                  <h2 className="text-4xl font-black tracking-tight">Skills Demonstrated</h2>
                </div>
                <div className="grid gap-4">
                   {[
                     "UX Research",
                     "Information Architecture",
                     "Workflow Design",
                     "Interaction Design",
                     "Product Experience Strategy",
                     "Ecosystem Thinking"
                   ].map((skill, i) => (
                     <div key={i} className="flex justify-between items-center py-4 border-b border-border/10 group">
                        <span className="text-xl font-bold tracking-tight group-hover:text-[#ffcc01] transition-colors">{skill}</span>
                        <div className="w-2 h-2 rounded-full bg-[#ffcc01]" />
                     </div>
                   ))}
                </div>
             </motion.div>
          </div>

          {/* Footer CTA */}
          <motion.div {...fadeIn} className="text-center py-20 border-t border-border/10 flex flex-col items-center gap-12">
             <h2 className="text-4xl md:text-6xl font-black tracking-tight max-w-2xl leading-none">Ready to clear the <span className="text-[#ffcc01]">fog</span> of your digital product?</h2>
             <Link href="/#contact" className="px-16 py-8 bg-[#ffcc01] text-black font-black uppercase tracking-[0.3em] text-xs hover:scale-110 active:scale-95 transition-all shadow-2xl rounded-full">
                Get in Touch
             </Link>
          </motion.div>

        </div>
      </main>
    </div>
  );
}
