import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { scalePop, staggerContainer, hoverLift } from "@/lib/animations";

const formatNumber = (num: number) => String(num).padStart(2, "0").split("");

const TimeBox = ({
  value,
  label,
  glitchActive,
}: {
  value: number;
  label: string;
  glitchActive: boolean;
}) => {
  const digits = formatNumber(value);

  return (
    <motion.div
      className="flex flex-col items-center"
      variants={scalePop}
      whileHover={hoverLift}
    >
      <div className="relative rounded-xl bg-linear-to-br from-purple-500 via-pink-500 to-purple-600 p-[1.5px]">
        <div
          className={`bg-black rounded-xl px-6 py-5 flex items-center justify-center gap-1 relative overflow-hidden retro-scanline ${
            glitchActive ? "glitch-active" : ""
          }`}
        >
          {digits.map((digit, idx) => (
            <span
              key={idx}
              className="glitch font-bold"
              data-text={digit}
              style={{
                fontFamily: "'VT323', monospace",
                fontSize: "clamp(2.2rem, 6vw, 4rem)",
                color: "#fff",
                textShadow:
                  "0 0 15px rgba(168,85,247,.8), 0 3px 0 rgba(168,85,247,.5)",
              }}
            >
              {digit}
            </span>
          ))}
        </div>
      </div>

      <p
        className="text-white text-xs font-bold mt-2 uppercase tracking-wider"
        style={{ fontFamily: "'Press Start 2P', monospace" }}
      >
        {label}
      </p>
    </motion.div>
  );
};

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    const eventDate = new Date("2026-03-07T00:00:00").getTime();

    const timer = setInterval(() => {
      const now = Date.now();
      const distance = eventDate - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 300 + Math.random() * 200);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" md:-mt-16 lg:-mt-48 mb-12">
      <motion.div
        className="grid grid-cols-2 gap-3 md:flex md:items-center md:justify-center md:gap-6"
        variants={staggerContainer(0.15)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <TimeBox
          value={timeLeft.days}
          label="Days"
          glitchActive={glitchActive}
        />
        <span className="hidden md:inline-block text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-7 md:mb-8">
          :
        </span>
        <TimeBox
          value={timeLeft.hours}
          label="Hours"
          glitchActive={glitchActive}
        />
        <span className="hidden md:inline-block text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-7 md:mb-8">
          :
        </span>
        <TimeBox
          value={timeLeft.minutes}
          label="Mins"
          glitchActive={glitchActive}
        />
        <span className="hidden md:inline-block text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-7 md:mb-8">
          :
        </span>
        <TimeBox
          value={timeLeft.seconds}
          label="Sec"
          glitchActive={glitchActive}
        />
      </motion.div>
    </div>
  );
}
