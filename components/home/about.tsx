"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Layers, TrendingUp, LifeBuoy, Mail, MapPin, Phone, Linkedin, ExternalLink, GraduationCap, Mic2 } from "lucide-react";
import Image from "next/image";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  },
  viewport: { once: true }
};

const expertise = [
  {
    category: "Strategy, Research & Consulting",
    skills: ["Brand Strategy", "Brand Consulting", "Positioning", "Market Research", "Customer Insights", "UX Research"]
  },
  {
    category: "Experience & Design",
    skills: ["UI/UX Strategy", "CX Design", "Narrative Systems", "Communication Frameworks"]
  },
  {
    category: "Leadership & Execution",
    skills: ["Brand Management", "Stakeholder Alignment", "Project Management", "Delivery Oversight"]
  }
];

const experience = [
  {
    role: "Brand Manager",
    company: "Green Bharat",
    period: "Oct 2025 - Present",
    location: "Pune",
    focus: "Brand Stewardship & Scale",
    bullets: [
      "Responsible for overall brand direction and positioning.",
      "Managing brand consistency across digital and offline platforms.",
      "Aligning brand strategy with business and operations teams.",
      "Developing communication guidelines and messaging frameworks.",
      "Monitoring brand perception and market positioning."
    ]
  },
  {
    role: "Brand Strategist",
    company: "Green Bharat",
    period: "Aug 2024 - Sept 2025",
    location: "Hybrid",
    focus: "Strategy-Led Brand & Experience Design",
    bullets: [
      "Defined brand purpose, positioning, and value proposition.",
      "Developed brand voice and messaging structure.",
      "Conducted market and competitor analysis.",
      "Created brand strategy documents and frameworks.",
      "Supported leadership team with strategic brand decisions."
    ]
  },
  {
    role: "Brand Consultant & Strategic Designer",
    company: "MOGGLY India",
    period: "March 2020 - May 2024",
    location: "Bhilai",
    focus: "Strategy-Brand Consulting & Identity Systems",
    bullets: [
      "Co-founded and led a design-led brand consultancy serving early-stage and growth-stage businesses.",
      "Defined brand positioning, value propositions, and competitive differentiation.",
      "Conducted market research, customer insight studies, and brand audits.",
      "Developed brand architecture, messaging systems, and communication frameworks.",
      "Designed identity systems including logos, visual guidelines, and brand assets.",
      "Led UI/UX strategy to align digital platforms with brand positioning.",
      "Improved customer journeys through UX research and CX mapping.",
      "Managed end-to-end brand projects from strategy through execution.",
      "Coordinated cross-functional teams including designers, developers, and marketing stakeholders."
    ]
  },
  {
    role: "Fractional Brand Strategy & UI/UX Lead",
    company: "Digikraft Social",
    period: "Nov 2024 - July 2025",
    location: "Raipur",
    focus: "Product Strategy, Experience Architecture & Agency Growth",
    bullets: [
      "Led brand positioning and digital experience strategy.",
      "Mentored branding & UI/UX teams.",
      "Built internal consulting and design frameworks.",
      "Shifted agency approach from execution-led to strategy-first.",
      "Conducted user research and workflow analysis."
    ]
  }
];

const earlierRoles = [
  { 
    role: "UI/UX & Visual Designer", 
    company: "Ethereal Corporate", 
    period: "Jan 2019 - Dec 2019", 
    location: "Bhilai", 
    link: "https://www.etherealcorporate.com/", 
    focus: "User Experience & Interface Design" 
  },
  { 
    role: "Graphic Design Lead", 
    company: "Medioden Solutions", 
    period: "May 2018 - Nov 2018", 
    location: "Bhilai", 
    link: "https://www.facebook.com/MedioDen/services/", 
    focus: "Product Interface & Visual Systems" 
  },
  { 
    role: "Graphic Designer", 
    company: "WinWin Innfra", 
    period: "Oct 2017 - March 2018", 
    location: "Pune", 
    link: "http://www.winwininnfra.com/", 
    focus: "Brand & Marketing Design" 
  }
];

const education = [
  { degree: "PG in Brand Communication & Management", school: "MICA", period: "2022-2023" },
  { degree: "Design Specialization", period: "2016-2017" },
  { degree: "Diploma in Design Engineering", period: "2015-2016" },
  { degree: "B.tech in Mechanical Engineering", period: "2009-2013" }
];

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
    title: "Moggly India",
    category: "Brand Design → Experience",
    desc: "Building a playful yet structured brand identity for a modern pet care ecosystem.",
    image: "/portfolio_thumbnail_1.png",
    link: "https://www.moggly.in/",
    tags: ["Identity", "Experience"]
  }
];

