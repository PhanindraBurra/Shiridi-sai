import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, CheckCircle2, Award, Clock, ArrowRight, Microscope, Brain } from 'lucide-react';

const STREAMS = [
  {
    id: 'bipc',
    title: 'BiPC (Medical Stream)',
    subtitle: 'Integrated NEET & Medical Entrances',
    badge: 'Pre-Medical',
    image: '/assets/ev_botany_lab.jpg',
    desc: 'Combines Intermediate syllabus with exhaustive NEET coaching. Practical learning in botany specimen research, animal histology, and chemical titrations.',
    highlights: [
      'NEET Intensive Mock Tests & DPPs',
      'Botany & Biology Specimen Labs',
      'Senior Medical Faculty Mentorship',
      'Daily Concept Revision & Doubts'
    ]
  },
  {
    id: 'mpc',
    title: 'MPC (Engineering Stream)',
    subtitle: 'Integrated IIT-JEE (Mains & Advanced) • AP-EAPCET',
    badge: 'IIT & Engineering',
    image: '/assets/ev_physics_lab.jpg',
    desc: 'Focused problem-solving in Mathematics, advanced Physics mechanics and optics, and high-scoring Chemistry techniques for IITs and NITs.',
    highlights: [
      'IIT-JEE Integrated Curriculum',
      'Daily Practice Problem Sets (DPPs)',
      'Hands-on Physics & Optics Labs',
      'Weekend Computer-Based Online Mocks'
    ]
  },
  {
    id: 'humanities',
    title: 'Humanities & Commerce (CEC / MEC)',
    subtitle: 'Integrated CIVILS (UPSC/APPSC) • CLAT • CUET',
    badge: 'Civils & Law',
    image: '/assets/ev_studyhall_navy.jpg',
    desc: 'Designed for young women targeting Civil Services (IAS/IPS), National Law Universities (CLAT/LAWCET), and Central Universities.',
    highlights: [
      'UPSC Civils General Studies Foundation',
      'CLAT & AP-LAWCET Legal Reasoning',
      'CUET Central Universities Preparation',
      'Current Affairs Seminars & Debates'
    ]
  }
];

export default function AcademicsSection() {
  const [selectedStream, setSelectedStream] = useState(STREAMS[0]);

  return (
    <section id="academics" className="py-20 bg-slate-50 relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-[#e11d48] text-xs sm:text-sm font-black uppercase tracking-widest shadow-sm">
            <BookOpen className="w-4 h-4" />
            Academic Streams
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0f2c59] tracking-tight">
            Intermediate With <span className="crimson-gradient-text">Integrated Entrances</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium">
            Specialized coaching for Civils, IIT, NEET, and Law built into the daily college timetable.
          </p>
        </div>

        {/* 3 Streams Grid Selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {STREAMS.map((stream) => {
            const isSelected = selectedStream.id === stream.id;
            return (
              <div
                key={stream.id}
                onClick={() => setSelectedStream(stream)}
                className={`p-6 sm:p-7 rounded-3xl cursor-pointer transition-all duration-300 relative border-2 ${
                  isSelected
                    ? 'bg-white border-[#e11d48] shadow-xl scale-[1.02]'
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between mb-3.5">
                  <span className="px-3 py-1 rounded-full text-xs font-black bg-rose-50 text-[#e11d48] border border-rose-200 uppercase tracking-wider">
                    {stream.badge}
                  </span>
                  <div className={`w-3.5 h-3.5 rounded-full ${isSelected ? 'bg-[#e11d48]' : 'bg-slate-300'}`} />
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-[#0f2c59] mb-1.5">{stream.title}</h3>
                <p className="text-sm font-bold text-amber-600 mb-3">{stream.subtitle}</p>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{stream.desc}</p>

                <div className="flex items-center gap-1.5 text-sm font-black text-[#e11d48]">
                  <span>Explore Curriculum</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Stream Details */}
        <div className="p-7 sm:p-9 rounded-3xl bg-white border border-slate-200 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-50 text-[#e11d48] text-xs sm:text-sm font-black border border-rose-200">
                <Award className="w-4 h-4" />
                Featured Orientation
              </span>

              <h3 className="text-2xl sm:text-3xl font-black text-[#0f2c59]">
                {selectedStream.title}
              </h3>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                {selectedStream.desc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {selectedStream.highlights.map((h, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-[#e11d48] shrink-0" />
                    <span className="text-sm sm:text-base text-slate-800 font-bold">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                <img
                  src={selectedStream.image}
                  alt={selectedStream.title}
                  className="w-full h-72 object-cover"
                />
              </div>
            </div>

          </div>
        </div>

        {/* Daily Schedule - Concise */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <div className="text-center max-w-xl mx-auto mb-6">
            <h3 className="text-xl sm:text-2xl font-black text-[#0f2c59]">Daily Academic Routine</h3>
            <p className="text-sm text-slate-500 font-medium">Balanced for concept retention and healthy living</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { time: '06:00 AM', title: 'Lawn Yoga & Wellness', desc: 'Mindfulness and pranayama on green lawns.' },
              { time: '08:30 AM', title: 'Core Lectures', desc: 'Subject theory by senior college faculty.' },
              { time: '02:00 PM', title: 'Practical Science Labs', desc: 'Hands-on experiments in Physics, Chem & Bio.' },
              { time: '05:00 PM', title: 'Guided Study & Doubts', desc: 'Supervised study with resident faculty.' },
            ].map((slot, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm text-center hover:shadow-md transition">
                <span className="text-xs font-black text-amber-800 px-2.5 py-1 rounded bg-amber-50 inline-block mb-2 border border-amber-200">
                  {slot.time}
                </span>
                <h4 className="text-sm sm:text-base font-extrabold text-[#0f2c59]">{slot.title}</h4>
                <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-snug">{slot.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
