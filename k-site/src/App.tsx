import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/pages/Contact";
import ComingSoon from "@/pages/ComingSoon";
import Login from "./pages/Login";
import Register from "./pages/Register";
const comingSoonPaths = [
  "/accommodation",
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
      <Navbar />

      <Routes>
        {/* Visible pages */}
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />

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
        <Route
          path="/technovation"
          element={
            <ExternalRedirect url="https://unstop.com/p/technovation-kurukshetra-2026-anna-university-ceg-tech-forum-1628748?utm_medium=Share&utm_source=vhcnzgkj55361&utm_campaign=Competitions" />
          }
        />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        {/* Catch all - NotFound */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
