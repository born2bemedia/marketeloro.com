'use client';

import type { JSX } from 'react';

import { cn } from '@/shared/lib/utils/cn';
import { AimCircleIcon } from '@/shared/ui/icons/circles/aim';
import { GraphCircleIcon } from '@/shared/ui/icons/circles/graph';
import { PaletteCircleIcon } from '@/shared/ui/icons/circles/palette';
import { PenCircleIcon } from '@/shared/ui/icons/circles/pen';
import { TvCircleIcon } from '@/shared/ui/icons/circles/tv';
import { UsersCircleIcon } from '@/shared/ui/icons/circles/users';
import { Button } from '@/shared/ui/kit/button';
import { Divider } from '@/shared/ui/kit/divider';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';
import { useTranslations } from 'next-intl';

const getCards = (t: ReturnType<typeof useTranslations>) => [
  {
    icon: AimCircleIcon,
    title: t('cards.0.title', { fallback: 'Strategy & Consulting' }),
    text: t('cards.0.text', {
      fallback:
        'Data-driven strategies tailored to your business goals and market position',
    }),
    border: true,
  },
  {
    icon: UsersCircleIcon,
    title: t('cards.1.title', { fallback: 'Social Media & Community' }),
    text: t('cards.1.text', {
      fallback:
        'Building engaged communities and managing your social media presence',
    }),
    border: true,
  },
  {
    icon: PenCircleIcon,
    title: t('cards.2.title', { fallback: 'Content & Creative' }),
    text: t('cards.2.text', {
      fallback:
        'Compelling content that resonates with your audience and drives action',
    }),
  },
  {
    icon: PaletteCircleIcon,
    title: t('cards.3.title', { fallback: 'Branding & Design' }),
    text: t('cards.3.text', {
      fallback:
        'Creating memorable brand identities that stand out in the marketplace',
    }),
    border: true,
  },
  {
    icon: GraphCircleIcon,
    title: t('cards.4.title', { fallback: 'Digital Marketing' }),
    text: t('cards.4.text', {
      fallback: 'Performance-driven campaigns across all digital channels',
    }),
    border: true,
  },
  {
    icon: TvCircleIcon,
    title: t('cards.5.title', { fallback: 'Web & Digital Experience' }),
    text: t('cards.5.text', {
      fallback: 'User-focused websites and digital experiences that convert',
    }),
  },
];

export const CoreServices = () => {
  const t = useTranslations('home.coreServices');

  const cards = getCards(t);

  return (
    <section className="flex flex-col gap-[60px] p-10 max-md:px-2">
      <Title color="jaguar">
        {t('title.0', { fallback: 'Marketeloro' })} <br />
        {t('title.1', { fallback: 'Core Services' })}
      </Title>
      <section className="grid grid-cols-3 gap-10 max-md:grid-cols-1">
        {cards.map(c => (
          <Card key={c.title} {...c} />
        ))}
      </section>
      <section className="ml-auto flex w-[600px] flex-col gap-7 max-md:w-full">
        <Title as="h3" size="4xl" color="jaguar">
          {t('discoverAllServices', {
            fallback:
              'Discover all our services and find the perfect match for your goals',
          })}
        </Title>
        <Button size="md">
          {t('exploreServices', { fallback: 'Explore Services' })}
        </Button>
      </section>
    </section>
  );
};

const Card = ({
  icon: Icon,
  title,
  text,
  border = false,
}: {
  icon: () => JSX.Element;
  title: string;
  text: string;
  border?: boolean;
}) => {
  return (
    <article
      className={cn(
        'flex flex-col gap-5 px-10 pb-10',
        border && 'border-r border-[#D9D9D9] last:border-r-0 max-md:border-r-0',
      )}
    >
      <Divider />
      <Icon />
      <Divider />
      <div className="flex flex-col gap-3">
        <Text size="2xl" weight={700}>
          {title}
        </Text>
        <Text size="xl">{text}</Text>
      </div>
    </article>
  );
};
