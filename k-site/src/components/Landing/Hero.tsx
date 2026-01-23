import logo from "@/assets/logo.png";
// import heroVideo from "@/assets/landing_vid.mp4";
import Countdown from "@/components/Landing/Countdown";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center pt-20">
      {/* Background Video */}
      {/* <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      /> */}

      {/* Dark overlay */}
      {/* <div className="absolute inset-0 bg-black/60" /> */}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center text-white px-4">
        <img
          src={logo}
          alt="Kurukshetra Logo"
          className="h-16 md:h-24 object-contain mb-6"
        />

        <h2
          className="text-xl md:text-6xl font-extrabold font-(family-name:--stalinist)
               bg-linear-to-r from-[#6101FE] to-[#FF00B3]
               bg-clip-text text-transparent"
        >
          MULTIVERSE <br /> RENAISSANCE
        </h2>

        {/* Countdown embedded into Hero */}
        <Countdown />
      </div>
    </section>
  );
}
