
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS_DATA } from '../constants';

interface NavbarProps {
  lang: 'IT' | 'EN';
  setLang: (lang: 'IT' | 'EN') => void;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navItems = NAV_ITEMS_DATA[lang];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const isExternal = (path: string) => path.startsWith('http');

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white shadow-xl' : 'bg-white shadow-md'}`}>
      <div className={`py-4 px-6 md:px-12 flex justify-between items-center transition-all duration-500 ${scrolled ? 'md:py-3' : 'md:py-6'}`}>
        <Link to="/" className="flex flex-col group">
          <span className="text-amber-600 font-black text-xl md:text-3xl uppercase tracking-tighter group-hover:text-amber-500 transition-colors leading-none">
            Nebrodi Costruzioni Generali
          </span>
          <span className="text-slate-500 font-black text-xs md:text-sm tracking-[0.2em] uppercase">
            SRL
          </span>
        </Link>
        
        <div className="flex items-center gap-8">
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6 list-none p-0 m-0">
              {navItems.map((item) => (
                <li key={item.label}>
                  {isExternal(item.path) ? (
                    <a 
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-black text-slate-800 hover:text-amber-600 transition-all uppercase tracking-widest"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      to={item.path}
                      className={`text-[11px] font-black transition-all uppercase tracking-widest border-b-2 pb-1 ${location.pathname === item.path ? 'text-amber-600 border-amber-600' : 'text-slate-800 border-transparent hover:text-amber-600'}`}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
              <li>
                <button 
                  onClick={() => setLang(lang === 'IT' ? 'EN' : 'IT')}
                  className="flex items-center gap-2 text-slate-400 hover:text-amber-600 transition-colors text-[11px] font-black uppercase tracking-widest border-l pl-6 border-slate-200"
                >
                  <i className="fas fa-globe"></i> {lang}
                </button>
              </li>
            </ul>
          </nav>
          
          <button 
            onClick={toggleMenu}
            className="md:hidden text-2xl text-slate-800 hover:text-amber-600 transition-colors focus:outline-none"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars-staggered"></i>
          </button>
        </div>
      </div>

      <div 
        className={`fixed inset-0 z-[60] bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={toggleMenu}
      />
      
      <div className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white z-[70] shadow-2xl transition-transform duration-500 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-between items-center mb-16">
            <span className="text-amber-600 font-black tracking-tighter uppercase">Menu</span>
            <button onClick={toggleMenu} className="text-3xl text-slate-400 hover:text-amber-600 transition-colors">
              <i className="fas fa-times"></i>
            </button>
          </div>

          <nav className="flex-grow">
            <ul className="flex flex-col gap-8 list-none p-0 m-0">
              {navItems.map((item, idx) => (
                <li key={item.label} className="overflow-hidden">
                  <div className={`transition-all duration-500 delay-[${idx * 100}ms] ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    {isExternal(item.path) ? (
                      <a 
                        href={item.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-3xl font-black text-slate-800 hover:text-amber-600 transition-all uppercase tracking-tighter block"
                        onClick={toggleMenu}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        to={item.path}
                        className={`text-3xl font-black transition-all uppercase tracking-tighter block ${location.pathname === item.path ? 'text-amber-600' : 'text-slate-800 hover:text-amber-600'}`}
                        onClick={toggleMenu}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </nav>

          <div className={`mt-auto pt-10 border-t border-slate-100 transition-all duration-700 delay-500 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <button 
              onClick={() => { setLang(lang === 'IT' ? 'EN' : 'IT'); toggleMenu(); }}
              className="flex items-center gap-3 text-sm font-bold text-slate-500 hover:text-amber-600 transition-colors uppercase tracking-widest mb-8"
            >
              <i className="fas fa-globe text-amber-600"></i>
              {lang === 'IT' ? 'Switch to English' : 'Passa all\'Italiano'}
            </button>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-amber-500 hover:text-white transition-all"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-amber-500 hover:text-white transition-all"><i className="fab fa-instagram"></i></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-amber-500 hover:text-white transition-all"><i className="fab fa-whatsapp"></i></a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
