import Background from "@/components/technovation/Background";
import Card from "@/components/technovation/Card";
import Drone from "@/components/technovation/Drone";
import useFullNavbar from "@/hooks/useFullNavbar";
import { useState, useEffect } from "react";

export default function Technovation() {
  useFullNavbar();
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const interval = setInterval(
      () => {
        setGlitch(true);
        setTimeout(() => setGlitch(false), 500);
      },
      3000 + Math.random() * 2000
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen text-white overflow-x-clip">
      <section className="relative min-h-screen lg:min-h-[1280px] xl:min-h-[1340px] pb-16 sm:pb-20">
        <Background />

        <div className="relative z-10 pt-[26svh] sm:pt-[24svh] md:pt-[30svh] flex justify-center lg:pt-0 lg:absolute top-[179px] lg:top-[320px] xl:top-[365px] lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2">
          <Drone />
        </div>

        {/* <h1 className="absolute top-[24vh] xs:top-[18vh] sm:top-[2vh] md:top-[23vh] lg:top-[200px] xl:top-[210px] left-[7vw] sm:left-[10vw] md:left-[15vw] lg:left-[267px] w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[1045px] text-white text-center text-[46px] sm:text-[60px] md:text-[80px] lg:text-[103px] leading-tight tracking-[0.035em] font-(family-name:--wallpoet) font-normal z-10"> */}
        <div className={`absolute text-white text-center leading-tight tracking-[0.035em] font-(family-name:--wallpoet) font-normal z-10 text-[40px] sm:text-[50px] md:text-[70px] lg:text-[80px] ${glitch ? "glitch-active" : ""}`}>
          <h1 className="sponsor-glitch hero-title" data-text="Technovation">
            Technovation
          </h1>
        </div>

        <div className="relative z-20 mx-auto w-full max-w-[1200px] px-4 sm:px-6 pt-[40svh] sm:pt-[38svh] md:pt-[44svh] lg:pt-0">
          <div className="flex flex-col gap-10 lg:absolute lg:top-[380px] lg:left-1/2 lg:-translate-x-1/2 lg:w-full lg:flex-row lg:items-start lg:justify-between">
            <Card
              className="  w-full max-w-[554px]
    h-auto lg:h-[340px]
    mx-auto lg:mx-0
    mt-6 lg:mt-0
    lg:top-[8px] lg:right-[30px]"
              title="ABOUT"
            >
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="mt-[9px] h-[4px] w-[2.9px] rounded-full bg-white shrink-0" />
                  <p>
                    Technovation is an inter-college project display competition
                    with a theme that varies yearly. Transform your imaginative
                    and practical ideas into tangible products to present at the
                    Technovation.
                  </p>
                </li>

                <li className="flex gap-3">
                  <span className="mt-[9px] h-[4px] w-[2.9px] rounded-full bg-white shrink-0" />
                  <p>
                    The competition is open to individuals and teams, and the
                    entries will be judged on their originality, feasibility,
                    and completeness. The main goal of this competition is to
                    encourage the development of innovative ideas that have the
                    potential to improve our lives.
                  </p>
                </li>
              </ul>
            </Card>

            <Card
              className="  w-full max-w-[545px]
    h-auto lg:h-[342px]
    mx-auto lg:mx-0
    mt-6 lg:mt-0
    lg:top-1 lg:left-9"
              title="RULES & REGULATION"
            >
              <ul className="pt-3 space-y-[0.1]">
                <li className="flex gap-3">
                  <span className="mt-[9px] h-[4px] w-[2.9px] rounded-full bg-white shrink-0" />
                  <p className="tracking-[0.021em]">
                    Eligibility: Anyone with a passion for engineering can
                    participate.
                  </p>
                </li>

                <li className="flex gap-3">
                  <span className="mt-[9px] h-[4px] w-[2.9px] rounded-full bg-white shrink-0" />
                  <p className="tracking-[0.017em]">
                    Participation: Participants can present their projects as
                    either a team or as individuals.
                  </p>
                </li>

                <li className="flex gap-3">
                  <span className="mt-[9px] h-[4px] w-[2.9px] rounded-full bg-white shrink-0" />
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
          </div>

          <div className="mt-10 flex flex-col gap-10 lg:mt-0 lg:absolute lg:top-[780px] lg:left-1/2 lg:-translate-x-1/2 lg:w-full lg:flex-row lg:items-start lg:justify-between">
            <Card
              className="  w-full max-w-[554px]
    h-auto
    mx-auto lg:mx-0
    mt-6 lg:mt-0
    lg:w-[554px]
    lg:top-1 lg:right-[30px]"
              title="ENTRY FEE"
            >
              <ul className="space-y-1 leading-5 text-sm sm:text-base lg:text-[20px]">
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
              className=" w-full max-w-[552px]
    h-auto
    mx-auto lg:mx-0
    mt-6 lg:mt-0
    lg:w-[552px]
    lg:left-9"
              title="PRIZES"
            >
              <ul className="space-y-2 leading-3 text-sm sm:text-base lg:text-[20px]">
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
        </div>
      </section>
    </div>
  );
}
