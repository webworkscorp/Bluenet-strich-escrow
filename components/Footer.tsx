import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer id="contacto" className="bg-white text-brand-primary pt-24 pb-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 mb-20">
          <div className="lg:col-span-1">
             <div className="flex flex-col mb-8">
                <a href="#inicio" className="block transition-transform hover:scale-105">
                  <img 
                    src="https://i.imgur.com/nAt78Po.png" 
                    alt="BLUENET" 
                    className="h-20 w-auto object-contain self-start mb-6"
                  />
                </a>
                
                {/* Aviso Legal - Bloque de Cumplimiento Regulatorio */}
                <div className="mt-4 text-[10px] text-gray-500 leading-relaxed font-medium uppercase tracking-tight max-w-xl text-justify border-l-2 border-brand-accent/20 pl-4 py-1">
                  {t('footer.legalNotice')}
                </div>
              </div>
          </div>

          <div className="flex flex-col">
            <h4 className="font-serif text-lg mb-8 text-brand-accent uppercase tracking-wider">{t('footer.contact')}</h4>
            <div className="space-y-10">
              {/* Mauricio Ramírez */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-brand-primary font-bold text-lg">Mauricio Ramírez</span>
                  <span className="text-brand-accent text-[10px] font-black uppercase tracking-widest bg-brand-accent/5 px-2 py-0.5 rounded">Director</span>
                </div>
                <div className="flex flex-col gap-2 pl-1">
                  <a href="mailto:mramirez@bluenetcr.com" className="flex items-center gap-3 text-sm text-gray-600 hover:text-brand-accent transition-colors font-medium">
                    <Mail size={14} className="text-brand-accent" />
                    mramirez@bluenetcr.com
                  </a>
                  <a href="tel:+50683921000" className="flex items-center gap-3 text-sm text-gray-600 hover:text-brand-accent transition-colors font-bold">
                    <Phone size={14} className="text-brand-accent" />
                    tel (506) 8392 1000
                  </a>
                </div>
              </div>

              {/* Julián Aguilar */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-brand-primary font-bold text-lg">Julián Aguilar</span>
                  <span className="text-brand-accent text-[10px] font-black uppercase tracking-widest bg-brand-accent/5 px-2 py-0.5 rounded">Director</span>
                </div>
                <div className="flex flex-col gap-2 pl-1">
                  <a href="mailto:jaguilar@bluenetcr.com" className="flex items-center gap-3 text-sm text-gray-600 hover:text-brand-accent transition-colors font-medium">
                    <Mail size={14} className="text-brand-accent" />
                    jaguilar@bluenetcr.com
                  </a>
                  <a href="tel:+50686595546" className="flex items-center gap-3 text-sm text-gray-600 hover:text-brand-accent transition-colors font-bold">
                    <Phone size={14} className="text-brand-accent" />
                    tel (506) 8659 5546
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">
            {t('footer.rights').replace('{year}', new Date().getFullYear().toString())}
          </p>
          <div className="flex gap-8 text-[10px] text-gray-400 uppercase tracking-widest font-semibold">
            <a href="#inicio" className="hover:text-brand-accent transition-colors">{t('footer.privacy')}</a>
            <a href="#inicio" className="hover:text-brand-accent transition-colors">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;