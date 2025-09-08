'use client';

import Image from 'next/image';

import { ArrowRightIcon } from '@/shared/ui/icons/arrow-right';
import { PlayIcon } from '@/shared/ui/icons/play';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';
import { useTranslations } from 'next-intl';

export const Hero = () => {
  const t = useTranslations('home.hero');

  return (
    <section className="relative mx-10 flex flex-col gap-5 overflow-hidden rounded-[40px] p-10 max-md:mx-2 max-md:px-3">
      <Image src="/images/home/hero.jpg" alt="hero-img" fill />
      <div className="absolute inset-0 bg-black/30" />
      <Title as="h1" className="z-10 w-[80%] max-md:w-full">
        {t('title', {
          fallback:
            'A marketing agency that creates campaigns people remember — and love',
        })}
      </Title>
      <Text size="base" color="white" className="z-10" weight={500}>
        {t('description', {
          fallback: 'Your best-fit partner for real growth and lasting impact.',
        })}
      </Text>
      <div className="z-10 flex items-center gap-3.5">
        <Button size="md" variant="secondary">
          {t('getStarted', { fallback: 'Get Started' })} <ArrowRightIcon />
        </Button>
        <Button
          size="md"
          variant="reversed"
          className="hover:[&_svg]:fill-jaguar"
        >
          {t('viewServices', { fallback: 'View Services' })} <PlayIcon />
        </Button>
      </div>
    </section>
  );
};
