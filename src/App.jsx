import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

// Lazy loaded legal subpages only
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Terms = lazy(() => import("./pages/Terms"));

// Scroll restoration
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

// Loading fallback
function PageLoader() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F8FBF6]">
      <div className="relative flex items-center justify-center">
        <div className="absolute w-20 h-20 border-4 border-secondary/30 rounded-full animate-ping"></div>
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
      <p className="text-primary font-bold text-sm tracking-widest uppercase mt-6 animate-pulse">
        Nature Wise Tree Service...
      </p>
    </div>
  );
}

function MainContent() {
  return (
    <main className="flex-grow pt-20">
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </main>
  );
}

export default function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </Router>
  );
}
