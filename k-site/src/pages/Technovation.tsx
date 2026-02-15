import { motion } from "motion/react";
import Background from "@/components/technovation/Background";
import Card from "@/components/technovation/Card";
import Drone from "@/components/technovation/Drone";
import useFullNavbar from "@/hooks/useFullNavbar";
import useGlitch from "@/hooks/useGlitch";
import {
  pageVariants,
  fadeUp,
  blurIn,
  slideLeft,
  slideRight,
  floatAnimation,
  staggerContainer,
  breathe,
  floatSlow,
  hoverLift,
  tapShrink,
} from "@/lib/animations";

export default function Technovation() {
  useFullNavbar();
  const glitch = useGlitch();

  return (
    <motion.div
      className="relative min-h-screen text-white overflow-x-clip"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Animated background gradients */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 via-transparent to-purple-900/10 pointer-events-none"
        animate={breathe}
      />
      <motion.div
        className="absolute top-[10%] right-[-5%] w-96 h-96 bg-cyan-600/15 rounded-full blur-[120px] pointer-events-none"
        animate={floatSlow}
      />
      <motion.div
        className="absolute bottom-[10%] left-[-5%] w-96 h-96 bg-purple-600/15 rounded-full blur-[120px] pointer-events-none"
        animate={{
          ...floatSlow,
          transition: { ...floatSlow.transition, delay: 1.2 },
        }}
      />
      <section className="relative min-h-screen lg:min-h-320 xl:min-h-335 pb-16 sm:pb-20">
        <Background />

        <motion.div
          className="relative z-10 pt-[26svh] sm:pt-[24svh] md:pt-[30svh] flex justify-center lg:pt-0 lg:absolute top-44.75 lg:top-80 xl:top-91.25 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2"
          variants={fadeUp}
          animate={floatAnimation}
        >
          <Drone />
        </motion.div>

        <motion.div
          className={`absolute text-white text-center leading-tight tracking-[0.035em] font-(family-name:--wallpoet) font-normal z-10 text-[40px] sm:text-[50px] md:text-[70px] lg:text-[80px] ${glitch ? "glitch-active" : ""}`}
          variants={blurIn}
        >
          <h1 className="sponsor-glitch hero-title" data-text="Technovation">
            Technovation
          </h1>
        </motion.div>

        <div className="relative z-20 mx-auto w-full max-w-300 px-4 sm:px-6 pt-[40svh] sm:pt-[38svh] md:pt-[44svh] lg:pt-0">
          <motion.div
            className="flex flex-col gap-10 lg:absolute lg:top-95 lg:left-1/2 lg:-translate-x-1/2 lg:w-full lg:flex-row lg:items-start lg:justify-between"
            variants={staggerContainer(0.2, 0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div
              variants={slideLeft}
              whileHover={hoverLift}
              whileTap={tapShrink}
            >
              <Card
                className="  w-full max-w-138.5
    h-auto lg:h-85
    mx-auto lg:mx-0
    mt-6 lg:mt-0
    lg:top-2 lg:right-7.5"
                title="ABOUT"
              >
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="mt-2.25 h-1 w-[2.9px] rounded-full bg-white shrink-0" />
                    <p>
                      Technovation is an inter-college project display
                      competition with a theme that varies yearly. Transform
                      your imaginative and practical ideas into tangible
                      products to present at the Technovation.
                    </p>
                  </li>

                  <li className="flex gap-3">
                    <span className="mt-2.25 h-1 w-[2.9px] rounded-full bg-white shrink-0" />
                    <p>
                      The competition is open to individuals and teams, and the
                      entries will be judged on their originality, feasibility,
                      and completeness. The main goal of this competition is to
                      encourage the development of innovative ideas that have
                      the potential to improve our lives.
                    </p>
                  </li>
                </ul>
              </Card>
            </motion.div>

            <motion.div
              variants={slideRight}
              whileHover={hoverLift}
              whileTap={tapShrink}
            >
              <Card
                className="  w-full max-w-136.25
    h-auto lg:h-85.5
    mx-auto lg:mx-0
    mt-6 lg:mt-0
    lg:top-1 lg:left-9"
                title="RULES & REGULATION"
              >
                <ul className="pt-3 space-y-[0.1]">
                  <li className="flex gap-3">
                    <span className="mt-2.25 h-1 w-[2.9px] rounded-full bg-white shrink-0" />
                    <p className="tracking-[0.021em]">
                      Eligibility: Anyone with a passion for engineering can
                      participate.
                    </p>
                  </li>

                  <li className="flex gap-3">
                    <span className="mt-2.25 h-1 w-[2.9px] rounded-full bg-white shrink-0" />
                    <p className="tracking-[0.017em]">
                      Participation: Participants can present their projects as
                      either a team or as individuals.
                    </p>
                  </li>

                  <li className="flex gap-3">
                    <span className="mt-2.25 h-1 w-[2.9px] rounded-full bg-white shrink-0" />
                    <p className="leading-[1.1] tracking-[0.03em] ">
                      Registration: Participants are required to register
                      themselves through Kurukshetra's official website. During
                      registration, participants must submit their project
                      abstract in PDF format and upload a working demo video to
                      drive and share the link with public access.
                    </p>
                  </li>
                </ul>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-10 flex flex-col gap-10 lg:mt-0 lg:absolute lg:top-195 lg:left-1/2 lg:-translate-x-1/2 lg:w-full lg:flex-row lg:items-start lg:justify-between"
            variants={staggerContainer(0.2, 0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div
              variants={slideLeft}
              whileHover={hoverLift}
              whileTap={tapShrink}
            >
              <Card
                className="  w-full max-w-138.5
    h-auto
    mx-auto lg:mx-0
    mt-6 lg:mt-0
    lg:w-138.5
    lg:top-1 lg:right-7.5"
                title="ENTRY FEE"
              >
                <ul className="space-y-1 leading-5 text-sm sm:text-base lg:text-[20px]">
                  <li className="flex gap-3">
                    <span className="mt-2.25 h-1 w-[2.9px] rounded-full bg-white shrink-0" />
                    <p>Round 1 (Online Screening): No entry fee.</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2.25 h-1 w-[2.9px] rounded-full bg-white shrink-0" />
                    <p>Round 2 (Display Competition): Rs. 1000/-</p>
                  </li>
                </ul>
              </Card>
            </motion.div>

            <motion.div
              variants={slideRight}
              whileHover={hoverLift}
              whileTap={tapShrink}
            >
              <Card
                className=" w-full max-w-138
    h-auto
    mx-auto lg:mx-0
    mt-6 lg:mt-0
    lg:w-138
    lg:left-9"
                title="PRIZES"
              >
                <ul className="space-y-2 leading-3 text-sm sm:text-base lg:text-[20px]">
                  <li className="flex gap-3">
                    <span className="mt-2.25 h-1 w-[2.9px] rounded-full bg-white shrink-0" />
                    <p>1st Prize: Rs. 40,000/-</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2.25 h-1 w-[2.9px] rounded-full bg-white shrink-0" />
                    <p>2nd Prize: Rs. 20,000/-</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2.25 h-1 w-[2.9px] rounded-full bg-white shrink-0" />
                    <p>3rd Prize: Rs. 10,000/-</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2.25 h-1 w-[2.9px] rounded-full bg-white shrink-0" />
                    <p>Track 1 (Theme based): Rs. 5,000/-</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2.25 h-1 w-[2.9px] rounded-full bg-white shrink-0" />
                    <p>Track 2 (Socially Relevant Project): Rs. 5,000/-</p>
                  </li>
                </ul>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
