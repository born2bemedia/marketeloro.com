import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import { Footer, LatestDrops, Overview } from './components';

export const metadata: Metadata = {
  title: 'StoryTime: Case Studies, Insights & Trends | Marketeloro',
  description:
    'Discover real-world case studies, trend forecasts, and bold insights at StoryTime — Marketeloro’s hub for practical marketing lessons and future signals.',
  openGraph: {
    title: 'StoryTime: Case Studies, Insights & Trends | Marketeloro',
    description:
      'Discover real-world case studies, trend forecasts, and bold insights at StoryTime — Marketeloro’s hub for practical marketing lessons and future signals.',
    images: 'https://marketeloro.com/meta.jpg',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StoryTime: Case Studies, Insights & Trends | Marketeloro',
    description:
      'Discover real-world case studies, trend forecasts, and bold insights at StoryTime — Marketeloro’s hub for practical marketing lessons and future signals.',
    images: ['https://marketeloro.com/meta.jpg'],
  },
};

export default async function StoryTime() {
  const t = await getTranslations('storyTime.hero');

  return (
    <main>
      <section className="flex w-[60%] flex-col gap-5 px-20 py-10 max-md:w-full max-md:px-2">
        <Title as="h1" color="jaguar">
          {t('title', { fallback: 'StoryTime' })}
        </Title>
        <Text size="base" weight={500}>
          {t('description', {
            fallback:
              'Marketing changes fast. StoryTime is where we push limits, test ideas, break rules, and share what truly works in the real world.',
          })}
        </Text>
      </section>
      <Overview />
      <LatestDrops />
      <Footer />
    </main>
  );
}
