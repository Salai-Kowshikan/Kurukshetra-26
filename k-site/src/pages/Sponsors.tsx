import bgImg from "@/assets/Img.png";
import placeholder from "@/assets/ieee_logo.png";
import Tilt from "react-parallax-tilt";
import { useState } from "react";

type Sponsor = {
  src: string;
  alt: string;
  url?: string;
};

const sponsors: Sponsor[] = [
  { src: placeholder, alt: "Sponsor", url: "https://example.com" },
  { src: placeholder, alt: "Sponsor 2" },
  { src: placeholder, alt: "Sponsor 3", url: "https://example.org" },
  // { src: placeholder, alt: "Sponsor 4" },
  // { src: placeholder, alt: "Sponsor 5" },
  // { src: placeholder, alt: "Sponsor 6" },
];

export default function Sponsors() {
  const openLink = (url?: string) => {
    if (!url) return;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const [hoverPos, setHoverPos] = useState({ x: 50, y: 50 });

  return (
    <section className="relative min-h-screen flex items-center justify-center  pb-16 overflow-hidden" style={{ background: "var(--contact-bg)" }}>
      
      {/* BACKGROUND */}
      <img
        src={bgImg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-bottom z-0"
      />
      <div className="absolute inset-0 bg-black/25 z-0" />

      <div className="relative z-10 w-[90%] max-w-7xl mx-auto">
        <h3 className="text-center text-2xl md:text-3xl font-bold text-white mb-14 tracking-widest font-(family-name:--wallpoet)">
          OUR SPONSORS
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
          {sponsors.map((s, i) => (
            <button
              key={i}
              onClick={() => openLink(s.url)}
              className="group relative"
            >
              <Tilt
                glareEnable
                glareMaxOpacity={0.15}
                scale={1.02}
                tiltMaxAngleX={7}
                tiltMaxAngleY={7}
                className="relative rounded-2xl"
              >
                {/* OUTER GLOW */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 
                  transition duration-300 shadow-[0_0_40px_#8A05FF]" />

                {/* GLASS CARD */}
                <div
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = ((e.clientX - rect.left) / rect.width) * 100;
                    const y = ((e.clientY - rect.top) / rect.height) * 100;
                    setHoverPos({ x, y });
                  }}
                  className="relative rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20
                  h-[35vh] flex items-center justify-center overflow-hidden"
                >
                  {/* GRID */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
                      `,
                      backgroundSize: "40px 40px",
                    }}
                  />

                  {/* GRID HIGHLIGHT */}
                  <div
                    className="pointer-events-none absolute w-24 h-24 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(138,5,255,0.35), transparent 70%)",
                      left: `${hoverPos.x}%`,
                      top: `${hoverPos.y}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  />

                  {/* EDGE SCAN */}
                  <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
                    <span className="absolute top-0 left-[-100%] h-full w-1/2 
                      bg-gradient-to-r from-transparent via-white/40 to-transparent
                      opacity-0 group-hover:opacity-100
                      group-hover:animate-[scan_1.2s_linear]" />
                  </span>

                  {/* LOGO */}
                  <img
                    src={s.src}
                    alt={s.alt}
                    className="relative max-h-[60%] object-contain transition duration-500
                    group-hover:scale-110 group-hover:[filter:drop-shadow(0_0_10px_#8A05FF)]"
                  />
                </div>
              </Tilt>
            </button>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scan {
          0% { left:-100% }
          100% { left:120% }
        }
      `}</style>
    </section>
  );
}
