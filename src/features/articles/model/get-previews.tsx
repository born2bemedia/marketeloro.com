import type { useTranslations } from 'next-intl';

import { CroInActionArticle } from '../ui/cro-in-action-article';
import { HowWeTurnedArticle } from '../ui/how-we-turned-article';
import { PpcTweaksArticle } from '../ui/ppc-tweaks-article';
import { SafeBrandingArticle } from '../ui/safe-branding-article';

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
    href: '/story-time/how-we-turned-a-plateaued-e-commerce-brand',
    slug: 'how-we-turned-a-plateaued-e-commerce-brand',
    content: HowWeTurnedArticle,
    footer: {
      title: (
        <>
          {t('items.0.footer.title.0', {
            fallback: 'You’ve Seen the Proof. ',
          })}
          <br />
          {t('items.0.footer.title.1', {
            fallback: 'Be the Next Case Study.',
          })}
        </>
      ),
      buttons: [
        {
          label: t('items.0.footer.buttons.0', { fallback: 'Our Services' }),
          href: '/services',
        },
        {
          label: t('items.0.footer.buttons.1', { fallback: 'Reach Out Today' }),
          href: '/contact-us',
        },
      ],
    },
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
    href: '/story-time/5-ppc-tweaks-that-saved-a-client-42000-in-ad-spend',
    slug: '5-ppc-tweaks-that-saved-a-client-42000-in-ad-spend',
    content: PpcTweaksArticle,
    footer: {
      title: (
        <>
          {t('items.1.footer.title.0', {
            fallback: 'Ready to ',
          })}
          <br />
          {t('items.1.footer.title.1', {
            fallback: 'Boost Your Conversions?',
          })}
        </>
      ),
      buttons: [
        {
          label: t('items.1.footer.buttons.0', { fallback: 'Our Services' }),
          href: '/services',
        },
        {
          label: t('items.1.footer.buttons.1', {
            fallback: 'Talk to Marketeloro',
          }),
          href: '/contact-us',
        },
      ],
    },
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
    href: '/story-time/cro-in-action-small-changes-big-conversions',
    slug: 'cro-in-action-small-changes-big-conversions',
    content: CroInActionArticle,
    footer: {
      title: (
        <>
          {t('items.2.footer.title.0', {
            fallback: 'Want to Cut ',
          })}
          <br />
          {t('items.2.footer.title.1', {
            fallback: 'Wasted Ad Spend Too?',
          })}
        </>
      ),
      buttons: [
        {
          label: t('items.2.footer.buttons.0', { fallback: 'Our Services' }),
          href: '/services',
        },
        {
          label: t('items.2.footer.buttons.1', { fallback: 'Reach Out Today' }),
          href: '/contact-us',
        },
      ],
    },
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
    href: '/story-time/why-safe-branding-is-the-fastest-way-to-be-forgotten',
    slug: 'why-safe-branding-is-the-fastest-way-to-be-forgotten',
    content: SafeBrandingArticle,
    footer: {
      title: t('items.3.footer.title', {
        fallback: 'Don’t Be the Brand No One Remembers',
      }),
      buttons: [
        {
          label: t('items.3.footer.buttons.0', {
            fallback: 'Make My Brand Bold',
          }),
          href: '/services',
        },
        {
          label: t('items.3.footer.buttons.1', {
            fallback: 'Talk to Marketeloro',
          }),
          href: '/contact-us',
        },
      ],
    },
  },
];
