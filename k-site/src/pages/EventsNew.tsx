import { useState } from "react";
import useFullNavbar from "@/hooks/useFullNavbar";
import {
  FileText,
  Swords,
  ShieldCheck,
  Trophy,
  Calendar,
  User,
  Phone,
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

  const tabs = [
    { key: "description", name: "Description", icon: FileText },
    { key: "rounds", name: "Rounds", icon: Swords },
    { key: "rules", name: "Rules", icon: ShieldCheck },
    { key: "prize", name: "Prize", icon: Trophy },
    { key: "schedule", name: "Schedule", icon: Calendar },
    { key: "contact", name: "Contact", icon: User },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
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
        <h2 className="text-xl md:text-2xl font-semibold flex items-center gap-3">
          <Phone size={20} className="text-purple-400" />
          Bring your best bot to the fight!
        </h2>
        <p className="text-base md:text-lg text-gray-300 mt-1">
          Participation: Team (4–5 Members)
        </p>
        <p className="mt-6 text-sm md:text-base leading-relaxed text-gray-300 max-w-3xl">
          Gear up for an electrifying battle of machines in our Robowars
          Showdown! Teams design and battle custom robots using power,
          precision and strategy.
        </p>
      </>
    ),

    rounds: (
      <>
        <h2 className="text-xl md:text-2xl font-semibold">Event Rounds</h2>
        <ul className="mt-4 text-gray-300 space-y-2 text-sm md:text-base">
          <li>⚡ Knockout Battle</li>
          <li>🔥 Semi Final</li>
          <li>🏆 Grand Finale</li>
        </ul>
      </>
    ),

    rules: (
      <>
        <h2 className="text-xl md:text-2xl font-semibold">Rules</h2>
        <ul className="mt-4 text-gray-300 space-y-2 text-sm md:text-base">
          <li>• Max weight 15kg</li>
          <li>• No explosives</li>
          <li>• 4–5 members per team</li>
        </ul>
      </>
    ),

    prize: (
      <>
        <h2 className="text-xl md:text-2xl font-semibold">Prize Pool</h2>
        <ul className="mt-4 text-gray-300 space-y-2 text-sm md:text-base">
          <li>🥇 ₹20,000</li>
          <li>🥈 ₹10,000</li>
          <li>🥉 ₹5,000</li>
        </ul>
      </>
    ),

    schedule: (
      <>
        <h2 className="text-xl md:text-2xl font-semibold">Schedule</h2>
        <ul className="mt-4 text-gray-300 space-y-2 text-sm md:text-base">
          <li>📅 March 20 – Registration Close</li>
          <li>⚔ March 28 – Battle Day</li>
        </ul>
      </>
    ),

    contact: (
      <>
        <h2 className="text-xl md:text-2xl font-semibold">Contact</h2>
        <ul className="mt-4 text-gray-300 space-y-2 text-sm md:text-base">
          <li>📞 9876543210</li>
          <li>📧 robotics@collegefest.com</li>
        </ul>
      </>
    ),
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* HEADER */}
      <div className="relative overflow-hidden bg-gradient-to-b from-[#2a004f] via-[#140024] to-black">

        <div className="relative text-center pt-16 md:pt-20 pb-8 md:pb-10">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-[0.3em] md:tracking-[0.4em] drop-shadow-[0_0_25px_#a855f7]">
            EVENTS
          </h1>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 md:px-6">
          <div className="inline-flex items-center gap-3 
                          bg-gradient-to-r from-purple-600 to-fuchsia-500
                          px-5 py-2 md:px-6 md:py-3 rounded-full
                          shadow-[0_0_25px_#a855f7]
                          font-semibold tracking-wide text-sm md:text-base">
            <Bot size={18} />
            ROBOTICS EVENTS
          </div>
        </div>

        {/* MAIN CARD */}
        <div className="relative max-w-6xl mx-auto px-4 md:px-6 mt-8 pb-16 md:pb-20">
          <div className="bg-gradient-to-b from-[#2d0057]/80 to-[#140024]/90
                          backdrop-blur-xl
                          border border-purple-500/40
                          rounded-2xl
                          shadow-[0_0_40px_#7c3aed]
                          p-5 md:p-8">

            <div className="flex flex-col md:flex-row gap-6 md:gap-8">

              {/* IMAGE SIDE */}
              <div className="w-full md:w-64 h-52 md:h-64 bg-gray-300 rounded-2xl shrink-0" />

              {/* RIGHT SIDE */}
              <div className="flex-1">

                {/* Tabs + Arrows */}
                <div className="flex items-center mb-6 pr-2 md:pr-4">


                  {/* Tabs */}
                  <div className="flex gap-3 overflow-x-auto whitespace-nowrap scrollbar-hide flex-1">
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

                  {/* Small Space Before Arrows */}
                  
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
                <div className="transition-all duration-300">
                  {tabContent[activeTab]}
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}