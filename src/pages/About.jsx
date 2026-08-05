import { useState } from "react";
import { Link } from "react-router-dom";
import { Award, ShieldCheck, Heart, User, CheckCircle, ChevronDown, ChevronUp, Star, Phone } from "lucide-react";
import { siteData } from "../data/siteData";
import SEO from "../components/SEO";

export default function About({ isSection }) {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleFaq(index);
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": siteData.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <SEO 
        title="About Our Company & Certified Arborists"
        description="Learn about Nature Wise Tree Service, our history, our eco-friendly values, and our certified arborist team serving King and Snohomish counties."
        schema={faqSchema}
      />

      {/* Hero Banner */}
      {!isSection && (
        <section className="relative py-20 bg-gradient-to-br from-[#203322] to-[#2E6F40] text-white text-center">
          <div className="absolute inset-0 bg-[#203322]/20 backdrop-blur-[2px]"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4">
            <span className="text-xs font-extrabold text-secondary tracking-widest uppercase">
              Our Heritage
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-3 mb-4 text-white">
              About Nature Wise Tree Service
            </h1>
            <p className="text-sm text-white/80 max-w-lg mx-auto">
              Combining deep arborist science, industry-leading safety rigs, and a dedication to ecological sustainability since 2011.
            </p>
          </div>
        </section>
      )}

      {/* Our Story & History Timeline */}
      <section className={`py-24 ${isSection ? "border-t border-border-custom bg-white" : ""}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Story Text */}
            <div className="lg:col-span-7 flex flex-col text-left items-start">
              <span className="text-xs font-extrabold text-primary tracking-widest uppercase mb-3">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-heading leading-tight mb-6">
                Rooted in Care, Branching for Safety
              </h2>
              <p className="text-sm text-body leading-relaxed mb-6">
                Founded by Marcus Thorne in Redmond, Nature Wise Tree Service began with a simple vision: to provide premium, safe tree hazard mitigations while departing from typical destructive clearing methods. Over the past decade and a half, we have grown into one of the Eastside's most trusted tree services, managing complex removals and protecting local properties.
              </p>
              <p className="text-sm text-body leading-relaxed mb-8">
                Today, we operate with a full crew of climbing experts, rigging professionals, and state-of-the-art machinery. Despite our growth, our core values remain the same: safety for our team, preservation of native trees, and leaving our customers' yards completely clean.
              </p>

              {/* Core Values grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
                <div className="p-5 bg-card border border-border-custom rounded-2xl">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-extrabold text-heading text-xs uppercase tracking-wide">Safety First</h4>
                  <p className="text-[11px] text-body mt-1">Rigorous climbing checks and certified rigging to ensure absolute property protection.</p>
                </div>
                <div className="p-5 bg-card border border-border-custom rounded-2xl">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <Heart className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-extrabold text-heading text-xs uppercase tracking-wide">Tree Health</h4>
                  <p className="text-[11px] text-body mt-1">We optimize structural growth and treat decay using arborist science.</p>
                </div>
                <div className="p-5 bg-card border border-border-custom rounded-2xl">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-extrabold text-heading text-xs uppercase tracking-wide">Ecological Integrity</h4>
                  <p className="text-[11px] text-body mt-1">Zero-waste policy recycling branches into local mulch and logs into lumber.</p>
                </div>
              </div>
            </div>

            {/* Split layout Story Side Image */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-primary/10 rounded-3xl rotate-1 scale-98"></div>
              <img
                src={`${import.meta.env.BASE_URL}images/philosophy_planting.webp`}
                alt="Nature Wise Arborist Team"
                className="w-full h-[400px] object-cover rounded-3xl border border-border-custom relative z-10"
                loading="lazy"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-24 bg-[#E3EEE2]/40 border-y border-border-custom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-extrabold text-primary tracking-widest uppercase">
            Our Experts
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-heading leading-tight mt-3 mb-16">
            Meet Our Certified Arborists & Crew
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteData.team.map((t, idx) => (
              <div key={idx} className="bg-card border border-border-custom rounded-2xl p-6 text-left shadow-sm hover-lift flex flex-col justify-between">
                <div>
                  {/* Crew Lead Avatar Block */}
                  <div className="w-16 h-16 rounded-full bg-[#E3EEE2] text-primary flex items-center justify-center mb-6 border border-secondary/20 relative">
                    <User className="w-8 h-8" />
                    <div className="absolute -bottom-1 -right-1 bg-secondary text-heading p-1 rounded-full text-[9px] font-black border border-white">
                      ISA
                    </div>
                  </div>
                  <h3 className="font-extrabold text-lg text-heading">{t.name}</h3>
                  <span className="text-xs font-bold text-secondary uppercase tracking-wider block mt-1">{t.role}</span>
                  <p className="text-xs leading-relaxed text-body mt-4">{t.bio}</p>
                </div>
                <div className="border-t border-border-custom pt-4 mt-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F8FBF6] border border-border-custom text-[10px] font-extrabold text-heading">
                    <Award className="w-3.5 h-3.5 text-primary" /> {t.certId}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications and Memberships */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-xs font-extrabold text-primary tracking-widest uppercase">
            Qualifications
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-heading mt-3 mb-12">
            Professional Accreditations & Memberships
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            <div className="bg-card border border-border-custom p-6 rounded-2xl flex flex-col items-center">
              <span className="font-extrabold text-lg text-primary leading-none">ISA</span>
              <span className="text-[10px] text-body uppercase tracking-widest font-black mt-2">International Society of Arboriculture</span>
            </div>
            <div className="bg-card border border-border-custom p-6 rounded-2xl flex flex-col items-center">
              <span className="font-extrabold text-lg text-primary leading-none">TCIA</span>
              <span className="text-[10px] text-body uppercase tracking-widest font-black mt-2">Tree Care Industry Association</span>
            </div>
            <div className="bg-card border border-border-custom p-6 rounded-2xl flex flex-col items-center">
              <span className="font-extrabold text-lg text-primary leading-none">OSHA</span>
              <span className="text-[10px] text-body uppercase tracking-widest font-black mt-2">OSHA 10 Safety Standards Compliant</span>
            </div>
            <div className="bg-card border border-border-custom p-6 rounded-2xl flex flex-col items-center">
              <span className="font-extrabold text-lg text-primary leading-none">CTS</span>
              <span className="text-[10px] text-body uppercase tracking-widest font-black mt-2">Certified Treecare Safety Professionals</span>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-24 bg-[#E3EEE2]/40 border-t border-border-custom">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-xs font-extrabold text-primary tracking-widest uppercase">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-heading leading-tight mt-3 mb-16">
            Frequently Asked Questions
          </h2>

          <div className="flex flex-col gap-4 text-left">
            {siteData.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.id}
                  className="bg-card border border-border-custom rounded-2xl shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    onKeyDown={(e) => handleKeyDown(e, idx)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${idx}`}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset font-bold text-heading touch-target"
                  >
                    <span className="text-sm pr-4">{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-primary shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-primary shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div
                      id={`faq-answer-${idx}`}
                      role="region"
                      className="px-6 pb-6 text-xs leading-relaxed text-body border-t border-border-custom pt-4 animate-fade-in"
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to action section */}
      <section className="py-16 bg-[#203322] text-white text-center">
        <h2 className="text-2xl sm:text-3xl font-black mb-4">Want to consult a Certified Arborist?</h2>
        <p className="text-xs text-white/80 max-w-md mx-auto mb-8">
          Arrange an appointment on your property today. We assess tree hazards, tree stability, and structural branches free of charge.
        </p>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/90 text-heading font-black px-8 py-3.5 rounded-full shadow-lg hover-lift transition-all touch-target focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
        >
          Request Appointment
        </a>
      </section>
    </>
  );
}
