import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function ComingSoon() {
  return (
    <div className="relative flex min-h-svh w-full flex-col items-center justify-center overflow-hidden bg-[#030014] p-4 text-center">
      
      <style>{`
        @keyframes glitch-anim {
          0% { clip-path: inset(10% 0 85% 0); transform: translate(-2px, 1px) skew(1deg); }
          10% { clip-path: inset(40% 0 40% 0); transform: translate(2px, -1px) skew(-1deg); }
          20% { clip-path: inset(80% 0 5% 0); transform: translate(-1px, 2px) skew(0.5deg); }
          30% { clip-path: inset(10% 0 80% 0); transform: translate(1px, -2px) skew(-0.5deg); }
          40% { clip-path: inset(50% 0 30% 0); transform: translate(-2px, 0px) skew(0deg); }
          50% { clip-path: inset(0% 0 0% 0); transform: translate(0px, 0px) skew(0deg); }
          100% { clip-path: inset(0% 0 0% 0); transform: translate(0px, 0px) skew(0deg); }
        }
        .glitch-text::before, .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: transparent;
        }
        .glitch-text::before {
          left: -2px;
          text-shadow: 2px 0 #ef4444; 
          animation: glitch-anim 2s infinite linear alternate-reverse;
        }
        .glitch-text::after {
          left: 2px;
          text-shadow: -2px 0 #3b82f6;
          animation: glitch-anim 3s infinite linear alternate;
        }
      `}</style>

      <div className="pointer-events-none absolute top-[-20%] left-0 h-125 w-full bg-fuchsia-700/20 blur-[100px] rounded-full opacity-40"></div>

      <h1 className="z-10 mb-6 flex flex-col items-center justify-center drop-shadow-[0_0_10px_rgba(255,0,255,0.3)]">
        <span className="font-(family-name:--wallpoet) text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-[0.2em] uppercase text-white/80">
          SOMETHING
        </span>
        <span className="font-(family-name:--wallpoet) text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[0.2em] uppercase text-transparent bg-clip-text bg-linear-to-r from-[#FF00B3] to-[#8A05FF] drop-shadow-[0_0_20px_rgba(217,70,239,0.8)] mt-1">
          BIG IS LOADING
        </span>
      </h1>

      <div className="z-10 lg:w-[40%] md:w-[70%] w-full rounded-2xl border border-fuchsia-500/30 bg-black/80 p-6 shadow-[0_0_40px_rgba(168,85,247,0.15)] backdrop-blur-xl sm:p-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-cyan-500/5 to-transparent pointer-events-none"></div>

        <div className="mb-8 relative z-10">
          <div className="relative inline-block w-fit">
            <h2
              data-text="COMING SOON"
              className="glitch-text font-(family-name:--wallpoet) text-4xl sm:text-6xl text-cyan-400 tracking-widest drop-shadow-[0_0_25px_rgba(34,211,238,0.6)] mb-2 relative z-20"
            >
              COMING SOON
            </h2>
          </div>

          <p className="font-(family-name:--poppins) text-cyan-100/70 text-sm sm:text-base uppercase tracking-[0.3em] font-semibold mt-2">
            Feature Under Construction
          </p>
        </div>

        <Link to="/" className="w-full block relative z-10">
          <Button 
            className="w-full h-12 border-0 bg-linear-to-r from-fuchsia-600 to-purple-600 text-white font-(family-name:--wallpoet) tracking-widest uppercase hover:from-fuchsia-500 hover:to-[#8A05FF] hover:scale-[1.02] transition-all duration-300 rounded-lg"
          >
            Back to Reality
          </Button>
        </Link>
      </div>

      <div className="absolute bottom-0 h-0.5 w-full bg-linear-to-r from-transparent via-cyan-500/30 to-transparent blur-[1px]"></div>
    </div>
  );
}
