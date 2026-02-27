import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InstitutionalShowcase from './components/InstitutionalShowcase';
import About from './components/About';
import Services from './components/Services';
import Rates from './components/Rates';
import Methodology from './components/Methodology';
import ConsultationForm from './components/ConsultationForm';
import Footer from './components/Footer';
import LanguageSwitcher from './components/LanguageSwitcher';
import Chatbot from './components/Chatbot';
import { LanguageProvider } from './context/LanguageContext';

const AppContent: React.FC = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');

      if (anchor && anchor.getAttribute('href')?.startsWith('#')) {
        const id = anchor.getAttribute('href')?.substring(1);
        if (!id) return;
        
        const element = document.getElementById(id);

        if (element) {
          e.preventDefault();
          
          element.classList.add('active');
          const parentReveal = element.closest('.reveal');
          if (parentReveal) parentReveal.classList.add('active');

          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleGlobalClick);

    return () => {
      observer.disconnect();
      document.removeEventListener('click', handleGlobalClick);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative bg-white">
      {/* Fondo Global Nítido y Profesional */}
      <div className="fixed inset-0 z-0">
        <img 
          src="https://i.imgur.com/XZrZLyI.jpeg" 
          alt="Background" 
          className="w-full h-full object-cover"
          style={{ 
            imageRendering: 'high-quality',
            WebkitBackfaceVisibility: 'hidden',
            backfaceVisibility: 'hidden'
          }}
        />
        <div className="absolute inset-0 bg-white/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-transparent"></div>
      </div>
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <About />
          <InstitutionalShowcase />
          <Services />
          <Rates />
          <Methodology />
          <ConsultationForm />
        </main>
        <Footer />
      </div>
      <LanguageSwitcher />
      <Chatbot />
    </div>
  );
};

const App: React.FC = () => (
  <LanguageProvider>
    <AppContent />
  </LanguageProvider>
);

export default App;