import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { GraduationCap, CheckCircle2, Download, FileText, Send, Sparkles } from 'lucide-react';

export default function AdmissionsSection() {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    phone: '',
    email: '',
    stream: 'BiPC (NEET / Medical Orientation)',
    boarding: 'Day Scholar (With Bus Facility)',
    tenthPercentage: '85% & Above',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 90,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleDownloadBrochure = () => {
    alert("Official College Prospectus & Syllabus Guide. For inquiries, call: 9441252244.");
  };

  return (
    <section id="admissions" className="py-20 bg-white relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-[#e11d48] text-xs sm:text-sm font-black uppercase tracking-widest shadow-sm">
            <GraduationCap className="w-4 h-4" />
            Admissions 2026 - 2027
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0f2c59] tracking-tight">
            Begin Your Intermediate <span className="crimson-gradient-text">Journey</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium">
            Admissions open for BiPC, MPC, and Humanities with integrated Civils, IIT, NEET & CLAT coaching.
          </p>
        </div>

        {/* 4 Steps Journey */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { step: '01', title: 'Submit Inquiry', desc: 'Call 9441252244 or fill the online application form.' },
            { step: '02', title: 'Campus Visit', desc: 'Tour science labs, study halls & residential hostel on NH-16.' },
            { step: '03', title: 'Counseling & Merit', desc: 'Participate in ₹1 Cr Scholarship Test or present 10th marks.' },
            { step: '04', title: 'Seat Allotment', desc: 'Choose Day Scholar (with bus) or Residential Hostel.' }
          ].map((s, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 relative shadow-sm hover:shadow-md transition">
              <span className="text-4xl font-black text-[#0f2c59]/15 absolute top-3 right-4 font-mono">{s.step}</span>
              <div className="w-9 h-9 rounded-full bg-[#0f2c59] text-white font-bold flex items-center justify-center mb-3 text-sm">
                {idx + 1}
              </div>
              <h3 className="text-base sm:text-lg font-black text-[#0f2c59] mb-1.5">{s.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-snug">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Brochure & Required Documents */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-md space-y-3.5">
              <Sparkles className="w-7 h-7 text-amber-500" />
              <h3 className="text-xl sm:text-2xl font-black text-[#0f2c59]">Information Prospectus</h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Contains course syllabi, competitive entrance timetables, hostel rules, and the ₹1 Crore Star Scholarship details.
              </p>

              <button
                onClick={handleDownloadBrochure}
                className="w-full py-3.5 rounded-xl bg-[#0f2c59] hover:bg-[#1e1b4b] text-white font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition"
              >
                <Download className="w-4 h-4" />
                <span>Download Prospectus 2026-27</span>
              </button>
            </div>

            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-md space-y-3">
              <div className="flex items-center gap-2 text-amber-700 font-black text-xs sm:text-sm uppercase tracking-wider">
                <FileText className="w-4 h-4" />
                <span>Required Documents</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                {[
                  '10th SSC Marks Memo / Hall Ticket',
                  'Original Transfer Certificate (TC)',
                  'Aadhaar Card Copies of Student & Parent',
                  'Passport size photographs (6 copies)',
                  'Caste / Income Certificate (if applicable)'
                ].map((doc, i) => (
                  <li key={i} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Admission Application Form */}
          <div className="lg:col-span-7 p-6 sm:p-9 rounded-3xl bg-slate-50 border border-slate-200 shadow-md">
            <div className="mb-5 pb-3.5 border-b border-slate-200">
              <h3 className="text-xl sm:text-2xl font-black text-[#0f2c59]">Online Admission Application</h3>
              <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
                Fill the details below. Our admissions counselor will call you within 2 hours.
              </p>
            </div>

            {submitted ? (
              <div className="py-8 text-center space-y-2.5">
                <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-lg font-black text-[#0f2c59]">Application Submitted!</h4>
                <p className="text-sm text-slate-600">
                  Thank you, <strong>{formData.studentName}</strong>. Our admissions desk will call <strong>{formData.phone}</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-sm text-[#e11d48] font-bold hover:underline pt-2 block mx-auto"
                >
                  Submit another application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="text-xs sm:text-sm font-bold text-slate-700 block mb-1">Student Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Student name"
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-[#e11d48] transition font-medium"
                    />
                  </div>

                  <div>
                    <label className="text-xs sm:text-sm font-bold text-slate-700 block mb-1">Parent Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Parent name"
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-[#e11d48] transition font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="text-xs sm:text-sm font-bold text-slate-700 block mb-1">Mobile (WhatsApp) *</label>
                    <input
                      type="tel"
                      required
                      placeholder="10-digit mobile number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-[#e11d48] transition font-medium"
                    />
                  </div>

                  <div>
                    <label className="text-xs sm:text-sm font-bold text-slate-700 block mb-1">Stream Orientation *</label>
                    <select
                      value={formData.stream}
                      onChange={(e) => setFormData({ ...formData, stream: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-[#e11d48] transition font-medium"
                    >
                      <option value="BiPC (NEET / Medical Orientation)">BiPC (NEET / Medical)</option>
                      <option value="MPC (IIT-JEE / Engineering Orientation)">MPC (IIT-JEE / Engineering)</option>
                      <option value="Humanities (Civils & CLAT Orientation)">Humanities (Civils & CLAT)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="text-xs sm:text-sm font-bold text-slate-700 block mb-1">Boarding Option *</label>
                    <select
                      value={formData.boarding}
                      onChange={(e) => setFormData({ ...formData, boarding: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-[#e11d48] transition font-medium"
                    >
                      <option value="Day Scholar (With Bus Facility)">Day Scholar (College Bus Facility)</option>
                      <option value="Day Scholar (Self Commute)">Day Scholar (Self Commute)</option>
                      <option value="Residential Hostel">Residential Hostel (Full Boarding)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs sm:text-sm font-bold text-slate-700 block mb-1">10th Marks Slab *</label>
                    <select
                      value={formData.tenthPercentage}
                      onChange={(e) => setFormData({ ...formData, tenthPercentage: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-[#e11d48] transition font-medium"
                    >
                      <option value="85% & Above">85% & Above (100% Scholarship)</option>
                      <option value="75% - 84%">75% - 84% (75% Scholarship)</option>
                      <option value="65% - 74%">65% - 74% (50% Scholarship)</option>
                      <option value="55% - 64%">55% - 64% (25% Scholarship)</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#e11d48] hover:bg-[#be123c] text-white font-black text-sm uppercase tracking-wider shadow-md shadow-rose-600/30 transition flex items-center justify-center gap-2 mt-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Admission Form</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
