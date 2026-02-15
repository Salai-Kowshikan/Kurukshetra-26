import { useState } from "react";
import bg from "../assets/Img.png";
import Instructions from "../assets/Instructions.pdf";
import MagicBento from "./MagicBento";

type Gender = "Male" | "Female" | "Others";

export default function Accommodation() {
  const [selectedDates, setSelectedDates] = useState<string[]>([]);
  const [gender, setGender] = useState<Gender | null>(null);
  const [food, setFood] = useState(false);

  const dates = ["MAR 7", "MAR 8", "MAR 9"];
  const total = selectedDates.length * (food ? 450 : 300);

  const toggleDate = (d: string) => {
    setSelectedDates((prev) =>
      prev.includes(d) ? prev.filter(x => x !== d) : [...prev, d]
    );
  };

  const handleSubmit = () => {
    const payload = {
      dates: selectedDates,
      gender,
      food,
      total,
    };

    console.log("Accommodation Submission:", payload);
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center px-3 sm:px-4 pt-28 sm:pt-24 pb-8 sm:pb-16 font-(family-name:--orbitron) overflow-hidden"
      style={{ background: "var(--contact-bg)" }}
    >
      <img 
        src={bg} 
        alt="Kurukshetra accommodation background" 
        className="absolute inset-0 w-full h-full object-cover object-bottom pointer-events-none z-0" 
      />

      <MagicBento
        className="z-[2]"
        textAutoHide={true}
        enableStars
        enableSpotlight
        enableBorderGlow={true}
        enableTilt={false}
        clickEffect
        spotlightRadius={100}
        particleCount={12}
        glowColor="132, 0, 255"
        disableAnimations={false}
      />

      <div className="relative z-10 w-full max-w-[1140px] flex flex-col items-center mt-4 sm:mt-0">
        {/* PAGE TITLE */}
        <h1
          style={{
            fontFamily: "Orbitron, sans-serif",
            fontWeight: 700,
          }}
          className="
            text-center mx-auto mb-6 text-white
            max-w-[92vw]
            text-[1.15rem] tracking-[0.005em]
            xs:text-[1.35rem] xs:tracking-[0.01em]
            sm:text-[1.8rem] sm:tracking-[0.035em]
            md:text-[2.4rem] md:tracking-[0.06em]
          "
        >
          ACCOMMODATION
        </h1>

        {/* CONTAINER */}
        <div className="w-full max-w-[960px] rounded-[20px] sm:rounded-[28px]
          border border-white/70 backdrop-blur-xs
          px-4 sm:px-7 md:px-10 py-6 sm:py-8 md:py-10 shadow-[0_0_40px_rgba(140,0,255,0.25)]">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* LEFT SECTION */}
          <div className="space-y-3 flex flex-col items-center text-center">

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
            <div className="flex flex-wrap justify-center gap-4 p-3 rounded-3xl
               border border-white/70 ]">
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
            <div className="flex justify-center gap-6 p-3 rounded-3xl
               border border-white/70 ">
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
                className="w-[16px] h-[16px] accent-violet-600"
              />
              I require food for the days I had requested accommodation.
            </label>

            {/* Total + Instruction */}
            <div className="flex justify-center flex-wrap gap-4 pt-3">
              <div
                style={{ fontFamily: "Orbitron, sans-serif", letterSpacing: "0.04em" }}
                className="px-6 py-2.5 rounded-3xl
                  border border-white/70 text-white text-[1rem]"
              >
                Total – Rs.{total}/-
              </div>

              <a
                href={Instructions}
                target="_blank"
                style={{ fontFamily: "Orbitron, sans-serif", letterSpacing: "0.04em" }}
                className="px-6 py-2.5 rounded-3xl
                  border border-white/70 text-white text-[1rem] cursor-pointer hover:shadow-[0_0_15px_rgba(122,40,255,0.85)] transition"
              >
                Instruction
              </a>
            </div>

            {/* Submit */}
            <button
              style={{ fontFamily: "Orbitron, sans-serif", letterSpacing: "0.04em" }}
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
          </div>

           {/* Mobile separator */} 
          <div className="block md:hidden w-full h-px bg-white/70 my-2" />
   
          {/* RIGHT SECTION */}
          <div className="space-y-8 md:border-l md:pl-8 border-white/70
            flex flex-col items-center text-center">

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
                style={{ fontFamily: "Orbitron, sans-serif", letterSpacing: "0.08em" }}
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
                    <a href={`tel:${p.replace(/\s+/g, '')}`} className="text-white/90 whitespace-nowrap hover:text-white transition-colors">{p}</a>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
