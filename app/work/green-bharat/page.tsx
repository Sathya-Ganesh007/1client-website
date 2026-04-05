import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

type Stage = {
  title: string;
  bullets: string[];
};

type Phase = {
  title: string;
  desc?: string | string[];
  stages: Stage[];
  afterStages?: string | string[];
};

const phases: Phase[] = [
  {
    title: "The Work",
    desc: "I operate across the brand at a structural level.",
    stages: [
      {
        title: "",
        bullets: [
          "Built the foundational positioning, voice, and narrative system",
          "Aligned founder vision with how the brand shows up across touchpoints",
          "Structured communication around sustainability, scale, and credibility",
          "Ensured consistency across digital, on-ground, and stakeholder interactions",
        ],
      },
    ],
  },
  {
    title: "Marketing & Execution Alignment",
    desc: [
      "As the business entered its marketing phase, my role expanded into execution control.",
      "I lead brand alignment across all outputs created in collaboration with Ninaad Films — responsible for social media, documentaries, and lead generation.",
      "The challenge: Execution was happening, but without a structured brand system.",
      "My role is to bring that structure.",
    ],
    stages: [
      {
        title: "",
        bullets: [
          "Define what should be communicated and why",
          "Guide tone, visual direction, and narrative consistency",
          "Ensure outputs align with long-term brand positioning",
          "Prevent fragmentation across channels and formats",
        ],
      },
    ],
  },
  {
    title: "A Real Intervention",
    desc: [
      "Early social media creatives treated WinWin Infra (parent brand) and Green Bharat as interchangeable.",
      "This created confusion in brand identity, tone, and visual language.",
      "The output leaned toward:",
    ],
    stages: [
      {
        title: "",
        bullets: [
          "Generic layouts",
          "Inconsistent color usage (blue-heavy vs brand green)",
          "Outdated typography",
          "Parent brand overshadowing the actual product brand",
        ],
      },
    ],
  },
  {
    title: "What I Changed",
    desc: "I restructured how the brand is represented in execution.",
    stages: [
      {
        title: "",
        bullets: [
          "Positioned WinWin as a credibility layer, not the primary identity",
          "Reinforced Green Bharat as the main brand voice and visual system",
          "Shifted color language to a consistent green-led palette",
          "Introduced more modern, minimal typography",
          "Simplified layouts to focus on clarity and hierarchy",
        ],
      },
    ],
    afterStages: [
      "The difference is visible:",
      "From scattered, template-driven creatives → to structured, brand-aligned communication",
    ],
  },
  {
    title: "What I Focus On",
    stages: [
      {
        title: "",
        bullets: [
          "Clarity over noise",
          "Structure over decoration",
          "Consistency over campaigns",
        ],
      },
    ],
    afterStages:
      "The goal is to make the brand behave as strongly as the business performs.",
  },
  {
    title: "The Reality",
    desc: "Green Bharat operates at scale:",
    stages: [
      {
        title: "",
        bullets: [
          "100+ acres",
          "8000+ trees",
          "₹5Cr+ revenue within 2 years",
        ],
      },
    ],
    afterStages: "The challenge was never capability. It was perception.",
  },
  {
    title: "My Approach",
    desc: 'Instead of "branding the farm," I focused on structuring the business narrative.',
    stages: [
      {
        title: "",
        bullets: [
          'From "organic farm" → structured agro-enterprise',
          "From inconsistent creatives → system-driven communication",
          "From visual identity → brand behavior",
        ],
      },
    ],
  },
  {
    title: "What This Represents",
    desc: [
      "This work reflects how I operate.",
      "I don't treat brand as a layer.",
      "I treat it as a system that connects:",
    ],
    stages: [
      {
        title: "",
        bullets: ["Business intent", "Operational reality", "Market perception"],
      },
    ],
  },
];

function renderDesc(desc: string | string[] | undefined) {
  if (!desc) return null;
  const parts = Array.isArray(desc) ? desc : [desc];
  return parts.map((text, i) => (
    <p
      key={i}
      className="text-lg md:text-xl text-foreground/70 font-light italic border-l-2 border-[#ffcc01]/50 pl-5 ml-1 md:ml-0 md:pl-6 py-1"
    >
      {text}
    </p>
  ));
}

function renderAfterStages(after: string | string[] | undefined) {
  if (!after) return null;
  const parts = Array.isArray(after) ? after : [after];
  return parts.map((text, i) => (
    <p
      key={i}
      className="text-lg md:text-xl text-foreground/70 font-light italic border-l-2 border-[#ffcc01]/50 pl-5 ml-1 md:ml-0 md:pl-6 py-1 mt-6"
    >
      {text}
    </p>
  ));
}

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
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">Green Bharat <span className="text-[#ffcc01]">.</span></h1>
            <p className="text-xl md:text-2xl text-foreground/70 font-light leading-relaxed max-w-3xl">
              Brand Direction, Stewardship & Marketing Alignment
            </p>
            <p className="text-xl md:text-2xl text-foreground/70 font-light leading-relaxed max-w-3xl">
              Green Bharat is a growing agro-business built on scale, legacy, and long-term intent.
              My role is to ensure the brand reflects that reality — clearly, consistently, and as it evolves.
            </p>
          </div>
        </div>

        {/* Hero Image */}
        <div className="aspect-video md:aspect-[21/9] relative rounded-[40px] overflow-hidden shadow-2xl border border-border/50">
          <Image src="/GreenBharat.png" alt="Green Bharat" fill className="object-cover" priority />
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
                  <div className="space-y-4">{renderDesc(phase.desc)}</div>
                </div>

                <div className="grid grid-cols-1 gap-8">
                  {phase.stages.map((stage, sIdx) => (
                    <div key={sIdx} className="p-8 md:p-12 bg-card border border-border/50 rounded-[40px] hover:border-[#ffcc01]/50 transition-all shadow-sm hover:shadow-xl space-y-6 group">
                      {stage.title.trim() ? (
                        <div className="flex gap-4 items-start">
                          <h3 className="text-2xl font-bold leading-tight group-hover:text-[#ffcc01] transition-colors">{stage.title}</h3>
                        </div>
                      ) : null}
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

                {renderAfterStages(phase.afterStages)}
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
              WHAT I BRING TO THE TABLE <ArrowLeft size={18} className="rotate-135 group-hover:rotate-180 transition-transform" />
            </Link>
        </div>

      </div>
    </div>
  );
}
