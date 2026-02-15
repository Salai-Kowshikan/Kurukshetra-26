import { useState, useEffect } from "react";
import useFullNavbar from "@/hooks/useFullNavbar";
import { useParams } from "react-router-dom";
import { EVENT_DETAILS } from "@/constants/events.tsx";
import { parseContact, getContactHref, isLinkableContact } from "@/lib/contactUtils";
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
  ExternalLink,
} from "lucide-react";

type TabKey =
  | "description"
  | "rounds"
  | "rules"
  | "prize"
  | "schedule"
  | "contact";

// Global registration link from App.tsx
const GLOBAL_REGISTRATION_URL =
  "https://unstop.com/college-fests/kurukshetra-2026-anna-university-ceg-tech-forum-436664";

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

  // Render contacts with phone/email links
  const renderContacts = (contacts: string[]) => (
    <ul className="mt-4 text-gray-300 space-y-2 text-sm md:text-base overflow-x-hidden lg:text-left text-center">
      {contacts.map((contact, index) => {
        const parsed = parseContact(contact);
        const isLinkable = isLinkableContact(parsed);
        const href = isLinkable ? getContactHref(parsed) : '#';

        if (isLinkable) {
          return (
            <li key={index} className="flex flex-wrap gap-1 items-center lg:justify-start justify-center min-w-0">
              <a
                href={href}
                target={parsed.type === 'email' ? '_blank' : undefined}
                rel={parsed.type === 'email' ? 'noopener noreferrer' : undefined}
                className="text-purple-400 hover:text-purple-300 hover:underline transition"
              >
                {parsed.displayText}
              </a>
            </li>
          );
        }

        return (
          <li key={index} className="flex flex-wrap gap-1 items-center lg:justify-start justify-center min-w-0">
            <span className="min-w-0" style={{ wordBreak: "break-word" }}>{parsed.displayText}</span>
          </li>
        );
      })}
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
        <h2 className="text-md md:text-lg font-normal flex items-center lg:justify-start justify-center gap-3 mb-3">
          {/* <Bot size={20} className="text-purple-400" /> */}
          {event.description}
        </h2>

        <p className="text-base md:text-lg text-gray-300 mt-4 lg:text-left text-center">
          Participation: {event.participation}
        </p>
      </>
    ),

    rounds: (
      <>
        <h2 className="text-xl md:text-2xl font-semibold lg:text-left text-center mb-3">Event Rounds</h2>
        <ul className="mt-4 text-gray-300 space-y-2 text-sm md:text-base lg:text-left text-center">
          {event.rounds.map((round: string) => (
            <li key={round} className="mb-2">⚡ {round}</li>
          ))}
        </ul>
      </>
    ),

    rules: (
      <>
        <h2 className="text-xl md:text-2xl font-semibold lg:text-left text-center mb-3">Rules</h2>
        {renderList(event.rules, "•")}
      </>
    ),

    prize: (
      <>
        <h2 className="text-xl md:text-2xl font-semibold lg:text-left text-center mb-3">Prize Pool</h2>
        {renderList(event.prize)}
      </>
    ),

    schedule: (
      <>
        <h2 className="text-xl md:text-2xl font-semibold lg:text-left text-center mb-3">Schedule</h2>
        {renderList(event.schedule, "📅")}
      </>
    ),

    contact: (
      <>
        <h2 className="text-xl md:text-2xl font-semibold lg:text-left text-center mb-3">Contact</h2>
        {renderContacts(event.contact)}
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
              <div className="w-full md:w-56 h-52 md:h-56 bg-gray-800 rounded-2xl shrink-0 overflow-hidden">
                {event.image ? (
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    <span className="text-sm">No image available</span>
                  </div>
                )}
              </div>

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
                <div className="transition-all duration-300 overflow-y-auto overflow-x-hidden lg:text-left text-center scrollbar-hide" style={{ maxHeight: "55vh" }}>
                  <div className="space-y-2">
                    {tabContent[activeTab]}
                  </div>
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
              <div className="transition-all duration-300 overflow-y-auto overflow-x-hidden text-center scrollbar-hide" style={{ maxHeight: "60vh" }}>
                <div className="pr-4 min-w-0 flex flex-col items-center justify-center lg:items-start space-y-3">
                  {tabContent[activeTab]}
                </div>
              </div>
            </div>
          </div>

          {/* REGISTRATION BUTTON - OUTSIDE CARD */}
          <div className="mt-6 flex justify-center">
            <a
              href={event.registrationLink || GLOBAL_REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-linear-to-r from-purple-600 to-fuchsia-500 
                         text-white font-semibold rounded-full hover:shadow-[0_0_30px_#a855f7] 
                         transition-all duration-300 hover:scale-105"
            >
              Register Now
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer spacing */}
      <div className="shrink-0"></div>
    </div>
  );
}
