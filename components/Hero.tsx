import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="inicio" className="relative min-h-screen w-full flex items-start justify-center overflow-hidden bg-transparent pt-80 md:pt-96 pb-20">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-start">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-brand-primary mb-12 leading-[1.05] animate-fade-up tracking-tighter uppercase">
            {t('hero.title1')} <br />
            <span className="text-brand-accent italic font-normal">{t('hero.trust')}</span> <br />
            {t('hero.title2')} <span className="relative">
              {t('hero.experts')}
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-brand-accent/30"></span>
            </span>
          </h1>
          
          <p className="text-brand-neutralDark text-xl md:text-2xl max-w-2xl mb-14 font-medium leading-relaxed animate-fade-up [animation-delay:400ms] border-l-4 border-brand-accent pl-10">
            {t('hero.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-10 animate-fade-up [animation-delay:600ms]">
            <button 
              onClick={() => document.getElementById('agendar')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative inline-flex items-center justify-center w-full sm:w-auto px-16 py-6 bg-brand-primary text-white text-[11px] uppercase tracking-[0.5em] font-black transition-all duration-700 hover:bg-brand-accent hover:shadow-2xl hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center">
                {t('hero.cta')}
                <ArrowRight className="ml-5 w-4 h-4 transition-transform duration-500 group-hover:translate-x-3" />
              </span>
            </button>
            <button 
              onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
              className="group inline-flex items-center justify-center w-full sm:w-auto px-12 py-5 text-brand-primary text-[11px] uppercase tracking-[0.5em] font-black transition-all duration-300 hover:text-brand-accent"
            >
              <span className="border-b-2 border-brand-primary/10 group-hover:border-brand-accent pb-2 transition-all">
                {t('hero.services')}
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-brand-accent opacity-40 animate-bounce">
        <ChevronDown size={36} />
      </div>
      
      {/* Elementos decorativos de fondo sutiles */}
      <div className="absolute top-1/4 right-0 w-1/3 h-1/2 bg-brand-accent/5 blur-[120px] rounded-full -z-10"></div>
    </section>
  );
};

export default Hero;