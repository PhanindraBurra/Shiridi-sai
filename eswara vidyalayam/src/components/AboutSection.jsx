import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { History, Heart, UserCheck, ShieldCheck, BookOpen, Quote, Sparkles, CheckCircle2, Award, Target, Compass } from 'lucide-react';

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState('vision');

  return (
    <section id="about" className="py-20 bg-slate-50 relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-[#e11d48] text-xs sm:text-sm font-black uppercase tracking-widest shadow-sm">
            <History className="w-4 h-4" />
            About Eswara Vidyalayam
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0f2c59] tracking-tight">
            Exclusively For Women, <span className="crimson-gradient-text">Exceptionally For Excellence</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium">
            Under <strong>Sri Shirdi Sai Educational Institutions</strong>, empowering young women on NH-16 Chemudulanka with national-level academic coaching and leadership.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-10">
          {[
            { id: 'vision', label: 'Vision & Purpose', icon: Target },
            { id: 'leadership', label: 'Chairman & Principal Desk', icon: UserCheck },
            { id: 'why-women', label: 'Why Women Exclusive?', icon: ShieldCheck },
            { id: 'residential', label: 'Day & Residential Life', icon: Compass },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 sm:px-6 py-3 rounded-full text-xs sm:text-sm md:text-base font-black transition-all flex items-center gap-2 ${
                  activeTab === tab.id
                    ? 'bg-[#0f2c59] text-white shadow-lg scale-105'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 shadow-sm'
                }`}
              >
                <Icon className="w-4 h-4 text-amber-400" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'vision' && (
            <motion.div
              key="vision"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs sm:text-sm font-black text-[#e11d48] uppercase tracking-wider block">
                  Guided by Purpose, Vision and Dreams
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0f2c59]">
                  "We Don't Just Teach... We Transform!"
                </h3>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                  Located along <strong>NH-16, Chemudulanka, Alamuru Mandal</strong> in the Rajahmundry region, Eswara Vidyalayam combines the Board of Intermediate Education curriculum with specialized <strong>Civils Foundation (UPSC/APPSC), IIT-JEE, NEET, and CLAT</strong> coaching.
                </p>

                <div className="grid grid-cols-2 gap-3.5 pt-2">
                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                    <div className="text-2xl sm:text-3xl font-black text-[#e11d48]">100%</div>
                    <div className="text-sm font-bold text-slate-800 mt-1">Women's Focus</div>
                    <div className="text-xs text-slate-500 font-medium">Safe & empowering campus</div>
                  </div>
                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                    <div className="text-2xl sm:text-3xl font-black text-amber-600">Integrated</div>
                    <div className="text-sm font-bold text-slate-800 mt-1">Civils & IIT / NEET</div>
                    <div className="text-xs text-slate-500 font-medium">In-house expert coaching</div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-3xl overflow-hidden border-2 border-slate-200 shadow-xl group">
                  <img
                    src="./assets/ev_campus_building.jpg"
                    alt="Eswara Vidyalayam Campus Building"
                    className="w-full h-72 sm:h-84 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-4 bg-white border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm">
                    <span className="font-bold text-[#0f2c59]">Sri Shirdi Sai Group of Institutions</span>
                    <span className="text-[#e11d48] font-black">NH-16 Chemudulanka Campus</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'leadership' && (
            <motion.div
              key="leadership"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3.5">
                <div className="w-12 h-12 rounded-xl bg-rose-50 text-[#e11d48] flex items-center justify-center font-bold">
                  <Quote className="w-6 h-6" />
                </div>
                <h4 className="text-xl sm:text-2xl font-black text-[#0f2c59]">Chairman's Desk</h4>
                <p className="text-xs sm:text-sm font-bold text-amber-600 uppercase tracking-wider">Sri Shirdi Sai Educational Society</p>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed italic">
                  "Educating women is the cornerstone of societal progress. At Eswara Vidyalayam, we give girls the academic environment, moral courage, and competitive skills to reach top medical colleges, IITs, NLUs, and administrative offices."
                </p>
              </div>

              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3.5">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                  <Award className="w-6 h-6" />
                </div>
                <h4 className="text-xl sm:text-2xl font-black text-[#0f2c59]">Principal's Message</h4>
                <p className="text-xs sm:text-sm font-bold text-[#e11d48] uppercase tracking-wider">Academic Leadership</p>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed italic">
                  "Our historic 989/1000 and 988/1000 IPE 2026 state ranks prove that disciplined mentorship, individual doubt resolution, and practical laboratory learning consistently produce champions."
                </p>
              </div>
            </motion.div>
          )}

          {activeTab === 'why-women' && (
            <motion.div
              key="why-women"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {[
                { title: 'Female Empowerment', desc: 'Curriculum & mentorship tailored for women to lead in Medicine, Law & Civils.', icon: Heart, color: 'text-[#e11d48] bg-rose-50' },
                { title: '24/7 Monitored Safety', desc: 'Full CCTV campus, biometric entry, and dedicated resident female wardens.', icon: ShieldCheck, color: 'text-emerald-600 bg-emerald-50' },
                { title: 'Distraction-Free Study', desc: 'Disciplined atmosphere keeping students 100% focused on their rank goals.', icon: Target, color: 'text-amber-600 bg-amber-50' },
                { title: 'State Rankers Tradition', desc: 'Consistently sweeping top state ranks in IPE (989/1000) and LAWCET (Rank 90).', icon: Award, color: 'text-blue-600 bg-blue-50' },
                { title: 'Integrated Coaching', desc: 'Simultaneous coaching for Civils, IIT, NEET & CLAT built into the daily routine.', icon: BookOpen, color: 'text-purple-600 bg-purple-50' },
                { title: 'Morning Lawn Yoga', desc: 'Daily pranayama and fitness on green campus grounds for sound mental health.', icon: Compass, color: 'text-[#e11d48] bg-rose-50' }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-slate-300 transition hover:shadow-md">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-3 ${item.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-base sm:text-lg font-black text-[#0f2c59] mb-1.5">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">{item.desc}</p>
                  </div>
                );
              })}
            </motion.div>
          )}

          {activeTab === 'residential' && (
            <motion.div
              key="residential"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs sm:text-sm font-bold text-emerald-600 uppercase tracking-wider block">
                  Day-Cum-Residential Excellence
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#0f2c59]">
                  A Safe, Inspiring Second Home
                </h3>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                  Choose between comfortable <strong>Day-Scholar</strong> commute with our yellow bus fleet or <strong>Full Residential Boarding</strong> with hygienic dining and resident faculty doubt clearance.
                </p>
                <div className="space-y-2.5 pt-2 text-sm sm:text-base text-slate-700 font-medium">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#e11d48] shrink-0" />
                    <span>Hygienic vegetarian dining prepared fresh daily.</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#e11d48] shrink-0" />
                    <span>Supervised evening study hours with faculty guidance.</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#e11d48] shrink-0" />
                    <span>Dedicated buses covering Chemudulanka, Alamuru, Rajahmundry & Ravulapalem.</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
                  <img
                    src="./assets/ev_transport_buses.jpg"
                    alt="Eswara Vidyalayam Transport Buses"
                    className="w-full h-72 sm:h-84 object-cover"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
