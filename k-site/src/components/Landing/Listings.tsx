import { useNavigate } from "react-router-dom";

import calendarImg from "../../assets/listings/calendar.svg";
import screwdriverImg from "../../assets/listings/screwdriver.png";
import microphoneImg from "../../assets/listings/microphone.png";
import laptopImg from "../../assets/listings/laptop.png";
// import listingsBg from "../../assets/listing.jpg";

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
    <section
      className="
  relative w-full
  overflow-hidden
  flex items-center justify-center
  py-12 
"
      // style={{
      //   backgroundImage: `url(${listingsBg})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   backgroundRepeat: "no-repeat",
      // }}
    >
      <div
        className="
    absolute top-0 left-0 w-full h-40 sm:h-56 md:h-72

    z-0
  "
      />

      {/* <div className="absolute inset-0 bg-black/50 z-0" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.8))] z-0" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.25),transparent_60%)] pointer-events-none z-0" /> */}

      <div
        className="
    relative z-10
    flex flex-col sm:flex-row flex-wrap
    justify-center items-center
    gap-3 sm:gap-4 md:gap-8 lg:gap-10
    px-4 sm:px-6 md:px-8 lg:px-12
    max-w-7xl mx-auto w-full
  "
      >
        {listings.map((item) => (
          <button
            key={item.title}
            onClick={() => navigate(item.path)}
            className="
              w-full sm:w-auto flex-1

              flex flex-row sm:flex-col
              items-center justify-start sm:justify-center
              gap-3 sm:gap-2 lg:gap-3

              px-4 py-3
              sm:px-4 sm:py-5
              md:px-6 md:py-8
              lg:px-8 lg:py-10

              rounded-lg
              bg-black/40 backdrop-blur
              text-white

              border-2 border-[#E900BD]

              transition-all duration-300
              hover:scale-105
              hover:bg-transparent
              hover:shadow-[0_0_20px_rgba(168,85,247,0.9)]
            "
          >
            {/* Icon */}
            <img
              src={item.image}
              alt={item.title}
              className="
                w-8 h-8
                sm:w-10 sm:h-10
                md:w-14 md:h-14
                lg:w-16 lg:h-16
                object-contain invert
                shrink-0
              "
            />

            {/* Text */}
            <span
              className="
                text-xs sm:text-sm md:text-base
                tracking-wide
                font-(family-name:--poppins)
                text-left sm:text-center
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
