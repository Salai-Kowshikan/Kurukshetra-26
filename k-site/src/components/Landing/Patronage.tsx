type Patron = {
  title: string;
  description?: string;
  image?: string;
  isLogo?: boolean;
};

const patrons: Patron[] = [
  {
    title: "Certificate 1",
    image: "/api/placeholder/400/500",
    isLogo: false,
  },
  {
    title: "Certificate 2",
    image: "/api/placeholder/400/500",
    isLogo: false,
  },
  {
    title: "Certificate 3",
    image: "/api/placeholder/400/500",
    isLogo: false,
  },
  {
    title: "IEEE Computer Society",
    image: "/api/placeholder/200/100",
    isLogo: true,
  },
];

export default function Patronage() {
  return (
    <section className="w-full py-20 bg-[#0a0014]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2
          className="text-center text-purple-500 text-4xl md:text-5xl
                     font-heading tracking-wider mb-20"
        >
          Our Patronages & Certificates
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10
                        justify-items-center max-w-5xl mx-auto">
          {patrons.map((patron, index) => (
            <div
              key={index}
              className="group relative bg-transparent
                         border-2 border-purple-500 rounded-3xl
                         p-8 flex items-center justify-center
                         hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]
                         transition-all duration-300
                         aspect-[3/4] w-full max-w-sm mx-auto"
            >
              {patron.isLogo ? (
                <img
                  src={patron.image}
                  alt={patron.title}
                  className="max-w-full max-h-32 object-contain"
                />
              ) : (
                <img
                  src={patron.image}
                  alt={patron.title}
                  className="max-w-full max-h-full object-contain rounded-xl
                             shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                />
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