export default function About() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const phrases = ["a UI designer,", "a UX designer,", "a Brand consultant"];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 70 : 120);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, phrases]);

  return (
    <div className="flex flex-col gap-0 bg-background text-foreground transition-colors duration-300">
      {/* ————— SECTION 1: HERO ————— */}
      <section id="home" className="min-h-screen flex flex-col justify-center pt-32 pb-10 px-6 md:px-12 lg:px-24 bg-background">
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 space-y-6 text-center lg:text-left"
            >
              <div className="flex flex-col gap-0 leading-tight mb-4 items-center lg:items-start">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground/60">
                  Hey, I&apos;m
                </h2>
                <div className="h-16 md:h-20 lg:h-24 flex items-center">
                  <p className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#ffcc01] tracking-tight">
                    {text}
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="inline-block w-1 h-8 md:h-12 lg:h-14 bg-[#ffcc01] ml-2"
                    />
                  </p>
                </div>
              </div>

              <div className="max-w-xl mx-auto lg:mx-0 space-y-2 text-md md:text-lg text-foreground/80 font-medium leading-relaxed">
                <p>
                  Who thinks like a systems strategist, crafting experiences that make products and services more humane and change more sustainable.
                </p>
                <p>
                  I help teams go beyond features, designing for behavior, equity, and lasting impact.
                </p>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4 pt-6">
                <button className="px-6 md:px-10 py-3 md:py-4 rounded-full bg-background text-foreground text-xs md:text-sm font-bold shadow-sm hover:bg-[#ffcc00] hover:text-black hover:scale-105 active:scale-95 active:bg-[#ffcc00] active:text-black border-2 border-foreground transition-all cursor-pointer whitespace-nowrap">
                  View My Works
                </button>
                <button className="px-6 md:px-10 py-3 md:py-4 rounded-full bg-background text-foreground text-xs md:text-sm font-bold shadow-sm hover:bg-[#ffcc00] hover:text-black hover:scale-105 active:scale-95 active:bg-[#ffcc00] active:text-black border-2 border-foreground transition-all cursor-pointer whitespace-nowrap">
                  Join Community
                </button>
                <button className="px-6 md:px-10 py-3 md:py-4 rounded-full bg-background text-foreground text-xs md:text-sm font-bold shadow-sm hover:bg-[#ffcc00] hover:text-black hover:scale-105 active:scale-95 active:bg-[#ffcc00] active:text-black border-2 border-foreground transition-all cursor-pointer whitespace-nowrap">
                  Listen Podcast
                </button>
              </div>
            </motion.div>

            {/* Right Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-lg aspect-auto flex items-center justify-center lg:-mr-24"
            >
              <div className="relative w-full h-[350px] md:h-[500px] lg:h-[600px]">
                <Image 
                  src="/ChatGPT Image Mar 5, 2026, 07_32_02 PM.png" 
                  alt="Tushar Kasarlewar" 
                  fill 
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
          </div>

          {/* Sticker Row */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center md:justify-start gap-8 md:gap-12 mt-20"
          >
            {[
              { icon: <Mic2 className="w-8 h-8" />, label: "Speaker" },
              { icon: <GraduationCap className="w-8 h-8" />, label: "Educator" },
              { icon: <TrendingUp className="w-8 h-8" />, label: "Strategist" },
              { icon: <Layers className="w-8 h-8" />, label: "Designer" },
              { icon: <LifeBuoy className="w-8 h-8" />, label: "Consultant" }
            ].map((sticker, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2 group cursor-pointer">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#ffcc01] flex items-center justify-center text-black shadow-sm group-hover:shadow-lg group-hover:scale-110 transition-transform">
                  {sticker.icon}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Floating Let's Chat Button */}
          <div className="fixed bottom-8 right-8 z-50">
            <button className="bg-[#ffcc01] hover:bg-[#e6b800] text-black px-6 py-3 rounded-full flex items-center gap-3 shadow-xl font-bold transition-all hover:scale-105 active:scale-95 group border border-black/5">
              <div className="w-8 h-8 relative rounded-full overflow-hidden border border-black/10">
                <Image src="/portfolio_thumbnail_4.png" alt="Profile" fill className="object-cover" />
              </div>
              <span className="text-sm">Let&apos;s Chat!</span>
            </button>
          </div>
        </div>
      </section>

      {/* ————— SECTION 2: EXPERIENCE ————— */}
      <section id="experience" className="py-32 px-6 md:px-12 lg:px-24 bg-background">
        <div className="max-w-[1400px] mx-auto w-full">
          <motion.div {...fadeIn} className="mb-12 md:mb-20">
            <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-[#ffcc01] mb-4 block">Professional Journey</span>
            <h2 className="text-5xl md:text-7xl font-medium tracking-tight">Experience</h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-8">
            {experience.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative flex flex-col md:flex-row gap-8 p-10 bg-card border border-border/50 rounded-[40px] hover:border-[#ffcc01]/50 transition-all shadow-sm hover:shadow-xl"
              >
                <div className="md:w-1/3 space-y-4">
                  <span className="text-sm font-medium text-muted">{exp.period}</span>
                  <h3 className="text-3xl font-bold tracking-tight">{exp.role}</h3>
                  <p className="text-xl text-[#ffcc01] font-medium">{exp.company}</p>
                  <p className="text-sm text-muted">{exp.location}</p>
                </div>
                
                <div className="md:w-2/3 space-y-4 border-l border-border/30 pl-0 md:pl-12">
                   <p className="text-sm font-bold uppercase tracking-widest text-muted/50 mb-4">Focus: {exp.focus}</p>
                   <ul className="space-y-3">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex gap-4 text-muted items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#ffcc01] mt-2 shrink-0" />
                        <p className="text-lg font-light leading-relaxed">{bullet}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeIn} className="mt-20">
            <h3 className="text-2xl font-bold mb-10 opacity-30 uppercase tracking-widest">Selected Past Roles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {earlierRoles.map((role, idx) => (
                <motion.a 
                  key={idx} 
                  href={role.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="p-8 border border-border/50 rounded-3xl bg-card hover:border-[#ffcc01]/30 transition-all group"
                >
                  <span className="text-xs font-bold text-[#ffcc01] uppercase mb-2 block">{role.period}</span>
                  <h4 className="font-bold text-xl mb-1 group-hover:text-[#ffcc01] transition-colors">{role.role}</h4>
                  <p className="text-sm text-muted">{role.company}</p>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ————— SECTION: PROJECTS ————— */}
      <section id="projects" className="py-32 px-6 md:px-12 lg:px-24 bg-background">
        <div className="max-w-[1400px] mx-auto w-full">
          <motion.div {...fadeIn} className="mb-12 md:mb-20">
            <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-[#ffcc01] mb-4 block">Case Studies</span>
            <h2 className="text-5xl md:text-7xl font-medium tracking-tight">Selected Works</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {projects.map((project, idx) => (
              <motion.a 
                key={idx} 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                {...fadeIn}
                whileHover={{ y: -10 }}
                className="group cursor-pointer space-y-6"
              >
                <div className="aspect-[4/3] relative overflow-hidden bg-card border border-border/50 rounded-[40px] shadow-sm group-hover:shadow-2xl transition-all duration-500">
                   <Image 
                     src={project.image} 
                     alt={project.title} 
                     fill 
                     className="object-cover group-hover:scale-110 transition-transform duration-700" 
                   />
                </div>
                <div className="space-y-3 px-2">
                  <div className="flex gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-foreground/5 rounded-full">{tag}</span>
                    ))}
                  </div>
                  <h3 className="text-3xl font-bold tracking-tight group-hover:text-[#ffcc01] transition-colors">{project.title}</h3>
                  <p className="text-lg text-muted font-light leading-relaxed">{project.desc}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ————— SECTION 3: CORE EXPERTISE ————— */}
      <section id="strategy" className="py-32 px-6 md:px-12 lg:px-24 bg-background">
        <div className="max-w-[1400px] mx-auto w-full">
          <motion.div {...fadeIn} className="mb-12 md:mb-20">
             <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-[#ffcc01] mb-4 block">Skills</span>
            <h2 className="text-5xl md:text-7xl font-medium tracking-tight">Core Expertise</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-12 bg-card border border-border/50 rounded-[48px] hover:border-[#ffcc01] transition-all flex flex-col gap-10 group shadow-sm hover:shadow-xl"
              >
                <div className="w-20 h-20 rounded-full bg-[#ffcc01] flex items-center justify-center text-black group-hover:scale-110 transition-transform shadow-lg">
                  {idx === 0 ? <Layers strokeWidth={1.5} size={32} /> : idx === 1 ? <TrendingUp strokeWidth={1.5} size={32} /> : <LifeBuoy strokeWidth={1.5} size={32} />}
                </div>
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold tracking-tight">{item.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map(skill => (
                      <span key={skill} className="px-4 py-1.5 bg-foreground/5 text-[11px] font-bold uppercase tracking-widest rounded-full">{skill}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ————— SECTION 4: STUDIO / EXPERIMENTAL ————— */}
      <section id="studio" className="py-48 px-6 md:px-12 lg:px-24 bg-foreground text-background overflow-hidden relative">
        <div className="max-w-[1400px] mx-auto w-full text-center space-y-16 relative z-10">
          <motion.div {...fadeIn}>
            <span className="text-[12px] font-bold uppercase tracking-[0.5em] text-[#ffcc01] mb-8 sm:mb-12 block">The 7th Studio</span>
            <h2 className="text-[40px] sm:text-[64px] md:text-[96px] lg:text-[120px] font-bold tracking-tighter leading-none italic">
              Imagination <br /> 
              <span className="text-[#ffcc01]">Running Ahead.</span>
            </h2>
            <p className="text-[18px] sm:text-[20px] md:text-[24px] opacity-60 font-light max-w-2xl mx-auto mt-8 sm:mt-12 italic">
              Where utility meets experimental art. A space for analogies, mental models, and the track I&apos;m on.
            </p>
          </motion.div>
          
          <motion.div {...fadeIn} className="pt-20">
            <button className="px-16 py-8 bg-[#ffcc01] text-black font-black uppercase tracking-[0.3em] text-xs hover:scale-105 transition-all rounded-full shadow-xl">
              Enter Laboratory
            </button>
          </motion.div>
        </div>
        
        {/* Background decorative element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-background/5 rounded-full pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-background/5 rounded-full pointer-events-none" />
      </section>

      {/* ————— SECTION 5: EDUCATION ————— */}
      <section id="education" className="py-32 px-6 md:px-12 lg:px-24 bg-background">
        <div className="max-w-[1400px] mx-auto w-full">
          <motion.div {...fadeIn} className="mb-20">
            <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-[#ffcc01] mb-4 block">Academic</span>
            <h2 className="text-5xl md:text-7xl font-medium tracking-tight">Education</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-12 bg-card border border-border/50 rounded-[40px] hover:border-[#ffcc01] transition-all group shadow-sm hover:shadow-xl"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="w-16 h-16 rounded-full bg-[#ffcc01] flex items-center justify-center text-black group-hover:rotate-12 transition-transform shadow-md">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                  <span className="text-sm font-bold text-muted">{edu.period}</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
                {edu.school && <p className="text-lg text-muted font-light italic">{edu.school}</p>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ————— SECTION 6: SPEAKING & ABOUT ————— */}
      <section id="about" className="py-32 px-6 md:px-12 lg:px-24 bg-background">
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-24 items-center">
            {/* Left Column: Speaking */}
            <motion.div {...fadeIn} className="space-y-12">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-full bg-[#ffcc01] flex items-center justify-center text-black shadow-md">
                    <Mic2 className="w-8 h-8" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Recognition &amp; Speaking</h2>
                </div>
                <div className="p-10 bg-card border border-border/50 rounded-[40px] space-y-8 hover:border-[#ffcc01]/50 transition-all shadow-sm hover:shadow-xl">
                  <div className="space-y-4">
                    <span className="px-4 py-1.5 bg-[#ffcc01] text-black rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">Keynote Speaker</span>
                    <h3 className="text-2xl md:text-3xl font-bold leading-tight">Friends of Figma, IIT Bhilai</h3>
                    <p className="text-lg md:text-xl text-muted font-light italic">Session on UX, brand behavior, and human psychology.</p>
                  </div>
                  <p className="text-lg text-muted leading-relaxed font-light">
                    Explored how cognitive patterns and user perception influence brand experience, trust, and digital decision-making.
                  </p>
                </div>
              </div>

              {/* Resume Button */}
              <div className="pt-4">
                <button className="w-full flex justify-between items-center px-10 py-8 bg-foreground text-background rounded-[32px] group hover:scale-[1.02] transition-all shadow-xl">
                   <span className="text-sm font-bold uppercase tracking-[0.2em]">Download Detailed Resume</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform text-[#ffcc01]" />
                </button>
              </div>
            </motion.div>

            {/* Right Column: Keynote Image */}
            <motion.div 
              {...fadeIn} 
              className="relative aspect-[3/4] max-w-md mx-auto w-full bg-card rounded-[48px] overflow-hidden border border-border/50 group shadow-2xl"
            >
              <Image 
                src="/keynote (1).png" 
                alt="Keynote at Friends of Figma, IIT Bhilai" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-12">
                 <p className="text-white text-xs font-bold uppercase tracking-widest">Speaking at IIT Bhilai</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ————— SECTION 6: CONTACT ————— */}
      <section id="contact" className="py-32 px-6 md:px-12 lg:px-24 bg-background">
        <div className="max-w-[1400px] mx-auto w-full">
          <motion.div {...fadeIn} className="mb-12 md:mb-20">
            <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-[#ffcc01] mb-4 block">Get in Touch</span>
            <h2 className="text-5xl md:text-7xl font-medium tracking-tight">Let&apos;s Build Something.</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* Contact Form */}
            <motion.div {...fadeIn} className="space-y-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-muted">Full Name</label>
                    <input type="text"  className="w-full bg-background border border-border/50 rounded-2xl px-6 py-4 outline-none focus:border-[#ffcc01] transition-colors text-sm" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-muted">Email Address</label>
                    <input type="email"  className="w-full bg-background border border-border/50 rounded-2xl px-6 py-4 outline-none focus:border-[#ffcc01] transition-colors text-sm" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-muted">Subject</label>
                  <input type="text"  className="w-full bg-background border border-border/50 rounded-2xl px-6 py-4 outline-none focus:border-[#ffcc01] transition-colors text-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-muted">Message</label>
                  <textarea rows={5}  className="w-full bg-background border border-border/50 rounded-2xl px-6 py-4 outline-none focus:border-[#ffcc01] transition-colors text-sm resize-none"></textarea>
                </div>
                <button type="submit" className="w-full bg-foreground text-background font-bold uppercase tracking-[0.3em] py-6 rounded-2xl hover:bg-[#ffcc01] hover:text-black transition-all shadow-xl">
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Cards */}
            <motion.div {...fadeIn} className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-10 lg:pt-0">
              {[
                { label: "Email", value: "tushar.kasarlewar@gmail.com", icon: <Mail className="w-5 h-5" />, href: "mailto:tushar.kasarlewar@gmail.com" },
                { label: "LinkedIn", value: "linkedin.com/in/tushar-kasarlewar-43b476a8/", icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/tushar-kasarlewar-43b476a8/" },
                { label: "Phone", value: "(+91) 73786-12364", icon: <Phone className="w-5 h-5" />, href: "tel:+917378612364" },
                { label: "Address", value: "Pune, Maharashtra", icon: <MapPin className="w-5 h-5" />, href: "#" },
              ].map((contact, idx) => (
                <a 
                  key={idx} 
                  href={contact.href}
                  className="p-8 bg-card border border-border/50 rounded-[40px] flex flex-col items-start gap-4 hover:border-[#ffcc01] hover:shadow-xl transition-all group shadow-sm"
                >
                  <div className="w-12 h-12 rounded-full bg-[#ffcc01]/10 flex items-center justify-center text-muted group-hover:bg-[#ffcc01] group-hover:text-black transition-all">
                    {contact.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted block mb-2">{contact.label}</span>
                    <p className="text-sm font-bold tracking-tight break-all">{contact.value}</p>
                  </div>
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ————— FOOTER ————— */}
      <footer className="py-32 px-6 md:px-12 bg-background border-t border-border/50 flex flex-col items-center text-center overflow-hidden">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 0.05, scale: 1 }}
           className="absolute pointer-events-none w-full"
        >
          <h4 className="text-[60px] sm:text-[120px] md:text-[240px] lg:text-[400px] font-black tracking-tighter select-none leading-none -mb-8 sm:-mb-16 md:-mb-32 text-[#ffcc01]">
            TUSHAR
          </h4>
        </motion.div>
        
        <div className="relative z-10 space-y-12">
          <div className="flex flex-wrap justify-center gap-8 text-[12px] font-bold uppercase tracking-[0.4em] text-muted">
            <a href="mailto:tushar.kasarlewar@gmail.com" className="hover:text-[#ffcc01] transition-colors italic border-b border-transparent hover:border-[#ffcc01] pb-1">Email</a>
            <a href="https://www.linkedin.com/in/tushar-kasarlewar-43b476a8/" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffcc01] transition-colors italic border-b border-transparent hover:border-[#ffcc01] pb-1">LinkedIn</a>
            <a href="#" className="hover:text-[#ffcc01] transition-colors italic border-b border-transparent hover:border-[#ffcc01] pb-1">Twitter (X)</a>
            <a href="#" className="hover:text-[#ffcc01] transition-colors italic border-b border-transparent hover:border-[#ffcc01] pb-1">Work</a>
          </div>
          <p className="text-[10px] font-bold text-muted uppercase tracking-[0.6em]">Tushar Kasarlewar &copy; 2026 / UI/UX Designer &amp; Strategist</p>
        </div>
      </footer>
    </div>
  );
}
