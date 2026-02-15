/**
 * Shared Framer Motion animation variants for consistent, sleek page animations.
 * Uses the `motion` package (Framer Motion v12+).
 */
import type { Variants, Transition } from "motion/react";

/* ─── Shared Timing ─────────────────────────────────────── */
const smooth: Transition = { type: "spring", stiffness: 80, damping: 20 };
const snappy: Transition = { type: "spring", stiffness: 120, damping: 18 };

/* ─── Page-Level Wrapper ────────────────────────────────── */
export const pageVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

/* ─── Fade + Rise ───────────────────────────────────────── */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: smooth },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: smooth },
};

/* ─── Slide In from Sides ───────────────────────────────── */
export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: smooth },
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: smooth },
};

/* ─── Scale Pop ─────────────────────────────────────────── */
export const scalePop: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: snappy },
};

/* ─── Stagger Container ────────────────────────────────── */
export const staggerContainer = (stagger = 0.1, delay = 0): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
});

/* ─── Card Entrance (for grid items) ───────────────────── */
export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 16 },
  },
};

/* ─── Continuous Animations (loop) ─────────────────────── */
export const floatAnimation = {
  y: [0, -8, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

export const floatSlow = {
  y: [0, -12, 0],
  transition: {
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

export const pulseGlow = {
  opacity: [0.6, 1, 0.6],
  scale: [1, 1.02, 1],
  transition: {
    duration: 2.5,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

export const shimmer = {
  backgroundPosition: ["200% 0", "-200% 0"],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "linear" as const,
  },
};

export const subtlePulse = {
  scale: [1, 1.03, 1],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

export const rotateLoop = {
  rotate: [0, 360],
  transition: {
    duration: 20,
    repeat: Infinity,
    ease: "linear" as const,
  },
};

export const rotateSlow = {
  rotate: [0, 360],
  transition: {
    duration: 40,
    repeat: Infinity,
    ease: "linear" as const,
  },
};

export const breathe = {
  scale: [1, 1.05, 1],
  opacity: [0.8, 1, 0.8],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

export const wave = {
  y: [0, -15, 0],
  x: [0, 5, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

/* ─── Advanced Hover States ────────────────────────────── */
export const hoverLift = {
  y: -8,
  scale: 1.03,
  transition: { type: "spring" as const, stiffness: 300, damping: 20 },
};

export const hoverGlow = {
  boxShadow: "0 0 30px rgba(168, 85, 247, 0.6)",
  transition: { duration: 0.3 },
};

export const hoverScale = {
  scale: 1.05,
  transition: { type: "spring" as const, stiffness: 300, damping: 15 },
};

export const tapShrink = {
  scale: 0.95,
  transition: { duration: 0.1 },
};

/* ─── Parallax Scroll Effects ───────────────────────────── */
export const parallaxSlow = (scrollY: number) => ({
  y: scrollY * 0.3,
});

export const parallaxFast = (scrollY: number) => ({
  y: scrollY * 0.6,
});

/* ─── Blur-in ───────────────────────────────────────────── */
export const blurIn: Variants = {
  hidden: { opacity: 0, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

/* ─── Typewriter / Letter-by-letter ─────────────────────── */
export const letterContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.03 } },
};

export const letterVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

/* ─── Background Gradient Animations ────────────────────── */
export const gradientShift = {
  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
  transition: {
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

export const gradientRotate = {
  background: [
    "linear-gradient(0deg, rgba(168,85,247,0.3), rgba(217,70,239,0.3))",
    "linear-gradient(120deg, rgba(168,85,247,0.3), rgba(217,70,239,0.3))",
    "linear-gradient(240deg, rgba(168,85,247,0.3), rgba(217,70,239,0.3))",
    "linear-gradient(360deg, rgba(168,85,247,0.3), rgba(217,70,239,0.3))",
  ],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "linear" as const,
  },
};

/* ─── Scroll-Triggered Reveal ───────────────────────────── */
export const revealUp: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 70, damping: 18, duration: 0.8 },
  },
};

export const revealScale: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 90, damping: 20 },
  },
};

/* ─── Stagger with Custom Delay ────────────────────────── */
export const staggerFadeIn = (delay = 0): Variants => ({
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: delay + i * 0.1,
      duration: 0.5,
    },
  }),
});

/* ─── Content Entry Animation (Slide from Left + Fade) ───────────────────── */
export const slideInFromLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 100, damping: 20, duration: 0.5 },
  },
};

export const slideInFromLeftStaggered = (delay = 0): Variants => ({
  hidden: { opacity: 0, x: -40 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      delay: delay + i * 0.08,
      duration: 0.4,
    },
  }),
});
