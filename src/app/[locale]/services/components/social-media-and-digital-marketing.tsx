'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { ServicesSlider } from '@/features/services/ui/services-slider';

const getSocialMedia = (t: ReturnType<typeof useTranslations>) => [
  {
    name: t('products.0.name', { fallback: 'Social Media Management' }),
    description: t('products.0.description', {
      fallback:
        'We handle posting, scheduling, engagement, and performance tracking across all your social platforms.',
    }),
    price: '€1500.00',
  },
  {
    name: t('products.1.name', {
      fallback: 'Community Engagement & Moderation',
    }),
    description: t('products.1.description', {
      fallback:
        "We keep your audience active and engaged by responding to comments, messages, and mentions while protecting your brand's reputation.",
    }),
    price: '€1100.00',
  },
  {
    name: t('products.2.name', {
      fallback: 'Content Creation for Social Media (posts, stories, reels)',
    }),
    description: t('products.2.description', {
      fallback:
        'We design and produce scroll-stopping content that fits your brand style and drives engagement.',
    }),
    price: '€1300.00',
  },
  {
    name: t('products.3.name', {
      fallback: 'Social Media Audit & Optimization',
    }),
    description: t('products.3.description', {
      fallback:
        'We review your current social presence and apply proven strategies to improve reach, engagement, and conversions.',
    }),
    price: '€1400.00',
  },
  {
    name: t('products.4.name', {
      fallback: 'Influencer Marketing & Partnerships',
    }),
    description: t('products.4.description', {
      fallback:
        'We connect your brand with the right influencers and partners to boost awareness and credibility.',
    }),
    price: '€1350.00',
  },
  {
    name: t('products.5.name', {
      fallback: 'Paid Social Media Campaigns',
    }),
    description: t('products.5.description', {
      fallback:
        'We create, manage, and optimize paid campaigns on platforms like Meta, TikTok, and LinkedIn for maximum ROI.',
    }),
    price: '€1200.00',
  },
];

const getDigitalMarketing = (t: ReturnType<typeof useTranslations>) => [
  {
    name: t('products2.0.name', {
      fallback: 'Search Engine Optimization (SEO)',
    }),
    description: t('products2.0.description', {
      fallback:
        'We optimize your website content, structure, and keywords to improve search rankings and attract organic traffic.',
    }),
    price: '€1480.00',
  },
  {
    name: t('products2.1.name', {
      fallback: 'Email Marketing Campaigns',
    }),
    description: t('products2.1.description', {
      fallback:
        'We design and send targeted email campaigns that engage subscribers and turn them into loyal customers.',
    }),
    price: '€1450.00',
  },
  {
    name: t('products2.2.name', {
      fallback: 'Pay-Per-Click Advertising (Google Ads, Bing Ads)',
    }),
    description: t('products2.2.description', {
      fallback:
        'We create and manage high-converting ad campaigns that deliver instant visibility and measurable ROI.',
    }),
    price: '€1590.00',
  },
  {
    name: t('products2.3.name', {
      fallback: 'Marketing Automation',
    }),
    description: t('products2.3.description', {
      fallback:
        'We set up smart automation systems to streamline campaigns, nurture leads, and save you time.',
    }),
    price: '€1700.00',
  },
  {
    name: t('products2.4.name', {
      fallback: 'Social Media Advertising (Meta Ads, TikTok Ads, LinkedIn Ads)',
    }),
    description: t('products2.4.description', {
      fallback:
        'We run targeted ad campaigns on major social platforms to grow your audience and boost conversions.',
    }),
    price: '€1280.00',
  },
  {
    name: t('products2.5.name', {
      fallback: 'Retargeting & Remarketing Campaigns',
    }),
    description: t('products2.5.description', {
      fallback:
        "We re-engage visitors who didn't convert the first time, bringing them back to complete the sale.",
    }),
    price: '€1350.00',
  },
];

export const SocialMediaAndDigitalMarketing = () => {
  const t = useTranslations('services.socialMediaAndDigitalMarketing');

  return (
    <section className="relative flex flex-col gap-[140px] overflow-hidden py-[70px] pl-10 max-md:pl-2">
      <ServicesSlider
        title={t('title', { fallback: 'Social Media & Community' })}
        values={getSocialMedia(t)}
      />
      <ServicesSlider
        title={t('title2', { fallback: 'Digital Marketing' })}
        values={getDigitalMarketing(t)}
      />
      <Image
        className="absolute top-1/2 -right-[400px] -translate-y-1/2 rotate-[45.804deg] object-cover max-md:-right-50 max-md:h-[1000px] max-md:w-full"
        src="/images/services/wifi.png"
        alt="wifi"
        width={1026}
        height={1026}
        unoptimized
      />
    </section>
  );
};
