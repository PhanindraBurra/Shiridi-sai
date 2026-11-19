import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Play, ArrowRight, ShieldCheck, Award, BookOpen, GraduationCap, X, ChevronLeft, ChevronRight } from 'lucide-react';

const INTRO_SLIDES = [
  {
    image: './assets/ev_transport_buses.jpg',
    title: 'Eswara Vidyalayam Junior College for Women',
    subtitle: 'Under Sri Shirdi Sai Educational Institutions • NH-16 Chemudulanka',
    motto: 'Exclusively for Women... Exceptionally For Excellence',
    subtext: 'Premier Day-cum-Residential Junior College on NH-16 highway.',
    tag: 'Established Institutions'
  },
  {
    image: './assets/ev_achievers_2026.jpg',
    title: 'Andhra Pradesh State Rankers in IPE 2026',
    subtitle: 'Historic Scores: 989/1000 in BiPC & MPC • Top Ranks in AP-LAWCET & CUET',
    motto: 'Guided by Purpose, Vision and Dreams... We Transform!',
    subtext: 'Consistent top rankings across Godavari and Andhra Pradesh.',
    tag: '989/1000 State Rank'
  },
  {
    image: './assets/ev_physics_lab.jpg',
    title: 'Advanced Science & Digital Laboratories',
    subtitle: 'Precision Optical Benches, Chemistry Titrations & Botany Specimens',
    motto: 'Hands-on practical exploration with specialized faculty mentors',
    subtext: 'Preparing future doctors, engineers, and scientists.',
    tag: 'World-Class Labs'
  },
  {
    image: './assets/ev_scholarship_poster.jpg',
    title: '₹1 Crore Star Scholarship Program',
    subtitle: 'Unlocking potential with up to 100% scholarships for 10th-grade girls',
    motto: 'Earn your scholarship, shape your future...!',
    subtext: 'Scholarship test conducted annually at Chemudulanka campus.',
    tag: '₹1 Crore Fund'
  },
  {
    image: './assets/ev_yoga_wellness.jpg',
    title: 'Mindful Wellness, Yoga & Safe Campus Life',
    subtitle: 'Daily morning yoga on manicured green lawns and vibrant cultural celebrations',
    motto: 'Empowering young women to lead the nation fearlessly',
    subtext: 'Dedicated yellow bus fleet & 24/7 secure residential hostel.',
    tag: 'Holistic Campus'
  }
];

export default function IntroModal({ isOpen, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isOpen) return;

    const slideDuration = 4500;
    const intervalTime = 50;
    
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentIndex((oldIdx) => (oldIdx + 1) % INTRO_SLIDES.length);
          return 0;
        }
        return prev + (intervalTime / slideDuration) * 100;
      });
    }, intervalTime);

    return () => clearInterval(progressInterval);
  }, [isOpen, currentIndex]);

  if (!isOpen) return null;

  const current = INTRO_SLIDES[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % INTRO_SLIDES.length);
    setProgress(0);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + INTRO_SLIDES.length) % INTRO_SLIDES.length);
    setProgress(0);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/95 backdrop-blur-2xl"
      >
        <div className="relative w-full max-w-4xl h-[85vh] max-h-[700px] rounded-3xl overflow-hidden bg-slate-900 border border-rose-500/30 shadow-2xl flex flex-col justify-between">
          
          {/* Background Image Carousel */}
          <div className="absolute inset-0 z-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${current.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/70" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/40 to-transparent" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Top Bar with Progress Indicators & Close */}
          <div className="relative z-10 p-4 sm:p-6 flex flex-col gap-3">
            <div className="flex items-center gap-1.5 w-full">
              {INTRO_SLIDES.map((_, idx) => (
                <div key={idx} className="h-1.5 flex-1 bg-slate-800/80 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-rose-500 to-amber-400 transition-all duration-75"
                    style={{
                      width: idx === currentIndex ? `${progress}%` : idx < currentIndex ? '100%' : '0%'
                    }}
                  />
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  src="./assets/eswar_badge.png"
                  alt="Eswara Vidyalayam Logo"
                  className="w-8 h-8 rounded-full bg-white border border-rose-500/50 p-0.5 object-contain"
                />
                <span className="text-xs font-black text-rose-400 uppercase tracking-wider">
                  Eswara Vidyalayam Jr College
                </span>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-full bg-slate-950/80 text-slate-300 hover:text-white border border-slate-700 hover:bg-rose-600 transition"
                aria-label="Close intro reel"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Slide Content */}
          <div className="relative z-10 p-6 sm:p-10 max-w-2xl space-y-3 sm:space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-rose-500/20 text-rose-300 text-xs sm:text-sm font-black border border-rose-500/40">
              <Sparkles className="w-4 h-4 text-rose-400" />
              {current.tag}
            </span>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
              {current.title}
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-slate-200 font-medium leading-relaxed">
              {current.subtitle}
            </p>

            <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/85 border border-slate-800 max-w-lg shadow-xl">
              <p className="text-sm sm:text-base font-black text-amber-300">
                "{current.motto}"
              </p>
              <p className="text-xs sm:text-sm text-slate-300 mt-1.5 font-normal">
                {current.subtext}
              </p>
            </div>
          </div>

          {/* Bottom Bar Controls */}
          <div className="relative z-10 p-4 sm:p-6 border-t border-slate-800/60 bg-slate-950/80 backdrop-blur-md flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="p-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <button
              onClick={onClose}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-rose-600 to-amber-500 text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-rose-600/40 hover:scale-[1.02] active:scale-95 transition flex items-center gap-2"
            >
              <span>Explore Website</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </motion.div>
    </AnimatePresence>
  );
}
