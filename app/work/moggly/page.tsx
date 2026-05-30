import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, CheckCircle2, Target, Lightbulb, ShieldCheck, Megaphone } from 'lucide-react';
import Navbar from "@/components/home/Navbar";

const projects = [
  {
    title: "Brand Consulting",
    icon: <Target className="w-6 h-6" />,
    context: "At MOGGLY India, I worked with businesses across B2B, B2C, SaaS, and FMCG sectors that were either launching new products or struggling with unclear brand positioning. Many organizations had strong products but lacked clear differentiation, brand narrative, and structured market positioning.",
    approach: [
      {
        title: "Business & Market Discovery",
        desc: "Understanding the business model, industry dynamics, and competitive landscape."
      },
      {
        title: "Customer Insight Analysis",
        desc: "Mapping customer expectations, motivations, and behavioral patterns."
      },
      {
        title: "Brand Positioning Framework",
        desc: "Defining core elements including brand purpose, value proposition, differentiation strategy, and audience segments."
      },
      {
        title: "Strategic Direction",
        desc: "Developing strategic recommendations to guide brand growth and communication."
      }
    ],
    impact: [
      "Clear positioning for emerging businesses",
      "Improved clarity in product communication",
      "Strategic alignment between business goals and brand perception"
    ],
    capabilities: ["Brand Consulting", "Market Research", "Strategic Positioning", "Customer Insight Analysis"]
  },
  {
    title: "Brand Strategy",
    icon: <Lightbulb className="w-6 h-6" />,
    context: "Across several projects at MOGGLY, organizations required more than just visual identity—they needed a structured strategy that connects business objectives with brand perception. This was particularly important for SaaS platforms and B2B services, where differentiation depends on clarity of value and trust.",
    approach: [
      {
        title: "Competitive Landscape Mapping",
        desc: "Analyzing how competitors communicate value."
      },
      {
        title: "Audience Segmentation",
        desc: "Identifying key customer groups and their expectations."
      },
      {
        title: "Brand Architecture Development",
        desc: "Defined systems such as brand positioning statements, messaging frameworks, and value narratives."
      },
      {
        title: "Strategic Alignment",
        desc: "Ensuring the brand strategy supports product roadmap, marketing communication, and user experience."
      }
    ],
    impact: [
      "Stronger differentiation in competitive markets",
      "Clear messaging for digital platforms",
      "Better alignment between product, marketing, and brand strategy"
    ],
    capabilities: ["Brand Strategy", "Positioning Frameworks", "Competitive Analysis", "Strategic Narrative Development"]
  },
  {
    title: "Brand Management",
    icon: <ShieldCheck className="w-6 h-6" />,
    context: "As brands grow, maintaining consistent identity and communication across channels becomes challenging. Several organizations required support in managing their brand presence across digital platforms, product experiences, and marketing communications.",
    approach: [
      {
        title: "Brand System Development",
        desc: "Creation of structured systems including visual identity guidelines, tone-of-voice frameworks, and communication structures."
      },
      {
        title: "Cross-Channel Consistency",
        desc: "Ensuring brand presence across websites, product interfaces, marketing materials, and digital platforms."
      },
      {
        title: "Internal Alignment",
        desc: "Working with leadership and internal teams to ensure brand strategy is consistently implemented."
      }
    ],
    impact: [
      "Stronger brand recognition",
      "Consistent communication across platforms",
      "Better internal alignment between teams"
    ],
    capabilities: ["Brand Management", "Identity Systems", "Communication Frameworks", "Stakeholder Alignment"]
  },
  {
    title: "Brand Communication & Marketing",
    icon: <Megaphone className="w-6 h-6" />,
    context: "Once a brand strategy is defined, the next challenge is communicating it effectively across customer touchpoints. Many organizations required help transforming strategic positioning into clear, engaging communication and marketing frameworks.",
    approach: [
      {
        title: "Narrative Development",
        desc: "Crafting brand stories that communicate brand purpose, product value, and emotional connection."
      },
      {
        title: "Communication Frameworks",
        desc: "Developing structured messaging for websites, marketing campaigns, and digital platforms."
      },
      {
        title: "Customer Journey Alignment",
        desc: "Ensuring communication supports each stage of the journey: Awareness → Consideration → Conversion → Retention."
      }
    ],
    impact: [
      "Clearer customer communication",
      "Stronger engagement across channels",
      "Better alignment between brand narrative and marketing execution"
    ],
    capabilities: ["Brand Communication", "Marketing Strategy", "Narrative Design"]
  }
];

