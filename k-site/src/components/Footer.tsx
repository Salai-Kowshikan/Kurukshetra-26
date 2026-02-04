export default function Footer() {
  return (
    <footer className="w-full z-50 py-6 bg-linear-to-r from-[#FF00B3] to-[#8A05FF]  font-(family-name:--poppins) flex flex-row justify-between items-center ">
      <div className="max-w-7xl mx-auto  px-4 text-center text-md text-white font-semibold">
        Designed & Developed by <a href="https://cegtechforum.in/" className="underline">CEG Tech Forum</a> | © {new Date().getFullYear()} Copyright CTF.
      </div>
      {/* <a href="https://kurukshetraceg.org.in/terms"><button className="rounded-lg border-3 text-white font-semibold p-2 px-4 text-md hover:cursor-pointer mx-4">Terms and Conditions</button></a> */}
    </footer>
  )
}
