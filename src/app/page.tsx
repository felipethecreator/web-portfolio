import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header/>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
        <Hero/>
        <About/>
      </main>
    </div>
  );
}
