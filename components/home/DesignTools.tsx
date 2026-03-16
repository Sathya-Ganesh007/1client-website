"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  Zap, 
  Share2, 
  PenTool,
  ExternalLink,
  ChevronRight
} from "lucide-react";

import Image from "next/image";
import { useTheme } from "next-themes";

const tools = [
  { 
    name: "Figma", 
    category: "Interface Design",
    description: "Cloud-based design tool for vector graphics and interface prototyping with real-time collaboration.", 
    iconPath: "/design tool/pngwing.com.png",
    proficiency: 98,
    type: "design"
  },

  { 
    name: "Illustrator", 
    category: "Vector Graphics",
    description: "The industry-standard vector graphics software for everything from logos to sophisticated illustrations.", 
    iconPath: "/design tool/pngwing.com (4).png",
    proficiency: 92,
    type: "design"
  },
  { 
    name: "Miro", 
    category: "Collaboration",
    description: "Visual workspace for innovative teams to facilitate workshops and strategic planning sessions.", 
    iconPath: "/design tool/pngwing.com (3).png",
    proficiency: 90,
    type: "discovery"
  },
  { 
    name: "Notion", 
    category: "Documentation",
    description: "Unified workspace for connected notes, wikis, and project management for design systems and research.", 
    iconPath: "/design tool/notion.png",
    proficiency: 96,
    type: "discovery"
  },
  { 
    name: "Framer", 
    category: "Web Building",
    description: "Next-generation design tool for building high-fidelity interactive sites with production-ready code.", 
    iconPath: "/design tool/framer.png",
    proficiency: 82,
    type: "design"
  },
  { 
    name: "Google Suite", 
    category: "Collaboration",
    description: "A suite of productivity and collaboration tools including Docs, Sheets, and Slides for streamlined workflows.", 
    iconPath: "/design tool/pngwing.com (7).png",
    proficiency: 95,
    type: "discovery"
  },
  { 
    name: "Webflow", 
    category: "Web Building",
    description: "Professional website builder that allows for designing, building, and launching responsive websites visually.", 
    iconPath: "/design tool/webflow logo blue .png",
    proficiency: 85,
    type: "design"
  },
  { 
    name: "Photoshop", 
    category: "Pixel Perfection",
    description: "The world's most advanced image editing and manipulation software for designers and photographers.", 
    iconPath: "/design tool/pngwing.com (1).png",
    proficiency: 95,
    type: "design"
  }
];

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const aiTools = [
  {
    name: "ChatGPT",
    category: "AI Writing & Ideation",
    description: "Used for copywriting, ideation, research summarization, and rapid content generation across projects.",
    proficiency: 97,
    color: "#10a37f",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
        <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.896zm16.597 3.855l-5.843-3.372L15.115 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.403-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
      </svg>
    )
  },
  {
    name: "Perplexity",
    category: "AI Research",
    description: "Real-time AI-powered research tool for brand audits, market research, and competitive benchmarking.",
    proficiency: 90,
    color: "#20808d",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
        <path d="M22.3736 8.22037H17.4447L21.5 4.28258V0H17.0796L12 4.9718L6.92038 0H2.5V4.28258L6.55534 8.22037H1.62639L0 9.82558V23.0465L1.62358 24H8.62586L12 21.7098L15.3741 24H22.3764L24 23.0465V9.82558L22.3736 8.22037ZM18.3156 1.36052V3.54412L16.1919 5.6278L14.0682 3.54412V1.36052H18.3156ZM5.68441 1.36052H9.93183V3.54412L7.80813 5.6278L5.68441 3.54412V1.36052ZM1.35817 22.6395V10.4955L2.07647 9.58089H11.3208V20.7547L8.37187 22.6395H1.35817ZM22.6418 22.6395H15.628L12.6791 20.7547V9.58089H21.9234L22.6418 10.4955V22.6395Z"/>
      </svg>
    )
  },
  {
    name: "Midjourney",
    category: "AI Image Generation",
    description: "AI art generation for mood boards, visual concepts, presentation assets, and brand imagery.",
    proficiency: 88,
    color: "#000000",
    icon: (
      <div className="relative w-10 h-10">
        <Image src="/mid jounry.png" alt="Midjourney" fill className="object-contain brightness-0 dark:brightness-100" />
      </div>
    )
  },
  {
    name: "Runway ML",
    category: "AI Video & Motion",
    description: "AI-powered video generation and editing for motion assets, presentations, and brand storytelling.",
    proficiency: 78,
    color: "#57068c",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
      </svg>
    )
  },
  {
    name: "Notion AI",
    category: "AI Productivity",
    description: "Embedded AI for drafting strategy documents, summarizing research notes, and accelerating content workflows.",
    proficiency: 95,
    color: "#000000",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 dark:invert">
        <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.14c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"/>
      </svg>
    )
  }
];

