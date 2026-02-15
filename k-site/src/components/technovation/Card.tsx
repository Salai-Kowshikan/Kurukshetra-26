interface CardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function Card({ title, children, className = "" }: CardProps) {
  return (
    <div
      className={`
        relative
        w-[90%] sm:w-[500px] lg:w-[552px]
        min-h-[260px] lg:min-h-[220px]
        rounded-[15px]
        bg-white/[0.001]
        backdrop-blur-[5.6px]
        border gradient-border
        shadow-[inset_0_-2px_4px_rgba(0,0,0,0.2),inset_0_2px_4px_rgba(255,255,255,0.2)]
        p-6
        text-white
        ${className}
      `}
    >
      <h2 className="text-[#8A05FF] text-[22px] sm:text-[26px]  lg:text-[29px] font-bold tracking-[0.02em] font-(family-name:--orbitron) text-center mb-4 drop-shadow-[0_0_10px_black]">
        {title}
      </h2>
      
      <div className="w-[90%] font-normal sm:w-[460px] lg:w-[490px] text-[12px] sm:text-[14px] md:text-[13px] lg:text-[18px] xl:text-[20px] leading-[1.1] tracking-[0.045em] font-(family-name:--jost)">
        {children}
      </div>
    </div>
  );
}
