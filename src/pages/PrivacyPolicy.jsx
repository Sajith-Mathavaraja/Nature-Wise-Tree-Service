import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function PrivacyPolicy() {
  return (
    <>
      <SEO title="Privacy Policy" description="Privacy Policy for City Roots Tree Services. Review our data protection and SMS privacy policies." />
      
      <section className="py-20 max-w-4xl mx-auto px-4 text-left">
        <h1 className="text-3xl sm:text-4xl font-black text-heading mb-6">Privacy Policy</h1>
        <p className="text-xs text-body/80 mb-6">Effective Date: January 19, 2025  |  Last Updated: July 9, 2026</p>
        
        <div className="flex flex-col gap-6 text-sm text-body leading-relaxed">
          <p>
            City Roots Tree Services ("we," "our," or "us") is committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data in compliance with applicable U.S. data protection laws, including the California Consumer Privacy Act (CCPA) and the General Data Protection Regulation (GDPR) where applicable.
          </p>

          <h3 className="font-extrabold text-heading text-lg mt-4">1. Information We Collect</h3>
          <p>
            We may collect the following categories of personal information when you contact us, request a quote, submit a web form, or use our services:
          </p>
          <ul className="list-disc pl-6 flex flex-col gap-1 mt-1 text-sm text-body">
            <li>Full name</li>
            <li>Mailing or service address</li>
            <li>Email address</li>
            <li>Mobile phone number</li>
            <li>Service request details and project descriptions</li>
            <li>Communication history and preferences</li>
          </ul>

          <h3 className="font-extrabold text-heading text-lg mt-4">2. SMS / Text Message Communications</h3>
          
          <h4 className="font-bold text-heading text-md mt-2">2a. How We Collect Your Mobile Number</h4>
          <p>
            We collect your mobile phone number when you voluntarily provide it through our website contact forms, phone calls, or other direct communication channels. By providing your mobile number and checking the SMS consent checkbox on our forms, you expressly consent to receive SMS (text message) communications from City Roots Tree Services.
          </p>

          <h4 className="font-bold text-heading text-md mt-2">2b. Types of Messages We Send</h4>
          <p>
            By opting in, you may receive recurring automated text messages from City Roots Tree Services, including:
          </p>
          <ul className="list-disc pl-6 flex flex-col gap-1 mt-1 text-sm text-body">
            <li>Free estimate confirmations and appointment reminders</li>
            <li>Project status updates and scheduling notifications</li>
            <li>Customer support and follow-up communications</li>
            <li>Promotional offers and seasonal service announcements related to our tree care services</li>
          </ul>

          <h4 className="font-bold text-heading text-md mt-2">2c. Message Frequency</h4>
          <p>
            Message frequency varies based on your interactions with us, ongoing service needs, and active promotions. You may receive up to 4–8 messages per month depending on your service activity.
          </p>

          <h4 className="font-bold text-heading text-md mt-2">2d. Message & Data Rates</h4>
          <p>
            Message and data rates may apply. Charges are determined by your mobile carrier and your individual service plan. City Roots Tree Services is not responsible for any charges incurred from your mobile carrier.
          </p>

          <h4 className="font-bold text-heading text-md mt-2">2e. How to Opt Out (STOP)</h4>
          <p>
            You may cancel SMS messages at any time by replying STOP to any text message you receive from us. After opting out, you will receive one final confirmation message and will no longer receive SMS communications from City Roots Tree Services unless you re-enroll.
          </p>

          <h4 className="font-bold text-heading text-md mt-2">2f. How to Get Help (HELP)</h4>
          <p>
            For help with our SMS program, reply HELP to any message, or contact us directly at:
          </p>
          <ul className="list-none pl-0 flex flex-col gap-1 mt-1 text-sm text-body font-semibold">
            <li>Phone: 716-274-9576</li>
            <li>Email: info@cityrootstreeservices.com</li>
          </ul>

          <h3 className="font-extrabold text-heading text-lg mt-4">3. Mobile Information & SMS Consent — No Third-Party Sharing</h3>
          <p>
            No mobile information (including your mobile phone number and SMS opt-in consent data) will be shared with third parties or affiliates for marketing or promotional purposes.
          </p>
          <p>
            All other categories of personal data exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties under any circumstances.
          </p>

          <h3 className="font-extrabold text-heading text-lg mt-4">4. How We Use Your Information</h3>
          <p>
            We use the personal information we collect to:
          </p>
          <ul className="list-disc pl-6 flex flex-col gap-1 mt-1 text-sm text-body">
            <li>Provide and manage tree care services</li>
            <li>Respond to inquiries and service requests</li>
            <li>Schedule appointments and send reminders</li>
            <li>Send promotional communications (with your consent)</li>
            <li>Improve our website and service quality</li>
            <li>Comply with applicable laws and regulations</li>
          </ul>

          <h3 className="font-extrabold text-heading text-lg mt-4">5. Cookies and Tracking Technologies</h3>
          <p>
            We use cookies and similar technologies to improve website functionality, analyze traffic, and enhance user experience. Cookies do not store sensitive personal information. By continuing to use this website, you consent to our use of cookies in accordance with this policy.
          </p>

          <h3 className="font-extrabold text-heading text-lg mt-4">6. Data Security</h3>
          <p>
            We implement reasonable administrative, technical, and physical security measures to protect your personal data against unauthorized access, disclosure, alteration, or destruction. However, no method of electronic transmission or storage is 100% secure.
          </p>

          <h3 className="font-extrabold text-heading text-lg mt-4">7. Data Retention</h3>
          <p>
            We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, or as required by applicable law. When your data is no longer needed, we securely delete or anonymize it.
          </p>

          <h3 className="font-extrabold text-heading text-lg mt-4">8. Your Privacy Rights</h3>
          <p>
            Depending on your location, you may have the following rights regarding your personal data:
          </p>
          <ul className="list-disc pl-6 flex flex-col gap-1 mt-1 text-sm text-body">
            <li>Access: Request a copy of the personal data we hold about you</li>
            <li>Correction: Request correction of inaccurate personal data</li>
            <li>Deletion: Request deletion of your personal data (including your mobile number and SMS consent record)</li>
            <li>Opt-Out of SMS: Reply STOP to any text message at any time</li>
            <li>Opt-Out of Marketing: Contact us directly to be removed from marketing lists</li>
          </ul>
          <p className="mt-2">
            To exercise any of these rights, contact us at info@cityrootstreeservices.com or call 716-274-9576.
          </p>

          <h3 className="font-extrabold text-heading text-lg mt-4">9. Changes to This Privacy Policy</h3>
          <p>
            We may update this Privacy Policy from time to time. We will post the updated policy on this page with a revised “Last Updated” date. Continued use of our website or services after any changes constitutes your acceptance of the updated policy.
          </p>

          <h3 className="font-extrabold text-heading text-lg mt-4">10. Contact Information</h3>
          <p>
            If you have questions or concerns about this Privacy Policy, please contact us:
          </p>
          <ul className="list-none pl-0 flex flex-col gap-1 mt-1 text-sm text-body font-semibold">
            <li>Company: City Roots Tree Services</li>
            <li>Address: 9950 County Rd, Clarence Center, NY 14032</li>
            <li>Phone: 716-274-9576</li>
          </ul>
        </div>

        <div className="mt-12">
          <Link to="/" className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white font-extrabold text-xs uppercase tracking-widest px-6 py-3 rounded-full focus:outline-none shadow-md hover-lift transition-all">
            Return Home
          </Link>
        </div>
      </section>
    </>
  );
}
