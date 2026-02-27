import React from 'react';

const InstitutionalShowcase: React.FC = () => {
  return (
    <section className="relative w-full py-0 overflow-visible z-30 pointer-events-none select-none">
      {/* Contenedor principal con altura compacta para evitar separación excesiva */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative h-[150px] md:h-[250px] flex items-center justify-center overflow-visible">
        
        {/* Atmósfera de Profundidad - Glow sutil */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-brand-accent/5 rounded-full blur-[120px] opacity-30"></div>
        </div>

        {/* Imagen Institucional Premium - World Class Integration */}
        <div className="relative w-full flex justify-center items-center overflow-visible">
          <div 
            className="reveal active transition-all duration-1000 ease-out relative"
            style={{
              /* 
                 MÁSCARA DE NIVEL SUPERIOR:
                 Fundido suave que permite que la imagen se integre sin separar las secciones.
              */
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)',
              maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)',
            }}
          >
            <img 
              src="https://i.imgur.com/xigrTM7.png" 
              alt="Elite Institutional Architecture" 
              className="h-[400px] md:h-[650px] lg:h-[800px] w-auto object-contain drop-shadow-[0_40px_100px_rgba(0,0,0,0.15)]"
              style={{ 
                imageRendering: 'high-quality',
                /* Centrado exacto para actuar como divisor visual */
                transform: 'translateY(0%)',
              }}
            />
          </div>
          
          {/* Sombra de contacto ambiental muy tenue */}
          <div className="absolute bottom-[-5%] left-1/2 -translate-x-1/2 w-[70%] h-12 bg-black/[0.03] blur-[60px] rounded-[100%]"></div>
        </div>
      </div>
      
      {/* 
          ESPACIADOR REDUCIDO AL MÍNIMO: 
          Para que la sección de servicios comience casi inmediatamente después 
          del impacto visual de la arquitectura.
      */}
      <div className="h-16 md:h-24"></div>
    </section>
  );
};

export default InstitutionalShowcase;