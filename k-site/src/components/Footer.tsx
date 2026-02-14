export default function Footer() {
  return (
    <footer className="relative z-50 mt-auto w-full px-3 py-3 sm:px-4 sm:py-4 font-(family-name:--orbitron) text-white/85">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#3a0b63] via-[#240038] to-[#0a0011]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[78%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#b36bff]/80 to-transparent" />

      <div className="mx-auto w-full max-w-6xl rounded-[18px] sm:rounded-[22px] border border-white/20 bg-[#2a0f3f]/70 px-4 py-2.5 text-center text-[11px] leading-5 shadow-[0_0_24px_rgba(138,5,255,0.22)] backdrop-blur-xl sm:px-8 sm:py-4 sm:text-sm">
        <div className="flex flex-col items-center justify-between gap-1 sm:flex-row">
          <span className="max-w-[22rem] sm:max-w-none">
            Designed & Developed by{" "}
            <a
              href="https://cegtechforum.in/"
              className="text-white/90 underline underline-offset-2 transition-colors hover:text-[#b36bff] hover:drop-shadow-[0_0_10px_rgba(179,107,255,0.7)]"
            >
              CEG Tech Forum
            </a>
          </span>
          <span className="text-white/70">
            {"\u00A9"} {new Date().getFullYear()} Copyright CTF.
          </span>
        </div>
      </div>
    </footer>
  );
}
