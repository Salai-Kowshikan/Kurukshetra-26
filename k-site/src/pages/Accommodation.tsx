import { useState } from "react";
import { motion } from "motion/react";
import useGlitch from "@/hooks/useGlitch";
import Instructions from "@/assets/Instructions.pdf";
import {
  pageVariants,
  fadeUp,
  blurIn,
  slideLeft,
  slideRight,
  breathe,
  floatSlow,
  hoverLift,
} from "@/lib/animations";

type Gender = "Male" | "Female" | "Others";

export default function Accommodation() {
  const [selectedDates, setSelectedDates] = useState<string[]>([]);
  const [gender, setGender] = useState<Gender | null>(null);
  const [food, setFood] = useState(false);
  const [isOpen] = useState(false);
  const glitch = useGlitch();

  const dates = ["MAR 7", "MAR 8", "MAR 9"];
  const total = selectedDates.length * (food ? 450 : 300);

  const toggleDate = (d: string) => {
    setSelectedDates((prev) =>
      prev.includes(d) ? prev.filter((x) => x !== d) : [...prev, d]
    );
  };

  const handleSubmit = () => {
    const payload = {
      dates: selectedDates,
      gender,
      food,
      total,
    };

    if (import.meta.env.DEV) {
      console.log("Accommodation Submission:", payload);
    }
  };

  return (
    <motion.section
      className="relative min-h-screen flex items-center justify-center px-3 sm:px-4 pt-28 sm:pt-24 pb-8 sm:pb-16 font-(family-name:--orbitron) overflow-hidden"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Animated background gradients */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-violet-900/10 via-transparent to-purple-900/10"
        animate={breathe}
      />
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-80 h-80 bg-violet-600/15 rounded-full blur-[100px]"
        animate={floatSlow}
      />
      <motion.div
        className="absolute bottom-[-10%] right-[-10%] w-80 h-80 bg-purple-600/15 rounded-full blur-[100px]"
        animate={{
          ...floatSlow,
          transition: { ...floatSlow.transition, delay: 1 },
        }}
      />
      <div className="relative z-10 w-full max-w-285 flex flex-col items-center mt-4 sm:mt-0">
        {/* PAGE TITLE */}
        <motion.div className="flex justify-center mb-6" variants={blurIn}>
          <div className={`relative ${glitch ? "glitch-active" : ""}`}>
            <h1
              className="sponsor-glitch text-center mx-auto text-white max-w-285 text-[1.15rem] tracking-[0.005em] xs:text-[1.35rem] xs:tracking-[0.01em] sm:text-[1.8rem] sm:tracking-[0.035em] md:text-[2.4rem] md:tracking-[0.06em]"
              data-text="ACCOMMODATION"
              style={{
                fontFamily: "Orbitron, sans-serif",
                fontWeight: 700,
              }}
            >
              ACCOMMODATION
            </h1>
          </div>
        </motion.div>

        {/* CONTAINER */}
        <motion.div
          className="w-full max-w-240 rounded-4xl sm:rounded-[28px]
          border border-white/70 backdrop-blur-xs relative overflow-hidden
          px-4 sm:px-7 md:px-10 py-6 sm:py-8 md:py-10 shadow-[0_0_40px_rgba(140,0,255,0.25)]"
          variants={fadeUp}
          whileHover={hoverLift}
        >
          {/* Inner animated background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-purple-500/5 pointer-events-none"
            animate={breathe}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            {/* LEFT SECTION */}
            <motion.div
              className="space-y-3 flex flex-col items-center text-center"
              variants={slideLeft}
            >
              <h2
                style={{ fontFamily: "Orbitron, sans-serif" }}
                className="text-[1.55rem] tracking-wide text-white"
              >
                Accommodation Charges
              </h2>

              <p
                style={{ fontFamily: "Orbitron, sans-serif" }}
                className="text-[0.9rem] leading-relaxed text-white"
              >
                Without food – Rs.300 per day <br />
                With food – Rs.450 per day
              </p>

              {/* Dates */}
              <div
                className="flex flex-wrap justify-center gap-4 p-3 rounded-3xl
               border border-white/70 ]"
              >
                {dates.map((d) => {
                  const sel = selectedDates.includes(d);
                  return (
                    <div
                      key={d}
                      onClick={() => toggleDate(d)}
                      className="flex items-center gap-3 cursor-pointer select-none"
                    >
                      <div
                        className={`w-5 h-5 rounded-xs flex items-center justify-center border
                        ${sel ? "border-violet-600 bg-violet-600 text-white" : "border-white/70"}`}
                      >
                        {sel && "✓"}
                      </div>
                      <span
                        style={{ fontFamily: "Orbitron, sans-serif" }}
                        className="text-[0.8rem] text-white"
                      >
                        {d}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Gender */}
              <div
                className="flex justify-center gap-6 p-3 rounded-3xl
               border border-white/70 "
              >
                {(["Male", "Female", "Others"] as Gender[]).map((g) => {
                  const sel = gender === g;
                  return (
                    <div
                      key={g}
                      onClick={() => setGender(g)}
                      className="flex items-center gap-3 cursor-pointer select-none"
                    >
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center border
                        ${sel ? "border-violet-600 bg-violet-600 text-white" : "border-white/70"}`}
                      >
                        {sel && "✓"}
                      </div>
                      <span
                        style={{ fontFamily: "Orbitron, sans-serif" }}
                        className="text-[0.8rem] text-white"
                      >
                        {g}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Food */}
              <label
                style={{ fontFamily: "Orbitron, sans-serif" }}
                className="flex items-center justify-center gap-3
                text-[0.7rem] text-white cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={food}
                  onChange={() => setFood(!food)}
                  className="w-4 h-4 accent-violet-600"
                />
                I require food for the days I had requested accommodation.
              </label>

              {/* Total + Instruction */}
              <div className="flex justify-center flex-wrap gap-4 pt-3">
                <div
                  style={{
                    fontFamily: "Orbitron, sans-serif",
                    letterSpacing: "0.04em",
                  }}
                  className="px-6 py-2.5 rounded-3xl
                  border border-white/70 text-white text-[1rem]"
                >
                  Total – Rs.{total}/-
                </div>

                <a
                  href={Instructions}
                  target="_blank"
                  style={{
                    fontFamily: "Orbitron, sans-serif",
                    letterSpacing: "0.04em",
                  }}
                  className="px-6 py-2.5 rounded-3xl
                  border border-white/70 text-white text-[1rem] cursor-pointer hover:shadow-[0_0_15px_rgba(122,40,255,0.85)] transition"
                >
                  Instruction
                </a>
              </div>

              {/* Submit */}
              {isOpen ? (
                <button
                  style={{
                    fontFamily: "Orbitron, sans-serif",
                    letterSpacing: "0.04em",
                  }}
                  disabled={!gender || selectedDates.length === 0}
                  onClick={handleSubmit}
                  className="mt-3 px-10 py-3 rounded-3xl
                  bg-violet-600 text-white
                  border border-violet-600
                  cursor-pointer
                  disabled:opacity-50 hover:shadow-[0_0_24px_rgba(122,40,255,0.85)] transition"
                >
                  Submit
                </button>
              ) : (
                <div
                  style={{
                    fontFamily: "Orbitron, sans-serif",
                    letterSpacing: "0.04em",
                  }}
                  className="mt-3 px-10 py-3 rounded-3xl
                  bg-violet-600/50 text-white
                  border border-violet-600
                  text-center"
                >
                  Accommodation opens soon
                </div>
              )}
            </motion.div>

            {/* Mobile separator */}
            <div className="block md:hidden w-full h-px bg-white/70 my-2" />

            {/* RIGHT SECTION */}
            <motion.div
              className="space-y-8 md:border-l md:pl-8 border-white/70
            flex flex-col items-center text-center"
              variants={slideRight}
            >
              <h2
                style={{ fontFamily: "Orbitron, sans-serif" }}
                className="text-[1.55rem] tracking-wide text-white"
              >
                Got queries?
              </h2>

              <div>
                <p
                  style={{ fontFamily: "Orbitron, sans-serif" }}
                  className="text-[1rem] text-white mb-2"
                >
                  Drop a mail at
                </p>
                <a
                  href="mailto:hospitality@cegtechforum.in"
                  style={{
                    fontFamily: "Orbitron, sans-serif",
                    letterSpacing: "0.08em",
                  }}
                  className="inline-block px-5 py-2.5 rounded-3xl
                    bg-violet-600
                  text-white text-[0.8rem] hover:shadow-[0_0_24px_rgba(122,40,255,0.85)] transition"
                >
                  hospitality@cegtechforum.in
                </a>
              </div>

              <div>
                <p
                  style={{ fontFamily: "Orbitron, sans-serif" }}
                  className="text-[1rem] text-white mb-2"
                >
                  Call our team
                </p>
                <div className="flex flex-col gap-2.5">
                  {[
                    ["Ajithkumar", "+91 90256 24766"],
                    ["Mohamed Sahul Hameed H", "+91 90428 50775"],
                    ["Surekaa S", "+91 63827 77055"],
                  ].map(([n, p]) => (
                    <div
                      key={n}
                      style={{ fontFamily: "Orbitron, sans-serif" }}
                      className="px-5 py-2.5 rounded-lg 
                      border border-white/70 text-[0.8rem] 
                      grid grid-cols-[1fr_auto] items-center gap-6"
                    >
                      <span className="text-left text-white">{n}</span>
                      <a
                        href={`tel:${p.replace(/\s+/g, "")}`}
                        className="text-white/90 whitespace-nowrap hover:text-white transition-colors"
                      >
                        {p}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
