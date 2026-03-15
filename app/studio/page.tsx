import Navbar from "@/components/home/Navbar";
import Image from "next/image";
import React from "react";

export default function The7thStudioWebsite() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white pt-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-8xl font-extrabold mb-6 leading-tight">
            Crafting Brands<br />with <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Purpose</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Strategic brand design that balances geometric precision with dynamic creativity. Where engineering meets artistry.
          </p>
          <a href="#contact" className="inline-block px-10 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-orange-500 transition-all hover:shadow-2xl hover:shadow-orange-500/30">
            Let's Create Together
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-extrabold mb-6">Designer. Engineer. Strategist.</h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              I'm <span className="text-orange-500 font-semibold">Tushar Kasarlewar</span>, the creative force behind The 7th Studio. With a unique blend of engineering precision and design intuition, I craft brand identities that are both technically sound and visually compelling.
            </p>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              My approach is rooted in <span className="text-orange-500 font-semibold">geometry, balance, and purposeful abstraction</span>—creating logos and brand systems that communicate deeper meaning while maintaining visual appeal.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Every project is an opportunity to distill complex ideas into elegant, dynamic visual solutions.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <svg width="400" height="400" viewBox="0 0 400 400" className="w-full max-w-md">
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor: '#ff8c42', stopOpacity: 1}} />
                  <stop offset="100%" style={{stopColor: '#ff6b35', stopOpacity: 1}} />
                </linearGradient>
              </defs>
              <polygon points="200,50 350,200 200,350 50,200" fill="url(#grad1)" opacity="0.9"/>
              <polygon points="100,150 200,250 100,250" fill="#1a1a1a"/>
              <rect x="185" y="185" width="30" height="30" fill="white" transform="rotate(45 200 200)"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-extrabold text-center mb-16">What I Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🎯', title: 'Brand Strategy', desc: 'Developing comprehensive brand positioning, messaging, and visual identity systems that resonate with your target audience.' },
              { icon: '✏️', title: 'Logo Design', desc: 'Crafting distinctive, memorable logos that embody your brand\'s essence through geometric precision and creative abstraction.' },
              { icon: '📱', title: 'Visual Identity', desc: 'Creating cohesive visual systems including color palettes, typography, patterns, and brand guidelines.' },
              { icon: '🚀', title: 'Brand Consulting', desc: 'Providing strategic guidance on brand evolution, market positioning, and visual communication strategies.' },
              { icon: '🎨', title: 'Creative Direction', desc: 'Leading comprehensive creative initiatives from concept to execution with a focus on innovation and impact.' },
              { icon: '⚡', title: 'Digital Design', desc: 'Designing modern, user-centric digital experiences that align with your brand identity and business goals.' }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-3xl mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logo Showcase */}
      <section id="work" className="py-24 px-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-extrabold text-center mb-16">The 7th Studio Identity</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-md p-12 rounded-2xl border border-white/10 flex flex-col items-center justify-center min-h-[320px]">
              <p className="text-white/50 text-sm mb-6">PRIMARY MARK</p>
              <svg width="300" height="200" viewBox="0 0 600 400">
                <defs>
                  <linearGradient id="orange" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#ff9f5a', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#ff8c42', stopOpacity: 1}} />
                  </linearGradient>
                </defs>
                <polygon points="200,50 350,200 200,350 50,200" fill="url(#orange)"/>
                <polygon points="100,150 200,250 100,250" fill="#000000"/>
                <rect x="185" y="185" width="30" height="30" fill="white" transform="rotate(45 200 200)"/>
                <text x="380" y="220" fontFamily="Arial, sans-serif" fontSize="48" fontWeight="700" fill="white">
                  THE <tspan fill="#ff8c42">7</tspan><tspan fontSize="32" dy="-10">th</tspan> STUDIO
                </text>
              </svg>
            </div>
            <div className="bg-white/5 backdrop-blur-md p-12 rounded-2xl border border-white/10 flex flex-col items-center justify-center min-h-[320px]">
              <p className="text-white/50 text-sm mb-6">GRADIENT VARIANT</p>
              <svg width="300" height="200" viewBox="0 0 600 400">
                <defs>
                  <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#a855f7', stopOpacity: 1}} />
                    <stop offset="50%" style={{stopColor: '#8b5cf6', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#6366f1', stopOpacity: 1}} />
                  </linearGradient>
                </defs>
                <polygon points="200,50 350,200 200,350 50,200" fill="url(#blueGrad)"/>
                <polygon points="100,150 200,250 100,250" fill="rgba(255,255,255,0.2)"/>
                <rect x="185" y="185" width="30" height="30" fill="white" transform="rotate(45 200 200)"/>
                <text x="380" y="220" fontFamily="Arial, sans-serif" fontSize="48" fontWeight="700" fill="white">
                  THE <tspan fill="#a855f7">7</tspan><tspan fontSize="32" dy="-10">th</tspan> STUDIO
                </text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-extrabold text-center mb-16">Selected Work</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                image: '/selected works/Group 334.png', 
                title: 'Green Bharat', 
                subtitle: 'Brand Identity & Strategy', 
                link: 'https://greenbharatagro.com/',
                internalLink: '/work/green-bharat' 
              },
              { 
                image: '/selected works/Group 332.png', 
                title: 'Eblity', 
                subtitle: 'Visual Identity System', 
                link: 'https://www.eblity.com/',
                internalLink: '/work/eblity' 
              },
              { 
                image: "/selected works/moggly's landing preview.png", 
                title: 'Moggly India', 
                subtitle: 'Logo Design & Branding',
                link: 'https://www.moggly.in/'
              }
            ].map((project, index) => (
              <div key={index} className="group relative h-[500px] rounded-[32px] overflow-hidden border border-gray-100 shadow-sm bg-white">
                {/* External Link on Image */}
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-10"
                >
                  <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill 
                      className="object-cover"
                    />
                  </div>
                </a>

                {/* Internal Link Overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent p-8 text-white z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-bold mb-1 tracking-tight">{project.title}</h3>
                  <p className="text-white/70 mb-6 text-sm italic">{project.subtitle}</p>
                  
                  {project.internalLink && (
                    <a 
                      href={project.internalLink}
                      className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all hover:scale-105 active:scale-95"
                    >
                      Explore My Work
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Roadmap Section - Green Bharat Inspired */}
      <section id="roadmap" className="py-32 px-6 bg-white overflow-hidden relative">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-24 space-y-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🥦</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-green-600 uppercase">Green Bharat Roadmap</h2>
            <p className="text-gray-500 tracking-[0.2em] text-sm font-semibold uppercase">Step by Step Journey</p>
          </div>

          <div className="relative">
            {/* The Zig-Zag SVG Path connecting nodes */}
            <div className="absolute inset-0 w-full h-full pointer-events-none hidden md:block" style={{ zIndex: -1 }}>
              <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 800 1200" fill="none" stroke="currentColor">
                <path 
                  d="M 400 0 
                     L 600 100 
                     L 200 300 
                     L 550 450 
                     L 250 650 
                     L 600 800 
                     L 300 1000 
                     L 400 1200"
                  strokeWidth="4" 
                  className="text-gray-100/70"
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />
              </svg>
            </div>

            <div className="space-y-16 md:space-y-24">
              
              {/* Foundation Badge */}
              <div className="flex justify-center -mt-10 mb-10">
                <span className="bg-emerald-500 text-white text-xs font-bold px-6 py-2 rounded-full uppercase tracking-widest shadow-lg shadow-emerald-500/20">
                  Foundation
                </span>
              </div>

              {/* Node 1 */}
              <div className="flex flex-col md:flex-row items-center md:items-start justify-start gap-6 md:w-3/4">
                <div className="w-14 h-14 bg-emerald-500 rounded-full text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-emerald-500/30 flex-shrink-0 z-10">
                  01
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 w-full max-w-sm hover:-translate-y-1 transition-transform">
                  <div className="text-2xl mb-2">🎯</div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Brand Context Mapping</h3>
                  <p className="text-gray-500 text-sm">Define positioning & target audience</p>
                </div>
              </div>

              {/* Node 2 */}
              <div className="flex flex-col md:flex-row-reverse items-center md:items-start justify-start gap-6 md:w-3/4 ml-auto">
                <div className="w-14 h-14 bg-blue-500 rounded-full text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-blue-500/30 flex-shrink-0 z-10">
                  02
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 w-full max-w-sm text-center md:text-right hover:-translate-y-1 transition-transform">
                  <div className="text-2xl mb-2">🔍</div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Market Analysis</h3>
                  <p className="text-gray-500 text-sm">Study competitors & find positioning gap</p>
                </div>
              </div>

              {/* Node 3 */}
              <div className="flex flex-col md:flex-row items-center md:items-start justify-start gap-6 md:w-3/4">
                <div className="w-14 h-14 bg-orange-500 rounded-full text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-orange-500/30 flex-shrink-0 z-10">
                  03
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 w-full max-w-sm hover:-translate-y-1 transition-transform">
                  <div className="text-2xl mb-2">⚡</div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Brand Positioning Strategy</h3>
                  <p className="text-gray-500 text-sm">Create unique brand positioning framework</p>
                </div>
              </div>

              {/* Identity Badge */}
              <div className="flex justify-center py-6">
                <span className="bg-blue-600 text-white text-xs font-bold px-6 py-2 rounded-full uppercase tracking-widest shadow-lg shadow-blue-600/20">
                  Identity
                </span>
              </div>

              {/* Node 4 */}
              <div className="flex flex-col md:flex-row-reverse items-center md:items-start justify-start gap-6 md:w-3/4 ml-auto">
                <div className="w-14 h-14 bg-purple-500 rounded-full text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-purple-500/30 flex-shrink-0 z-10">
                  04
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 w-full max-w-sm text-center md:text-right hover:-translate-y-1 transition-transform">
                  <div className="text-2xl mb-2">💬</div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Brand Personality & Voice</h3>
                  <p className="text-gray-500 text-sm">Define tone & communication style</p>
                </div>
              </div>

              {/* Node 5 */}
              <div className="flex flex-col md:flex-row items-center md:items-start justify-start gap-6 md:w-3/4">
                <div className="w-14 h-14 bg-rose-500 rounded-full text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-rose-500/30 flex-shrink-0 z-10">
                  05
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 w-full max-w-sm hover:-translate-y-1 transition-transform">
                  <div className="text-2xl mb-2">🎨</div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Visual Identity System</h3>
                  <p className="text-gray-500 text-sm">Design logo, type, colors & icons</p>
                </div>
              </div>

              {/* Architecture Badge */}
              <div className="flex justify-center py-6">
                <span className="bg-orange-500 text-white text-xs font-bold px-6 py-2 rounded-full uppercase tracking-widest shadow-lg shadow-orange-500/20">
                  Web Architecture
                </span>
              </div>

              {/* Node 6 */}
              <div className="flex flex-col md:flex-row-reverse items-center md:items-start justify-start gap-6 md:w-3/4 ml-auto">
                <div className="w-14 h-14 bg-teal-500 rounded-full text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-teal-500/30 flex-shrink-0 z-10">
                  06
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 w-full max-w-sm text-center md:text-right hover:-translate-y-1 transition-transform">
                  <div className="text-2xl mb-2">📐</div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Website Wireframing</h3>
                  <p className="text-gray-500 text-sm">Structure the homepage & key pages</p>
                </div>
              </div>

              {/* Node 7 */}
              <div className="flex flex-col md:flex-row items-center md:items-start justify-start gap-6 md:w-3/4">
                <div className="w-14 h-14 bg-indigo-500 rounded-full text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-indigo-500/30 flex-shrink-0 z-10">
                  07
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 w-full max-w-sm hover:-translate-y-1 transition-transform">
                  <div className="text-2xl mb-2">🖥️</div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Framer Website Execution</h3>
                  <p className="text-gray-500 text-sm">Build website focusing on storytelling & conversion</p>
                </div>
              </div>

              {/* Section Badge */}
              <div className="flex justify-center py-6">
                <span className="bg-purple-600 text-white text-xs font-bold px-6 py-2 rounded-full uppercase tracking-widest shadow-lg shadow-purple-600/20">
                  Sales System
                </span>
              </div>

              {/* Node 8 */}
              <div className="flex flex-col md:flex-row-reverse items-center md:items-start justify-start gap-6 md:w-3/4 ml-auto">
                <div className="w-14 h-14 bg-amber-500 rounded-full text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-amber-500/30 flex-shrink-0 z-10">
                  08
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 w-full max-w-sm text-center md:text-right hover:-translate-y-1 transition-transform">
                  <div className="text-2xl mb-2">🧲</div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Lead Funnel Strategy</h3>
                  <p className="text-gray-500 text-sm">Develop assets report, lead magnets & follow-up</p>
                </div>
              </div>

              {/* Node 9 */}
              <div className="flex flex-col md:flex-row items-center md:items-start justify-start gap-6 md:w-3/4">
                <div className="w-14 h-14 bg-emerald-600 rounded-full text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-emerald-500/30 flex-shrink-0 z-10">
                  09
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 w-full max-w-sm hover:-translate-y-1 transition-transform">
                  <div className="text-2xl mb-2">🎬</div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Conversion Content Setup</h3>
                  <p className="text-gray-500 text-sm">Scripts for short videos highlighting benefits & transparency</p>
                </div>
              </div>

              {/* Section Badge */}
              <div className="flex justify-center py-6">
                <span className="bg-red-500 text-white text-xs font-bold px-6 py-2 rounded-full uppercase tracking-widest shadow-lg shadow-red-500/20">
                  Trust & Scale
                </span>
              </div>

              {/* Node 10 */}
              <div className="flex flex-col md:flex-row-reverse items-center md:items-start justify-start gap-6 md:w-3/4 ml-auto">
                <div className="w-14 h-14 bg-cyan-600 rounded-full text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-cyan-500/30 flex-shrink-0 z-10">
                  10
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 w-full max-w-sm text-center md:text-right hover:-translate-y-1 transition-transform">
                  <div className="text-2xl mb-2">👥</div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Community Building</h3>
                  <p className="text-gray-500 text-sm">Farm visits, impact reports & investor meetups</p>
                </div>
              </div>

              {/* Node 11 */}
              <div className="flex flex-col md:flex-row items-center md:items-start justify-start gap-6 md:w-3/4">
                <div className="w-14 h-14 bg-violet-500 rounded-full text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-violet-500/30 flex-shrink-0 z-10">
                  11
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 w-full max-w-sm hover:-translate-y-1 transition-transform">
                  <div className="text-2xl mb-2">📈</div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Digital Growth Acceleration</h3>
                  <p className="text-gray-500 text-sm">Leverage paid ads targeting NRIs & sustainability segments</p>
                </div>
              </div>

              {/* Node 12 */}
              <div className="flex flex-col md:flex-row-reverse items-center md:items-start justify-start gap-6 md:w-3/4 ml-auto">
                <div className="w-14 h-14 bg-orange-600 rounded-full text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-orange-500/30 flex-shrink-0 z-10">
                  12
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 w-full max-w-sm text-center md:text-right hover:-translate-y-1 transition-transform">
                  <div className="text-2xl mb-2">🚀</div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Scale & Expand</h3>
                  <p className="text-gray-500 text-sm">Launch new programs and expand ecosystem reach</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Brand Identity Concept Roadmap - PNG */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-[40px] overflow-hidden shadow-2xl border border-white/10 p-4 flex justify-center bg-black">
            <Image 
              src="/GreenBharat.png" 
              alt="Green Bharat Brand Identity Concept Roadmap" 
              width={1600} 
              height={900} 
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Brand Identity Concept Roadmap - SVG */}
      <section className="py-24 px-6 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-[40px] overflow-hidden shadow-2xl border border-white/10 p-4 flex justify-center bg-black">
            <Image 
              src="/GreenBharat - Brand Identity Concept.svg" 
              alt="Green Bharat Brand Identity Concept Roadmap SVG" 
              width={1600} 
              height={900} 
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-gray-900 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-extrabold mb-6">Let's Work Together</h2>
          <p className="text-xl text-white/70 mb-10">Ready to elevate your brand with strategic design?</p>
          <a href="mailto:contact@the7thstudio.com" className="text-4xl font-bold text-orange-500 hover:text-orange-400 transition inline-block hover:scale-105">
            contact@the7thstudio.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-black text-white/50 text-center">
        <p>&copy; 2026 The 7th Studio. Designed with precision and purpose.</p>
      </footer>
    </div>
  );
}
