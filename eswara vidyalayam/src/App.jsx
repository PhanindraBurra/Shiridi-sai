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
import Footer from './components/Footer';
import MobileBottomBar from './components/MobileBottomBar';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [introOpen, setIntroOpen] = useState(false); // Can be triggered anytime via button in navbar/hero
  const [disclosureOpen, setDisclosureOpen] = useState(false);

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

      {/* Main Top Header & Navigation */}
      <Navbar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        onOpenIntro={() => setIntroOpen(true)}
        onOpenDisclosure={() => setDisclosureOpen(true)}
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
    </div>
  );
}
