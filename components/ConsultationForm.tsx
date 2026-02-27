import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const ConsultationForm: React.FC = () => {
  const { t } = useLanguage();
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    
    const phoneNumber = "50683921000";
    const text = `*Solicitud de Consulta Profesional*\n\n*Remitente:* ${name}\n*Consulta:* ${message}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="agendar" className="relative py-24 reveal overflow-visible bg-transparent">
      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-brand-accent text-xs font-black uppercase tracking-[0.5em] mb-4 flex items-center justify-center gap-4">
          <span className="w-8 h-[1px] bg-brand-accent"></span>
          {t('form.tag')}
          <span className="w-8 h-[1px] bg-brand-accent"></span>
        </h2>
        <h3 className="text-4xl md:text-5xl font-serif font-bold text-brand-primary mb-6 tracking-tighter uppercase">{t('form.title')}</h3>
        <p className="text-brand-neutralDark font-medium mb-16 max-w-xl mx-auto text-lg leading-relaxed">
          {t('form.desc')}
        </p>

        <div className="relative">
          <form onSubmit={handleWhatsApp} className="relative z-10 space-y-8 text-left bg-white/95 backdrop-blur-md p-10 md:p-14 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] border border-gray-100">
            <div className="group">
              <label htmlFor="name" className="block text-[10px] uppercase tracking-[0.4em] font-black text-brand-primary mb-4 transition-colors group-focus-within:text-brand-accent">
                {t('form.nameLabel')}
              </label>
              <input
                type="text"
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-6 py-5 border border-gray-100 bg-gray-50/30 focus:border-brand-accent focus:bg-white focus:outline-none transition-all duration-500 font-semibold text-brand-primary placeholder:text-gray-300 text-sm"
                placeholder={t('form.namePlaceholder')}
              />
            </div>

            <div className="group">
              <label htmlFor="message" className="block text-[10px] uppercase tracking-[0.4em] font-black text-brand-primary mb-4 transition-colors group-focus-within:text-brand-accent">
                {t('form.messageLabel')}
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-6 py-5 border border-gray-100 bg-gray-50/30 focus:border-brand-accent focus:bg-white focus:outline-none transition-all duration-500 font-semibold text-brand-primary placeholder:text-gray-300 text-sm resize-none"
                placeholder={t('form.messagePlaceholder')}
              />
            </div>

            <div className="pt-6">
              <button
                type="submit"
                className="w-full group relative overflow-hidden inline-flex items-center justify-center px-12 py-6 bg-brand-primary text-white text-[10px] uppercase tracking-[0.5em] font-black transition-all duration-500 hover:shadow-2xl hover:bg-brand-accent"
              >
                <span className="relative z-10">{t('form.submit')}</span>
              </button>
              <p className="text-center mt-8 text-[9px] text-gray-400 uppercase tracking-[0.3em] font-bold">
                {t('form.time')}
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ConsultationForm;