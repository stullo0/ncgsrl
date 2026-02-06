
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CertificationsPage from './pages/CertificationsPage';
import WorksPage from './pages/WorksPage';
import WorkDetailPage from './pages/WorkDetailPage';
import PrivacyPage from './pages/PrivacyPage';
import CookieBanner from './components/CookieBanner';
import OrientationWarning from './components/OrientationWarning';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [lang, setLang] = useState<'IT' | 'EN'>('IT');

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen selection:bg-amber-500 selection:text-black">
        <Navbar lang={lang} setLang={setLang} />
        <main className="flex-grow pt-24 md:pt-32">
          <Routes>
            <Route path="/" element={<HomePage lang={lang} />} />
            <Route path="/about" element={<AboutPage lang={lang} />} />
            <Route path="/works" element={<WorksPage lang={lang} />} />
            <Route path="/works/:workId" element={<WorkDetailPage lang={lang} />} />
            <Route path="/contacts" element={<ContactPage lang={lang} />} />
            <Route path="/certifications" element={<CertificationsPage lang={lang} />} />
            <Route path="/cookie-policy" element={<PrivacyPage lang={lang} />} />
          </Routes>
        </main>
        <Footer lang={lang} />
        <CookieBanner lang={lang} />
        <OrientationWarning />
      </div>
    </HashRouter>
  );
};

export default App;
