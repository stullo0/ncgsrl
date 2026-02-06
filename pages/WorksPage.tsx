
import React from 'react';
import { Link } from 'react-router-dom';

interface WorksPageProps {
  lang: 'IT' | 'EN';
}

const WorksPage: React.FC<WorksPageProps> = ({ lang }) => {
  const t = {
    IT: {
      title: "I Nostri Lavori",
      subtitle: "Un viaggio attraverso i cantieri e le opere realizzate in Sicilia.",
      intro: "Questa sezione offre una panoramica dei nostri interventi sul territorio. Clicca su un progetto per visualizzarne la galleria e i dettagli tecnici.",
      provinces: [
        { name: "PALERMO", works: [
          { name: "TEATRO MASSIMO", id: "teatro-massimo" },
          { name: "COMUNE DI GANGI", id: "gangi" },
          { name: "COMANDO DI POLIZIA - TERMINI IMERESE", id: "polizia-termini" }
        ]},
        { name: "CATANIA", works: [
          { name: "VILLA BELLINI", id: "villa-bellini" },
          { name: "I.C.S. LEONARDO SCIASCIA - MISTERBIANCO", id: "sciascia-misterbianco" },
          { name: "SCUOLA MEDIA - CAMPOROTONDO ETNEO", id: "scuola-camporotondo" },
          { name: "CENTRO POLIFUNZIONALE - CAMPOROTONDO ETNEO", id: "centro-camporotondo" }
        ]},
        { name: "ENNA", works: [
          { name: "I.I.S. LINCOLN", id: "lincoln-enna" },
          { name: "LARGO MEDAGLIE D'ORO - TROINA", id: "medaglie-troina" },
          { name: "VIA POSTERNA (Manutenzione) - TROINA", id: "posterna-troina" }
        ]},
        { name: "MESSINA", works: [
          { name: "COMUNE DI FURCI SICULO", id: "furci-siculo" },
          { name: "POLICLINICO G. MARTINO", id: "policlinico-messina" },
          { name: "SCUOLA MATERNA 'PORTA NUOVA' - SAN FRATELLO", id: "materna-san-fratello" }
        ]},
        { name: "TRAPANI", works: [
          { name: "MUSEO DEL SATIRO DANZANTE", id: "museo-del-satiro-danzante" },
          { name: "LICEO CLASSICO - ALCAMO", id: "liceo-alcamo" }
        ]},
        { name: "RAGUSA", works: [{ name: "LAVORI A MODICA", id: "modica" }]},
        { name: "AGRIGENTO", works: [{ name: "SCUOLA ELEMENTARE - FAVARA", id: "scuola-favara" }]}
      ],
      warning: "SEZIONE IN AGGIORNAMENTO - Stiamo caricando i nuovi contenuti multimediali."
    },
    EN: {
      title: "Building Sites",
      subtitle: "A journey through our construction sites and works in Sicily.",
      intro: "This section provides an overview of our interventions. Click on a project to view its gallery and technical details.",
      provinces: [
        { name: "PALERMO", works: [
          { name: "TEATRO MASSIMO", id: "teatro-massimo" },
          { name: "MUNICIPALITY OF GANGI", id: "gangi" },
          { name: "POLICE HEADQUARTERS - TERMINI IMERESE", id: "polizia-termini" }
        ]},
        { name: "CATANIA", works: [
          { name: "VILLA BELLINI", id: "villa-bellini" },
          { name: "I.C.S. LEONARDO SCIASCIA - MISTERBIANCO", id: "sciascia-misterbianco" },
          { name: "SECONDARY SCHOOL - CAMPOROTONDO ETNEO", id: "scuola-camporotondo" },
          { name: "POLIFUNCTIONAL CENTER - CAMPOROTONDO ETNEO", id: "centro-camporotondo" }
        ]},
        { name: "ENNA", works: [
          { name: "I.I.S. LINCOLN", id: "lincoln-enna" },
          { name: "LARGO MEDAGLIE D'ORO - TROINA", id: "medaglie-troina" },
          { name: "VIA POSTERNA (Maintenance) - TROINA", id: "posterna-troina" }
        ]},
        { name: "MESSINA", works: [
          { name: "FURCI SICULO CITY HALL", id: "furci-siculo" },
          { name: "G. MARTINO GENERAL HOSPITAL", id: "policlinico-messina" },
          { name: "'PORTA NUOVA' PRESCHOOL - SAN FRATELLO", id: "materna-san-fratello" }
        ]},
        { name: "TRAPANI", works: [
          { name: "DANCING SATYR MUSEUM", id: "museo-del-satiro-danzante" },
          { name: "HIGH SCHOOL - ALCAMO", id: "liceo-alcamo" }
        ]},
        { name: "RAGUSA", works: [{ name: "MODICA WORKS", id: "modica" }]},
        { name: "AGRIGENTO", works: [{ name: "PRIMARY SCHOOL - FAVARA", id: "scuola-favara" }]}
      ],
      warning: "SECTION UNDER UPDATE - New multimedia content is being uploaded."
    }
  }[lang];

  return (
    <div className="bg-neutral-50 min-h-screen">
      <section className="bg-slate-900 text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
          <i className="fas fa-city text-[20rem] translate-x-20 -translate-y-10"></i>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">
            {t.title.split(' ')[0]} <span className="text-amber-500">{t.title.split(' ').slice(1).join(' ')}</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl font-light italic">
            {t.subtitle}
          </p>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 items-center bg-white p-8 rounded-3xl shadow-lg border-l-8 border-amber-500">
          <div className="text-amber-500 text-5xl">
            <i className="fas fa-hard-hat"></i>
          </div>
          <div>
            <p className="text-slate-600 leading-relaxed mb-4">{t.intro}</p>
            <div className="flex items-center gap-2 text-xs font-bold text-amber-600 uppercase tracking-widest">
              <i className="fas fa-sync fa-spin"></i> {t.warning}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.provinces.map((prov) => (
            <div key={prov.name} className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 flex flex-col h-full group hover:border-amber-500 transition-colors">
              <div className="bg-slate-100 px-8 py-6 flex justify-between items-center border-b border-slate-200">
                <h3 className="text-2xl font-black text-slate-900 tracking-tighter">{prov.name}</h3>
              </div>
              <div className="p-8 flex-grow">
                <ul className="space-y-4">
                  {prov.works.map((work, wIdx) => (
                    <li key={wIdx}>
                      <Link 
                        to={`/works/${work.id}`}
                        className="flex items-start gap-3 group/link text-slate-700 hover:text-amber-600 transition-all"
                      >
                        <div className="mt-2 w-2 h-2 rounded-full bg-amber-500 flex-shrink-0 group-hover/link:scale-125 transition-transform"></div>
                        <span className="font-bold uppercase text-sm tracking-tight">{work.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WorksPage;
