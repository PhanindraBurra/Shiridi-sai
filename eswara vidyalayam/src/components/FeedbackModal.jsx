import React, { useState } from 'react';
import { X, MessageSquareHeart, CheckCircle2, Star, Send, User, Phone, MessageSquare } from 'lucide-react';

export default function FeedbackModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    role: 'Parent',
    rating: 5,
    feedback: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.number || !formData.feedback) return;
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({ name: '', number: '', role: 'Parent', rating: 5, feedback: '' });
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with High-Contrast Crimson & Gold Gradient */}
        <div className="bg-gradient-to-r from-[#0f2c59] via-[#881337] to-[#e11d48] text-white p-5 sm:p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition active:scale-95"
            aria-label="Close Feedback Dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2.5 mb-2">
            <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 font-black text-[11px] uppercase tracking-wider shadow-sm">
              ★ Feedback Desk
            </span>
            <span className="text-xs text-rose-100 font-semibold">Eswara Vidyalayam</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
            <MessageSquareHeart className="w-6 h-6 text-amber-300" />
            <span>Share Your Feedback</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-200 mt-1">
            We value your suggestions and experience. Your voice helps us continually excel!
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-7 max-h-[75vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-md animate-bounce">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h4 className="text-xl font-black text-[#0f2c59]">Thank You for Your Feedback!</h4>
              <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                Dear <strong>{formData.name}</strong>, we have received your valuable feedback. Our management team reviews all suggestions to ensure the highest academic and campus standards.
              </p>
              <div className="pt-3">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-full bg-[#0f2c59] text-white font-bold text-sm hover:bg-[#e11d48] transition"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Field */}
              <div>
                <label className="text-xs sm:text-sm font-extrabold text-slate-700 block mb-1.5">
                  Your Full Name <span className="text-rose-600">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Smt. Lakshmi / Sri Satyanarayana"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-[#e11d48] focus:bg-white transition font-medium"
                  />
                </div>
              </div>

              {/* Number (Phone) Field */}
              <div>
                <label className="text-xs sm:text-sm font-extrabold text-slate-700 block mb-1.5">
                  Mobile Phone Number <span className="text-rose-600">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    maxLength={10}
                    placeholder="10-digit mobile number"
                    value={formData.number}
                    onChange={(e) => setFormData({ ...formData, number: e.target.value.replace(/\D/g, '') })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-[#e11d48] focus:bg-white transition font-medium"
                  />
                </div>
              </div>

              {/* Who Are You? */}
              <div>
                <label className="text-xs sm:text-sm font-extrabold text-slate-700 block mb-1.5">
                  I am a:
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {['Parent', 'Student', 'Alumna', 'Visitor'].map((role) => (
                    <button
                      key={role}
                      type="button"
                      onClick={() => setFormData({ ...formData, role })}
                      className={`py-2 text-xs font-bold rounded-xl border transition ${
                        formData.role === role
                          ? 'bg-[#0f2c59] text-white border-[#0f2c59] shadow-sm'
                          : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {role}
                    </button>
                  ))}
                </div>
              </div>

              {/* Rating */}
              <div>
                <label className="text-xs sm:text-sm font-extrabold text-slate-700 block mb-1">
                  Overall Campus Experience:
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormData({ ...formData, rating: star })}
                      className="p-1 focus:outline-none transition-transform hover:scale-110"
                    >
                      <Star
                        className={`w-6 h-6 ${
                          star <= formData.rating
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-slate-200'
                        }`}
                      />
                    </button>
                  ))}
                  <span className="text-xs font-bold text-slate-500 ml-2">
                    {formData.rating === 5 ? 'Excellent (5/5)' : `${formData.rating} Stars`}
                  </span>
                </div>
              </div>

              {/* Feedback Text Area */}
              <div>
                <label className="text-xs sm:text-sm font-extrabold text-slate-700 block mb-1.5">
                  Your Feedback & Suggestions <span className="text-rose-600">*</span>
                </label>
                <div className="relative">
                  <textarea
                    required
                    rows={4}
                    placeholder="Please tell us about your experience, academics, hostel facilities, faculty support, or suggestions..."
                    value={formData.feedback}
                    onChange={(e) => setFormData({ ...formData, feedback: e.target.value })}
                    className="w-full p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-[#e11d48] focus:bg-white transition font-medium"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#e11d48] to-[#be123c] hover:from-[#be123c] hover:to-[#9f1239] text-white font-black text-sm uppercase tracking-wider shadow-lg shadow-rose-600/30 transition flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Feedback Now</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
