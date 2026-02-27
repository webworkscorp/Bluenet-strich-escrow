
import React from 'react';

export type Language = 'es' | 'en';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface RateItem {
  title: string;
  price: string;
  period: string;
  features: string[];
  recommended?: boolean;
}

export interface MethodologyStep {
  number: string;
  title: string;
  description: string;
}
