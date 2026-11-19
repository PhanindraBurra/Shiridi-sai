import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Award, ShieldCheck, ChevronLeft, ChevronRight, Send, CheckCircle2 } from 'lucide-react';

const HERO_SLIDES = [
  {
    image: './assets/ev_transport_buses.jpg',
    title: 'Exclusively for Women... Exceptionally For Excellence',
    subtitle: 'Premier Day-cum-Residential Junior College on NH-16 Chemudulanka with Civils, IIT, NEET & CLAT Orientation.',
    badge: 'Day-cum-Residential • NH-16 Campus',
    highlight: 'Sri Shirdi Sai Educational Institutions'
  },
  {
    image: './assets/ev_physics_lab.jpg',
    title: 'Advanced Science & Digital Laboratories',
    subtitle: 'Equipped with precision optical benches, analytical titration units, botany specimen chambers & computer lab.',
    badge: 'State-of-the-Art Labs',
    highlight: 'Advanced Instrumentation'
  },
  {
    image: './assets/ev_achievers_2026.jpg',
    title: 'Andhra Pradesh State Rankers in IPE 2026',
    subtitle: 'Historic scores: 989/1000, 988/1000, 986/1000 in BiPC & MPC, and Top Ranks in AP-LAWCET & CUET.',
    badge: '989/1000 Top State Rank',
    highlight: 'Consistent Rankers'
  },
  {
    image: './assets/ev_scholarship_poster.jpg',
    title: '₹1 Crore Star Scholarship Program',
    subtitle: 'Up to 100% merit scholarship for 10th-grade girl students entering Intermediate education.',
    badge: '₹1 Crore Scholarship Fund',
    highlight: 'Merit-Based Awards'
  },
  {
    image: './assets/ev_yoga_wellness.jpg',
    title: 'Mindful Wellness, Yoga & Safe Campus Life',
    subtitle: 'Daily morning lawn yoga, dedicated bus fleet, and 24/7 monitored safe residential hostel.',
    badge: 'Holistic Campus Life',
    highlight: 'Safe & Monitored'
  }
];

