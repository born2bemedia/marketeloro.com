import { getTranslations } from 'next-intl/server';

import { PageHero } from '@/shared/ui/components/page-hero';
import { ArrowRightIcon } from '@/shared/ui/icons/arrow-right';
import { Button } from '@/shared/ui/kit/button';

import { Apply, GreatCampaigns, OurOpenings, WorkWith } from './components';

export default async function WorkWithUs() {
  const t = await getTranslations('workWithUs');

  return (
    <main>
      <PageHero
        imgUrl="/images/work-with-us/hero.jpg"
        title={t('hero.title', {
          fallback: 'Work with us and grow beyond expectations',
        })}
        description={t('hero.description', {
          fallback:
            'We’re inviting ambitious talent to redefine what’s possible. Big ideas matter, but execution is everything. Here, you’ll do both.',
        })}
      />
      <GreatCampaigns />
      <WorkWith />
      <OurOpenings />
      <Apply />
    </main>
  );
}
