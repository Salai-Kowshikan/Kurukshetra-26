import Hero from "@/components/Landing/Hero"
import Listings from "@/components/Landing/Listings"
import Patronage from "@/components/Landing/Patronage"
import About from "@/components/Landing/About"

export default function Home() {
  return (
    <main
      className="flex text-white min-h-screen flex-col items-center justify-center"
      style={{ background: 'linear-gradient(180deg, #000000 0%, #30005A 100%)' }}
    >
      <Hero />
      <Listings />
      <Patronage />
      <About />
    </main>
  )
}