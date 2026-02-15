import { BiCalendarEvent } from "react-icons/bi";
import {
  FaBook,
  FaClock,
  FaLaptop,
  FaLaptopCode,
  FaMoneyBill,
  FaRobot,
} from "react-icons/fa";
import { GiScrollUnfurled, GiWhistle } from "react-icons/gi";
import { IoMdSettings } from "react-icons/io";
import { IoGlobeSharp, IoPersonSharp, IoPhonePortrait } from "react-icons/io5";
import { MdQuiz } from "react-icons/md";

const getRandomPrizepool = () => "";
const getRandomImage = () => "";

export const eventCategories = [
  "engineering",
  "coding",
  "extravaganza",
  "management",
  "quiz",
  "robotics",
  "online",
];

export const validEvents = [
  "Aero-Rush",
  "OSPC",
  "Web Craft",
  "Electrohunt !",
  "Poster Making Event",
  "Artistry Unlocked",
  "Byte Bash",
  "Pacbot",
  "Micromouse",
  "Godspeed",
  "Civil Design Duel",
  "Water Rocketry",
  "Paper Presentation",
  "Shark-Tank",
  "Ultimate Line Tracer",
  "Robowars",
  "Grand Checkmate - Chess",
  "Brass & Brains - Quiz",
  "Pitch Arena",
  "Robo Race",
  "Gaia Protocol - ML Event",
  "Netrunner Gauntlet - CTF",
  "Neon Wallstreet",
  "Steam Quest",
  "Viewport - 3D Video",
  "Autodesk Event",
];

const mailid = "events@cegtechforum.in";

export const eventDetails = [
  {
    name: "description",
    icon: <FaBook />,
  },
  {
    name: "rounds",
    icon: <GiWhistle />,
  },
  {
    name: "rules",
    icon: <GiScrollUnfurled />,
  },
  {
    name: "schedule",
    icon: <FaClock />,
  },
  {
    name: "price",
    icon: <FaMoneyBill />,
  },
  {
    name: "contact",
    icon: <IoPhonePortrait />,
  },
];

export const eventsList = [
  {
    category: "Engineering Events",
    description:
      " Embark on a journey of engineering innovation and discovery at our International Techno - Management Fest, an event crafted for college students passionate about engineering and technology. K! 26 is an opportunity for aspiring engineers to delve into the latest trends, connect with industry professionals, and ignite their creativity through hands-on experiences.",
    icon: <IoMdSettings />,
    events: [
      {
        name: "Water Rocketry",
        description:
          "Water Rocketry is an exciting and educational event where participants design, build, and launch rockets made from plastic bottles using water and compressed air as propulsion.",
        image: getRandomImage(),
        prizepool: "12000 INR",
      },
      {
        name: "Civil Design Duel",
        description:
          "This Civil Based Event features two exciting rounds: Round 1 challenges participants to design an egg protection device, while Round 2 tests engineering skills by constructing a sturdy bridge.",
        image: getRandomImage(),
        prizepool: "12000 INR",
      },
      {
        name: "Electrohunt",
        description:
          "This two-round competition allows participants to showcase their expertise in both embedded programming and analog circuit design, effectively bridging the gap between code and hardware.",
        image: getRandomImage(),
        prizepool: "12000 INR",
      },
      {
        name: "Aero Rush - LOS Drone Racing",
        description:
          "AERO RUSH is a high-speed Line of Sight (LOS) drone racing competition featuring sharp turns, steep dives, and challenging obstacles.",
        image: getRandomImage(),
        prizepool: "60000 INR",
      },
      {
        name: "Godspeed - RC Nitro Buggy Race",
        description:
          "Godspeed is a high-adrenaline RC car racing competition that challenges participants to design, build, and race Nitro-powered RC cars on a technical track featuring sharp turns, dirt obstacles, and other racing challenges.",
        image: getRandomImage(),
        prizepool: "100000 INR",
      },
    ],
  },
  {
    category: "quiz",
    icon: <MdQuiz />,
    events: [
      {
        name: "Brass & Brains - Quiz",
        description:
          "This quiz is a tribute to the engineering fraternity, celebrating their monumental contributions across various fields of engineering that have driven the development of nations.",
        image: getRandomImage(),
        prizepool: "12000 INR",
      },
    ],
  },
  {
    category: "management",
    icon: <IoPersonSharp />,
    events: [
      {
        name: "Pitch Arena",
        description:
          "Pitch Arena is a dynamic marketing competition that tests participants’ creativity, strategic thinking, and business acumen through real-world challenges.",
        image: getRandomImage(),
        prizepool: "12000 INR",
      },
      {
        name: "Shark Tank",
        description:
          "The Shark Tank event is designed to encourage innovation, entrepreneurial thinking, and presentation skills among participants. This event provides a platform for individuals to present their business ideas, receive feedback from potential investors, and compete for the winning position through a structured two-round evaluation process.",
        image: getRandomImage(),
        prizepool: "12000 INR",
      },
    ],
  },
  {
    category: "extravaganza",
    icon: <BiCalendarEvent />,
    events: [
      {
        name: "Grand Checkmate - Chess",
        description:
          "The Chess event is designed to test participants’ adaptability, strategic thinking, and overall chess understanding through a mix of online chess variants and offline traditional chess.",
        image: getRandomImage(),
        prizepool: "12000 INR",
      },
      {
        name: "Artistry Unlocked - Drawing Event",
        description:
          "This is a team-based drawing competition designed to test creativity, imagination, and coordination under time constraints.",
        image: getRandomImage(),
        prizepool: "12000 INR",
      },
      {
        name: "The Viewport – 3D Video Rendering",
        description:
          "The Viewport challenges digital artists to build the world of tomorrow using the machinery of the past. In this online 3D animation contest, participants must use industry-standard tools (Blender, Maya, Unreal Engine) to create a stunning 5 to 10 second video sequence based on Steampunk, Cyberpunk, and Solarpunk themes.",
        image: getRandomImage(),
        prizepool: "10000 INR",
      },
    ],
  },
  {
    category: "robotics",
    icon: <FaRobot />,
    events: [
      {
        name: "Robosoccer",
        description:
          "Robo Soccer is a competitive robotics event where teams design and operate soccer-playing robots to compete in a fast-paced match on a miniature arena. Participants must demonstrate innovation, mechanical design, control systems, and strategic gameplay to outscore their opponents.",
        image: getRandomImage(),
        prizepool: "27000 INR",
      },
      {
        name: "MICROMOUSE - Maze Solver",
        description:
          "Micromouse is an exciting robotics competition where participants design and build an autonomous robot capable of navigating a maze in the shortest possible time. The challenge lies in designing a robot that can accurately sense walls, make intelligent decisions, and optimize its path for speed and accuracy.",
        image: getRandomImage(),
        prizepool: "27000 INR",
      },
      {
        name: "Pac Bot",
        description:
          "PAC BOT is an action-packed robotics challenge inspired by the classic arcade maze game. The arena consists of one PAC BOT and two GHOST BOTS.",
        image: getRandomImage(),
        prizepool: "27000 INR",
      },
    ],
  },
  {
    category: "Coding Events",
    icon: <FaLaptopCode />,
    events: [
      {
        name: "Onsite Strategic Programming Challenge - OSPC",
        description:
          "The Onsite Strategic Programming Challenge (OSPC) is a competitive programming event designed to evaluate how participants think, decide, and adapt while solving algorithmic problems.",
        image: getRandomImage(),
        prizepool: "12000 INR",
      },
    ],
  },
  {
    category: "Online",
    icon: <FaLaptopCode />,
    events: [
      {
        name: "Neon Wallstreet",
        description:
          "Neon Wallstreet provides participants with the ultimate opportunity to test their financial instincts in a hyper-realistic, futuristic stock market simulation. Set in a neon-drenched digital metropolis, participants start with a base amount of 'Credits' (Eddies) to buy and sell stocks.",
        image: getRandomImage(),
        prizepool: "10000 INR",
      },
    ],
  },
];

