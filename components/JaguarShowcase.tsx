import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const JaguarShowcase: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative w-full py-0 overflow-visible z-20 pointer-events-none select-none">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative h-[300px] md:h-[500px] flex items-center justify-center">
        
        {/* Texto de Fondo - Tipografía de Lujo con tamaño más reducido y sutil */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <span className="text-[6rem] md:text-[12rem] font-serif font-black text-brand-primary/[0.04] leading-none select-none tracking-tight uppercase">
            BLUNET
          </span>
        </div>

        {/* El Jaguar - Imagen Principal con Efectos de Clase Mundial */}
        <div className="relative w-full h-full flex justify-center items-center">
          <img 
            src="https://i.imgur.com/C1C8MSz.png" 
            alt="Jaguar Prestigio" 
            className="reveal absolute h-[400px] md:h-[700px] lg:h-[850px] w-auto object-contain z-30 drop-shadow-[0_35px_60px_rgba(0,0,0,0.15)] transition-all duration-1000 active"
            style={{ 
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -45%)',
              imageRendering: 'high-quality'
            }}
          />
          
          {/* Detalles de Diseño - Líneas de Precisión */}
          <div className="absolute bottom-0 left-0 w-full flex flex-col items-center gap-4 pb-12 pointer-events-auto">
            <div className="w-[1px] h-24 bg-gradient-to-t from-brand-accent to-transparent"></div>
            <p className="text-brand-accent text-[10px] font-black uppercase tracking-[0.5em] opacity-80">
              BLUENET TRUST & ESCROW
            </p>
          </div>
        </div>
      </div>
      
      {/* Spacer para dar aire a la sección de servicios y permitir que el jaguar sobrepase */}
      <div className="h-24 md:h-48"></div>
    </section>
  );
};

export default JaguarShowcase;