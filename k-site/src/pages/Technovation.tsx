// import Background from "@/components/technovation/Background";
// import Card from "@/components/technovation/Card";
// import Drone from "@/components/technovation/Drone";
// import useFullNavbar from "@/hooks/useFullNavbar";
// import { useEffect, useState } from "react";
// import loader_normal from '../assets/technovation/loader_normal.mp4';
// import k26_logo from "../assets/K'26_Logo.png";

// type VideoLoaderProps = {
//   onFinish?: () => void;
// };

// function VideoLoader({ onFinish }: VideoLoaderProps) {
//   const [hidden, setHidden] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setHidden(true);
//       onFinish?.();
//     }, 4000);

//     return () => clearTimeout(timer);
//   }, [onFinish]);

//   if (hidden) return null;

//   return (
//     <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black">
//       <video autoPlay muted playsInline className="absolute inset-0 w-full h-full object-cover">
//         <source src={loader_normal} type="video/mp4" />
//       </video>

//       <img
//         src={k26_logo}
//         alt="Loader Logo"
//         className="relative z-10 w-[60vw] max-w-[700px] sm:max-w-[800px] object-contain"
//       />
//     </div>
//   );
// }

// export default function Technovation() {
//   useFullNavbar();
//   const [loading, setLoading] = useState(true);

//   return (
//     <>
//       {loading && <VideoLoader onFinish={() => setLoading(false)} />}

//     <div className="relative min-h-screen bg-black text-white overflow-x-clip">
//       <section className="relative min-h-screen pb-12 sm:pb-16">
//         <Background />

//         <div className="relative z-10 pt-[26svh] sm:pt-[24svh] md:pt-[30svh] flex justify-center xl:pt-0 xl:absolute top-[179px] xl:top-[320px] 2xl:top-[365px] xl:left-1/2 xl:-translate-x-1/2 xl:-translate-y-1/2">
//           <Drone />
//         </div>

//         <h1 className="absolute top-[19vh] sm:top-[20vh] md:top-[22vh] xl:top-[210px] left-1/2 -translate-x-1/2 w-[92vw] sm:w-[85vw] md:w-[75vw] xl:w-[1045px] text-white text-center text-[clamp(40px,8vw,103px)] leading-tight tracking-[0.035em] font-(family-name:--wallpoet) font-normal z-10">
//           Technovation
//         </h1>

//         <div className="relative z-20 mx-auto w-full max-w-[1200px] px-4 sm:px-6 pt-[40svh] sm:pt-[38svh] md:pt-[44svh] xl:pt-0">
//           <div className="flex flex-col gap-10 xl:flex-row xl:gap-14 xl:items-start xl:justify-between xl:absolute xl:top-[380px] xl:left-1/2 xl:-translate-x-1/2 xl:w-full">
//             <Card className="backdrop-blur-md w-full max-w-[560px] mx-auto xl:mx-0 xl:max-w-none xl:w-[552px]" title="ABOUT">
//               <ul className="space-y-4 text-[13px] sm:text-[14px] md:text-[14px] lg:text-[14px] xl:text-[19px] leading-[1.35] lg:leading-[1.25] xl:leading-[1.35]">
//                 <li className="flex gap-3">
//                   <span className="mt-[9px] h-[4px] w-[2.9px] rounded-full bg-white shrink-0" />
//                   <p>
//                     Technovation is an inter-college project display competition
//                     with a theme that varies yearly. Transform your imaginative
//                     and practical ideas into tangible products to present at the
//                     Technovation.
//                   </p>
//                 </li>

//                 <li className="flex gap-3">
//                   <span className="mt-[9px] h-[4px] w-[2.9px] rounded-full bg-white shrink-0" />
//                   <p>
//                     The competition is open to individuals and teams, and the
//                     entries will be judged on their originality, feasibility, and
//                     completeness. The main goal of this competition is to
//                     encourage the development of innovative ideas that have the
//                     potential to improve our lives.
//                   </p>
//                 </li>
//               </ul>
//             </Card>

