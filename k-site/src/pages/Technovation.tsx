import Background from "@/components/technovation/Background";
import Card from "@/components/technovation/Card";
import Drone from "@/components/technovation/Drone";
import useFullNavbar from "@/hooks/useFullNavbar";

export default function Technovation() {
  useFullNavbar();

  return (
    <div className="relative min-h-screen bg-black text-white">
        
        <section className="relative h-screen overflow-hidden">
          <Background />
          <Drone />
          
          <h1 className="absolute top-[24vh] sm:top-[20vh] md:top-[40vh] lg:top-[212px] left-[7vw] sm:left-[10vw] md:left-[15vw] lg:left-[267px] w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[1045px] text-white text-center text-[46px] sm:text-[60px] md:text-[80px] lg:text-[103px] leading-tight tracking-[0.035em] font-(family-name:--wallpoet) font-normal z-10">
            Technovation
          </h1>
      
           <Card
          title="ABOUT"
          className="
            absolute
            top-[55vh] lg:top-[390px]
            left-1/2 lg:left-[132px]
            -translate-x-1/2 lg:translate-x-0
            z-20
          "
        >
        <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="mt-[9px] h-[4px] w-[2.9px] rounded-full bg-white shrink-0" />
              <p>
                Technovation is an inter-college project display competition with a theme
                that varies yearly. Transform your imaginative and practical ideas into
                tangible products to present at the Technovation.
              </p>
            </li>

            <li className="flex gap-3">
              <span className="mt-[9px] h-[4px] w-[2.9px] rounded-full bg-white shrink-0" />
              <p>
                
The competition is open to individuals and teams, and the entries will be judged on their originality, feasibility, and completeness. The main goal of this competition is to encourage the development of innovative ideas that have the potential to improve our lives.
              </p>
            </li>
      </ul>
           </Card>

           <Card
          title="RULES & REGULATION"
          className="
            absolute
    top-[75vh] lg:top-[7px]
    left-1/2 lg:left-[850px]
    -translate-x-1/2 lg:translate-x-0
    z-20
          "
        >
        <ul className="space-y-[0.5px]">
            <li className="flex gap-3">
              <span className="mt-[9px] h-[4px] w-[2.9px] rounded-full bg-white shrink-0" />
              <p>
               Eligibility: Anyone with a passion for engineering can participate
              </p>
            </li>

            <li className="flex gap-3">
              <span className="mt-[9px] h-[4px] w-[2.9px] rounded-full bg-white shrink-0" />
              <p>
Participation: Participants can present their projects as either a team or as individuals.
              </p>
            </li>

            <li className="flex gap-3">
              <span className="mt-[9px] h-[4px] w-[2.9px] rounded-full bg-white shrink-0" />
              <p>
Registration: Participants are required to register themselves through Kurukshetra's official website. During registration, participants must submit their project abstract in PDF format and upload a working demo video to drive and share the link with public access.         
   </p>
            </li>
      </ul>
           </Card>

           
      </section>
      </div>


);
}
