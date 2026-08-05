import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Calendar,
  ShieldCheck,
  Award,
  AlertTriangle,
  Heart,
  Trees,
  Scissors,
  Wrench,
  Leaf,
  Clock,
  ThumbsUp,
  Star,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  MapPin
} from "lucide-react";
import { siteData } from "../data/siteData";
import SEO from "../components/SEO";

// Map string icon names to Lucide icons
const iconMap = {
  ShieldAlert: ShieldCheck,
  Scissors: Scissors,
  Sparkles: Sparkles,
  AlertTriangle: AlertTriangle,
  Heart: Heart,
  Trees: Trees
};

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "tree-removal",
    message: "",
    city: "Clarence"
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.kdlead.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
      setSubmitted(true);
    }, 400);
  };

  // Structured Data Schema for LocalBusiness
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "TreeService",
    "name": "Nature Wise Tree Service",
    "image": "https://cityrootstreeservices.com/images/arborist_hero.webp",
    "@id": "https://cityrootstreeservices.com/#organization",
    "url": "https://cityrootstreeservices.com",
    "telephone": siteData.phone,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "9950 County Rd",
      "addressLocality": "Clarence Center",
      "addressRegion": "NY",
      "postalCode": "14032",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 42.9859,
      "longitude": -78.5914
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "07:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "16:00"
      }
    ],
    "sameAs": [
      siteData.socials.facebook,
      siteData.socials.instagram
    ]
  };

  return (
    <>
      <SEO 
        title="Healthy Trees, Safe Properties"
        description="Nature Wise Tree Service offers premium arborist care in Buffalo, Clarence, and Western New York. Tree removal, precision pruning, stump grinding, and 24/7 storm damage emergency."
        schema={homeSchema}
      />

      {/* Hero Section */}
      <section id="home" className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-[#203322]/95 to-[#203322]/85 text-white overflow-hidden py-20">
        {/* Background Image with overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={`${import.meta.env.BASE_URL}images/arborist_hero_new.webp`}
            alt="Nature Wise Arborist Trimming Cedar Tree"
            className="w-full h-full object-cover object-center mix-blend-overlay opacity-40 scale-105 animate-fade-in blur-[3px] md:blur-none"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#203322] via-[#203322]/70 to-[#203322]/95 md:via-[#203322]/40 md:to-[#203322]/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col items-start text-left max-w-2xl animate-fade-up">

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1] mb-6">
              Healthy Trees.<br />
              <span className="text-secondary">Safe Properties.</span><br />
              Trusted Arborists.
            </h1>
            <p className="text-lg text-white/80 max-w-xl mb-8 leading-relaxed">
              Keep your Buffalo & Clarence property beautiful and safe. We provide elite tree removal, structural pruning, and emergency response with a committed nature-first philosophy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/90 text-heading font-black px-8 py-4 rounded-full shadow-lg hover-lift transition-all touch-target focus:outline-none focus:ring-2 focus:ring-secondary"
              >
                <Calendar className="w-5 h-5" />
                Get Free Estimate
              </a>
              <a
                href={`tel:${siteData.phoneFormatted}`}
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-full border border-white/20 hover-lift transition-all touch-target focus:outline-none focus:ring-2 focus:ring-white"
              >
                <Phone className="w-5 h-5 text-secondary animate-pulse" />
                Call {siteData.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Statistics Grid */}
      <section className="relative z-20 -mt-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl shadow-xl border border-border-custom p-8 sm:p-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center">
            <span className="text-3xl sm:text-4xl font-extrabold text-primary">15+</span>
            <span className="text-xs font-bold text-body uppercase tracking-wider mt-1.5">Years of Experience</span>
          </div>
          <div className="flex flex-col items-center text-center border-l border-border-custom max-md:border-l-0">
            <span className="text-3xl sm:text-4xl font-extrabold text-primary">4,200+</span>
            <span className="text-xs font-bold text-body uppercase tracking-wider mt-1.5">Trees Safely Removed</span>
          </div>
          <div className="flex flex-col items-center text-center border-l border-border-custom">
            <span className="text-3xl sm:text-4xl font-extrabold text-primary">2,500+</span>
            <span className="text-xs font-bold text-body uppercase tracking-wider mt-1.5">Happy Clients</span>
          </div>
          <div className="flex flex-col items-center text-center border-l border-border-custom">
            <span className="text-3xl sm:text-4xl font-extrabold text-primary flex items-center gap-1">
              4.9 <Star className="w-6 h-6 text-accent fill-accent" />
            </span>
            <span className="text-xs font-bold text-body uppercase tracking-wider mt-1.5">Google Rating</span>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="about" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side: Image with curved edge */}
            <div className="lg:col-span-6 relative">
              <div className="absolute inset-0 bg-primary rounded-tl-[80px] rounded-br-[80px] rotate-2 scale-98 opacity-10"></div>
              <img
                src={`${import.meta.env.BASE_URL}images/philosophy_planting.webp`}
                alt="Nature Wise Arborists planting a young tree"
                className="w-full h-[450px] object-cover rounded-tl-[80px] rounded-br-[80px] shadow-lg border-2 border-border-custom relative z-10"
                loading="lazy"
              />
            </div>

            {/* Right side: Philosophy text */}
            <div className="lg:col-span-6 flex flex-col text-left items-start">
              <span className="text-xs font-extrabold text-primary tracking-widest uppercase mb-3">
                Nature-First Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-heading leading-tight mb-6">
                Preserving Local Canopies. Protecting Local Families.
              </h2>
              <p className="text-base text-body mb-6 leading-relaxed">
                At Nature Wise Tree Service, we believe that trees are the lifeblood of our Pacific Northwest environment. Our primary mission is to promote tree health, stability, and structure. When removals are necessary due to decay or safety hazards, we carry them out with absolute precision.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-extrabold text-heading text-sm uppercase tracking-wide">Eco-Friendly Cleanup</h3>
                    <p className="text-xs text-body mt-1">100% of organic waste is recycled into reusable local mulch or woodcraft boards.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-extrabold text-heading text-sm uppercase tracking-wide">Certified Integrity</h3>
                    <p className="text-xs text-body mt-1">We advise treatments instead of removals whenever a tree can be safely preserved.</p>
                  </div>
                </div>
              </div>

              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="inline-flex items-center gap-1.5 text-primary hover:text-primary-dark font-extrabold text-sm uppercase tracking-wider mt-8 hover:translate-x-1 transition-all focus:outline-none"
              >
                Learn More About Us <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Services (Horizontal Carousel/Grid) */}
      <section id="services" className="py-24 bg-[#E3EEE2]/40 border-y border-border-custom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-extrabold text-primary tracking-widest uppercase">
            Our Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-heading leading-tight mt-3 mb-4">
            Professional Arborist Services
          </h2>
          <p className="text-sm text-body max-w-xl mx-auto mb-16">
            We provide tree hazard mitigations, precision tree removals, crown trimming, and emergency cleanup utilizing low-impact techniques.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteData.services.slice(0, 4).map((svc) => {
              const ServiceIcon = iconMap[svc.icon] || Trees;
              return (
                <div
                  key={svc.id}
                  className="bg-card rounded-2xl border border-border-custom overflow-hidden shadow-sm hover-lift flex flex-col justify-between"
                >
                  <div>
                    <div className="h-48 relative overflow-hidden bg-emerald-50">
                      <img
                        src={`${import.meta.env.BASE_URL}images/${svc.imageName}.webp`}
                        alt={svc.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute top-4 right-4 bg-primary text-white p-3 rounded-xl shadow-md">
                        <ServiceIcon className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="p-6 text-left">
                      <h3 className="font-extrabold text-lg text-heading mb-2.5">{svc.title}</h3>
                      <p className="text-xs leading-relaxed text-body">{svc.shortDescription}</p>
                    </div>
                  </div>
                  <div className="p-6 pt-0 text-left">
                    <a
                      href="#contact"
                      onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                      className="inline-flex items-center gap-1.5 text-primary hover:text-primary-dark font-extrabold text-xs uppercase tracking-wider hover:translate-x-1 transition-all focus:outline-none"
                    >
                      Learn More <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-choose-us" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-extrabold text-primary tracking-widest uppercase">
            The Nature Wise Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-heading leading-tight mt-3 mb-16">
            Why Property Owners Choose Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteData.whyChooseUs.map((w, index) => {
              // Custom map icons for Choose Us
              const chooseIcons = [ShieldCheck, Award, Wrench, Leaf, Clock, ThumbsUp];
              const Icon = chooseIcons[index % chooseIcons.length];
              return (
                <div key={index} className="bg-card border border-border-custom p-8 rounded-2xl text-left shadow-sm hover-lift">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-extrabold text-base text-heading mb-3">{w.title}</h3>
                  <p className="text-xs leading-relaxed text-body">{w.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>



      {/* Customer Reviews Preview */}
      <section id="reviews" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-extrabold text-primary tracking-widest uppercase">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-heading leading-tight mt-3 mb-16">
            Highly Rated by Your Neighbors
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteData.reviews.list.slice(0, 3).map((rev) => (
              <div key={rev.id} className="bg-card border border-border-custom p-8 rounded-2xl text-left shadow-sm flex flex-col justify-between hover-lift">
                <div>
                  <div className="flex items-center gap-1 text-accent mb-4">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent stroke-none" />
                    ))}
                  </div>
                  <p className="text-xs italic leading-relaxed text-body mb-6">"{rev.text}"</p>
                </div>
                <div className="border-t border-border-custom pt-4">
                  <h3 className="font-extrabold text-heading text-sm">{rev.author}</h3>
                  <div className="flex justify-between items-center text-[10px] text-body mt-1">
                    <span>{rev.location}</span>
                    <span>{rev.service}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>


        </div>
      </section>

      {/* Emergency Tree Service Callout */}
      <section className="py-16 bg-[#203322] text-white relative overflow-hidden border-t-2 border-secondary/30">
        <div className="absolute inset-0 opacity-20">
          <img
            src={`${import.meta.env.BASE_URL}images/emergency_tree.webp`}
            alt="Storm damaged tree"
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="w-16 h-16 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center mx-auto mb-6 animate-pulse">
            <AlertTriangle className="w-8 h-8 text-accent" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Storm Damage? Dangerous Branch Leaning?
          </h2>
          <p className="text-sm text-white/80 max-w-lg mx-auto mb-8">
            Do not wait for it to collapse on your house. We provide fast response dispatch to stabilize, remove, and clean up hazard trees safely.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href={`tel:${siteData.phoneFormatted}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-accent hover:bg-accent/90 text-heading font-black text-base px-8 py-4.5 rounded-full shadow-lg hover-lift transition-all touch-target focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <Phone className="w-5 h-5 text-heading animate-pulse" />
              Call Now: {siteData.phone}
            </a>
            <span className="text-xs font-bold text-white/60">Available 24 hours / 7 days a week</span>
          </div>
        </div>
      </section>



      {/* Contact / Free Estimate Form */}
      <section id="contact" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 flex flex-col text-left items-start">
              <span className="text-xs font-extrabold text-primary tracking-widest uppercase mb-3">
                Free Estimate
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-heading leading-tight mb-6">
                Request Your Free Arborist Consultation
              </h2>
              <p className="text-sm text-body mb-8 leading-relaxed">
                Fill out our quick details form, and one of our Certified Arborists will reach out to arrange an inspection of your trees. No deposit required.
              </p>
              <div className="flex flex-col gap-4 text-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#E3EEE2] flex items-center justify-center text-primary shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-heading">Direct Phone Line</h3>
                    <p className="text-body">{siteData.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#E3EEE2] flex items-center justify-center text-primary shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-heading">Work Hours</h3>
                    <p className="text-body">Mon - Fri: 7:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 w-full">
              <div className="bg-card border border-border-custom rounded-3xl shadow-lg p-2 overflow-hidden">
                <div className="w-full min-h-[741px]">
                  <iframe
                    src="https://link.kdlead.com/widget/form/URNrun6RBbHQ58gvybC5"
                    style={{ width: "100%", height: "741px", border: "none", borderRadius: "8px" }}
                    id="inline-URNrun6RBbHQ58gvybC5" 
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="Nature Wise Tree Care - Website Lead Form"
                    data-height="741"
                    data-layout-iframe-id="inline-URNrun6RBbHQ58gvybC5"
                    data-form-id="URNrun6RBbHQ58gvybC5"
                    title="Nature Wise Tree Care - Website Lead Form"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

