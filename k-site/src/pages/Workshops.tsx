import { useState } from "react";
import useFullNavbar from "@/hooks/useFullNavbar";
import workshopBg from "../assets/Workshop.png";
import backBp from "../assets/img.png";


interface Workshop {
  id: string;
  name: string;
  subtitle: string;
  leftText: string;
  rightText: string;
  description: string;
  details: string;
  days: number;
  dayLabel: string;
  fees: number;
  image: string;
  participants: string;
  date: string;
}

const workshops: Workshop[] = [
  {
    id: "ibm",
    name: "IBM WORKSHOP",
    subtitle: "Modern AIML: LLMs, GenAI & Future Technologies",
    leftText: "CYBER SECURITY, THREAT DEFENSE & DIGITAL WAR",
    rightText: "ARM ROBOTICS & CENTRALIZED CONTROL",
    description: "AI & GenAI focused workshop with industry exposure.",
    details:
      "Dive into the fascinating world of Underwater Robotics in this hands-on workshop designed for enthusiasts and innovators! Explore the cutting-edge technology behind autonomous underwater vehicles (AUVs) and remotely operated vehicles (ROVs). Learn about their applications in marine exploration, environmental monitoring, and underwater rescue missions. Participants will gain insights into robotic design, buoyancy control, waterproofing, and sensor integration. Experience practical sessions on building and programming underwater robots, guided by industry experts. This workshop is perfect for students, engineers, and hobbyists eager to explore robotics in challenging aquatic environments. Unlock new possibilities beneath the waves and fuel your passion for innovation!",
    days: 2,
    dayLabel: "SAT-SUN",
    fees: 799,
    image: "/assets/workshops/ibm.png",
    participants: "Team (4-5 Members)",
    date: "FEB 15-16, 2025",
  },
  {
    id: "fullstack",
    name: "FULL STACK DEVELOPMENT",
    subtitle: "From Interface to Infrastructure",
    leftText: "MODERN WEB TECHNOLOGIES",
    rightText: "CLOUD & DEPLOYMENT",
    description: "Build scalable full-stack systems with modern tools.",
    details:
      "Deep dive into modern web development covering React, Node.js, databases, authentication, deployment, and scalable architecture patterns. Build production-ready applications from scratch.",
    days: 1,
    dayLabel: "SAT",
    fees: 599,
    image: "/assets/workshops/fullstack.png",
    participants: "Individual",
    date: "FEB 15, 2025",
  },
  {
    id: "drone",
    name: "DRONE SYSTEMS",
    subtitle: "Unmanned Aerial Systems (UAS)",
    leftText: "AUTONOMOUS FLIGHT CONTROL",
    rightText: "AERIAL ROBOTICS",
    description: "Hands-on drone assembly, control systems, and real-world UAV case studies.",
    details:
      "Comprehensive drone technology workshop covering assembly, programming, flight control systems, and autonomous navigation.",
    days: 2,
    dayLabel: "SUN-MON",
    fees: 999,
    image: "/assets/workshops/drone.png",
    participants: "Team (2-4 Members)",
    date: "FEB 16-17, 2025",
  },
];