export default function HeroSection({ onOpenIntro, onNavigate }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [inquirySent, setInquirySent] = useState(false);
  const [quickForm, setQuickForm] = useState({ name: '', phone: '', stream: 'BiPC' });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  const handleQuickSubmit = (e) => {
    e.preventDefault();
    setInquirySent(true);
  };

  return (
    <section id="home" className="relative min-h-[92vh] pt-24 sm:pt-32 md:pt-36 pb-12 flex flex-col justify-between overflow-hidden bg-slate-900">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${HERO_SLIDES[currentSlide].image})` }}
          >
            {/* Rich Gradient Overlay for optimal photo visibility & text legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f2c59]/90 via-[#0f2c59]/75 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f2c59]/80 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-center">
          
          {/* Main Hero Content */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-5">
            
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-rose-600 text-white text-xs sm:text-sm font-black uppercase tracking-wider shadow-md">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                {HERO_SLIDES[currentSlide].badge}
              </span>

              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-400 text-slate-950 text-xs sm:text-sm font-black shadow-md">
                <Award className="w-3.5 h-3.5 text-slate-950" />
                {HERO_SLIDES[currentSlide].highlight}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl font-black text-white tracking-tight leading-[1.12] drop-shadow-lg">
              {HERO_SLIDES[currentSlide].title}
            </h1>

            {/* Subtitle - Punchy & Readable */}
            <p className="text-base sm:text-lg md:text-xl text-slate-100 max-w-2xl leading-relaxed drop-shadow-md font-medium">
              {HERO_SLIDES[currentSlide].subtitle}
            </p>

            {/* CTA Buttons Row */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={() => onNavigate('admissions')}
                className="px-7 py-3.5 rounded-full text-sm sm:text-base font-black bg-[#e11d48] hover:bg-[#be123c] text-white shadow-lg shadow-rose-600/40 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
              >
                <span>Admissions 2026-27</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('scholarship')}
                className="px-6 py-3.5 rounded-full text-sm sm:text-base font-black bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-md transition-all flex items-center gap-2"
              >
                <Award className="w-4 h-4 text-slate-950" />
                <span>₹1 Cr Scholarship</span>
              </button>
            </div>

            {/* Slider Dots */}
            <div className="flex items-center gap-3 pt-3">
              <div className="flex items-center gap-2">
                {HERO_SLIDES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      currentSlide === idx ? 'w-9 bg-amber-400' : 'w-2.5 bg-white/50 hover:bg-white'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-1.5 ml-2">
                <button
                  onClick={prevSlide}
                  className="p-1.5 rounded-full bg-black/40 text-white hover:bg-black/60 transition"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-1.5 rounded-full bg-black/40 text-white hover:bg-black/60 transition"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Quick Floating Admission Card - Clean White & Crimson */}
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="bg-white p-6 sm:p-7 rounded-3xl border-2 border-rose-100 shadow-2xl relative">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                <div>
                  <span className="text-xs font-black tracking-widest uppercase text-amber-600 block">
                    ADMISSIONS 2026 - 2027
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-[#0f2c59]">Instant Admission Inquiry</h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center text-[#e11d48] font-black text-sm">
                  EV
                </div>
              </div>

              {inquirySent ? (
                <div className="py-6 text-center space-y-2">
                  <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-black text-[#0f2c59]">Inquiry Received!</h4>
                  <p className="text-sm text-slate-600">
                    Our admissions team will call <strong>{quickForm.phone}</strong> promptly.
                  </p>
                  <button
                    onClick={() => setInquirySent(false)}
                    className="text-sm font-bold text-[#e11d48] hover:underline pt-2"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleQuickSubmit} className="space-y-3.5">
                  <div>
                    <label className="text-xs sm:text-sm font-bold text-slate-700 block mb-1">
                      Student / Parent Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter Full Name"
                      value={quickForm.name}
                      onChange={(e) => setQuickForm({ ...quickForm, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-[#e11d48] focus:bg-white transition font-medium"
                    />
                  </div>

                  <div>
                    <label className="text-xs sm:text-sm font-bold text-slate-700 block mb-1">
                      Mobile Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="10-digit Mobile Number"
                      value={quickForm.phone}
                      onChange={(e) => setQuickForm({ ...quickForm, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-[#e11d48] focus:bg-white transition font-medium"
                    />
                  </div>

                  <div>
                    <label className="text-xs sm:text-sm font-bold text-slate-700 block mb-1">
                      Stream Orientation *
                    </label>
                    <select
                      value={quickForm.stream}
                      onChange={(e) => setQuickForm({ ...quickForm, stream: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-[#e11d48] focus:bg-white transition font-medium"
                    >
                      <option value="BiPC">BiPC (Medical / NEET Orientation)</option>
                      <option value="MPC">MPC (IIT-JEE / Engineering Orientation)</option>
                      <option value="Civils">Humanities (Civils & CLAT Orientation)</option>
                      <option value="Scholarship">₹1 Crore Scholarship Test</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#e11d48] hover:bg-[#be123c] text-white font-black text-sm uppercase tracking-wider shadow-md shadow-rose-600/30 active:scale-95 transition-all flex items-center justify-center gap-2 mt-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </button>

                  <div className="text-center pt-1 text-xs text-slate-600 font-medium">
                    Direct Helpline:{' '}
                    <a href="tel:9441252244" className="text-[#e11d48] font-black hover:underline">
                      9441252244
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Ribbon - Clean White with Navy Numbers & Crimson Badges */}
      <div className="relative z-10 bg-white border-t border-slate-200 shadow-md py-5 mt-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-2 text-center md:divide-x md:divide-slate-200">
            <div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-[#e11d48]">989/1000</div>
              <div className="text-xs sm:text-sm font-extrabold text-[#0f2c59] uppercase tracking-wider mt-1">Top State Rank</div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">Andhra Pradesh IPE</div>
            </div>

            <div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-amber-600">₹1 Crore</div>
              <div className="text-xs sm:text-sm font-extrabold text-[#0f2c59] uppercase tracking-wider mt-1">Scholarship Fund</div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">Up to 100% Fee Waiver</div>
            </div>

            <div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-emerald-600">100%</div>
              <div className="text-xs sm:text-sm font-extrabold text-[#0f2c59] uppercase tracking-wider mt-1">Pass & Distinction</div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">Consistent Record</div>
            </div>

            <div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0f2c59]">6+ Labs</div>
              <div className="text-xs sm:text-sm font-extrabold text-[#0f2c59] uppercase tracking-wider mt-1">Science & IT Labs</div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">Physics, Chem, Bio, IT</div>
            </div>

            <div className="col-span-2 md:col-span-1">
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-[#e11d48]">NH-16</div>
              <div className="text-xs sm:text-sm font-extrabold text-[#0f2c59] uppercase tracking-wider mt-1">Day & Residential</div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">Chemudulanka Campus</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
