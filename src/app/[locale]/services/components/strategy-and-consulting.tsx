'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { ServiceLayout } from '@/features/services/ui/service-layout';
import { ServicesSlider } from '@/features/services/ui/services-slider';

const getServices = (t: ReturnType<typeof useTranslations>) => [
  {
    name: t('products.0.name', { fallback: 'Marketing Strategy Development' }),
    description: t('products.0.description', {
      fallback:
        'We create a detailed marketing roadmap aligned with your goals, audience, and budget — built to deliver real results.',
    }),
    price: '€1500.00',
  },
  {
    name: t('products.1.name', { fallback: 'Competitive Analysis' }),
    description: t('products.1.description', {
      fallback:
        'We break down your competitors’ strategies to identify gaps, strengths, and areas where your brand can lead.',
    }),
    price: '€1400.00',
  },
  {
    name: t('products.2.name', { fallback: 'Brand Positioning & Messaging' }),
    description: t('products.2.description', {
      fallback:
        'We help define how your brand should be perceived and craft messaging that resonates with your target audience.',
    }),
    price: '€1350.00',
  },
  {
    name: t('products.3.name', { fallback: 'Go-to-Market Strategy' }),
    description: t('products.3.description', {
      fallback:
        'We develop a smart, step-by-step launch or re-launch strategy that brings your brand to market effectively.',
    }),
    price: '€1200.00',
  },
  {
    name: t('products.4.name', {
      fallback: 'Market Research & Consumer Insights',
    }),
    description: t('products.4.description', {
      fallback:
        'We analyze your market, trends, and audience behavior to uncover the opportunities that matter most.',
    }),
    price: '€1600.00',
  },
  {
    name: t('products.5.name', { fallback: 'Campaign Planning & Roadmapping' }),
    description: t('products.5.description', {
      fallback:
        'We design strategic campaign blueprints with clear goals, channels, timelines, and KPIs to ensure every step drives impact.',
    }),
    price: '€1250.00',
  },
];

export const StrategyAndConsulting = () => {
  const t = useTranslations('services.strategyAndConsulting');

  return (
    <ServiceLayout>
      <ServicesSlider title="Strategy & Consulting" values={getServices(t)}>
        <Image
          className="max-md:-bottom-auto absolute top-[300px] -left-[80px] -translate-y-1/2 rotate-[108.514deg] max-md:-right-40 max-md:left-auto max-md:-translate-y-1/2"
          src="/images/services/pill.png"
          alt="pill"
          width={752}
          height={752}
          unoptimized
        />
      </ServicesSlider>
    </ServiceLayout>
  );
};
