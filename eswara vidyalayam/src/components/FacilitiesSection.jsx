import React, { useState } from 'react';
import { Microscope, FlaskConical, Laptop, BookOpen, Bus, Sun, Building2, CheckCircle2 } from 'lucide-react';

const FACILITIES = [
  {
    id: 'physics-lab',
    title: 'Physics Research Lab',
    category: 'Science Labs',
    image: './assets/ev_physics_lab.jpg',
    icon: Microscope,
    tagline: 'Precision Optics & Mechanics',
    desc: 'Equipped with precision optical benches, galvanometers, vernier calipers, and electronic circuit apparatus for hands-on experimentation.',
    features: ['Precision optical benches & light sources', 'Digital & analog galvanometers', 'Mechanics & resonance apparatus', 'Comprehensive lab safety standards']
  },
  {
    id: 'chemistry-lab',
    title: 'Chemistry Laboratory',
    category: 'Science Labs',
    image: './assets/ev_chemistry_lab_2.jpg',
    icon: FlaskConical,
    tagline: 'Volumetric Titrations & Analysis',
    desc: 'Spacious laboratory with individual titration stands, chemical safety hoods, and digital balances for qualitative and quantitative analysis.',
    features: ['Individual burette stations', 'Complete reagent racks & eyewash', 'Digital analytical precision balances', 'Strict laboratory safety protocol']
  },
  {
    id: 'biology-lab',
    title: 'Botany & Specimen Lab',
    category: 'Science Labs',
    image: './assets/ev_botany_lab.jpg',
    icon: Microscope,
    tagline: 'Preserved Flora Specimens & Microscopy',
    desc: 'Houses preserved botanical and zoological specimens in glass jars, herbarium sheets, seed jars, and high-power compound microscopes.',
    features: ['Compound & monocular microscopes', 'Preserved specimen jar library', 'Herbarium sheets & seed classification', 'Microscopic slide preparation']
  },
  {
    id: 'computer-lab',
    title: 'Digital Computer Lab',
    category: 'Digital Tech',
    image: './assets/ev_computer_lab.jpg',
    icon: Laptop,
    tagline: 'High-Speed Workstations & CBT Mocks',
    desc: 'Features modern computer terminals with gigabit LAN for IT training and simulated Computer-Based Tests (CBT) for JEE & CUET.',
    features: ['Networked high-speed PCs', 'CBT Mock test simulation software', 'Ergonomic workstations & power backup', 'Faculty-guided computer modules']
  },
  {
    id: 'library',
    title: 'Central Library & Reading Zone',
    category: 'Academics',
    image: './assets/ev_library_reading.jpg',
    icon: BookOpen,
    tagline: 'Reference Books & Quiet Ambience',
    desc: 'A calm study environment with NCERT textbooks, competitive entrance guides (NEET, JEE, Civils, CLAT), and daily national periodicals.',
    features: ['5,000+ reference volumes', 'Individual quiet study tables', 'Daily newspapers & current affairs', 'Comfortable reading space']
  },
  {
    id: 'studyhalls',
    title: 'Study Halls & Classrooms',
    category: 'Academics',
    image: './assets/ev_studyhall_navy.jpg',
    icon: Building2,
    tagline: 'Focused Study Environment',
    desc: 'Well-ventilated classrooms and study halls with inspirational quote murals, ideal for supervised evening study hours.',
    features: ['Ergonomic dual-bench seating', 'Natural light & ventilation', 'Motivational quotes environment', 'Supervised faculty presence']
  },
  {
    id: 'transport',
    title: 'Dedicated Bus Fleet',
    category: 'Campus Life',
    image: './assets/ev_transport_buses.jpg',
    icon: Bus,
    tagline: 'Safe Transit Across NH-16',
    desc: 'Fleet of institutional buses (ESWARVIDYALAYA JR COLLEGE) covering Chemudulanka, Alamuru, Rajahmundry, Ravulapalem, and Mandapeta.',
    features: ['GPS tracking & experienced drivers', 'Female attendant support', 'Punctual morning & evening routes', 'Wide East Godavari coverage']
  },
  {
    id: 'yoga',
    title: 'Lawn Yoga & Wellness',
    category: 'Wellness',
    image: './assets/ev_yoga_wellness.jpg',
    icon: Sun,
    tagline: 'Morning Meditation on Green Grounds',
    desc: 'Daily morning pranayama, yoga, and meditation on manicured campus lawns for stress-free minds and physical stamina.',
    features: ['Open-air manicured green lawn', 'Certified yoga instructor', 'Concentration & mindfulness drills', 'Healthy routine for students']
  }
];

export default function FacilitiesSection() {
  const [activeTab, setActiveTab] = useState(FACILITIES[0]);

  return (
    <section id="facilities" className="py-20 bg-white relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-[#e11d48] text-xs sm:text-sm font-black uppercase tracking-widest shadow-sm">
            <Building2 className="w-4 h-4" />
            Infrastructure & Facilities
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0f2c59] tracking-tight">
            World-Class Campus, <span className="crimson-gradient-text">Unmatched Labs</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium">
            From science and computer labs to safe bus transit and morning lawn yoga on NH-16 Chemudulanka.
          </p>
        </div>

        {/* Facilities Selector Pills */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-8">
          {FACILITIES.map((facility) => {
            const isSelected = activeTab.id === facility.id;
            const Icon = facility.icon;
            return (
              <button
                key={facility.id}
                onClick={() => setActiveTab(facility)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-black transition-all flex items-center gap-2 ${
                  isSelected
                    ? 'bg-[#0f2c59] text-white shadow-lg scale-105'
                    : 'bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100 shadow-sm'
                }`}
              >
                <Icon className="w-4 h-4 text-amber-500" />
                <span>{facility.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Facility Card */}
        <div className="p-6 sm:p-9 rounded-3xl bg-slate-50 border border-slate-200 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Info Side */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="px-3 py-1 rounded-full text-xs font-black bg-amber-50 text-amber-800 border border-amber-200 uppercase tracking-wider">
                  {activeTab.category}
                </span>
                <span className="text-xs sm:text-sm text-[#e11d48] font-bold">• {activeTab.tagline}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0f2c59]">
                {activeTab.title}
              </h3>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                {activeTab.desc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {activeTab.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200 text-sm sm:text-base text-slate-800 font-semibold shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#e11d48] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Photo Showcase */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                <img
                  src={activeTab.image}
                  alt={activeTab.title}
                  className="w-full h-64 sm:h-72 object-cover"
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
