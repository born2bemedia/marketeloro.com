'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const getStats = (t: ReturnType<typeof useTranslations>) => [
  {
    stat: '+142%',
    text: t('cards.0', {
      fallback: 'Average client growth in their first year with us',
    }),
  },
  {
    stat: '1,200+',
    text: t('cards.1', {
      fallback: 'Campaigns launched, tested, and optimized for maximum ROI',
    }),
  },
  {
    stat: '350+',
    text: t('cards.2', {
      fallback:
        'Projects moved from concept to completion with measurable results',
    }),
  },
];

export const Stats = () => {
  const t = useTranslations('home.stats');

  return (
    <section className="relative mx-5 my-[70px] flex flex-col gap-20 rounded-xl bg-[#030213] px-10 py-20 max-md:mx-2 max-md:px-5">
      <Image
        className="absolute -top-40 -right-5 max-md:-top-[140px] max-md:h-[239px] max-md:w-[239px]"
        src="/images/home/shape-1.png"
        alt="shape-1"
        width={509}
        height={509}
      />
      <Title className="w-[65%] max-md:w-full" capitalize>
        {t('title', {
          fallback: 'Big wins, bold moves, and measurable impact',
        })}
      </Title>
      <ul className="flex flex-wrap gap-[60px]">
        {getStats(t).map(s => (
          <ByNumber key={s.stat} {...s} />
        ))}
      </ul>
    </section>
  );
};

const ByNumber = ({ stat, text }: { stat: string; text: string }) => (
  <li className="flex w-[317px] flex-col gap-3 max-md:w-full max-md:items-center">
    <Text color="white" className="text-[100px] font-bold">
      {stat}
    </Text>
    <Text size="xl" color="white">
      {text}
    </Text>
  </li>
);