//             <Card className="backdrop-blur-md w-full max-w-[560px] mx-auto xl:mx-0 xl:max-w-none xl:w-[552px]" title="RULES & REGULATION">
//               <ul className="space-y-2 xl:space-y-[0.5px] text-[13px] sm:text-[14px] md:text-[14px] lg:text-[14px] xl:text-[19px] leading-[1.35] lg:leading-[1.25] xl:leading-[1.35]">
//                 <li className="flex gap-3">
//                   <span className="mt-[9px] h-[4px] w-[2.9px] rounded-full bg-white shrink-0" />
//                   <p>
//                     Eligibility: Anyone with a passion for engineering can
//                     participate.
//                   </p>
//                 </li>

//                 <li className="flex gap-3">
//                   <span className="mt-[9px] h-[4px] w-[2.9px] rounded-full bg-white shrink-0" />
//                   <p>
//                     Participation: Participants can present their projects as
//                     either a team or as individuals.
//                   </p>
//                 </li>

//                 <li className="flex gap-3">
//                   <span className="mt-[9px] h-[4px] w-[2.9px] rounded-full bg-white shrink-0" />
//                   <p>
//                     Registration: Participants are required to register themselves
//                     through Kurukshetra's official website. During registration,
//                     participants must submit their project abstract in PDF format
//                     and upload a working demo video to drive and share the link
//                     with public access.
//                   </p>
//                 </li>
//               </ul>
//             </Card>
//           </div>

//           <div className="hidden xl:block absolute left-1/2 -translate-x-1/2 top-[740px] w-full max-w-[1200px] h-px " />

//           <div className="mt-10 flex flex-col gap-10 sm:mt-12 xl:mt-0 xl:flex-row xl:gap-14 xl:items-start xl:justify-between xl:absolute xl:top-[780px] xl:left-1/2 xl:-translate-x-1/2 xl:w-full">
//             <Card className="backdrop-blur-md w-full max-w-[560px] mx-auto xl:mx-0 xl:max-w-none xl:w-[552px]" title="ENTRY FEE">
//               <ul className="space-y-4 text-[13px] sm:text-[14px] md:text-[14px] lg:text-[14px] xl:text-[20px] leading-[1.35] lg:leading-[1.25] xl:leading-5">
//                 <li className="flex gap-3">
//                   <span className="mt-[9px] h-[4px] w-[2.9px] rounded-full bg-white shrink-0" />
//                   <p>Round 1 (Online Screening): No entry fee.</p>
//                 </li>
//                 <li className="flex gap-3">
//                   <span className="mt-[9px] h-[4px] w-[2.9px] rounded-full bg-white shrink-0" />
//                   <p>Round 2 (Display Competition): Rs. 1000/-</p>
//                 </li>
//               </ul>
//             </Card>

//             <Card className="backdrop-blur-md w-full max-w-[560px] mx-auto xl:mx-0 xl:max-w-none xl:w-[552px]" title="PRIZES">
//               <ul className="space-y-2 xl:space-y-1 text-[13px] sm:text-[14px] md:text-[14px] lg:text-[14px] xl:text-[18px] leading-[1.35] lg:leading-[1.25] xl:leading-3.7">
//                 <li className="flex gap-3">
//                   <span className="mt-[9px] h-[4px] w-[2.9px] rounded-full bg-white shrink-0" />
//                   <p>1st Prize: Rs. 40,000/-</p>
//                 </li>
//                 <li className="flex gap-3">
//                   <span className="mt-[9px] h-[4px] w-[2.9px] rounded-full bg-white shrink-0" />
//                   <p>2nd Prize: Rs. 20,000/-</p>
//                 </li>
//                 <li className="flex gap-3">
//                   <span className="mt-[9px] h-[4px] w-[2.9px] rounded-full bg-white shrink-0" />
//                   <p>3rd Prize: Rs. 10,000/-</p>
//                 </li>
//                 <li className="flex gap-3">
//                   <span className="mt-[9px] h-[4px] w-[2.9px] rounded-full bg-white shrink-0" />
//                   <p>Track 1 (Theme based): Rs. 5,000/-</p>
//                 </li>
//                 <li className="flex gap-3">
//                   <span className="mt-[9px] h-[4px] w-[2.9px] rounded-full bg-white shrink-0" />
//                   <p>Track 2 (Socially Relevant Project): Rs. 5,000/-</p>
//                 </li>
//               </ul>
//             </Card>
//           </div>

