import React from 'react';
import { getMethodology } from '../constants';
import { useLanguage } from '../context/LanguageContext';

const Methodology: React.FC = () => {
  const { t } = useLanguage();
  const methodology = getMethodology(t);

  return (
    <section id="metodologia" className="relative py-24 md:py-32 overflow-visible bg-transparent">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-2xl">
            <h2 className="text-brand-accent text-xs font-black uppercase tracking-[0.5em] mb-6 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-brand-accent"></span>
              {t('methodology.tag')}
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-brand-primary leading-tight tracking-tighter uppercase">
              {t('methodology.title')}
            </h3>
          </div>
          <p className="text-brand-neutralDark max-w-sm text-lg font-medium border-l-4 border-brand-accent pl-8 py-2">
            {t('methodology.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
          {methodology.map((step: any, index: number) => (
            <div key={index} className="relative group">
              <span className="text-8xl font-sans font-black text-brand-primary/5 absolute -top-12 left-0 transition-all duration-500 group-hover:text-brand-accent/10 group-hover:-translate-y-2">
                {step.number}
              </span>
              <div className="relative pt-12">
                <div className="w-12 h-[2px] bg-brand-accent mb-6 transform origin-left transition-transform duration-500 group-hover:scale-x-150"></div>
                <h4 className="text-2xl font-serif font-bold text-brand-primary mb-6 group-hover:text-brand-accent transition-colors duration-300 uppercase tracking-tight">
                  {step.title}
                </h4>
                <p className="text-gray-600 text-base leading-relaxed font-medium">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;