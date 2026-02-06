
import React from 'react';
import { CONTACT_INFO } from '../constants';

interface ContactPageProps {
  lang: 'IT' | 'EN';
}

const ContactPage: React.FC<ContactPageProps> = ({ lang }) => {
  const t = {
    IT: {
      title: "Contattaci",
      subtitle: "Siamo a tua disposizione.",
      direct: "Recapiti Diretti",
      phone_web: "Telefono & Web",
      whatsapp: "Scrivici su Whatsapp",
      facebook: "Pagina Facebook",
      address_label: "Sede Legale",
      map_title: "Mappa Sede Nebrodi"
    },
    EN: {
      title: "How to contact us",
      subtitle: "We are at your disposal.",
      direct: "Direct Contacts",
      phone_web: "Phone & Web",
      whatsapp: "Write us on Whatsapp",
      facebook: "Facebook Page",
      address_label: "Address",
      map_title: "Nebrodi Office Map"
    }
  }[lang];

  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* Header */}
      <div className="bg-slate-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">{t.title}</h1>
        <p className="text-amber-500 text-xl font-light">{t.subtitle}</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 -mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info Side */}
          <div className="space-y-8">
            <div className="bg-white p-10 rounded-3xl shadow-xl space-y-10 border-t-8 border-amber-500">
              <h3 className="text-2xl font-bold uppercase tracking-tight text-slate-800">{t.direct}</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <h4 className="text-sm font-black text-amber-600 uppercase tracking-widest flex items-center gap-2">
                    <i className="fas fa-phone-alt"></i> {t.phone_web}
                  </h4>
                  <div className="flex flex-col gap-3">
                    <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="text-xl font-bold text-slate-800 hover:text-amber-600 transition-colors">
                      {CONTACT_INFO.phone}
                    </a>
                    <a href="https://wa.me/message/JPIR2AZRV7FTP1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-green-600 font-bold hover:scale-105 transition-transform origin-left">
                      <i className="fab fa-whatsapp"></i> {t.whatsapp}
                    </a>
                    <a href={CONTACT_INFO.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 font-bold hover:scale-105 transition-transform origin-left">
                      <i className="fab fa-facebook-f"></i> {t.facebook}
                    </a>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-sm font-black text-amber-600 uppercase tracking-widest flex items-center gap-2">
                    <i className="fas fa-envelope"></i> Email
                  </h4>
                  <div className="flex flex-col gap-3 overflow-hidden">
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-slate-800 font-bold hover:text-amber-600 transition-colors truncate">
                      {CONTACT_INFO.email}
                    </a>
                    <a href={`mailto:${CONTACT_INFO.emailAlt}`} className="text-slate-800 font-bold hover:text-amber-600 transition-colors truncate">
                      {CONTACT_INFO.emailAlt}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-100">
                <h4 className="text-sm font-black text-amber-600 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <i className="fas fa-map-marker-alt"></i> {t.address_label}
                </h4>
                <p className="text-lg text-slate-700 leading-relaxed font-medium">
                  {CONTACT_INFO.address}
                </p>
              </div>
            </div>
          </div>

          {/* Map Side */}
          <div className="h-full min-h-[500px] bg-white rounded-3xl shadow-xl overflow-hidden border-8 border-white">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d788.2664712615906!2d14.5880068!3d37.7884957!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1316cba73190218f%3A0x1e29a6f9c7cc3a2b!2sNebrodi%20Costruzioni%20Generali%20Srl!5e0!3m2!1sit!2sit!4v1628151806320!5m2!1sit!2sit" 
              className="w-full h-full border-0" 
              allowFullScreen={true} 
              loading="lazy"
              title={t.map_title}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
