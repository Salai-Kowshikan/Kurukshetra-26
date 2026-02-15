import { motion } from "motion/react";
import logo from "@/assets/K'26_Logo.png";
import Countdown from "@/components/Landing/Countdown";
import Listings from "@/components/Landing/Listings";
import useGlitch from "@/hooks/useGlitch";
import {
  pageVariants,
  fadeDown,
  blurIn,
  fadeUp,
  floatAnimation,
  floatSlow,
  pulseGlow,
  rotateLoop,
  breathe,
} from "@/lib/animations";

export default function Hero() {
  const glitch = useGlitch();

  return (
    <motion.section
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center pt-20"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Animated background gradients */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-fuchsia-900/20"
        animate={breathe}
      />
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]"
        animate={floatSlow}
      />
      <motion.div
        className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-fuchsia-600/20 rounded-full blur-[120px]"
        animate={{
          ...floatSlow,
          transition: { ...floatSlow.transition, delay: 1.5 },
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-purple-500/10 rounded-full"
        animate={rotateLoop}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center text-white px-4">
        <motion.img
          src={logo}
          alt="Kurukshetra Logo"
          className="h-16 md:h-24 object-contain mb-6 lg:p-2 p-0 drop-shadow-[0_0_20px_rgba(168,85,247,0.6)]"
          variants={fadeDown}
          animate={floatAnimation}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        />

        <motion.div className="flex justify-center mb-6" variants={blurIn}>
          <div className={`relative ${glitch ? "glitch-active" : ""}`}>
            <motion.h2
              className="sponsor-glitch text-3xl md:text-6xl font-extrabold font-(family-name:--wallpoet) text-white"
              data-text="MULTIVERSE   RENAISSANCE"
              animate={pulseGlow}
            >
              MULTIVERSE <br /> RENAISSANCE
            </motion.h2>
          </div>
        </motion.div>

        <motion.div variants={fadeUp}>
          <Listings />
        </motion.div>

        {/* Countdown embedded into Hero */}
        <motion.div variants={fadeUp}>
          <Countdown />
        </motion.div>
      </div>
    </motion.section>
  );
}
