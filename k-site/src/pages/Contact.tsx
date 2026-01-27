import { useState } from "react";
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

  const [formData, setFormData] = useState<FormData>({
    name: "",
    mobile: "",
    email: "",
    company: "",
    message: "",
    type: "query",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const output = {
      ...formData,
      type: activeTab,
    };

    console.log("Form Data:");
    console.log(JSON.stringify(output, null, 2));
  };

  return <div className="flex items-center justify-center min-h-screen px-4 py-8
bg-linear-to-b from-[#FF00B3] to-[#8A05FF] font-(family-name:--poppins)">

    <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 
bg-black/40 backdrop-blur-xl border border-white/10 
rounded-2xl p-4 mt-20 sm:p-6 text-white shadow-2xl">
      
      <div className="flex flex-col gap-6">

        <h2 className="text-base sm:text-lg font-semibold text-white">CONNECT</h2>

       {/* Social Icons */}
      <div className="flex gap-3">
        {[
          { icon: <FaEnvelope />, url: "mailto:info@cegtechforum.in" },
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
            className="w-10 h-10 sm:w-12 sm:h-12 text-sm sm:text-lg box-border flex items-center justify-center 
border border-transparent bg-black/70 rounded-lg 
hover:border-[3px] hover:border-[#8A05FF] 
hover:shadow-[0_0_14px_#8A05FF] transition-all duration-200"
          >
            {item.icon}
          </a>
        ))}
      </div>


        {/* Map Embed */}
        <div className="rounded-lg overflow-hidden border border-white/10">
          <iframe
            title="map"
            src="https://maps.google.com/maps?q=CEG%20Tech%20Forum&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-40 sm:h-52 md:h-60"
          />
        </div>

        {/* Contact Info */}
        <div className="backdrop-blur-md bg-transparent border border-white/20 rounded-lg text-white overflow-hidden">

          {/* Header Bar */}
          <button
            onClick={() => setOpen(!open)}
            className={`w-full flex justify-between items-center px-5 py-4 text-white-300 font-medium ${open ? "text-[#FF00B3]" : "text-white"}`}
          >
            <span>General Inquiries [HR]:</span>
            <FaChevronDown
              className={`transition-transform duration-300 ${
                open ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Expandable Content */}
          <div
            className={`transition-all duration-300 ease-in-out ${
              open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            } overflow-hidden`}
          >
            <div className="px-3 sm:px-5 py-3 sm:py-4 text-sm space-y-3">
              <div className="flex justify-between">
                <span>Vinothini K</span>
                <a href="tel:+916381744539">+91 63817 44539</a>
              </div>

              <div className="flex justify-between">
                <span>Madhan R</span>
                <a href="tel:+916383747371">+91 63837 47371</a>
              </div>
              <div className="flex justify-end pt-2">
                <a href="mailto:hr@cegtechforum.in" className="text-[#FF00B3]">hr@cegtechforum.in</a>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="bg-transparent backdrop-blur-lg rounded-xl p-4 sm:p-5 shadow-xl">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
            CONTACT US
          </h2>

          {/* Tabs */}
          <div className="flex bg-slate-900 rounded-lg mb-6 p-1">
            <button
              onClick={() => {
                setActiveTab("query");
                setFormData((prev) => ({ ...prev, type: "query", company: "" }));
              }}
              className={`flex-1 py-2 rounded-lg text-sm transition ${
                activeTab === "query"
                  ? "border-2 border-orange-400 text-orange-400"
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
              className={`flex-1 py-2 rounded-lg text-sm transition ${
                activeTab === "collaborate"
                  ? "border-2 border-orange-400 text-orange-400"
                  : "text-white"
              }`}
            >
              Collaborate
            </button>

          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div className="flex items-center bg-slate-900 rounded-lg px-3 py-2 sm:px-4 sm:py-3">
              <FaUser className="text-white mr-3" />
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="bg-transparent outline-none text-white text-sm w-full placeholder:text-white/60"
                required
              />
            </div>

            {/* Mobile */}
            <div className="flex items-center bg-slate-900 rounded-lg px-3 py-2 sm:px-4 sm:py-3">
              <FaPhoneAlt className="text-white mr-3" />
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="bg-transparent outline-none text-white text-sm w-full placeholder:text-white/60"
                required
              />
            </div>

            {/* Email */}
            <div className="flex items-center bg-slate-900 rounded-lg px-3 py-2 sm:px-4 sm:py-3">
              <FaEnvelope className="text-white mr-3" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="bg-transparent outline-none text-white text-sm w-full placeholder:text-white/60"
                required
              />
            </div>

            {/*Company*/}
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden
              ${
                activeTab === "collaborate"
                  ? "max-h-20 opacity-100 translate-y-0 mt-4"
                  : "max-h-0 opacity-0 -translate-y-4"
              }`}
            >
              <div className="flex items-center bg-slate-900 rounded-lg px-3 py-2 sm:px-4 sm:py-3">
                <FaBuilding className="mr-3 text-white text-lg" />
                <input
                  type="text"
                  name="company"
                  placeholder="Company / Organization Name"
                  value={formData.company}
                  onChange={handleChange}
                  className="bg-transparent outline-none text-white text-sm  w-full placeholder:text-white/60"
                  required={activeTab === "collaborate"}
                />
              </div>
            </div>

            {/* Message */}
            <div className="flex bg-slate-900 rounded-lg px-4 py-3 min-h-[100px] sm:min-h-[140px]">
              <FaCommentDots className="text-white mr-3 mt-1" />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="bg-transparent outline-none text-white text-sm w-full resize-none placeholder:text-white/60"
                required
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#FF00B3] text-white text-sm sm:text-base font-semibold py-2 sm:py-3 rounded-lg hover:bg-slate-900 transition"
            >
              Submit
            </button>
          </form>
        </div>
    </div>
  </div>;
}

export default Contact;