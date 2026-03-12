import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

const phases = [
  {
    title: "FOUNDATIONAL STRATEGY",
    desc: " Before we start working on the visuals or the website we need to do some research.",
    stages: [
      {
        title: "Brand Audit and Context Mapping",
        bullets: [
          "Let's find out who Green Bharat really is.",
          "Is Green Bharat an agro project, an asset platform or a regenerative movement?",
          "Who is the buyer of Green Bharat? Is it the Non-Resident Indian, the ESG investor, the urban wealth builder or the farmer-partner?",
          "We will create a Brand Clarity Document that includes the positioning, audience and promise of Green Bharat."
        ]
      },
      {
        title: "Market and Competitor Intelligence",
        bullets: [
          "We will study agro-investment brands, real estate farm plot sellers and ESG-driven platforms.",
          "We want to know their tone, promises and weaknesses.",
          "We will not copy them. We will position Green Bharat opposite to them."
        ]
      },
      {
    
        title: "Brand Positioning Framework",
        bullets: [
          "For Green Bharat we suggest the following: Category: Structured Agro-Asset Platform (Not 'farm plots for sale').",
          "Core Axis: Wealth, Ecology, Legacy.",
          "We will create a Brand Positioning Pyramid and a Messaging Architecture for Green Bharat."
        ]
      }
    ]
  },
  {
    title: "BRAND IDENTITY SYSTEM",
    desc: "Now we will start designing the brand identity for Green Bharat.",
    stages: [
      {
      
        title: "Brand Voice",
        bullets: [
          "The tone of Green Bharat should be authority, educated optimism and structured clarity.",
          "No Screaming, just stating the facts."
        ]
      },
      {
       
        title: "Visual Identity System",
        bullets: [
          "We need a premium and earth-toned color palette, strong typography and an icon system that includes trees, yield, asset and soil.",
          "We will also use drone imagery for the aesthetic.",
          "We will create a Logo system, Typography guide, Color system and Brand usage manual for Green Bharat."
        ]
      },
      {
       
        title: "Value Proposition Framework",
        bullets: [
          "We have three pillars for Green Bharat:",
          "Ecological Return",
          "Financial Return",
          "Community Return",
          "Each pillar must have proof, not poetic claims."
        ]
      }
    ]
  },
  {
    title: "WEBSITE ARCHITECTURE",
    desc: "Now we will build the website for Green Bharat.",
    stages: [
      {
        title: "Information Architecture",
        bullets: [
          "The structure of the website should be:",
          "Hero – Clear Positioning",
          "The Problem – Why urban investors distrust agri",
          "The System – Agroforestry model",
          "Asset Models – Mango / Sandalwood",
          "Proof – Acres, turnover, trees",
          "Transparency – Compliance",
          "Visit / Invest CTA, Impact Section, Founder Vision",
          "Every section should answer a doubt."
        ]
      },
      {
        title: "Framer Build Execution",
        bullets: [
          "We will use motion subtly to give an eco-premium feel.",
          "We will add scroll-based storytelling, data blocks and a drone video hero.",
          "The website should feel modern, institutional and calm not rustic or like a brochure."
        ]
      }
    ]
  },
  {
    title: "SALES & CONVERSION SYSTEM",
    desc: "Now we will monetize the attention for Green Bharat.",
    stages: [
      {
        title: "Lead Funnel",
        bullets: [
          "The funnel should be: Reel → Website → Report Download → Call → Farm Visit → Close",
          "We will create a 'Green Asset Report 2026' and a 10-Year Yield Model PDF.",
          "We will also have a webinar funnel.",
          "We are not selling land we are selling structured compounding for Green Bharat."
        ]
      }
    ]
  },
  {
    title: "VIDEO MARKETING ENGINE",
    desc: "Now we will build a content engine for Green Bharat.",
    stages: [
      {
        title: "Content Buckets",
        bullets: [
          "Myth Busting, System Education, Transparency, Emotional",
          "The short form structure should have: Hook (0-3 sec), Problem, Insight, CTA",
          "It should be clean, sharp and 30–45 seconds long."
        ]
      }
    ]
  },
  {
    title: "TRUST MULTIPLIER",
    desc: "Trust compounds like trees for Green Bharat.",
    stages: [
      {
        title: "Growth & Consistency",
        bullets: [
          "We will have growth reports, farm events and an impact dashboard.",
          "We will also have PR in sustainability publications."
        ]
      }
    ]
  },
  {
    title: "SCALE SYSTEM",
    desc: "Once the organic system works we will scale.",
    stages: [
      {
        title: "Paid Acquisition",
        bullets: [
          "We will use paid YouTube ads LinkedIn targeting HNIs and NRI webinar funnel.",
          "We will also have ESG positioning, for Green Bharat."
        ]
      }
    ]
  }
];

