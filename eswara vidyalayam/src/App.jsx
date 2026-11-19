import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import AcademicsSection from './components/AcademicsSection';
import AchieversSection from './components/AchieversSection';
import FacilitiesSection from './components/FacilitiesSection';
import ScholarshipSection from './components/ScholarshipSection';
import GallerySection from './components/GallerySection';
import TestimonialsSection from './components/TestimonialsSection';
import AdmissionsSection from './components/AdmissionsSection';
import ContactSection from './components/ContactSection';
import PublicDisclosureModal from './components/PublicDisclosureModal';
import IntroModal from './components/IntroModal';
import FeedbackModal from './components/FeedbackModal';
import Footer from './components/Footer';
import MobileBottomBar from './components/MobileBottomBar';
import { Phone } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [introOpen, setIntroOpen] = useState(false); // Can be triggered anytime via button in navbar/hero
  const [disclosureOpen, setDisclosureOpen] = useState(false);
  const [feedbackOpen, setFeedbackOpen] = useState(false);

  const navigateToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-rose-600 selection:text-white">
      {/* Interactive Story Reel Modal */}
      <IntroModal 
        isOpen={introOpen} 
        onClose={() => setIntroOpen(false)} 
      />

      {/* Statutory Disclosures Modal */}
      <PublicDisclosureModal 
        isOpen={disclosureOpen} 
        onClose={() => setDisclosureOpen(false)} 
      />

      {/* Student & Parent Feedback Modal */}
      <FeedbackModal
        isOpen={feedbackOpen}
        onClose={() => setFeedbackOpen(false)}
      />

      {/* Main Top Header & Navigation */}
      <Navbar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        onOpenIntro={() => setIntroOpen(true)}
        onOpenDisclosure={() => setDisclosureOpen(true)}
        onOpenFeedback={() => setFeedbackOpen(true)}
      />

      {/* Main Page Content Flow */}
      <main>
        {/* 1. Hero Section with Carousel & Quick Admission Callback */}
        <HeroSection 
          onOpenIntro={() => setIntroOpen(true)} 
          onNavigate={navigateToSection}
        />

        {/* 2. About Us, Vision, Why Women's College & Leadership */}
        <AboutSection />

        {/* 3. Academic Programs: BiPC, MPC, Humanities with Civils/IIT/NEET */}
        <AcademicsSection />

        {/* 4. IPE 2026 State Rankers & National Competitive Achievers */}
        <AchieversSection />

        {/* 5. World-Class Campus Labs, Library, Bus Fleet & Yoga */}
        <FacilitiesSection />

        {/* 6. ₹1 Crore Star Scholarship Program & Test Registration */}
        <ScholarshipSection />

        {/* 7. Authentic Campus Photo Gallery with Lightbox */}
        <GallerySection />

        {/* 8. Parent & Student Ranker Testimonials */}
        <TestimonialsSection />

        {/* 9. Admissions Process & Online Enrollment Application */}
        <AdmissionsSection />

        {/* 10. Contact Information, NH-16 Chemudulanka Location & Maps */}
        <ContactSection />
      </main>

      {/* Comprehensive Footer */}
      <Footer 
        onOpenDisclosure={() => setDisclosureOpen(true)}
        onOpenIntro={() => setIntroOpen(true)}
        onNavigate={navigateToSection}
      />

      {/* Mobile/Tablet Sticky Contact Bar */}
      <MobileBottomBar onNavigate={navigateToSection} />

      {/* Floating Mobile Quick Connect Dock (WhatsApp, Instagram, Call) */}
      <aside className="fixed bottom-20 right-3.5 sm:bottom-6 sm:right-6 z-40 flex flex-col items-center gap-2.5" aria-label="Floating Quick Actions">
        {/* Call Helpline */}
        <a
          href="tel:9441252244"
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#0f2c59] to-[#1e3a8a] text-white flex items-center justify-center shadow-lg shadow-blue-900/30 active:scale-95 hover:scale-110 transition border border-white/20"
          title="Call Admissions Desk"
          aria-label="Call Admissions Desk"
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* Instagram Profile */}
        <a
          href="https://www.instagram.com/sri.shirdi.sai.vidyaniketan/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center shadow-lg shadow-pink-600/30 active:scale-95 hover:scale-110 transition"
          title="Follow us on Instagram"
          aria-label="Instagram"
        >
          <svg className="w-5 h-5 stroke-current fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
        </a>

        {/* WhatsApp Helpline */}
        <a
          href="https://wa.me/919441252244?text=Hello%20Eswara%20Vidyalayam,%20I%20would%20like%20to%20enquire%20about%20admissions."
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#25d366] text-white flex items-center justify-center shadow-lg shadow-emerald-600/40 active:scale-95 hover:scale-110 transition animate-pulse"
          title="Chat on WhatsApp"
          aria-label="WhatsApp Helpline"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 32 32"><path d="M16 3.2A12.7 12.7 0 0 0 5.1 22.4L3.4 28.7l6.5-1.7A12.8 12.8 0 1 0 16 3.2Zm0 23.2c-2 0-4-.5-5.7-1.6l-.4-.2-3.8 1 1-3.7-.3-.4A10.2 10.2 0 1 1 16 26.4Zm5.6-7.6c-.3-.2-1.8-.9-2.1-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7 0a8.4 8.4 0 0 1-2.5-1.6 9.4 9.4 0 0 1-1.7-2.1c-.2-.3 0-.5.1-.7l.5-.5.3-.5c.1-.2 0-.4 0-.5l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4s-1 1-1 2.4 1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4 0-.1-.2-.2-.5-.4Z"/></svg>
        </a>
      </aside>
    </div>
  );
}
