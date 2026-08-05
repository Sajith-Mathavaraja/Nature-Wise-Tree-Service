import { Link } from "react-router-dom";
import {
  ShieldAlert,
  Scissors,
  Sparkles,
  AlertTriangle,
  Heart,
  Trees,
  CheckCircle2,
  ArrowRight,
  Info,
  ListOrdered
} from "lucide-react";
import { siteData } from "../data/siteData";
import SEO from "../components/SEO";

// Map string icon names to Lucide icons
const iconMap = {
  ShieldAlert: ShieldAlert,
  Scissors: Scissors,
  Sparkles: Sparkles,
  AlertTriangle: AlertTriangle,
  Heart: Heart,
  Trees: Trees
};

export default function Services({ isSection }) {
  // Schema markup for multiple services
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "numberOfItems": siteData.services.length,
    "itemListElement": siteData.services.map((svc, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "item": {
        "@type": "Service",
        "name": svc.title,
        "description": svc.shortDescription,
        "provider": {
          "@type": "LocalBusiness",
          "name": "Nature Wise Tree Service"
        }
      }
    }))
  };

  return (
    <>
      <SEO 
        title="Professional Arborist Services"
        description="Explore our specialized tree care: safe tree removal, precision trimming, stump grinding, 24/7 storm emergency, health consultations, and land clearing."
        schema={servicesSchema}
      />

      {/* Hero Banner */}
      {!isSection && (
        <section className="relative py-20 bg-gradient-to-br from-[#203322] to-[#2E6F40] text-white text-center">
          <div className="absolute inset-0 bg-[#203322]/20 backdrop-blur-[2px]"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4">
            <span className="text-xs font-extrabold text-secondary tracking-widest uppercase">
              What We Do
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-3 mb-4 text-white">
              Our Tree Care & Arborist Services
            </h1>
            <p className="text-sm text-white/80 max-w-lg mx-auto">
              Providing homeowners and commercial property managers with safe, low-impact, ecological solutions for trees of any size.
            </p>
          </div>
        </section>
      )}

      {/* Services Grid list - Alternating layout */}
      <section className={`py-24 ${isSection ? "border-t border-border-custom bg-[#E3EEE2]/10" : ""}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-28">
            {siteData.services.map((svc, idx) => {
              const ServiceIcon = iconMap[svc.icon] || Trees;
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={svc.id}
                  id={svc.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center scroll-mt-24`}
                >
                  
                  {/* Left Column (Alternating Text/Image) */}
                  <div className={`lg:col-span-6 flex flex-col text-left items-start ${isEven ? "" : "lg:order-2"}`}>
                    <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-primary/10 text-primary border border-primary/20 text-xs font-extrabold uppercase tracking-wider mb-4">
                      <ServiceIcon className="w-4 h-4" /> {svc.title}
                    </div>
                    
                    <h2 className="text-2xl sm:text-3xl font-black text-heading leading-tight mb-4">
                      Expert {svc.title} Solutions
                    </h2>
                    <p className="text-sm text-body leading-relaxed mb-6">
                      {svc.longDescription}
                    </p>

                    {/* Key Benefits */}
                    <div className="w-full border-t border-border-custom pt-6 mb-6">
                      <h4 className="flex items-center gap-2 text-xs font-extrabold text-heading uppercase tracking-widest mb-3">
                        <Info className="w-4 h-4 text-secondary" /> Service Benefits
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {svc.benefits.map((b, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-body leading-tight">
                            <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Process Description */}
                    <div className="w-full border-t border-border-custom pt-6 mb-8">
                      <h4 className="flex items-center gap-2 text-xs font-extrabold text-heading uppercase tracking-widest mb-4">
                        <ListOrdered className="w-4 h-4 text-secondary" /> Technical Process
                      </h4>
                      <ol className="flex flex-col gap-3 text-xs text-body">
                        {svc.process.map((step, i) => (
                          <li key={i} className="flex gap-3 items-start leading-tight">
                            <span className="w-5 h-5 rounded-full bg-primary text-secondary text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5">
                              {i + 1}
                            </span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>

                    {/* Section Call to action */}
                    <div className="flex gap-4">
                      <a
                        href="#contact"
                        onClick={(e) => {
                          e.preventDefault();
                          const selectEl = document.getElementById("service");
                          if (selectEl) {
                            selectEl.value = svc.id;
                            const event = new Event('change', { bubbles: true });
                            selectEl.dispatchEvent(event);
                          }
                          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-extrabold text-xs uppercase tracking-widest px-6 py-3 rounded-full shadow-md hover-lift transition-all touch-target focus:outline-none focus:ring-2 focus:ring-primary text-center"
                      >
                        Request Estimate
                      </a>
                      <a
                        href={`tel:${siteData.phoneFormatted}`}
                        className="inline-flex items-center justify-center gap-2 bg-[#E3EEE2] hover:bg-secondary/20 text-heading font-extrabold text-xs uppercase tracking-widest px-6 py-3 rounded-full hover-lift transition-all touch-target focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        Call Now
                      </a>
                    </div>
                  </div>

                  {/* Right Column (Alternating Image/Text) */}
                  <div className={`lg:col-span-6 relative ${isEven ? "" : "lg:order-1"}`}>
                    <div className="absolute inset-0 bg-[#E3EEE2] rounded-3xl rotate-1 scale-98"></div>
                    <img
                      src={`${import.meta.env.BASE_URL}images/${svc.imageName}.webp`}
                      alt={`Nature Wise ${svc.title}`}
                      className="w-full h-[400px] object-cover rounded-3xl border-2 border-border-custom relative z-10 shadow-md"
                      loading="lazy"
                    />
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Callout Section */}
      <section className="py-20 bg-[#203322] text-white text-center border-t-2 border-secondary/30">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-black mb-4">Looking for a custom forestry solution?</h2>
          <p className="text-xs text-white/80 max-w-md mx-auto mb-8">
            Our Certified Arborists have experience with large scale land restoration, view clearing, and commercial tree inventory reports. Let's build a strategy for your trees.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/90 text-heading font-black px-8 py-3.5 rounded-full shadow-lg hover-lift transition-all touch-target focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 text-center"
            >
              Get Custom Consultation
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
