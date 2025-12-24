import React, { useState } from "react";
import logo from "@/assets/K26_Logo[white].final-01.png";

const navItems: string[] = [
  "Sponsors",
  "Projects",
  "Accommodation",
  "Contacts",
  "Login",
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-black pt-3 relative">
      {/* ===== MOBILE BAR ===== */}
      <div className="flex items-center justify-between pr-6 pl-2 py-4 sm:hidden">
        {/* Logo */}
        <img
          src={logo}
          alt="Kurukshetra Logo"
          className="h-10 object-contain"
        />

        {/* Hamburger */}
        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="flex flex-col justify-center gap-1.5"
        >
          <span className="w-6 h-0.5 bg-white" />
          <span className="w-6 h-0.5 bg-white" />
          <span className="w-6 h-0.5 bg-white" />
        </button>
      </div>

      {/* ===== MOBILE SLIDE MENU ===== */}
      <div
        className={`
          fixed top-0 left-0 h-full w-72
          bg-black
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          sm:hidden
          z-50
          flex flex-col
        `}
      >
        {/* Close button */}
        <button
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-white text-2xl"
        >
          ×
        </button>

        {/* Menu items (centered on mobile) */}
        <div className="mt-20 flex-1 flex flex-col justify-center divide-y divide-white/10 px-6">
          {navItems.map((item) => (
            <button
              key={item}
              type="button"
              className="w-full text-left py-4 px-4 text-white text-base tracking-wider font-(family-name:--stalinist) cursor-pointer hover:bg-white/5 transition-colors duration-150"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* ===== BACKDROP ===== */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 sm:hidden z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* ===== DESKTOP NAVBAR ===== */}
      <div className="hidden sm:block">
        <div className="w-full py-8 relative">
          <div className="absolute top-8 left-0 w-full h-0.75 bg-violet-600" />

          <div className="relative flex justify-around max-w-6xl mx-auto px-8">
            {navItems.map((item) => (
              <div
                key={item}
                className="relative flex flex-col items-center group"
              >
                {/* Circle */}
                <div
                  className="
                    absolute top-0 -translate-y-1/2
                    w-5 h-5 rounded-full
                    bg-violet-600
                    flex items-center justify-center
                    transform-gpu transition-transform duration-300
                    group-hover:scale-[1.2]
                  "
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-pink-500" />
                </div>

                {/* Button */}
                <button
                  className="
                    mt-6 text-[12px] tracking-wider
                    text-white
                    transition-colors duration-300
                    group-hover:text-pink-400
                    font-(family-name:--stalinist)
                  "
                >
                  {item}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