export default function Workshops() {
  useFullNavbar();

  const [index, setIndex] = useState(0);
  const [showDetail, setShowDetail] = useState(false);

  const next = () => setIndex((prev) => (prev + 1) % workshops.length);
  const prev = () => setIndex((prev) => (prev === 0 ? workshops.length - 1 : prev - 1));

  const currentWorkshop = workshops[index];
  const getLeftIndex = () => (index === 0 ? workshops.length - 1 : index - 1);
  const getRightIndex = () => (index + 1) % workshops.length;

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden font-sans selection:bg-purple-500/30">
      {/* ================= BACKGROUNDS ================= */}
      <div className="fixed inset-0 z-0">
        {/* Layer 1: Wavy Blue Background (Persistent) */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${backBp})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 1,
            zIndex: 0,
          }}
        />
        
        {/* Layer 2: Gear Background (Only visible in Carousel View) - SHARP & CLEAR */}
        {!showDetail && (
            <div 
                className="absolute inset-0 flex items-center justify-center transition-opacity duration-500"
                style={{ zIndex: 1 }} 
            >
                <img 
                    src={workshopBg} 
                    alt="Gear Background" 
                    className="w-[600px] h-[600px] object-contain animate-slow-spin"
                    style={{ 
                      filter: "brightness(1.1) contrast(1.05)",
                      opacity: 1
                    }}
                />
            </div>
        )}
        
        {/* Layer 3: Very subtle black tinge overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "rgba(0, 0, 0, 0.1)",
            zIndex: 2
          }}
        />
      </div>

      <div className="relative z-10">
        {!showDetail ? (
          /* ========== CAROUSEL VIEW ========== */
          <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
            {/* TITLE - NO GLOW/LIGHT EFFECTS */}
        <h1
  className="text-7xl md:text-8xl font-bold tracking-[0.15em] mb-20"
  style={{ fontFamily: "var(--orbitron)" }}
>
  WORKSHOPS
</h1>


            {/* CAROUSEL CARDS */}
            <div className="relative w-full max-w-[1400px] h-[450px] mb-16">
              {/* LEFT CARD - TRANSPARENT WITH BLUR */}
              <div
                className="absolute top-1/2 left-1/2 transition-all duration-700 ease-out cursor-pointer"
                onClick={() => setIndex(getLeftIndex())}
                style={{
                  width: "550px",
                  height: "360px",
                  transform: "translate(calc(-50% - 400px), -50%) scale(0.9)",
                  opacity: 1,
                  zIndex: 10,
                }}
              >
                <div
                  className="w-full h-full rounded-[40px] overflow-hidden flex flex-col"
                  style={{
                    background: "rgba(109, 40, 217, 0.25)",
                    backdropFilter: "blur(5px) saturate(50%)",
                    WebkitBackdropFilter: "blur(60px) saturate(180%)",
                    border: "2px solid rgba(168, 85, 247, 0.7)",
                    boxShadow: "none",
                  }}
                >
                  {/* TOP SECTION - Text */}
                  <div className="flex-1 flex items-center justify-center p-8">
                    <p
                      className="text-center font-bold px-6"
                      style={{
                        fontFamily: "var(--wallpoet)",
                        fontSize: "0.9rem",
                        color: "#f3e8ff",
                        letterSpacing: "0.12em",
                        lineHeight: "1.5",
                        whiteSpace: "pre-line",
                      }}
                    >
                      {workshops[getLeftIndex()].leftText}
                    </p>
                  </div>

                  {/* BOTTOM BUTTON */}
                  <div className="p-6">
                    <div
                      className="w-full py-4 rounded-[28px] text-center font-bold tracking-[0.2em]"
                      style={{
                        background: "linear-gradient(90deg, #a855f7 0%, #8A05FF 100%)",
                        boxShadow: "none",
                        fontFamily: "var(--wallpoet)",
                        fontSize: "0.95rem",
                        color: "#fff",
                      }}
                    >
                      {workshops[getLeftIndex()].name}
                    </div>
                  </div>
                </div>
              </div>

              {/* CENTER CARD - TRANSPARENT WITH BLUR */}
              <div
                className="absolute top-1/2 left-1/2 transition-all duration-700 ease-out cursor-pointer"
                onClick={() => setShowDetail(true)}
                style={{
                  width: "600px",
                  height: "380px",
                  transform: "translate(-50%, -50%) scale(1)",
                  opacity: 1,
                  zIndex: 20,
                }}
              >
                <div
                  className="w-full h-full rounded-[40px] overflow-hidden flex flex-col"
                  style={{
                    background: "rgba(109, 40, 217, 0.3)",
                    backdropFilter: "blur(2px) saturate(50%)",
                    WebkitBackdropFilter: "blur(70px) saturate(180%)",
                    border: "1px solid rgba(168, 85, 247, 0.7)",
                    boxShadow: "none",
                  }}
                >
                  {/* TOP SECTION - Image */}
                  <div className="flex-1 flex items-center justify-center p-8">
                    <img
                      src={currentWorkshop.image}
                      alt={currentWorkshop.name}
                      className="max-w-full max-h-full object-contain"
                      style={{
                        filter: "none",
                      }}
                    />
                  </div>

                  {/* BOTTOM BUTTON */}
                  <div className="p-6">
                    <div
                      className="w-full py-5 rounded-[28px] text-center font-bold tracking-[0.25em]"
                      style={{
                        background: "linear-gradient(90deg, #a855f7 0%, #8A05FF 100%)",
                        boxShadow: "none",
                        fontFamily: "var(--wallpoet)",
                        fontSize: "1.1rem",
                        color: "#fff",
                      }}
                    >
                      {currentWorkshop.name}
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT CARD - TRANSPARENT WITH BLUR */}
              <div
                className="absolute top-1/2 left-1/2 transition-all duration-700 ease-out cursor-pointer"
                onClick={() => setIndex(getRightIndex())}
                style={{
                  width: "550px",
                  height: "360px",
                  transform: "translate(calc(-50% + 400px), -50%) scale(0.9)",
                  opacity: 1,
                  zIndex: 10,
                }}
              >
                <div
                  className="w-full h-full rounded-[40px] overflow-hidden flex flex-col"
                  style={{
                    background: "rgba(109, 40, 217, 0.25)",
                    backdropFilter: "blur(5px) saturate(50%)",
                    WebkitBackdropFilter: "blur(60px) saturate(180%)",
                    border: "2px solid rgba(168, 85, 247, 0.7)",
                    boxShadow: "none",
                  }}
                >
                  {/* TOP SECTION - Text */}
                  <div className="flex-1 flex items-center justify-center p-8">
                    <p
                      className="text-center font-bold px-6"
                      style={{
                        fontFamily: "var(--wallpoet)",
                        fontSize: "0.9rem",
                        color: "#f3e8ff",
                        letterSpacing: "0.12em",
                        lineHeight: "1.5",
                        whiteSpace: "pre-line",
                      }}
                    >
                      {workshops[getRightIndex()].rightText}
                    </p>
                  </div>

                  {/* BOTTOM BUTTON */}
                  <div className="p-6">
                    <div
                      className="w-full py-4 rounded-[28px] text-center font-bold tracking-[0.2em]"
                      style={{
                        background: "linear-gradient(90deg, #a855f7 0%, #8A05FF 100%)",
                        boxShadow: "none",
                        fontFamily: "var(--wallpoet)",
                        fontSize: "0.95rem",
                        color: "#fff",
                      }}
                    >
                      {workshops[getRightIndex()].name}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* NAVIGATION ARROWS */}
            <div className="flex items-center gap-8">
              <button
                onClick={prev}
                className="w-14 h-14 rounded-full flex items-center justify-center text-2xl transition-all duration-300 hover:scale-110"
                style={{
                  border: "2px solid rgba(168, 85, 247, 0.8)",
                  background: "rgba(0, 0, 0, 0.7)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  color: "#a855f7",
                  boxShadow: "none",
                }}
              >
                ‹
              </button>

              <button
                onClick={next}
                className="w-14 h-14 rounded-full flex items-center justify-center text-2xl transition-all duration-300 hover:scale-110"
                style={{
                  border: "2px solid rgba(168, 85, 247, 0.8)",
                  background: "rgba(0, 0, 0, 0.7)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  color: "#a855f7",
                  boxShadow: "none",
                }}
              >
                ›
              </button>
            </div>
          </div>
        ) : (
          /* ========== DETAIL VIEW ========== */
          <div className="min-h-screen flex flex-col items-center px-4 py-16">
            {/* HEADER - NO GLOW */}
            <h1
              className="text-6xl md:text-7xl font-bold tracking-[0.5em] mb-3"
              style={{
                fontFamily: "var(--orbitron)",
                color: "#fff",
              }}
            >
              WORKSHOPS
            </h1>

            <h2
              className="text-xl md:text-2xl tracking-[0.3em] mb-8"
              style={{
                fontFamily: "var(--wallpoet)",
                color: "#fff",
              }}
            >
              {currentWorkshop.name}
            </h2>

            {/* REGISTRATION BUTTONS */}
            <div className="flex gap-4 mb-10">
              <button
                className="px-8 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  background: "transparent",
                  border: "2px solid rgba(168, 85, 247, 0.8)",
                  color: "#a855f7",
                  fontFamily: "var(--wallpoet)",
                  boxShadow: "none",
                }}
              >
                ⭕ Normal Registration
              </button>
              <button
                className="px-8 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  background: "white",
                  color: "#7c3aed",
                  fontFamily: "var(--wallpoet)",
                  boxShadow: "none",
                }}
              >
                🔴 Bulk Registration
              </button>
            </div>

            {/* MAIN CARD - TRANSPARENT WITH BLUR */}
            <div
              className="w-full max-w-6xl rounded-[32px] p-8 mb-8"
              style={{
                background: "rgba(109, 40, 217, 0.2)",
                backdropFilter: "blur(50px) saturate(180%)",
                WebkitBackdropFilter: "blur(50px) saturate(180%)",
                border: "2px solid rgba(168, 85, 247, 0.6)",
                boxShadow: "none",
              }}
            >
              {/* TABS */}
              <div className="flex gap-3 mb-8 flex-wrap">
                <button
                  className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
                  style={{
                    background: "linear-gradient(90deg, #a855f7, #ec4899)",
                    color: "white",
                    fontFamily: "var(--wallpoet)",
                    boxShadow: "none",
                  }}
                >
                  📝 Description
                </button>
                {["📋 Prerequisites", "👥 Speakers", "🚶 Takeways", "🕐 Schedule", "👤 Contact"].map((tab) => (
                  <button
                    key={tab}
                    className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:bg-opacity-80"
                    style={{
                      background: "rgba(0, 0, 0, 0.5)",
                      border: "1px solid rgba(168, 85, 247, 0.4)",
                      color: "#c4b5fd",
                      fontFamily: "var(--wallpoet)",
                    }}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* CONTENT GRID */}
              <div className="grid md:grid-cols-[280px,1fr] gap-8">
                {/* IMAGE */}
                <div
                  className="rounded-2xl p-6 flex items-center justify-center"
                  style={{
                    background: "rgba(6, 182, 212, 0.18)",
                    border: "2px solid rgba(6, 182, 212, 0.5)",
                    height: "280px",
                    boxShadow: "none",
                  }}
                >
                  <img
                    src={currentWorkshop.image}
                    alt={currentWorkshop.name}
                    className="max-w-full max-h-full object-contain"
                    style={{ filter: "none" }}
                  />
                </div>

                {/* CONTENT */}
                <div className="relative space-y-4">
                  {/* NAV ARROWS */}
                  <div className="absolute -right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-10">
                    <button
                      onClick={prev}
                      className="w-11 h-11 rounded-full flex items-center justify-center text-xl transition-all duration-300 hover:scale-110"
                      style={{
                        background: "rgba(0, 0, 0, 0.7)",
                        border: "2px solid rgba(168, 85, 247, 0.6)",
                        color: "#a855f7",
                        boxShadow: "none",
                      }}
                    >
                      ‹
                    </button>
                    <button
                      onClick={next}
                      className="w-11 h-11 rounded-full flex items-center justify-center text-xl transition-all duration-300 hover:scale-110"
                      style={{
                        background: "rgba(0, 0, 0, 0.7)",
                        border: "2px solid rgba(168, 85, 247, 0.6)",
                        color: "#a855f7",
                        boxShadow: "none",
                      }}
                    >
                      ›
                    </button>
                  </div>

                  {/* TITLE SECTION */}
                  <div className="flex items-start gap-4">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "rgba(0, 0, 0, 0.6)",
                        border: "2px solid rgba(168, 85, 247, 0.5)",
                      }}
                    >
                      <span className="text-2xl">📞</span>
                    </div>
                    <div>
                      <h3
                        className="text-2xl font-bold mb-2"
                        style={{
                          color: "#fff",
                          fontFamily: "var(--wallpoet)",
                        }}
                      >
                        Robotics under the water!
                      </h3>
                      <p
                        className="text-sm"
                        style={{
                          color: "#e9d5ff",
                          fontFamily: "var(--wallpoet)",
                        }}
                      >
                        Participation: {currentWorkshop.participants}
                      </p>
                    </div>
                  </div>

                  {/* DESCRIPTION */}
                  <p
                    className="text-sm leading-relaxed pt-2"
                    style={{
                      color: "rgba(255, 255, 255, 0.9)",
                      lineHeight: "1.8",
                    }}
                  >
                    {currentWorkshop.details}
                  </p>
                </div>
              </div>
            </div>

            {/* BACK BUTTON */}
            <button
              onClick={() => setShowDetail(false)}
              className="px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              style={{
                background: "rgba(168, 85, 247, 0.2)",
                border: "2px solid rgba(168, 85, 247, 0.6)",
                color: "#a855f7",
                fontFamily: "var(--wallpoet)",
              }}
            >
              ← Back to Workshops
            </button>
          </div>
        )}
      </div>
    </div>
  );
}