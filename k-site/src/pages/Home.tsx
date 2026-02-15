import { useEffect } from "react";
import { useNavbarStore, type NavbarStore } from "@/store/navbarStore";

import Hero from "@/components/Landing/Hero";
import Patronage from "@/components/Landing/Patronage";
import About from "@/components/Landing/About";
import Background from "@/components/Background";

export default function Home() {
  const setHomeNavbar = useNavbarStore((s: NavbarStore) => s.setHomeNavbar);

  useEffect(() => {
    setHomeNavbar();
  }, [setHomeNavbar]);

  return (
    <main
      className="relative min-h-screen overflow-hidden text-white"
    >
      {/* Foreground content */}
      <div className="relative z-10 w-full ">
        <Hero />
        <Patronage />
        <About />
      </div>
      
    </main>
  );
}



