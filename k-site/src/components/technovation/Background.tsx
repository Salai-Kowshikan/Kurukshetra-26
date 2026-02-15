import bgImg from "@/assets/technovation/Img.png";
import mobImg from "@/assets/technovation/mobileImg.png";
import tabImg from "@/assets/technovation/tabImg.png";

const Background = () => {
  return (
    <div className="fixed inset-0 w-full h-full z-0 opacity-100 overflow-hidden">
      <picture>
        <source media="(min-width: 1024px)" srcSet={bgImg} />
        <source media="(min-width: 640px)" srcSet={tabImg} />
        <img
          src={mobImg}
          alt="background"
          className="w-full h-full object-cover object-[center_90%]"
        />
      </picture>

      {/* Inset black overlay for consistent styling across pages */}
      <div className="pointer-events-none absolute inset-0 bg-black/20" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-50 bg-linear-to-b from-transparent via-black/40 opacity-100 to-black" />
    </div>
  );
};

export default Background;
