import useFullNavbar from "@/hooks/useFullNavbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ring from "../assets/Events/events.png";
import Electronics from "../assets/Events/Electronics.svg";
import Extravaganza from "../assets/Events/Extravaganza.svg";
import Management from "../assets/Events/Management.svg";
import Quiz from "../assets/Events/Quiz.svg";
import Robotics from "../assets/Events/Robot.svg";
import Coding from "../assets/Events/coding.svg";
import Engineering from "../assets/Events/engineering.svg";
import Online from "../assets/Events/online.svg";
import Shuffle from '../components/ui/eventsheading';

const EVENTS_DATA = {
  Robotics: {
    label: "ROBOTICS EVENTS",
    description:
      "Dive into robotics competitions designed to test innovation, speed, and intelligence.",
    events: [
      "Robowars",
      "God Speed",
      "Robo Race",
      "RoboSoccer",
      "Ultimate Line Tracer",
      "Pacbot",
      "Micromouse",
    ],
  },

  Coding: {
    label: "CODING EVENTS",
    description:
      "Showcase your programming skills through logic, speed, and problem-solving challenges.",
    events: [
      "Code Hunt",
      "Debug It",
      "Hack Sprint",
      "Algo Master",
      "Blind Coding",
      "Tech Quiz",
      "Code Relay",
    ],
  },

  Electronics: {
    label: "ELECTRONICS EVENTS",
    description:
      "Test your circuit design and hardware problem-solving skills.",
    events: [
      "Circuitrix",
      "ElectroQuest",
      "PCB Design",
      "Component Hunt",
      "Signal Sprint",
      "Hardware Debug",
      "Electro Quiz",
    ],
  },

  Extravaganza: {
    label: "EXTRAVAGANZA EVENTS",
    description:
      "Fun, creativity, and excitement-packed technical challenges.",
    events: [
      "Tech Treasure Hunt",
      "Funathon",
      "Mystery Box",
      "Innovation Jam",
      "Brain Storm",
      "Rapid Fire",
      "Surprise Event",
    ],
  },

  Management: {
    label: "MANAGEMENT EVENTS",
    description:
      "Leadership, strategy, and business decision-making challenges.",
    events: [
      "Biz Plan",
      "Marketing Mania",
      "Case Study",
      "HR Hunt",
      "Startup Pitch",
      "Finance Frenzy",
      "Management Quiz",
    ],
  },

  Engineering: {
    label: "ENGINEERING EVENTS",
    description:
      "Core engineering challenges across disciplines.",
    events: [
      "Bridge Builder",
      "CAD Clash",
      "Mechathon",
      "Design Sprint",
      "Civil Draft",
      "Tech Expo",
      "Build-a-thon",
    ],
  },

  Quiz: {
    label: "QUIZ EVENTS",
    description:
      "Test your technical and general knowledge under pressure.",
    events: [
      "Tech Quiz",
      "General Quiz",
      "Rapid Fire",
      "Visual Quiz",
      "Logic Quiz",
      "Surprise Round",
      "Final Showdown",
    ],
  },

  Online: {
    label: "ONLINE EVENTS",
    description:
      "Compete remotely in exciting online challenges.",
    events: [
      "Online Coding",
      "Virtual Quiz",
      "Remote Hackathon",
      "AI Challenge",
      "Web Design",
      "Online Debate",
      "E-Sports Tech",
    ],
  },
};
export default function Events() {
  useFullNavbar();
  const navigate = useNavigate();
  const [rotation, setRotation] = useState(0);
  const total = 8;
  const targetIndex = 1;
  const icons = [Electronics, Extravaganza, Management, Quiz, Robotics, Coding, Engineering, Online];
  const iconToEventType: (keyof typeof EVENTS_DATA)[] = [
    "Electronics",
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
      {/* <div className="w-full bg-gradient-to-r from-purple-700 via-fuchsia-600 to-purple-900 flex items-center justify-center py-20"> */}
      <div className="w-full min-h-[160px] sm:min-h-[260px] lg:min-h-[350px]
                flex items-center justify-center overflow-visible">
          <Shuffle
            text="Events"
            style={{
              fontSize: "clamp(40px, 12vw, 100px)",
              
              lineHeight: "1",
              whiteSpace: "nowrap",
            }}
            shuffleDirection="right"
            duration={0.1}
            animationMode="evenodd"
            shuffleTimes={1}
            ease="power3.out"
            stagger={0.03}
            threshold={0.1}
            triggerOnce
            triggerOnHover
            respectReducedMotion
            loop
            loopDelay={2}
          />
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
                      onClick={() => setSelectedType(item as keyof typeof EVENTS_DATA)}
                      className={`text-sm rounded-lg px-3 py-2 cursor-pointer transition
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
          <div className="flex-1 w-full">
            <div className="flex-1 w-full">
                <div className="mb-6 text-center lg:text-left">
                  <span className="bg-purple-600 px-4 py-2 rounded-full text-sm">
                    {EVENTS_DATA[selectedType].label}
                  </span>

                  <h2 className="mt-4 text-lg font-semibold">
                    What to Expect?
                  </h2>

                  <p className="text-gray-400 text-sm max-w-xl mt-2 mx-auto lg:mx-0">
                    {EVENTS_DATA[selectedType].description}
                  </p>
                </div>
              </div>

            {/* ⭐ RESPONSIVE GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
              {EVENTS_DATA[selectedType].events.map((title) => (
                <div
                  key={title}
                  onClick={() => navigate(`/events/${encodeURIComponent(title)}`)}
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