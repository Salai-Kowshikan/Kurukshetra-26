import Hero from "@/components/Landing/Hero";
import Patronage from "@/components/Landing/Patronage";
import About from "@/components/Landing/About";
import Background from "@/components/Background";

export default function Home() {
  return (
    <main
      style={{
        background: "linear-gradient(180deg, #000000 0%, #30005A 100%)",
      }}
      className="relative text-white min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="fixed inset-0 z-0">
        <Background />
      </div>
      <Hero />
      <Patronage />
      <About />
    </main>
  );
}
