
import React from 'react';
import { Link } from 'react-router-dom';

interface HomePageProps {
  lang: 'IT' | 'EN';
}

const HomePage: React.FC<HomePageProps> = ({ lang }) => {
  const content = {
    IT: {
      tag: "Costruzioni e Restauri",
      title: "Nebrodi Costruzioni",
      subtitle: "Esperienza artigiana, visione moderna.",
      cta_impresa: "L'Impresa",
      cta_lavori: "Portfolio Lavori",
      about_title: "Dall'Artigianato alla Grande Impresa",
      about_desc: "Fondata ufficialmente nel 2009, la nostra società eredita un patrimonio di competenze tecniche maturate in oltre mezzo secolo di attività nel cuore della Sicilia.",
      years: "Anni di storia",
      feat_title: "I Nostri Punti di Forza",
      feat_desc: "Innovazione costante al servizio della tradizione edile siciliana.",
      feats: [
        { icon: 'fas fa-shield-alt', title: 'Sicurezza', desc: 'Standard di protezione elevati per maestranze e committenti.' },
        { icon: 'fas fa-hard-hat', title: 'Maestranze', desc: 'Personale altamente qualificato con formazione continua.' },
        { icon: 'fas fa-leaf', title: 'Ambiente', desc: 'Sostenibilità e rispetto del contesto paesaggistico.' },
        { icon: 'fas fa-map-marked-alt', title: 'Territorio', desc: 'Profonda conoscenza del patrimonio architettonico locale.' }
      ],
      contact: "Contattaci Subito"
    },
    EN: {
      tag: "Construction & Restoration",
      title: "Nebrodi Construction",
      subtitle: "Where your satisfaction is our work.",
      cta_impresa: "The Company",
      cta_lavori: "Building Sites",
      about_title: "From Craftsmanship to Big Enterprise",
      about_desc: "Our company was born in 2009 when we bought the business of Trovato Silvestro's company. We boast over 50 years of experience.",
      years: "Years of Experience",
      feat_title: "Our Strengths",
      feat_desc: "Constant innovation at the service of Sicilian building tradition.",
      feats: [
        { icon: 'fas fa-shield-alt', title: 'Security', desc: 'High protection standards for workers and clients.' },
        { icon: 'fas fa-hard-hat', title: 'Specialists', desc: 'Highly specialized workers with continuous training.' },
        { icon: 'fas fa-leaf', title: 'Environment', desc: 'Sustainability and respect for the local landscape.' },
        { icon: 'fas fa-map-marked-alt', title: 'Territory', desc: 'Deep knowledge of local architectural heritage.' }
      ],
      contact: "Contact Us Now"
    }
  };

  const t = content[lang];

  return (
    <div className="overflow-hidden">
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <img 
          src="https://res.cloudinary.com/nebrodi/image/upload/v1715367258/f.jpg" 
          alt="Cantiere Nebrodi" 
          className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-[10s] hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-slate-900 z-10"></div>
        
        <div className="relative z-20 text-center text-white px-6 max-w-5xl">
          <div className="inline-block px-4 py-1 border border-amber-500 text-amber-500 text-xs font-black tracking-[0.3em] uppercase mb-6 animate-pulse">
            {t.tag}
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-6 drop-shadow-2xl uppercase tracking-tighter leading-none">
            {lang === 'IT' ? 'Nebrodi' : 'Nebrodi'} <span className="text-amber-500">Costruzioni</span>
          </h1>
          <h3 className="text-xl md:text-3xl font-light mb-10 drop-shadow-md text-slate-300 italic">
            {t.subtitle}
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              to="/about" 
              className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-5 px-12 rounded-full text-lg shadow-2xl transition-all hover:-translate-y-1 active:scale-95 uppercase tracking-widest"
            >
              {t.cta_impresa}
            </Link>
            <a 
              href={lang === 'IT' ? "https://nebrodi-lavori.webflow.io/" : "https://nebrodi-lavori.webflow.io/home-eng"} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 font-bold py-5 px-12 rounded-full text-lg transition-all uppercase tracking-widest"
            >
              {t.cta_lavori}
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative flex justify-center items-center">
             <div className="absolute w-64 h-64 bg-amber-50 rounded-full z-0 opacity-50"></div>
             <img 
               src="https://res.cloudinary.com/nebrodi/image/upload/v1732964654/site/logo/Nebrodi_Logo_V.png" 
               alt="Logo Nebrodi Costruzioni" 
               className="h-auto w-full max-w-[350px] object-contain relative z-10 drop-shadow-xl"
             />
             <div className="absolute -bottom-6 -right-6 bg-amber-500 text-slate-900 p-8 rounded-2xl shadow-xl z-20 hidden md:block border-b-4 border-slate-900">
                <p className="text-4xl font-black italic">50+</p>
                <p className="text-xs uppercase font-bold tracking-widest">{t.years}</p>
             </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter leading-tight">
              {t.about_title}
            </h2>
            <div className="h-2 w-20 bg-amber-500 rounded-full"></div>
            <p className="text-xl text-slate-600 leading-relaxed">
              {t.about_desc}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
              <div className="flex gap-4">
                <div className="text-amber-500 text-2xl flex-shrink-0"><i className="fas fa-history"></i></div>
                <div>
                  <h4 className="font-bold text-slate-900 uppercase text-sm mb-1">{lang === 'IT' ? 'Eredità Storica' : 'Historical Heritage'}</h4>
                  <p className="text-slate-500 text-sm leading-snug">{lang === 'IT' ? 'Acquisizione del ramo ditta Artigiana Trovato Silvestro.' : 'Acquisition of Trovato Silvestro\'s business.'}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-amber-500 text-2xl flex-shrink-0"><i className="fas fa-award"></i></div>
                <div>
                  <h4 className="font-bold text-slate-900 uppercase text-sm mb-1">{lang === 'IT' ? 'Qualità Certificata' : 'Certified Quality'}</h4>
                  <p className="text-slate-500 text-sm leading-snug">{lang === 'IT' ? 'Certificazioni ISO e Attestazioni SOA per lavori pubblici.' : 'ISO and SOA certificates for public works.'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">
                {t.feat_title.split(' ')[0]} <span className="text-amber-500">{t.feat_title.split(' ').slice(1).join(' ')}</span>
              </h2>
              <p className="text-slate-400 text-lg italic">{t.feat_desc}</p>
            </div>
            <Link to="/contacts" className="group flex items-center gap-4 text-amber-500 font-bold uppercase tracking-widest hover:text-white transition-colors">
              {t.contact} <i className="fas fa-chevron-right group-hover:translate-x-2 transition-transform"></i>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.feats.map((item, idx) => (
              <div key={idx} className="bg-slate-800/50 hover:bg-slate-800 border-l-4 border-amber-500 p-10 rounded-r-3xl transition-all duration-500 group">
                <div className="text-4xl text-amber-500 mb-8 group-hover:scale-110 transition-transform origin-left">
                  <i className={item.icon}></i>
                </div>
                <h3 className="text-xl font-bold text-white uppercase mb-4 tracking-tight">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
