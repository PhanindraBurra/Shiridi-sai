import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, CheckCircle2, Navigation } from 'lucide-react';

const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function ContactSection() {
  const [formSent, setFormSent] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', phone: '', message: '' });

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-[#e11d48] text-xs sm:text-sm font-black uppercase tracking-widest shadow-sm">
            <MessageSquare className="w-4 h-4" />
            Contact & Campus Location
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0f2c59] tracking-tight">
            Connect With <span className="crimson-gradient-text">Eswara Vidyalayam</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium">
            Visit our campus on NH-16 Chemudulanka or speak directly with our admissions office.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Contact Details Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-md space-y-5">
              <div>
                <span className="text-xs font-black uppercase text-amber-700 block tracking-wider">
                  Sri Shirdi Sai Educational Institutions
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#0f2c59] mt-0.5">Chemudulanka Campus</h3>
              </div>

              {/* Campus Address */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-rose-50 text-[#e11d48] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-[#0f2c59]">Campus Address</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    <strong>Eswara Vidyalayam Junior College for Women</strong><br />
                    NH-16, Chemudulanka, Alamuru Mandal,<br />
                    Dr. B. R. Ambedkar Konaseema Dist, AP – 533232
                  </p>
                </div>
              </div>

              {/* Helplines */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-amber-50 text-amber-700 shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-[#0f2c59]">Admissions Helplines</h4>
                  <div className="space-y-1 mt-1">
                    <a href="tel:9441252244" className="text-xs sm:text-sm font-bold text-[#e11d48] hover:underline block">
                      +91 94412 52244 (Admissions Desk)
                    </a>
                    <a href="tel:9298600244" className="text-xs sm:text-sm font-bold text-slate-800 hover:underline block">
                      +91 92986 00244 (Campus Office)
                    </a>
                    <a href="tel:9441262244" className="text-xs sm:text-sm font-bold text-slate-800 hover:underline block">
                      +91 94412 62244 (Accounts & Hostels)
                    </a>
                  </div>
                </div>
              </div>

              {/* Instagram & Email */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-blue-50 text-blue-700 shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-[#0f2c59]">Email & Social</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                    admissions@eswarvidyalaya.edu.in
                  </p>
                  <a
                    href="https://www.instagram.com/sri.shirdi.sai.vidyaniketan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-pink-600 hover:underline font-bold mt-1"
                  >
                    <InstagramIcon className="w-4 h-4" />
                    <span>@sri.shirdi.sai.vidyaniketan</span>
                  </a>
                </div>
              </div>

              {/* Office Timings */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-[#0f2c59]">Office Hours</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">
                    Monday to Saturday: 8:30 AM – 5:30 PM<br />
                    Sunday: 9:00 AM – 1:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="lg:col-span-7 space-y-4">
            <div className="p-6 sm:p-9 rounded-3xl bg-white border border-slate-200 shadow-md">
              <h3 className="text-xl sm:text-2xl font-black text-[#0f2c59] mb-1">Send a Message</h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-5 font-medium">
                Have a question regarding bus routes, hostel, or scholarships? Write to us below.
              </p>

              {formSent ? (
                <div className="py-8 text-center space-y-2.5">
                  <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-black text-[#0f2c59]">Message Sent!</h4>
                  <p className="text-sm text-slate-600">
                    Thank you, {contactForm.name}. Our team will call you back shortly.
                  </p>
                  <button
                    onClick={() => setFormSent(false)}
                    className="text-sm font-bold text-[#e11d48] hover:underline pt-2"
                  >
                    Send another query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="text-xs sm:text-sm font-bold text-slate-700 block mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Enter full name"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-[#e11d48] transition font-medium"
                      />
                    </div>

                    <div>
                      <label className="text-xs sm:text-sm font-bold text-slate-700 block mb-1">Mobile Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="10-digit mobile"
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-[#e11d48] transition font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs sm:text-sm font-bold text-slate-700 block mb-1">Message *</label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Write your query here..."
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-[#e11d48] transition font-medium"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#e11d48] hover:bg-[#be123c] text-white font-black text-sm uppercase tracking-wider shadow-md shadow-rose-600/30 transition flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>

            {/* Highway Route Guidance */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <Navigation className="w-5 h-5 text-[#e11d48] shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-[#0f2c59]">NH-16 Highway, Chemudulanka, Alamuru Mandal</span>
              </div>
              <a
                href="https://maps.google.com/?q=Sri+Shirdi+Sai+Vidya+Niketan+Chemudulanka"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm text-[#e11d48] font-black hover:underline"
              >
                Open Google Maps →
              </a>
            </div>
          </div>

        </div>

        {/* Responsive Chemudulanka Campus Google Map Embed */}
        <div className="mt-10 rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-white">
          <div className="p-4 sm:p-6 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-rose-100 text-[#e11d48] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-black text-[#0f2c59]">
                  Eswara Vidyalayam Junior College — Campus Map & Directions
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 font-medium">
                  NH-16 Highway, Chemudulanka, Alamuru Mandal, Dr. B.R. Ambedkar Konaseema Dist, AP — 533232
                </p>
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=Sri+Shirdi+Sai+Vidya+Niketan+Chemudulanka"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-[#e11d48] text-white font-bold text-xs hover:bg-[#be123c] shadow-sm transition shrink-0"
            >
              Open in Google Maps ↗
            </a>
          </div>
          <div className="w-full h-80 sm:h-96">
            <iframe
              src="https://maps.google.com/maps?q=Sri%20Shirdi%20Sai%20Vidya%20Niketan%20Chemudulanka&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Eswara Vidyalayam Junior College Chemudulanka Campus Location Map"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
