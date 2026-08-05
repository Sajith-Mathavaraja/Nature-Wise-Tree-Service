import { Link, useNavigate, useLocation } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { siteData } from "../data/siteData";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = (e, path) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        if (path === "home") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          const el = document.getElementById(path);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    } else {
      if (path === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.getElementById(path);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  const handleScrollToTop = (e) => {
    e.preventDefault();
    handleLinkClick(e, "home");
  };

  return (
    <footer className="bg-[#203322] text-white/80 border-t border-[#6FAF4D]/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 border-b border-white/10 pb-12 mb-8">
          
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <a href="#home" onClick={(e) => handleLinkClick(e, "home")} className="flex items-center gap-2 group focus:outline-none">
              <img
                src="/images/logo.webp"
                alt="Nature Wise Tree Service Logo"
                className="w-10 h-10 object-contain rounded-full border border-white/20"
              />
              <div className="flex flex-col text-left">
                <span className="text-xl font-extrabold text-white tracking-tight leading-none">NATURE WISE</span>
                <span className="text-[11px] font-bold text-secondary tracking-widest uppercase leading-none mt-1">TREE SERVICE</span>
              </div>
            </a>
            <p className="text-sm leading-relaxed text-white/70 max-w-sm mt-2">
              Premium, nature-first arborist care. Protecting your property value, structural safety, and landscaping health with certified expertise and low-impact equipment.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a
                href={siteData.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-secondary hover:text-heading flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-secondary touch-target"
                aria-label="Visit Nature Wise Tree Service on Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.8z"/>
                </svg>
              </a>
              <a
                href={siteData.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-secondary hover:text-heading flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-secondary touch-target"
                aria-label="Visit Nature Wise Tree Service on Instagram"
              >
                <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a
                href={siteData.socials.yelp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-secondary hover:text-heading flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-secondary touch-target"
                aria-label="Visit Nature Wise Tree Service on Yelp"
              >
                {/* Yelp SVG path */}
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.22 13.91c-.08.57-.46.99-1 .99-.6 0-1.07-.49-1.07-1.09l.06-2.91c.01-.58.48-1.04 1.07-1.04s1.05.47 1.06 1.05l-.12 3zm.67-6.07c-.45.36-.91.24-1.28-.21l-1.92-2.18c-.37-.46-.3-1.12.16-1.49.46-.37 1.13-.3 1.5.17l1.78 2.3c.36.46.21 1.05-.24 1.41zm-5.74 3.01c-.58.07-.99-.33-1.06-.87l-.42-2.88c-.08-.58.33-1.1.91-1.17.58-.08 1.1.33 1.18.91l.3 2.91c.07.58-.33 1.03-.91 1.1zm8.01 1.49l-2.61-1.3c-.52-.26-.71-.89-.43-1.39.27-.5.9-.69 1.39-.41l2.45 1.51c.5.28.66.92.36 1.4-.29.47-.86.53-1.16.19z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-extrabold text-sm tracking-widest uppercase">Quick Links</h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li><a href="#home" onClick={(e) => handleLinkClick(e, "home")} className="hover:text-secondary hover:translate-x-1 inline-block transition-all focus:outline-none">Home</a></li>
              <li><a href="#about" onClick={(e) => handleLinkClick(e, "about")} className="hover:text-secondary hover:translate-x-1 inline-block transition-all focus:outline-none">About Us</a></li>
              <li><a href="#services" onClick={(e) => handleLinkClick(e, "services")} className="hover:text-secondary hover:translate-x-1 inline-block transition-all focus:outline-none">Our Services</a></li>
              <li><a href="#why-choose-us" onClick={(e) => handleLinkClick(e, "why-choose-us")} className="hover:text-secondary hover:translate-x-1 inline-block transition-all focus:outline-none">Why Choose Us</a></li>
              <li><a href="#reviews" onClick={(e) => handleLinkClick(e, "reviews")} className="hover:text-secondary hover:translate-x-1 inline-block transition-all focus:outline-none">Reviews</a></li>
              <li><a href="#contact" onClick={(e) => handleLinkClick(e, "contact")} className="hover:text-secondary hover:translate-x-1 inline-block transition-all focus:outline-none">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Featured Services */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-extrabold text-sm tracking-widest uppercase text-left">Our Services</h3>
            <ul className="flex flex-col gap-2 text-sm text-left">
              {siteData.services.map((svc) => (
                <li key={svc.id} className="text-white/70">
                  {svc.title}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-extrabold text-sm tracking-widest uppercase text-left">Get In Touch</h3>
            <ul className="flex flex-col gap-3.5 text-sm text-left">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span className="leading-tight text-white/70">{siteData.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <a href={`tel:${siteData.phoneFormatted}`} className="hover:text-secondary focus:outline-none">
                  {siteData.phone}
                </a>
              </li>

              <li className="flex items-start gap-2.5">
                <Clock className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <div className="flex flex-col leading-tight">
                  <span className="font-bold text-white/80">Business Hours:</span>
                  {siteData.hours.map((h, i) => (
                    <span key={i} className="text-xs text-white/60 mt-0.5">
                      {h.days}: {h.time}
                    </span>
                  ))}
                </div>
              </li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <p>&copy; {currentYear} Nature Wise Tree Service. All rights reserved. Professional Arborists in Buffalo & Clarence Center.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors focus:outline-none">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors focus:outline-none">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
