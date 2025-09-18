import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { PageHero } from '@/shared/ui/components/page-hero';
import { ArrowRightIcon } from '@/shared/ui/icons/arrow-right';

import {
  BlueprintThinking,
  DataAndCreativity,
  LookingFor,
  Method,
  OurWhy,
  Principles,
} from './components';

export const metadata: Metadata = {
  title: 'Data-Driven Marketing Agency | Marketeloro',
  description:
    'Learn who we are at Marketeloro — strategists, creators, and innovators blending data, creativity, and speed to deliver measurable impact for brands worldwide.',
  openGraph: {
    title: 'Data-Driven Marketing Agency | Marketeloro',
    description:
      'Learn who we are at Marketeloro — strategists, creators, and innovators blending data, creativity, and speed to deliver measurable impact for brands worldwide.',
    images: 'https://marketeloro.com/meta.jpg',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Data-Driven Marketing Agency | Marketeloro',
    description:
      'Learn who we are at Marketeloro — strategists, creators, and innovators blending data, creativity, and speed to deliver measurable impact for brands worldwide.',
    images: ['https://marketeloro.com/meta.jpg'],
  },
};

export default async function AboutOurAgency() {
  const t = await getTranslations('aboutOurAgency.hero');

  return (
    <main className="overflow-x-hidden">
      <PageHero
        imgUrl="/images/about/hero.jpg"
        title={t('title', {
          fallback: 'Marketeloro builds success step by step',
        })}
        description={
          <>
            {t('description.0', {
              fallback:
                'Every growth story starts with experiments, lessons, and breakthroughs.',
            })}
            <br />
            {t('description.1', {
              fallback:
                'Get behind-the-scenes access to how strategies become results.',
            })}
          </>
        }
        metaButtons={[
          {
            text: t('button', { fallback: 'Visit StoryTime' }),
            href: '/story-time',
            variant: 'secondary',
            icon: ArrowRightIcon,
          },
        ]}
      />
      <LookingFor />
      <OurWhy />
      <Principles />
      <Method />
      <BlueprintThinking />
      <DataAndCreativity />
      <PageHero
        imgUrl="/images/about/footer.jpg"
        className="my-10"
        title="Let's start building campaigns that make people remember, and love your brand."
        metaButtons={[
          {
            text: 'Contact Us',
            href: '/contact-us',
            variant: 'secondary',
            icon: ArrowRightIcon,
          },
        ]}
      />
    </main>
  );
}
