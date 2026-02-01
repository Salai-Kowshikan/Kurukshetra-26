import { useEffect } from "react";
import { useNavbarStore } from "@/store/navbarStore";

import Hero from "@/components/Landing/Hero";
import Patronage from "@/components/Landing/Patronage";
import About from "@/components/Landing/About";
import Background from "@/components/Background";

export default function Home() {
  const setHomeNavbar = useNavbarStore((s) => s.setHomeNavbar);

  useEffect(() => {
    setHomeNavbar();
  }, []);

  return (
    <main
      className="relative min-h-screen overflow-hidden text-white"
      style={{
        background: "linear-gradient(180deg, #000000 0%, #30005A 100%)",
      }}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Background />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 w-full pointer-events-none">
        <Hero />
        <Patronage />
        <About />
      </div>
      
    </main>
  );
}

