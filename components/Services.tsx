import React from 'react';
import { ArrowRight } from 'lucide-react';
import { getServices } from '../constants';
import { useLanguage } from '../context/LanguageContext';

const Services: React.FC = () => {
  const { t } = useLanguage();
  const services = getServices(t);

  return (
    <section id="servicios" className="relative py-24 md:py-40 reveal overflow-visible bg-transparent">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-24">
          <h2 className="text-brand-accent text-[10px] font-black uppercase tracking-[0.5em] mb-4">{t('services.tag')}</h2>
          <h3 className="text-4xl md:text-6xl font-serif font-black text-brand-primary mb-6 tracking-tighter uppercase">{t('services.title')}</h3>
          <div className="w-20 h-1 bg-brand-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="relative bg-white/95 backdrop-blur-md p-10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.12)] transition-all duration-500 group flex flex-col border border-gray-100 h-full overflow-hidden"
            >
              <div className="relative z-10">
                <div className="text-brand-accent mb-10 w-12 h-12 flex items-center justify-center bg-gray-50 rounded-lg group-hover:bg-brand-accent group-hover:text-white transition-colors duration-500">
                  {service.icon}
                </div>
                
                <h4 className="text-2xl font-serif font-bold text-brand-primary mb-8 leading-tight tracking-tight max-w-[80%]">
                  {service.title}
                </h4>
              </div>

              <div className="mt-auto relative z-10 pt-8 border-t border-gray-50">
                <a 
                  href="#agendar" 
                  className="inline-flex items-center text-brand-primary text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-300 hover:text-brand-accent"
                >
                  {t('services.cta')}
                  <ArrowRight className="ml-3 w-4 h-4 transition-transform group-hover:translate-x-2" />
                </a>
              </div>
            </div>
          ))}
          
          {/* Tarjeta de "Traje a la medida" */}
          <div className="relative p-10 bg-brand-primary flex flex-col justify-center items-center text-center overflow-hidden group shadow-2xl">
            <div className="absolute inset-0 bg-brand-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="mb-8 relative z-10">
              <div className="w-16 h-1 bg-brand-accent mx-auto mb-2"></div>
              <div className="w-8 h-1 bg-brand-accent/50 mx-auto"></div>
            </div>

            <h4 className="text-3xl font-serif font-bold text-white mb-10 relative z-10 leading-tight uppercase tracking-tighter">
              {t('services.customTitle')}
            </h4>
            
            <a 
              href="#agendar" 
              className="group relative z-10 inline-flex items-center px-10 py-4 bg-white text-brand-primary text-[10px] uppercase tracking-[0.4em] font-black transition-all duration-500 hover:bg-brand-accent hover:text-white"
            >
              <span className="flex items-center">
                {t('services.customCta')}
                <ArrowRight className="ml-3 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;