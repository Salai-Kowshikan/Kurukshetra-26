import useFullNavbar from "@/hooks/useFullNavbar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ring from "../assets/Events/events.png";
import Extravaganza from "../assets/Events/Extravaganza.svg";
import Management from "../assets/Events/Management.svg";
import Quiz from "../assets/Events/Quiz.svg";
import Robotics from "../assets/Events/Robot.svg";
import Coding from "../assets/Events/coding.svg";
import Engineering from "../assets/Events/engineering.svg";
import Online from "../assets/Events/online.svg";
import { EVENTS_CATEGORIES } from "../constants/events.tsx";

const EVENTS_DATA = EVENTS_CATEGORIES;

export default function Events() {
  useFullNavbar();
  const navigate = useNavigate();
  const [rotation, setRotation] = useState(0);
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const interval = setInterval(
      () => {
        setGlitch(true);
        setTimeout(() => setGlitch(false), 500);
      },
      3000 + Math.random() * 2000
    );

    return () => clearInterval(interval);
  }, []);
  const total = 7;
  const targetIndex = 1;
  const icons = [
    Extravaganza,
    Management,
    Quiz,
    Robotics,
    Coding,
    Engineering,
    Online,
  ];
  const iconToEventType: (keyof typeof EVENTS_DATA)[] = [
    "Extravaganza",
    "Management",
    "Quiz",
    "Robotics",
    "Coding",
    "Engineering",
    "Online",
  ];

  const handleClick = (index: number) => {
    const anglePerPetal = 360 / total;
    const newRotation = (targetIndex - index) * anglePerPetal;

    setRotation(newRotation);
    setSelectedType(iconToEventType[index]); // 🔥 THIS is the key
  };

  const [selectedType, setSelectedType] =
    useState<keyof typeof EVENTS_DATA>("Robotics");

  const menuItems = Object.keys(EVENTS_DATA);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* HEADER */}
      <div className="w-full min-h-[160px] sm:min-h-[200px] lg:min-h-[250px] flex items-center justify-center overflow-visible">
        <div className="flex justify-center mb-16">
          <div className={`relative ${glitch ? "glitch-active" : ""}`}>
            <h2
              className="sponsor-glitch text-3xl md:text-6xl lg:mt-20 mt-28 font-medium text-white font-(family-name:--wallpoet)"
              data-text="EVENTS"
            >
              EVENTS
            </h2>
          </div>
        </div>
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

                const x = Math.cos((angle - 90) * (Math.PI / 180)) * radius;
                const y = Math.sin((angle - 90) * (Math.PI / 180)) * radius;

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
              <h3 className="text-xs text-gray-300 mb-3">CHOOSE DESTINATION</h3>

              <ul className="space-y-2">
                {menuItems.map((item) => (
                  <li
                    key={item}
                    onClick={() =>
                      setSelectedType(item as keyof typeof EVENTS_DATA)
                    }
                    className={`text-sm rounded-lg px-3 py-2 cursor-pointer transition-all duration-700 ease-in-out
                        ${
                          selectedType === item
                            ? "bg-purple-600 text-white"
                            : "text-gray-200 hover:bg-purple-600"
                        }`}
                  >
                    {item} Events
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex-1 w-full z-40">
            <div className="flex-1 w-full">
              <div className="mb-6 text-center lg:text-left w-full">
                <div className="w-full flex items-center justify-center lg:justify-start">
                  <span className="bg-purple-600 w-fit text-center mx-auto justify-center px-5 py-2 rounded-full text-lg font-bold">
                    {EVENTS_DATA[selectedType].label}
                  </span>
                </div>
                <div className="lg:ml-8 backdrop-blur-[2px] m-2 p-2 rounded-lg border border-purple-500/30 w-full lg:w-[90%]">
                  <h2 className="mt-2 text-xl font-semibold">
                    What to Expect?
                  </h2>

                  <p className="text-gray-100 text-md mt-2 mx-auto ">
                    {EVENTS_DATA[selectedType].description}
                  </p>
                </div>
              </div>
            </div>

            {/* ⭐ RESPONSIVE GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 justify-items-center">
              {EVENTS_DATA[selectedType].events.map((title) => (
                <div
                  key={title}
                  onClick={() =>
                    navigate(`/events/${encodeURIComponent(title)}`)
                  }
                  className="w-84 h-60 border border-purple-500/40 rounded-xl flex items-end justify-center p-3 hover:border-purple-400 transition cursor-pointer"
                >
                  <span className="bg-purple-600 text-white text-sm font-semibold px-5 py-2 rounded-full w-[90%] text-center">
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
