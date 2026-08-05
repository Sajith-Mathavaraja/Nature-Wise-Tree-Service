import { useState, useEffect } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  Phone,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Home,
  User,
  Trees,
  ShieldCheck,
  Star,
  MapPin
} from "lucide-react";
import { siteData } from "../data/siteData";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll detection to toggle sticky styling (deferred past first paint to prevent initial forced reflow)
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    let rafId = requestAnimationFrame(() => {
      window.addEventListener("scroll", handleScroll, { passive: true });
    });
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Close mobile menu on Escape key press (Accessibility)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const getSubpageLabel = () => {
    if (location.pathname === "/privacy-policy") return "Privacy Policy";
    if (location.pathname === "/terms") return "Terms & Conditions";
    return "";
  };

  const navLinks = [
    { name: "Home", path: "home", angle: 160, label: "Home", icon: Home },
    { name: "About", path: "about", angle: 132, label: "About Us", icon: User },
    { name: "Services", path: "services", angle: 104, label: "Our Services", icon: Trees },
    { name: "Why Us", path: "why-choose-us", angle: 76, label: "Why Choose Us", icon: ShieldCheck },
    { name: "Reviews", path: "reviews", angle: 48, label: "Customer Reviews", icon: Star },
    { name: "Contact", path: "contact", angle: 20, label: "Contact Us", icon: Phone }
  ];

  const [activeSection, setActiveSection] = useState(location.pathname === "/" ? "home" : "");

  // Track active section on scroll dynamically using a high-performance IntersectionObserver
  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSection("");
      return;
    }

    const sections = ["home", "about", "services", "why-choose-us", "reviews", "contact"];
    let observer;
    let timerId;
    
    const observerCallback = (entries) => {
      const visibleEntry = entries.find(entry => entry.isIntersecting);
      if (visibleEntry) {
        setActiveSection(visibleEntry.target.id);
      }
    };

    // Defer element lookup to post-paint frame to avoid forced reflow on initial mount
    timerId = requestAnimationFrame(() => {
      observer = new IntersectionObserver(observerCallback, {
        root: null,
        rootMargin: "-25% 0px -45% 0px",
        threshold: [0, 0.1, 0.2]
      });

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          observer.observe(el);
        }
      });
    });

    return () => {
      cancelAnimationFrame(timerId);
      if (observer) observer.disconnect();
    };
  }, [location.pathname]);

  const currentIdx = navLinks.findIndex(link => link.path === activeSection);
  const activeAngle = navLinks[currentIdx === -1 ? 0 : currentIdx].angle;
  const wheelRotation = 90 - activeAngle;

  const handleLinkClick = (e, path) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (path === "contact") {
      window.dispatchEvent(new CustomEvent("load-lead-form"));
    }

    // If on a legal subpage, go back to home first
    if (location.pathname !== "/") {
      navigate("/");
      // After navigating, scroll to the section
      setTimeout(() => {
        const el = document.getElementById(path);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 300);
      return;
    }

    if (path === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(path);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const spinNext = () => {
    const nextIdx = (currentIdx + 1) % navLinks.length;
    handleLinkClick({ preventDefault: () => {} }, navLinks[nextIdx].path);
  };

  const spinPrev = () => {
    const prevIdx = (currentIdx - 1 + navLinks.length) % navLinks.length;
    handleLinkClick({ preventDefault: () => {} }, navLinks[prevIdx].path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isMobileMenuOpen
          ? "bg-[#203322]"
          : `glass ${isScrolled ? "shadow-md py-3" : "shadow-sm py-4"}`
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg shrink-0"
            aria-label="Nature Wise Tree Service Home"
          >
            {/* Custom Logo Image */}
            <img
              src={`${import.meta.env.BASE_URL}images/logo.webp`}
              alt="Nature Wise Tree Service Logo"
              className="w-10 h-10 object-contain rounded-full shadow-sm border border-border-custom transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col text-left">
              <span className={`text-lg font-extrabold tracking-tight leading-none ${isMobileMenuOpen ? "text-white" : "text-heading"}`}>
                NATURE WISE
              </span>
              <span className={`text-[10px] font-bold tracking-widest uppercase leading-none mt-0.5 ${isMobileMenuOpen ? "text-secondary" : "text-primary"}`}>
                TREE SERVICE
              </span>
            </div>
          </Link>

          {/* Reserved Spacer for Absolute Navigation Wheel (forces logo left, CTAs right) */}
          <div className="hidden lg:block w-[470px] h-[75px] shrink-0 pointer-events-none transition-all duration-300"></div>

          {/* Desktop Circular Spinning Navigation Wheel (Absolute Centered & Resized) */}
          <div
            className="hidden lg:flex items-center justify-center absolute left-1/2 -translate-x-1/2 select-none pointer-events-none z-20 transition-all duration-500 w-[470px] h-[75px] top-1/2 -translate-y-1/2 scale-100 opacity-100"
          >
            {/* Spinning Controls (Left / Right buttons) */}
            <button
              onClick={spinPrev}
              className="absolute left-0 p-2.5 rounded-full bg-card hover:bg-[#E3EEE2] border border-border-custom hover-lift text-primary shadow-sm pointer-events-auto touch-target focus:outline-none focus:ring-2 focus:ring-primary z-30 cursor-pointer"
              aria-label="Spin menu left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Visual Rotating Wheel Container */}
            <div className="absolute left-1/2 -translate-x-1/2 w-[360px] h-[360px] pointer-events-none top-[-220px] z-10">
              {/* Outer rotating wheel frame */}
              <div
                className="w-full h-full rounded-full border-2 border-dashed border-primary/50 relative transition-transform duration-800 pointer-events-auto"
                style={{
                  transform: `rotate(${wheelRotation}deg)`,
                  transformOrigin: "center center",
                  transitionTimingFunction: "cubic-bezier(0.25, 1, 0.5, 1)"
                }}
              >
                {/* Circular track visual indicator */}
                <div className="w-[340px] h-[340px] rounded-full border-2 border-primary/35 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

                {/* Spaced Page Nodes */}
                {navLinks.map((link, idx) => {
                  const isActive = link.path === activeSection;
                  const radius = 170; // radius of placing nodes
                  const LinkIcon = link.icon;
                  
                  return (
                    <a
                      key={link.path}
                      href={`#${link.path}`}
                      onClick={(e) => handleLinkClick(e, link.path)}
                      aria-label={link.label}
                      className={`absolute w-11 h-11 rounded-full flex flex-col items-center justify-center text-center font-extrabold shadow-sm transition-all duration-500 border focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer ${
                        isActive
                          ? "bg-primary border-secondary text-secondary scale-105 shadow-md ring-4 ring-primary/25"
                          : "bg-card border-border-custom text-heading hover:bg-[#E3EEE2] hover:border-primary hover:text-primary"
                      }`}
                      style={{
                        left: "50%",
                        top: "50%",
                        transform: `translate(-50%, -50%) rotate(${link.angle}deg) translate(${radius}px) rotate(${-link.angle - wheelRotation}deg)`,
                        transformOrigin: "center center"
                      }}
                    >
                      <LinkIcon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            <button
              onClick={spinNext}
              className="absolute right-0 p-2.5 rounded-full bg-card hover:bg-[#E3EEE2] border border-border-custom hover-lift text-primary shadow-sm pointer-events-auto touch-target focus:outline-none focus:ring-2 focus:ring-primary z-30 cursor-pointer"
              aria-label="Spin menu right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            
            {/* Active label display */}
            {location.pathname === "/" ? (
              <div className="absolute bottom-[-16px] left-1/2 -translate-x-1/2 bg-secondary/15 text-primary text-[9px] font-black tracking-widest uppercase px-2.5 py-0.5 rounded-full border border-secondary/20 z-25 font-black">
                {navLinks[currentIdx === -1 ? 0 : currentIdx].label}
              </div>
            ) : (
              <div className="absolute bottom-[-16px] left-1/2 -translate-x-1/2 bg-primary/10 text-primary text-[9px] font-black tracking-widest uppercase px-2.5 py-0.5 rounded-full border border-primary/20 z-25 font-black">
                {getSubpageLabel()}
              </div>
            )}
          </div>
          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${siteData.phoneFormatted}`}
              className="flex items-center gap-2 text-heading hover:text-primary font-bold text-sm transition-colors touch-target focus:outline-none focus:ring-2 focus:ring-primary rounded-lg px-2"
            >
              <Phone className="w-4 h-4 text-secondary" />
              <span>{siteData.phone}</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "contact")}
              className="bg-primary hover:bg-primary-dark text-white font-bold text-sm px-5 py-2.5 rounded-full hover-lift transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Get Free Estimate
            </a>
          </div>

          {/* Mobile Buttons */}
          <div className="flex lg:hidden items-center gap-2">
            {!isMobileMenuOpen && (
              <a
                href={`tel:${siteData.phoneFormatted}`}
                className="p-3 text-primary hover:text-primary-dark touch-target focus:outline-none focus:ring-2 focus:ring-primary rounded-full"
                aria-label={`Call Nature Wise Tree Service at ${siteData.phone}`}
              >
                <Phone className="w-6 h-6" />
              </a>
            )}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-3 hover:text-primary touch-target focus:outline-none focus:ring-2 focus:ring-primary rounded-full relative z-50 ${
                isMobileMenuOpen ? "text-white" : "text-heading"
              }`}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav-menu"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Full-Screen Mobile Navigation Overlay */}
      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs z-[9990] transition-opacity duration-300 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer Panel */}
          <div
            id="mobile-nav-menu"
            className="fixed right-0 top-0 bottom-0 w-[75vw] md:w-1/2 max-w-[320px] h-full flex flex-col justify-between p-6 shadow-2xl z-[9999] overflow-y-auto animate-slide-in lg:hidden"
            style={{ backgroundColor: "#203322" }}
          >
            {/* Top Panel */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-2 focus:outline-none"
                aria-label="Nature Wise Tree Service Home"
              >
                <img
                  src={`${import.meta.env.BASE_URL}images/logo.webp`}
                  alt="Nature Wise Tree Service Logo"
                  className="w-10 h-10 object-contain rounded-full border border-white/20"
                />
                <div className="flex flex-col text-left">
                  <span className="text-lg font-extrabold text-white leading-none">NATURE WISE</span>
                  <span className="text-[10px] font-bold text-secondary uppercase leading-none mt-0.5">TREE SERVICE</span>
                </div>
              </Link>
            </div>

            {/* Nav Items */}
            <nav className="flex flex-col gap-4 text-center py-6">
              {navLinks.map((link, idx) => {
                const LinkIcon = link.icon;
                const isActive = link.path === activeSection;
                return (
                  <a
                    key={link.path}
                    href={`#${link.path}`}
                    onClick={(e) => handleLinkClick(e, link.path)}
                    style={{ animationDelay: `${idx * 50}ms` }}
                    className={`text-2xl font-bold py-2 flex items-center justify-center gap-3 transition-all duration-300 animate-fade-up touch-target focus:outline-none ${
                      isActive ? "text-secondary scale-105 font-black" : "text-white/80 hover:text-white"
                    }`}
                  >
                    <LinkIcon className="w-6 h-6" />
                    <span>{link.label}</span>
                  </a>
                );
              })}
            </nav>

            {/* Bottom Actions */}
            <div className="border-t border-white/10 pt-6 flex flex-col gap-4">
              <a
                href={`tel:${siteData.phoneFormatted}`}
                className="flex items-center justify-center gap-3 bg-white/10 text-white font-bold py-3.5 px-6 rounded-full hover:bg-white/20 transition-all touch-target focus:outline-none"
              >
                <Phone className="w-5 h-5 text-secondary animate-pulse" />
                <span className="text-sm">{siteData.phone}</span>
              </a>
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, "contact")}
                className="flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/90 text-heading font-black py-4 px-6 rounded-full shadow-lg hover-lift transition-all touch-target focus:outline-none"
              >
                <Calendar className="w-5 h-5" />
                <span className="text-sm">Get Free Estimate</span>
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
