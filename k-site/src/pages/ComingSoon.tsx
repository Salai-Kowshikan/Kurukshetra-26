import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  pageVariants,
  fadeUp,
  blurIn,
  scalePop,
  floatAnimation,
  pulseGlow,
  breathe,
  floatSlow,
  hoverLift,
} from "@/lib/animations";

export default function ComingSoon() {
  return (
    <motion.div
      className="relative flex min-h-svh w-full flex-col items-center justify-center overflow-hidden bg-[#030014] p-4 text-center"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Animated background gradients */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-fuchsia-900/10 via-transparent to-cyan-900/10 pointer-events-none"
        animate={breathe}
      />
      <motion.div
        className="pointer-events-none absolute top-[-20%] left-0 h-125 w-full bg-fuchsia-700/20 blur-[100px] rounded-full opacity-40"
        animate={pulseGlow}
      />
      <motion.div
        className="absolute bottom-[-10%] right-[-10%] w-80 h-80 bg-cyan-600/15 rounded-full blur-[100px] pointer-events-none"
        animate={floatSlow}
      />

      <motion.h1
        className="z-10 mb-6 flex flex-col items-center justify-center drop-shadow-[0_0_10px_rgba(255,0,255,0.3)]"
        variants={blurIn}
      >
        <span className="font-(family-name:--wallpoet) text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-[0.2em] uppercase text-white/80">
          SOMETHING
        </span>
        <motion.span
          className="font-(family-name:--wallpoet) text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[0.2em] uppercase text-transparent bg-clip-text bg-linear-to-r from-[#FF00B3] to-[#8A05FF] drop-shadow-[0_0_20px_rgba(217,70,239,0.8)] mt-1"
          animate={floatAnimation}
        >
          BIG IS LOADING
        </motion.span>
      </motion.h1>

      <motion.div
        className="z-10 lg:w-[40%] md:w-[70%] w-full rounded-2xl border border-fuchsia-500/30 bg-black/80 p-6 shadow-[0_0_40px_rgba(168,85,247,0.15)] backdrop-blur-xl sm:p-8 text-center relative overflow-hidden"
        variants={fadeUp}
        whileHover={hoverLift}
      >
        <div className="absolute inset-0 bg-linear-to-b from-cyan-500/5 to-transparent pointer-events-none"></div>

        <div className="mb-8 relative z-10">
          <div className="relative inline-block w-fit">
            <h2
              data-text="COMING SOON"
              className="glitch-text font-(family-name:--wallpoet) text-4xl sm:text-6xl text-cyan-400 tracking-widest drop-shadow-[0_0_25px_rgba(34,211,238,0.6)] mb-2 relative z-20"
            >
              COMING SOON
            </h2>
          </div>

          <p className="font-(family-name:--orbitron) text-cyan-100/70 text-sm sm:text-base uppercase tracking-[0.3em] font-semibold mt-2">
            Feature Under Construction
          </p>
        </div>

        <motion.div variants={scalePop}>
          <Link to="/" className="w-full block relative z-10">
            <Button className="w-full h-12 border-0 bg-linear-to-r from-fuchsia-600 to-purple-600 text-white font-(family-name:--wallpoet) tracking-widest uppercase hover:from-fuchsia-500 hover:to-[#8A05FF] hover:scale-[1.02] transition-all duration-300 rounded-lg">
              Back to Reality
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 h-0.5 w-full bg-linear-to-r from-transparent via-cyan-500/30 to-transparent blur-[1px]"></div>
    </motion.div>
  );
}
