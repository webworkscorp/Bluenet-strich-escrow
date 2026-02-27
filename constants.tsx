import React from 'react';
import { 
  ShieldCheck, 
  Lock, 
  UserCheck, 
  Scale,
  Gavel
} from 'lucide-react';
import { ServiceItem, RateItem, MethodologyStep } from './types';

/* 
 * Translation dictionary for the application.
 * Contains strings for both Spanish (es) and English (en).
 */
export const TRANSLATIONS: any = {
  es: {
    nav: {
      inicio: 'Inicio',
      nosotros: 'Quiénes Somos',
      servicios: 'Servicios',
      tarifas: 'Tarifas',
      metodologia: 'Metodología',
      contacto: 'Contacto'
    },
    hero: {
      title1: 'LAS COMISIONES DE',
      trust: 'CONFIANZA',
      title2: 'EN MANO DE',
      experts: 'EXPERTOS',
      description: 'Asesoría a la Medida para nacionales y extranjeros, que requieran de la elaboración de Contratos de Fideicomiso y Escrow. Podemos suplir la debida diligencia legal que se requiera para asegurar el fiel cumplimiento del encargo encomendado.',
      cta: 'Agendar Consulta',
      services: 'Nuestros servicios.'
    },
    about: {
      tag: 'QUIÉNES SOMOS',
      title: 'BLUENET',
      subtitle: 'TRUST & ESCROW',
      p1: 'Desde 1995, nuestro Director es parte de la industria de servicios fiduciarios, participando en estructuras de gran complejidad.',
      p2: 'Nuestro enfoque se basa en el cumplimiento regulatorio dispuesto por las Autoridades Costarricenses para esta clase de negocios.',
      featured: 'En Bluenet trust & escrow Realizamos trajes a la medida y nos enfocamos a cumplir como un buen padre de familia o gestor de negocios según corresponda.',
      director: 'Director de Banca y Finanzas',
      quote: '"La integridad es el único activo que no se puede depreciar. Lideramos con transparencia para proteger el futuro de su patrimonio."',
      viewCV: 'Ver Currículum',
      vision: 'Visión',
      visionText: 'Ser referentes en comisiones de confianza y su cumplimiento regulatorio.',
      values: 'Valores',
      valuesText: 'Responsabilidad, ética y manejo profesional de negocios.',
      years: '15+',
      yearsTag: 'Años de Trayectoria',
      yearsDesc: 'Liderando la industria de servicios fiduciarios con un historial impecable de cumplimiento y seguridad.'
    },
    services: {
      tag: 'Portafolio de Servicios',
      title: 'SOLUCIONES A SUS NECESIDADES',
      cta: 'Solicitar Consultoría',
      customTitle: '¿Necesitas un plan a la medida?',
      customCta: 'Contactar Ahora',
      items: [
        'Contratos de Fideicomiso',
        'Contratos de Escrow',
        'Cumplimiento Regulatorio y debidas diligencias',
        'Certificaciones Notariales y Tramites de Legalización Consular',
        'Consultoría Legal en fideicomiso, Escrow, cumplimiento regulatorio y debidas diligencias'
      ]
    },
    rates: {
      title: 'TARIFAS DE SERVICIO',
      cta: 'Solicitar Consultoría',
      disclaimer: '(Cualquier gasto adicional será asumido completamente por el cliente)',
      tariffsNote: 'Para servicios legales, notariales y contables conexos aplican los Aranceles Profesionales del Sector.',
      currencyNote: 'También pueden pagarse en colones costarricenses al tipo de cambio de referencia de venta del BCR de ese día.',
      period: 'MÍNIMO',
      iva: 'Más el 13.00% del Impuesto al Valor Agregado',
      features: {
        advance: 'Pago por adelantado',
        hourly: '$200 por hora profesional',
        admin: 'Administración $1,500 anuales'
      },
      items: [
        'Contrato de Fideicomiso de acción',
        'Contrato de Fideicomiso Testamentario',
        'Fideicomiso de Garantía',
        'Contrato de Escrow',
        'Asesoría en Cumplimiento regulatorio & Debida Diligencia'
      ]
    },
    methodology: {
      tag: 'FORMA DE TRABAJO',
      title: 'Un proceso estructurado para su tranquilidad',
      description: 'Nuestra metodología garantiza que ningún detalle quede al azar, proporcionando un seguimiento continuo y profesional.',
      step1Title: 'Análisis Inicial',
      step1Desc: 'Evaluamos su situación financiera actual para identificar necesidades y riesgos.',
      step2Title: 'Plan de Trabajo',
      step2Desc: 'Definimos un calendario de cumplimiento y responsabilidades específicas.',
      step3Title: 'Gestión Continua',
      step3Desc: 'Ejecutamos los procesos con reportes periódicos y seguimiento constante.'
    },
    form: {
      tag: 'CONTACTO',
      title: 'Solicite una Consulta',
      desc: 'Estamos listos para asesorarle en sus necesidades fiduciarias.',
      nameLabel: 'Nombre Completo',
      namePlaceholder: 'Su nombre aquí...',
      messageLabel: 'Consulta',
      messagePlaceholder: '¿Cómo podemos ayudarle?',
      submit: 'Enviar consulta',
      time: 'Respuesta en menos de 24 horas'
    },
    footer: {
      contact: 'Contacto',
      rights: '© {year} BLUENET Trust & Escrow. Todos los derechos reservados.',
      privacy: 'Privacidad',
      terms: 'Términos',
      legalNotice: 'AVISO LEGAL: La inscripción de BLUENET con cédula jurídica número 3-102-865903 ante la Superintendencia General de Entidades Financieras (SUGEF) no es una autorización para operar, y la supervisión que ejerce esa Superintendencia es sólo en materia de prevención de legitimación de capitales, financiamiento al terrorismo y financiamiento de la proliferación de armas de destrucción masiva, según lo dispuesto en la Ley N° 7786, ¨Ley sobre estupefacientes, sustancias psicotrópicas, drogas de uso no autorizado, actividades conexas, legitimación de capitales y financiamiento al terrorismo¨. Por lo tanto, la SUGEF no supervisa los negocios que ofrece y realiza la empresa, ni su seguridad, estabilidad o solvencia. Las personas que contraten sus productos y servicios lo hacen bajo su cuenta y riesgo. Todo lo anterior es entendido por las partes contratantes.'
    },
    finance: {
      label: 'Tipo de Cambio',
      buy: 'Compra',
      sell: 'Venta',
      live: 'En Vivo',
      loading: 'Cargando datos...'
    }
  },
  en: {
    nav: {
      inicio: 'Home',
      nosotros: 'About Us',
      servicios: 'Services',
      tarifas: 'Rates',
      metodologia: 'Methodology',
      contacto: 'Contact'
    },
    hero: {
      title1: 'TRUST',
      trust: 'COMMISSIONS',
      title2: 'IN HANDS OF',
      experts: 'EXPERTS',
      description: 'Tailor-made advice for locals and foreigners, requiring the drafting of Trust and Escrow Contracts. We can provide the legal due diligence required to ensure faithful compliance with the entrusted task.',
      cta: 'Schedule Consultation',
      services: 'Our services.'
    },
    about: {
      tag: 'ABOUT US',
      title: 'BLUENET',
      subtitle: 'TRUST & ESCROW',
      p1: 'Since 1995, our Director has been part of the fiduciary services industry, participating in structures of great complexity.',
      p2: 'Our focus is based on regulatory compliance established by the Costa Rican Authorities for this type of business.',
      featured: 'At Bluenet trust & escrow we create custom solutions and focus on performing as a "good father of a family" or business manager as appropriate.',
      director: 'Director of Banking and Finance',
      quote: '"Integrity is the only asset that cannot depreciate. We lead with transparency to protect the future of your assets."',
      viewCV: 'View Resume',
      vision: 'Vision',
      visionText: 'To be references in trust commissions and their regulatory compliance.',
      values: 'Values',
      valuesText: 'Responsibility, ethics, and professional business management.',
      years: '15+',
      yearsTag: 'Years of Experience',
      yearsDesc: 'Leading the fiduciary services industry with an impeccable record of compliance and security.'
    },
    services: {
      tag: 'Service Portfolio',
      title: 'SOLUTIONS FOR YOUR NEEDS',
      cta: 'Request Consulting',
      customTitle: 'Need a custom plan?',
      customCta: 'Contact Now',
      items: [
        'Trust Agreements',
        'Escrow Agreements',
        'Regulatory Compliance and Due Diligence',
        'Notary Certifications and Consular Legalization Procedures',
        'Legal Consulting in Trusts, Escrow, Compliance, and Due Diligence'
      ]
    },
    rates: {
      title: 'SERVICE RATES',
      cta: 'Request Consulting',
      disclaimer: '(Any additional expense will be fully assumed by the client)',
      tariffsNote: 'For related legal, notary, and accounting services, Professional Sector Tariffs apply.',
      currencyNote: 'Payments can also be made in Costa Rican colones at the BCR\'s reference selling exchange rate of that day.',
      period: 'MINIMUM',
      iva: 'Plus 13.00% Value Added Tax',
      features: {
        advance: 'Advance payment',
        hourly: '$200 per professional hour',
        admin: 'Administration $1,500 annually'
      },
      items: [
        'Share Trust Agreement',
        'Testamentary Trust Agreement',
        'Guarantee Trust',
        'Escrow Agreement',
        'Regulatory Compliance & Due Diligence Advisory'
      ]
    },
    methodology: {
      tag: 'WORKFLOW',
      title: 'A structured process for your peace of mind',
      description: 'Our methodology ensures that no detail is left to chance, providing continuous and professional monitoring.',
      step1Title: 'Initial Analysis',
      step1Desc: 'We evaluate your current financial situation to identify needs and risks.',
      step2Title: 'Work Plan',
      step2Desc: 'We define a compliance calendar and specific responsibilities.',
      step3Title: 'Continuous Management',
      step3Desc: 'We execute processes with periodic reports and constant follow-up.'
    },
    form: {
      tag: 'CONTACT',
      title: 'Request a Consultation',
      desc: 'We are ready to advise you on your fiduciary needs.',
      nameLabel: 'Full Name',
      namePlaceholder: 'Your name here...',
      messageLabel: 'Inquiry',
      messagePlaceholder: 'How can we help you?',
      submit: 'Send Inquiry',
      time: 'Response in less than 24 hours'
    },
    footer: {
      contact: 'Contact',
      rights: '© {year} BLUENET Trust & Escrow. All rights reserved.',
      privacy: 'Privacy',
      terms: 'Terms',
      legalNotice: 'LEGAL NOTICE: The registration of BLUENET with legal ID number 3-102-865903 before the General Superintendency of Financial Entities (SUGEF) is not an authorization to operate, and the supervision exercised by said Superintendency is only in matters of prevention of money laundering, financing of terrorism, and financing of the proliferation of weapons of mass destruction, as provided in Law No. 7786, "Law on narcotics, psychotropic substances, unauthorized drugs, related activities, money laundering, and financing of terrorism." Therefore, SUGEF does not supervise the businesses offered and carried out by the company, nor its safety, stability, or solvency. Persons who contract its products and services do so at their own risk. All of the above is understood by the contracting parties.'
    },
    finance: {
      label: 'Exchange Rate',
      buy: 'Buy',
      sell: 'Sell',
      live: 'Live',
      loading: 'Loading data...'
    }
  }
};

