
import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Languages, X, Check } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const languages = [
    { code: 'es', label: 'Español', flag: 'ES' },
    { code: 'en', label: 'English', flag: 'EN' }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[100]" ref={menuRef}>
      {/* Menú de Selección */}
      <div 
        className={`absolute bottom-full right-0 mb-4 transition-all duration-200 ease-out transform ${
          isOpen 
            ? 'translate-y-0 opacity-100 scale-100' 
            : 'translate-y-4 opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <div className="bg-black/95 backdrop-blur-xl border border-white/20 rounded-2xl p-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] min-w-[160px]">
          <div className="space-y-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code as any);
                  setIsOpen(false);
                }}
                className={`w-full group flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-150 ${
                  language === lang.code 
                    ? 'bg-brand-accent text-white' 
                    : 'hover:bg-white/10 text-gray-300 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`text-[9px] font-black w-5 h-5 flex items-center justify-center rounded-md border ${
                    language === lang.code ? 'border-white/30 bg-white/10' : 'border-white/10 bg-black'
                  }`}>
                    {lang.flag}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-widest">{lang.label}</span>
                </div>
                {language === lang.code && <Check size={14} className="animate-in fade-in zoom-in duration-200" />}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Botón Flotante Principal */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative group flex items-center justify-center w-14 h-14 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all duration-300 overflow-hidden ${
          isOpen ? 'bg-white text-black scale-90' : 'bg-black text-white hover:bg-brand-accent hover:scale-110 active:scale-95'
        }`}
        aria-label="Toggle Language Menu"
      >
        <div className={`relative z-10 transition-transform duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`}>
          {isOpen ? <X size={20} /> : <Languages size={20} />}
        </div>
        
        {/* Efecto de pulso cuando está cerrado */}
        {!isOpen && (
          <div className="absolute inset-0 bg-brand-accent opacity-0 group-hover:opacity-20 transition-opacity"></div>
        )}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
