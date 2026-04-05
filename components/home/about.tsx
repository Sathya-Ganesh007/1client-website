"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { ArrowRight, Layers, TrendingUp, LifeBuoy, Mail, MapPin, Phone, Linkedin, ExternalLink, GraduationCap, Mic2, ChevronRight, ChevronDown, Cpu, Globe, Cloud, ShoppingBag, Briefcase, UserCheck, Truck, Coffee, Sprout, Database, Home, Newspaper } from "lucide-react";
import Image from "next/image";
import DownloadResumeButton from "@/components/DownloadResumeButton";
import DesignTools from "./DesignTools";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";


const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
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
    period: "MAR 2020 - MAY 2024",
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
  { degree: "PG in Brand Communication & Management", school: "MICA", period: "2022-2023", logo: "/mica logo.png" },
  { degree: "Design Specialization", school: "Gurumantra", period: "2016-2017", logo: "/gurumantra logo .png" },
  { degree: "Diploma in Design Engineering", school: "CADCAMGURU", period: "2015-2016", logo: "/cadcamguru logo.png" },
  { degree: "B.tech in Mechanical Engineering", school: "SSTC", period: "2009-2013", logo: "/SSTC LOGO.png" }
];

const projects = [
  {
    name: "Green Bharat",
    title: "BRAND CONSULTANT",
    category: "Brand Strategy → Stewardship",
    desc: "Scaling a 100+ acre legacy through structural logic. Aligned founder vision with operational reality.",
    image: "/selected works/Group 334.png",
    link: "https://greenbharatagro.com/",
    tags: ["Positioning", "Architecture"],
    internalLink: "/work/green-bharat"
  },
  {
    name: "Moggly India",
    title: "BRAND DESIGNER",
    category: "Brand Design → Experience",
    desc: "Crafting intuitive UI/UX systems that align product functionality with user behavior and business growth.",
    image: "/selected works/moggly's landing preview.png",
    link: "https://www.moggly.in/",
    tags: ["Identity", "Experience"],
    internalLink: "/work/moggly"
  },
  {
    name: "Eblity",
    title: "UX STRATEGY",
    category: "UX Strategy → Systems",
    desc: "Simplifying complex learning systems into cognitive-driven flows. UI thinking beyond visual candy.",
    image: "/selected works/Group 332.png",
    link: "https://www.eblity.com/",
    tags: ["Systems", "Simplification"],
    internalLink: "/work/eblity"
  }
];

