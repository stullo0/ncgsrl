
import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO, NAV_ITEMS_DATA } from '../constants';

interface FooterProps {
  lang: 'IT' | 'EN';
}

const Footer: React.FC<FooterProps> = ({ lang }) => {
  const navItems = NAV_ITEMS_DATA[lang];

  const t = {
    IT: {
      address_title: "Sede Legale",
      map_button: "Apri nella mappa",
      quick_links: "Navigazione",
      contact_title: "Contatti",
      tel: "Tel",
      follow: "Seguici su Facebook",
      certified_by: "Certificazioni & Attestazioni",
      privacy: "Privacy & Cookie Policy",
      terms: "Termini e Condizioni"
    },
    EN: {
      address_title: "Headquarters",
      map_button: "Open in map",
      quick_links: "Quick Links",
      contact_title: "Contacts",
      tel: "Tel",
      follow: "Follow us on Facebook",
      certified_by: "Certifications & Attestations",
      privacy: "Privacy & Cookie Policy",
      terms: "Terms of Use"
    }
  }[lang];

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-slate-800 pb-12">
        
        {/* Colonna Indirizzo e Mappa */}
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="text-xl font-bold border-l-4 border-amber-500 pl-4 uppercase tracking-tighter mb-4">{t.address_title}</h3>
            <p className="text-slate-400 text-sm font-medium leading-relaxed mb-6">
              <i className="fas fa-location-dot text-amber-500 mr-2"></i>
              {CONTACT_INFO.address}
            </p>
            
            {/* Pulsante Mappa Pulito (Senza Sfondo) */}
            <a 
              href="https://goo.gl/maps/Sr3YqfsgG8hQw6GB6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-slate-800 hover:bg-amber-500 hover:text-slate-900 text-amber-500 px-6 py-4 rounded-xl transition-all font-bold uppercase text-xs tracking-widest group shadow-lg border border-slate-700 hover:border-amber-500"
            >
              <i className="fas fa-map-location-dot group-hover:scale-110 transition-transform"></i>
              {t.map_button}
            </a>
          </div>
        </div>

        {/* Link Rapidi */}
        <div>
          <h3 className="text-xl font-bold mb-6 border-l-4 border-amber-500 pl-4 uppercase tracking-tighter">{t.quick_links}</h3>
          <ul className="grid grid-cols-1 gap-3">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link to={item.path} className="text-slate-400 hover:text-amber-400 transition-colors uppercase text-[11px] font-black tracking-widest">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contatti */}
        <div>
          <h3 className="text-xl font-bold mb-6 border-l-4 border-amber-500 pl-4 uppercase tracking-tighter">{t.contact_title}</h3>
          <div className="flex flex-col gap-4 text-sm">
            <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-3 text-slate-400 hover:text-amber-400 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-amber-500">
                <i className="fas fa-envelope"></i>
              </div>
              <span className="truncate font-medium">{CONTACT_INFO.email}</span>
            </a>
            <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 text-slate-400 hover:text-amber-400 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-amber-500">
                <i className="fas fa-phone-alt"></i>
              </div>
              <span className="font-medium">{t.tel}: {CONTACT_INFO.phone}</span>
            </a>
            <a href={CONTACT_INFO.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-400 hover:text-blue-500 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-amber-500">
                <i className="fab fa-facebook-f"></i>
              </div>
              <span className="font-medium">{t.follow}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Certificazioni e Legal Footer */}
      <div className="max-w-7xl mx-auto px-6 mt-12 flex flex-col items-center">
        <div className="text-center mb-10 w-full">
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] mb-6">{t.certified_by}</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
            <img src="https://www.mscert.it/wp-content/uploads/2017/10/logo_mscert.png" alt="ms cert" className="h-10 w-auto" />
            <img src="https://www.soagroup.it/wp-content/uploads/2021/10/LOGO-SOA-GROUP.jpg" alt="soa group" className="h-10 w-auto" />
            <img src="https://res.cloudinary.com/nebrodi/image/upload/v1732964654/site/certificates/Cassaed" alt="cassa-edile" className="h-10 w-auto" />
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between items-center text-[10px] font-black text-slate-500 gap-6 mt-8 pt-8 border-t border-slate-800 uppercase tracking-[0.15em]">
          <p>Copyright © {new Date().getFullYear()} NEBRODI COSTRUZIONI GENERALI SRL</p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            <Link to="/cookie-policy" className="hover:text-amber-500 transition-colors">{t.privacy}</Link>
            <Link to="/cookie-policy#terms" className="hover:text-amber-500 transition-colors">{t.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
