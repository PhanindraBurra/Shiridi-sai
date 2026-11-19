import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Calendar, MapPin, CheckCircle2, Send, Eye, X } from 'lucide-react';

export default function ScholarshipSection() {
  const [registered, setRegistered] = useState(false);
  const [showPosterModal, setShowPosterModal] = useState(false);
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    phone: '',
    schoolName: '',
    targetStream: 'BiPC (Medical/NEET)',
    expectedPercentage: '85% & Above (100% Scholarship)'
  });

  const handleRegister = (e) => {
    e.preventDefault();
    setRegistered(true);
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.log(err);
    }
  };

  const SCHOLARSHIP_TIERS = [
    { range: '85% & Above', award: '100% Scholarship', color: 'border-rose-300 bg-rose-50 text-[#e11d48]', badge: 'Full Tuition Waiver' },
    { range: '75% - 84%', award: '75% Scholarship', color: 'border-amber-300 bg-amber-50 text-amber-800', badge: '75% Tuition Waiver' },
    { range: '65% - 74%', award: '50% Scholarship', color: 'border-blue-300 bg-blue-50 text-blue-800', badge: '50% Tuition Waiver' },
    { range: '55% - 64%', award: '25% Scholarship', color: 'border-purple-300 bg-purple-50 text-purple-800', badge: '25% Tuition Waiver' },
  ];

  return (
    <section id="scholarship" className="py-20 bg-slate-50 relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-950 text-xs sm:text-sm font-black uppercase tracking-widest shadow-sm">
            <Sparkles className="w-4 h-4 text-amber-600" />
            ₹1 Crore Star Scholarship Fund
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0f2c59] tracking-tight">
            Earn Your Scholarship, <span className="crimson-gradient-text">Shape Your Future!</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium">
            For 10th-grade girl students entering Intermediate. Rewarding academic merit with up to 100% fee waiver.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-1">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-800 text-xs sm:text-sm font-bold shadow-sm">
              <Calendar className="w-4 h-4 text-[#e11d48]" />
              <span>Sunday @ 9:00 AM</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-800 text-xs sm:text-sm font-bold shadow-sm">
              <MapPin className="w-4 h-4 text-amber-600" />
              <span>Venue: NH-16 Chemudulanka Campus</span>
            </span>
            <button
              onClick={() => setShowPosterModal(true)}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-[#e11d48] text-xs sm:text-sm font-black hover:bg-rose-100 transition shadow-sm"
            >
              <Eye className="w-4 h-4" />
              <span>View Scholarship Poster</span>
            </button>
          </div>
        </div>

        {/* 4 Scholarship Tiers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {SCHOLARSHIP_TIERS.map((tier, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl border-2 ${tier.color} relative shadow-sm hover:shadow-md transition`}
            >
              <div className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                10th Percentage Slab
              </div>
              <div className="text-2xl sm:text-3xl font-black text-[#0f2c59] mb-1">
                {tier.range}
              </div>
              <div className="text-xl sm:text-2xl font-black mb-2">
                {tier.award}
              </div>
              <div className="pt-2.5 border-t border-slate-200/60 text-xs sm:text-sm font-bold text-slate-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{tier.badge}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Registration Form & Poster Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          <div className="lg:col-span-7 p-6 sm:p-9 rounded-3xl bg-white border border-slate-200 shadow-md">
            <h3 className="text-xl sm:text-2xl font-black text-[#0f2c59] mb-1">Register for Scholarship Test</h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-5 font-medium">
              Enter your details to receive sample paper and exam registration.
            </p>

            {registered ? (
              <div className="py-8 text-center space-y-2.5">
                <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-lg font-black text-[#0f2c59]">Registration Submitted!</h4>
                <p className="text-sm text-slate-600">
                  Hall ticket details will be SMSed to <strong>{formData.phone}</strong>.
                </p>
                <button
                  onClick={() => setRegistered(false)}
                  className="text-sm text-[#e11d48] font-bold hover:underline pt-2"
                >
                  Register another candidate
                </button>
              </div>
            ) : (
              <form onSubmit={handleRegister} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="text-xs sm:text-sm font-bold text-slate-700 block mb-1">Student Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. K. Sravani"
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-[#e11d48] focus:bg-white transition font-medium"
                    />
                  </div>

                  <div>
                    <label className="text-xs sm:text-sm font-bold text-slate-700 block mb-1">Parent Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Parent's Name"
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-[#e11d48] focus:bg-white transition font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="text-xs sm:text-sm font-bold text-slate-700 block mb-1">Mobile (WhatsApp) *</label>
                    <input
                      type="tel"
                      required
                      placeholder="10-digit Mobile"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-[#e11d48] focus:bg-white transition font-medium"
                    />
                  </div>

                  <div>
                    <label className="text-xs sm:text-sm font-bold text-slate-700 block mb-1">Current School *</label>
                    <input
                      type="text"
                      required
                      placeholder="School name, town"
                      value={formData.schoolName}
                      onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-[#e11d48] focus:bg-white transition font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="text-xs sm:text-sm font-bold text-slate-700 block mb-1">Target Stream *</label>
                    <select
                      value={formData.targetStream}
                      onChange={(e) => setFormData({ ...formData, targetStream: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-[#e11d48] focus:bg-white transition font-medium"
                    >
                      <option value="BiPC (Medical/NEET)">BiPC (Medical / NEET)</option>
                      <option value="MPC (IIT-JEE)">MPC (IIT-JEE / Engineering)</option>
                      <option value="Humanities (Civils/CLAT)">Humanities (Civils & CLAT)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs sm:text-sm font-bold text-slate-700 block mb-1">Expected Marks *</label>
                    <select
                      value={formData.expectedPercentage}
                      onChange={(e) => setFormData({ ...formData, expectedPercentage: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-[#e11d48] focus:bg-white transition font-medium"
                    >
                      <option value="85% & Above (100% Scholarship)">85% & Above (100% Scholarship)</option>
                      <option value="75% - 84% (75% Scholarship)">75% - 84% (75% Scholarship)</option>
                      <option value="65% - 74% (50% Scholarship)">65% - 74% (50% Scholarship)</option>
                      <option value="55% - 64% (25% Scholarship)">55% - 64% (25% Scholarship)</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#e11d48] hover:bg-[#be123c] text-white font-black text-sm uppercase tracking-wider shadow-md shadow-rose-600/30 transition flex items-center justify-center gap-2 mt-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Register for Scholarship Test</span>
                </button>
              </form>
            )}
          </div>

          {/* Poster Preview */}
          <div className="lg:col-span-5 p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-md flex flex-col justify-between">
            <div>
              <span className="text-xs font-black text-amber-800 uppercase bg-amber-50 px-3 py-1 rounded-full inline-block mb-2 border border-amber-200">
                Official Poster
              </span>
              <h4 className="text-lg sm:text-xl font-black text-[#0f2c59] mb-1">Star Scholarship Awareness Program</h4>
              <p className="text-xs sm:text-sm text-slate-600 mb-3.5">
                Venue: NH-16, Chemudulanka, Alamuru Mandal. Phone: 9441252244, 9298600244.
              </p>
              <div className="rounded-2xl overflow-hidden border border-slate-200 cursor-pointer" onClick={() => setShowPosterModal(true)}>
                <img
                  src="./assets/ev_scholarship_poster.jpg"
                  alt="Scholarship Poster"
                  className="w-full h-52 object-cover object-top hover:scale-105 transition duration-300"
                />
              </div>
            </div>

            <button
              onClick={() => setShowPosterModal(true)}
              className="w-full mt-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#0f2c59] text-xs sm:text-sm font-black transition flex items-center justify-center gap-2"
            >
              <Eye className="w-4 h-4" />
              <span>Expand Poster</span>
            </button>
          </div>

        </div>

        {/* Modal */}
        {showPosterModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowPosterModal(false)}
          >
            <div
              className="relative max-w-2xl w-full bg-white rounded-3xl p-3 shadow-2xl"
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
                  src="./assets/ev_scholarship_poster.jpg"
                  alt="Eswara Vidyalayam ₹1 Crore Scholarship Poster"
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
