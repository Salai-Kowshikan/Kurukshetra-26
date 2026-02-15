export default function Footer() {
  return (
    <footer className="relative mt-auto w-full px-3 py-3 sm:px-4 sm:py-4 font-(family-name:--orbitron) text-white/85 z-20">
      {/* <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#8A05FF]/40 via-[#240038]/60 to-[#8A05FF]/40" /> */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[78%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#8A05FF]/60 to-transparent" />

      <div className="mx-auto w-full max-w-6xl rounded-[18px] sm:rounded-[22px] border border-white/20 bg-[#8A05FF]/85 px-3 py-2 text-center text-[12px] md:text-[13px] leading-4 shadow-[0_0_20px_rgba(138,5,255,0.2)] backdrop-blur-lg sm:px-8 sm:py-3 font-semibold">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 sm:gap-3">
          {/* CEG Tech Forum & Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 flex-wrap">
            <span>
              Designed & Developed by{" "}
              <a
                href="https://cegtechforum.in/"
                className="text-white/95 underline underline-offset-2 transition-colors hover:text-[#b36bff] hover:drop-shadow-[0_0_10px_rgba(179,107,255,0.5)]"
              >
                CEG Tech Forum
              </a>
            </span>
            <span className="hidden sm:inline text-white/40">|</span>
            <span className="text-white/80 font-bold">
              {"\u00A9"} {new Date().getFullYear()} Copyright CTF.
            </span>
          </div>

          {/* Terms & Conditions */}
          <a
            href="/terms"
            className="px-3 py-1 sm:px-4 sm:py-1.5 rounded-full border border-white/30 text-white/80 text-[10px] lg:text-[12px] transition-all duration-300 hover:bg-violet-600/50 hover:text-white hover:border-violet-400 whitespace-nowrap"
          >
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
}