export default function About() {
  const [openExp, setOpenExp] = useState<number | null>(null);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);


  const phrases = ["a Brand Designer", "a Brand Designer", "an Experience Strategist"];

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


  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="flex flex-col gap-0 bg-background text-foreground transition-colors duration-300">
      {/* ————— SECTION 1: HERO ————— */}
      <section id="home" className="min-h-screen flex flex-col justify-center pt-32 pb-10 px-6 md:px-10 lg:px-16 xl:px-24 bg-background">
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
                  <p className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#ffcc01] tracking-tight whitespace-nowrap">
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
                <button 
                  onClick={() => scrollToSection("projects")}
                  className="px-6 md:px-10 py-3 md:py-4  bg-background text-foreground text-xs md:text-sm font-bold shadow-sm hover:bg-[#ffcc00] hover:text-black hover:scale-105 active:scale-95 active:bg-[#ffcc00] active:text-black border-2 border-foreground transition-all cursor-pointer whitespace-nowrap"
                >
                  View My Works
                </button>
                <button 
                  onClick={() => scrollToSection("community")}
                  className="px-6 md:px-10 py-3 md:py-4  bg-background text-foreground text-xs md:text-sm font-bold shadow-sm hover:bg-[#ffcc01] hover:text-black hover:scale-105 active:scale-95 active:bg-[#ffcc01] active:text-black border-2 border-foreground transition-all cursor-pointer whitespace-nowrap inline-block text-center"
                >
                  Join Community
                </button>

              </div>
            </motion.div>

            {/* Right Profile Image Composition - Responsive & Separated */}
            <div className="flex-1 relative w-full lg:h-[700px] flex items-center justify-center lg:justify-end mt-12 lg:mt-0">
              <CardContainer className="inter-var w-full h-full">
                <CardBody className="relative w-full h-full flex items-center justify-center">
                  
                  {/* Main Portrait - Centered & Premium */}
                  <CardItem
                    translateZ={120}
                    className="relative w-[280px] h-[350px] md:w-[380px] md:h-[480px] lg:w-[450px] lg:h-[580px] rounded-[40px] lg:rounded-[60px] overflow-hidden border-2 border-[#ffcc01]/20 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] bg-card/40 backdrop-blur-md z-10"
                  >
                    <Image 
                      src="/Gemini_Generated_Image_pc6m5dpc6m5dpc6m (1).png" 
                      alt="Tushar main portrait" 
                      fill 
                      className="object-cover"
                      priority
                      quality={100}
                    />
                    
                    {/* Selective Shadow Overlay */}
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                  </CardItem>



                  {/* Decorative Glow */}
                  <CardItem
                    translateZ={-20}
                    className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none"
                  >
                    <div className="w-[120%] h-[120%] bg-gradient-to-tr from-[#ffcc01] to-transparent blur-3xl rounded-full" />
                  </CardItem>

                </CardBody>
              </CardContainer>
            </div>
          </div>

          {/* Sticker Row */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center md:justify-start gap-8 md:gap-12 mt-20"
          >
            {[
              { icon: <Mic2 className="w-8 h-8" />, label: "Speaker", sectionId: "about" },
              { icon: <GraduationCap className="w-8 h-8" />, label: "Education", sectionId: "education" },
              { icon: <Layers className="w-8 h-8" />, label: "Skills", sectionId: "strategy" },
              { icon: <TrendingUp className="w-8 h-8" />, label: "my contributions", sectionId: "projects" }
            ].map((sticker, idx) => (
              <div 
                key={idx} 
                onClick={() => scrollToSection(sticker.sectionId)}
                className="flex flex-col items-center gap-3 group cursor-pointer"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-none bg-[#ffcc01] flex items-center justify-center text-black shadow-sm group-hover:shadow-lg group-hover:scale-110 transition-transform">
                  {sticker.icon}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity text-foreground/60">
                  {sticker.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Floating Let's Chat Button */}
          <div className="fixed bottom-8 right-8 z-50">
            <button 
              onClick={() => scrollToSection("contact")}
              className="bg-[#ffcc01] hover:bg-[#e6b800] text-black px-6 py-3 rounded-full flex items-center gap-3 shadow-xl font-bold transition-all hover:scale-105 active:scale-95 group border border-black/5"
            >
              <div className="w-8 h-8 relative rounded-full overflow-hidden border border-black/10">
                <Image src="/myself/IMG_2996.PNG" alt="Profile" fill className="object-cover" />
              </div>
              <span className="text-sm">Let&apos;s Chat!</span>
            </button>
          </div>
        </div>
      </section>

      {/* ————— SECTION 2: EXPERIENCE ————— */}
      <section id="experience" className="py-32 px-6 md:px-10 lg:px-16 xl:px-24 bg-background">
        <div className="max-w-[1400px] mx-auto w-full">
          <motion.div {...fadeIn} className="mb-12 md:mb-20">
            <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-[#ffcc01] mb-4 block">Professional Journey</span>
            <h2 className="text-3xl md:text-7xl font-medium tracking-tight">Experience</h2>
          </motion.div>

          <div className="flex flex-col divide-y divide-border/30">
            {experience.map((exp, idx) => {
              const isOpen = openExp === idx;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className=""
                >
                  {/* ---- Clickable Header Row ---- */}
                  <button
                    onClick={() => setOpenExp(isOpen ? null : idx)}
                    className="w-full text-left py-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-0 group cursor-pointer focus:outline-none"
                  >
                    {/* Period pill */}
                    <span className="md:w-[200px] text-xs font-bold uppercase tracking-[0.2em] text-muted shrink-0">
                      {exp.period}
                    </span>

                    {/* Role + Company */}
                    <div className="flex-1 space-y-1">
                      <h3 className={`text-2xl md:text-3xl font-bold tracking-tight transition-colors duration-200 ${
                        isOpen ? "text-[#ffcc01]" : "group-hover:text-[#ffcc01]"
                      }`}>
                        {exp.role}
                      </h3>
                      <p className="text-base text-muted font-medium">
                        {exp.company}
                        <span className="mx-2 opacity-30">·</span>
                        <span className="text-sm opacity-60">{exp.location}</span>
                      </p>
                    </div>

                    {/* Chevron */}
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center border border-border/50 text-muted group-hover:border-[#ffcc01] group-hover:text-[#ffcc01] transition-colors duration-200"
                    >
                      <ChevronDown size={18} />
                    </motion.div>
                  </button>

                  {/* ---- Expandable Detail Panel ---- */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-10 pl-0 md:pl-[200px] space-y-6">
                          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#ffcc01]/70">
                            Focus: {exp.focus}
                          </p>
                          <ul className="space-y-3">
                            {exp.bullets.map((bullet, bIdx) => (
                              <motion.li
                                key={bIdx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: bIdx * 0.05 }}
                                className="flex gap-4 text-muted items-start"
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-[#ffcc01] mt-[10px] shrink-0" />
                                <p className="text-base md:text-lg font-light leading-relaxed">{bullet}</p>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
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
      <section id="projects" className="py-32 px-6 md:px-10 lg:px-16 xl:px-24 bg-background">
        <div className="max-w-[1400px] mx-auto w-full">
          <motion.div {...fadeIn} className="mb-12 md:mb-20">
            <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-[#ffcc01] mb-4 block">Live.</span>
            <h2 className="text-3xl md:text-7xl font-medium tracking-tight">Selected Works</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-0">
            {projects.map((project, idx) => (
              <CardContainer key={idx} className="inter-var w-full">
                <CardBody className="group/card relative flex flex-col space-y-6 w-full h-auto rounded-[40px]">
                  <CardItem
                    translateZ="100"
                    as="a"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full aspect-[4/3] relative overflow-hidden bg-card border border-border/50 rounded-none shadow-sm group-hover/card:shadow-2xl transition-all duration-500 cursor-pointer block"
                  >
                     <Image 
                       src={project.image} 
                       alt={project.name} 
                       fill 
                       className="object-cover group-hover/card:scale-110 transition-transform duration-700" 
                     />
                  </CardItem>
                  <div className="space-y-4 px-2 flex flex-col flex-1">
                    <CardItem translateZ="20" className="flex gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-foreground/5 rounded-none">{tag}</span>
                      ))}
                    </CardItem>
                    <a 
                      href={project.internalLink || project.link} 
                      target={project.internalLink ? "_self" : "_blank"} 
                      rel={project.internalLink ? undefined : "noopener noreferrer"} 
                      className="block relative z-30 w-fit"
                    >
                      <CardItem translateZ="60">
                        <h3 className="text-3xl font-bold tracking-tight group-hover/card:text-[#ffcc01] transition-colors">{project.title}</h3>
                      </CardItem>
                    </a>
                    <CardItem translateZ="40" as="p" className="text-lg text-muted font-light leading-relaxed flex-1 italic opacity-80">
                      {project.desc}
                    </CardItem>

                    <CardItem translateZ="30" className="pt-6 mt-auto">
                      <a 
                        href={project.internalLink || project.link} 
                        target={project.internalLink ? "_self" : "_blank"}
                        rel={project.internalLink ? undefined : "noopener noreferrer"}
                        className="relative z-40 inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-black bg-[#ffcc01] hover:bg-[#e6b800] px-8 py-4 rounded-none transition-all hover:scale-105 active:scale-95 shadow-lg group-hover/card:shadow-xl w-fit"
                      >
                        EXPLORE MY WORK <ArrowRight size={14} />
                      </a>
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            ))}
          </div>
        </div>
      </section>
      
      {/* ————— SECTION: PROJECT CATEGORIES ————— */}
      <section id="categories" className="py-32 px-6 md:px-10 lg:px-16 xl:px-24 bg-card/30">
        <div className="max-w-[1400px] mx-auto w-full">
          <motion.div {...fadeIn} className="mb-12 md:mb-20">
            <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-[#ffcc01] mb-4 block">Specialization</span>
            <h2 className="text-3xl md:text-7xl font-medium tracking-tight">Project Categories</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "AI Applications",
                desc: "Intelligent interfaces and neural-driven experiences that bridge human intuition with machine capability.",
                icon: <Cpu className="w-8 h-8" />,
                tag: "Next-Gen Tech",
                links: [
                  { label: "calibr.ai", url: "https://calibr.ai/", type: "Live Application" }
                ]
              },
              {
                title: "Web Applications",
                desc: "High-performance, scalable digital platforms designed for seamless user interaction and business efficiency.",
                icon: <Globe className="w-8 h-8" />,
                tag: "Scalable Systems",
                links: [
                  { label: "Phone OPD App", url: "/tech/Phone OPD App Presentation.pdf", type: "View Presentation" }
                ]
              },
              {
                title: "SaaS Products",
                desc: "Subscription-based software ecosystems focuses on complex workflows and user retention strategy.",
                icon: <Cloud className="w-8 h-8" />,
                tag: "Product Ecosystems",
                links: [
                  { label: "Ebility Flourish", url: "https://www.eblity.com/flourish", type: "Live Application" },
                  { label: "Moto Platform", url: "https://www.motoplatform.in/", type: "Live Application" }
                ]
              }
            ].map((cat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-10 bg-background border border-border/50 rounded-none hover:border-[#ffcc01] transition-all hover:shadow-2xl shadow-sm relative overflow-hidden"
              >
                <div className="relative z-10 space-y-6">
                  <div className="w-16 h-16 rounded-none bg-[#ffcc01]/10 flex items-center justify-center text-[#ffcc01] group-hover:bg-[#ffcc01] group-hover:text-black transition-all duration-500">
                    {cat.icon}
                  </div>
                  <div className="space-y-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#ffcc01] opacity-70">{cat.tag}</span>
                    <h3 className="text-3xl font-bold tracking-tight">{cat.title}</h3>
                    <p className="text-muted font-light leading-relaxed">{cat.desc}</p>
                  </div>
                </div>

                {cat.links && cat.links.length > 0 && (
                  <div className="mt-8 pt-6 border-t border-border/20 relative z-20 space-y-3">
                    {cat.links.map((link, lIdx) => (
                      <a 
                        key={lIdx}
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#ffcc01] hover:text-[#e6b800] transition-colors group/link"
                      >
                        {link.type || "View Presentation"}: {link.label} <ExternalLink size={12} className="group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    ))}
                  </div>
                )}
                
                {/* Decorative background element */}
                <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-[#ffcc01]/5 rounded-full blur-3xl group-hover:bg-[#ffcc01]/20 transition-all duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ————— SECTION: INDUSTRIES & SECTORS ————— */}
      <section id="sectors" className="py-32 px-6 md:px-10 lg:px-16 xl:px-24 bg-background">
        <div className="max-w-[1400px] mx-auto w-full">
          <motion.div {...fadeIn} className="mb-12 md:mb-16">
            <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-[#ffcc01] mb-4 block">Market Reach</span>
            <h2 className="text-3xl md:text-7xl font-medium tracking-tight">Industries & Sectors</h2>
            <p className="text-xl text-muted font-light mt-8 max-w-3xl leading-relaxed italic">
              Across my consulting and strategic work, I have worked with organizations operating in multiple industries, helping them define brand positioning, market narratives, and digital experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: "FMCG", 
                icon: <ShoppingBag className="w-6 h-6" />,
                desc: "Consumer-focused brands requiring strong product positioning and packaging narratives.",
                focus: ["Product storytelling", "Market differentiation", "Retail communication"],
                links: [
                  { label: "MDD USP Presentation", url: "/tech/MDD USP Presentation.pdf" },
                  { label: "IDK Brand Presentation", url: "/tech/IDK-Brand Presentation 3.pdf" },
                  { label: "Taste Dubs", url: "/pdf/taste dubs.pdf" }
                ]
              },
              { 
                title: "Real Estate", 
                icon: <Home className="w-6 h-6" />,
                desc: "Strategic brand systems for luxury developments and commercial real estate projects.",
                focus: ["Project positioning", "Investor narratives", "Market credibility"],
                links: [
                  { label: "Ishanya Project", url: "/tech/Ishanya Project.pdf" },
                  { label: "Ishanya Brand Presentation", url: "/tech/Ishanya - Brand Presentation 2.pdf" }
                ]
              },
              { 
                title: "B2C", 
                icon: <UserCheck className="w-6 h-6" />,
                desc: "Consumer-facing brands focused on experience, engagement, and emotional connection.",
                focus: ["Customer journey mapping", "Brand communication", "Digital strategy"],
                links: [
                  { label: "Bari Brand Strategy", url: "/pdf/Bari Final.pdf" },
                  { label: "Bari 2.0", url: "/pdf/Bari 2.pdf" }
                ]
              },
              { 
                title: "D2C", 
                icon: <Truck className="w-6 h-6" />,
                desc: "Digital-first brands that require strong identity systems and performance-driven communication.",
                focus: ["Digital brand architecture", "Conversion-focused messaging", "Experience storytelling"],
                links: [
                  { label: "Frido Brand Kit", url: "/tech/Brand Kit - frido.pdf" }
                ]
              },
              { 
                title: "Hospitality", 
                icon: <Coffee className="w-6 h-6" />,
                desc: "Businesses focused on experience, service perception, and guest engagement.",
                focus: ["Experience design", "Brand storytelling", "Service systems"],
                links: [
                  { label: "Skin Ethos", url: "/tech/convert-jpg-to-pdfnet_2021-09-09_09-38-36.pdf" }
                ]
              },
              { 
                title: "Agriculture", 
                icon: <Sprout className="w-6 h-6" />,
                desc: "Agro-businesses requiring clarity in communicating scale, sustainability, and credibility. I helped Green Bharat Agro define their market positioning and digital presence.",
                focus: ["Brand credibility", "Stakeholder communication", "Market positioning"],
                links: [
                  { label: "Green Bharat Agro", url: "https://greenbharatagro.com/" }
                ]
              },
              { 
                title: "Technology", 
                icon: <Database className="w-6 h-6" />,
                desc: "Tech-driven businesses requiring clear explanation of complex solutions.",
                focus: ["Product communication", "Platform positioning", "UX-led architecture"],
                links: [
                  { label: "AIPAN Branding", url: "/tech/AIPAN Branding  (1).pdf" }
                ]
              },
              { 
                title: "Media & Publishing", 
                icon: <Newspaper className="w-6 h-6" />,
                desc: "Organizations focused on content delivery, narrative systems, and editorial credibility.",
                focus: ["Narrative strategy", "Editorial systems", "Digital publishing"],
                links: [
                  { label: "Chhattistv V2", url: "/tech/Chhattistv-V2.pdf" }
                ]
              }
            ].map((sector, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-8 bg-card border border-border/40 rounded-none hover:border-[#ffcc01]/50 transition-all group flex flex-col h-full"
              >
                <div className="w-12 h-12 rounded-none bg-foreground/5 flex items-center justify-center text-muted group-hover:bg-[#ffcc01] group-hover:text-black transition-all mb-6">
                  {sector.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 tracking-tight">{sector.title}</h3>
                <p className="text-sm text-muted mb-6 font-light leading-relaxed flex-grow">{sector.desc}</p>
                <div className="pt-6 border-t border-border/20 space-y-2">
                  <span className="text-[9px] font-black uppercase tracking-widest text-[#ffcc01]">Core Focus</span>
                  <div className="flex flex-col gap-1.5">
                    {sector.focus.map((f, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-[#ffcc01]" />
                        <span className="text-[11px] text-muted whitespace-nowrap">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {sector.links && sector.links.length > 0 && (
                  <div className="mt-auto pt-6 border-t border-border/20 space-y-3">
                    {sector.links.map((link, lIdx) => (
                      <a 
                        key={lIdx}
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#ffcc01] hover:text-[#e6b800] transition-colors group/link"
                      >
                        {link.label} <ExternalLink size={12} className="group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ————— SECTION 3: CORE EXPERTISE ————— */}
      <section id="strategy" className="py-32 px-6 md:px-10 lg:px-16 xl:px-24 bg-background">
        <div className="max-w-[1400px] mx-auto w-full">
          <motion.div {...fadeIn} className="mb-12 md:mb-20">
             <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-[#ffcc01] mb-4 block">Skills</span>
            <h2 className="text-3xl md:text-7xl font-medium tracking-tight">Core Expertise</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-12 bg-card border border-border/50 rounded-none hover:border-[#ffcc01] transition-all flex flex-col gap-10 group shadow-sm hover:shadow-xl"
              >
                <div className="w-20 h-20 rounded-none bg-[#ffcc01] flex items-center justify-center text-black group-hover:scale-110 transition-transform shadow-lg">
                  {idx === 0 ? <Layers strokeWidth={1.5} size={32} /> : idx === 1 ? <TrendingUp strokeWidth={1.5} size={32} /> : <LifeBuoy strokeWidth={1.5} size={32} />}
                </div>
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold tracking-tight">{item.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map(skill => (
                      <span key={skill} className="px-4 py-1.5 bg-foreground/5 text-[11px] font-bold uppercase tracking-widest rounded-none">{skill}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ————— SECTION: DESIGN TOOLS ————— */}
      <section id="design-tools" className="bg-background relative overflow-hidden py-32 px-6 md:px-10 lg:px-16 xl:px-24 border-t border-border/10">
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="pb-12 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-border/10 mb-12 gap-6">
            <div className="space-y-4">
              <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-[#ffcc01] mb-4 block">Professional Toolkit</span>
              <h2 className="text-3xl md:text-7xl font-medium tracking-tight">My Workspace Essentials</h2>
            </div>
            <p className="text-muted text-sm max-w-sm mb-2 font-light">
              The professional tools I use to craft digital experiences, from initial brainstorm to production-ready design.
            </p>
          </div>
          <DesignTools />
        </div>
      </section>

      {/* ————— SECTION 4: STUDIO / EXPERIMENTAL ————— */}
      <section id="studio" className="py-24 md:py-48 px-6 md:px-10 lg:px-16 xl:px-24 bg-foreground text-background overflow-hidden relative">
        <div className="max-w-[1400px] mx-auto w-full text-center space-y-12 md:space-y-16 relative z-10">
          <motion.div {...fadeIn}>
            <span className="text-[12px] font-bold uppercase tracking-[0.5em] text-[#ffcc01] mb-8 sm:mb-12 block">The 7th Studio</span>
            <h2 className="text-[32px] sm:text-[48px] md:text-[72px] lg:text-[96px] font-bold tracking-tighter leading-[1.05] italic break-words">
              Imagination <br /> 
              <span className="text-[#ffcc01]">Running Ahead.</span>
            </h2>
            <p className="text-[16px] sm:text-[18px] md:text-[22px] opacity-60 font-light max-w-xl mx-auto mt-8 sm:mt-12 italic px-4">
              Where utility meets experimental art. A space for analogies, mental models, and the track I&apos;m on.
            </p>
          </motion.div>
          
          <motion.div {...fadeIn} className="pt-12 flex justify-center">
            <Link href="/laboratory">
              <button className="px-8 py-4 bg-[#ffcc01] text-black font-black rounded-none uppercase tracking-[0.2em] text-[10px] hover:scale-105 transition-all shadow-xl w-fit">
                Enter Laboratory
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ————— SECTION 6: COMMUNITY ————— */}
      <section id="community" className="py-32 px-6 md:px-10 lg:px-16 xl:px-24 bg-card relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto w-full">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <motion.div {...fadeIn} className="space-y-8">
                <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-[#ffcc01] mb-4 block">Ecosystem</span>
                <h2 className="text-3xl md:text-7xl font-medium tracking-tight">Join the Community</h2>
                <p className="text-lg md:text-xl text-muted font-light leading-relaxed max-w-xl">
                   Be part of a human-driven ecosystem focused on innovation, design, and sustainable change. Join our network of designers and strategists making a real-world impact.
                </p>
                <a 
                  href="https://www.figma.com/proto/feQrdfkOiIXbNXeUdgtYqz/HDI---Designs?page-id=4%3A4&node-id=783-40&viewport=57%2C187%2C0.48&t=CH5mNzlz6FHG05pX-1&scaling=scale-down-width&content-scaling=fixed&hide-ui=1" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-12 py-5 bg-[#ffcc01] text-black font-black uppercase tracking-[0.2em] text-xs hover:scale-105 transition-all  shadow-xl flex items-center gap-4 w-fit"
                >
                  Join Bhilai Chapter <ExternalLink size={18} />
                </a>
             </motion.div>
             
             <motion.div 
               {...fadeIn}
               className="relative w-full max-w-[420px] mx-auto aspect-square bg-white rounded-none overflow-hidden border border-border/50 shadow-2xl"
             >
                <Image 
                  src="/hdi qr.png" 
                  alt="HDI Bhilai Chapter QR Code" 
                  fill 
                  className="object-contain p-4" 
                />
             </motion.div>
           </div>
        </div>
      </section>

      {/* ————— SECTION 5: EDUCATION ————— */}
      <section id="education" className="py-32 px-6 md:px-12 lg:px-24 bg-background">
        <div className="max-w-[1400px] mx-auto w-full">
          <motion.div {...fadeIn} className="mb-20">
            <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-[#ffcc01] mb-4 block">Academic</span>
            <h2 className="text-3xl md:text-7xl font-medium tracking-tight">Education</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-0">
            {education.map((edu, idx) => (
              <CardContainer key={idx} className="inter-var w-full">
                <CardBody className="group/edu relative p-12 bg-card border border-border/50 rounded-none hover:border-[#ffcc01] transition-all shadow-sm hover:shadow-xl w-full h-auto">
                  <div className="flex justify-between items-start mb-8">
                    <CardItem
                      translateZ="100"
                      className="w-20 h-20 rounded-2xl bg-white p-2 flex items-center justify-center shadow-md group-hover/edu:scale-105 transition-transform overflow-hidden relative"
                    >
                      {edu.logo ? (
                        <div className="relative w-full h-full">
                          <Image 
                            src={edu.logo} 
                            alt={edu.school || "Institution Logo"} 
                            fill 
                            className="object-contain"
                          />
                        </div>
                      ) : (
                        <GraduationCap className="w-10 h-10 text-black" />
                      )}
                    </CardItem>
                    <CardItem translateZ="20" className="text-sm font-bold text-muted">{edu.period}</CardItem>
                  </div>
                  <CardItem translateZ="60" as="h3" className="text-2xl font-bold mb-2">{edu.degree}</CardItem>
                  {edu.school && <CardItem translateZ="40" as="p" className="text-lg text-muted font-light italic">{edu.school}</CardItem>}
                </CardBody>
              </CardContainer>
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
                  <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Recognition &amp; Speaking</h2>
                </div>
                <a 
                  href="https://heyzine.com/flip-book/86449a360c.html" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block p-10 bg-card border border-border/50 rounded-[40px] space-y-8 hover:border-[#ffcc01]/50 transition-all shadow-sm hover:shadow-xl cursor-pointer"
                >
                  <div className="flex flex-col items-start gap-5">
                    <span className="inline-block px-4 py-1.5 bg-[#ffcc01] text-black rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">Keynote Speaker</span>
                    <div className="space-y-3">
                      <h3 className="text-2xl md:text-3xl font-bold leading-tight">Friends of Figma, IIT Bhilai</h3>
                      <p className="text-lg md:text-xl text-muted font-light italic">Session on UX, brand behavior, and human psychology.</p>
                    </div>
                  </div>
                  <p className="text-lg text-muted leading-relaxed font-light">
                    Explored how cognitive patterns and user perception influence brand experience, trust, and digital decision-making.
                  </p>
                </a>
              </div>

              {/* Resume Button */}
              <div className="pt-4">
                <DownloadResumeButton
                  pdfPath="/pdf/RESUME Tushar .pdf"
                  fileName="Tushar_Kasarlewar_Resume.pdf"
                />
              </div>
            </motion.div>

            {/* Right Column: Keynote Image */}
            <motion.a 
              href="https://heyzine.com/flip-book/86449a360c.html"
              target="_blank"
              rel="noopener noreferrer"
              {...fadeIn} 
              className="block relative aspect-[3/4] max-w-md mx-auto w-full bg-card rounded-none overflow-hidden border border-border/50 group shadow-2xl cursor-pointer"
            >
              <Image 
                src="/keynote (1).png" 
                alt="Keynote at Friends of Figma, IIT Bhilai" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-12">
                 <p className="text-white text-xs font-bold uppercase tracking-widest">keynote speaker at IIT bhilai</p>
              </div>
            </motion.a>
          </div>
        </div>
      </section>

      {/* ————— SECTION 6: CONTACT ————— */}
      <section id="contact" className="py-32 px-6 md:px-12 lg:px-24 bg-background">
        <div className="max-w-[1400px] mx-auto w-full">
          <motion.div {...fadeIn} className="mb-12 md:mb-20">
            <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-[#ffcc01] mb-4 block">Get in Touch</span>
            <h2 className="text-3xl md:text-7xl font-medium tracking-tight">Let&apos;s Build Something.</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* Contact Form */}
            <motion.div {...fadeIn} className="space-y-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-muted">Full Name</label>
                    <input type="text"  className="w-full bg-background border border-border/50 rounded-none px-6 py-4 outline-none focus:border-[#ffcc01] transition-colors text-sm" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-muted">Email Address</label>
                    <input type="email"  className="w-full bg-background border border-border/50 rounded-none px-6 py-4 outline-none focus:border-[#ffcc01] transition-colors text-sm" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-muted">Subject</label>
                  <input type="text"  className="w-full bg-background border border-border/50 rounded-none px-6 py-4 outline-none focus:border-[#ffcc01] transition-colors text-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-muted">Message</label>
                  <textarea rows={5}  className="w-full bg-background border border-border/50 rounded-none px-6 py-4 outline-none focus:border-[#ffcc01] transition-colors text-sm resize-none"></textarea>
                </div>
                <button type="submit" className="w-full bg-foreground text-background font-bold uppercase tracking-[0.3em] py-6 rounded-none hover:bg-[#ffcc01] hover:text-black transition-all shadow-xl">
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
                  className="p-8 bg-card border border-border/50 rounded-none flex flex-col items-start gap-4 hover:border-[#ffcc01] hover:shadow-xl transition-all group shadow-sm"
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
            <a 
              href="#projects" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("projects");
              }}
              className="hover:text-[#ffcc01] transition-colors italic border-b border-transparent hover:border-[#ffcc01] pb-1"
            >
              Work
            </a>
          </div>
          <p className="text-[10px] font-bold text-muted uppercase tracking-[0.6em]">Tushar Kasarlewar &copy; 2026 / UI/UX Designer &amp; Strategist</p>
        </div>
      </footer>
    </div>
  );
}
