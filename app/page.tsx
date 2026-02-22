import Navbar from "@/components/home/Navbar";
import About from "@/components/home/about";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header>
        <Navbar />
      </header>
      
      <main>
        <About />
      </main>
    </div>
  );
}
