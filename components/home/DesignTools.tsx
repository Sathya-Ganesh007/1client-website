"use client";

import { motion } from "framer-motion";
import { 
  Zap, 
  Share2, 
  PenTool,
  ExternalLink,
  ChevronRight
} from "lucide-react";

import Image from "next/image";

const tools = [
  { 
    name: "Figma", 
    category: "Interface Design",
    description: "Cloud-based design tool for vector graphics and interface prototyping with real-time collaboration.", 
    iconPath: "/myself/pngwing.com.png",
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
    iconPath: "/myself/notion.png",
    proficiency: 96,
    type: "discovery"
  },
  { 
    name: "Framer", 
    category: "Web Building",
    description: "Next-generation design tool for building high-fidelity interactive sites with production-ready code.", 
    iconPath: "/myself/framer.png",
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
  }
];

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export default function DesignTools() {
  return (
    <div className="relative w-full py-0">
      {/* Visual background element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-transparent via-foreground/[0.01] to-transparent pointer-events-none" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-0">
        {tools.map((tool, idx) => (
          <ToolCard key={idx} tool={tool} idx={idx} />
        ))}
        {/* And Many More Card */}
        <CardContainer className="inter-var w-full h-full">
          <CardBody className="group/card relative p-12 w-full h-full bg-card/60 backdrop-blur-sm border border-dashed border-border/50 rounded-[48px] hover:border-[#ffcc01]/40 hover:bg-card/80 transition-all duration-500 hover:shadow-2xl shadow-sm flex flex-col justify-center items-center text-center space-y-6 min-h-[320px]">
            <CardItem translateZ={100} className="w-20 h-20 rounded-full bg-[#ffcc01]/10 flex items-center justify-center text-[#ffcc01]">
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
    </div>
  );
}

function ToolCard({ tool, idx }: { tool: any, idx: number }) {
  return (
    <CardContainer className="inter-var w-full h-full">
      <CardBody className="group/card relative p-12 w-full h-auto bg-card/60 backdrop-blur-sm border border-border/50 rounded-[48px] hover:border-[#ffcc01]/40 hover:bg-card/80 transition-all duration-500 hover:shadow-2xl shadow-sm">
        <div className="relative z-20 flex flex-col justify-between h-full space-y-12">
          {/* Tool Icon & Badge */}
          <div className="flex justify-between items-start">
            <CardItem
              translateZ={180}
              className="w-24 h-24 flex items-center justify-center relative drop-shadow-[0_20px_30px_rgba(0,0,0,0.4)] group-hover/card:drop-shadow-[0_45px_45px_rgba(255,204,1,0.25)] transition-all duration-500"
            >
              <div className="relative w-full h-full p-2 bg-transparent">
                <Image 
                  src={tool.iconPath} 
                  alt={tool.name} 
                  fill 
                  className="object-contain" 
                  priority
                  quality={100}
                />
              </div>
            </CardItem>
            <CardItem
              translateZ={50}
              className="px-4 py-1.5 bg-foreground/5 rounded-full border border-border/20 backdrop-blur-md"
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
