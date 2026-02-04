import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/pages/Contact";
import ComingSoon from "@/pages/ComingSoon";

const comingSoonPaths = [
  "/accommodation",
  "/login",
  "/register",
  "/workshops",
  "/guest-lectures",
];

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
            <Navigate
              to="https://unstop.com/college-fests/kurukshetra-2026-anna-university-ceg-tech-forum-436664"
              replace
            />
          }
        />
        <Route
          path="/technovation"
          element={
            <Navigate
              to="https://unstop.com/p/technovation-kurukshetra-2026-anna-university-ceg-tech-forum-1628748?utm_medium=Share&utm_source=vhcnzgkj55361&utm_campaign=Competitions"
              replace
            />
          }
        />

        {/* Catch all - NotFound */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
