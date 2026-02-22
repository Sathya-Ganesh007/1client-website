import Navbar from "@/components/home/Navbar";

export default function TrackPage() {
  return (
    <div className="min-h-screen bg-white">
      <header>
        <Navbar />
      </header>
      <main className="max-w-[1200px] mx-auto px-12 pt-40 pb-40 text-center">
        <h1 className="text-[64px] font-bold tracking-tighter mb-8">The Track I&apos;m On.</h1>
        <p className="text-[22px] text-[#737373] max-w-2xl mx-auto">
          Journaling the journey, my evolution as a strategist, and where I&apos;m headed next.
        </p>
      </main>
    </div>
  );
}
