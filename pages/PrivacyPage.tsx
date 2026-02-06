
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface PrivacyPageProps {
  lang: 'IT' | 'EN';
}

const PrivacyPage: React.FC<PrivacyPageProps> = ({ lang }) => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const itContent = (
    <div className="space-y-12">
      {/* SEZIONE PULSANTI SOPRA IL TITOLO */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        <button 
          onClick={() => scrollTo('privacy')}
          className="bg-slate-900 text-white hover:bg-amber-500 hover:text-slate-900 px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all shadow-lg active:scale-95 border border-slate-800"
        >
          <i className="fas fa-user-shield mr-2"></i> Privacy Policy
        </button>
        <button 
          onClick={() => scrollTo('terms')}
          className="bg-slate-900 text-white hover:bg-amber-500 hover:text-slate-900 px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all shadow-lg active:scale-95 border border-slate-800"
        >
          <i className="fas fa-file-contract mr-2"></i> Termini e Condizioni
        </button>
        <button 
          onClick={() => scrollTo('credits')}
          className="bg-slate-900 text-white hover:bg-amber-500 hover:text-slate-900 px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all shadow-lg active:scale-95 border border-slate-800"
        >
          <i className="fas fa-code mr-2"></i> Credits
        </button>
      </div>

      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-slate-900">
          Privacy <span className="text-amber-500">Policy</span>
        </h1>
        <div className="h-1.5 w-24 bg-amber-500 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* CONTENUTO PRIVACY */}
      <section id="privacy" className="space-y-8 text-slate-700 leading-relaxed scroll-mt-32">
        <div className="bg-amber-50 p-6 rounded-2xl border-l-4 border-amber-500 font-medium italic mb-8 text-sm">
          Raccogliamo informazioni su di te solo se necessario per fornire i nostri Servizi, comunicare con te o migliorare l'esperienza di navigazione. I dati sono trattati nel rispetto del Regolamento UE 2016/679 (GDPR).
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-bold text-slate-900 uppercase tracking-tight">Informazioni che raccogliamo</h3>
          <p>
            Le informazioni vengono raccolte direttamente quando ci contatti o automaticamente tramite l'utilizzo del sito web. Tali dati sono utilizzati esclusivamente per finalità operative e di sicurezza.
          </p>
          
          <div className="pl-4 border-l-2 border-slate-200 space-y-4">
            <p><strong>Dati forniti volontariamente:</strong></p>
            <p>• Comunicazioni tramite e-mail o telefono: memorizziamo i dati necessari a rispondere alle tue richieste (nome, indirizzo e-mail, numero di telefono).</p>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-bold text-slate-900 uppercase tracking-tight">Informazioni raccolte automaticamente</h3>
          <ul className="list-disc pl-6 space-y-4">
            <li>
              <strong>Informazioni di registro:</strong> il nostro provider di hosting (Netlify) raccoglie informazioni standard come l'indirizzo IP, il tipo di browser e la data/ora di accesso per garantire la sicurezza del sito.
            </li>
            <li>
              <strong>Dati di posizione:</strong> possiamo determinare la posizione approssimativa tramite l'indirizzo IP per analisi statistiche anonime sulle visite.
            </li>
            <li>
              <strong>Cookie Tecnici:</strong> utilizziamo tecnologie essenziali per il funzionamento del sito (es. scelta della lingua, salvataggio dei consensi).
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-bold text-slate-900 uppercase tracking-tight">Cookie e Servizi Terzi</h3>
          <p>Non utilizziamo cookie di profilazione o marketing. I servizi integrati che utilizzano solo cookie tecnici o analitici anonimi sono:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
              <p className="font-bold text-slate-900 mb-2">Netlify (Hosting)</p>
              <p className="text-sm">Gestisce i log tecnici necessari alla distribuzione sicura dei contenuti online.</p>
            </div>
            <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
              <p className="font-bold text-slate-900 mb-2">Google Analytics (Anonimizzato)</p>
              <p className="text-sm">Utilizzato per dati statistici sulle visite. Gli indirizzi IP sono anonimizzati e i dati non vengono incrociati per profilazione.</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-bold text-slate-900 uppercase tracking-tight">Sicurezza e Diritti</h3>
          <p>
            Adottiamo protocolli <strong>HTTPS (SSL)</strong> per proteggere i tuoi dati. Hai il diritto di accedere ai tuoi dati, chiederne la rettifica o la cancellazione in ogni momento.
          </p>
        </div>
      </section>

      {/* TERMINI E CONDIZIONI */}
      <section id="terms" className="space-y-8 pt-16 border-t border-slate-200 scroll-mt-32">
        <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900 border-b-4 border-amber-500 pb-2 inline-block">
          Termini e Condizioni
        </h2>
        
        <div className="prose prose-slate max-w-none text-slate-700 space-y-6">
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
            <p className="font-bold text-slate-900">Copyright</p>
            <p>© {new Date().getFullYear()} Nebrodi Costruzioni Generali s.r.l. Tutti i diritti riservati.</p>
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-slate-400">
            <h4 className="font-bold mb-3 uppercase text-xs tracking-widest text-slate-900">Uso del Sito</h4>
            <p className="text-sm">È vietata la riproduzione di testi e immagini senza autorizzazione scritta. L'uso fraudolento del sito darà luogo a segnalazione alle autorità.</p>
          </div>

          <div className="bg-slate-900 text-white p-6 rounded-2xl text-center">
            <p className="font-black text-amber-500 uppercase text-[10px] tracking-[0.3em] mb-2">Giurisdizione e Foro Competente</p>
            <p className="text-xs italic">Tutte le controversie sono soggette alle leggi vigenti in Italia. Foro competente: <strong>ENNA, ITALIA</strong>.</p>
          </div>
        </div>
      </section>

      {/* CREDITS */}
      <section id="credits" className="space-y-8 pt-16 border-t border-slate-200 scroll-mt-32">
        <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900 border-b-4 border-amber-500 pb-2 inline-block">
          Credits
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-slate-100 rounded-3xl border border-slate-200">
            <h4 className="font-bold text-slate-900 uppercase text-xs tracking-widest mb-4">Sviluppo</h4>
            <p className="text-sm text-slate-600 leading-relaxed italic">
              Realizzazione tecnica a cura di Silvestro.
            </p>
          </div>
          <div className="p-8 bg-slate-100 rounded-3xl border border-slate-200">
            <h4 className="font-bold text-slate-900 uppercase text-xs tracking-widest mb-4">Proprietà Media</h4>
            <p className="text-sm text-slate-600 leading-relaxed italic">
              Le foto dei cantieri appartengono a Nebrodi Costruzioni Generali SRL.
            </p>
          </div>
        </div>
      </section>
    </div>
  );

  return (
    <div className="bg-neutral-50 min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-[3rem] p-10 md:p-20 relative overflow-hidden">
        {lang === 'IT' ? itContent : (
          <div className="text-center py-20">
            <h2 className="text-3xl font-black uppercase tracking-tighter mb-4">Legal Area</h2>
            <p className="text-slate-500 italic">Legal content is available in the Italian version. Jurisdiction: ENNA, ITALY.</p>
            <button onClick={() => window.location.reload()} className="mt-8 bg-amber-500 text-slate-900 font-bold px-8 py-3 rounded-xl uppercase text-xs tracking-widest">Italian Version</button>
          </div>
        )}
        
        <div className="mt-20 pt-10 border-t border-slate-100 text-center">
          <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.3em] italic">
            Documento aggiornato al: {new Date().toLocaleDateString('it-IT', { month: 'long', year: 'numeric' })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
