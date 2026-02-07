import bgImg from '@/assets/technovation/Img.png';
import mobImg from '@/assets/technovation/mobileImg.png';
import tabImg from '@/assets/technovation/tabImg.png';

const Background = () => {
  return (
    <div className="fixed inset-0 z-0 opacity-65">
      <picture>
        <source media="(min-width: 1024px)" srcSet={bgImg} />
        <source media="(min-width: 640px)" srcSet={tabImg} />
        <img
          src={mobImg}
          alt="background"
          className="w-full h-full object-cover object-[center_90%]"
        />
      </picture>
    </div>
  );
};

export default Background;
