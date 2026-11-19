import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Eye, X } from 'lucide-react';

export default function AchieversSection() {
  const [activeStream, setActiveStream] = useState('bipc');
  const [showPosterModal, setShowPosterModal] = useState(false);

  const ACHIEVERS_DATA = {
    bipc: {
      srInter: [
        { name: 'G. V. K. G. Madhuri', score: '989/1000', badge: 'State Top Score' },
        { name: 'M. D. Suseela', score: '986/1000', badge: 'State Ranker' },
        { name: 'R. H. Naga Likhitha', score: '986/1000', badge: 'State Ranker' },
        { name: 'B. S. Deepthi', score: '984/1000', badge: 'State Ranker' },
      ],
      jrInter: [
        { name: 'T. Suvarna Devi', score: '450/455' },
        { name: 'T. Pujitha', score: '450/455' },
        { name: 'P. V. L. Anitha Jyothi', score: '450/455' },
        { name: 'K. B. L. Pranathi', score: '449/455' },
      ]
    },
    mpc: {
      srInter: [
        { name: 'M. Seetha Sanjana', score: '989/1000', badge: 'State Top Score' },
        { name: 'G. K. S. Vardhini', score: '988/1000', badge: 'State Ranker' },
        { name: 'N. Lakshmi Sireesha', score: '986/1000', badge: 'State Ranker' },
        { name: 'K. D. N. L. Dhyana Sri', score: '986/1000', badge: 'State Ranker' },
      ],
      jrInter: [
        { name: 'D. V. A. L. Shailu', score: '465/470' },
        { name: 'M. T. Sri Kamakshi', score: '465/470' },
        { name: 'V. L. Padma Sai', score: '465/470' },
        { name: 'B. J. V. V. D. Bhavani', score: '465/470' },
        { name: 'K. S. S. Anwitha', score: '465/470' },
        { name: 'M. Deepthi', score: '465/470' },
      ]
    },
    humanities: {
      srInter: [
        { name: 'T. Haritha', score: '978/1000', badge: 'LAWCET Rank 90' },
        { name: 'D. Jay Durga Srivalli', score: '977/1000', badge: 'CUET Qualifier' },
        { name: 'K. Navya Phanisree', score: '976/1000', badge: 'LAWCET Rank 212' },
      ],
      jrInter: [
        { name: 'S. Surya Pallavi', score: '494/500' },
        { name: 'T. S. S. Lakshmi Bhanu', score: '488/500' },
        { name: 'V. Chaitanya', score: '487/500' },
        { name: 'Y. Sri Devi Alekya', score: '487/500' },
      ]
    },
    national: {
      lawcet: [
        { name: 'T. Haritha', rank: 'Rank 90', exam: 'AP-LAWCET' },
        { name: 'MD. Taseen', rank: 'Rank 100', exam: 'AP-LAWCET' },
        { name: 'K. Navya Phanisree', rank: 'Rank 212', exam: 'AP-LAWCET' },
        { name: 'D. Bhanu Sri', rank: 'Rank 1300', exam: 'AP-LAWCET' },
      ],
      competitive: [
        { name: 'T. Lohitha', role: 'JEE Mains Qualifier' },
        { name: 'P. M. Pranathi', role: 'JEE Mains Qualifier' },
        { name: 'G. Madhuri', role: 'NEET Qualifier' },
        { name: 'B. S. Deepthi', role: 'NEET Qualifier' },
      ]
    }
  };

  return (
    <section id="achievers" className="py-20 bg-white relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs sm:text-sm font-black uppercase tracking-widest shadow-sm">
            <Trophy className="w-4 h-4 text-amber-600" />
            IPE 2026 State Rankers
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0f2c59] tracking-tight">
            Congratulations To All <span className="crimson-gradient-text">Achievers!</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium">
            Top scores across Andhra Pradesh in BiPC, MPC, Civils Foundation, AP-LAWCET and CUET.
          </p>

          <button
            onClick={() => setShowPosterModal(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-rose-50 border border-rose-200 text-[#e11d48] hover:bg-rose-100 text-xs sm:text-sm font-black shadow-sm transition"
          >
            <Eye className="w-4 h-4" />
            <span>View Official Rankers Poster</span>
          </button>
        </div>

        {/* Stream Selector Buttons */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-8">
          {[
            { id: 'bipc', label: 'BiPC (Medical)', sub: '989/1000 Top Score' },
            { id: 'mpc', label: 'MPC (IIT-JEE)', sub: '989/1000 Top Score' },
            { id: 'humanities', label: 'Humanities & Civils', sub: '978/1000 State Top' },
            { id: 'national', label: 'Competitive Ranks', sub: 'LAWCET • JEE • NEET' },
          ].map((stream) => (
            <button
              key={stream.id}
              onClick={() => setActiveStream(stream.id)}
              className={`px-5 sm:px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all text-left flex flex-col ${
                activeStream === stream.id
                  ? 'bg-[#0f2c59] text-white shadow-lg scale-105'
                  : 'bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <span className="font-black text-sm sm:text-base">{stream.label}</span>
              <span className={`text-xs font-bold ${activeStream === stream.id ? 'text-amber-300' : 'text-amber-600'}`}>
                {stream.sub}
              </span>
            </button>
          ))}
        </div>

        {/* Rankers Display */}
        {activeStream !== 'national' ? (
          <div className="space-y-7">
            <div>
              <div className="text-xs sm:text-sm font-black text-[#0f2c59] uppercase tracking-wider mb-3.5">
                Senior Intermediate (1000 Marks)
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {ACHIEVERS_DATA[activeStream].srInter.map((student, idx) => (
                  <div
                    key={idx}
                    className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-rose-300 hover:shadow-md transition"
                  >
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200">
                        {student.badge}
                      </span>
                      <Trophy className="w-5 h-5 text-amber-500" />
                    </div>
                    <div className="text-3xl sm:text-4xl font-black text-[#e11d48]">
                      {student.score}
                    </div>
                    <div className="text-base sm:text-lg font-black text-[#0f2c59] mt-1">{student.name}</div>
                    <div className="text-xs text-slate-500 font-medium">Eswara Vidyalayam Jr College</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="text-xs sm:text-sm font-black text-slate-600 uppercase tracking-wider mb-3.5">
                Junior Intermediate (First Year Marks)
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
                {ACHIEVERS_DATA[activeStream].jrInter.map((student, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center hover:bg-slate-100 transition"
                  >
                    <div className="text-lg sm:text-xl font-black text-[#0f2c59]">{student.score}</div>
                    <div className="text-xs sm:text-sm font-bold text-slate-700 mt-1 leading-tight">{student.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <h4 className="text-base sm:text-lg font-black text-[#0f2c59] uppercase">AP-LAWCET 2026 State Ranks</h4>
              <div className="grid grid-cols-2 gap-3.5 pt-1">
                {ACHIEVERS_DATA.national.lawcet.map((law, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-xl sm:text-2xl font-black text-[#e11d48]">{law.rank}</div>
                    <div className="text-sm font-bold text-slate-800 mt-0.5">{law.name}</div>
                    <div className="text-xs text-slate-500 font-medium">{law.exam}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <h4 className="text-base sm:text-lg font-black text-[#0f2c59] uppercase">JEE Mains & NEET Qualifiers</h4>
              <div className="grid grid-cols-2 gap-3.5 pt-1">
                {ACHIEVERS_DATA.national.competitive.map((comp, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-xs sm:text-sm font-bold text-amber-700">{comp.role}</div>
                    <div className="text-sm font-bold text-slate-800 mt-0.5">{comp.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Poster Modal */}
        {showPosterModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowPosterModal(false)}
          >
            <div
              className="relative max-w-3xl w-full bg-white rounded-3xl p-3 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowPosterModal(false)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-900 text-white hover:bg-[#e11d48]"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="max-h-[85vh] overflow-y-auto rounded-2xl">
                <img
                  src="./assets/ev_achievers_2026.jpg"
                  alt="Eswara Vidyalayam 2026 Achievers Official Poster"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
