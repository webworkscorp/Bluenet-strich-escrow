import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BadgeCheck, Linkedin } from 'lucide-react';

const About: React.FC = () => {
  const { t } = useLanguage();
  const cvUrl = "https://docs.google.com/document/d/1FELeDCGHe3H-wLs9mtx3cvCd9AnEDsvp/edit?usp=share_link&ouid=107225819394273584446&rtpof=true&sd=true";
  const linkedinUrl = "https://www.linkedin.com/in/mauricio-ram%C3%ADrez-rodr%C3%ADguez-654a5b62?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";
  const mauricioImageUrl = "https://i.imgur.com/uzMVEZp.jpeg";

  return (
    <section 
      id="nosotros" 
      className="relative py-28 md:py-40 reveal overflow-visible bg-transparent"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          
          <div className="lg:col-span-6">
            <div className="mb-12">
              <h2 className="text-brand-accent text-[10px] font-black uppercase tracking-[0.5em] mb-6 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-brand-accent"></span>
                {t('about.tag')}
              </h2>
              <h3 className="text-4xl md:text-6xl font-serif font-black text-brand-primary mb-10 leading-tight tracking-tighter uppercase">
                {t('about.title')} <span className="text-brand-accent font-sans font-black tracking-[0.15em] text-2xl md:text-4xl block mt-4 md:mt-0 md:inline-block">{t('about.subtitle')}</span>
              </h3>
              <div className="space-y-8 text-brand-neutralDark text-lg md:text-xl leading-relaxed font-medium opacity-90">
                <p>{t('about.p1')}</p>
                <p>{t('about.p2')}</p>
                <p className="text-brand-primary font-bold text-xl md:text-2xl leading-relaxed pt-4 border-t border-brand-accent/20">
                  {t('about.featured')}
                </p>
              </div>
            </div>

            <div className="relative mt-20 p-1 bg-gradient-to-br from-gray-200/30 to-transparent">
              {/* Cuadro de Mauricio - Contenedor con profundidad */}
              <div className="relative bg-white/90 backdrop-blur-xl p-8 md:p-14 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] flex flex-col md:flex-row items-center gap-12 border border-white/40">
                
                {/* Imagen Indígena Decorativa */}
                <img 
                  src="https://i.imgur.com/fvrceVF.png" 
                  alt="Decoración" 
                  className="absolute -top-24 -left-12 w-32 md:w-40 h-auto object-contain z-20 pointer-events-none select-none"
                />

                <div className="relative flex-shrink-0 z-10">
                  <img 
                    src={mauricioImageUrl} 
                    alt="Mauricio Ramírez - Director" 
                    className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover shadow-2xl border-4 border-white/50"
                  />
                  {/* Icono de Insignia de Verificación (BadgeCheck) - Estilo Premium */}
                  <div className="absolute -bottom-2 -right-2 bg-brand-accent text-white p-4 rounded-full border-4 border-white shadow-xl">
                    <BadgeCheck className="w-6 h-6" />
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-left relative z-10">
                  <div className="mb-6">
                    <h4 className="font-serif text-3xl md:text-5xl font-bold text-brand-primary tracking-tighter mb-2">
                      Mauricio Ramírez
                    </h4>
                    <p className="text-brand-accent text-xs font-black uppercase tracking-[0.5em] opacity-80">
                      {t('about.director')}
                    </p>
                  </div>
                  <p className="text-brand-neutralDark text-base md:text-lg leading-relaxed mb-8 italic font-medium opacity-80 max-w-md">
                    {t('about.quote')}
                  </p>
                  
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                    <a 
                      href={cvUrl} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-10 py-4 bg-brand-accent text-white text-[10px] font-black uppercase tracking-[0.3em] hover:bg-brand-accentLight transition-all duration-300 shadow-lg"
                    >
                      {t('about.viewCV')}
                    </a>
                    
                    <a 
                      href={linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-12 h-12 bg-white text-brand-primary border border-gray-100 hover:text-brand-accent hover:border-brand-accent transition-all duration-300 shadow-lg group"
                      title="LinkedIn Profile"
                    >
                      <Linkedin size={20} className="transition-transform group-hover:scale-110" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-gray-200/50 pt-20">
              <div className="space-y-5">
                <div className="mb-2">
                  <h4 className="font-sans font-black text-[12px] uppercase tracking-[0.5em] text-brand-accent">{t('about.vision')}</h4>
                </div>
                <p className="text-brand-primary font-serif text-2xl font-bold leading-relaxed">
                  {t('about.visionText')}
                </p>
              </div>
              <div className="space-y-5">
                <div className="mb-2">
                  <h4 className="font-sans font-black text-[12px] uppercase tracking-[0.5em] text-brand-accent">{t('about.values')}</h4>
                </div>
                <p className="text-brand-primary font-serif text-2xl font-bold leading-relaxed">
                  {t('about.valuesText')}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative hidden lg:block self-start sticky top-32">
            <div className="relative">
              <img 
                src={mauricioImageUrl} 
                alt="Mauricio Ramírez - Portada" 
                className="w-full h-[800px] object-cover grayscale brightness-90 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] rounded-sm"
                style={{ objectPosition: 'center top' }}
              />
              <div className="absolute inset-0 bg-brand-primary/5 mix-blend-overlay"></div>
              
              <div className="absolute -bottom-10 -right-10 bg-brand-primary p-12 text-white shadow-3xl max-w-xs border-r-8 border-brand-accent text-right">
                <p className="text-5xl font-serif font-bold mb-2">{t('about.years')}</p>
                <p className="text-[10px] uppercase tracking-[0.4em] font-black text-brand-accent mb-6">{t('about.yearsTag')}</p>
                <p className="text-gray-400 text-xs leading-relaxed font-medium">
                  {t('about.yearsDesc')}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;