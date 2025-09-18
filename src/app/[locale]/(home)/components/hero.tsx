'use client';

import { useTranslations } from 'next-intl';

import { useRequestDialogStore } from '@/features/request-form/model/request-dialog.store';

import { PageHero } from '@/shared/ui/components/page-hero';
import { ArrowRightIcon } from '@/shared/ui/icons/arrow-right';
import { PlayIcon } from '@/shared/ui/icons/play';
import { Button } from '@/shared/ui/kit/button';

export const Hero = () => {
  const t = useTranslations('home.hero');

  const { setPackageName, setOpen, setIsShowSubtitle } =
    useRequestDialogStore();

  const getStartedHandle = () => {
    setPackageName('Getting Started Is Simple');
    setIsShowSubtitle(false);
    setOpen(true);
  };

  return (
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
          text: t('viewServices', { fallback: 'View Services' }),
          href: '/services',
          variant: 'reversed',
          icon: PlayIcon,
        },
      ]}
      customContent={
        <Button variant="secondary" size="md" onClick={getStartedHandle}>
          {t('getStarted', { fallback: 'Get Started' })} <ArrowRightIcon />
        </Button>
      }
    />
  );
};
