'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { ServicesSlider } from '@/features/services/ui/services-slider';

const getContentAndCreative = (t: ReturnType<typeof useTranslations>) => [
  {
    name: t('products.0.name', { fallback: 'Content Marketing Strategy' }),
    description: t('products.0.description', {
      fallback:
        'We develop a content plan tailored to your audience, goals, and brand voice to drive consistent engagement.',
    }),
    price: '€1370.00',
  },
  {
    name: t('products.1.name', {
      fallback: 'Video Production (short-form, ads, brand videos)',
    }),
    description: t('products.1.description', {
      fallback:
        'We produce professional videos that showcase your brand, products, and story in a compelling way.',
    }),
    price: '€800.00',
  },
  {
    name: t('products.2.name', { fallback: 'Copywriting & Storytelling' }),
    description: t('products.2.description', {
      fallback:
        'We craft persuasive copy and authentic brand stories that resonate with your audience and inspire action.',
    }),
    price: '€1000.00',
  },
  {
    name: t('products.3.name', {
      fallback: 'Graphic Design & Visual Branding',
    }),
    description: t('products.3.description', {
      fallback:
        "We design eye-catching graphics and cohesive visuals that strengthen your brand's identity across all platforms.",
    }),
    price: '€1300.00',
  },
  {
    name: t('products.4.name', { fallback: 'Blog & Article Writing' }),
    description: t('products.4.description', {
      fallback:
        'We write informative, SEO-friendly articles that position your brand as an authority in your niche.',
    }),
    price: '€400.00',
  },
  {
    name: t('products.5.name', {
      fallback: 'Photography for Products & Lifestyle',
    }),
    description: t('products.5.description', {
      fallback:
        'We capture high-quality product and lifestyle images that showcase your brand at its best.',
    }),
    price: '€300.00',
  },
];

const getBrandingAndDesign = (t: ReturnType<typeof useTranslations>) => [
  {
    name: t('products2.0.name', {
      fallback: 'Brand Identity Development (logo, color palette, typography)',
    }),
    description: t('products2.0.description', {
      fallback:
        "We design a complete visual identity that reflects your brand's personality and stands out in the market.",
    }),
    price: '€1900.00',
  },
  {
    name: t('products2.1.name', {
      fallback: 'Creative Direction',
    }),
    description: t('products2.1.description', {
      fallback:
        'We oversee and guide the creative process to ensure every asset matches your brand vision and goals.',
    }),
    price: '€1500.00',
  },
  {
    name: t('products2.2.name', {
      fallback: 'Brand Guidelines Creation',
    }),
    description: t('products2.2.description', {
      fallback:
        'We create a detailed style guide that keeps your brand visuals and messaging consistent across all platforms.',
    }),
    price: '€1800.00',
  },
  {
    name: t('products2.3.name', {
      fallback: 'Visual Campaign Concepts',
    }),
    description: t('products2.3.description', {
      fallback:
        'We develop unique visual ideas and themes for campaigns that grab attention and drive engagement.',
    }),
    price: '€1600.00',
  },
  {
    name: t('products2.4.name', {
      fallback: 'Rebranding Services',
    }),
    description: t('products2.4.description', {
      fallback:
        "We refresh or completely transform your brand's identity to better align with your current vision and market position.",
    }),
    price: '€1800.00',
  },
  {
    name: t('products2.5.name', {
      fallback: 'Marketing Collateral Design',
    }),
    description: t('products2.5.description', {
      fallback:
        'We design brochures, flyers, banners, and other materials that make your brand look professional and persuasive.',
    }),
    price: '€1900.00',
  },
];

const getWebAndDigitalExperience = (t: ReturnType<typeof useTranslations>) => [
  {
    name: t('products3.0.name', {
      fallback: 'Website Design & Development',
    }),
    description: t('products3.0.description', {
      fallback:
        'We create modern, responsive, and user-friendly websites tailored to your brand and goals.',
    }),
    price: '€3500.00',
  },
  {
    name: t('products3.1.name', {
      fallback: 'UX/UI Design for Digital Campaigns',
    }),
    description: t('products3.1.description', {
      fallback:
        'We design intuitive, visually engaging interfaces that make your campaigns easy to navigate and enjoyable to use.',
    }),
    price: '€2600.00',
  },
  {
    name: t('products3.2.name', {
      fallback: 'Landing Page Creation & Optimization',
    }),
    description: t('products3.2.description', {
      fallback:
        'We build and optimize landing pages designed to convert visitors into leads or customers.',
    }),
    price: '€2800.00',
  },
  {
    name: t('products3.3.name', {
      fallback: 'E-commerce Marketing Strategy',
    }),
    description: t('products3.3.description', {
      fallback:
        'We develop targeted strategies to drive traffic, boost sales, and build customer loyalty for your online store.',
    }),
    price: '€2500.00',
  },
  {
    name: t('products3.4.name', {
      fallback: 'Conversion Rate Optimization (CRO)',
    }),
    description: t('products3.4.description', {
      fallback:
        'We analyze user behavior and make data-driven changes to increase the percentage of visitors who take action.',
    }),
    price: '€1650.00',
  },
  {
    name: t('products3.5.name', {
      fallback: 'Website Speed Optimization',
    }),
    description: t('products3.5.description', {
      fallback:
        "We improve your site's loading times to enhance user experience and search engine rankings.",
    }),
    price: '€1300.00',
  },
];

export const DarkServices = () => {
  const t = useTranslations('services.darkServices');

  return (
    <section className="relative mx-5 my-[70px] flex flex-col gap-20 overflow-hidden rounded-xl bg-[#030213] py-20 pl-10 max-md:mx-2 max-md:pl-2">
      <Image
        className="absolute top-1/2 -right-[400px] -translate-y-1/2 object-cover max-md:-right-50 max-md:h-[700px] max-md:w-full"
        src="/images/services/puff.png"
        alt="puff"
        width={1026}
        height={1186}
        unoptimized
      />
      <ServicesSlider
        title={t('title', { fallback: 'Content & Creative' })}
        values={getContentAndCreative(t)}
        color="white"
      />
      <ServicesSlider
        title={t('title2', { fallback: 'Branding & Design' })}
        values={getBrandingAndDesign(t)}
        color="white"
      />
      <ServicesSlider
        title={t('title3', { fallback: 'Web & Digital Experience' })}
        values={getWebAndDigitalExperience(t)}
        color="white"
      />
    </section>
  );
};
