
import React, { useState, useEffect } from 'react';

const OrientationWarning: React.FC = () => {
  const [isLandscapeMobile, setIsLandscapeMobile] = useState(false);

  useEffect(() => {
    const checkOrientation = () => {
      const isMobile = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      const isLandscape = window.innerWidth > window.innerHeight;
      setIsLandscapeMobile(isMobile && isLandscape);
    };

    window.addEventListener('resize', checkOrientation);
    checkOrientation();

    return () => window.removeEventListener('resize', checkOrientation);
  }, []);

  if (!isLandscapeMobile) return null;

  return (
    <div className="fixed inset-0 z-[2000] bg-neutral-900 flex flex-col items-center justify-center text-white p-8 text-center animate-fade-in">
      <div className="text-6xl text-orange-500 mb-6 animate-bounce">
        <i className="fas fa-mobile-alt transform rotate-90"></i>
      </div>
      <h2 className="text-2xl font-bold mb-4 uppercase">Gira il dispositivo</h2>
      <p className="text-neutral-400 max-w-md">
        Per una migliore visualizzazione ti consigliamo di utilizzare il dispositivo in posizione verticale.
      </p>
      <p className="text-neutral-500 mt-4 text-sm italic">
        For a better user experience, please turn your device to portrait mode.
      </p>
      <button 
        onClick={() => setIsLandscapeMobile(false)}
        className="mt-8 border border-neutral-700 px-6 py-2 rounded-full text-xs hover:bg-white hover:text-black transition-colors"
      >
        CHIUDI / CLOSE
      </button>
    </div>
  );
};

export default OrientationWarning;
