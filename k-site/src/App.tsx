import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Accommodation from "@/pages/Accommodation";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Contact from "@/pages/Contact";

//  NEW IMPORTS
import Events from "@/pages/Events";
import Workshops from "@/pages/Workshops";
import GuestLectures from "@/pages/GuestLectures";
import Technovation from "@/pages/Technovation";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/workshops" element={<Workshops />} />
        <Route path="/guest-lectures" element={<GuestLectures />} />
        <Route path="/technovation" element={<Technovation />} />

        <Route path="/accommodation" element={<Accommodation />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
