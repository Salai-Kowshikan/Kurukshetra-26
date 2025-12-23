type Patron = {
  title: string;
  description: string;
};

const patrons: Patron[] = [
  {
    title: "Academic Patron",
    description:
      "Institutional support fostering innovation, learning, and technical excellence.",
  },
  {
    title: "Industry Partner",
    description:
      "Strategic collaboration with industry leaders and innovators.",
  },
  {
    title: "Certification Partner",
    description:
      "Authorized certification and recognition for event participants.",
  },
];

export default function Patronage() {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-black via-[#12001f] to-black">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h3
          className="text-center text-[#b026ff] text-3xl md:text-4xl
                     font-heading tracking-widest mb-4"
        >
          Our Patronages
        </h3>

        <p className="text-center text-gray-300 font-body max-w-2xl mx-auto mb-14">
          We gratefully acknowledge the organizations and institutions whose
          patronage and support make Kurukshetra possible.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {patrons.map((patron, index) => (
            <div
              key={index}
              className="group relative bg-black/40 backdrop-blur-md
                         border border-[#b026ff]/40 rounded-xl p-8
                         hover:shadow-[0_0_25px_rgba(176,38,255,0.6)]
                         transition-all duration-300"
            >
              <div className="h-24 flex items-center justify-center mb-6">
                {/* Replace with <img /> when logos are available */}
                <div
                  className="w-24 h-24 rounded-full border border-[#b026ff]/40
                             flex items-center justify-center text-gray-500
                             font-body text-sm"
                >
                  LOGO
                </div>
              </div>

              <h4
                className="text-[#b026ff] font-heading text-sm tracking-widest
                           text-center mb-2"
              >
                {patron.title}
              </h4>

              <p className="text-gray-300 font-body text-sm text-center">
                {patron.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
