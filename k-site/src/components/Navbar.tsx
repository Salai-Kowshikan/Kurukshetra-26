import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import logo from "@/assets/CTF1.png";
import { useNavbarStore, type NavItem, type NavbarStore } from "@/store/navbarStore";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const navItems = useNavbarStore((state: NavbarStore) => state.navItems);
  const setFullNavbar = useNavbarStore((state: NavbarStore) => state.setFullNavbar);
  const setHomeNavbar = useNavbarStore((state: NavbarStore) => state.setHomeNavbar);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Scroll handler for future use
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (location.pathname !== "/") {
      setFullNavbar();
    } else if (!open) {
      setHomeNavbar();
    }
  }, [location.pathname, open, setFullNavbar, setHomeNavbar]);

  const handleMenuOpen = () => {
    setOpen(true);
    setFullNavbar();
  };

  const handleMenuClose = () => {
    setOpen(false);
    if (location.pathname === "/") {
      setHomeNavbar();
    }
  };

  const isActive = (url: string) => {
    if (url === "/") return location.pathname === "/";
    return location.pathname.startsWith(url);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-colors duration-300">
      {/* ===== MOBILE BAR ===== */}
      <div className="flex items-center justify-between pr-6 pl-2 py-4 lg:hidden">
        <img
          src={logo}
          alt="CTF Logo"
          className="h-20 object-contain"
        />

        <button
          aria-label="Open menu"
          onClick={handleMenuOpen}
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
          onClick={handleMenuClose}
          className="absolute top-4 right-4 text-white text-2xl"
        >
          x
        </button>

        <div className="mt-20 flex-1 flex flex-col justify-center divide-y divide-white/10 px-6">
          {navItems.map((item: NavItem) => (
            <a
              key={item.label}
              href={item.url}
              target={item.isExternal ? "_blank" : undefined}
              rel={item.isExternal ? "noopener noreferrer" : undefined}
              className="w-full py-4 px-4 text-white text-base tracking-wider font-(family-name:--wallpoet) hover:bg-white/5 transition-colors block"
              onClick={handleMenuClose}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      {/* ===== MOBILE BACKDROP ===== */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 lg:hidden z-40"
          onClick={handleMenuClose}
        />
      )}

      {/* ===== DESKTOP NAVBAR ===== */}
      <div className="hidden lg:flex justify-center mt-6">
        <div
          className="relative flex items-center gap-3 px-6 py-2 rounded-full  backdrop-blur-xs border border-white/70 shadow-[0_0_30px_rgba(168,85,247,0.25)]"
        >
          {navItems.map((item: NavItem) => (
            <a
              key={item.label}
              href={item.url}
              target={item.isExternal ? "_blank" : undefined}
              rel={item.isExternal ? "noopener noreferrer" : undefined}
              className={`
                relative px-4 xl:px-6 py-1.5
                text-center
                rounded-full
                text-xs tracking-wider
                font-(family-name:--orbitron)
                transition-all duration-300
                ${
                  isActive(item.url)
                    ? "bg-violet-600 text-white"
                    : "text-white hover:bg-violet-600/50 hover:text-white"
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



