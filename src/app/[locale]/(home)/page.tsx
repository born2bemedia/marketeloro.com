import { getTranslations } from 'next-intl/server';

import { PageHero } from '@/shared/ui/components/page-hero';
import { ArrowRightIcon } from '@/shared/ui/icons/arrow-right';
import { PlayIcon } from '@/shared/ui/icons/play';

import {
  AboutUs,
  CoreServices,
  HowWeWork,
  IndustriesWeServe,
  Outcomes,
  Plans,
  Stats,
} from './components';

export default async function Home() {
  const t = await getTranslations('home.hero');

  return (
    <main>
      <PageHero
        imgUrl="/images/home/hero.jpg"
        title={t('title', {
          fallback:
            'A marketing agency that creates campaigns people remember — and love',
        })}
        description={t('description', {
          fallback: 'Your best-fit partner for real growth and lasting impact.',
        })}
        metaButtons={[
          {
            text: t('getStarted', { fallback: 'Get Started' }),
            href: '/get-started',
            variant: 'secondary',
            icon: ArrowRightIcon,
          },
          {
            text: t('viewServices', { fallback: 'View Services' }),
            href: '/services',
            variant: 'reversed',
            icon: PlayIcon,
          },
        ]}
      />
      <AboutUs />
      <Stats />
      <HowWeWork />
      <IndustriesWeServe />
      <CoreServices />
      <Plans />
      <Outcomes />
    </main>
  );
}
