import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Background from "@/components/technovation/Background";
import MagicBento from "@/components/MagicBento";
import EventsNew from "./pages/EventsNew";
import Events from "./pages/Events";

// Lazy-loaded pages for code splitting
const Home = lazy(() => import("@/pages/Home"));
const Contact = lazy(() => import("@/pages/Contact"));
const Accommodation = lazy(() => import("@/pages/Accommodation"));
const Sponsors = lazy(() => import("@/pages/Sponsors"));
const Terms = lazy(() => import("@/pages/Terms"));
const Technovation = lazy(() => import("@/pages/Technovation"));
const ComingSoon = lazy(() => import("@/pages/ComingSoon"));
const NotFound = lazy(() => import("@/pages/NotFound"));

const COMING_SOON_PATHS = ["/login", "/register", "/guest-lectures"] as const;

const UNSTOP_URL =
  "https://unstop.com/college-fests/kurukshetra-2026-anna-university-ceg-tech-forum-436664";

/** Redirects to an external URL on mount. */
function ExternalRedirect({ url }: { url: string }) {
  useEffect(() => {
    window.location.href = url;
  }, [url]);
  return null;
}

/** Minimal loading fallback while lazy chunks load. */
function PageLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-violet-500 border-t-transparent" />
    </div>
  );
}

function App() {
  return (
    <Router>
      <MagicBento
        className="z-2"
        textAutoHide
        enableStars
        enableSpotlight
        enableBorderGlow
        clickEffect
        spotlightRadius={100}
        particleCount={12}
        glowColor="132, 0, 255"
      />

      <Navbar />
      <Background />

      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/accommodation" element={<Accommodation />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/technovation" element={<Technovation />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:eventName" element={<EventsNew />} />
        
          {COMING_SOON_PATHS.map((path) => (
            <Route key={path} path={path} element={<ComingSoon />} />
          ))}

          <Route
            path="/events"
            element={<ExternalRedirect url={UNSTOP_URL} />}
          />
          <Route
            path="/workshops"
            element={<ExternalRedirect url={UNSTOP_URL} />}
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      <Footer />
    </Router>
  );
}

export default App;
