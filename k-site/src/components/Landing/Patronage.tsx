import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import patronage2 from "@/assets/patronage-1.png";
import patronage1 from "@/assets/patronage-2.png";
import patronage3 from "@/assets/unesco-01.jpg.jpeg";
import ieee from "@/assets/ieee_logo.png";
import useGlitch from "@/hooks/useGlitch";
import CyberCorners from "@/components/CyberCorners";
import {
  pageVariants,
  blurIn,
  cardVariants,
  staggerContainer,
  tapShrink,
  breathe,
} from "@/lib/animations";

const images = [
  { src: patronage1, alt: "Patronage 1", caption: "Message from PM of India" },
  {
    src: patronage2,
    alt: "Patronage 2",
    caption: "Message from CM of Tamil Nadu",
  },
  { src: patronage3, alt: "Patronage 3", caption: "UNESCO Patronage" },
  { src: ieee, alt: "IEEE", caption: "IEEE" },
];

export default function Patronage() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<number | null>(null);
  const glitch = useGlitch();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const openCard = (index: number) => {
    setActive(index);
    setOpen(true);
  };

  return (
    <motion.section
      className="w-full py-12"
      variants={pageVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.div className="flex justify-center mb-16" variants={blurIn}>
        <div
          className={`relative mx-auto text-center ${glitch ? "glitch-active" : ""}`}
        >
          <h2
            className="sponsor-glitch text-2xl md:text-4xl lg:mt-20 mt-28 font-medium text-white font-(family-name:--wallpoet)"
            data-text="OUR PATRONAGES AND CERTIFICATIONS"
          >
            OUR PATRONAGES AND CERTIFICATIONS
          </h2>
        </div>
      </motion.div>
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 justify-items-center"
          variants={staggerContainer(0.12)}
        >
          {images.map((img, i) => (
            <motion.button
              key={i}
              onClick={() => openCard(i)}
              className="relative w-full max-w-sm lg:h-[45vh] h-[40vh] flex flex-col rounded-xl p-4 bg-white/5 border border-white/50 backdrop-blur-xs transform transition-all duration-200 focus:outline-none shadow-[0_0_40px_rgba(140,0,255,0.25)] overflow-hidden"
              variants={cardVariants}
              whileHover={{
                y: -8,
                scale: 1.03,
                boxShadow: "0 0 40px rgba(138,5,255,0.6)",
                borderColor: "rgba(167, 139, 250, 0.6)",
              }}
              whileTap={tapShrink}
              aria-label={`Open ${img.alt}`}
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-fuchsia-600/10 pointer-events-none"
                animate={breathe}
              />

              {/* CYBER CORNER BORDERS */}
              <CyberCorners size="w-8 h-8" className="rounded-xl" />

              {/* Image - top 70% */}
              <div className="flex-1 flex items-center justify-center relative z-10">
                <motion.img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="lg:max-h-50 max-h-60 object-contain drop-shadow-[0_0_10px_rgba(168,85,247,0.3)]"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </div>

              {/* Caption - bottom 30% */}
              <div className="border-t border-white/20 py-3 px-2 text-center relative z-10">
                <p className="text-sm lg:text-md text-white/90 font-semibold tracking-wide">
                  {img.caption}
                </p>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {open && active !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
            onClick={() => setOpen(false)}
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="max-w-[90vw] max-h-[90vh] bg-white/5 border border-white/10 backdrop-blur-md rounded-lg p-4"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 22 }}
            >
              <button
                onClick={() => setOpen(false)}
                className="mb-2 text-white text-xl float-right"
                aria-label="Close"
              >
                ×
              </button>
              <div className="flex items-center justify-center">
                <img
                  src={images[active].src}
                  alt={images[active].alt}
                  className="max-h-[80vh] max-w-[80vw] object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
