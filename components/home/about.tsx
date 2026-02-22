"use client";

import { motion } from "framer-motion";
import { ArrowRight, Layers, TrendingUp, LifeBuoy, Lightbulb } from "lucide-react";
import Image from "next/image";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

const projects = [
  {
    title: "Green Bharat",
    category: "Brand Strategy → Stewardship",
    desc: "Scaling a 100+ acre legacy through structural logic. Aligned founder vision with operational reality.",
    image: "/portfolio_thumbnail_3.png",
    link: "https://greenbharatagro.com/",
    tags: ["Positioning", "Architecture"]
  },
  {
    title: "Eblity",
    category: "UX Strategy → Systems",
    desc: "Simplifying complex learning systems into cognitive-driven flows. UI thinking beyond visual candy.",
    image: "/portfolio_thumbnail_2.png",
    link: "https://www.eblity.com/",
    tags: ["Systems", "Simplification"]
  },
  {
    title: "Moggly",
    category: "Brand Design → Experience",
    desc: "Building a playful yet structured brand identity for a modern pet care ecosystem.",
    image: "/portfolio_thumbnail_1.png",
    link: "https://www.moggly.in/",
    tags: ["Identity", "Experience"]
  }
];

export default function About() {
  return (
    <div className="flex flex-col gap-0">
      {/* ————— SECTION 1: HERO ————— */}
      <section id="home" className="min-h-screen flex flex-col justify-center pt-20 px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-[1200px] mx-auto w-full"
        >
          

          <h1 className="text-[56px] md:text-[96px] leading-[1] font-bold tracking-tighter mb-16 max-w-5xl">
            I build systems — <br />
            <span className="opacity-20">Not just deliverables.</span>
          </h1>
          
          <div className="space-y-6 text-[20px] md:text-[24px] text-muted tracking-tight max-w-3xl font-light leading-relaxed">
            <p className="border-l-2 border-foreground/10 pl-8 transition-colors hover:border-foreground">Mechanical Engineer turned Brand Strategist.</p>
            <p className="border-l-2 border-foreground/10 pl-8 transition-colors hover:border-foreground">Operating at the intersection of business intent, design systems, and behavioral psychology.</p>
            <p className="border-l-2 border-foreground/10 pl-8 transition-colors hover:border-foreground">Currently Brand Manager at Green Bharat.</p>
          </div>

          {/* Process flow */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-48">
            {[
              { name: "Visual", showArrow: true },
              { name: "UX", showArrow: true },
              { name: "Brand", showArrow: true },
              { name: "Consulting", showArrow: false },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 * idx, duration: 0.8 }}
                className="flex flex-col gap-6"
              >
                <div className="h-[2px] bg-foreground/10 w-full" />
                <div className="flex items-center gap-4">
                  <span className="text-[18px] text-muted">{item.name}</span>
                  {item.showArrow && <ArrowRight className="w-4 h-4 text-border" />}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ————— SECTION 2: WORK ————— */}
      <section id="work" className="py-48 px-12 bg-surface/30">
        <div className="max-w-[1200px] mx-auto w-full">
          <motion.div {...fadeIn} className="mb-32">
            <h2 className="text-[48px] font-bold tracking-tighter mb-8">Selected Work.</h2>
            <div className="w-24 h-1 bg-foreground mb-8" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-32">
            {projects.map((project, idx) => (
              <motion.a 
                key={idx} 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                {...fadeIn}
                whileHover={{ y: -10 }}
                className="group cursor-pointer space-y-8"
              >
                <div className="aspect-[16/10] bg-surface relative overflow-hidden border border-border/50 group-hover:border-foreground/20 transition-all rounded-[32px]">
                   <Image 
                     src={project.image} 
                     alt={project.title} 
                     fill 
                     className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" 
                   />
                </div>
                <div className="space-y-4">
                  <div className="flex gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-foreground/5 rounded-full">{tag}</span>
                    ))}
                  </div>
                  <h3 className="text-3xl font-bold tracking-tight group-hover:translate-x-3 transition-transform duration-500">{project.title}</h3>
                  <p className="text-lg text-muted font-light leading-relaxed max-w-lg">{project.desc}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ————— SECTION 3: STRATEGY LEVELS ————— */}
      <section id="strategy" className="py-48 px-12">
        <div className="max-w-[1200px] mx-auto w-full">
          <motion.div {...fadeIn} className="mb-32 text-center">
            <h2 className="text-[48px] font-bold tracking-tighter mb-8 italic uppercase">The Structural Method.</h2>
            <p className="text-xl text-muted font-light max-w-2xl mx-auto italic">Strategic clarity is the precursor to visual excellence.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Foundation",
                desc: "Structural integrity before market entry. Positioning that lasts years, not months.",
                icon: <Layers strokeWidth={1} size={48} />
              },
              {
                title: "Structuring",
                desc: "Scalable communication frameworks that remove friction from brand growth.",
                icon: <TrendingUp strokeWidth={1} size={48} />
              },
              {
                title: "Stewardship",
                desc: "Management of the long-term lifecycle and perception of the brand entity.",
                icon: <LifeBuoy strokeWidth={1} size={48} />
              }
            ].map((lvl, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn}
                transition={{ delay: idx * 0.2 }}
                className="p-16 border border-border rounded-[40px] hover:bg-surface transition-all flex flex-col justify-between aspect-square"
              >
                <div className="text-muted/30">{lvl.icon}</div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold">{lvl.title}</h3>
                  <p className="text-sm text-muted leading-relaxed font-light">{lvl.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ————— SECTION 4: STUDIO / EXPERIMENTAL ————— */}
      <section id="studio" className="py-48 px-12 bg-foreground text-background">
        <div className="max-w-[1200px] mx-auto w-full text-center space-y-16">
          <motion.div {...fadeIn}>
            <span className="text-[10px] font-black uppercase tracking-[0.5em] opacity-40 mb-12 block">The 7th Studio</span>
            <h2 className="text-[64px] md:text-[96px] font-bold tracking-tighter leading-none italic">
              Imagination <br /> Running Ahead.
            </h2>
            <p className="text-[20px] md:text-[24px] opacity-60 font-light max-w-2xl mx-auto mt-12 italic">
              Where utility meets experimental art. A space for analogies, mental models, and the track I&apos;m on.
            </p>
          </motion.div>
          
          <motion.div {...fadeIn} className="pt-20">
            <button className="px-12 py-6 bg-background text-foreground font-black uppercase tracking-[0.3em] text-xs hove:scale-105 transition-all">
              Enter Laboratory
            </button>
          </motion.div>
        </div>
      </section>

      {/* ————— SECTION 5: ABOUT ————— */}
      <section id="about" className="py-48 px-12">
        <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-32 items-center">
          <motion.div {...fadeIn} className="space-y-12">
            <h2 className="text-6xl font-bold tracking-tight">I build systems — <br /><span className="text-muted/20">Not just deliverables.</span></h2>
            <p className="text-xl text-muted font-light leading-relaxed">
              Mechanical Engineer by training. Brand Strategist by choice. Systems thinker by nature. Currently Brand Manager at Green Bharat. My differentiator: structural intelligence combined with cognitive psychology.
            </p>
            <div className="space-y-6">
              <div className="h-[1px] bg-border w-full" />
              <div className="flex justify-between items-center group cursor-pointer group">
                  <span className="text-[11px] font-black uppercase tracking-[0.4em] text-muted group-hover:text-foreground transition-colors">Download Resume</span>
                  <ArrowRight className="w-4 h-4 text-border group-hover:text-foreground group-hover:translate-x-2 transition-all" />
              </div>
              <div className="h-[1px] bg-border w-full" />
            </div>
          </motion.div>

          <motion.div 
            {...fadeIn} 
            className="p-16 border border-border rounded-[48px] bg-surface/30 relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-64 h-64 -mr-16 -mt-16 opacity-[0.03] grayscale dark:opacity-[0.07]">
              <Image src="/portfolio_thumbnail_4.png" alt="Profile Background" fill className="object-cover rounded-full" />
            </div>
            
            <div className="space-y-12 relative z-10">
              <div className="w-20 h-20 relative rounded-2xl overflow-hidden border border-border mb-8 shadow-sm">
                <Image src="/portfolio_thumbnail_4.png" alt="Tushar" fill className="object-cover" />
              </div>
              
              <div className="space-y-6">
                <h4 className="text-sm font-black uppercase tracking-[0.4em] text-muted">Seeking.</h4>
                <p className="text-3xl font-bold tracking-tight italic leading-relaxed">
                  &quot;I am looking for roles in Brand Strategy or UX Systems where clarity drives long-term value.&quot;
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-12">
                {["Brand Management", "UX Systems", "Consulting", "Founder Ops"].map(t => (
                  <div key={t} className="flex items-center gap-3 text-[12px] font-bold uppercase tracking-widest text-muted">
                    <div className="w-1.5 h-1.5 bg-foreground/20 rounded-full" />
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ————— FOOTER ————— */}
      <footer className="py-32 px-12 border-t border-border flex flex-col items-center text-center">
        <motion.h4 
           whileInView={{ opacity: 0.05 }}
           initial={{ opacity: 0 }}
           className="text-[160px] md:text-[220px] font-black tracking-tighter select-none leading-none"
        >
          TUSHAR
        </motion.h4>
        <p className="mt-12 text-[10px] font-black text-muted uppercase tracking-[0.6em]">Portfolio &copy; 2026 / All Rights Reserved</p>
      </footer>
    </div>
  );
}