//           <div className="hidden xl:block h-[1160px]" />
//         </div>
//       </section>
//     </div>
//     </>
//   );
// }

import Background from "@/components/technovation/Background";
import Card from "@/components/technovation/Card";
import Drone from "@/components/technovation/Drone";
import useFullNavbar from "@/hooks/useFullNavbar";
import GridScanLoader from "@/components/Loader.tsx";
import { useState } from "react";
import { motion } from "motion/react";
import useGlitch from "@/hooks/useGlitch";
import { blurIn } from "@/lib/animations";

export default function Technovation() {
  useFullNavbar();
  const [loading, setLoading] = useState(true);
  const glitch = useGlitch();
  return (
    <>
      {loading && <GridScanLoader onFinish={() => setLoading(false)} />}

      <div className="relative min-h-screen bg-black text-white overflow-x-clip">
        <section className="relative min-h-screen pb-12 sm:pb-16">
          <Background />

          <div className="relative z-10 pt-[26svh] sm:pt-[24svh] md:pt-[30svh] flex justify-center xl:pt-0 xl:absolute top-[179px] xl:top-[320px] 2xl:top-[365px] xl:left-1/2 xl:-translate-x-1/2 xl:-translate-y-1/2">
            <Drone />
          </div>

          <motion.div className="flex justify-center mb-16" variants={blurIn}>
            <div className={`relative ${glitch ? "glitch-active" : ""}`}>
              <div className="absolute top-[19vh] sm:top-[20vh] md:top-[22vh] xl:top-[210px] left-1/2 -translate-x-1/2 w-[92vw] sm:w-[85vw] md:w-[75vw] xl:w-[1045px] text-center z-10">
                <h1
                  className="sponsor-glitch text-white font-(family-name:--wallpoet) text-[clamp(40px,8vw,103px)] leading-tight tracking-[0.035em] font-normal"
                  data-text="Technovation"
                >
                  Technovation
                </h1>
              </div>
            </div>
          </motion.div>

          <div className="relative z-20 mx-auto w-full max-w-[1200px] px-4 sm:px-6 pt-[25svh] sm:pt-[32svh] md:pt-[24svh] xl:pt-0">
            <div className="flex flex-col gap-10 xl:flex-row xl:gap-14 xl:items-start xl:justify-between xl:absolute xl:top-[380px] xl:left-1/2 xl:-translate-x-1/2 xl:w-full">
              <Card
                className="backdrop-blur-md w-full max-w-[560px] mx-auto xl:mx-0 xl:max-w-none xl:w-[552px]"
                title="ABOUT"
              >
                <ul className="space-y-4 text-[13px] sm:text-[14px] md:text-[14px] lg:text-[14px] xl:text-[19px] leading-[1.35] lg:leading-[1.25] xl:leading-[1.35]">
                  <li className="flex gap-3">
                    <span className="mt-[9px] h-[4px] w-[2.9px] rounded-full bg-white shrink-0" />
                    <p>
                      Technovation is an inter-college project display
                      competition with a theme that varies yearly. Transform
                      your imaginative and practical ideas into tangible
                      products to present at the Technovation.
                    </p>
                  </li>

                  <li className="flex gap-3">
                    <span className="mt-[9px] h-[4px] w-[2.9px] rounded-full bg-white shrink-0" />
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

              <Card
                className="backdrop-blur-md w-full max-w-[560px] mx-auto xl:mx-0 xl:max-w-none xl:w-[552px]"
                title="RULES & REGULATION"
              >
                <ul className="space-y-2 xl:space-y-[0.5px] text-[13px] sm:text-[14px] md:text-[14px] lg:text-[14px] xl:text-[19px] leading-[1.35] lg:leading-[1.25] xl:leading-[1.35]">
                  <li className="flex gap-3">
                    <span className="mt-[9px] h-[4px] w-[2.9px] rounded-full bg-white shrink-0" />
                    <p>
                      Eligibility: Anyone with a passion for engineering can
                      participate.
                    </p>
                  </li>

                  <li className="flex gap-3">
                    <span className="mt-[9px] h-[4px] w-[2.9px] rounded-full bg-white shrink-0" />
                    <p>
                      Participation: Participants can present their projects as
                      either a team or as individuals.
                    </p>
                  </li>

                  <li className="flex gap-3">
                    <span className="mt-[9px] h-[4px] w-[2.9px] rounded-full bg-white shrink-0" />
                    <p>
                      Registration: Participants are required to register
                      themselves through Kurukshetra's official website. During
                      registration, participants must submit their project
                      abstract in PDF format and upload a working demo video to
                      drive and share the link with public access.
                    </p>
                  </li>
                </ul>
              </Card>
            </div>

            <div className="hidden xl:block absolute left-1/2 -translate-x-1/2 top-[740px] w-full max-w-[1200px] h-px " />

            <div className="mt-10 flex flex-col gap-10 sm:mt-12 xl:mt-0 xl:flex-row xl:gap-14 xl:items-start xl:justify-between xl:absolute xl:top-[780px] xl:left-1/2 xl:-translate-x-1/2 xl:w-full">
              <Card
                className="backdrop-blur-md w-full max-w-[560px] mx-auto xl:mx-0 xl:max-w-none xl:w-[552px]"
                title="ENTRY FEE"
              >
                <ul className="space-y-4 text-[13px] sm:text-[14px] md:text-[14px] lg:text-[14px] xl:text-[20px] leading-[1.35] lg:leading-[1.25] xl:leading-5">
                  <li className="flex gap-3">
                    <span className="mt-[9px] h-[4px] w-[2.9px] rounded-full bg-white shrink-0" />
                    <p>Round 1 (Online Screening): No entry fee.</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-[9px] h-[4px] w-[2.9px] rounded-full bg-white shrink-0" />
                    <p>Round 2 (Display Competition): Rs. 1000/-</p>
                  </li>
                </ul>
              </Card>

              <Card
                className="backdrop-blur-md w-full max-w-[560px] mx-auto xl:mx-0 xl:max-w-none xl:w-[552px]"
                title="PRIZES"
              >
                <ul className="space-y-2 xl:space-y-1 text-[13px] sm:text-[14px] md:text-[14px] lg:text-[14px] xl:text-[18px] leading-[1.35] lg:leading-[1.25] xl:leading-3.7">
                  <li className="flex gap-3">
                    <span className="mt-[9px] h-[4px] w-[2.9px] rounded-full bg-white shrink-0" />
                    <p>1st Prize: Rs. 40,000/-</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-[9px] h-[4px] w-[2.9px] rounded-full bg-white shrink-0" />
                    <p>2nd Prize: Rs. 20,000/-</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-[9px] h-[4px] w-[2.9px] rounded-full bg-white shrink-0" />
                    <p>3rd Prize: Rs. 10,000/-</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-[9px] h-[4px] w-[2.9px] rounded-full bg-white shrink-0" />
                    <p>Track 1 (Theme based): Rs. 5,000/-</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-[9px] h-[4px] w-[2.9px] rounded-full bg-white shrink-0" />
                    <p>Track 2 (Socially Relevant Project): Rs. 5,000/-</p>
                  </li>
                </ul>
              </Card>
            </div>

            <div className="hidden xl:block h-[1160px]" />
          </div>
        </section>
      </div>
    </>
  );
}
