import NIOT from "@/assets/NIOT.png";
import ShankarIAS from "@/assets/ShankarIAS.png";
import Zentropy from "@/assets/zen.jpg";
import Tilt from "react-parallax-tilt";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import useGlitch from "@/hooks/useGlitch";
import CyberCorners from "@/components/CyberCorners";
import {
  pageVariants,
  blurIn,
  cardVariants,
  staggerContainer,
  tapShrink,
  breathe,
  floatSlow,
} from "@/lib/animations";

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
    desc: "The National Institute of Ocean Technology (NIOT) is an autonomous organization under the Ministry of Earth Sciences, Government of India, established in 1993 and headquartered in Chennai. It focuses on developing indigenous technologies for ocean exploration, deep-sea mining, underwater vehicles, desalination, marine renewable energy, and coastal protection. NIOT plays a vital role in advancing India’s ocean research and supports the country’s Deep Ocean Mission.",
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
  },
];

export default function Sponsors() {
  const [active, setActive] = useState<Sponsor | null>(null);
  const [hoverPos, setHoverPos] = useState({ x: 50, y: 50 });
  const glitch = useGlitch();

  const openLink = (url?: string) => {
    if (!url) return;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.section
      className="relative min-h-screen flex items-center justify-center pb-20 overflow-hidden"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Animated background gradients */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-fuchsia-900/10"
        animate={breathe}
      />
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-purple-600/15 rounded-full blur-[120px]"
        animate={floatSlow}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-fuchsia-600/15 rounded-full blur-[120px]"
        animate={{
          ...floatSlow,
          transition: { ...floatSlow.transition, delay: 1.5 },
        }}
      />

      <div className="relative z-10 w-[90%] max-w-7xl mx-auto">
        {/* GLITCH HEADING */}
        <motion.div className="flex justify-center mb-16" variants={blurIn}>
          <div className={`relative ${glitch ? "glitch-active" : ""}`}>
            <h2
              className="sponsor-glitch text-3xl md:text-5xl lg:mt-20 mt-28 font-medium text-white font-(family-name:--wallpoet)"
              data-text="OUR SPONSORS"
            >
              OUR SPONSORS
            </h2>
          </div>
        </motion.div>

        {/* FLEX WRAP */}
        <motion.div
          className="flex flex-wrap justify-center gap-14"
          variants={staggerContainer(0.15)}
        >
          {sponsors.map((s, i) => (
            <motion.button
              key={i}
              onClick={() => {
                if (s.desc) {
                  setActive(s);
                } else {
                  openLink(s.url);
                }
              }}
              className="group relative w-full md:w-[45%] lg:w-[30%] max-w-105"
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.03 }}
              whileTap={tapShrink}
            >
              <Tilt
                tiltMaxAngleX={6}
                tiltMaxAngleY={6}
                scale={1.02}
                glareEnable
                glareMaxOpacity={0.1}
              >
                <div className="relative bg-white/10 backdrop-blur-[5px] border border-white/20 h-80 flex flex-col items-center justify-center overflow-hidden rounded-xl">
                  {/* Animated background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-fuchsia-500/5 pointer-events-none"
                    animate={breathe}
                  />
                  {/* TITLE */}
                  {s.title && (
                    <div className="absolute top-4 text-lg tracking-widest text-white font-(family-name:--wallpoet)">
                      {s.title}
                    </div>
                  )}
                  {/* CYBER CORNER CUT MASK */}
                  <CyberCorners />
                  {/* GRID */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)
                      `,
                      backgroundSize: "40px 40px",
                    }}
                  />
                  {/* HOVER SPOT */}
                  <div
                    className="pointer-events-none absolute w-32 h-32 blur-xl opacity-0 group-hover:opacity-100 transition"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(138,5,255,0.4), transparent 70%)",
                      left: `${hoverPos.x}%`,
                      top: `${hoverPos.y}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                  {/* EDGE SCAN */}{" "}
                  <span className="pointer-events-none absolute inset-0 overflow-hidden ">
                    {" "}
                    <span className="absolute top-0 -left-full h-full w-1/2 bg-linear-to-r from-transparent via-white/40 to-transparent opacity-60 animate-[scan_6s_linear_infinite]" />{" "}
                  </span>
                  {/* LOGO */}
                  <img
                    src={s.src}
                    alt={s.alt}
                    loading="lazy"
                    onMouseMove={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      setHoverPos({
                        x: ((e.clientX - rect.left) / rect.width) * 100,
                        y: ((e.clientY - rect.top) / rect.height) * 100,
                      });
                    }}
                    className="max-h-[55%] object-contain transition duration-500 group-hover:scale-110"
                  />
                </div>
              </Tilt>
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence>
          {active && active.desc && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center"
              onClick={() => setActive(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="absolute inset-0 bg-black/60 backdrop-blur-[5px]" />

              <motion.div
                onClick={(e) => e.stopPropagation()}
                className="relative lg:w-[40%] w-[85%] lg:h-[50vh] h-[60vh] bg-black/80 backdrop-blur-md border border-white/20 rounded-xl shadow-[0_0_40px_#8A05FF] flex flex-col"
                initial={{ scale: 0.85, opacity: 0, y: 30 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.85, opacity: 0, y: 30 }}
                transition={{ type: "spring", stiffness: 200, damping: 22 }}
              >
                <div className="flex-1 overflow-y-auto p-6">
                  <h3 className="text-xl mb-3 font-(family-name:--wallpoet) text-center text-white">
                    {active.title} - {active.alt}
                  </h3>

                  <p className="text-white/80 text-md leading-relaxed text-justify">
                    {active.desc}
                  </p>
                </div>

                {active.url && (
                  <div className="pb-6 flex justify-center">
                    <motion.button
                      onClick={() => openLink(active.url)}
                      className="px-6 py-2 bg-[#8A05FF] rounded-md text-white text-sm hover:brightness-125 transition shadow-[0_0_15px_#8A05FF]"
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Visit Site →
                    </motion.button>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
