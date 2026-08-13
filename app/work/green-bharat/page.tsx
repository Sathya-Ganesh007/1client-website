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

const tags = [
  "Brand Strategy",
  "Brand Management",
  "Marketing",
  "Communication",
  "Stakeholder Alignment",
];

const phases: Phase[] = [
  {
    title: "The Context",
    desc: [
      "Green Bharat had the scale and substance of an established agro-business, but its communication did not consistently reflect that reality.",
      "The brand was evolving alongside its business, while Green Bharat and its parent entity, WinWin Infra, were often being communicated too closely.",
      "The opportunity was to create greater clarity — not just in how the brand looked, but in how the business was understood.",
    ],
    stages: [],
  },
  {
    title: "My Role",
    desc: "I work across three connected layers:",
    stages: [
      {
        title: "Consult",
        bullets: [
          "Understand the business, founder vision, market context and stakeholder expectations.",
        ],
      },
      {
        title: "Strategise",
        bullets: [
          "Define positioning, narrative, communication systems and the role each brand should play.",
        ],
      },
      {
        title: "Manage",
        bullets: [
          "Align internal teams, creative partners and external agencies to carry the strategy into execution.",
        ],
      },
    ],
  },
  {
    title: "01 — Building the Brand Foundation",
    desc: "The first phase focused on creating a clearer strategic foundation for Green Bharat.",
    stages: [
      {
        title: "",
        bullets: [
          "Defined positioning, value proposition and brand narrative.",
          "Structured communication around scale, sustainability and credibility.",
          "Aligned founder vision with the way the brand communicates.",
          "Established clearer boundaries between Green Bharat and WinWin Infra.",
          "Translated business complexity into a more coherent market narrative.",
        ],
      },
    ],
    afterStages:
      "The shift was from treating Green Bharat as an agricultural venture to presenting it as a structured agro-enterprise with scale, credibility and long-term intent.",
  },
  {
    title: "02 — Creating Brand Architecture",
    desc: "One of the key interventions was clarifying the relationship between the two entities.",
    stages: [
      {
        title: "Before",
        bullets: [
          "WinWin Infra and Green Bharat were often treated as interchangeable across communication.",
          "Confused brand hierarchy",
          "Inconsistent visual language",
          "Overlapping narratives",
          "The parent brand overshadowing Green Bharat",
        ],
      },
      {
        title: "After",
        bullets: [
          "WinWin Infra became a credibility layer, while Green Bharat took ownership of its own voice, visual identity and market communication.",
          "This created a clearer relationship between the parent organisation and the operating brand.",
        ],
      },
    ],
  },
  {
    title: "03 — From Strategy to Marketing",
    desc: [
      "As Green Bharat entered a more active marketing phase, my role expanded from strategy into ongoing brand management.",
      "I now work across:",
    ],
    stages: [
      {
        title: "",
        bullets: [
          "Social media and content",
          "Digital communication",
          "Creative direction",
          "Marketing alignment",
          "Stakeholder communication",
          "Lead-generation initiatives",
        ],
      },
    ],
    afterStages: [
      "I coordinate the Moggly team and Ninad Films across design, development, content and production — ensuring that individual outputs remain connected to the larger brand strategy.",
      "The objective is not to approve creatives one by one.",
      "It is to create a system where everyone understands:",
      "What are we communicating?",
      "Why are we communicating it?",
      "Who are we communicating it to?",
      "And how should Green Bharat behave as a brand?",
    ],
  },
  {
    title: "04 — Content That Connects to Business",
    desc: [
      "The marketing challenge was not simply increasing content output.",
      "It was making communication more relevant to the right audience.",
      "By refining content themes, messaging and creative direction around target audiences, the marketing system contributed to:",
    ],
    stages: [
      {
        title: "",
        bullets: [
          "25–35% MoM growth in inbound leads",
          "30–40% improvement in lead-generation efficiency.",
        ],
      },
    ],
    afterStages: [
      "The role of design here is not decoration.",
      "It is helping the business communicate the right proposition to the right audience with greater clarity.",
    ],
  },
  {
    title: "05 — Investor Communication",
    desc: [
      "The engagement has also expanded into business-critical communication.",
      "I currently bridge Green Bharat and 3Minds Digital on strategic initiatives, including the development of the narrative and pitch deck for a ₹30 Cr fundraising initiative.",
      "My role is to translate complex business, operational and investment propositions into a clear investor-facing story — aligning:",
      "Business reality → Strategic narrative → Investor communication → Presentation",
      "This requires understanding the business beyond its brand layer.",
    ],
    stages: [],
  },
  {
    title: "06 — Managing the Ecosystem",
    desc: [
      "Green Bharat's communication now involves multiple stakeholders and specialist partners.",
      "My role sits between them.",
    ],
    stages: [
      {
        title: "Leadership",
        bullets: ["Business vision, priorities & decisions"],
      },
      {
        title: "Strategy",
        bullets: ["Positioning, narrative & communication direction"],
      },
      {
        title: "Creative Partners",
        bullets: ["Moggly · Ninad Films · 3Minds Digital"],
      },
      {
        title: "Execution",
        bullets: ["Content · Design · Digital · Pitch · Marketing"],
      },
      {
        title: "Market",
        bullets: ["Audience · Stakeholders · Investors · Customers"],
      },
    ],
    afterStages: "My responsibility is to keep these layers aligned.",
  },
  {
    title: "The Shift",
    stages: [
      {
        title: "From",
        bullets: ["A collection of agricultural businesses and communication outputs."],
      },
      {
        title: "To",
        bullets: [
          "A clearer brand ecosystem with a defined narrative, structured communication and coordinated execution.",
        ],
      },
      {
        title: "From",
        bullets: ["Branding as visual identity."],
      },
      {
        title: "To",
        bullets: [
          "Brand as a system connecting:",
          "Business intent → Strategy → Communication → Experience → Market perception",
        ],
      },
    ],
  },
  {
    title: "What This Project Represents",
    desc: [
      "Green Bharat reflects how I work.",
      "I don't enter a business only to create its identity or communication.",
      "I work to understand the business, identify what needs to change, create the strategic direction, and then manage the ecosystem required to make that direction real.",
      "Consult. Strategise. Manage.",
      "That's the role I continue to play as Green Bharat evolves.",
    ],
    stages: [],
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
              From brand positioning to marketing stewardship.
            </p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-foreground/5 rounded-none"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-xl md:text-2xl text-foreground/70 font-light leading-relaxed max-w-3xl">
              Green Bharat is a growing agro-forestry platform built on scale, legacy and long-term intent. My engagement began with defining how the business should be positioned and has evolved into managing how that strategy translates into marketing, communication and business-facing initiatives.
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
        
        {/* Brand Architecture Roadmap */}
        <div className="pt-12 pb-16">
          <div className="relative rounded-[40px] overflow-hidden shadow-2xl border border-border/50 bg-[#000000] p-4">
            <div
              data-lenis-prevent
              data-lenis-prevent-wheel
              data-lenis-prevent-touch
              className="w-full overflow-y-auto overflow-x-hidden overscroll-contain rounded-[12px]"
              style={{ height: "600px" }}
            >
              <Image
                src="/pdf/GreenBharat - Brand Identity Concept.svg"
                alt="Green Bharat Brand Architecture Roadmap"
                width={1200}
                height={800}
                className="w-full h-auto"
                unoptimized
              />
            </div>
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
