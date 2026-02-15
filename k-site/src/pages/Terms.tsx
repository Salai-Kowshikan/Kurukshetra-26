import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import bg from "@/assets/Img.png";

type Section = {
  title: string;
  content: string[];
};

const SECTIONS: Section[] = [
  {
    title: "General",
    content: [
      "By accessing this website, we assume you accept these terms and conditions. Follow all of the terms and conditions stated on this page.",
      "These Terms and Conditions, Privacy Statement, Disclaimer Notice, and all Agreements use the following terminology: The terms 'participant,' 'you,' and 'your' refer to you, the person who logs on to this website and agrees to the organization's terms and conditions. 'The organization,' 'Ourselves,' 'We,' 'Ourselves,' and 'Us' refer to our CTF organization that is hosting Kurukshetra'25.",
      "All terms refer to the offer, acceptance, and consideration of payment required to begin the process of our assistance to the participant in the most appropriate manner for the express purpose of meeting the participant's needs in respect of the organization's provision. It also includes information on lodging and conditions."
    ]
  },
  {
    title: "Accommodation",
    content: [
      "Belongings : CEG Tech Forum is not responsible for the loss or theft of participant's personal belongings.",
      "Refunds/Discounts : No refunds or discounts will be given for accommodation.",
      "Injuries : CEG Tech Forum is not responsible for any injuries or accidents except those occurring during events/workshops.",
      "Room Damage : Any loss or damage to the room will be compensated by the respective individuals.",
      "ID Proof : Students must bring a hard copy of their Government ID card and Xerox of College ID.",
      "Deposit : A deposit amount of Rs. 500 must be paid in cash at the time of check-in and the deposit amount will be refunded at the time of check-out."
    ]
  },
  {
    title: "Terms of Service",
    content: [
      "You may not create frames around our Webpages that alter the visual presentation or appearance of our Website without prior approval and written permission.",
      "Privacy : Measures will be taken to collect and protect personal data.",
      "Newsletter : By signing up, users agree to receive newsletters, but can unsubscribe at any time.",
      "Intellectual Property: Trademarks, copyrights, and usage of content are protected."
    ]
  },
  {
    title: "Refund and Cancellation",
    content: [
      "All purchase made on kurukshetraceg.org.in are final. We do not offer refunds or cancellations once a purchase is made. By completing your transaction, you agree to this policy.",
      "For any questions, please contact our support at hr@cegtechforum.in."
    ]
  },
  {
    title: "Events & Workshop",
    content: [
      "Any internship obtained through participation in Kurukshetra is subject to the terms of the internship provider and the recipient's contract. CTF will not be held liable for the quality of the internships or any other issues that may arise.",
      "Decisions : The decisions made by the event organizers are final.",
      "No Refunds."
    ]
  }
];

export default function Terms() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  const toggleSection = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="relative min-h-screen flex flex-col items-center 
      px-3 sm:px-4 pt-28 sm:pt-24 pb-16 
      font-(family-name:--orbitron) overflow-hidden"
      style={{ background: "var(--contact-bg)" }}
    >
      {/* Background Image */}
      <img
        src={bg}
        alt="Terms background"
        className="absolute inset-0 w-full h-full object-cover object-bottom pointer-events-none z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/25 z-[1]" />

      {/* Content Wrapper */}
      <div className="relative z-10 w-full max-w-4xl mx-auto space-y-6">

        {/* Title */}
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl text-white font-bold mb-8">
          TERMS & CONDITIONS
        </h1>

        {/* Accordion Sections */}
        {SECTIONS.map((section, index) => (
          <div
            key={index}
            className="w-full rounded-xl border border-white/30 bg-white/5 backdrop-blur-xs overflow-hidden"
          >
            {/* Header */}
            <button
              onClick={() => toggleSection(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left text-white text-lg"
            >
              <span>{section.title}</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Content */}
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openIndex === index ? "max-h-96 py-4 px-8" : "max-h-0"
              }`}
            >
              <ul className="list-disc space-y-2 text-white/85 text-sm">
                {section.content.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        {/* Bottom Buttons */}
        <div className="flex flex-wrap justify-center gap-6 pt-10">
          <button
            onClick={() => navigate("/contact")}
            className="px-6 py-3 rounded-3xl border border-white/40 bg-white/5 backdrop-blur-xs text-white transition-all duration-200 ease-out hover:bg-violet-600 hover:scale-105 active:scale-95 active:translate-y-[1px]"
          >
            Contacts
          </button>

          <button
            onClick={() => navigate("/accommodation")}
            className="px-6 py-3 rounded-3xl border border-white/40 bg-white/5 backdrop-blur-xs text-white transition-all duration-200 ease-out hover:bg-violet-600 hover:scale-105 active:scale-95 active:translate-y-[1px]"          >
            Accommodation
          </button>

          <button
            onClick={() => navigate("/events")}
            className="px-6 py-3 rounded-3xl border border-white/40 bg-white/5 backdrop-blur-xs text-white transition-all duration-200 ease-out hover:bg-violet-600 hover:scale-105 active:scale-95 active:translate-y-[1px]"          >
            Events
          </button>

          <button
            onClick={() => navigate("/workshops")}
            className="px-6 py-3 rounded-3xl border border-white/40 bg-white/5 backdrop-blur-xs text-white transition-all duration-200 ease-out hover:bg-violet-600 hover:scale-105 active:scale-95 active:translate-y-[1px]"          >
            Workshops
          </button>
        </div>
      </div>
    </div>
  );
}