export const allEventsDetails = [
  {
    name: "engineering",
    description:
      "Embark on a journey of engineering innovation and discovery at our International Techno - Management Fest, an event crafted for college students passionate about engineering and technology. K! 26 is an opportunity for aspiring engineers to delve into the latest trends, connect with industry professionals, and ignite their creativity through hands-on experiences.",
    to: "engineering",
    icon: <IoMdSettings />,
    events: [
      {
        name: "Water Rocketry",
        email: mailid,
        isEventOpened: true,
        type: "General",
        code: "GENERALREGISTRATION",
        to: "water-rocketry",
        tag: "Launch the future",
        eventInfo: [
          {
            name: "Description",
            content:
              "Water Rocketry is an exciting and educational event where participants design, build, and launch rockets made from plastic bottles using water and compressed air as propulsion. This event combines the principles of physics, fluid mechanics, and aerodynamics in a fun and competitive environment.\\n\\nParticipants must construct a water rocket using only the permitted materials provided by the organizers. The rocket is partially filled with water and pressurized with air using a pump. When released, the pressurized air forces the water out at high speed, generating thrust that propels the rocket into the air.\\n\\nThis event encourages innovation, teamwork, and the practical application of theoretical concepts.",
            image: "/images/events/description/water_rocketry.webp",
            icon: <FaBook />,
          },
          {
            name: "Rounds",
            content: [
              {
                round: "Round 1 - Distance Round",
                content:
                  "In this round, the horizontal distance of the rocket is tested.\\nThe distance from the launch pad to the landing point will be measured and used for scoring.\\nThe team achieving the maximum distance will qualify for the next round.\\nA trial launch will be provided.\\nPoints will be awarded based on performance.\\nThis is an eliminative round, and only the top teams will proceed to the next stage.\\nThe team must cross the minimum qualifying distance to be considered.\\nThe minimum qualifying distance from the ramp is 10 meters.",
              },
              {
                round: "Round 2 - Target Round",
                content:
                  "A trapezoidal target area will be drawn using concentric distance markers for every 10 meters.\\nThe inner width of the target is 80 cm and the outer width is 40 cm.\\nFor every 10 meters (except the first 10 meters), the area will be divided into four scoring sections.\\nPoints will be awarded based on the section where the rocket lands.\\nThe team securing the highest points will be declared the winner.\\nIf none of the rockets reaches the target, the distance from the landing point to the central pole will be measured. The team with the minimum distance from the pole will be selected.\\nThe decision made by the organizers will be final.",
              },
            ],
            icon: <GiWhistle />,
          },
          {
            name: "Rules",
            content: [
              "Any team may participate in Water Rocketry.",
              "Each team can have a maximum of three (3) members. Participants may be from the same or different institutions.",
              "Every team must have a unique team name. The organizers reserve the right to reject any inappropriate or offensive team names.",
              "The working fluid and pressure system will be provided by the coordinators.",
              "The use of chemical explosives or any hazardous materials is strictly prohibited.",
              "No component of the rocket should detach during flight. If any part detaches, points will be reduced.",
              "All materials required for constructing the rocket will be provided by the organizers.",
              "The rocket must be constructed only using the materials provided.",
              "Use of any external or personal materials will lead to immediate disqualification.",
              "Participants must construct the rocket within the allotted time.",
              "Selected teams will be informed through call/SMS regarding the next round.",
              "Teams failing to report at the specified time will be disqualified.",
              "If any rocket part gets damaged or detached, reconstruction of another rocket will not be permitted.",
            ],
            icon: <GiScrollUnfurled />,
          },
          {
            name: "Schedule",
            content: [
              {
                name: "Round 1",
                date: "March 8, 2026",
                time: "10:00 AM to 12:30 PM",
                location: "TBD",
              },
              {
                name: "Round 2",
                date: "March 8, 2026",
                time: "01:30 PM to 04:30 PM",
                location: "TBD",
              },
            ],
            icon: <FaClock />,
          },
          {
            name: "Prize",
            prize: "12000 INR",
            entry: "TBD",
            icon: <FaMoneyBill />,
          },
          {
            name: "Contact",
            content: [
              {
                name: "Rama Chella Dharshani.K",
                number: "9025687188",
              },
              {
                name: "Yalini.M",
                number: "9659897312",
              },
              {
                name: "Prithvi Raj.J",
                number: "9342524655",
              },
            ],
            icon: <IoPhonePortrait />,
          },
        ],
      },
      {
        name: "Civil Design Duel",
        email: "events@cegtechforum.in",
        isEventOpened: true,
        type: "General",
        code: "GENERALREGISTRATION",
        to: "civil-design-duel",
        tag: "Design. Build. Survive.",
        eventInfo: [
          {
            name: "Description",
            content:
              "This Civil Based Event features two exciting rounds: Round 1 challenges participants to design an egg protection device to prevent breakage from a height, while Round 2 tests their engineering skills by constructing a sturdy bridge using sticks, glue, and paper.",
            image: "/images/events/description/civil_design.webp",
            icon: <FaBook />,
          },
          {
            name: "Rounds",
            content: [
              {
                round: "Round 1: Crash Guard",
                content:
                  "In this round, participants are tasked with designing and constructing a protective structure to prevent an egg from breaking when dropped from a significant height, using only the provided materials.\\nOnce completed, the structures will undergo a drop test, and the designs will be evaluated based on the survival of the egg, weight of the structure, and overall creativity.\\nThe team with the most effective and innovative design will be selected to the next round.",
              },
              {
                round: "Round 2: Bridge Construction",
                content:
                  "In this round, participants are tasked with constructing a bridge in accordance with the requirements outlined in the problem statement, utilizing the provided materials.\\nThe constructed bridges will undergo a load test, and the bridge that withstands the load for a longer duration will be considered the winner.",
              },
            ],
            icon: <GiWhistle />,
          },
          {
            name: "Rules",
            content: [
              "Event comprises two rounds, with a maximum of 3 members allowed per team",
              "Using mobile phones for any assistance is prohibited",
              "Team members cannot be changed after the initiation of Round 1",
              "Required logistics for the event will be provided",
              "Decision taken by the organizers is final",
            ],
            icon: <GiScrollUnfurled />,
          },
          {
            name: "Schedule",
            content: [
              {
                name: "Round 1: Crash Guard",
                date: "March 8, 2026",
                time: "10:00 AM - 12:30 PM IST",
                location: "TBD",
              },
              {
                name: "Round 2: Bridge Construction",
                date: "March 8, 2026",
                time: "01:30 PM - 04:00 PM IST",
                location: "TBD",
              },
            ],
            icon: <FaClock />,
          },
          {
            name: "Prize",
            prize: "12000 INR",
            entry: "TBD",
            icon: <FaMoneyBill />,
          },
          {
            name: "Contact",
            content: [
              {
                name: "Ratish",
                number: "99409 99133",
              },
              {
                name: "Bala Krishnan",
                number: "93636 05095",
              },
            ],
            icon: <IoPhonePortrait />,
          },
        ],
      },
      {
        name: "Electrohunt",
        email: "events@cegtechforum.in",
        isEventOpened: true,
        type: "General",
        code: "GENERALREGISTRATION",
        to: "electrohunt",
        tag: "Connect. Code. Conquer.",
        eventInfo: [
          {
            name: "Description",
            content:
              "This two-round competition allows participants to showcase their expertise in both embedded programming and analog circuit design, effectively bridging the gap between code and hardware. The contest challenges students to design, code, and optimize electronic systems, emphasizing practical engineering skills and system-level thinking.",
            image: "/images/events/description/electrohunt.webp",
            icon: <FaBook />,
          },
          {
            name: "Rounds",
            content: [
              {
                round: "Round 1 – Online Quiz and Coding Challenge",
                content:
                  "Participants: All registered participants\\nMode: Offline | Format: Online quiz | Team size: 2\\nIn this preliminary round, participants will test their embedded systems knowledge through a series of conceptual and problem-based questions.\\nTopics: Microcontroller architecture, Sensor interfacing, Communication protocols (I2C, UART, SPI), Low-level C/C++ programming.\\nQualification: Top 8 participant teams will be shortlisted for Round 2.",
              },
              {
                round: "Round 2 – Circuit Design and Verification",
                content:
                  "Participants: 8 shortlisted participant teams\\nMode: In-person circuit design\\nQualified participants will advance to the circuit design phase, where they are required to design, simulate, or implement analog circuits to meet specified functional requirements. This round evaluates creativity, practical design thinking, and hardware understanding.\\nFocus areas: Op-amp configurations, Voltage regulators, Rectifiers, Amplifiers, Filters, Oscillators.\\nEvaluation Criteria: Circuit accuracy, Efficiency, Ability to analyze the problem statement.\\nOutcome: First, Second, and Third place winners.",
              },
            ],
            icon: <GiWhistle />,
          },
          {
            name: "Rules",
            content: [
              "Participants are requested to follow the problem statements, design guidelines, and time limits provided for each round.",
              "All solutions, including code and circuit designs, must be original. Any form of plagiarism may lead to disqualification.",
              "Only registered participants are eligible to participate in the event.",
              "Submissions such as code, circuit diagrams, simulations, or implementations should follow the prescribed format.",
              "The decisions of the judges and event coordinators will be final and binding.",
              "Any form of queries will be addressed through: electrohunt@cegtechforum.in",
            ],
            icon: <GiScrollUnfurled />,
          },
          {
            name: "Schedule",
            content: [
              {
                name: "Round 1 – Online Quiz and Coding Challenge",
                date: "March 7, 2026",
                time: "10:00 AM - 12:30 PM",
                location: "TBD",
              },
              {
                name: "Round 2 – Circuit Design and Verification",
                date: "March 7, 2026",
                time: "01:30 PM - 03:30 PM",
                location: "TBD",
              },
            ],
            icon: <FaClock />,
          },
          {
            name: "Prize",
            prize: "12000 INR",
            entry: "TBD",
            icon: <FaMoneyBill />,
          },
          {
            name: "Contact",
            content: [
              {
                name: "Jayaprasath SV",
                number: "9600206935",
              },
              {
                name: "Sandhiya A",
                number: "9786112205",
              },
            ],
            icon: <IoPhonePortrait />,
          },
        ],
      },
      {
        name: "Aero Rush - LOS Drone Racing",
        email: "events@cegtechforum.in",
        isEventOpened: true,
        type: "Flagship",
        code: "GENERALREGISTRATION",
        to: "aero-rush",
        tag: "Race the wind.",
        eventInfo: [
          {
            name: "Description",
            content:
              "AERO RUSH is a high-speed Line of Sight (LOS) drone racing competition featuring sharp turns, steep dives, and challenging obstacles. Participants compete in time-based formats to showcase speed, precision, control, and flying skills.\\n\\nDrone Specs: Max weight 2kg, Frame <= 300mm, Props <= 6 inches, Battery 3S-4S (1500-2200 mAh). No LiDAR/Optical Flow.",
            image: "/images/events/description/aerorush.webp",
            icon: <FaBook />,
          },
          {
            name: "Rounds",
            content: [
              {
                round: "Round 1 – Qualifier",
                content:
                  "Open to all participants.\\nFormat: Time-based (Best of 2 attempts, 3 laps each).\\nPilots fly one at a time.\\nTop 16 qualify.\\nPenalties: Missing flag (+5s), Skipping gate (+10s).",
              },
              {
                round: "Round 2 – Final",
                content:
                  "Top 16 divided into groups of 4.\\nFormat: 1 attempt, 3 laps.\\nFastest timings decide top 3.\\nPenalties: Missing flag (+10s), Missing gate (+15s).",
              },
            ],
            icon: <GiWhistle />,
          },
          {
            name: "Rules",
            content: [
              "Pilots must bring their own batteries, tools, and spares.",
              "Plugging in while another quad is in the air results in disqualification.",
              "Valid college ID mandatory.",
              "Pilots must be ready when called; late reporting leads to penalty.",
              "Organizers are not responsible for injuries or damages.",
              "Issues must be raised in the official WhatsApp group.",
            ],
            icon: <GiScrollUnfurled />,
          },
          {
            name: "Schedule",
            content: [
              {
                name: "Round 1 – Qualifier",
                date: "March 9, 2026",
                time: "10:00 AM - 12:30 PM",
                location: "TBD",
              },
              {
                name: "Round 2 – Final",
                date: "March 9, 2026",
                time: "01:30 PM - 04:30 PM",
                location: "TBD",
              },
            ],
            icon: <FaClock />,
          },
          {
            name: "Prize",
            prize: "60000 INR",
            entry: "TBD",
            icon: <FaMoneyBill />,
          },
          {
            name: "Contact",
            content: [
              {
                name: "Pavithra Devi B",
                number: "9489834466",
              },
              {
                name: "Prithiv Raj J",
                number: "9342524655",
              },
            ],
            icon: <IoPhonePortrait />,
          },
        ],
      },
      {
        name: "Godspeed - RC Nitro Buggy Race",
        email: "godspeed@cegtechforum.in",
        isEventOpened: true,
        type: "Flagship",
        code: "GSCTF25",
        to: "godspeed",
        tag: "Nitro-fuelled adrenaline.",
        eventInfo: [
          {
            name: "Description",
            content:
              "Godspeed is a high-adrenaline RC car racing competition that challenges participants to design, build, and race Nitro-powered RC cars on a technical track featuring sharp turns, dirt obstacles, and other racing challenges. The event brings together engineering students and RC enthusiasts to test speed, precision, and vehicle design, while promoting motorsport culture and innovation.\\n\\nIn collaboration with WD RACING.\\n\\nUse code 'GSCTF25' for 25% early bird discount!",
            image: "/images/events/description/godspeed.webp",
            icon: <FaBook />,
          },
          {
            name: "Rounds",
            content: [
              {
                round: "Racing Rounds",
                content:
                  "Held on CEG Campus Sports Ground.\\nRaces conducted in multiple formats: Timed Races, Heats, Semi-Finals, and Finals.\\nProgressive filtering based on speed, consistency, reliability, and skill.\\nRound 1: Time Trials using participant's own kit.",
              },
            ],
            icon: <GiWhistle />,
          },
          {
            name: "Rules",
            content: [
              "Eligibility: Students, graduates, clubs, and approved professionals. Valid ID and Unstop verification mandatory.",
              "Vehicle Specs: 1/8 Scale Nitro Buggies (1:10 allowed if compliant). Max 3.5cc engine. Max 125cc fuel. Nitromethane <= 25%. 4WD.",
              "Tires: Max Dia 120mm, Min 109mm. Max Width 47mm.",
              "Radio: 2.4GHz DSM/DSS allowed. Fail-safe mandatory. No traction control.",
              "Safety: Reckless driving penalised. Cut track = 5s penalty.",
              "Transponder: Handle with care. Damage/tampering = 3000 INR penalty.",
            ],
            icon: <GiScrollUnfurled />,
          },
          {
            name: "Schedule",
            content: [
              {
                name: "Racing Rounds",
                date: "March 8, 2026",
                time: "10:30 AM - 09:30 PM",
                location: "CEG Campus Sports Ground",
              },
            ],
            icon: <FaClock />,
          },
          {
            name: "Prize",
            prize: "100000 INR",
            entry: "TBD",
            icon: <FaMoneyBill />,
          },
          {
            name: "Contact",
            content: [
              {
                name: "Vijay K G",
                number: "8438938916",
              },
              {
                name: "Purushothaman S",
                number: "9487022210",
              },
            ],
            icon: <IoPhonePortrait />,
          },
        ],
      },
    ],
  },
  {
    name: "quiz",
    description:
      "Gear up for an adrenaline-packed quizzing adventure. Whether you are a quiz enthusiast, a seasoned engineer, or a tech aficionado, these events are the chance to showcase your knowledge, think on your feet, and push the boundaries of intellect.",
    to: "quiz",
    icon: <MdQuiz />,
    events: [
      {
        name: "Brass & Brains - Quiz",
        email: "brassbrains@cegtechforum.in",
        isEventOpened: true,
        type: "General",
        code: "GENERALREGISTRATION",
        to: "brass-and-brains",
        tag: "Celebrating Engineering Excellence through Knowledge",
        eventInfo: [
          {
            name: "Description",
            content:
              "This quiz is a tribute to the engineering fraternity, celebrating their monumental contributions across various fields of engineering that have driven the development of nations.\\n\\nThe quiz will cover engineering achievements across decades, spanning multiple branches including:\\n- Civil Engineering\\n- Mechanical Engineering\\n- Automobile Engineering\\n- Electrical Engineering\\n- Electronics Engineering\\n- Aeronautical Engineering\\n- Computer Engineering\\n- Ocean and Marine Engineering\\n\\nThe quiz will also highlight leading corporates with strong engineering backgrounds, renowned engineers, and the contributions of Public Sector Undertakings (PSUs).",
            image: "/images/events/description/brass_brains.webp",
            icon: <FaBook />,
          },
          {
            name: "Rounds",
            content: [
              {
                round: "Round 1: Preliminary Round",
                content:
                  "This is a pen-and-paper round.\\nParticipants will be tested on 25 questions.\\nTeams scoring the highest marks will qualify for the next round.\\nThe number of teams selected will be decided by the organizers and the Quiz Master.",
              },
              {
                round: "Round 2: Main Round",
                content:
                  "Teams selected from the preliminary round will participate in the Main Round, which will include the following sub-rounds:\\n- Multiple Choice Questions\\n- Abbreviations Round\\n- Odd Man Out\\n- Commonality Round\\n- Fill in the Blanks Round\\n- Rapid Fire Round\\n- Question & Answer Round\\n- Audio-Visual Round\\n- Corporate / Corporate Personality Round\\n- Ocean Insights Round\\n- Double or Quit Round",
              },
            ],
            icon: <GiWhistle />,
          },
          {
            name: "Rules",
            content: [
              "Each team can have a maximum of three (3) participants.",
              "Use of mobile phones or any electronic devices is strictly prohibited.",
              "All participants must possess a valid Kurukshetra ID.",
              "Time limits will be strictly followed.",
              "The decisions of the organizers and the Quiz Master will be final and binding.",
            ],
            icon: <GiScrollUnfurled />,
          },
          {
            name: "Schedule",
            content: [
              {
                name: "Round 1: Preliminary Round",
                date: "March 9, 2026",
                time: "10:00 AM to 12:30 PM",
                location: "TBD",
              },
              {
                name: "Round 2: Main Round",
                date: "March 9, 2026",
                time: "01:30 PM to 03:30 PM",
                location: "TBD",
              },
            ],
            icon: <FaClock />,
          },
          {
            name: "Prize",
            prize: "12000 INR",
            entry: "TBD",
            icon: <FaMoneyBill />,
          },
          {
            name: "Contact",
            content: [
              {
                name: "Purushothaman V",
                number: "9677257928",
              },
              {
                name: "Ratish",
                number: "9940999133",
              },
            ],
            icon: <IoPhonePortrait />,
          },
        ],
      },
    ],
  },
  {
    name: "management",
    description:
      "Showcase your managerial prowess! Test your skills in strategy, marketing, and leadership through engaging challenges designed for future leaders.",
    to: "management",
    icon: <IoPersonSharp />,
    events: [
      {
        name: "Pitch Arena",
        email: "pitcharena@cegtechforum.in",
        isEventOpened: true,
        type: "General",
        code: "GENERALREGISTRATION",
        to: "pitch-arena",
        tag: "Pitch Your Vision",
        eventInfo: [
          {
            name: "Description",
            content:
              "Pitch Arena is a dynamic marketing competition that tests participants’ creativity, strategic thinking, and business acumen through real-world challenges.\\nTeams craft engaging advertisements, solve realworld problems, and pitch innovative strategies before a jury, showcasing their skills in branding, analysis, communication, and teamwork.",
            image: "/images/events/description/pitch.webp",
            icon: <FaBook />,
          },
          {
            name: "Rounds",
            content: [
              {
                round: "Round 1 – Advertisement Making Round (Online)",
                content:
                  "Mode: Online submission via Unstop\\nParticipants must create a 2-minute promotional advertisement video for products based on the themes: CYBERPUNK, SOLARPUNK and STEAMPUNK.\\nDevelop a creative concept\\nDesign a compelling marketing message\\nProduce and edit a short advertisement\\nUpload the final video on Unstop\\n\\nEvaluation Criteria:\\nCreativity and originality\\nMessage clarity\\nStorytelling\\nMarketing appeal\\nEngagement factor\\nOverall presentation",
              },
              {
                round: "Round 2 – Pitch Round (Offline)",
                content:
                  "Shortlisted teams will select their own real-world marketing problem statement or product and develop a complete case study solution.\\nAnalyze the problem and identify key challenges\\nDesign effective marketing strategies\\nPitch the solution before a panel of judges\\nSubmit a 5 to 10 slide presentation for pitching\\n\\nPresentation May Include:\\nProblem analysis\\nTarget audience segmentation\\nBranding and positioning\\nMarketing channels and promotions\\nBudget and expected outcomes\\n\\nFinal Pitch Format (Offline):\\n1-minute presentation\\nQuestion and answer session\\n\\nEvaluation Criteria:\\nStrategic thinking\\nInnovation\\nFeasibility of solutions\\nPresentation and communication skills\\nClarity and structure",
              },
            ],
            icon: <GiWhistle />,
          },
          {
            name: "Rules",
            content: [
              "Teams must adhere to submission deadlines for each round",
              "All submissions must be original work",
              "Plagiarism or copied content will lead to disqualification",
              "Only registered participants are allowed to compete",
              "Judges’ and organizers’ decisions will be final and binding",
              "Any form of misconduct may result in disqualification",
            ],
            icon: <GiScrollUnfurled />,
          },
          {
            name: "Schedule",
            content: [
              {
                name: "Round 1 – Advertisement Making Round (Online)",
                date: "February 16, 2026 - February 23, 2026",
                time: "10:00 AM IST",
                location: "Unstop",
              },
              {
                name: "Round 2 – Pitch Round (Offline)",
                date: "March 9, 2026",
                time: "10:00 AM - 01:00 PM IST",
                location: "TBD",
              },
            ],
            icon: <FaClock />,
          },
          {
            name: "Prize",
            prize: "12000 INR",
            entry: "TBD",
            icon: <FaMoneyBill />,
          },
          {
            name: "Contact",
            content: [
              {
                name: "Janani L",
                number: "6384532416",
              },
              {
                name: "Balasubramani E",
                number: "9445688098",
              },
            ],
            icon: <IoPhonePortrait />,
          },
        ],
      },
      {
        name: "Shark Tank",
        email: "sharktank@cegtechforum.in",
        isEventOpened: true,
        type: "General",
        code: "GENERALREGISTRATION",
        to: "shark-tank",
        tag: "Dive Into Innovation",
        eventInfo: [
          {
            name: "Description",
            content:
              "The Shark Tank event is designed to encourage innovation, entrepreneurial thinking, and presentation skills among participants. This event provides a platform for individuals to present their business ideas, receive feedback from potential investors, and compete for the winning position through a structured two-round evaluation process.",
            image: "/images/events/description/shark_tank.webp",
            icon: <FaBook />,
          },
          {
            name: "Rounds",
            content: [
              {
                round: "Round 1 – Idea Pitch (PPT Presentation)",
                content:
                  "Participants: All registered participants\\nMode: Presentation-based\\nFormat: PowerPoint presentation\\n\\nParticipants will present their business ideas using a PPT. The presentation should clearly explain the problem statement, proposed solution, innovation, feasibility, and impact of the idea.\\n\\nEvaluation Criteria:\\nInnovation and originality\\nFeasibility\\nClarity of presentation\\nPractical application\\n\\nQualification:\\nTop 8 participants will be shortlisted for Round 2.",
              },
              {
                round: "Round 2 – Investor Pitch (Final Round)",
                content:
                  "Participants: 8 shortlisted participants\\nMode: Live pitching\\n\\nShortlisted participants will present their ideas directly to potential investors. This round will focus on business viability, scalability, and pitching skills. Participants may also face a Q&A session from the investor panel.\\n\\nEvaluation Criteria:\\nBusiness model\\nMarket potential\\nBusiness confidence and communication\\nAbility to answer investor questions\\n\\nOutcome:\\nOne participant will be selected as the Winner of Shark Tank.",
              },
            ],
            icon: <GiWhistle />,
          },
          {
            name: "Rules",
            content: [
              "Participants must strictly follow the presentation guidelines and time limits.",
              "Any form of plagiarism will result in immediate disqualification.",
              "Decisions made by the judges will be final and binding.",
              "Participants must be registered for this event.",
              "Use of AI for PPT preparation should be minimal, and the use of AI-generated images is not allowed.",
              "The prescribed PPT format will be strictly followed.",
            ],
            icon: <GiScrollUnfurled />,
          },
          {
            name: "Schedule",
            content: [
              {
                name: "Round 1 – Idea Pitch (PPT Presentation)",
                date: "February 14, 2026 - February 28, 2026",
                time: "10:00 AM IST",
                location: "Unstop",
              },
              {
                name: "Round 2 – Investor Pitch (Final Round)",
                date: "March 8, 2026",
                time: "10:00 AM - 01:00 PM IST",
                location: "CEG Campus, Anna University, Chennai",
              },
            ],
            icon: <FaClock />,
          },
          {
            name: "Prize",
            prize: "12000 INR",
            entry: "TBD",
            icon: <FaMoneyBill />,
          },
          {
            name: "Contact",
            content: [
              {
                name: "Yalini M",
                number: "9659897312",
              },
              {
                name: "Mohamed Abdul Hameed P",
                number: "916381359628",
              },
            ],
            icon: <IoPhonePortrait />,
          },
        ],
      },
    ],
  },
  {
    name: "extravaganza",
    description:
      "Experience the thrill of our Extravaganza Events! From mind-bending puzzles to creative showcases, these events are designed to entertain, challenge, and inspire.",
    to: "extravaganza",
    icon: <BiCalendarEvent />,
    events: [
      {
        name: "Grand Checkmate - Chess",
        email: "events@cegtechforum.in",
        isEventOpened: true,
        type: "General",
        code: "GENERALREGISTRATION",
        to: "grand-checkmate",
        tag: "Checkmate Your Limits",
        eventInfo: [
          {
            name: "Description",
            content:
              "The Chess event is designed to test participants’ adaptability, strategic thinking, and overall chess understanding through a mix of online chess variants and offline traditional chess. The competition will begin with large-scale online rounds to shortlist skilled players and conclude with an offline round-robin stage to determine the final rankings.",
            image: "/images/events/description/chess.webp",
            icon: <FaBook />,
          },
          {
            name: "Rounds",
            content: [
              {
                round: "Round 1 – Online (King of the Hill)",
                content:
                  "Participants: approx. Half of all applicants\\nVariant: King of the Hill\\nFormat: Swiss\\nQualification: Top 13 qualify in to the Round 3(Offline round)",
              },
              {
                round: "Round 2 – Online (Fischer Random / Chess960)",
                content:
                  "Participants: approx. Half of all applicants\\nVariant: Fischer Random (Chess960)\\nFormat: Swiss\\nQualification: Top 13 qualify in to the Round 3(Offline round)",
              },
              {
                round: "Round 3 – Offline (Traditional Chess)",
                content:
                  "Participants: 26\\nVariant: Standard Chess\\nFormat: Swiss\\nFinal rankings will be decided based on points and tie-breaks\\nTop performers will be declared as winners\\n\\nChess Format:\\nOnline Rounds Will Feature Chess Variants to Test Creativity and Adaptability.\\nThe Offline Round Will Strictly Follow Standard Chess Rules to Ensure Fairness and Accurate Ranking.",
              },
            ],
            icon: <GiWhistle />,
          },
          {
            name: "Rules",
            content: [
              "Fair-Play Rules Will Be Strictly Enforced During Online Rounds.",
              "Any Form of Cheating Will Result in Immediate Disqualification.",
              "Players Must Report on Time for Offline Matches.",
              "The Decision of The Organizers and Judges Will Be Final and Binding.",
              "Participants Must Register in The Event’s Unstop Page.",
            ],
            icon: <GiScrollUnfurled />,
          },
          {
            name: "Schedule",
            content: [
              {
                name: "Round 1 – Online (King of the Hill)",
                date: "February 22, 2026",
                time: "09:00 AM - 12:30 PM IST",
                location: "Online",
              },
              {
                name: "Round 2 – Online (Fischer Random / Chess960)",
                date: "March 1, 2026",
                time: "09:00 AM - 12:30 PM IST",
                location: "Online",
              },
              {
                name: "Round 3 – Offline (Traditional Chess)",
                date: "March 9, 2026",
                time: "09:30 AM - 03:30 PM IST",
                location: "CEG Campus, Anna University, Guindy, Chennai",
              },
            ],
            icon: <FaClock />,
          },
          {
            name: "Prize",
            prize: "12000 INR",
            entry: "TBD",
            icon: <FaMoneyBill />,
          },
          {
            name: "Contact",
            content: [
              {
                name: "Ezhil Jeevana S",
                number: "6369642347",
              },
              {
                name: "Naveen Kumar M",
                number: "9655564407",
              },
              {
                name: "Mohammed Abdul Hameed",
                number: "6381359628",
              },
            ],
            icon: <IoPhonePortrait />,
          },
        ],
      },
      {
        name: "Artistry Unlocked - Drawing Event",
        email: "events@cegtechforum.in",
        isEventOpened: true,
        type: "General",
        code: "GENERALREGISTRATION",
        to: "artistry-unlocked",
        tag: "Unlock Your Creativity",
        eventInfo: [
          {
            name: "Description",
            content:
              "This is a team-based drawing competition designed to test creativity, imagination, and coordination under time constraints. In the first round, teams connect randomly chosen objects through pencil drawings, encouraging spontaneous visual thinking. The second round introduces a theme-based challenge with an auction system, adding strategy to the creative process.\\n\\nTeam members draw individually without interaction for fixed durations, followed by a brief collaborative phase. The event blends art, strategy, and teamwork into a unique creative experience.",
            image: "/images/events/description/artistry.webp",
            icon: <FaBook />,
          },
          {
            name: "Rounds",
            content: [
              {
                round: "Round 1: Connect with Pencil Drawing",
                content:
                  "Time: 25 minutes\\nMode: Team-based pencil drawing\\nEach team will randomly pick two object slips from a jar.\\nTeams must creatively connect both objects and draw a single illustration.\\nOnly pencil drawing is allowed (no colors).",
              },
              {
                round: "Round 2: Bid, Draw, Collaborate",
                content:
                  "Total teams: 10\\nEach team is allotted 50 points initially.\\n7 themes will be displayed at the beginning of the round.\\n\\nAuction Rules:\\nEach theme has a base price of 30 points.\\nTeams can bid using their points.\\nThe highest bidder wins the theme.\\nTeams that do not win any theme will receive a random theme at a base price of 40 points.\\n\\nDrawing Rules:\\nRemaining points after the auction are converted into extra drawing time.\\nConversion rate: 1 point = 1 extra minute.\\nBase drawing time: 50 minutes.\\nOnly one team member can draw at a time for 10 minutes.\\nThe other member must wait in a separate room with no interaction.\\nLast 5 minutes: both team members may draw together.",
              },
            ],
            icon: <GiWhistle />,
          },
          {
            name: "Rules",
            content: [
              "Each team must consist of two members and participate together in both rounds.",
              "Registration is mandatory for all participants.",
              "Only materials provided by the organizers are allowed.",
              "Mobile phones and reference materials are strictly prohibited.",
              "Participants must follow the instructions of coordinators and judges.",
              "Any rule violation or misconduct will lead to disqualification.",
              "The judges’ decisions will be final and binding.",
            ],
            icon: <GiScrollUnfurled />,
          },
          {
            name: "Schedule",
            content: [
              {
                name: "Round 1",
                date: "March 7, 2026",
                time: "10:00 AM – 12:00 PM",
                location: "TBD",
              },
              {
                name: "Round 2",
                date: "March 7, 2026",
                time: "01:00 PM – 03:00 PM",
                location: "TBD",
              },
            ],
            icon: <FaClock />,
          },
          {
            name: "Prize",
            prize: "12000 INR",
            entry: "TBD",
            icon: <FaMoneyBill />,
          },
          {
            name: "Contact",
            content: [
              {
                name: "Balasubramani E",
                number: "9445688098",
              },
            ],
            icon: <IoPhonePortrait />,
          },
        ],
      },
      {
        name: "Poster Making",
        email: "events@cegtechforum.in",
        isEventOpened: true,
        type: "General",
        code: "GENERALREGISTRATION",
        to: "poster-making",
        tag: "Design. Create. Inspire.",
        eventInfo: [
          {
            name: "Description",
            content:
              "The Poster Making Event is designed to encourage creativity, visual communication, and critical thinking among participants. This event provides a platform for students to express ideas, messages, and themes through visually appealing and meaningful posters. Participants will compete for the winning position through a structured two-round evaluation process.",
            image: "/images/events/description/poster_making.webp",
            icon: <FaBook />,
          },
          {
            name: "Rounds",
            content: [
              {
                round: "Round 1 – Concept Clash",
                content:
                  "Participants: All registered participants\\nMode: Software-based (Canva, Adobe)\\nParticipants will design and present creative posters based on their own chosen themes. The poster should clearly convey the concept, message, originality, visual appeal, and relevance in an effective and engaging manner.\\nEvaluation Criteria: Creativity and Originality, Clarity of Message, Innovation, Neatness and Presentation.\\nTop 8 participants will be shortlisted for Round 2.",
              },
              {
                round: "Round 2 – Decode and Design (Final Round)",
                content:
                  "Participants: 8 shortlisted participants\\nMode: Software-based (Canva, Adobe)\\nParticipants will design a poster based on the given theme. The poster should effectively convey the message using creative visuals, colour combinations, and minimal text.\\nEvaluation Criteria: Adherence to the given topic, Design accuracy and completeness, Time management and completion, Technical accuracy.\\nOutcome: Winner, Runner-up, Second Runner-up.",
              },
            ],
            icon: <GiWhistle />,
          },
          {
            name: "Rules",
            content: [
              "Participants must be registered in advance for the event.",
              "Decisions made by the organizers will be final and binding.",
              "Every part of the poster must be created during the event. Previously made posters must not be submitted.",
              "Every participant must bring their own laptop with Canva (non-premium).",
              "No AI-generated posters will be accepted. If found, the participant will be eliminated.",
              "Only elements (if needed) for the poster can be taken from Google (not from AI tools).",
              "Using software other than the ones mentioned must be informed earlier to the organizers.",
              "Participants can also use the web version of Canva (must be informed earlier).",
              "Wi-Fi will be provided by the organizers.",
              "No exchange of laptops between participants. Everyone must participate using their own laptop.",
            ],
            icon: <GiScrollUnfurled />,
          },
          {
            name: "Schedule",
            content: [
              {
                name: "Round 1 – Concept Clash",
                date: "March 7, 2026",
                time: "10:00 AM - 12:30 PM",
                location: "TBD",
              },
              {
                name: "Round 2 – Decode and Design (Final Round)",
                date: "March 7, 2026",
                time: "01:30 PM - 03:30 PM",
                location: "TBD",
              },
            ],
            icon: <FaClock />,
          },
          {
            name: "Prize",
            prize: "12000 INR",
            entry: "TBD",
            icon: <FaMoneyBill />,
          },
          {
            name: "Contact",
            content: [
              {
                name: "Naveen S P",
                number: "6374553133",
              },
              {
                name: "Saravanan B S",
                number: "8015071453",
              },
              {
                name: "Sweetha",
                number: "9943516169",
              },
            ],
            icon: <IoPhonePortrait />,
          },
        ],
      },
      {
        name: "The Viewport – 3D Video Rendering",
        email: "viewport@cegtechforum.in",
        isEventOpened: true,
        type: "Online",
        code: "GENERALREGISTRATION",
        to: "the-viewport",
        tag: "Render the future.",
        eventInfo: [
          {
            name: "Description",
            content:
              "The Viewport challenges digital artists to build the world of tomorrow using the machinery of the past. In this online 3D animation contest, participants must use industry-standard tools (Blender, Maya, Unreal Engine, Houdini, C4D) to create a stunning video sequence based on Steampunk, Cyberpunk, and Solarpunk themes. Fuel your creativity and let the rendering begin!",
            image: "/images/events/description/viewport.webp",
            icon: <FaBook />,
          },
          {
            name: "Format",
            content: [
              "Category: 3D Animation / Rendering",
              "Mode: Online Submission",
              "Duration: Submission window open for 1 Week (Feb 25 - Mar 4)",
              "Structure: 30-60 second animated loop/story.",
            ],
            icon: <GiWhistle />,
          },
          {
            name: "Submission",
            content: [
              "Upload final rendered video (30-60s) AND Proof of Work (wireframe/clay render) to personal Google Drive.",
              "Set Drive access to 'Anyone with the link can view'.",
              "Create a single PDF with: Name, College & Dept, Contact Number, Drive Link.",
              "Upload PDF to official portal.",
              "Privacy: Link used only for evaluation.",
            ],
            icon: <GiScrollUnfurled />,
          },
          {
            name: "Rules",
            content: [
              "Team: 1-2 Members.",
              "Format: PDF submission only. Direct video uploads rejected.",
              "Link Accessibility: Broken/Restricted links = Disqualification.",
              "Originality: Main animation/models must be original. Pre-made assets allowed for background only.",
              "No AI Slop: AI Generated Content strictly prohibited.",
            ],
            icon: <GiScrollUnfurled />,
          },
          {
            name: "Schedule",
            content: [
              {
                name: "Submission Window",
                date: "Feb 25 - Mar 4, 2026",
                time: "Online",
                location: "Unstop / Official Portal",
              },
            ],
            icon: <FaClock />,
          },
          {
            name: "Prize",
            prize: "10,000 INR",
            entry: "TBD",
            icon: <FaMoneyBill />,
          },
          {
            name: "Contact",
            content: [
              {
                name: "Purushothaman S",
                number: "9487022210",
              },
              {
                name: "Vijay K G",
                number: "8438938916",
              },
            ],
            icon: <IoPhonePortrait />,
          },
        ],
      },
      {
        name: "Neon Wallstreet",
        email: mailid,
        isEventOpened: true,
        type: "Online",
        code: "ONLINEREGISTRATION",
        to: "neon-wallstreet",
        tag: "Rule the Neon Market",
        eventInfo: [
          {
            name: "Description",
            content:
              "Neon Wallstreet provides participants with the ultimate opportunity to test their financial instincts in a hyper-realistic, futuristic stock market simulation. Set in a neon-drenched digital metropolis, participants start with a base amount of \"Credits\" (Eddies) to buy and sell stocks.\\n\\nThe goal is to maximize profits and build the most valuable portfolio. However, the market is volatile; stock prices will dynamically fluctuate based on live \"News Flashes\" and updates displayed on the event website, simulating corporate takeovers, cyber-hacks, and economic shifts. Participants must analyze these updates, make split-second trading decisions, and justify their logic to rule the market.",
            image: "/images/events/description/neon_wallstreet.webp",
            icon: <FaChartLine />,
          },
          {
            name: "Rounds",
            content: [
              {
                round: "The Trading Floor",
                content:
                  "This single round spans 2 days and is conducted entirely online.\\nOpen Access: Participants can jack into the system (start playing) at any time during the 2-day duration.\\nSimultaneous Conclusion: Regardless of when a participant starts, the market closes and the event concludes simultaneously for everyone at the end of the second day.\\nGameplay: Participants track live news feeds on the dashboard and execute buy/sell orders to capitalize on market movements.\\nCurrency used: Eddies",
              },
            ],
            icon: <GiWhistle />,
          },
          {
            name: "Rules",
            content: [
              "Participants must analyze updates and make trading decisions to maximize portfolio value.",
              "The event is a continuous online simulation spanning 2 days.",
              "Participants can join at any time, but the market closes simultaneously for everyone.",
              "Companies and Corporations mentioned in the contest are entirely fictional.",
              "Participants must be aware of the fictional scenario and play responsibly.",
            ],
            icon: <GiScrollUnfurled />,
          },
          {
            name: "Schedule",
            content: [
              {
                name: "The Trading Floor",
                date: "March 2, 2026 - March 4, 2026",
                time: "12:01 AM (Mar 2) to 11:59 PM (Mar 4)",
                location: "Online / Unstop Platform",
              },
            ],
            icon: <FaClock />,
          },
          {
            name: "Prize",
            prize: "10000 INR",
            entry: "Free",
            icon: <FaMoneyBill />,
          },
          {
            name: "Contact",
            content: [
              {
                name: "Purushothaman S",
                number: "9487022210",
              },
              {
                name: "Vijay K G",
                number: "8438938916",
              },
              {
                name: "Lakshmi Praba S",
                number: "9025394304",
              },
            ],
            icon: <IoPhonePortrait />,
          },
        ],
      },
    ],
  },
  {
    name: "robotics",
    description:
      "Witness the future of automation and artificial intelligence as machines come to life. Compete in high-octane battles, intricate challenges, and innovative designs in our robotics events.",
    to: "robotics",
    icon: <FaRobot />,
    events: [
      {
        name: "Robosoccer",
        email: "robosoccer@cegtechforum.in",
        isEventOpened: true,
        type: "Iconic",
        code: "GENERALREGISTRATION",
        to: "robosoccer",
        tag: "Bend it like Bot-ham",
        eventInfo: [
          {
            name: "Description",
            content:
              "Robo Soccer is a competitive robotics event where teams design and operate soccer-playing robots to compete in a fast-paced match on a miniature arena. Participants must demonstrate innovation, mechanical design, control systems, and strategic gameplay to outscore their opponents.\\n\\nThe event emphasizes precision, teamwork, engineering efficiency, and fair play in a dynamic and engaging environment.",
            image: "/images/events/description/robosoccer.webp",
            icon: <FaBook />,
          },
          {
            name: "Rounds",
            content: [
              {
                round: "Arena",
                content:
                  "A standard Robo Soccer arena will be used.",
              },
              {
                round: "Match Rules",
                content:
                  "Each match will have a duration of 5 minutes.\\nEach team will consist of 1 robot, controlled by team members.\\nThe first team to score 5 goals will be declared the winner.\\nIf neither team reaches 5 goals within 5 minutes, the team with the highest number of goals will win.\\nIn case of a tie, a sudden-death round or penalty round may be conducted (subject to the organizing committee’s decision).",
              },
              {
                round: "Bot Specifications",
                content:
                  "Each robot must fit within 30 cm (L × B × H) and must not exceed 3 kg in weight.\\nRobots may be wired or wireless and must be powered by a DC battery or external supply not exceeding 12V.\\nUse of IC engines or hydraulic systems is strictly prohibited.\\nModified combat (Robowars) bots are not allowed.\\nRobots must include suitable mechanisms for ball control and kicking within the mini arena.\\nAny robot causing intentional damage to opponents may be disqualified.",
              },
            ],
            icon: <GiWhistle />,
          },
          {
            name: "Rules",
            content: [
              "Teams must report at least 30 minutes before their scheduled match. Late reporting may result in disqualification or walkover.",
              "All robots must clear mandatory technical inspection before competing. No major modifications are allowed after approval.",
              "Only registered team members are allowed inside the arena. The team captain must communicate with officials.",
              "Signal interference, tampering with arena equipment, or intentional disruption of opponents is strictly prohibited.",
              "Manual handling of robots during active gameplay is not allowed unless instructed by the referee.",
              "Minor repairs may be permitted only with referee approval. Excessive delays may lead to forfeiture.",
              "The organizing committee is not responsible for any damage to robots during the event.",
              "Any form of unsportsmanlike conduct may result in a warning or disqualification.",
              "The decision of the referees and organizing committee will be final and binding.",
            ],
            icon: <GiScrollUnfurled />,
          },
          {
            name: "Schedule",
            content: [
              {
                name: "Robosoccer",
                date: "March 9, 2026",
                time: "10:00 AM - 04:00 PM IST",
                location: "CEG Campus, Anna University, Chennai",
              },
            ],
            icon: <FaClock />,
          },
          {
            name: "Prize",
            prize: "27000 INR",
            entry: "TBD",
            icon: <FaMoneyBill />,
          },
          {
            name: "Contact",
            content: [
              {
                name: "Janani L",
                number: "6384532416",
              },
              {
                name: "Keerthana S",
                number: "9092149598",
              },
              {
                name: "Vishnupriya M",
                number: "9345063517",
              },
            ],
            icon: <IoPhonePortrait />,
          },
        ],
      },
      {
        name: "MICROMOUSE - Maze Solver",
        email: "micromouse@cegtechforum.in",
        isEventOpened: true,
        type: "Iconic",
        code: "GENERALREGISTRATION",
        to: "micromouse",
        tag: "Solve the maze.",
        eventInfo: [
          {
            name: "Description",
            content:
              "Micromouse is an exciting robotics competition where participants design and build an autonomous robot capable of navigating a maze in the shortest possible time. The robot must independently find its way from the starting point to the destination without any external control. Participants will apply concepts of robotics, embedded systems, sensors, control algorithms, and programming to create an efficient maze-solving robot.",
            image: "/images/events/description/micromouse.webp",
            icon: <FaBook />,
          },
          {
            name: "Rounds",
            content: [
              {
                round: "Round 1",
                content:
                  "Participants will be provided with Maze 1 at the start. Max 3 trial runs. Best successful run time considered. Top teams advance to Round 2.",
              },
              {
                round: "Round 2",
                content:
                  "A new and more complex maze (Maze 2). No prior mapping allowed. Max 2 trial runs. Fastest successful run determines ranking.",
              },
            ],
            icon: <GiWhistle />,
          },
          {
            name: "Rules",
            content: [
              "Max 3 members per team.",
              "Robot must fit within 10 cm x 10 cm x 10 cm.",
              "Fully autonomous; no wireless communication allowed.",
              "Manual handling results in elimination.",
              "Any microcontroller allowed; only on-board power supply.",
              "Intentional damage to maze leads to disqualification.",
            ],
            icon: <GiScrollUnfurled />,
          },
          {
            name: "Schedule",
            content: [
              {
                name: "Round 1",
                date: "March 7, 2026",
                time: "09:00 AM - 12:30 PM",
                location: "TBD",
              },
              {
                name: "Round 2",
                date: "March 7, 2026",
                time: "12:30 PM - 04:30 PM",
                location: "TBD",
              },
            ],
            icon: <FaClock />,
          },
          {
            name: "Prize",
            prize: "27000 INR",
            entry: "TBD",
            icon: <FaMoneyBill />,
          },
          {
            name: "Contact",
            content: [
              {
                name: "Rama Chella Dharshani K",
                number: "9025687188",
              },
              {
                name: "Ratish",
                number: "9940999133",
              },
              {
                name: "Hameed",
                number: "TBD",
              },
            ],
            icon: <IoPhonePortrait />,
          },
        ],
      },
      {
        name: "Pac Bot",
        email: "pacbot@cegtechforum.in",
        isEventOpened: true,
        type: "Iconic",
        code: "GENERALREGISTRATION",
        to: "pac-bot",
        tag: "Chase or be chased.",
        eventInfo: [
          {
            name: "Description",
            content:
              "PAC BOT is an action-packed robotics challenge inspired by the classic arcade maze game. The arena consists of one PAC BOT and two GHOST BOTS. The goal of the PAC BOT is to navigate the maze strategically and avoid being caught, while the GHOST BOTS aim to track and tag the PAC BOT as quickly as possible. The event tests agility, control precision, and tactical thinking.",
            image: "/images/events/description/pacbot.webp",
            icon: <FaBook />,
          },
          {
            name: "Rounds",
            content: [
              {
                round: "Round 1",
                content:
                  "Each participant plays once as PAC BOT and twice as GHOST BOT. PAC BOT must avoid GHOST BOTS. Touch = Kill. 2 Halt Zones exist; reaching one pauses the linked Ghost Bot for 5s.",
              },
              {
                round: "Final Round",
                content:
                  "Teams selected in Round 1 will compete in Round 2 with the same rules.",
              },
            ],
            icon: <GiWhistle />,
          },
          {
            name: "Rules",
            content: [
              "Max 4 members per team.",
              "Robot dimensions: < 30x30x30 cm.",
              "Wired/Wireless allowed. No autonomous bots.",
              "Ghost Bots cannot coordinate.",
              "Wired bot operators must stay in control zones.",
              "Bonus: Pac Bot entering halt zone; Ghost Bot fastest capture.",
              "Fouls: Ghost collision, player violation, teaming up, maze collision.",
            ],
            icon: <GiScrollUnfurled />,
          },
          {
            name: "Schedule",
            content: [
              {
                name: "Round 1",
                date: "March 7, 2026",
                time: "09:00 AM - 12:00 PM",
                location: "TBD",
              },
              {
                name: "Final Round",
                date: "March 7, 2026",
                time: "12:30 PM - 04:30 PM",
                location: "TBD",
              },
            ],
            icon: <FaClock />,
          },
          {
            name: "Prize",
            prize: "27000 INR",
            entry: "TBD",
            icon: <FaMoneyBill />,
          },
          {
            name: "Contact",
            content: [
              {
                name: "Balaji",
                number: "8220706643",
              },
              {
                name: "Siva Sanjay S",
                number: "7871610716",
              },
            ],
            icon: <IoPhonePortrait />,
          },
        ],
      },
    ],
  },
  {
    name: "coding",
    description:
      "Unlock the power of code and logic. Dive into the world of algorithms, problem-solving, and efficient programming with our competitive coding events.",
    to: "coding",
    icon: <FaLaptopCode />,
    events: [
      {
        name: "Onsite Strategic Programming Challenge - OSPC",
        email: "ospc@cegtechforum.in",
        isEventOpened: true,
        type: "General",
        code: "GENERALREGISTRATION",
        to: "ospc",
        tag: "Code. Adapt. Conquer.",
        eventInfo: [
          {
            name: "Description",
            content:
              "The Onsite Strategic Programming Challenge (OSPC) is a competitive programming event designed to evaluate how participants think, decide, and adapt while solving algorithmic problems. Instead of focusing only on speed and correctness, OSPC emphasizes reasoning, planning, and strategic choices, similar to real-world programming scenarios where requirements change and resources are limited.",
            image: "/images/events/description/ospc.webp",
            icon: <FaBook />,
          },
          {
            name: "Rounds",
            content: [
              {
                round: "Round 1 – Written Strategy Test",
                content:
                  "Participants: All registered participants\\nMode: Offline, Pen-and-Paper\\nFormat: Output Tracing, Bug Identification, Algorithm Selection, Strategic MCQs.\\nDuration: 30 minutes.\\nNo negative marking.\\nPurpose: Evaluate programming fundamentals and logical reasoning without executing code.",
              },
              {
                round: "Round 2 – Algorithm Auction Arena",
                content:
                  "Participants: Top teams from Round 1\\nMode: Onsite, Coding + Bidding\\nDuration: 2 hours.\\nInitial Setup: 1000 virtual credits. Hidden algorithmic challenges.\\nGameplay:\\n1. Bidding: Teams bid credits to unlock problems.\\n2. Stages: Each problem has 3 stages (Basic Logic, Efficiency, Requirement Change).\\n3. Tokens: Teams can buy Block (5 min penalty for others), Reveal (hint), or Shield (protection) cards via lottery.\\nScoring: Based on credits remaining, rewards earned, stages completed, and efficiency.",
              },
            ],
            icon: <GiWhistle />,
          },
          {
            name: "Rules",
            content: [
              "Maximum two members per team.",
              "No mobile phones, smart devices, or external resources.",
              "Strict adherence to time limits.",
              "Valid Kurukshetra ID required.",
              "Team members cannot be changed after Round 1.",
              "Organizer decisions are final.",
            ],
            icon: <GiScrollUnfurled />,
          },
          {
            name: "Schedule",
            content: [
              {
                name: "Round 1",
                date: "March 7, 2026",
                time: "10:00 AM - 12:30 PM",
                location: "TBD",
              },
              {
                name: "Round 2",
                date: "March 7, 2026",
                time: "01:30 PM - 03:30 PM",
                location: "TBD",
              },
            ],
            icon: <FaClock />,
          },
          {
            name: "Prize",
            prize: "12000 INR",
            entry: "TBD",
            icon: <FaMoneyBill />,
          },
          {
            name: "Contact",
            content: [
              {
                name: "Guharaj T G M",
                number: "9994271835",
              },
              {
                name: "Sri Aishwarya M",
                number: "8825775704",
              },
            ],
            icon: <IoPhonePortrait />,
          },
        ],
      },
    ],
  },
];

export const generalRegistration = {
  name: "",
  noOfEvents: 0,
  to: "",
  events: [
    {
      name: "",
      email: "",
      type: "",
      to: "",
      catTo: "",
      tag: "",
      code: "",
    },
  ],
};

export const closedEvents = [];
