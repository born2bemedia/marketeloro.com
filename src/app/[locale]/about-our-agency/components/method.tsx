'use client';

import type { JSX } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { CalendarCircleIcon } from '@/shared/ui/icons/circles/calendar';
import { CompassCircleIcon } from '@/shared/ui/icons/circles/compass';
import { CompressCircleIcon } from '@/shared/ui/icons/circles/compress';
import { CursorCircleIcon } from '@/shared/ui/icons/circles/cursor';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const getCards = (t: ReturnType<typeof useTranslations>) => [
  {
    title: t('cards.0.title', { fallback: 'Discover' }),
    list: [
      t('cards.0.list.0', {
        fallback:
          'We analyze your market, brand position, competitors, and past results.',
      }),
      t('cards.0.list.1', {
        fallback:
          'We interview stakeholders, review customer behavior, and identify growth gaps.',
      }),
      t('cards.0.list.2', {
        fallback: 'Outcome: a clear map of opportunities with data to back it.',
      }),
    ],
    icon: CompassCircleIcon,
  },
  {
    title: t('cards.1.title', { fallback: 'Plan' }),
    list: [
      t('cards.1.list.0', {
        fallback:
          'We create a step-by-step marketing blueprint with objectives, KPIs, and budgets.',
      }),
      t('cards.1.list.1', {
        fallback:
          'We select the right mix of channels — digital, social, paid media, or offline.',
      }),
      t('cards.1.list.2', {
        fallback:
          'Outcome: a plan that is measurable, realistic, and aligned with your goals.',
      }),
    ],
    icon: CalendarCircleIcon,
  },
  {
    title: t('cards.2.title', { fallback: 'Execute' }),
    list: [
      t('cards.2.list.0', {
        fallback:
          'We launch campaigns with creative assets built to capture attention and drive conversions.',
      }),
      t('cards.2.list.1', {
        fallback:
          'Every message is tested, segmented, and optimized for relevance.',
      }),
      t('cards.2.list.2', {
        fallback:
          'Outcome: campaigns that deliver immediate traction and long-term growth.',
      }),
    ],
    icon: CursorCircleIcon,
  },
  {
    title: t('cards.3.title', { fallback: 'Optimize' }),
    list: [
      t('cards.3.list.0', {
        fallback: 'We track performance daily and adjust in real time.',
      }),
      t('cards.3.list.1', {
        fallback:
          'A/B testing, advanced analytics, and automation ensure no opportunity is missed.',
      }),
      t('cards.3.list.2', {
        fallback: 'Outcome: consistent growth with maximum ROI.',
      }),
    ],
    icon: CompressCircleIcon,
  },
];

export const Method = () => {
  const t = useTranslations('aboutOurAgency.method');

  return (
    <section className="relative flex gap-[60px] p-10 max-lg:flex-col max-lg:px-2 max-lg:pt-20">
      <section className="flex w-1/2 flex-col justify-between max-lg:w-full">
        <div className="relative flex flex-col gap-3.5">
          <Image
            className="absolute -top-50 -right-25 hidden max-lg:block"
            src="/images/about/method.png"
            alt="method"
            width={319}
            height={148}
            unoptimized
          />
          <Title color="jaguar" className="max-md:text-[80px]">
            {t('title', { fallback: 'The Marketeloro Method' })}
          </Title>
          <Text color="stormGrey">
            {t('text', {
              fallback:
                'Our method is structured but flexible, designed to fit different industries and growth stages:',
            })}
          </Text>
        </div>
        <Image
          className="absolute top-1/2 -left-20 -translate-y-1/2 max-lg:hidden"
          src="/images/about/method.png"
          alt="method"
          width={719}
          height={648}
          unoptimized
        />
        <Text color="stormGrey">
          {t('text3', {
            fallback:
              'This method has already helped clients achieve triple-digit growth within months.',
          })}
        </Text>
      </section>
      <section className="flex w-1/2 flex-col gap-10 max-lg:w-full">
        {getCards(t).map(item => (
          <Card key={item.title} {...item} />
        ))}
      </section>
    </section>
  );
};

const Card = ({
  icon: Icon,
  list,
  title,
}: {
  title: string;
  list: string[];
  icon: ({ className }: { className?: string }) => JSX.Element;
}) => (
  <article className="flex gap-10 border-b border-[#D9D9D9] pb-10">
    <Icon />
    <div className="flex flex-col gap-3">
      <Text size="3xl" weight={700} uppercase>
        {title}
      </Text>
      <ul className="list-outside list-disc pl-4">
        {list.map(item => (
          <li key={item} className="text-jaguar text-xl">
            {item}
          </li>
        ))}
      </ul>
    </div>
  </article>
);
