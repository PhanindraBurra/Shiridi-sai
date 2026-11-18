import React from 'react';
import { Phone, GraduationCap, MapPin, MessageSquare } from 'lucide-react';

export default function MobileBottomBar({ onNavigate }) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/98 backdrop-blur-md border-t border-slate-200 p-2.5 px-3 shadow-2xl">
      <div className="grid grid-cols-4 gap-2 text-center">
        <a
          href="tel:9441252244"
          className="flex flex-col items-center justify-center p-2 rounded-xl bg-slate-50 border border-slate-200 text-[#e11d48] active:scale-95 transition"
        >
          <Phone className="w-4 h-4 mb-0.5" />
          <span className="text-xs font-black">Call Us</span>
        </a>

        <a
          href="https://wa.me/919441252244"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 active:scale-95 transition"
        >
          <MessageSquare className="w-4 h-4 mb-0.5" />
          <span className="text-xs font-black">WhatsApp</span>
        </a>

        <a
          href="https://maps.google.com/?q=Chemudulanka+Alamuru+Mandal+NH16"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 active:scale-95 transition"
        >
          <MapPin className="w-4 h-4 mb-0.5 text-amber-600" />
          <span className="text-xs font-black">Location</span>
        </a>

        <button
          onClick={() => onNavigate('admissions')}
          className="flex flex-col items-center justify-center p-2 rounded-xl bg-[#e11d48] text-white font-black shadow-sm active:scale-95 transition"
        >
          <GraduationCap className="w-4 h-4 mb-0.5" />
          <span className="text-xs font-black uppercase">Apply</span>
        </button>
      </div>
    </div>
  );
}
