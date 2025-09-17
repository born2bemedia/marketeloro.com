import { getTranslations } from 'next-intl/server';

import { ServicesSlider } from '@/features/services/ui/services-slider';

import { PageHero } from '@/shared/ui/components/page-hero';
import { ArrowRightIcon } from '@/shared/ui/icons/arrow-right';

import {
  DarkServices,
  SocialMediaAndDigitalMarketing,
  StrategyAndConsulting,
} from './components';

export default async function Services() {
  const t = await getTranslations('services');

  return (
    <main>
      <PageHero
        imgUrl="/images/services/hero.jpg"
        title={t('hero.title', {
          fallback: 'Everything We Offer to Help Your Brand Get Seen and Grow',
        })}
        titleClassName="w-full"
        className="min-h-[400px]"
      />
      <StrategyAndConsulting />
      <SocialMediaAndDigitalMarketing />
      <DarkServices />
      <section className="pt-10">
        <PageHero
          imgUrl="/images/services/footer.jpg"
          title={t('footer.title', {
            fallback: 'Looking for a full-service approach?',
          })}
          description={t('footer.description', {
            fallback: 'See our tailored packages designed for complete growth.',
          })}
          metaButtons={[
            {
              text: t('footer.explorePackages', {
                fallback: 'Explore Packages',
              }),
              href: '/tailored-plans',
              variant: 'secondary',
              icon: ArrowRightIcon,
            },
          ]}
          className="min-h-[444px]"
        />
      </section>
    </main>
  );
}
