import { useState, useEffect } from "react";
import MagicBento from "./MagicBento";
import {
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaCommentDots,
  FaBuilding,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaChevronDown,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

type FormData = {
  name: string;
  mobile: string;
  email: string;
  company: string;
  message: string;
  type: "query" | "collaborate";
};

const Contact = () => {
  const [open, setOpen] = useState(true);
  const [activeTab, setActiveTab] = useState<"query" | "collaborate">("query");
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

  const [formData, setFormData] = useState<FormData>({
    name: "",
    mobile: "",
    email: "",
    company: "",
    message: "",
    type: "query",
  });

  // const handleChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({ ...prev, [name]: value }));
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const output = {
      ...formData,
      type: activeTab,
    };

    console.log("Form Data:");
    console.log(JSON.stringify(output, null, 2));

    // Submit to FormSubmit
    try {
      const formElement = e.currentTarget as HTMLFormElement;
      const formDataToSubmit = new FormData(formElement);

      await fetch("https://formsubmit.co/hr@cegtechforum.in", {
        method: "POST",
        body: formDataToSubmit,
      });
    } catch (error) {
      console.error("Form submission error:", error);
    }

    // Reset form after submission
    setFormData({
      name: "",
      mobile: "",
      email: "",
      company: "",
      message: "",
      type: "query",
    });
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center px-3 sm:px-4 pt-28 sm:pt-24 pb-8 sm:pb-16 font-(family-name:--orbitron) overflow-hidden"
    >
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/15 to-black/15 z-[1]" /> */}

      <MagicBento
        className="z-[2]"
        textAutoHide={true}
        enableStars
        enableSpotlight
        enableBorderGlow={true}
        enableTilt={false}
        clickEffect
        spotlightRadius={100}
        particleCount={12}
        glowColor="132, 0, 255"
        disableAnimations={false}
      />

      <div className="relative z-10 w-full max-w-[1140px] grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-stretch mt-4 sm:mt-0">
        {/* LEFT PANEL */}
        <div className="rounded-[20px] sm:rounded-[28px] border border-white/50 backdrop-blur-xs shadow-[0_0_40px_rgba(140,0,255,0.25)] p-4 sm:p-6 md:p-8 w-full md:max-w-[540px] md:justify-self-start flex flex-col h-full">
          <div className="flex flex-col gap-4 h-full">
            <div className={`relative ${glitch ? "glitch-active" : ""}`}>
              <h2
                className="sponsor-glitch text-base sm:text-lg font-semibold text-white tracking-widest"
                data-text="CONNECT"
              >
                CONNECT
              </h2>
            </div>


            {/* Social Icons */}
            <div className="flex gap-3 sm:gap-4 mt-1 flex-wrap justify-center sm:justify-start">
              {[
                { icon: <FaEnvelope />, url: "mailto:hr@cegtechforum.in" },
                { icon: <FaFacebookF />, url: "https://www.facebook.com/kurukshetraceg.org.in/" },
                { icon: <FaInstagram />, url: "https://www.instagram.com/kurukshetra_ceg/" },
                { icon: <FaXTwitter />, url: "https://x.com/kurukshetra_ceg" },
                { icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/cegtechforum/" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 text-sm sm:text-base md:text-lg box-border flex items-center justify-center border border-white/50 text-white rounded-full backdrop-blur-xs hover:border-[#8A05FF] hover:bg-[#8A05FF] hover:text-white hover:shadow-[0_0_18px_rgba(138,5,255,0.8)] transition-all duration-200"
                >
                  {item.icon}
                </a>
              ))}
            </div>

            {/* Map Embed */}
            <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-white/25 bg-black/5 mt-1 backdrop-blur-sm">
              <iframe
                title="map"
                src="https://maps.google.com/maps?q=CEG%20Tech%20Forum&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-48 sm:h-52 md:h-60"
              />
            </div>



            {/* Contact Info */}
            <div className="mt-4 backdrop-blur-xs border border-white/50 rounded-xl sm:rounded-2xl text-white overflow-hidden">

              {/* Header Bar */}
              <button
                onClick={() => setOpen(!open)}
                className={`w-full flex justify-between items-center px-4 sm:px-5 py-2.5 sm:py-3 rounded-t-xl sm:rounded-t-2xl text-white font-medium text-sm sm:text-base ${open ? "text-[#FF00B3]" : "text-white"}`}
              >
                <span className="text-left pr-2">General Inquiries [HR]:</span>
                <FaChevronDown
                  className={`transition-transform duration-300 flex-shrink-0 ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Expandable Content */}
              <div
                className={`transition-all duration-300 ease-in-out ${
                  open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden border-t border-white/10`}
              >
                <div className="px-4 sm:px-5 py-3 sm:py-4 text-xs sm:text-sm space-y-2 sm:space-y-3">
                  
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                    <span>Madhan R</span>
                    <a href="tel:+916383747371" className="text-white/90 hover:text-white">+91 63837 47371</a>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                    <span>Vinothini K</span>
                    <a href="tel:+916381744539" className="text-white/90 hover:text-white">+91 63817 44539</a>
                  </div>

                  <div className="flex justify-start sm:justify-end pt-2">
                    <a href="mailto:hr@cegtechforum.in" className="text-white/90 hover:text-white break-all">hr@cegtechforum.in</a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="rounded-[20px] sm:rounded-[28px] border border-white/50 backdrop-blur-xs shadow-[0_0_40px_rgba(140,0,255,0.25)] p-4 sm:p-6 md:p-8 w-full md:max-w-[540px] md:justify-self-end flex flex-col h-full">
          <div className={`relative ${glitch ? "glitch-active" : ""}`}>
            <h2
              className="sponsor-glitch text-base sm:text-lg md:text-xl font-semibold mb-4 sm:mb-5 tracking-widest text-white"
              data-text="CONTACT US"
            >
              CONTACT US
            </h2>
          </div>

          {/* Tabs */}
          <div className="flex rounded-full mb-4 sm:mb-6 p-1 sm:p-1.5 border border-white/50">
            <button
              onClick={() => {
                setActiveTab("query");
                setFormData((prev) => ({
                  ...prev,
                  type: "query",
                  company: "",
                }));
              }}
              className={`flex-1 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm transition ${
                activeTab === "query"
                  ? "bg-[#7a28ff] text-white shadow-[inset_0_0_8px_rgba(255,255,255,0.2),0_0_12px_rgba(122,40,255,0.6)]"
                  : "text-white"
              }`}
            >
              Query
            </button>

            <button
              onClick={() => {
                setActiveTab("collaborate");
                setFormData((prev) => ({ ...prev, type: "collaborate" }));
              }}
              className={`flex-1 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm transition ${
                activeTab === "collaborate"
                  ? "bg-[#7a28ff] text-white shadow-[inset_0_0_8px_rgba(255,255,255,0.2),0_0_12px_rgba(122,40,255,0.6)]"
                  : "text-white"
              }`}
            >
              Collaborate
            </button>
          </div>

          {/* Form */}
          <form
            id="contact-form"
            onSubmit={handleSubmit}
            className="space-y-4 flex-1 flex flex-col"
          >
            {/* FormSubmit config */}
            <input
              type="hidden"
              name="_subject"
              value="New K!26 Form Submission"
            />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <div className="space-y-3 sm:space-y-4">
              {/* Name */}
              <div className="flex items-center rounded-full px-4 sm:px-5 py-2 sm:py-2.5 border border-white/50">
                <FaUser className="text-white mr-2 sm:mr-3 flex-shrink-0 text-sm sm:text-base" />
                <input
                  type="text"
                  name="Name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }))
                  }
                  required
                  className="bg-transparent outline-none text-white/90 text-sm sm:text-base w-full placeholder:text-white/70"
                />
              </div>

              {/* Mobile */}
              <div className="flex items-center rounded-full px-4 sm:px-5 py-2 sm:py-2.5 border border-white/50">
                <FaPhoneAlt className="text-white mr-2 sm:mr-3 flex-shrink-0 text-sm sm:text-base" />
                <input
                  type="tel"
                  name="Mobile"
                  placeholder="Mobile"
                  value={formData.mobile}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      mobile: e.target.value,
                    }))
                  }
                  required
                  pattern="[6-9]{1}[0-9]{9}"
                  maxLength={10}
                  title="Enter a valid 10-digit Indian mobile number"
                  className="bg-transparent outline-none text-white/90 text-sm sm:text-base w-full placeholder:text-white/70"
                />
              </div>

              {/* Email */}
              <div className="flex items-center rounded-full px-4 sm:px-5 py-2 sm:py-2.5 border border-white/50">
                <FaEnvelope className="text-white mr-2 sm:mr-3 flex-shrink-0 text-sm sm:text-base" />
                <input
                  type="email"
                  name="Email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                  required
                  className="bg-transparent outline-none text-white/90 text-sm sm:text-base w-full placeholder:text-white/70"
                />
              </div>

              {/* Company */}
              {activeTab === "collaborate" && (
                <div className="flex items-center rounded-full px-4 sm:px-5 py-2 sm:py-2.5 border border-white/50">
                  <FaBuilding className="mr-2 sm:mr-3 text-white text-sm sm:text-lg flex-shrink-0" />
                  <input
                    type="text"
                    name="Company"
                    placeholder="Company / Organization Name"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        company: e.target.value,
                      }))
                    }
                    required
                    className="bg-transparent outline-none text-white/90 text-sm sm:text-base w-full placeholder:text-white/70"
                  />
                </div>
              )}

              {/* Message */}
              <div className="flex rounded-[18px] sm:rounded-[22px] px-4 sm:px-5 py-2.5 sm:py-3 min-h-[120px] sm:min-h-[140px] border border-white/50">
                <FaCommentDots className="text-white mr-2 sm:mr-3 mt-1 flex-shrink-0 text-sm sm:text-base" />
                <textarea
                  name="Message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      message: e.target.value,
                    }))
                  }
                  required
                  className="bg-transparent outline-none text-white text-sm sm:text-base w-full resize-none placeholder:text-white/70"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="mt-4 sm:mt-6 w-full bg-[#7a28ff] text-white font-semibold py-3 sm:py-3.5 rounded-full hover:shadow-[0_0_24px_rgba(122,40,255,0.85)] transition text-sm sm:text-base"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

















