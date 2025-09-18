import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { PageHero } from '@/shared/ui/components/page-hero';
import { ArrowRightIcon } from '@/shared/ui/icons/arrow-right';
import { Button } from '@/shared/ui/kit/button';

import { Apply, GreatCampaigns, OurOpenings, WorkWith } from './components';
import { Link } from '@/i18n/navigation';

export const metadata: Metadata = {
  title: 'Careers: Join a Bold Marketing Agency |  Marketeloro',
  description:
    'Build your career with Marketeloro. We’re hiring PPC managers, designers, CRO specialists, and more. Join a team that blends creativity with data-driven impact.',
  openGraph: {
    title: 'Careers: Join a Bold Marketing Agency |  Marketeloro',
    description:
      'Build your career with Marketeloro. We’re hiring PPC managers, designers, CRO specialists, and more. Join a team that blends creativity with data-driven impact.',
    images: 'https://marketeloro.com/meta.jpg',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers: Join a Bold Marketing Agency |  Marketeloro',
    description:
      'Build your career with Marketeloro. We’re hiring PPC managers, designers, CRO specialists, and more. Join a team that blends creativity with data-driven impact.',
    images: ['https://marketeloro.com/meta.jpg'],
  },
};

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
        customContent={
          <Link href="#view-openings">
            <Button size="md" variant="secondary">
              View Openings
              <ArrowRightIcon />
            </Button>
          </Link>
        }
      />
      <GreatCampaigns />
      <WorkWith />
      <OurOpenings />
      <Apply />
    </main>
  );
}
