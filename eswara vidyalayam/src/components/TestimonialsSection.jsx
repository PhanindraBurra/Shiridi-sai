import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, Heart, ChevronLeft, ChevronRight } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    quote: "Enrolling our daughter in Eswara Vidyalayam was the most transformative decision. The dedicated female mentorship, residential discipline, and daily NEET mock exams helped her secure 989/1000—a top rank across Andhra Pradesh!",
    author: "Smt. G. Lakshmi & Sri Rambabu",
    role: "Parents of G. V. K. G. Madhuri (State Top Ranker - 989/1000)",
    batch: "BiPC Medical Stream",
    type: "Parent Voice",
    stars: 5
  },
  {
    id: 2,
    quote: "The integrated IIT-JEE coaching and daily problem sets (DPPs) at Eswara Vidyalayam completely removed my fear of Mathematics and Physics. The faculty stayed till evening study hours to review every error. I am proud to score 989/1000!",
    author: "M. Seetha Sanjana",
    role: "MPC State Ranker (989/1000) & JEE Aspirant",
    batch: "MPC Engineering Stream",
    type: "Student Achiever",
    stars: 5
  },
  {
    id: 3,
    quote: "The Civils Foundation and CLAT track offered here is exceptional. My daughter achieved State Rank 90 in AP-LAWCET along with 978/1000 in Intermediate Board. The college built her oratory and analytical skills fearlessly.",
    author: "Sri K. Subrahmanyam",
    role: "Parent of T. Haritha (AP-LAWCET Rank 90 & 978/1000)",
    batch: "Humanities & Civils Stream",
    type: "Parent Voice",
    stars: 5
  }
];

export default function TestimonialsSection() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const nextTestimonial = () => setCurrentIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  const prevTestimonial = () => setCurrentIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  const current = TESTIMONIALS[currentIdx];

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-[#e11d48] text-xs sm:text-sm font-black uppercase tracking-widest shadow-sm">
            <Heart className="w-4 h-4" />
            Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0f2c59] tracking-tight">
            Voices of <span className="crimson-gradient-text">Trust & Pride</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium">
            Hear from our proud parents and state rankers about their experience at Eswara Vidyalayam.
          </p>
        </div>

        {/* Carousel Card */}
        <div className="max-w-3xl mx-auto">
          <div className="p-7 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl relative">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3.5 py-1 rounded-full text-xs sm:text-sm font-black bg-amber-50 text-amber-900 border border-amber-200">
                  {current.type} • {current.batch}
                </span>

                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(current.stars)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400" />
                  ))}
                </div>
              </div>

              <p className="text-base sm:text-lg md:text-xl text-slate-700 font-medium leading-relaxed italic">
                "{current.quote}"
              </p>

              <div className="flex items-center justify-between pt-5 border-t border-slate-100">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-full bg-[#0f2c59] text-white flex items-center justify-center font-black text-base shadow-md">
                    {current.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-black text-[#0f2c59]">{current.author}</h4>
                    <p className="text-xs sm:text-sm text-[#e11d48] font-bold">{current.role}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={prevTestimonial}
                    className="p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition"
                    aria-label="Previous"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition"
                    aria-label="Next"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
