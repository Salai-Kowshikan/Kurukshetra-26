import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Background from "@/components/technovation/Background";
import Contact from "@/pages/Contact";
import Accommodation from "@/pages/Accommodation";
import ComingSoon from "@/pages/ComingSoon";
import Sponsors from "@/pages/Sponsors";import Technovation from "./pages/Technovation";
import Terms from "@/pages/Terms";

const comingSoonPaths = [
  "/login",
  "/register",
  "/guest-lectures",
];

// External redirect component
const ExternalRedirect = ({ url }: { url: string }) => {
  useEffect(() => {
    window.location.href = url;
  }, [url]);
  return null;
};

function App() {
  return (
    <Router>
      {/* <div className="min-h-screen flex flex-col"> */}
        <Navbar />
        <Background />

      <Routes>
        {/* Visible pages */}
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/accommodation" element={<Accommodation />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/terms" element={<Terms />} />

            {/* Pages redirected to ComingSoon */}
            {comingSoonPaths.map((path) => (
              <Route key={path} path={path} element={<ComingSoon />} />
            ))}

            {/* External redirects to Unstop */}
            <Route
              path="/events"
              element={
                <ExternalRedirect url="https://unstop.com/college-fests/kurukshetra-2026-anna-university-ceg-tech-forum-436664" />
              }
            />
            <Route
              path="/workshops"
              element={
                <ExternalRedirect url="https://unstop.com/college-fests/kurukshetra-2026-anna-university-ceg-tech-forum-436664" />
              }
            />
            <Route path="/technovation" element={<Technovation />} />

            {/* Catch all - NotFound */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        {/* </main> */}

        <Footer />
      {/* </div> */}
    </Router>
  );
}

export default App;
