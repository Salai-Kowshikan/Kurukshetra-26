import { useNavigate } from "react-router-dom";

import calendarImg from "../../assets/listings/calendar.svg";
import screwdriverImg from "../../assets/listings/screwdriver.png";
import microphoneImg from "../../assets/listings/microphone.png";
import laptopImg from "../../assets/listings/laptop.png";

type Listing = {
  title: string;
  path: string;
  image: string;
};

export default function Listings() {
  const navigate = useNavigate();

  const listings: Listing[] = [
    { title: "Events", path: "/events", image: calendarImg },
    { title: "Workshops", path: "/workshops", image: screwdriverImg },
    { title: "Guest Lectures", path: "/guest-lectures", image: microphoneImg },
    { title: "Technovation", path: "/technovation", image: laptopImg },
  ];

  return (
    <section className="w-full py-6 sm:py-8 md:py-12 lg:py-16">
      <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 md:gap-8 lg:gap-10 px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
        {listings.map((item) => (
          <button
            key={item.title}
            onClick={() => navigate(item.path)}
            
            className="
              flex-1
              px-2 py-4
              sm:px-4 sm:py-5
              md:px-6 md:py-8
              lg:px-8 lg:py-10

              rounded-lg
              bg-black/40
              backdrop-blur
              text-white

              flex flex-col items-center justify-center
              gap-1 sm:gap-2 lg:gap-3

              transition-all duration-300
              hover:scale-105
              hover:bg-transparent
              hover:text-white
              hover:shadow-[0_0_20px_rgba(168,85,247,0.9)]

              border-2
              border-[#E900BD]
            "
          >
            <img
              src={item.image}
              alt={item.title}
              className="
                w-8 h-8
                sm:w-10 sm:h-10
                md:w-14 md:h-14
                lg:w-16 lg:h-16
                object-contain invert
              "
            />
            <span
              className="
                text-[8px]
                sm:text-xs
                md:text-sm
                lg:text-base
                tracking-wide
                font-(family-name:--poppins)
                text-center
                whitespace-nowrap
              "
            >
              {item.title}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
