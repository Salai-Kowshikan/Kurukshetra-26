import useFullNavbar from "@/hooks/useFullNavbar";
import { Link } from "react-router-dom";
import { useState } from "react";
import ring from "../assets/Events/events.png";
import icon1 from "../assets/Events/Electronics.svg";
import icon2 from "../assets/Events/Extravaganza.svg";
import icon3 from "../assets/Events/Management.svg";
import icon4 from "../assets/Events/Quiz.svg";
import icon5 from "../assets/Events/Robot.svg";
import icon6 from "../assets/Events/coding.svg";
import icon7 from "../assets/Events/engineering.svg";
import icon8 from "../assets/Events/online.svg";

export default function Events() {
  useFullNavbar();
  const [rotation, setRotation] = useState(0);
  const total = 8;
  const targetIndex = 1;
  const icons = [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8];

  const handleClick = (index:number) => {
    const anglePerPetal = 360 / total;

    // absolute rotation so clicked icon moves to targetIndex
    const newRotation = (targetIndex - index) * anglePerPetal;

    setRotation(newRotation);
  };

  const menuItems = [
    "Robotics Events",
    "Coding Events",
    "Electronics Events",
    "Extravaganza Events",
    "Management Events",
    "Engineering Events",
    "Quiz Events",
    "Online Events",
  ];

  const events = [
    "Robowars",
    "God Speed",
    "Robo Race",
    "RoboSoccer",
    "Ultimate Line Tracer",
    "Pacbot",
    "Micromouse",
  ];

  return (
    <div className="min-h-screen bg-black text-white">

      {/* HEADER */}
      <div className="w-full h-40 sm:h-52 bg-gradient-to-r from-purple-700 via-fuchsia-600 to-purple-900 flex items-center justify-center">
        <h1 className="text-2xl sm:text-4xl tracking-widest font-bold">
          EVENTS
        </h1>
      </div>

      {/* MAIN CONTAINER */}
      <div className="max-w-6xl mx-auto -mt-12 sm:-mt-16 px-4 sm:px-6">

        {/* ⭐ STACK ON MOBILE, ROW ON DESKTOP */}
        <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start">

          {/* LEFT SIDE */}
          <div className="flex flex-col items-center gap-8 w-full lg:w-auto">

            {/* ROTATING PETAL SYSTEM */}
            <div
              className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] transition-transform duration-700 ease-in-out"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              {/* PETAL IMAGE */}
              <img
                src={ring}
                className="absolute w-full h-full object-contain pointer-events-none"
              />

              {/* ICONS */}
              {icons.map((icon, i) => {
                const angle = (360 / total) * i;
                const radius = 110; // ⭐ slightly smaller for responsiveness

                const x =
                  Math.cos((angle - 90) * (Math.PI / 180)) * radius;
                const y =
                  Math.sin((angle - 90) * (Math.PI / 180)) * radius;

                return (
                  <button
                    key={i}
                    onClick={() => handleClick(i)}
                    className="absolute w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-purple-600 flex items-center justify-center hover:scale-110 transition"
                    style={{
                      left: `calc(50% + ${x}px - 20px)`,
                      top: `calc(50% + ${y}px - 20px)`,
                      transform: `rotate(${-rotation}deg)`,
                    }}
                  >
                    <img src={icon} className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                );
              })}
            </div>

            {/* SIDEBAR */}
            <div className="w-full sm:w-64 bg-black/40 backdrop-blur-md border border-purple-500/30 rounded-xl p-4">
              <h3 className="text-xs text-gray-300 mb-3">
                CHOOSE DESTINATION
              </h3>

              <ul className="space-y-2">
                {menuItems.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-gray-200 hover:bg-purple-600 rounded-lg px-3 py-2 cursor-pointer transition"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex-1 w-full">
            <div className="mb-6 text-center lg:text-left">
              <Link
              to="/eventsnew"
              className="bg-purple-600 px-4 py-2 rounded-full text-sm
                          hover:bg-purple-500 transition
                          shadow-[0_0_10px_#a855f7]"
              >
              ROBOTICS EVENTS
              </Link>

              <h2 className="mt-4 text-lg font-semibold">
                What to Expect?
              </h2>

              <p className="text-gray-400 text-sm max-w-xl mt-2 mx-auto lg:mx-0">
                Dive into robotics competitions designed to test innovation,
                speed, and intelligence. Build, code, and battle your machines
                in exciting challenges.
              </p>
            </div>

            {/* ⭐ RESPONSIVE GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
              {events.map((title) => (
                <div
                  key={title}
                  className="w-40 h-36 border border-purple-500/40 rounded-xl flex items-end justify-center p-3 hover:border-purple-400 transition"
                >
                  <span className="bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
                    {title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}
