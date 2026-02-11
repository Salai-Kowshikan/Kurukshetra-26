import bgImg from "@/assets/Img.png";
import NIOT from "@/assets/NIOT.png";
import ShankarIAS from "@/assets/ShankarIAS.png";
import Zentropy from "@/assets/zen.jpg";
import Tilt from "react-parallax-tilt";
import { useState ,useEffect} from "react";

type Sponsor = {
  src: string;
  alt: string;
  title?: string;
  desc?: string;
  url?: string;
};

const sponsors: Sponsor[] = [
  {
    src: NIOT,
    alt: "NIOT",
    url: "https://www.niot.res.in",
    title: "Co Sponsor",
    desc: "The National Institute of Ocean Technology (NIOT) is an autonomous organization under the Ministry of Earth Sciences, Government of India, established in 1993 and headquartered in Chennai. It focuses on developing indigenous technologies for ocean exploration, deep-sea mining, underwater vehicles, desalination, marine renewable energy, and coastal protection. NIOT plays a vital role in advancing India’s ocean research and supports the country’s Deep Ocean Mission."
  },
  {
    src: ShankarIAS,
    alt: "ShankarIAS",
    url: "https://www.shankariasacademy.com",
    title: "Associate Sponsor",
  },
  {
    src: Zentropy,
    alt: "Zentropy",
    url: "https://www.zentropytech.com/",
    title: "Technology Partner",    
  }
];

export default function Sponsors() {
  const [active, setActive] = useState<Sponsor | null>(null);

  const [hoverPos, setHoverPos] = useState({ x: 50, y: 50 });

  

  const openLink = (url?: string) => {
    if (!url) return;
    window.open(url, "_blank", "noopener,noreferrer");
  };
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 500);
    }, 3000 + Math.random() * 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pb-20 overflow-hidden" 
    style={{ background: "var(--contact-bg)" }}
    >

      <img src={bgImg} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 w-[90%] max-w-7xl mx-auto">

        {/* GLITCH HEADING */}
        <div className="flex justify-center mb-16">
          <div className={`relative ${glitch ? "glitch-active" : ""}`}>
            <h2
            className="sponsor-glitch text-3xl md:text-5xl lg:mt-20 mt-28 font-medium text-white font-(family-name:--wallpoet)"
            data-text="OUR SPONSORS"
          >
              OUR SPONSORS
            </h2>
          </div>
        </div>



        {/* FLEX WRAP */}
        <div className="flex flex-wrap justify-center gap-14">

          {sponsors.map((s, i) => (
            <button
              key={i}
              onClick={() => {
                if (s.desc) {
                  setActive(s);
                } else {
                  openLink(s.url);
                }
              }}
              className="group relative w-full md:w-[45%] lg:w-[30%] max-w-[420px]"
            >

              <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6} scale={1.02} glareEnable glareMaxOpacity={0.1}>

                <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 h-[320px] flex flex-col items-center justify-center overflow-hidden rounded-xl">

                  {/* TITLE */}
                  {s.title && (
                    <div className="absolute top-4 text-lg tracking-widest text-white font-(family-name:--wallpoet)">
                      {s.title}
                    </div>
                  )}

                  {/* GRID */}
                  <div className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)
                      `,
                      backgroundSize: "40px 40px"
                    }}
                  />

                  {/* HOVER SPOT */}
                  <div
                    className="pointer-events-none absolute w-32 h-32 blur-xl opacity-0 group-hover:opacity-100 transition"
                    style={{
                      background: "radial-gradient(circle, rgba(138,5,255,0.4), transparent 70%)",
                      left: `${hoverPos.x}%`,
                      top: `${hoverPos.y}%`,
                      transform: "translate(-50%, -50%)"
                    }}
                  />

                  {/* LOGO */}
                  <img
                    src={s.src}
                    alt={s.alt}
                    onMouseMove={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      setHoverPos({
                        x: ((e.clientX - rect.left) / rect.width) * 100,
                        y: ((e.clientY - rect.top) / rect.height) * 100
                      });
                    }}
                    className="max-h-[55%] object-contain transition duration-500 group-hover:scale-110"
                  />

                </div>
              </Tilt>
            </button>
          ))}
        </div>

        {active && active.desc && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            onClick={() => setActive(null)}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-[40%] h-[50vh] bg-black/80 backdrop-blur-xl border border-white/20 rounded-xl shadow-[0_0_40px_#8A05FF] flex flex-col"
            >
              <div className="flex-1 overflow-y-auto p-6">
                <h3 className="text-xl mb-3 font-(family-name:--wallpoet) text-center text-white">
                  {active.title} - {active.alt}
                </h3>

                <p className="text-white/80 text-sm leading-relaxed">
                  {active.desc}
                </p>
              </div>

              {active.url && (
                <div className="pb-6 flex justify-center">
                  <button
                    onClick={() => openLink(active.url)}
                    className="px-6 py-2 bg-[#8A05FF] rounded-md text-white text-sm hover:brightness-125 transition shadow-[0_0_15px_#8A05FF]"
                  >
                    Visit Site →
                  </button>
                </div>
              )}
            </div>
          </div>
        )}



      </div>

      
    </section>
  );
}
