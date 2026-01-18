export default function Footer() {
  return (
    <footer className="w-full py-6 bg-linear-to-r from-[#FF00B3] to-[#8A05FF]">
      <div className="max-w-7xl mx-auto font-extrabold font-(family-name:--poppins) px-4 text-center text-sm text-white">
        Designed & Developed by <a href="https://cegtechforum.in/" className="underline">CEG Tech Forum</a> | © {new Date().getFullYear()} Copyright CTF.
      </div>
    </footer>
  )
}