export default function MogglyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1000px] mx-auto space-y-24">
        
        {/* Header */}
        <div className="space-y-8">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#ffcc01] hover:text-[#e6b800] transition-colors">
            <ArrowLeft size={16} /> Back to Projects
          </Link>
          <div className="space-y-6">
            <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-muted block">Strategic Brand Case Study</span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">Moggly India <span className="text-[#ffcc01]">.</span></h1>
            <p className="text-xl md:text-2xl text-foreground/70 font-light leading-relaxed max-w-3xl">
              Defining strategic foundations and narrative systems for emerging and growing businesses across diverse industries.
            </p>
          </div>
        </div>

        {/* Hero Image */}
        <div className="aspect-video md:aspect-[21/9] relative rounded-[40px] overflow-hidden shadow-2xl border border-border/50 bg-white">
          <Image src="/selected works/moggly's landing preview.png" alt="Moggly India Case Study" fill className="object-cover" priority />
        </div>

        {/* Project Content */}
        <div className="space-y-32">
          {projects.map((project, idx) => (
            <div key={idx} className="space-y-16">
              <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-24">
                {/* Left side: Context & Title */}
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#ffcc01] flex items-center justify-center text-black shadow-lg">
                      {project.icon}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{project.title}</h2>
                  </div>
                  <div className="space-y-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#ffcc01]">Context</span>
                    <p className="text-lg text-muted font-light leading-relaxed">
                      {project.context}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.capabilities.map(cap => (
                      <span key={cap} className="px-3 py-1 bg-foreground/5 text-[10px] font-bold uppercase tracking-widest rounded-full">{cap}</span>
                    ))}
                  </div>
                </div>

                {/* Right side: Approach & Impact */}
                <div className="space-y-12">
                  <div className="space-y-8">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#ffcc01]">Approach</span>
                    <div className="grid grid-cols-1 gap-6">
                      {project.approach.map((item, iIdx) => (
                        <div key={iIdx} className="p-8 bg-card border border-border/30 rounded-[32px] hover:border-[#ffcc01]/30 transition-all shadow-sm group">
                          <h4 className="text-xl font-bold mb-2 group-hover:text-[#ffcc01] transition-colors">{item.title}</h4>
                          <p className="text-muted font-light leading-relaxed">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-8 md:p-12 bg-[#ffcc01]/5 border border-[#ffcc01]/20 rounded-[40px] space-y-6">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#ffcc01]">The Impact</span>
                    <ul className="space-y-4">
                      {project.impact.map((point, pIdx) => (
                        <li key={pIdx} className="flex gap-4 items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#ffcc01] shrink-0 mt-1" />
                          <p className="text-lg font-medium leading-tight">{point}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="pt-24 pb-16 border-t border-border/30 text-center space-y-10 flex flex-col items-center">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Need a strategic brand refresh?</h2>
            <Link href="/#contact" className="inline-flex items-center gap-4 text-sm font-black uppercase tracking-[0.2em] text-black bg-[#ffcc01] hover:bg-[#e6b800] px-12 py-6 rounded-full transition-all hover:scale-105 active:scale-95 shadow-xl w-fit group">
              Get in Touch <ArrowLeft size={18} className="rotate-135 group-hover:rotate-180 transition-transform" />
            </Link>
        </div>

        </div>
      </div>
    </div>
  );
}
