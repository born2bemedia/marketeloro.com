import type { useTranslations } from 'next-intl';

export const getPreviews = (t: ReturnType<typeof useTranslations>) => [
  {
    name: t('items.0.name', {
      fallback:
        'How We Turned a Plateaued E-commerce Brand into +167% Growth in 4 Months',
    }),
    description: t('items.0.description', {
      fallback:
        'a deep dive into strategy, channels, and the exact levers that unlocked growth.',
    }),
    btnLabel: t('items.0.btnLabel', { fallback: 'Read Case Study' }),
    imgUrl: '/images/articles/1.jpg',
    href: '/how-we-turned-a-plateaued-e-commerce-brand',
  },
  {
    name: t('items.1.name', {
      fallback: '5 PPC Tweaks That Saved a Client $42,000 in Ad Spend',
    }),
    description: t('items.1.description', {
      fallback: 'practical, repeatable adjustments you can use right away.',
    }),
    btnLabel: t('items.1.btnLabel', { fallback: 'See the Insights' }),
    imgUrl: '/images/articles/2.jpg',
    href: '/5-ppc-tweaks-that-saved-a-client-42000-in-ad-spend',
  },
  {
    name: t('items.2.name', {
      fallback: 'CRO in Action: Small Changes, Big Conversions',
    }),
    description: t('items.2.description', {
      fallback:
        'proof that a better button or headline can mean thousands in revenue.',
    }),
    btnLabel: t('items.2.btnLabel', { fallback: 'Read More' }),
    imgUrl: '/images/articles/3.jpg',
    href: '/cro-in-action-small-changes-big-conversions',
  },
  {
    name: t('items.3.name', {
      fallback: 'Why “Safe” Branding is the Fastest Way to Be Forgotten',
    }),
    description: t('items.3.description', {
      fallback: 'an argument for boldness, with examples that prove the point.',
    }),
    btnLabel: t('items.3.btnLabel', { fallback: 'Read the Article' }),
    imgUrl: '/images/articles/4.jpg',
    href: '/why-safe-branding-is-the-fastest-way-to-be-forgotten',
  },
];
