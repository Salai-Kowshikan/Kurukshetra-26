import { useState, useEffect } from "react";
import patronage2 from "@/assets/patronage-1.png";
import patronage1 from "@/assets/patronage-2.png";
import patronage3 from "@/assets/unesco-01.jpg.jpeg";
import ieee from "@/assets/ieee_logo.png";

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
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const interval = setInterval(
      () => {
        setGlitch(true);
        setTimeout(() => setGlitch(false), 500);
      },
      3000 + Math.random() * 2000
    );

    return () => clearInterval(interval);
  }, []);

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
    <section className="w-full py-12">
      <div className="flex justify-center mb-16">
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
      </div>
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 justify-items-center">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => openCard(i)}
              className="relative w-full max-w-sm lg:h-[45vh] h-[40vh] flex flex-col rounded-xl p-4 bg-white/5 border border-white/50 backdrop-blur-xs hover:scale-105 transform transition-all duration-200 focus:outline-none shadow-[0_0_40px_rgba(140,0,255,0.25)] hover:shadow-[0_0_40px_rgba(138,5,255,0.6)] hover:border-violet-400"
              aria-label={`Open ${img.alt}`}
            >
              {/* CYBER CORNER BORDERS */}
              <div className="absolute inset-0 pointer-events-none rounded-xl">
                <div className="absolute top-0 rounded-tl-xl left-0 w-8 h-8 border-l-2 border-t-2 border-white/90" />
                <div className="absolute top-0 rounded-tr-xl right-0 w-8 h-8 border-r-2 border-t-2 border-white/90" />
                <div className="absolute bottom-0 rounded-bl-xl left-0 w-8 h-8 border-l-2 border-b-2 border-white/90" />
                <div className="absolute bottom-0 rounded-br-xl right-0 w-8 h-8 border-r-2 border-b-2 border-white/90" />
              </div>

              {/* Image - top 70% */}
              <div className="flex-1 flex items-center justify-center">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="lg:max-h-50 max-h-60 object-contain"
                />
              </div>

              {/* Caption - bottom 30% */}
              <div className="border-t border-white/20 py-3 px-2 text-center">
                <p className="text-sm lg:text-md text-white/90 font-semibold tracking-wide">
                  {img.caption}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {open && active !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="max-w-[90vw] max-h-[90vh] bg-white/5 border border-white/10 backdrop-blur-md rounded-lg p-4"
            onClick={(e) => e.stopPropagation()}
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
          </div>
        </div>
      )}
    </section>
  );
}
