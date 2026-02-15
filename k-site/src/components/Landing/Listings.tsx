import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import SpotlightCard from "../SpotlightCard";
import {
  cardVariants,
  staggerContainer,
  fadeUp,
  tapShrink,
} from "@/lib/animations";

import calendarImg from "../../assets/listings/calendar.svg";
import screwdriverImg from "../../assets/listings/screwdriver.png";
import microphoneImg from "../../assets/listings/microphone.png";
import laptopImg from "../../assets/listings/laptop.png";
import heroImg from "@/assets/hero_img.png";
// import listingsBg from "../../assets/listing.jpg";

type Listing = {
  title: string;
  path: string;
  image: string;
  isExternal?: boolean;
};

const ButtonGroup = ({ items }: { items: Listing[] }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="flex flex-col gap-3 max-md:hidden sm:gap-4 md:gap-6 lg:gap-8 w-full items-center md:items-start"
      variants={staggerContainer(0.18)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {items.map((item) => (
        <motion.div
          key={item.title}
          variants={cardVariants}
          whileHover={{ y: -8, scale: 1.06, rotate: 2 }}
          whileTap={tapShrink}
          onClick={() => {
            if (item.isExternal) {
              window.open(item.path, "_blank");
            } else {
              navigate(item.path);
            }
          }}
          className="cursor-pointer"
        >
          <SpotlightCard
            className="flex items-center justify-center p-6 sm:p-8 w-40 h-40 sm:w-48 sm:h-48"
            spotlightColor="rgba(168, 85, 247, 0.3)"
          >
            <div className="flex flex-col items-center justify-center gap-3">
              <motion.img
                src={item.image}
                alt={item.title}
                className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                style={{ filter: "invert(1)" }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              />
              <span className="text-white font-(family-name:--orbitron) font-bold text-center text-sm sm:text-base">
                {item.title}
              </span>
            </div>
          </SpotlightCard>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default function Listings() {
  const listings: Listing[] = [
    {
      title: "Events",
      path: "https://unstop.com/college-fests/kurukshetra-2026-anna-university-ceg-tech-forum-436664",
      image: calendarImg,
      isExternal: true,
    },
    {
      title: "Workshops",
      path: "https://unstop.com/college-fests/kurukshetra-2026-anna-university-ceg-tech-forum-436664",
      image: screwdriverImg,
      isExternal: true,
    },
    { title: "Guest Lectures", path: "/guest-lectures", image: microphoneImg },
    {
      title: "Technovation",
      path: "/technovation",
      image: laptopImg,
      isExternal: true,
    },
  ];

  const leftButtons = listings.slice(0, 2); // Events, Workshops
  const rightButtons = listings.slice(2, 4); // Guest Lectures, Technovation

  return (
    <section className="relative w-full overflow-hidden flex items-center justify-center py-8 md:py-12 lg:py-16 md:-mt-16 lg:-mt-16">
      <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Mobile Layout - Image and buttons vertically */}
        <div className="md:hidden flex flex-col gap-6">
          <motion.img
            src={heroImg}
            alt="Hero"
            className="w-full h-auto object-cover rounded-lg"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />
          <ButtonGroup items={listings} />
        </div>

        {/* Desktop Layout - Left buttons, Image, Right buttons */}
        <div className="hidden md:flex items-stretch gap-6 lg:gap-10">
          {/* Left Buttons */}
          <div className="flex flex-col justify-center">
            <ButtonGroup items={leftButtons} />
          </div>

          {/* Center Image */}
          <div className="flex-1 flex items-center justify-center">
            <motion.img
              src={heroImg}
              alt="Hero"
              className="w-full -z-10 h-full object-cover rounded-lg -mt-12 lg:-mt-16"
              style={{
                maskImage:
                  "linear-gradient(to bottom, black 0%, black 60%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 0%, black 60%, transparent 100%)",
              }}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />
          </div>

          {/* Right Buttons */}
          <div className="flex flex-col justify-center">
            <ButtonGroup items={rightButtons} />
          </div>
        </div>
      </div>
    </section>
  );
}
