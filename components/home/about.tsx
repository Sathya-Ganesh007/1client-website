"use client";

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
  return (
    <div className="flex flex-col gap-0">
      {/* ————— SECTION 1: HERO ————— */}
      <section id="home" className="min-h-screen flex flex-col justify-center pt-32 pb-20 px-6 md:px-12 lg:px-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-[1400px] mx-auto w-full"
        >
          <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
            <div className="w-24 h-24 md:w-32 md:h-32 relative rounded-full overflow-hidden border-2 border-primary/20 p-1">
              <Image src="/portfolio_thumbnail_4.png" alt="Tushar Kasarlewar" fill className="object-cover rounded-full" />
            </div>
            <div className="space-y-2 text-left">
              <h2 className="text-xl md:text-2xl font-medium text-muted">Tushar Kasarlewar</h2>
              <p className="text-sm md:text-md uppercase tracking-[0.3em] font-bold text-primary">Brand Manager | Brand Strategist | Consultant</p>
            </div>
          </div>

          <h1 className="text-[40px] sm:text-[64px] md:text-[84px] lg:text-[104px] leading-[1.05] font-bold tracking-tighter mb-12 max-w-6xl">
            I help organizations <br />
            <span className="text-muted/30 italic">turn ambiguity into structure.</span>
          </h1>
          
          <div className="space-y-6 sm:space-y-8 text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] text-muted tracking-tight max-w-4xl font-light leading-relaxed">
            <p className="border-l-2 border-foreground/10 pl-6 sm:border-l-2 sm:pl-8 transition-colors hover:border-primary">
              I help organizations turn ambiguity into structure.
            </p>
             <p className="border-l-2 border-foreground/10 pl-6 sm:pl-8 transition-colors hover:border-primary opacity-60">
            My work sits at the intersection of positioning, communication, and structured brand growth.
            </p>
            <p className="border-l-2 border-foreground/10 pl-6 sm:pl-8 transition-colors hover:border-primary opacity-60">
             By combining brand strategy, product thinking, and behavioral design, I build systems that clarify decisions, strengthen experiences, and move businesses forward.
            </p>
          </div>

        </motion.div>
      </section>

      {/* ————— SECTION 2: EXPERIENCE ————— */}
      <section id="experience" className="py-32 px-6 md:px-12 lg:px-24 bg-surface/30">
        <div className="max-w-[1400px] mx-auto w-full">
          <motion.div {...fadeIn} className="mb-12 md:mb-20">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-4 block text-center sm:text-left">Professional Timeline</span>
            <h2 className="text-[36px] sm:text-[48px] md:text-[64px] font-bold tracking-tighter text-center sm:text-left">Experience.</h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-12">
            {experience.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 p-8 md:p-12 bg-background border border-border/50 rounded-[40px] hover:border-primary/30 transition-all shadow-sm hover:shadow-xl"
              >
                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary px-3 py-1 bg-primary/10 rounded-full">{exp.period}</span>
                    <h3 className="text-3xl font-bold tracking-tight mt-4">{exp.role}</h3>
                    <p className="text-xl text-muted font-medium">{exp.company} — <span className="text-sm italic">{exp.location}</span></p>
                  </div>
                  <div className="p-4 bg-surface/50 rounded-2xl border border-border/30">
                    <span className="text-[10px] font-black uppercase tracking-widest text-muted block mb-2">Primary Focus</span>
                    <p className="text-sm font-bold">{exp.focus}</p>
                  </div>
                </div>
                
                <ul className="space-y-4 pt-4 lg:pt-0 lg:pl-12 lg:border-l border-border/50">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex gap-4 text-muted items-start group-hover:text-foreground transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-2 shrink-0 group-hover:bg-primary transition-colors" />
                      <p className="text-lg font-light leading-relaxed">{bullet}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeIn} className="mt-20">
            <h3 className="text-2xl font-bold mb-10 opacity-40 uppercase tracking-widest text-center italic">Earlier Design Roles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {earlierRoles.map((role, idx) => (
                <motion.a 
                  key={idx} 
                  href={role.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="p-8 border border-border/50 rounded-3xl bg-background/50 flex flex-col gap-4 hover:border-primary/30 hover:bg-surface/50 transition-all group"
                >
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-bold text-primary italic uppercase tracking-widest">{role.period}</span>
                    <span className="text-[10px] font-bold text-muted uppercase tracking-widest">{role.location}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl leading-tight group-hover:text-primary transition-colors">{role.role}</h4>
                    <p className="text-sm text-muted mb-4">{role.company}</p>
                    <p className="text-[10px] uppercase tracking-wider font-extrabold text-muted/30 group-hover:text-muted/60 transition-colors">{role.focus}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ————— SECTION: PROJECTS ————— */}
      <section id="projects" className="py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto w-full">
          <motion.div {...fadeIn} className="mb-12 md:mb-20">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-4 block text-center sm:text-left">Case Studies</span>
            <h2 className="text-[36px] sm:text-[48px] md:text-[64px] font-bold tracking-tighter text-center sm:text-left">Selected Projects.</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
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
                <div className="aspect-[16/10] bg-surface relative overflow-hidden border border-border/50 group-hover:border-primary/20 transition-all rounded-[32px]">
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

      {/* ————— SECTION 3: CORE EXPERTISE ————— */}
      <section id="strategy" className="py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto w-full">
          <motion.div {...fadeIn} className="mb-12 md:mb-20 text-center">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-4 block">Methodology</span>
            <h2 className="text-[36px] sm:text-[48px] md:text-[64px] font-bold tracking-tighter uppercase italic text-center">Core Expertise.</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {expertise.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 sm:p-12 border border-border rounded-[32px] sm:rounded-[48px] hover:bg-surface transition-all flex flex-col gap-6 sm:gap-10 group"
              >
                <div className="w-16 h-16 rounded-3xl bg-primary/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  {idx === 0 ? <Layers strokeWidth={1.5} size={32} /> : idx === 1 ? <TrendingUp strokeWidth={1.5} size={32} /> : <LifeBuoy strokeWidth={1.5} size={32} />}
                </div>
                <div className="space-y-8">
                  <h3 className="text-2xl font-bold leading-tight uppercase tracking-tight">{item.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map(skill => (
                      <span key={skill} className="px-3 py-1 bg-foreground/5 text-[11px] font-bold uppercase tracking-widest rounded-full">{skill}</span>
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
            <span className="text-[10px] font-black uppercase tracking-[0.5em] opacity-40 mb-8 sm:mb-12 block">The 7th Studio</span>
            <h2 className="text-[40px] sm:text-[64px] md:text-[96px] lg:text-[120px] font-bold tracking-tighter leading-none italic">
              Imagination <br /> Running Ahead.
            </h2>
            <p className="text-[18px] sm:text-[20px] md:text-[24px] opacity-60 font-light max-w-2xl mx-auto mt-8 sm:mt-12 italic">
              Where utility meets experimental art. A space for analogies, mental models, and the track I&apos;m on.
            </p>
          </motion.div>
          
          <motion.div {...fadeIn} className="pt-20">
            <button className="px-16 py-8 bg-background text-foreground font-black uppercase tracking-[0.3em] text-xs hover:scale-105 transition-all rounded-full">
              Enter Laboratory
            </button>
          </motion.div>
        </div>
        
        {/* Background decorative element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-background/5 rounded-full pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-background/5 rounded-full pointer-events-none" />
      </section>

      {/* ————— SECTION 5: EDUCATION ————— */}
      <section id="education" className="py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto w-full">
          <motion.div {...fadeIn} className="mb-20">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-4 block">Academic Foundation</span>
            <h2 className="text-[36px] sm:text-[48px] md:text-[64px] font-bold tracking-tighter">Education.</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 border border-border/50 rounded-[40px] bg-surface/20 hover:bg-surface/40 hover:border-primary/30 transition-all group"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary/60">{edu.period}</span>
                </div>
                <h3 className="text-2xl font-bold leading-tight mb-2">{edu.degree}</h3>
                {edu.school && <p className="text-lg text-muted font-light italic">{edu.school}</p>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ————— SECTION 6: SPEAKING & ABOUT ————— */}
      <section id="about" className="py-32 px-6 md:px-12 lg:px-24 bg-surface/30">
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-24 items-center">
            {/* Left Column: Speaking */}
            <motion.div {...fadeIn} className="space-y-12">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    <Mic2 className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Recognition & Speaking Engagements</h2>
                </div>
                <div className="p-8 md:p-10 border border-border/50 rounded-[32px] md:rounded-[40px] space-y-6 md:space-y-8 bg-background hover:bg-surface transition-all group shadow-sm hover:shadow-xl">
                  <div className="space-y-4">
                    <span className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-[10px] font-black uppercase tracking-widest">Keynote Speaker</span>
                    <h3 className="text-xl md:text-2xl font-bold leading-tight">Friends of Figma, IIT Bhilai</h3>
                    <p className="text-md md:text-lg text-muted font-light italic">Session on UX, brand behavior, and human psychology.</p>
                  </div>
                  <p className="text-sm text-muted leading-relaxed font-light">
                    Explored how cognitive patterns and user perception influence brand experience, trust, and digital decision-making.
                  </p>
                </div>
              </div>

              {/* Resume Button */}
              <div className="pt-4">
                <button className="w-full flex justify-between items-center px-8 md:px-10 py-6 md:py-8 bg-foreground text-background rounded-2xl md:rounded-3xl group hover:scale-[1.02] transition-all">
                  <span className="text-xs md:text-sm font-black uppercase tracking-[0.4em]">Download Detailed Resume</span>
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </motion.div>

            {/* Right Column: Keynote Image */}
            <motion.div 
              {...fadeIn} 
              className="relative aspect-[3/4] max-w-md mx-auto w-full bg-background rounded-[32px] md:rounded-[48px] overflow-hidden border border-border/50 group shadow-2xl"
            >
              <Image 
                src="/keynote (1).png" 
                alt="Keynote at Friends of Figma, IIT Bhilai" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8 md:p-12">
                 <p className="text-white text-[10px] md:text-xs font-bold uppercase tracking-widest">Speaking at IIT Bhilai</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ————— SECTION 6: CONTACT ————— */}
      <section id="contact" className="py-32 px-6 md:px-12 lg:px-24 bg-surface/30">
        <div className="max-w-[1400px] mx-auto w-full">
          <motion.div {...fadeIn} className="mb-12 md:mb-20 text-center">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-4 block">Get in Touch</span>
            <h2 className="text-[36px] sm:text-[48px] md:text-[64px] font-bold tracking-tighter">Let&apos;s Build Something.</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* Contact Form */}
            <motion.div {...fadeIn} className="space-y-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-muted">Full Name</label>
                    <input type="text"  className="w-full bg-background border border-border/50 rounded-2xl px-6 py-4 outline-none focus:border-primary transition-colors text-sm" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-muted">Email Address</label>
                    <input type="email"  className="w-full bg-background border border-border/50 rounded-2xl px-6 py-4 outline-none focus:border-primary transition-colors text-sm" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-muted">Subject</label>
                  <input type="text"  className="w-full bg-background border border-border/50 rounded-2xl px-6 py-4 outline-none focus:border-primary transition-colors text-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-muted">Message</label>
                  <textarea rows={5}  className="w-full bg-background border border-border/50 rounded-2xl px-6 py-4 outline-none focus:border-primary transition-colors text-sm resize-none"></textarea>
                </div>
                <button type="submit" className="w-full bg-foreground text-background font-black uppercase tracking-[0.4em] py-6 rounded-2xl hover:bg-primary hover:text-white transition-all">
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
                  className="p-8 bg-background border border-border/50 rounded-[32px] flex flex-col items-start gap-4 hover:border-primary/30 hover:shadow-xl transition-all group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-surface/50 flex items-center justify-center text-muted group-hover:text-primary transition-colors">
                    {contact.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted block mb-2">{contact.label}</span>
                    <p className="text-sm font-bold tracking-tight break-all">{contact.value}</p>
                  </div>
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ————— FOOTER ————— */}
      <footer className="py-32 px-6 md:px-12 border-t border-border flex flex-col items-center text-center overflow-hidden">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 0.03, scale: 1 }}
           className="absolute pointer-events-none w-full"
        >
          <h4 className="text-[80px] sm:text-[160px] md:text-[280px] lg:text-[400px] font-black tracking-tighter select-none leading-none -mb-16 md:-mb-32">
            TUSHAR
          </h4>
        </motion.div>
        
        <div className="relative z-10 space-y-12">
          <div className="flex flex-wrap justify-center gap-8 text-[12px] font-black uppercase tracking-[0.4em] text-muted">
            <a href="mailto:tushar.kasarlewar@gmail.com" className="hover:text-primary transition-colors italic border-b border-transparent hover:border-primary pb-1">Email</a>
            <a href="https://www.linkedin.com/in/tushar-kasarlewar-43b476a8/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors italic border-b border-transparent hover:border-primary pb-1">LinkedIn</a>
            <a href="#" className="hover:text-primary transition-colors italic border-b border-transparent hover:border-primary pb-1">Twitter (X)</a>
            <a href="#" className="hover:text-primary transition-colors italic border-b border-transparent hover:border-primary pb-1">Work</a>
          </div>
          <p className="text-[10px] font-black text-muted uppercase tracking-[0.6em]">Tushar Kasarlewar &copy; 2026 / Brand Strategist Portfolio</p>
        </div>
      </footer>
    </div>
  );
}
