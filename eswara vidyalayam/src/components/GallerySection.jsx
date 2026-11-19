import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

const GALLERY_ITEMS = [
  { id: 1, src: './assets/ev_campus_building.jpg', title: 'Main Campus Building', category: 'Campus & Fleet' },
  { id: 2, src: './assets/ev_transport_buses.jpg', title: 'College Bus Fleet', category: 'Campus & Fleet' },
  { id: 3, src: './assets/ev_physics_lab.jpg', title: 'Physics Research Lab', category: 'Laboratories' },
  { id: 4, src: './assets/ev_botany_lab.jpg', title: 'Botany & Specimen Lab', category: 'Laboratories' },
  { id: 5, src: './assets/ev_chemistry_lab_2.jpg', title: 'Chemistry Titration Lab', category: 'Laboratories' },
  { id: 6, src: './assets/ev_chemistry_lab_1.jpg', title: 'Chemistry Solutions', category: 'Laboratories' },
  { id: 7, src: './assets/ev_biology_microscope.jpg', title: 'Microscopy Examination', category: 'Laboratories' },
  { id: 8, src: './assets/ev_computer_lab.jpg', title: 'Digital Computer Lab', category: 'Digital & Library' },
  { id: 9, src: './assets/ev_library_reading.jpg', title: 'Central Library', category: 'Digital & Library' },
  { id: 10, src: './assets/ev_studyhall_navy.jpg', title: 'Supervised Study Hall', category: 'Classrooms' },
  { id: 11, src: './assets/ev_classroom_green.jpg', title: 'Classroom Session', category: 'Classrooms' },
  { id: 12, src: './assets/ev_yoga_wellness.jpg', title: 'Lawn Yoga & Wellness', category: 'Culture & Wellness' },
  { id: 13, src: './assets/ev_cultural_fest.jpg', title: 'Dasara Utsav Celebration', category: 'Culture & Wellness' },
  { id: 14, src: './assets/ev_microscopy_lab.jpg', title: 'Biological Analysis', category: 'Laboratories' },
  { id: 15, src: './assets/ev_achievers_2026.jpg', title: 'State Rankers 2026', category: 'Campus & Fleet' }
];

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = ['All', 'Laboratories', 'Classrooms', 'Campus & Fleet', 'Digital & Library', 'Culture & Wellness'];

  const filteredImages = activeFilter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prevImage = () => {
    setLightboxIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="py-20 bg-white relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-[#e11d48] text-xs sm:text-sm font-black uppercase tracking-widest shadow-sm">
            <Camera className="w-4 h-4" />
            Photo Gallery
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0f2c59] tracking-tight">
            Glimpses of <span className="crimson-gradient-text">Campus Life</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium">
            Authentic photographs of our science labs, smart classrooms, bus fleet, library, and cultural celebrations.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex justify-center gap-2.5 mb-8 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-black transition-all ${
                activeFilter === cat
                  ? 'bg-[#0f2c59] text-white shadow-md scale-105'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {filteredImages.map((img, idx) => (
            <div
              key={img.id}
              onClick={() => openLightbox(idx)}
              className="group relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 cursor-pointer aspect-[4/3] shadow-sm hover:shadow-md transition-all"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f2c59]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-3.5">
                <span className="text-[11px] font-bold text-amber-300 uppercase">
                  {img.category}
                </span>
                <h4 className="text-sm font-black text-white leading-tight">
                  {img.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
              onClick={closeLightbox}
            >
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-900 text-white hover:bg-[#e11d48] transition z-50"
              >
                <X className="w-6 h-6" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 p-2.5 rounded-full bg-slate-900 text-white hover:bg-[#e11d48] transition z-50"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 p-2.5 rounded-full bg-slate-900 text-white hover:bg-[#e11d48] transition z-50"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div
                className="max-w-4xl max-h-[85vh] w-full flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={filteredImages[lightboxIndex].src}
                  alt={filteredImages[lightboxIndex].title}
                  className="max-h-[75vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
                />
                <h3 className="text-base font-bold text-white mt-3 text-center">
                  {filteredImages[lightboxIndex].title}
                </h3>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
