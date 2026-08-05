import { Link } from "react-router-dom";
import { Check, X, ShieldAlert, Award, HelpingHand, Trash2, ShieldCheck, Heart } from "lucide-react";
import { siteData } from "../data/siteData";
import SEO from "../components/SEO";

export default function WhyChooseUs({ isSection }) {
  const comparison = siteData.comparison;

  return (
    <>
      <SEO 
        title="Why Choose Nature Wise | Arborist Standards"
        description="Compare Nature Wise Tree Service with typical tree companies. See our safety certifications, low-impact lawn equipment, zero-waste mulch policy, and satisfaction guarantee."
      />

      {/* Hero Banner */}
      {!isSection && (
        <section className="relative py-20 bg-gradient-to-br from-[#203322] to-[#2E6F40] text-white text-center">
          <div className="absolute inset-0 bg-[#203322]/20 backdrop-blur-[2px]"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4">
            <span className="text-xs font-extrabold text-secondary tracking-widest uppercase">
              Our Standards
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-3 mb-4 text-white">
              Why Nature Wise Tree Service?
            </h1>
            <p className="text-sm text-white/80 max-w-lg mx-auto">
              Not all tree services are created equal. Compare our certifications, machinery, and cleanup policies to make an informed choice for your property.
            </p>
          </div>
        </section>
      )}

      {/* Comparison Grid & Table */}
      <section className={`py-24 ${isSection ? "border-t border-border-custom bg-white" : ""}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-extrabold text-primary tracking-widest uppercase">Side-By-Side Comparison</span>
            <h2 className="text-2xl sm:text-3xl font-black text-heading mt-3">Compare the Difference</h2>
            <p className="text-xs text-body mt-2 max-w-md mx-auto">We hold ourselves to strict arborist and safety standards, ensuring your home is protected and your lawn is left pristine.</p>
          </div>

          {/* Desktop Table View */}
          <div className="hidden md:block overflow-hidden bg-card border border-border-custom rounded-3xl shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#E3EEE2]/40 border-b border-border-custom">
                  <th className="p-6 text-sm font-extrabold text-heading uppercase tracking-wide w-1/4">{comparison.headers[0]}</th>
                  <th className="p-6 text-sm font-extrabold text-primary uppercase tracking-wide w-1/3 bg-[#E3EEE2]/20">{comparison.headers[1]}</th>
                  <th className="p-6 text-sm font-extrabold text-body uppercase tracking-wide w-5/12">{comparison.headers[2]}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-custom">
                {comparison.rows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#F8FBF6]/30 transition-colors">
                    <td className="p-6 font-extrabold text-heading text-sm">{row.feature}</td>
                    
                    {/* Nature Wise cell */}
                    <td className="p-6 bg-primary/[0.02] border-x border-border-custom">
                      <div className="flex flex-col gap-1.5">
                        <div className="flex items-center gap-2 text-primary font-bold text-sm">
                          <Check className="w-5 h-5 text-secondary shrink-0" />
                          <span>Yes</span>
                        </div>
                        <span className="text-[11px] text-body leading-relaxed">{row.detail}</span>
                      </div>
                    </td>

                    {/* Typical Company cell */}
                    <td className="p-6 text-body/80 text-xs">
                      {row.typical === true ? (
                        <div className="flex items-center gap-2 text-primary font-bold text-sm mb-1">
                          <Check className="w-5 h-5 text-secondary shrink-0" />
                          <span>Yes</span>
                        </div>
                      ) : row.typical === false ? (
                        <div className="flex items-center gap-2 text-red-700 font-bold text-sm mb-1">
                          <X className="w-5 h-5 text-red-500 shrink-0" />
                          <span>No</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 text-heading/75 font-bold text-sm mb-1">
                          <span>{row.typical}</span>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card-List View */}
          <div className="block md:hidden flex flex-col gap-6">
            {comparison.rows.map((row, idx) => (
              <div key={idx} className="bg-card border border-border-custom rounded-2xl p-6 text-left shadow-sm">
                <h3 className="font-extrabold text-heading text-base border-b border-border-custom pb-3 mb-4">{row.feature}</h3>
                
                <div className="flex flex-col gap-4">
                  {/* Nature Wise */}
                  <div className="bg-[#E3EEE2]/30 p-4 rounded-xl">
                    <span className="text-[10px] font-black text-primary uppercase tracking-widest block mb-1">Nature Wise Standard</span>
                    <div className="flex items-start gap-2 text-xs text-body leading-tight mt-1.5">
                      <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-heading text-xs">Verified Yes: </span>
                        {row.detail}
                      </div>
                    </div>
                  </div>

                  {/* Typical company */}
                  <div className="border border-border-custom p-4 rounded-xl">
                    <span className="text-[10px] font-black text-body/60 uppercase tracking-widest block mb-1">Typical Tree Company</span>
                    <div className="flex items-center gap-2 text-xs font-bold text-body">
                      {row.typical === true ? (
                        <Check className="w-4 h-4 text-secondary" />
                      ) : row.typical === false ? (
                        <X className="w-4 h-4 text-red-500" />
                      ) : null}
                      <span>{row.typical === true ? "Yes" : row.typical === false ? "No" : row.typical}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Trust guarantees (Written Protection Guarantee) */}
      <section className="py-24 bg-[#E3EEE2]/40 border-y border-border-custom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-extrabold text-primary tracking-widest uppercase">Our Commitment</span>
          <h2 className="text-3xl sm:text-4xl font-black text-heading mt-3 mb-16">The Nature Wise Satisfaction Guarantee</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <div className="bg-card border border-border-custom p-8 rounded-3xl text-left shadow-sm flex flex-col justify-between hover-lift">
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-extrabold text-lg text-heading mb-3">No Risk Written Guarantee</h3>
                <p className="text-xs leading-relaxed text-body">
                  We don't collect deposits or down payments for residential work. Our crews perform the tree service, grind the stumps, and clean up. You pay only after you review the site with our crew leader and sign off on a successful walkthrough.
                </p>
              </div>
            </div>

            <div className="bg-card border border-border-custom p-8 rounded-3xl text-left shadow-sm flex flex-col justify-between hover-lift">
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-extrabold text-lg text-heading mb-3">Certified Safety Standards</h3>
                <p className="text-xs leading-relaxed text-body">
                  Every climber is fully trained in modern dual-rope climbing systems, PPE helmet standards, and directional rigging. We execute high-altitude hazard branch lowering in close conformity to OSHA and ANSI Z133 standards, eliminating residential property risks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Callout */}
      <section className="py-16 bg-[#203322] text-white text-center">
        <h2 className="text-2xl sm:text-3xl font-black mb-4">Ready to experience the Nature Wise difference?</h2>
        <p className="text-xs text-white/80 max-w-md mx-auto mb-8">
          Contact our office today to set up a site check with a certified arborist. Receive an itemized written estimate within 24 hours of inspection.
        </p>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/90 text-heading font-black px-8 py-3.5 rounded-full shadow-lg hover-lift transition-all touch-target focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
        >
          Schedule Site Inspection
        </a>
      </section>
    </>
  );
}
