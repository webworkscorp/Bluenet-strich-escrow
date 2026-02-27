import React from 'react';
import { Check, ArrowRight, Info } from 'lucide-react';
import { getRates } from '../constants';
import { useLanguage } from '../context/LanguageContext';

const Rates: React.FC = () => {
  const { t } = useLanguage();
  const rates = getRates(t);

  return (
    <section id="tarifas" className="relative py-24 md:py-32 overflow-visible bg-transparent">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-brand-primary mb-6 uppercase tracking-tighter">
            {t('rates.title')}
          </h3>
          <div className="w-24 h-1 bg-brand-accent mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 justify-center">
          {rates.map((rate, index) => (
            <div 
              key={index}
              className="group relative p-10 bg-white/95 backdrop-blur-sm shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 border-t-4 border-t-brand-primary flex flex-col h-full"
            >
              <h4 className="text-xl font-serif font-bold text-brand-primary mb-6 min-h-[4rem] relative z-10 leading-tight">
                {rate.title}
              </h4>
              
              <div className="mb-8 relative z-10">
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-4xl font-serif font-bold text-brand-primary tracking-tighter">
                    {rate.price}
                  </span>
                  <span className="text-brand-accent text-[10px] font-black uppercase tracking-widest">
                    {rate.period}
                  </span>
                </div>
                
                {/* IVA y Nota de Moneda - Información de pago integrada */}
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-accent/10 rounded-full">
                    <Info className="w-3.5 h-3.5 text-brand-accent" />
                    <span className="text-[9px] font-black text-brand-accent uppercase tracking-wider">
                      {t('rates.iva')}
                    </span>
                  </div>
                  <p className="text-[8.5px] font-bold text-gray-400 uppercase tracking-wider leading-relaxed max-w-[240px]">
                    {t('rates.currencyNote')}
                  </p>
                </div>
              </div>
              
              <ul className="space-y-5 mb-12 relative z-10 flex-grow">
                {rate.features.map((feature: string, fIndex: number) => (
                  <li key={fIndex} className="flex items-start gap-3 text-sm text-gray-600 font-semibold leading-relaxed">
                    <Check className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => document.getElementById('agendar')?.scrollIntoView({ behavior: 'smooth' })}
                className="relative z-10 w-full py-5 text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-300 flex items-center justify-center gap-3 bg-brand-primary text-white hover:bg-brand-accent hover:shadow-lg"
              >
                {t('rates.cta')}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center space-y-4 max-w-3xl mx-auto opacity-70 border-t border-gray-200/50 pt-8">
          <p className="text-[11px] text-brand-neutralDark uppercase tracking-[0.2em] font-black leading-relaxed italic">
            {t('rates.disclaimer')}
          </p>
          <p className="text-[11px] text-brand-neutralDark uppercase tracking-[0.2em] font-black leading-relaxed">
            {t('rates.tariffsNote')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Rates;