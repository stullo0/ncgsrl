
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface CookieBannerProps {
  lang: 'IT' | 'EN';
}

const CookieBanner: React.FC<CookieBannerProps> = ({ lang }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  
  // Consensi semplificati: solo tecnici (sempre on) e analitici
  const [consents, setConsents] = useState({
    necessary: true,
    analytics: false
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent-v3');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const saveConsent = (finalConsents: typeof consents) => {
    localStorage.setItem('cookie-consent-v3', JSON.stringify(finalConsents));
    setIsVisible(false);
  };

  const handleAcceptAll = () => {
    const all = { necessary: true, analytics: true };
    saveConsent(all);
  };

  const handleRejectAll = () => {
    const min = { necessary: true, analytics: false };
    saveConsent(min);
  };

  const handleSavePreferences = () => {
    saveConsent(consents);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-[1000] p-4 md:p-8 animate-fade-in-up">
      <div className="max-w-4xl mx-auto bg-white border border-slate-200 shadow-[0_-15px_50px_rgba(0,0,0,0.15)] rounded-[2.5rem] overflow-hidden">
        
        {!showPreferences ? (
          /* Vista Principale */
          <div className="p-8 md:p-10 flex flex-col md:flex-row items-center gap-8">
            <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center text-amber-500 text-3xl flex-shrink-0">
              <i className="fas fa-cookie-bite"></i>
            </div>
            
            <div className="flex-grow space-y-3 text-center md:text-left">
              <h4 className="text-xl font-black text-slate-900 uppercase tracking-tighter">
                {lang === 'IT' ? 'Gestione Cookie' : 'Cookie Management'}
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                {lang === 'IT' ? (
                  <>Utilizziamo cookie tecnici e analitici per migliorare il sito. Non usiamo cookie di profilazione. <Link to="/cookie-policy" className="text-amber-600 font-bold hover:underline">Info sulla privacy</Link>.</>
                ) : (
                  <>We use technical and analytical cookies to improve the site. We do not use profiling cookies. <Link to="/cookie-policy" className="text-amber-600 font-bold hover:underline">Privacy info</Link>.</>
                )}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <button 
                onClick={() => setShowPreferences(true)}
                className="px-6 py-3 text-xs font-black uppercase tracking-widest text-slate-500 hover:text-amber-600 transition-colors"
              >
                {lang === 'IT' ? 'Opzioni' : 'Options'}
              </button>
              <button 
                onClick={handleRejectAll}
                className="px-6 py-3 text-xs font-black uppercase tracking-widest text-slate-900 border-2 border-slate-100 rounded-2xl hover:bg-slate-50 transition-all"
              >
                {lang === 'IT' ? 'Solo necessari' : 'Only necessary'}
              </button>
              <button 
                onClick={handleAcceptAll}
                className="px-10 py-3 text-xs font-black uppercase tracking-widest bg-amber-500 hover:bg-amber-600 text-slate-900 rounded-2xl shadow-lg shadow-amber-500/20 transition-all active:scale-95"
              >
                {lang === 'IT' ? 'Accetta tutto' : 'Accept all'}
              </button>
            </div>
          </div>
        ) : (
          /* Vista Preferenze */
          <div className="p-8 md:p-12 space-y-8 animate-fade-in">
            <div className="flex justify-between items-center border-b border-slate-100 pb-6">
              <h4 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">Preferenze Cookie</h4>
              <button onClick={() => setShowPreferences(false)} className="text-slate-400 hover:text-slate-900 transition-colors">
                <i className="fas fa-times text-xl"></i>
              </button>
            </div>

            <div className="space-y-6">
              {/* Tecnici */}
              <div className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="max-w-[80%]">
                  <p className="font-bold text-slate-900 uppercase text-xs tracking-widest mb-1">Cookie Tecnici <span className="text-[10px] text-amber-600 ml-2">(Sempre Attivi)</span></p>
                  <p className="text-xs text-slate-500 italic">Essenziali per navigare e ricordare le tue preferenze base (lingua, consenso cookie).</p>
                </div>
                <div className="w-12 h-6 bg-amber-500 rounded-full relative">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>

              {/* Analitici */}
              <div className="flex items-center justify-between p-5 bg-white border border-slate-100 rounded-2xl hover:border-amber-200 transition-all cursor-pointer" onClick={() => setConsents({...consents, analytics: !consents.analytics})}>
                <div className="max-w-[80%]">
                  <p className="font-bold text-slate-900 uppercase text-xs tracking-widest mb-1">Cookie Analitici</p>
                  <p className="text-xs text-slate-500 italic">Ci aiutano a monitorare il numero di visite in forma anonima per migliorare i contenuti.</p>
                </div>
                <div className={`w-12 h-6 rounded-full relative transition-colors ${consents.analytics ? 'bg-amber-500' : 'bg-slate-200'}`}>
                  <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${consents.analytics ? 'right-1' : 'left-1'}`}></div>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-4 pt-4">
              <button 
                onClick={() => setShowPreferences(false)}
                className="px-6 py-3 text-xs font-bold uppercase tracking-widest text-slate-500"
              >
                Indietro
              </button>
              <button 
                onClick={handleSavePreferences}
                className="px-10 py-3 text-xs font-black uppercase tracking-widest bg-slate-900 text-white rounded-2xl hover:bg-amber-500 hover:text-slate-900 transition-all shadow-xl active:scale-95"
              >
                Salva Scelte
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieBanner;
