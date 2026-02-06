
import React from 'react';
import { OG_CATEGORIES, OS_CATEGORIES } from '../constants';

interface CertificationsPageProps {
  lang: 'IT' | 'EN';
}

const CertificationsPage: React.FC<CertificationsPageProps> = ({ lang }) => {
  const t = {
    IT: {
      title: "Documentazione e Attestazioni",
      soa: "Attestazione SOA",
      iso: "Certificazione ISO",
      white: "White List",
      download: "SCARICA PDF",
      cat_title: "Categorie di Lavori",
      cat_desc: "Allegato A del D.P.R. 207 del 5 Ottobre 2010. L'impresa Nebrodi Costruzioni Generali s.r.l. è in possesso dei requisiti per operare nelle seguenti categorie.",
      og: "Categorie Generali (OG)",
      os: "Categorie Specializzate (OS)",
      note: "Per l'elenco completo delle categorie specializzate ammesse e i limiti di importo, consultare l'attestazione SOA ufficiale scaricabile sopra."
    },
    EN: {
      title: "Documentation and Certificates",
      soa: "SOA Certificate",
      iso: "ISO Certification",
      white: "White List",
      download: "DOWNLOAD PDF",
      cat_title: "Work Categories",
      cat_desc: "Annex A of D.P.R. 207 of 5 October 2010. Nebrodi Costruzioni Generali s.r.l. possesses the requirements to operate in the following categories.",
      og: "General Categories (OG)",
      os: "Specialized Categories (OS)",
      note: "For the complete list of specialized categories and amount limits, please consult the official SOA certificate downloadable above."
    }
  }[lang];

  return (
    <div className="bg-neutral-100 min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* SOA Downloads Section */}
        <section className="bg-white rounded-3xl shadow-xl p-10">
          <h2 className="text-3xl font-black text-slate-900 mb-12 uppercase tracking-tighter text-center">{t.title}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                title: t.soa, 
                img: 'https://assets-global.website-files.com/663e6ce8c53f1631e9dc10d4/665038ac1d3bd80221d06121_soa.png', 
                link: 'https://res.cloudinary.com/nebrodi/image/upload/v1716533272/file/soa.png' 
              },
              { 
                title: t.iso, 
                img: 'https://assets-global.website-files.com/663e6ce8c53f1631e9dc10d4/665038a9bc45c7b4bb97fcc8_msc.png', 
                link: 'https://res.cloudinary.com/nebrodi/image/upload/v1716533266/file/msc.png' 
              },
              { 
                title: t.white, 
                img: 'https://assets-global.website-files.com/663e6ce8c53f1631e9dc10d4/665038afe90df6ef961a0ac5_white-list-2020_0042343-1.jpg', 
                link: 'https://res.cloudinary.com/nebrodi/image/upload/v1716533094/file/white-list.jpg' 
              }
            ].map((cert) => (
              <div key={cert.title} className="flex flex-col items-center text-center group">
                <h3 className="text-xl font-bold text-amber-600 mb-6 uppercase">{cert.title}</h3>
                <div className="w-full h-48 flex items-center justify-center bg-slate-50 rounded-2xl overflow-hidden border-2 border-transparent group-hover:border-amber-500 transition-all p-4 mb-6">
                  <img src={cert.img} alt={cert.title} className="max-h-full object-contain" />
                </div>
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-slate-900 text-white font-bold py-3 px-10 rounded-xl hover:bg-amber-600 hover:text-slate-900 transition-all w-full md:w-auto shadow-lg active:scale-95 uppercase tracking-widest text-xs"
                >
                  {t.download}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Categories Table */}
        <section className="bg-slate-900 text-white rounded-3xl shadow-2xl p-10 overflow-hidden">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-black text-amber-500 uppercase tracking-tighter mb-4">{t.cat_title}</h2>
              <p className="text-slate-400 text-sm md:text-base">
                {t.cat_desc}
              </p>
            </div>
            <div className="hidden md:block">
              <i className="fas fa-award text-7xl text-amber-500/20"></i>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* OG Section */}
            <div>
              <h3 className="text-xl font-bold bg-amber-500 text-slate-900 px-6 py-2 rounded-lg mb-6 uppercase inline-block">{t.og}</h3>
              <div className="space-y-4">
                {OG_CATEGORIES.map((cat) => (
                  <div key={cat.code} className="flex gap-4 border-b border-slate-800 pb-3 group">
                    <span className="font-black text-amber-500 w-12 flex-shrink-0">{cat.code}</span>
                    <span className="text-sm text-slate-300 group-hover:text-white transition-colors leading-relaxed">{cat.description}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* OS Section */}
            <div>
              <h3 className="text-xl font-bold bg-slate-700 text-white px-6 py-2 rounded-lg mb-6 uppercase inline-block">{t.os}</h3>
              <div className="space-y-4">
                {OS_CATEGORIES.map((cat) => (
                  <div key={cat.code} className="flex gap-4 border-b border-slate-800 pb-3 group">
                    <span className="font-black text-amber-400 w-12 flex-shrink-0">{cat.code}</span>
                    <span className="text-sm text-slate-300 group-hover:text-white transition-colors leading-relaxed">{cat.description}</span>
                  </div>
                ))}
                <div className="p-6 bg-slate-800 rounded-2xl mt-8 border border-slate-700">
                  <p className="text-xs text-slate-400 italic">
                    {t.note}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CertificationsPage;
