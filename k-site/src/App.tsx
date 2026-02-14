import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import { AuthProvider } from "@/context/AuthContext";
import { AppProvider } from "@/context/AppContext";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { Toaster } from "react-hot-toast";

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

const ExternalRedirect = ({ url }: { url: string }) => {
  useEffect(() => {
    window.location.href = url;
  }, [url]);
  return null;
};

function App() {
  const recaptchaKey = import.meta.env.VITE_GOOGLE_RECAPTCHA_SITE_KEY as string;
  const googleClientId = import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID as string;

  return (
    <Router>
      <GoogleReCaptchaProvider
        reCaptchaKey={recaptchaKey}
        scriptProps={{
          async: true,
          defer: true,
          appendTo: "head",
        }}
      >
        <GoogleOAuthProvider clientId={googleClientId}>
          <AppProvider>
            <AuthProvider>
              <Toaster position="top-center" />

              <Navbar />

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />

                {comingSoonPaths.map((path) => (
                  <Route key={path} path={path} element={<ComingSoon />} />
                ))}

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
                    <ExternalRedirect url="https://unstop.com/p/technovation-kurukshetra-2026-anna-university-ceg-tech-forum-1628748" />
                  }
                />

                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<NotFound />} />
              </Routes>

              <Footer />
            </AuthProvider>
          </AppProvider>
        </GoogleOAuthProvider>
      </GoogleReCaptchaProvider>
    </Router>
  );
}

export default App;
