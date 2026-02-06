
import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { WORKS_DETAILS } from '../constants';

interface WorkDetailPageProps {
  lang: 'IT' | 'EN';
}

const WorkDetailPage: React.FC<WorkDetailPageProps> = ({ lang }) => {
  const { workId } = useParams<{ workId: string }>();
  const navigate = useNavigate();
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  
  const workData = workId ? WORKS_DETAILS[workId] : null;
  const t = workData ? workData[lang] : null;

  const labels = {
    IT: {
      back: "Torna ai lavori",
      category: "Settore d'intervento",
      technical: "Specifiche Tecniche",
      gallery: "Galleria Fotografica",
      missing_title: "Cantiere in aggiornamento",
      missing_desc: "Questa sezione è in fase di aggiornamento. Presto saranno disponibili nuovi dettagli tecnici, foto ad alta risoluzione e video degli interventi eseguiti.",
      info_status: "Avanzamento Digitale",
      close: "Chiudi",
      prev: "Precedente",
      next: "Successiva"
    },
    EN: {
      back: "Back to works",
      category: "Intervention Sector",
      technical: "Technical Specifications",
      gallery: "Photo Gallery",
      missing_title: "Work in progress",
      missing_desc: "This section is currently being updated. New technical details, high-resolution photos, and videos of the works will be available soon.",
      info_status: "Digital Progress",
      close: "Close",
      prev: "Previous",
      next: "Next"
    }
  }[lang];

  if (!workData || !t) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center p-6">
        <div className="bg-white p-12 rounded-3xl shadow-2xl text-center max-w-lg border-b-8 border-amber-500">
          <div className="text-amber-500 text-6xl mb-6 animate-pulse"><i className="fas fa-person-digging"></i></div>
          <h2 className="text-2xl font-black text-slate-900 uppercase mb-4 tracking-tighter">{labels.missing_title}</h2>
          <p className="text-slate-500 mb-8 leading-relaxed font-medium">{labels.missing_desc}</p>
          <button 
            onClick={() => navigate('/works')}
            className="bg-slate-900 text-white font-bold py-4 px-10 rounded-xl uppercase tracking-widest hover:bg-amber-500 hover:text-slate-900 transition-all shadow-lg active:scale-95"
          >
            {labels.back}
          </button>
        </div>
      </div>
    );
  }

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % t.images.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + t.images.length) % t.images.length);
    }
  };

  return (
    <div className="bg-neutral-50 min-h-screen pb-24">
      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div 
          className="fixed inset-0 z-[2000] bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10 animate-fade-in"
          onClick={() => setSelectedImageIndex(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white text-3xl hover:text-amber-500 transition-colors z-[2001]"
            onClick={() => setSelectedImageIndex(null)}
          >
            <i className="fas fa-times"></i>
          </button>
          
          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-amber-500 hover:text-slate-900 text-white flex items-center justify-center transition-all z-[2001]"
            onClick={handlePrev}
          >
            <i className="fas fa-chevron-left"></i>
          </button>

          <img 
            src={t.images[selectedImageIndex]} 
            alt="Full view" 
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-zoom-in"
          />

          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-amber-500 hover:text-slate-900 text-white flex items-center justify-center transition-all z-[2001]"
            onClick={handleNext}
          >
            <i className="fas fa-chevron-right"></i>
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-xs font-bold uppercase tracking-widest">
            {selectedImageIndex + 1} / {t.images.length}
          </div>
        </div>
      )}

      {/* Header */}
      <div className="bg-slate-900 text-white py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <i className="fas fa-helmet-safety text-[30rem] absolute -bottom-20 -right-20"></i>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link to="/works" className="inline-flex items-center gap-2 text-amber-500 font-bold uppercase tracking-widest text-xs mb-8 hover:text-white transition-colors">
            <i className="fas fa-arrow-left"></i> {labels.back}
          </Link>
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
            {t.title}
          </h1>
          <div className="inline-block bg-amber-500 text-slate-900 px-6 py-2 rounded-lg font-black uppercase text-sm tracking-widest shadow-xl">
            {t.category}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Description */}
          <div className="lg:col-span-2 bg-white p-10 md:p-16 rounded-3xl shadow-xl border-t-8 border-amber-500">
            <h3 className="text-2xl font-bold text-slate-900 uppercase mb-8 flex items-center gap-4">
              <span className="w-10 h-1 bg-amber-500"></span> Descrizione Intervento
            </h3>
            <p className="text-xl text-slate-600 leading-relaxed italic">
              "{t.desc}"
            </p>
            
            {/* Project Gallery Section */}
            <div className="mt-16">
              <h3 className="text-xl font-bold text-slate-900 uppercase mb-8 flex items-center gap-4">
                <i className="fas fa-camera-retro text-amber-500"></i> {labels.gallery}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {t.images && t.images.length > 0 ? (
                  t.images.map((img: string, idx: number) => (
                    <div 
                      key={idx} 
                      className="group overflow-hidden rounded-2xl bg-slate-100 aspect-video relative shadow-md cursor-pointer"
                      onClick={() => setSelectedImageIndex(idx)}
                    >
                      <img 
                        src={img} 
                        alt={`${t.title} - view ${idx + 1}`} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                      <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <i className="fas fa-magnifying-glass-plus text-white text-2xl"></i>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full py-20 border-2 border-dashed border-slate-200 rounded-3xl flex flex-col items-center justify-center text-slate-400">
                    <i className="fas fa-sync fa-spin text-4xl mb-4"></i>
                    <p className="font-bold uppercase tracking-widest text-xs">{labels.missing_title}</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar / Specs */}
          <div className="space-y-8">
            <div className="bg-slate-900 text-white p-10 rounded-3xl shadow-2xl sticky top-32">
              <h3 className="text-xl font-bold uppercase mb-8 border-b border-slate-700 pb-4 flex items-center gap-3">
                <i className="fas fa-clipboard-list text-amber-500"></i> {labels.technical}
              </h3>
              <ul className="space-y-6">
                {t.details.map((detail: string, i: number) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 flex-shrink-0">
                      <i className="fas fa-check text-[10px]"></i>
                    </div>
                    <span className="text-slate-300 font-medium text-sm leading-tight">{detail}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-12 pt-8 border-t border-slate-800">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500">
                    <i className="fas fa-circle-notch fa-spin"></i>
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-slate-500">{labels.info_status}</span>
                </div>
                <p className="text-sm text-slate-400 font-medium italic">
                  {lang === 'IT' ? 'Nuovi contenuti multimediali in fase di caricamento dal dipartimento tecnico.' : 'New multimedia content is being uploaded by the technical department.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkDetailPage;
