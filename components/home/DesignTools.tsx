"use client";

import { motion } from "framer-motion";
import { 
  Zap, 
  Share2, 
  PenTool,
  ExternalLink,
  ChevronRight
} from "lucide-react";

// Precise Brand SVGs for a premium professional look
const FigmaIcon = () => (
  <svg width="34" height="50" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38H19V28.5Z" fill="#1ABCFE"/>
    <path d="M0 47.5C0 42.2533 4.2533 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.2533 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
    <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.2533 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
    <path d="M0 9.5C0 14.7467 4.2533 19 9.5 19H19V0H9.5C4.2533 0 0 4.2533 0 9.5Z" fill="#F24E1E"/>
    <path d="M0 28.5C0 33.7467 4.2533 38 9.5 38H19V19H9.5C4.2533 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
  </svg>
);

const AdobeXDIcon = () => (
  <svg width="40" height="40" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="256" height="256" rx="40" fill="#470137"/>
    <path d="M91.8 174.4L64.4 121.2L36.8 174.4H15.2L53.4 100.2L18.4 34H40.2L64.4 83.2L88.4 34H110.2L75.4 100.2L113.6 174.4H91.8ZM185.8 174.4C165.4 174.4 149.6 163.6 141.2 144.2L140.2 142.4V174.4H122.4V34H140.2V88.8L141.2 91C149.6 71.6 165.4 60.8 185.8 60.8C218.4 60.8 240.2 86 240.2 117.6C240.2 149.2 218.4 174.4 185.8 174.4ZM181.2 156.4C201.2 156.4 218.4 141.4 218.4 117.6C218.4 93.8 201.2 78.8 181.2 78.8C161.2 78.8 144 93.8 144 117.6C144 141.4 161.2 156.4 181.2 156.4Z" fill="#FF61F6"/>
  </svg>
);

const NotionIcon = () => (
  <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 6C10 4.89543 10.8954 4 12 4H36C37.1046 4 38 4.89543 38 6V42C38 43.1046 37.1046 44 36 44H12C10.8954 44 10 43.1046 10 42V6Z" fill="white"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M14 10H34V38H14V10ZM18 14V34H30V14H18Z" fill="black"/>
    <path d="M18 14L22 14V18L18 18V14Z" fill="black"/>
  </svg>
);

const tools = [
  { 
    name: "Figma", 
    category: "Interface Design",
    description: "Cloud-based design tool for vector graphics and interface prototyping with real-time collaboration.", 
    icon: <FigmaIcon />,
    proficiency: 98
  },
  { 
    name: "Adobe XD", 
    category: "Prototyping",
    description: "Powerful vector-based experience design tool for web and mobile app wireframing and interactions.", 
    icon: <AdobeXDIcon />,
    proficiency: 88
  },
  { 
    name: "Illustrator", 
    category: "Vector Graphics",
    description: "The industry-standard vector graphics software for everything from logos to sophisticated illustrations.", 
    icon: <PenTool className="w-10 h-10 text-[#FF9A00]" />,
    proficiency: 92
  },
  { 
    name: "Miro", 
    category: "Collaboration",
    description: "Visual workspace for innovative teams to facilitate workshops and strategic planning sessions.", 
    icon: <Share2 className="w-10 h-10 text-[#0500FF]" />,
    proficiency: 90
  },
  { 
    name: "Notion", 
    category: "Documentation",
    description: "Unified workspace for connected notes, wikis, and project management for design systems and research.", 
    icon: <NotionIcon />,
    proficiency: 96
  },
  { 
    name: "Framer", 
    category: "Web Building",
    description: "Next-generation design tool for building high-fidelity interactive sites with production-ready code.", 
    icon: <Zap className="w-10 h-10 text-[#0055FF]" />,
    proficiency: 82
  }
];

export default function DesignTools() {
  return (
    <div className="relative w-full py-20 px-4 md:px-0">
      {/* Visual background element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-transparent via-foreground/[0.01] to-transparent pointer-events-none" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
        {tools.map((tool, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08, duration: 0.5 }}
            className="group relative p-8 lg:p-10 bg-card/60 backdrop-blur-sm border border-border/50 rounded-[48px] hover:border-[#ffcc01]/40 hover:bg-card/80 transition-all duration-500 hover:shadow-2xl"
          >
            <div className="relative z-10 flex flex-col justify-between h-full space-y-8">
              {/* Tool Icon & Badge */}
              <div className="flex justify-between items-start">
                <div className="w-20 h-20 rounded-3xl bg-background/50 border border-border/30 flex items-center justify-center group-hover:bg-[#ffcc01]/10 group-hover:scale-105 transition-all duration-500 shadow-sm">
                  {tool.icon}
                </div>
                <div className="px-3 py-1 bg-foreground/5 rounded-full border border-border/20">
                   <span className="text-[9px] font-black uppercase tracking-widest text-muted/60">{tool.proficiency}%</span>
                </div>
              </div>

              {/* Information */}
              <div className="space-y-3">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#ffcc01]/80 italic">
                  {tool.category}
                </span>
                <h3 className="text-3xl font-bold tracking-tight group-hover:translate-x-1 transition-transform">{tool.name}</h3>
                <p className="text-sm text-muted font-light leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">
                  {tool.description}
                </p>
              </div>

              {/* Bottom Decoration */}
              <div className="flex items-center gap-2 group-hover:gap-4 transition-all pt-4">
                <div className="h-[1px] flex-grow bg-border/20 group-hover:bg-[#ffcc01]/20 transition-colors" />
                <ChevronRight size={16} className="text-muted/20 group-hover:text-[#ffcc01] transition-colors" />
              </div>
            </div>

            {/* Subtle Gradient Glow */}
            <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-[#ffcc01]/5 blur-[40px] rounded-full group-hover:bg-[#ffcc01]/10 transition-colors pointer-events-none" />
          </motion.div>
        ))}

      </div>
    </div>
  );
}
