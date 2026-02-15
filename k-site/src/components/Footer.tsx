export default function Footer() {
  return (
    <footer className="relative z-50 mt-auto w-full px-3 py-3 sm:px-4 sm:py-4 font-(family-name:--orbitron) text-white/85">
      
      {/* Background Gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#3a0b63] via-[#240038] to-[#0a0011]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[78%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#b36bff]/80 to-transparent" />

      <div className="mx-auto w-full max-w-6xl rounded-[18px] sm:rounded-[22px] 
        border border-white/20 bg-[#2a0f3f]/70 
        px-4 py-3 sm:px-8 sm:py-4 
        text-[11px] sm:text-sm 
        shadow-[0_0_24px_rgba(138,5,255,0.22)] 
        backdrop-blur-xl"
      >
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-center sm:text-left">
            Designed & Developed by{" "}
            <a
              href="https://cegtechforum.in/"
              className="text-white/90 underline underline-offset-2 transition-colors hover:text-[#b36bff]"
            >
              CEG Tech Forum
            </a>{" "}
            | {"\u00A9"} {new Date().getFullYear()} Copyright CTF
          </div>
          <a
            href="/terms"
            className="px-4 py-1.5 rounded-full 
              border border-white/30 
              text-white/80 
              transition-all duration-300 
              hover:bg-violet-600 hover:text-white"
          >
            Terms & Conditions
          </a>

        </div>
      </div>
    </footer>
  );
}
