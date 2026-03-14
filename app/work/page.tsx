import Link from "next/link";
import Navbar from "@/components/home/Navbar";

export default function WorkPage() {
  const projects = [
    {
      title: "Green Bharat",
      category: "Brand Strategy",
      description: "Scaling a legacy brand through structural logic and founder alignment.",
      href: "/work/green-bharat"
    },
    {
      title: "Eblity",
      category: "UX Strategy",
      description: "Simplifying complex learning systems into cognitive-driven flows.",
      href: "/work/eblity"
    },
    {
      title: "Moggly India",
      category: "Brand Management",
      description: "Managing a retail brand's evolution and perception in a shifting market.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <header>
        <Navbar />
      </header>

      <main className="max-w-[1200px] mx-auto px-12 pt-20 pb-40">
        <section className="mb-24">
          <h1 className="text-[42px] leading-[1.2] font-semibold tracking-tight mb-8">
            Selected Work.
          </h1>
          <p className="text-[22px] text-[#737373] tracking-tight max-w-2xl">
            A look at projects where I&apos;ve applied systems thinking and brand strategy to solve complex business problems.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-32">
          {projects.map((project, idx) => (
            <Link 
              key={idx} 
              href={project.href || "#"} 
              className={`group cursor-pointer ${!project.href && 'pointer-events-none'}`}
            >
              <div className="aspect-[16/10] bg-[#f5f5f5] mb-8 overflow-hidden">
                <div className="w-full h-full group-hover:scale-105 transition-transform duration-700 bg-zinc-100 flex items-center justify-center text-zinc-300 font-bold tracking-tighter text-4xl select-none">
                  {project.title.charAt(0)}
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-[11px] font-black uppercase tracking-[0.3em] text-[#737373]">
                  {project.category}
                </p>
                <h3 className="text-3xl font-bold tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                  {project.title}
                </h3>
                <p className="text-lg text-[#737373] leading-relaxed max-w-sm">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </section>
      </main>
    </div>
  );
}
