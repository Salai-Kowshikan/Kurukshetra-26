import { useState } from "react";
import useFullNavbar from "@/hooks/useFullNavbar";

interface Workshop {
  id: string;
  name: string;
  image: string;
  description: string;
}

const workshops: Workshop[] = [
  {
    id: "ibm",
    name: "IBM WORKSHOP",
    image: "/assets/workshops/ibm.png",
    description: "AI & GenAI focused workshop with industry exposure.",
  },
  {
    id: "fullstack",
    name: "FULL STACK DEVELOPMENT",
    image: "/assets/workshops/fullstack.png",
    description: "Build scalable full-stack systems with modern tools.",
  },
];

export default function Workshops() {
  useFullNavbar();

  const [index, setIndex] = useState(0);
  const [showDetail, setShowDetail] = useState(false);

  const next = () =>
    setIndex((prev) => (prev + 1) % workshops.length);

  const prev = () =>
    setIndex((prev) =>
      prev === 0 ? workshops.length - 1 : prev - 1
    );

  return (
    <div className="relative min-h-screen text-white overflow-hidden">

      {/* ================= BACKGROUND ================= */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/assets/Gemini_Generated_Image_5t3qd85t3qd85t3q.png')",
        }}
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 pt-28">

        {/* ================= HERO SECTION ================= */}
        <h1
          className="text-6xl md:text-7xl text-center tracking-[0.25em] mb-16"
          style={{ fontFamily: "var(--orbitron)" }}
        >
          WORKSHOPS
        </h1>

        <div className="relative max-w-4xl mx-auto overflow-hidden">

          {/* SLIDER CONTAINER */}
          <div
            className="flex transition-transform duration-700"
            style={{
              transform: `translateX(-${index * 100}%)`,
            }}
          >
            {workshops.map((workshop) => (
              <div
                key={workshop.id}
                className="min-w-full flex justify-center"
              >
                <div
                  className="
                    backdrop-blur-xl
                    bg-white/10
                    border border-white/20
                    rounded-3xl
                    p-10
                    text-center
                    max-w-xl
                  "
                >
                  <img
                    src={workshop.image}
                    alt={workshop.name}
                    className="w-full h-64 object-contain mb-8"
                  />

                  <button
                    onClick={() => setShowDetail(true)}
                    className="px-10 py-4 rounded-full font-semibold tracking-widest text-white"
                    style={{
                      background:
                        "linear-gradient(90deg, var(--glitch-purple), var(--glitch-magenta))",
                    }}
                  >
                    {workshop.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ARROWS */}
        <div className="flex justify-center gap-6 mt-8">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-purple-500 flex items-center justify-center"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-purple-500 flex items-center justify-center"
          >
            ›
          </button>
        </div>

        {/* ================= DETAIL SECTION ================= */}
        {showDetail && (
          <div className="mt-20 max-w-5xl mx-auto backdrop-blur-xl bg-black/60 border border-purple-500/40 rounded-3xl p-10 shadow-[0_0_80px_rgba(155,77,255,0.35)]">
            <button
              onClick={() => setShowDetail(false)}
              className="mb-6 text-purple-400"
            >
              ← Back
            </button>

            <h2 className="text-3xl mb-6">
              {workshops[index].name}
            </h2>

            <p className="text-gray-300 leading-relaxed">
              {workshops[index].description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
