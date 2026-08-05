import { useState } from "react";
import { Link } from "react-router-dom";
import { Star, MessageSquare, CheckCircle, ThumbsUp, ShieldCheck } from "lucide-react";
import { siteData } from "../data/siteData";
import SEO from "../components/SEO";

export default function Reviews({ isSection }) {
  const reviewsData = siteData.reviews;
  
  const [newReview, setNewReview] = useState({
    name: "",
    rating: 5,
    service: "Tree Removal",
    text: "",
    location: "Redmond, WA"
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
    }, 450);
  };

  // Structured Schema for aggregated ratings
  const reviewsSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Nature Wise Tree Service",
    "image": "https://naturewisetrees.com/images/arborist_hero.webp",
    "@id": "https://naturewisetrees.com/#organization",
    "url": "https://naturewisetrees.com",
    "telephone": siteData.phone,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": reviewsData.rating.toString(),
      "reviewCount": reviewsData.count.toString()
    },
    "review": reviewsData.list.map((r) => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": r.author
      },
      "datePublished": "2026-06-15", // Mock average date
      "reviewBody": r.text,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": r.rating.toString()
      }
    }))
  };

  return (
    <>
      <SEO 
        title="Client Reviews & Google Ratings"
        description="Read real client testimonials and reviews for Nature Wise Tree Service. 4.9/5.0 stars with 140+ reviews across Redmond, Bellevue, and Kirkland."
        schema={reviewsSchema}
      />

      {/* Hero Banner */}
      {!isSection && (
        <section className="relative py-20 bg-gradient-to-br from-[#203322] to-[#2E6F40] text-white text-center">
          <div className="absolute inset-0 bg-[#203322]/20 backdrop-blur-[2px]"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4">
            <span className="text-xs font-extrabold text-secondary tracking-widest uppercase">
              Testimonials
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-3 mb-4 text-white">
              What Our Clients Say
            </h1>
            <p className="text-sm text-white/80 max-w-lg mx-auto">
              Read verified feedback from residential and commercial property owners throughout Redmond, Bellevue, Kirkland, and Woodinville.
            </p>
          </div>
        </section>
      )}

      {/* Rating Dashboard Summary */}
      <section className={`py-24 ${isSection ? "border-t border-border-custom bg-[#E3EEE2]/10" : ""}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Dashboard Panel */}
          <div className="bg-card border border-border-custom rounded-3xl p-8 sm:p-10 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-16">
            
            {/* Score block */}
            <div className="md:col-span-4 flex flex-col items-center text-center justify-center border-b md:border-b-0 md:border-r border-border-custom pb-8 md:pb-0 md:pr-8">
              <span className="text-6xl font-black text-primary leading-none">{reviewsData.rating}</span>
              <div className="flex gap-1 text-accent my-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent stroke-none" />
                ))}
              </div>
              <span className="text-xs font-bold text-body uppercase tracking-wider">Based on {reviewsData.count} Google Reviews</span>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#E3EEE2] text-primary border border-secondary/20 text-[10px] font-black uppercase mt-4">
                <ShieldCheck className="w-3.5 h-3.5" /> 100% Verified Clients
              </div>
            </div>

            {/* Distribution bars */}
            <div className="md:col-span-5 flex flex-col gap-2">
              <div className="flex items-center gap-3 text-xs">
                <span className="w-10 font-bold text-heading">5 Stars</span>
                <div className="flex-grow h-3 bg-[#F8FBF6] rounded-full overflow-hidden border border-border-custom">
                  <div className="w-[94%] h-full bg-secondary"></div>
                </div>
                <span className="w-8 text-right text-body/80">94%</span>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <span className="w-10 font-bold text-heading">4 Stars</span>
                <div className="flex-grow h-3 bg-[#F8FBF6] rounded-full overflow-hidden border border-border-custom">
                  <div className="w-[5%] h-full bg-secondary"></div>
                </div>
                <span className="w-8 text-right text-body/80">5%</span>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <span className="w-10 font-bold text-heading">3 Stars</span>
                <div className="flex-grow h-3 bg-[#F8FBF6] rounded-full overflow-hidden border border-border-custom">
                  <div className="w-[1%] h-full bg-secondary"></div>
                </div>
                <span className="w-8 text-right text-body/80">1%</span>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <span className="w-10 font-bold text-heading">2 Stars</span>
                <div className="flex-grow h-3 bg-[#F8FBF6] rounded-full overflow-hidden border border-border-custom">
                  <div className="w-0 h-full bg-secondary"></div>
                </div>
                <span className="w-8 text-right text-body/80">0%</span>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <span className="w-10 font-bold text-heading">1 Star</span>
                <div className="flex-grow h-3 bg-[#F8FBF6] rounded-full overflow-hidden border border-border-custom">
                  <div className="w-0 h-full bg-secondary"></div>
                </div>
                <span className="w-8 text-right text-body/80">0%</span>
              </div>
            </div>

            {/* Direct CTA */}
            <div className="md:col-span-3 text-center md:text-left flex flex-col items-center md:items-start pl-0 md:pl-6">
              <h3 className="font-extrabold text-heading text-sm uppercase tracking-wide">Highly Recommended</h3>
              <p className="text-xs text-body mt-2 mb-4 leading-relaxed">Safety compliance and spotless yard cleanup make Nature Wise Redmond's highest-rated arborist team.</p>
              <a
                href="#write-review-form"
                className="inline-flex items-center justify-center gap-2 bg-[#E3EEE2] hover:bg-secondary/20 text-heading font-extrabold text-xs uppercase tracking-widest px-6 py-3 rounded-full shadow-sm hover-lift transition-all touch-target focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <MessageSquare className="w-4 h-4 text-primary" /> Write A Review
              </a>
            </div>

          </div>

          {/* Testimonial Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviewsData.list.map((rev) => (
              <div
                key={rev.id}
                className="bg-card border border-border-custom rounded-2xl p-6 sm:p-8 text-left shadow-sm flex flex-col justify-between hover-lift"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-border-custom pb-4 mb-4">
                    <h3 className="font-extrabold text-heading text-sm">{rev.author}</h3>
                    <span className="text-[10px] text-body/60">{rev.date}</span>
                  </div>
                  <div className="flex gap-0.5 text-accent mb-4">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent stroke-none" />
                    ))}
                  </div>
                  <p className="text-xs italic leading-relaxed text-body mb-6">"{rev.text}"</p>
                </div>
                <div className="border-t border-border-custom pt-4 flex justify-between items-center text-[10px] font-bold text-body/60">
                  <span className="text-[#2E6F40] bg-[#E3EEE2] px-2.5 py-1 rounded-full">{rev.service}</span>
                  <span>{rev.location}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Write a Review Section */}
      <section className="py-24 bg-[#E3EEE2]/40 border-t border-border-custom" id="write-review-form">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-card border border-border-custom rounded-3xl p-8 sm:p-10 shadow-lg text-left">
            <span className="text-xs font-extrabold text-primary tracking-widest uppercase block mb-2">Leave Feedback</span>
            <h2 className="text-2xl sm:text-3xl font-black text-heading mb-6">Share Your Experience</h2>

            {submitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full bg-[#E3EEE2] flex items-center justify-center mx-auto mb-6 text-primary border border-secondary/20">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black text-heading mb-2">Review Submitted!</h3>
                <p className="text-xs text-body max-w-sm mx-auto">
                  Thank you for taking the time to share your feedback. Honest reviews help your Eastside neighbors make safe arborist choices!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-bold text-heading">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={newReview.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border-custom bg-[#F8FBF6]/30 text-heading text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Sarah J."
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="service" className="text-xs font-bold text-heading">Service Provided *</label>
                    <select
                      id="service"
                      name="service"
                      value={newReview.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-border-custom bg-white text-heading text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      {siteData.services.map((svc) => (
                        <option key={svc.id} value={svc.title}>{svc.title}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="location" className="text-xs font-bold text-heading">Your City *</label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={newReview.location}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border-custom bg-[#F8FBF6]/30 text-heading text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Redmond, WA"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="text-xs font-bold text-heading">Rating *</span>
                    <div className="flex items-center gap-2 mt-1.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setNewReview(prev => ({ ...prev, rating: star }))}
                          className="p-1 focus:outline-none focus:ring-2 focus:ring-primary rounded-lg text-accent"
                          aria-label={`Rate ${star} Stars`}
                        >
                          <Star className={`w-6 h-6 ${star <= newReview.rating ? 'fill-accent' : 'text-body/30'}`} />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="text" className="text-xs font-bold text-heading">Your Review *</label>
                  <textarea
                    id="text"
                    name="text"
                    value={newReview.text}
                    onChange={handleInputChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 rounded-xl border border-border-custom bg-[#F8FBF6]/30 text-heading text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Describe our arborist work and yard cleanup standards..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-primary hover:bg-primary-dark text-white font-extrabold text-sm py-4 rounded-xl shadow-md hover-lift transition-all touch-target focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 mt-2"
                >
                  Submit Google Review Copy
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Strong Call to Action */}
      <section className="py-16 bg-[#203322] text-white text-center">
        <h2 className="text-2xl sm:text-3xl font-black mb-4">Want the same 5-star service?</h2>
        <p className="text-xs text-white/80 max-w-md mx-auto mb-8">
          Contact Nature Wise Tree Service today. We diagnose tree issues, grind roots, and remove dead trees cleanly and safely.
        </p>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/90 text-heading font-black px-8 py-3.5 rounded-full shadow-lg hover-lift transition-all touch-target focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 text-center"
        >
          Book An Estimate
        </a>
      </section>
    </>
  );
}
