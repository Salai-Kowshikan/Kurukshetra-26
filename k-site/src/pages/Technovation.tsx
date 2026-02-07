import Background from "@/components/technovation/Background";
import Drone from "@/components/technovation/Drone";
import useFullNavbar from "@/hooks/useFullNavbar";

export default function Technovation() {
  useFullNavbar();

  return (
    <div className="min-h-screen bg-black text-white">
        <Background />
        <Drone />
    <h1
  className="
    absolute
    top-[24vh] sm:top-[20vh] md:top-[40vh] lg:top-[212px]
    left-[7vw] sm:left-[10vw] md:left-[15vw] lg:left-[267px]

    w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[1045px]

    text-white text-center
    text-[46px] sm:text-[60px] md:text-[80px] lg:text-[103px]
    leading-tight
    tracking-[0.035em]

    font-(family-name:--wallpoet)
    font-normal
    z-10
  "
>
  Technovation
</h1>


    </div>
  );
}
