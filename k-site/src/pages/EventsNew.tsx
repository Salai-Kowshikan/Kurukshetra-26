import { useState, useEffect } from "react";
import useFullNavbar from "@/hooks/useFullNavbar";
import { useParams } from "react-router-dom";
import { EVENT_DETAILS } from "@/constants/events";
import {
  FileText,
  Swords,
  ShieldCheck,
  Trophy,
  Calendar,
  User,
  ChevronLeft,
  ChevronRight,
  Bot,
} from "lucide-react";

type TabKey =
  | "description"
  | "rounds"
  | "rules"
  | "prize"
  | "schedule"
  | "contact";

export default function EventsNew() {
  useFullNavbar();
  const { eventName } = useParams();
  const decodedEventName = eventName
    ? decodeURIComponent(eventName)
    : null;

  const event = decodedEventName
    ? EVENT_DETAILS[decodedEventName]
    : null;

  const [activeIndex, setActiveIndex] = useState(0);
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

  // Render not found page if event doesn't exist
  if (!event || !decodedEventName) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Event Not Found</h1>
          <p className="text-xl text-gray-300 mb-8">The event you're looking for doesn't exist or is not available yet.</p>
          <a
            href="/events"
            className="inline-block px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition"
          >
            ← Back to Events
          </a>
        </div>
      </div>
    );
  }

  const renderList = (items: string[], prefix?: string) => (
    <ul className="mt-4 text-gray-300 space-y-2 text-sm md:text-base overflow-x-hidden lg:text-left text-center">
      {items.map((item, index) => (
        <li key={index} className="flex flex-wrap gap-1 items-center lg:justify-start justify-center min-w-0">
          {prefix && <span className="mr-1 shrink-0">{prefix}</span>}
          <span className="min-w-0" style={{ wordBreak: "break-word" }}>{item}</span>
        </li>
      ))}
    </ul>
  );

  const tabs = [
    { key: "description", name: "Description", icon: FileText },
    { key: "rounds", name: "Rounds", icon: Swords },
    { key: "rules", name: "Rules", icon: ShieldCheck },
    { key: "prize", name: "Prize", icon: Trophy },
    { key: "schedule", name: "Schedule", icon: Calendar },
    { key: "contact", name: "Contact", icon: User },
  ];

  const activeTab = tabs[activeIndex].key as TabKey;

  const nextTab = () => {
    setActiveIndex((prev) => (prev + 1) % tabs.length);
  };

  const prevTab = () => {
    setActiveIndex((prev) =>
      prev === 0 ? tabs.length - 1 : prev - 1
    );
  };

  const tabContent: Record<TabKey, React.ReactNode> = {
    description: (
      <>
        <h2 className="text-xl md:text-2xl font-semibold flex items-center lg:justify-start justify-center gap-3">
          <Bot size={20} className="text-purple-400" />
          {event.description}
        </h2>

        <p className="text-base md:text-lg text-gray-300 mt-1 lg:text-left text-center">
          Participation: {event.participation}
        </p>
      </>
    ),

    rounds: (
      <>
        <h2 className="text-xl md:text-2xl font-semibold lg:text-left text-center">Event Rounds</h2>
        <ul className="mt-4 text-gray-300 space-y-2 text-sm md:text-base lg:text-left text-center">
          {event.rounds.map((round: string) => (
            <li key={round}>⚡ {round}</li>
          ))}
        </ul>
      </>
    ),

    rules: (
      <>
        <h2 className="text-xl md:text-2xl font-semibold lg:text-left text-center">Rules</h2>
        {renderList(event.rules, "•")}
      </>
    ),

    prize: (
      <>
        <h2 className="text-xl md:text-2xl font-semibold lg:text-left text-center">Prize Pool</h2>
        {renderList(event.prize)}
      </>
    ),

    schedule: (
      <>
        <h2 className="text-xl md:text-2xl font-semibold lg:text-left text-center">Schedule</h2>
        {renderList(event.schedule, "📅")}
      </>
    ),

    contact: (
      <>
        <h2 className="text-xl md:text-2xl font-semibold lg:text-left text-center">Contact</h2>
        {renderList(event.contact)}
      </>
    ),
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* HEADER */}
      <div className="relative overflow-hidden shrink-0">
        <div className="flex justify-center mt-5">
          <div className={`relative ${glitch ? "glitch-active" : ""}`}>
            <h2
              className="sponsor-glitch text-3xl md:text-5xl lg:mt-20 mt-28 font-medium text-white font-(family-name:--wallpoet)"
              data-text="EVENTS"
            >
              EVENTS
            </h2>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT AREA - CENTERED VERTICALLY */}
      <div className="grow flex items-center justify-center px-4 py-8">
        <div className="relative w-full max-w-6xl">
          <div className="bg-linear-to-b from-[#2d0057]/80 to-[#140024]/90
                          backdrop-blur-xl
                          border border-purple-500/40
                          rounded-2xl
                          shadow-[0_0_40px_#7c3aed]
                          p-5 md:p-8">

            {/* EVENT NAME - JUST ABOVE TABS */}
            <div className="mb-6 text-center">
              <div className="inline-flex items-center gap-3 
                              bg-linear-to-r from-purple-600 to-fuchsia-500
                              px-5 py-2 md:px-6 md:py-3 rounded-full
                              shadow-[0_0_25px_#a855f7]
                              font-semibold tracking-wide text-sm md:text-base">
                <Bot size={18} />
                <span className="text-center">{event.title.toUpperCase()}</span>
              </div>
            </div>

            {/* DESKTOP/LANDSCAPE LAYOUT (lg and above) */}
            <div className="hidden lg:flex flex-row gap-6 lg:gap-8">

              {/* IMAGE SIDE */}
              <div className="w-full md:w-56 h-52 md:h-56 bg-gray-300 rounded-2xl shrink-0" />

              {/* RIGHT SIDE */}
              <div className="flex-1 min-w-0">

                {/* Tabs + Arrows */}
                <div className="flex items-center mb-6 pr-2 md:pr-4">

                  {/* Tabs */}
                  <div className="flex gap-3 overflow-x-hidden whitespace-nowrap scrollbar-hide flex-1">
                    {tabs.map((tab, index) => {
                      const Icon = tab.icon;
                      const isActive = index === activeIndex;

                      return (
                        <button
                          key={tab.key}
                          onClick={() => setActiveIndex(index)}
                          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm
                          border transition-all duration-300 shrink-0
                          ${
                            isActive
                              ? "bg-purple-600 border-purple-400 shadow-[0_0_15px_#a855f7]"
                              : "border-purple-400/40 hover:bg-purple-600 hover:shadow-[0_0_12px_#a855f7]"
                          }`}
                        >
                          <Icon size={14} />
                          {tab.name}
                        </button>
                      );
                    })}
                  </div>

                  {/* Arrow Buttons */}
                  <div className="ml-3 mr-4 md:mr-6 flex gap-3 shrink-0">

                    <button
                      onClick={prevTab}
                      className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center
                                rounded-full border border-purple-400/40
                                hover:bg-purple-600 hover:shadow-[0_0_10px_#a855f7]">
                      <ChevronLeft size={18} />
                    </button>

                    <button
                      onClick={nextTab}
                      className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center
                                rounded-full border border-purple-400/40
                                hover:bg-purple-600 hover:shadow-[0_0_10px_#a855f7]">
                      <ChevronRight size={18} />
                    </button>
                  </div>

                </div>

                {/* Content */}
                <div className="transition-all duration-300 overflow-hidden lg:text-left text-center">
                  {tabContent[activeTab]}
                </div>

              </div>
            </div>

            {/* MOBILE/TABLET LAYOUT (below lg) */}
            <div className="lg:hidden flex flex-col">
              {/* Tab Header with Navigation */}
              <div className="flex items-center justify-between mb-6">
                <button
                  onClick={prevTab}
                  className="w-9 h-9 flex items-center justify-center
                            rounded-full border border-purple-400/40
                            hover:bg-purple-600 hover:shadow-[0_0_10px_#a855f7]">
                  <ChevronLeft size={18} />
                </button>

                <div className="flex-1 text-center">
                  <h2 className="text-xl font-semibold text-purple-300">{tabs[activeIndex].name}</h2>
                </div>

                <button
                  onClick={nextTab}
                  className="w-9 h-9 flex items-center justify-center
                            rounded-full border border-purple-400/40
                            hover:bg-purple-600 hover:shadow-[0_0_10px_#a855f7]">
                  <ChevronRight size={18} />
                </button>
              </div>

              {/* Content Area */}
              <div className="transition-all duration-300 overflow-y-auto overflow-x-hidden text-center" style={{ maxHeight: "60vh" }}>
                <div className="pr-4 min-w-0 flex flex-col items-center justify-center lg:items-start">
                  {tabContent[activeTab]}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer spacing */}
      <div className="shrink-0"></div>
    </div>
  );
}