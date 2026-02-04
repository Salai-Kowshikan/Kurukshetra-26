import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import logo from "@/assets/CTF1.png";
import { useNavbarStore } from "@/store/navbarStore";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = useNavbarStore((state) => state.navItems);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 🔹 Active page logic
  const isActive = (url: string) => {
    if (url === "/") return location.pathname === "/";
    return location.pathname.startsWith(url);
  };


  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-colors duration-300">
      {/* ===== MOBILE BAR ===== */}
      <div className="flex items-center justify-between pr-6 pl-2 py-4 sm:hidden">
        <img
          src={logo}
          alt="Kurukshetra Logo"
          className="h-20 object-contain"
        />

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
        <button
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-white text-2xl"
        >
          ×
        </button>

        <div className="mt-20 flex-1 flex flex-col justify-center divide-y divide-white/10 px-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.url}
              className="w-full py-4 px-4 text-white text-base tracking-wider font-(family-name:--stalinist) hover:bg-white/5 transition-colors block"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      {/* ===== MOBILE BACKDROP ===== */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 sm:hidden z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* ===== DESKTOP NAVBAR ===== */}
      <div className="hidden sm:flex justify-center mt-6">
        <div
          className="
            relative flex items-center gap-2 px-4 py-2
            rounded-full
            bg-white/5 backdrop-blur-2xl
            border border-white/10
            shadow-[0_0_30px_rgba(168,85,247,0.25)]
          "
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.url}
              className={`
                relative px-5 py-2
                rounded-full
                text-xs tracking-wider
                font-(family-name:--orbitron)
                transition-all duration-300
                ${
                  isActive(item.url)
                    ? "bg-violet-600/80 text-white"
                    : "text-white/80 hover:bg-violet-600/80 hover:text-white"
                }
              `}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
