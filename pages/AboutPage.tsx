
import React from 'react';
import { Link } from 'react-router-dom';

interface AboutPageProps {
  lang: 'IT' | 'EN';
}

const AboutPage: React.FC<AboutPageProps> = ({ lang }) => {
  const content = {
    IT: {
      title: "La nostra storia",
      p1: "Nebrodi Costruzioni Generali SRL, è stata fondata nel 2009, anno in cui ha acquisito il ramo aziendale inerente i lavori pubblici e privati della Ditta Artigiana del socio lavoratore Trovato Silvestro.",
      p2: "L’impresa vanta un’esperienza di oltre 50 anni nel settore delle costruzioni e ristrutturazioni di edifici civili ed industriali. Nel tempo ha acquisito una solida competenza nei lavori di consolidamento, restauro e valorizzazione del patrimonio monumentale, artistico, architettonico ed archeologico.",
      values_title: "I nostri valori",
      values_desc: "L’azienda dispone di un organico di professionisti e maestranze selezionate che operano con estrema professionalità e passione nel rispetto per l’arte e per i valori storici e culturali del territorio.",
      skills_title: "Capacità e Settori",
      skills: [
        "Restauro e manutenzione beni immobili sottoposti a tutela",
        "Consolidamento terreni e opere speciali",
        "Costruzione nuovi edifici civili ed industriali",
        "Costruzione e manutenzione infrastrutture stradali",
        "Acquedotti, fognature e opere idrauliche",
        "Opere fluviali e sistemazione idraulica",
        "Impianti di pubblica illuminazione",
        "Opere strutturali speciali",
        "Gestione verde e arredo urbano"
      ],
      cert_title: "Certificazioni",
      cert_desc: "Siamo un'azienda certificata e attestata per operare nei settori più complessi dei lavori pubblici.",
      cert_btn: "Vedi Certificazioni"
    },
    EN: {
      title: "Our company",
      p1: "Nebrodi Costruzioni Generali SRL, was born in 2009 when we bought the business of Trovato Silvestro's company, specifically concerning public and private works.",
      p2: "Our company claims over 50 years of experience in construction and restructuring of civil and industrial buildings. Over time we gained experience in strengthening work and in renovation, recovery and enhancement of monumental, artistic, architectonic and archeological heritage.",
      values_title: "OUR VALUES",
      values_desc: "Our company has a staff made up by selected professionals, specialists and craftsmen who work with great professionalism and passion, always respecting the art-work and historical and cultural values.",
      skills_title: "Developed Skills",
      skills: [
        "restoration, consolidation and maintenance of protected real estate",
        "consolidation of land and special underground works",
        "construction and consolidation of new civil and industrial buildings",
        "construction, maintenance and renovation of roads",
        "construction and maintenance of aqueducts and sewers",
        "river, defense and hydraulic works",
        "public lighting systems",
        "special structural works",
        "greenery and street furniture"
      ],
      cert_title: "Certificates",
      cert_desc: "We are a certified and attested company operating in complex public sectors.",
      cert_btn: "See Certificates"
    }
  };

  const t = content[lang];

  return (
    <div className="bg-slate-50 min-h-screen py-16 px-6">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-3xl overflow-hidden">
        <div className="h-64 bg-amber-500 relative flex items-center justify-center px-12 overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none text-slate-900">
             <i className="fas fa-city text-[20rem] absolute -bottom-20 -right-20 transform -rotate-12"></i>
          </div>
          <h1 className="text-slate-900 text-4xl md:text-6xl font-black uppercase tracking-tighter relative z-10 text-center">{t.title}</h1>
        </div>

        <div className="p-8 md:p-16">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-2/3 space-y-8 text-slate-700 leading-relaxed text-lg">
              <p>
                <span className="text-amber-600 font-bold uppercase text-xl">Nebrodi Costruzioni Generali SRL</span>, {t.p1}
              </p>
              <p>
                {t.p2}
              </p>

              <div className="bg-slate-50 p-8 rounded-2xl border-l-8 border-amber-500">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 uppercase">{t.values_title}</h2>
                <p>
                  {t.values_desc}
                </p>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mb-6 uppercase">{t.skills_title}</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base">
                {t.skills.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-amber-500 mt-1"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:w-1/3 w-full bg-slate-900 text-white p-8 rounded-3xl sticky top-36 shadow-2xl">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center text-3xl mb-6 shadow-lg shadow-amber-500/20 text-slate-900">
                  <i className="fas fa-certificate"></i>
                </div>
                <h3 className="text-xl font-bold mb-4 uppercase text-amber-400">{t.cert_title}</h3>
                <p className="text-slate-400 text-sm mb-8">{t.cert_desc}</p>
                <Link to="/certifications" className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-4 rounded-xl transition-all uppercase tracking-widest text-sm shadow-lg shadow-amber-500/20">
                  {t.cert_btn}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
