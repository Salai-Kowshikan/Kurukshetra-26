import bgImg from '@/assets/technovation/Img.png';
import mobImg from '@/assets/technovation/mobileImg.png';
import tabImg from '@/assets/technovation/tabImg.png';

const Background = () => {
  return (
    <div className="absolute inset-0 w-full h-full z-0 opacity-65 overflow-hidden">
      <picture>
        <source media="(min-width: 1024px)" srcSet={bgImg} />
        <source media="(min-width: 640px)" srcSet={tabImg} />
        <img
          src={mobImg}
          alt="background"
          className="w-full h-full object-cover object-[center_90%]"
        />
      </picture>

         
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-60 md:h-80 bg-gradient-to-b from-transparent via-black/70 to-black" />
      </div>
  );
};

export default Background;
