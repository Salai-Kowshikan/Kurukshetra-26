import { motion } from "motion/react";
import about1 from "/Ceg.png";
import about2 from "/Ctf.png";
import about3 from "@/assets/K'26_Logo.png";
import about4 from "/Vyuhaa.png";
import useGlitch from "@/hooks/useGlitch";
import CyberCorners from "@/components/CyberCorners";
import {
  pageVariants,
  blurIn,
  cardVariants,
  staggerContainer,
  slideLeft,
  slideRight,
  hoverLift,
  tapShrink,
  breathe,
} from "@/lib/animations";

const TITLES = [
  "COLLEGE OF ENGINEERING GUINDY",
  "CEG TECH FORUM",
  "KURUKSHETRA",
  "VYUHAA",
];

const IMAGES = [about1, about2, about3, about4];

const PARAGRAPHS = [
  "College of Engineering Guindy (CEG), recognized as Asia's oldest technical institution, stands as one of the nation's most prestigious and historic establishments. Located in the heart of Chennai, the college is equipped with world-class infrastructure and offers a diverse array of courses. With strong ties to industry, cutting-edge research opportunities, and a plethora of extracurricular activities, CEG empowers students to expand their knowledge and skill set. Upholding its legacy, the institution continues to nurture aspiring engineers and scholars, transforming them into highly skilled professionals.",
  "CEG Tech Forum, Anna University's premier ISO 9001:2015 certified student-run organization, was founded in 2006 to promote technical excellence and foster innovation among students. Serving as a platform for showcasing and enhancing technical skills, the forum organizes various events, workshops, and projects, encouraging students to work on real-world multidisciplinary challenges and solve complex engineering problems. With a focus on inspiring creativity and collaboration, the forum connects students with experts in the field, enabling networking and career growth in engineering and technology. Its unparalleled standards and initiatives make it a cornerstone of technological advancement within the CEG community.",
  "Kurukshetra is an international techno-management fest holding a UNESCO patronage. It was named after the apocalyptic battle between Kauravas and Pandavas in an ancient Indian epic, the Mahabharata. All the five Pandavas have different powers and skills which led them to win the battle. So, the different qualities of people will make this a perfect battle. But here, the battle is more interesting because it takes place with brains instead of swords. Its logo, the Cyclotron, symbolizes the celebration of the indomitable spirit of engineering and innovation. That was the battle fought with immense physical powers to conquer the territory but this is the battle of cognitive skills to win the tech world from which the tagline 'The Battle of Brains' was derived.",
  "Vyuhaa is a magnificent techno-management fest exclusively hosted for students of the University Department campuses of Anna University. This idea was set forth with the mission of celebrating the virtuoso of innovation and instilling an incandescent fervor for technology among incoming college freshmen.",
];
export default function About() {
  const glitch = useGlitch();

  return (
    <motion.section
      className="w-full py-12"
      variants={pageVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
    >
      <motion.div className="flex justify-center mb-16" variants={blurIn}>
        <div className={`relative ${glitch ? "glitch-active" : ""}`}>
          <h2
            className="sponsor-glitch text-3xl md:text-4xl lg:mt-20 mt-28 font-medium text-white font-(family-name:--wallpoet)"
            data-text="ABOUT US"
          >
            ABOUT US
          </h2>
        </div>
      </motion.div>
      <motion.div
        className="max-w-5xl mx-auto px-4 space-y-8"
        variants={staggerContainer(0.15)}
      >
        {TITLES.map((title, i) => (
          /* Gradient border wrapper */
          <motion.div
            key={i}
            className="rounded-xl p-0.5"
            variants={cardVariants}
            whileHover={hoverLift}
            whileTap={tapShrink}
          >
            <article className="relative w-full rounded-xl lg:p-12 p-6 bg-white/5 border border-white/50 backdrop-blur-xs overflow-hidden">
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-fuchsia-500/5 pointer-events-none"
                animate={breathe}
              />

              {/* CYBER CORNER BORDERS */}
              <CyberCorners />
              {/* Title */}
              <div className="flex justify-center lg:-mt-6 relative z-10">
                <motion.div
                  className="px-5 py-1.5 rounded-full
									           bg-violet-600 
									           text-white text-sm md:text-base text-center
									           font-(family-name:--wallpoet)"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(168, 85, 247, 0.5)",
                  }}
                >
                  {title}
                </motion.div>
              </div>

              <div
                className={`mt-6  backdrop-blur-[5px] p-5 rounded-xl flex flex-col md:flex-row items-center gap-6 relative z-10 ${
                  i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                <motion.div
                  className="w-full md:w-1/2 flex items-center justify-center"
                  variants={i % 2 === 0 ? slideLeft : slideRight}
                  whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? -2 : 2 }}
                >
                  <img
                    src={IMAGES[i]}
                    alt={title}
                    loading="lazy"
                    className="w-full max-h-64 object-contain rounded drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                  />
                </motion.div>

                <motion.div
                  className="w-full md:w-1/2 text-justify"
                  variants={i % 2 === 0 ? slideRight : slideLeft}
                >
                  <p className="text-base leading-relaxed text-white/90">
                    {PARAGRAPHS[i]}
                  </p>
                </motion.div>
              </div>
            </article>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