export default function DesignTools() {
  return (
    <div className="relative w-full py-0 space-y-0">
      {/* Visual background element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-transparent via-foreground/[0.01] to-transparent pointer-events-none" />

      {/* Design Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-0">
        {tools.map((tool, idx) => (
          <ToolCard key={idx} tool={tool} idx={idx} />
        ))}
        {/* And Many More Card */}
        <CardContainer className="inter-var w-full h-full">
          <CardBody className="group/card relative p-12 w-full h-full bg-card/60 backdrop-blur-sm border border-dashed border-border/50 rounded-none hover:border-[#ffcc01]/40 hover:bg-card/80 transition-all duration-500 hover:shadow-2xl shadow-sm flex flex-col justify-center items-center text-center space-y-6 min-h-[320px]">
            <CardItem translateZ={100} className="w-20 h-20 rounded-none bg-[#ffcc01]/10 flex items-center justify-center text-[#ffcc01]">
              <Share2 size={32} />
            </CardItem>
            <div className="space-y-3">
              <CardItem translateZ={80} as="h3" className="text-2xl font-bold tracking-tight">
                And Many More
              </CardItem>
              <CardItem translateZ={60} as="p" className="text-sm text-muted font-light px-4 leading-relaxed opacity-70">
                Photoshop, After Effects, Spline, Slack, Webflow, and various strategy & research frameworks.
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>

      {/* AI Tools Sub-section */}
      <div className="pt-20 mt-8 border-t border-border/10">
        <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div className="space-y-2">
            <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-[#ffcc01] block">AI-Powered</span>
            <h3 className="text-2xl md:text-4xl font-medium tracking-tight">Top AI Tools I Use</h3>
          </div>
          <p className="text-muted text-sm max-w-xs font-light opacity-60">Leveraging AI to accelerate strategy, design, and content workflows.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-8 gap-y-0">
          {aiTools.map((tool, idx) => (
            <CardContainer key={idx} className="inter-var w-full h-full">
              <CardBody className="group/card relative p-8 w-full h-auto bg-card/40 backdrop-blur-sm border border-border/40 rounded-none hover:border-[#ffcc01]/40 hover:bg-card/80 transition-all duration-500 hover:shadow-2xl shadow-sm">
                <div className="flex flex-col gap-6 h-full">
                  <div className="flex justify-between items-start">
                    <CardItem translateZ={120} className="w-16 h-16 rounded-none flex items-center justify-center" style={{ color: tool.color, background: `${tool.color}18` }}>
                      {tool.icon}
                    </CardItem>
                    <CardItem translateZ={50} className="px-3 py-1 bg-foreground/5 rounded-none border border-border/20">
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#ffcc01]">{tool.proficiency}%</span>
                    </CardItem>
                  </div>
                  <div className="space-y-2">
                    <CardItem translateZ={60} className="text-[9px] font-black uppercase tracking-[0.4em] text-muted/60 italic group-hover/card:text-[#ffcc01]/80 transition-colors">
                      {tool.category}
                    </CardItem>
                    <CardItem translateZ={80} as="h3" className="text-xl font-bold tracking-tight">{tool.name}</CardItem>
                    <CardItem translateZ={60} as="p" className="text-xs text-muted font-light leading-relaxed opacity-60 group-hover/card:opacity-100 transition-opacity">{tool.description}</CardItem>
                  </div>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </div>
  );
}

function ToolCard({ tool, idx }: { tool: any, idx: number }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";
  
  return (
    <CardContainer className="inter-var w-full h-full">
      <CardBody className="group/card relative p-12 w-full h-auto bg-card/60 backdrop-blur-sm border border-border/50 rounded-none hover:border-[#ffcc01]/40 hover:bg-card/80 transition-all duration-500 hover:shadow-2xl shadow-sm">
        <div className="relative z-20 flex flex-col justify-between h-full space-y-12">
          {/* Tool Icon & Badge */}
          <div className="flex justify-between items-start">
            <CardItem
              translateZ={180}
              className="w-24 h-24 flex items-center justify-center relative drop-shadow-[0_20px_30px_rgba(0,0,0,0.4)] group-hover/card:drop-shadow-[0_45px_45px_rgba(255,204,1,0.25)] transition-all duration-500"
            >
              <div className="relative w-full h-full p-2 bg-transparent text-foreground">
                <Image 
                  src={tool.iconPath} 
                  alt={tool.name} 
                  fill 
                  className={`object-contain transition-all duration-300 ${(tool.name === 'Photoshop' || tool.name === 'Notion' || tool.name === 'Framer') && isDark ? 'invert brightness-200' : ''}`} 
                  priority
                  quality={100}
                />
              </div>
            </CardItem>
            <CardItem
              translateZ={50}
              className="px-4 py-1.5 bg-foreground/5 rounded-none border border-border/20 backdrop-blur-md"
            >
               <span className="text-[10px] font-black uppercase tracking-widest text-[#ffcc01]">{tool.proficiency}%</span>
            </CardItem>
          </div>

          {/* Information */}
          <div className="space-y-4">
            <CardItem
              translateZ={60}
              className="text-[10px] font-black uppercase tracking-[0.4em] text-muted/60 italic group-hover/card:text-[#ffcc01]/80 transition-colors"
            >
              {tool.category}
            </CardItem>
            <CardItem
              translateZ={100}
              as="h3"
              className="text-3xl font-bold tracking-tight"
            >
              {tool.name}
            </CardItem>
            <CardItem
              translateZ={80}
              as="p"
              className="text-sm text-muted font-light leading-relaxed opacity-70 group-hover/card:opacity-100 transition-opacity"
            >
              {tool.description}
            </CardItem>
          </div>

          {/* Bottom Decoration */}
          <CardItem
            translateZ={40}
            className="flex items-center gap-2 group-hover/card:gap-4 transition-all pt-4 w-full"
          >
            <div className="h-[1px] flex-grow bg-border/20 group-hover/card:bg-[#ffcc01]/20 transition-colors" />
            <ChevronRight size={16} className="text-muted/20 group-hover/card:text-[#ffcc01] transition-colors" />
          </CardItem>
        </div>

        {/* Subtle Gradient Glow */}
        <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-[#ffcc01]/5 blur-[40px] rounded-full group-hover/card:bg-[#ffcc01]/10 transition-colors pointer-events-none" />
      </CardBody>
    </CardContainer>
  );
}
