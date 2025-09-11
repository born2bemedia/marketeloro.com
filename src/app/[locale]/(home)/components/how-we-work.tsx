'use client';

import type { ReactNode } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { cn } from '@/shared/lib/utils/cn';
import { AimIcon } from '@/shared/ui/icons/aim';
import { LineUpIcon } from '@/shared/ui/icons/line-up';
import { MagGlassIcon } from '@/shared/ui/icons/mag-glass';
import { RocketIcon } from '@/shared/ui/icons/rocket';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const getCards = (t: ReturnType<typeof useTranslations>) => [
  {
    title: t('cards.0.title', { fallback: 'Discover' }),
    text: t('cards.0.text', {
      fallback:
        'We conduct in-depth brand, market, and competitor analysis, review past performance data, and gather actionable insights about your audience to identify high-impact opportunities',
    }),
    icon: <MagGlassIcon />,
    layoutClassName: 'bg-[rgb(0_77_191)]/10',
    numberClassName: 'bg-[#004DBF]',
    number: 1,
  },
  {
    title: t('cards.1.title', { fallback: 'Plan' }),
    text: t('cards.1.text', {
      fallback:
        'We design a custom marketing blueprint with clear objectives, defined KPIs, channel selection, budget allocation, and an execution timeline to ensure efficiency and focus',
    }),
    icon: <AimIcon />,
    layoutClassName: 'bg-[rgb(255_161_0_/_0.1)]',
    numberClassName: 'bg-[#FFA100]',
    number: 2,
  },
  {
    title: t('cards.2.title', { fallback: 'Execute' }),
    text: t('cards.2.text', {
      fallback:
        'We launch targeted campaigns with compelling creative assets, optimized messaging, and precise audience segmentation to generate measurable engagement and conversions',
    }),
    icon: <RocketIcon />,
    layoutClassName: 'bg-[rgb(255_100_78_/_0.1)]',
    numberClassName: 'bg-[#FF644E]',
    number: 3,
  },
  {
    title: t('cards.3.title', { fallback: 'Optimize' }),
    text: t('cards.3.text', {
      fallback:
        'We monitor performance in real time, run A/B tests, and apply data-driven adjustments to improve ROI and sustain growth over the long term',
    }),
    icon: <LineUpIcon />,
    layoutClassName: 'bg-[rgb(0_132_67_/_0.1)]',
    numberClassName: 'bg-[#008443]',
    number: 4,
  },
];

export const HowWeWork = () => {
  const t = useTranslations('home.howWeWork');

  const cards = getCards(t);

  return (
    <section className="flex flex-col gap-[56px] px-10 py-[70px] max-md:px-2">
      <div className="relative flex flex-col gap-3.5">
        <Title color="jaguar">
          {t('title', {
            fallback: 'How We Work to Deliver Lasting Success',
          })}
        </Title>
        <Text color="stormGrey" size="base">
          {t('text.0', {
            fallback:
              'Success is the result of a clear and structured strategy. On average, our clients see a 25% increase in success rate. Here&apos;s how we do it.',
          })}
          <br />
          {t('text.1', {
            fallback: '25% increase in success rate. Here&apos;s how we do it.',
          })}
        </Text>
        <Image
          className="absolute -top-20 right-0 hidden max-md:block"
          src="/images/home/cursor-down-shape.png"
          alt="shape-2"
          width={129}
          height={114}
          unoptimized
        />
      </div>
      <section className="flex items-end">
        <Image
          className="max-md:hidden"
          src="/images/home/cursor-shape.png"
          alt="how-we-work"
          width={364}
          height={322}
        />
        <div className="flex flex-col gap-[56px]">
          <section className="flex gap-7 max-md:flex-col">
            <div className="flex flex-col gap-7">
              {cards.slice(0, 2).map(c => (
                <Card key={c.title} {...c} />
              ))}
            </div>
            <div className="flex flex-col gap-7">
              {cards.slice(2, 4).map(c => (
                <Card key={c.title} {...c} />
              ))}
            </div>
          </section>
          <section className="flex flex-col gap-7">
            <Title as="h3" size="4xl" color="jaguar">
              {t('readyToApply.0', {
                fallback: 'Ready to apply this strategy and',
              })}
              <br />
              {t('readyToApply.1', {
                fallback: 'start getting measurable results?',
              })}
            </Title>
            <Button size="md">
              {t('button', {
                fallback: 'Let&apos;s Discuss Your Project',
              })}
            </Button>
          </section>
        </div>
      </section>
    </section>
  );
};

const Card = ({
  title,
  text,
  number,
  icon,
  layoutClassName,
  numberClassName,
}: {
  title: string;
  text: string;
  number: number;
  icon: ReactNode;
  layoutClassName?: string;
  numberClassName?: string;
}) => {
  return (
    <section
      className={cn(
        'flex flex-col gap-3.5 rounded-[80px] p-10 max-md:rounded-[40px] max-md:p-5',
        layoutClassName,
      )}
    >
      <div
        className={cn(
          'ml-auto flex h-[56px] w-[56px] items-center justify-center rounded-full',
          numberClassName,
        )}
      >
        <Text size="xl" color="white" weight={700}>
          {number}
        </Text>
      </div>
      <section className="flex flex-col gap-2">
        <div className="flex items-center gap-3.5">
          {icon}
          <Text size="4xl" color="jaguar" weight={700}>
            {title}
          </Text>
        </div>
        <Text size="xl">{text}</Text>
      </section>
    </section>
  );
};
