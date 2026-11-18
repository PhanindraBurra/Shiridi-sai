import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, Play, FileText, GraduationCap, ChevronRight } from 'lucide-react';

export default function Navbar({ activeSection, setActiveSection, onOpenIntro, onOpenDisclosure }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'academics', label: 'Academics' },
    { id: 'achievers', label: 'Rankers' },
    { id: 'facilities', label: 'Facilities' },
    { id: 'scholarship', label: 'Scholarship' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Notification Strip in Deep Navy with Gold & Crimson accents - Exact SSVN Mobile Structure */}
      <div className="bg-[#0f2c59] text-white text-[10px] sm:text-xs py-1.5 px-3 sm:px-6 lg:px-8 border-b border-amber-500/40">
        <div className="w-full max-w-[1440px] mx-auto flex flex-row justify-between items-center gap-2">
          {/* Location link on Left (Visible on Mobile & Desktop) */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=Chemudulanka%2C%20Alamuru%20Mandal%2C%20Andhra%20Pradesh"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-slate-100 hover:text-amber-300 transition font-semibold text-[10px] sm:text-xs truncate"
            title="Open Chemudulanka, Alamuru Mandal in Google Maps"
          >
            <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
            <span className="truncate">Chemudulanka, Alamuru Mandal, Andhra Pradesh</span>
          </a>

          {/* Social Links on Right (Visible on Mobile & Desktop, matching SSVN) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href="https://www.facebook.com/ssvn02/"
              target="_blank"
              rel="noreferrer"
              className="p-1 text-slate-100 hover:text-blue-400 transition"
              aria-label="Visit us on Facebook"
              title="Facebook"
            >
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24"><path d="M15.2 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.2v2.3H9.4V13h2.7v8h3.1Z"/></svg>
            </a>
            <a
              href="https://www.youtube.com/@srishirdisaividyaniketan-c4468"
              target="_blank"
              rel="noreferrer"
              className="p-1 text-slate-100 hover:text-red-500 transition"
              aria-label="Visit us on YouTube"
              title="YouTube"
            >
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24"><path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8ZM9.8 15.2V8.8l5.6 3.2-5.6 3.2Z"/></svg>
            </a>
            <a
              href="https://www.instagram.com/sri.shirdi.sai.vidyaniketan/"
              target="_blank"
              rel="noreferrer"
              className="p-1 text-slate-100 hover:text-pink-400 transition"
              aria-label="Visit us on Instagram"
              title="Instagram"
            >
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-current fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a
              href="tel:9441252244"
              className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-rose-600 text-white font-bold text-[11px]"
              title="Admissions Helpline"
            >
              <Phone className="w-3 h-3" />
              <span>9441252244</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - Crisp White with Royal Navy & Crimson branding */}
      <nav className={`transition-all duration-300 ${isScrolled
          ? 'bg-white/98 backdrop-blur-md border-b border-slate-200 shadow-lg py-2 sm:py-2.5'
          : 'bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm py-2 sm:py-3'
        }`}>
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">

          {/* Official Logo Brand - NEVER truncates, shrink-0 */}
          <div
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2.5 sm:gap-3.5 cursor-pointer group shrink-0"
          >
            <img
              src="/assets/eswar_badge.png"
              alt="Eswara Vidyalayam Logo"
              className="h-11 w-11 sm:h-12 sm:w-12 lg:h-13 lg:w-13 xl:h-14 xl:w-14 rounded-full object-contain bg-white border-2 border-[#e11d48] shadow-md group-hover:scale-105 transition-transform shrink-0"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/assets/eswar_logo.png';
              }}
            />

            <div className="shrink-0">
              <span className="block text-base sm:text-lg lg:text-xl xl:text-2xl font-black text-[#e11d48] tracking-tight leading-none whitespace-nowrap">
                ESWARA VIDYALAYAM
              </span>
              <div className="text-[10px] sm:text-xs lg:text-[11px] xl:text-xs font-extrabold text-[#0f2c59] tracking-wider uppercase mt-1 whitespace-nowrap">
                Junior College For Women
              </div>
              <div className="hidden xl:block text-[10px] text-slate-500 font-semibold whitespace-nowrap">
                Sri Shirdi Sai Educational Institutions • NH-16, Chemudulanka
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links with Generous Spacing - Centered */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2.5 2xl:gap-3.5 mx-auto">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-2.5 xl:px-3.5 py-1.5 xl:py-2 rounded-xl text-xs xl:text-sm font-extrabold tracking-wide transition-all whitespace-nowrap ${activeSection === item.id
                    ? 'text-[#e11d48] bg-rose-50 font-black shadow-sm'
                    : 'text-slate-700 hover:text-[#0f2c59] hover:bg-slate-100'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA Button - Properly bounded inside navbar */}
          <div className="hidden lg:flex items-center shrink-0">
            <button
              onClick={() => scrollToSection('admissions')}
              className="inline-flex items-center gap-1.5 px-4 xl:px-5 py-2 xl:py-2.5 rounded-full text-xs xl:text-sm font-black bg-[#e11d48] hover:bg-[#be123c] text-white shadow-md shadow-rose-600/30 hover:shadow-lg hover:scale-105 active:scale-95 transition-all whitespace-nowrap"
            >
              <GraduationCap className="w-4 h-4 xl:w-4.5 xl:h-4.5" />
              <span>Apply Now</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger & Apply */}
          <div className="flex lg:hidden items-center gap-2 shrink-0">
            <button
              onClick={() => scrollToSection('admissions')}
              className="px-3.5 py-1.5 rounded-full text-xs font-black bg-[#e11d48] text-white shadow-sm"
            >
              Apply
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 sm:p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 hover:bg-slate-200 active:scale-95 transition"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#e11d48]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-5 space-y-3 shadow-2xl">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-100">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`p-3 rounded-xl text-left text-sm font-bold transition flex items-center justify-between ${activeSection === item.id
                    ? 'bg-rose-50 text-[#e11d48] border border-rose-200'
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                  }`}
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 opacity-50" />
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-2.5 pt-1">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDisclosure();
              }}
              className="w-full py-3 rounded-xl bg-slate-100 text-slate-800 text-xs sm:text-sm font-bold flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-amber-500" />
              <span>BIEAP Statutory Disclosures</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                scrollToSection('admissions');
              }}
              className="w-full py-3.5 rounded-xl bg-[#e11d48] text-white font-black text-sm sm:text-base shadow-md flex items-center justify-center gap-2"
            >
              <GraduationCap className="w-5 h-5" />
              <span>Admissions & ₹1 Cr Scholarship</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
