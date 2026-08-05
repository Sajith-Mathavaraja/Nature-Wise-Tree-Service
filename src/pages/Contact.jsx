import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, AlertTriangle, CheckCircle2, Calendar } from "lucide-react";
import { siteData } from "../data/siteData";
import SEO from "../components/SEO";

export default function Contact({ isSection }) {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "tree-removal",
    city: "Redmond",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  // Parse state passed via React Router navigation (e.g. from service cards or city list)
  useEffect(() => {
    if (location.state) {
      setFormData(prev => ({
        ...prev,
        service: location.state.service || prev.service,
        city: location.state.city || prev.city,
        message: location.state.estimateRequest ? "I would like to request a free estimate." : prev.message
      }));
    }
  }, [location]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
    }, 400);
  };

  return (
    <>
      <SEO 
        title="Contact Us & Free Estimates"
        description="Contact Nature Wise Tree Service for estimates, storm damage emergencies, or arborist consulting. Phone, email, address, and online form."
      />

      {/* Hero Banner */}
      {!isSection && (
        <section className="relative py-20 bg-gradient-to-br from-[#203322] to-[#2E6F40] text-white text-center">
          <div className="absolute inset-0 bg-[#203322]/20 backdrop-blur-[2px]"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4">
            <span className="text-xs font-extrabold text-secondary tracking-widest uppercase">
              Get In Touch
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-3 mb-4 text-white">
              Contact Nature Wise Tree Service
            </h1>
            <p className="text-sm text-white/80 max-w-lg mx-auto">
              Have questions about local tree regulations, need a health assessment, or want an estimate? Fill out our form or call us directly.
            </p>
          </div>
        </section>
      )}

      {/* Contact Cards Grid */}
      <section className={`py-16 ${isSection ? "border-t border-border-custom bg-[#E3EEE2]/10" : "bg-[#E3EEE2]/20"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Phone */}
            <div className="bg-card border border-border-custom rounded-2xl p-8 text-left shadow-sm flex flex-col justify-between hover-lift">
              <div>
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-heading text-sm uppercase tracking-wide">Call Directly</h3>
                <p className="text-xs text-body mt-2">Available for standard inquiries and fast 24/7 storm dispatches.</p>
              </div>
              <a href={`tel:${siteData.phoneFormatted}`} className="text-primary hover:text-primary-dark font-black text-sm mt-6 block focus:outline-none">
                {siteData.phone}
              </a>
            </div>

            {/* Card 2: Email */}
            <div className="bg-card border border-border-custom rounded-2xl p-8 text-left shadow-sm flex flex-col justify-between hover-lift">
              <div>
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-heading text-sm uppercase tracking-wide">Send Email</h3>
                <p className="text-xs text-body mt-2">For general inquiries, arborist reports, or corporate billing.</p>
              </div>
              <a href={`mailto:${siteData.email}`} className="text-primary hover:text-primary-dark font-black text-sm mt-6 block break-all focus:outline-none">
                {siteData.email}
              </a>
            </div>

            {/* Card 3: Address */}
            <div className="bg-card border border-border-custom rounded-2xl p-8 text-left shadow-sm flex flex-col justify-between hover-lift">
              <div>
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-heading text-sm uppercase tracking-wide">Head Office</h3>
                <p className="text-xs text-body mt-2">Our physical equipment yard and business offices in Redmond.</p>
              </div>
              <span className="text-heading font-extrabold text-xs mt-6 block leading-tight">
                {siteData.address}
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* Main Form & Info Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left side: Business info */}
            <div className="lg:col-span-5 flex flex-col text-left items-start">
              <h2 className="text-2xl sm:text-3xl font-black text-heading leading-tight mb-6">
                Office Hours & Details
              </h2>
              <p className="text-xs text-body leading-relaxed mb-8">
                We provide site surveys and estimates Monday through Friday. If you require emergency services due to storm damage or power line hazards, call our dispatch line immediately.
              </p>

              {/* Hours List */}
              <div className="w-full bg-[#E3EEE2]/30 border border-border-custom rounded-2xl p-6 mb-8">
                <h3 className="font-extrabold text-heading text-xs uppercase tracking-widest flex items-center gap-2 mb-4">
                  <Clock className="w-4 h-4 text-primary" /> Core Work Hours
                </h3>
                <ul className="flex flex-col gap-3 text-xs text-body">
                  {siteData.hours.map((h, i) => (
                    <li key={i} className="flex justify-between border-b border-border-custom/50 pb-2 last:border-b-0 last:pb-0">
                      <span className="font-extrabold text-heading">{h.days}</span>
                      <span>{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Emergency Banner */}
              <div className="w-full bg-accent/15 border border-accent/30 rounded-2xl p-6 flex gap-4 text-left items-start">
                <AlertTriangle className="w-6 h-6 text-accent shrink-0 mt-0.5 animate-pulse" />
                <div>
                  <h4 className="font-extrabold text-heading text-xs uppercase tracking-wide">Emergency Dispatch</h4>
                  <p className="text-[11px] text-body leading-relaxed mt-1">
                    Call <a href={`tel:${siteData.phoneFormatted}`} className="font-bold underline text-primary">{siteData.phone}</a> for 24/7 hazardous storm cleanup. Do not use the email form for emergencies.
                  </p>
                </div>
              </div>
            </div>

            {/* Right side: Contact/Estimate Form */}
            <div className="lg:col-span-7 w-full">
              <div className="bg-card border border-border-custom rounded-3xl shadow-lg p-8 sm:p-10">
                {submitted ? (
                  <div className="text-center py-12 animate-fade-in">
                    <div className="w-16 h-16 rounded-full bg-[#E3EEE2] flex items-center justify-center mx-auto mb-6 text-primary border border-secondary/20">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-black text-heading mb-2">Message Sent Successfully!</h3>
                    <p className="text-xs text-body max-w-sm mx-auto">
                      Thank you for contacting Nature Wise Tree Service, {formData.name}. Our arborist team will verify your service area and follow up shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left">
                    <h3 className="font-black text-heading text-lg flex items-center gap-2 mb-2 border-b border-border-custom pb-3">
                      <Calendar className="w-5 h-5 text-primary" /> Request Free Estimate or Contact Us
                    </h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="name" className="text-xs font-bold text-heading">Full Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-border-custom bg-[#F8FBF6]/30 text-heading text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Sarah Jenkins"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="phone" className="text-xs font-bold text-heading">Phone Number *</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-border-custom bg-[#F8FBF6]/30 text-heading text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="(206) 555-0143"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="text-xs font-bold text-heading">Email Address *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-border-custom bg-[#F8FBF6]/30 text-heading text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="sarah@example.com"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="city" className="text-xs font-bold text-heading">City *</label>
                        <select
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-border-custom bg-white text-heading text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          {siteData.serviceAreas.cities.map((city) => (
                            <option key={city.name} value={city.name}>{city.name}, WA</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="service" className="text-xs font-bold text-heading">Primary Need *</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-border-custom bg-white text-heading text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        {siteData.services.map((svc) => (
                          <option key={svc.id} value={svc.id}>{svc.title}</option>
                        ))}
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="message" className="text-xs font-bold text-heading">Project Description *</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows="4"
                        className="w-full px-4 py-3 rounded-xl border border-border-custom bg-[#F8FBF6]/30 text-heading text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                        placeholder="Please details what services you need (e.g. tree trimming, stump grinding, tree health analysis)..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="bg-primary hover:bg-primary-dark text-white font-extrabold text-sm py-4 rounded-xl shadow-md hover-lift transition-all touch-target focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 mt-2"
                    >
                      Submit Estimate Details
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Google Map Section (Lazy loaded iframe) */}
      <section className="w-full h-[400px] border-t border-border-custom relative overflow-hidden bg-emerald-50">
        <iframe
          title="Nature Wise Tree Service Redmond Head Office Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2686.0717277717467!2d-122.1180299841841!3d47.73142097919318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549012cdbf0d2203%3A0xc3b8364e0dd1310d!2sWoodinville-Redmond%20Rd%20NE%2C%20Washington!5e0!3m2!1sen!2sus!4v1628124945392!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="w-full h-full grayscale opacity-80 contrast-125 focus:outline-none"
        ></iframe>
      </section>
    </>
  );
}
