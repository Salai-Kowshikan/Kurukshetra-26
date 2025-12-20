import Hero from "@/components/Landing/Hero"
import Countdown from "@/components/Landing/Countdown"
import Listings from "@/components/Landing/Listings"
import Patronage from "@/components/Landing/Patronage"
import About from "@/components/Landing/About"

export default function Home() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center">
      <Hero />
      <Countdown />
      <Listings />
      <Patronage />
      <About />
    </main>
  )
}