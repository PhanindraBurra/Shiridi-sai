import React from 'react';
import { Phone, Mail, MapPin, ArrowUp, GraduationCap } from 'lucide-react';

const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function Footer({ onOpenDisclosure, onOpenIntro, onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0f2c59] text-slate-200 pt-14 pb-20 md:pb-10 relative overflow-hidden border-t-2 border-[#e11d48]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="space-y-3.5">
            <div className="flex items-center gap-3">
              <img 
                src="/assets/eswar_badge.png" 
                alt="Eswara Vidyalayam Logo" 
                className="h-14 w-14 rounded-full object-contain bg-white border-2 border-[#e11d48] p-0.5 shadow-md"
              />
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">ESWARA VIDYALAYAM</h3>
                <p className="text-xs sm:text-sm text-amber-300 font-black uppercase tracking-wider">Junior College For Women</p>
                <p className="text-xs text-slate-300 font-medium">Sri Shirdi Sai Educational Institutions</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Premier Day-cum-Residential Junior College for Women on NH-16, Chemudulanka, Alamuru Mandal. Intermediate with Civils, IIT, NEET & CLAT orientation.
            </p>

            <p className="text-sm font-black text-amber-300 italic pt-1">
              "Exclusively for Women... Exceptionally For Excellence"
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-black text-white uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-amber-300 transition">Home</button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-amber-300 transition">About Us</button>
              </li>
              <li>
                <button onClick={() => onNavigate('academics')} className="hover:text-amber-300 transition">Academics & Civils</button>
              </li>
              <li>
                <button onClick={() => onNavigate('achievers')} className="hover:text-amber-300 transition">IPE 2026 State Rankers</button>
              </li>
              <li>
                <button onClick={() => onNavigate('facilities')} className="hover:text-amber-300 transition">Science & Computer Labs</button>
              </li>
              <li>
                <button onClick={() => onNavigate('scholarship')} className="hover:text-amber-300 transition">₹1 Cr Scholarship Test</button>
              </li>
              <li>
                <button onClick={() => onNavigate('gallery')} className="hover:text-amber-300 transition">Photo Gallery</button>
              </li>
            </ul>
          </div>

          {/* Academic Streams */}
          <div className="space-y-3">
            <h4 className="text-sm font-black text-white uppercase tracking-wider">Academic Streams</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>BiPC (Medical / NEET Track)</li>
              <li>MPC (IIT-JEE Engineering Track)</li>
              <li>Humanities (Civils & CLAT Track)</li>
              <li>AP-LAWCET & CUET Orientation</li>
              <li>Day-cum-Residential Campus</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-sm font-black text-white uppercase tracking-wider">Campus Desk</h4>
            <div className="space-y-2 text-xs sm:text-sm text-slate-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#e11d48] shrink-0 mt-0.5" />
                <span>NH-16, Chemudulanka, Alamuru Mandal, AP</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:9441252244" className="hover:text-white font-bold">9441252244</a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:9298600244" className="hover:text-white font-bold">9298600244</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-300 shrink-0" />
                <span>admissions@eswarvidyalaya.edu.in</span>
              </p>
              <a
                href="https://www.instagram.com/sri.shirdi.sai.vidyaniketan/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-pink-300 hover:underline pt-0.5"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>sri.shirdi.sai.vidyaniketan</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-slate-300">
          <div className="flex flex-wrap items-center gap-2">
            <p>© {new Date().getFullYear()} Eswara Vidyalayam Junior College for Women.</p>
            <span>•</span>
            <button
              onClick={onOpenDisclosure}
              className="text-amber-300 hover:underline font-bold"
            >
              BIEAP Statutory Disclosures
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenIntro}
              className="hover:text-white font-bold"
            >
              Watch Reel
            </button>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-white/10 hover:bg-[#e11d48] text-white transition shadow-md"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