// Returns service items with translated titles and specific icons.
export const getServices = (t: (key: string) => any): ServiceItem[] => [
  {
    title: t('services.items.0'),
    description: '',
    icon: <Lock className="w-6 h-6" />
  },
  {
    title: t('services.items.1'),
    description: '',
    icon: <ShieldCheck className="w-6 h-6" />
  },
  {
    title: t('services.items.2'),
    description: '',
    icon: <UserCheck className="w-6 h-6" />
  },
  {
    title: t('services.items.3'),
    description: '',
    icon: <Scale className="w-6 h-6" />
  },
  {
    title: t('services.items.4'),
    description: '',
    icon: <Gavel className="w-6 h-6" />
  }
];

// Returns rate tiers based on translations.
export const getRates = (t: (key: string) => any): RateItem[] => {
  const titles = t('rates.items');
  const commonFeatures = [
    t('rates.features.advance'),
    t('rates.features.hourly'),
    t('rates.features.admin')
  ];

  return titles.map((title: string) => ({
    title,
    price: '$500',
    period: t('rates.period'),
    features: commonFeatures
  }));
};

// Returns methodology steps from translations.
export const getMethodology = (t: (key: string) => any): MethodologyStep[] => [
  {
    number: '01',
    title: t('methodology.step1Title'),
    description: t('methodology.step1Desc')
  },
  {
    number: '02',
    title: t('methodology.step2Title'),
    description: t('methodology.step2Desc')
  },
  {
    number: '03',
    title: t('methodology.step3Title'),
    description: t('methodology.step3Desc')
  }
];