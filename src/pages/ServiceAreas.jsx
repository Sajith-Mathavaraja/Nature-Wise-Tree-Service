import { Link } from "react-router-dom";
import { MapPin, Phone, CheckCircle2, ChevronRight, Building } from "lucide-react";
import { siteData } from "../data/siteData";
import SEO from "../components/SEO";

export default function ServiceAreas({ isSection }) {
  const serviceAreas = siteData.serviceAreas;

  // Schema markup for multiple locations (LocalBusiness parent with service areas)
  const serviceAreaSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Nature Wise Tree Service",
    "image": "https://naturewisetrees.com/images/arborist_hero.webp",
    "telephone": siteData.phone,
    "url": "https://naturewisetrees.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "14208 Woodinville-Redmond Rd NE",
      "addressLocality": "Redmond",
      "addressRegion": "WA",
      "postalCode": "98052",
      "addressCountry": "US"
    },
    "areaServed": serviceAreas.cities.map((city) => ({
      "@type": "AdministrativeArea",
      "name": city.name
    }))
  };

  return (
    <>
      <SEO 
        title="Service Areas | Redmond, Bellevue & Kirkland"
        description="Nature Wise Tree Service provides certified arborists in Redmond, Bellevue, Kirkland, Sammamish, Woodinville, and Issaquah. View available services by city."
        schema={serviceAreaSchema}
      />

      {/* Hero Banner */}
      {!isSection && (
        <section className="relative py-20 bg-gradient-to-br from-[#203322] to-[#2E6F40] text-white text-center">
          <div className="absolute inset-0 bg-[#203322]/20 backdrop-blur-[2px]"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4">
            <span className="text-xs font-extrabold text-secondary tracking-widest uppercase">
              Where We Work
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-3 mb-4 text-white">
              Our Service Areas
            </h1>
            <p className="text-sm text-white/80 max-w-lg mx-auto">
              Providing premium arborist services and quick storm-damage dispatches throughout King County and Snohomish County.
            </p>
          </div>
        </section>
      )}

      {/* Intro Description */}
      <section className={`py-16 text-center ${isSection ? "border-t border-border-custom bg-white" : ""}`}>
        <div className="max-w-3xl mx-auto px-4">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6 text-primary">
            <MapPin className="w-6 h-6 animate-bounce" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-heading mb-4">Proudly Serving Seattle's Eastside</h2>
          <p className="text-sm leading-relaxed text-body">{serviceAreas.description}</p>
        </div>
      </section>

      {/* Grid list of Cities */}
      <section className="py-12 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceAreas.cities.map((city) => (
              <div
                key={city.name}
                className="bg-card border border-border-custom rounded-3xl p-8 text-left shadow-sm flex flex-col justify-between hover-lift"
              >
                <div>
                  {/* City Header */}
                  <div className="flex items-center justify-between border-b border-border-custom pb-4 mb-5">
                    <h3 className="font-extrabold text-heading text-lg flex items-center gap-2">
                      <Building className="w-5 h-5 text-primary shrink-0" />
                      <span>{city.name}, WA</span>
                    </h3>
                    <span className="text-[10px] bg-secondary/15 text-primary font-black px-3 py-1 rounded-full uppercase tracking-wider">
                      Eastside
                    </span>
                  </div>

                  <p className="text-xs leading-relaxed text-body mb-6">
                    {city.description}
                  </p>

                  {/* Zip codes tag cloud */}
                  <div className="mb-6">
                    <span className="text-[10px] font-black text-heading uppercase tracking-wider block mb-2">Zip Codes Served:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {city.zipCodes.map((zip) => (
                        <span key={zip} className="px-2 py-0.5 bg-[#F8FBF6] border border-border-custom text-[10px] text-body rounded font-mono">
                          {zip}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Services available in this city */}
                  <div className="border-t border-border-custom pt-5 mb-8">
                    <span className="text-[10px] font-black text-heading uppercase tracking-wider block mb-3">Available Services:</span>
                    <ul className="flex flex-col gap-2">
                      {city.services.map((svc) => (
                        <li key={svc} className="flex items-center gap-2 text-xs text-body leading-none">
                          <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                          <span>{svc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="flex gap-3">
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      const selectEl = document.getElementById("city");
                      if (selectEl) {
                        selectEl.value = city.name;
                        const event = new Event('change', { bubbles: true });
                        selectEl.dispatchEvent(event);
                      }
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="flex-grow inline-flex items-center justify-center gap-1.5 bg-primary hover:bg-primary-dark text-white font-extrabold text-xs uppercase tracking-wider py-3.5 rounded-xl shadow-md hover-lift transition-all touch-target focus:outline-none focus:ring-2 focus:ring-primary text-center"
                  >
                    Schedule in {city.name} <ChevronRight className="w-4 h-4" />
                  </a>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special County Dispatches */}
      <section className="py-24 bg-[#E3EEE2]/40 border-t border-[#6FAF4D]/20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-black text-heading mb-4">Don't see your city listed?</h2>
          <p className="text-xs text-body max-w-md mx-auto mb-8 leading-relaxed">
            We frequently take on larger residential and commercial tree removals and health surveys in surrounding communities like Bellevue, Seattle, Snohomish, and Monroe. Contact our office to see if we can dispatch to your address.
          </p>
          <a
            href={`tel:${siteData.phoneFormatted}`}
            className="inline-flex items-center justify-center gap-2 bg-[#203322] hover:bg-[#203322]/90 text-white font-black px-8 py-3.5 rounded-full shadow-lg hover-lift transition-all touch-target focus:outline-none focus:ring-2 focus:ring-[#203322]"
          >
            <Phone className="w-5 h-5 text-secondary animate-pulse" /> Call Office
          </a>
        </div>
      </section>
    </>
  );
}
