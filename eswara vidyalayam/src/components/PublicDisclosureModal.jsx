import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, ExternalLink, ShieldCheck, X } from 'lucide-react';

const DISCLOSURES = [
  { name: 'BIEAP College Recognition Certificate', ref: 'BIEAP/REC/2026/048', status: 'Certified' },
  { name: 'Sri Shirdi Sai Educational Society Registration', ref: 'REG-NO-142/2004', status: 'Active' },
  { name: 'NH-16 Campus Building Safety Certificate', ref: 'R&B/BLDG/SAFE/99', status: 'Compliant' },
  { name: 'Fire Safety NOC & Disaster Preparedness', ref: 'AP-FIRE/NOC/2025/11', status: 'Approved' },
  { name: 'Water Purity & Sanitary Health Certificate', ref: 'DM&HO/SAN/2025', status: 'Verified' },
  { name: 'Fee Structure & Government Scholarship Norms', ref: 'FEE-POLICY-2026', status: 'Published' },
  { name: 'Teaching Faculty Qualifications & Staff Ratio', ref: 'FACULTY-ROSTER-2026', status: 'Updated' },
  { name: 'Internal Complaints & Women Safety Committee', ref: 'ICC-W-2026', status: 'Constituted' },
  { name: '3-Year IPE Board Results & State Rank Report', ref: 'IPE-RESULTS-2024-26', status: '100% Pass' },
  { name: 'Anti-Ragging Declaration & Campus Protocols', ref: 'ANTI-RAGGING-STATUTE', status: 'Strictly Enforced' },
];

export default function PublicDisclosureModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, y: 15 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: 15 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-7 relative shadow-2xl max-h-[90vh] flex flex-col border border-slate-200"
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-700 hover:bg-[#e11d48] hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-2">
            <div className="p-2.5 rounded-xl bg-rose-50 text-[#e11d48]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-[#0f2c59]">Statutory Disclosures</h3>
              <p className="text-xs sm:text-sm text-amber-700 font-bold">
                Eswara Vidyalayam Junior College for Women • BIEAP
              </p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 mb-4 border-b border-slate-100 pb-3">
            In compliance with Board of Intermediate Education, Andhra Pradesh (BIEAP) guidelines, mandatory regulatory certificates and institutional registers are listed below.
          </p>

          <div className="overflow-y-auto space-y-2.5 pr-1 max-h-[50vh]">
            {DISCLOSURES.map((doc, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition"
              >
                <div className="flex items-center gap-3">
                  <FileText className="w-4 h-4 text-[#e11d48] shrink-0" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#0f2c59]">{doc.name}</h4>
                    <p className="text-xs text-slate-500 font-mono">{doc.ref}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full">
                    {doc.status}
                  </span>
                  <button
                    onClick={() => alert(`Viewing document: ${doc.name} (${doc.ref})`)}
                    className="p-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 transition"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 mt-4 flex items-center justify-between text-xs text-slate-500">
            <span>NH-16, Chemudulanka, Alamuru Mandal, AP</span>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-xl bg-[#0f2c59] text-white font-bold hover:bg-[#1e1b4b] transition text-xs"
            >
              Close
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