export default function GreenBharatPage() {
  return (
    <div className="min-h-screen bg-background text-foreground py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1000px] mx-auto space-y-24">
        
        {/* Header */}
        <div className="space-y-8">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#ffcc01] hover:text-[#e6b800] transition-colors">
            <ArrowLeft size={16} /> Back to Projects
          </Link>
          <div className="space-y-6">
            <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-muted block">Complete Brand System</span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">Green Bharat <span className="text-[#ffcc01]">.</span></h1>
            <p className="text-xl md:text-2xl text-foreground/70 font-light leading-relaxed max-w-3xl">
              We are going to create this system from the beginning. This is our 12-Stage Ecosystem Roadmap for Green Bharat.
            </p>
          </div>
        </div>

        {/* Hero Image */}
        <div className="aspect-video md:aspect-[21/9] relative rounded-[40px] overflow-hidden shadow-2xl border border-border/50">
          <Image src="/GreenBharat.png" alt="Green Bharat Roadmap" fill className="object-cover" priority />
        </div>

        {/* Roadmap Content */}
        <div className="space-y-24 relative">
          {/* Vertical line connecting phases */}
          <div className="absolute left-8 top-12 bottom-0 w-px bg-border/20 hidden md:block"></div>

          {phases.map((phase, idx) => (
            <div key={idx} className="relative z-10 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 md:gap-16">
              
              {/* Phase Marker */}
              <div className="hidden md:flex flex-col items-center mt-2">
                <div className="w-16 h-16 rounded-full bg-card border-[3px] border-[#ffcc01] flex items-center justify-center text-[#ffcc01] font-bold text-2xl shadow-lg z-10">
                  {idx + 1}
                </div>
              </div>

              {/* Phase Content */}
              <div className="space-y-12">
                <div className="space-y-4 pt-2">
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#ffcc01] flex items-center gap-4">
                    <span className="md:hidden text-[#ffcc01]">{idx + 1}.</span> {phase.title}
                  </h2>
                  <p className="text-lg md:text-xl text-foreground/70 font-light italic border-l-2 border-[#ffcc01]/50 pl-5 ml-1 md:ml-0 md:pl-6 py-1">{phase.desc}</p>
                </div>

                <div className="grid grid-cols-1 gap-8">
                  {phase.stages.map((stage, sIdx) => (
                    <div key={sIdx} className="p-8 md:p-12 bg-card border border-border/50 rounded-[40px] hover:border-[#ffcc01]/50 transition-all shadow-sm hover:shadow-xl space-y-6 group">
                      <div className="flex gap-4 items-start">
                        <h3 className="text-2xl font-bold leading-tight group-hover:text-[#ffcc01] transition-colors">{stage.title}</h3>
                      </div>
                      <ul className="space-y-5 pl-0 md:pl-[52px]">
                        {stage.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex gap-4 text-muted items-start">
                            <CheckCircle2 className="w-6 h-6 text-[#ffcc01] shrink-0 mt-0.5" />
                            <p className="text-lg font-light leading-relaxed">{bullet}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
        
        {/* Brand Architecture SVG Image */}
        <div className="pt-12 pb-16">
          <div className="relative rounded-[40px] overflow-hidden shadow-2xl border border-border/50 bg-[#000000] p-4 flex justify-center">
            <Image 
              src="/GreenBharat - Brand Identity Concept.svg" 
              alt="Green Bharat Brand Architecture Roadmap" 
              width={1200} 
              height={800} 
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Footer CTA */}
        <div className="pt-16 pb-16 border-t border-border/30 text-center space-y-10 flex flex-col items-center">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Ready to build your ecosystem?</h2>
            <Link href="/#contact" className="inline-flex items-center gap-4 text-sm font-black uppercase tracking-[0.2em] text-black bg-[#ffcc01] hover:bg-[#e6b800] px-12 py-6 rounded-full transition-all hover:scale-105 active:scale-95 shadow-xl w-fit group">
              Start a Conversation <ArrowLeft size={18} className="rotate-135 group-hover:rotate-180 transition-transform" />
            </Link>
        </div>

      </div>
    </div>
  );
}
