'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { cn } from '@/shared/lib/utils/cn';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const getCardValues = (t: ReturnType<typeof useTranslations>) => [
  t('blocks.0', {
    fallback:
      'Helping businesses move beyond vanity metrics and generate real revenue growth.',
  }),
  t('blocks.1', {
    fallback:
      'Turning ideas into campaigns that shape markets instead of just competing in them.',
  }),
  t('blocks.2', {
    fallback:
      'Giving brands the confidence that every dollar invested in marketing is measurable and accountable.',
  }),
];

const getStepCards = (t: ReturnType<typeof useTranslations>) => [
  {
    title: t('cards.0.title', { fallback: 'Data Science' }),
    text: t('cards.0.text', {
      fallback:
        'Every campaign is backed by research, analytics, and performance tracking. We don’t guess — we calculate.',
    }),
  },
  {
    title: t('cards.1.title', { fallback: 'Creativity' }),
    text: t('cards.1.text', {
      fallback:
        'Insight alone doesn’t move markets. We translate numbers into powerful creative that resonates with audiences.',
    }),
  },
  {
    title: t('cards.2.title', { fallback: 'Execution Speed' }),
    text: t('cards.2.text', {
      fallback:
        'Markets change fast, and so do we. Our team is structured to react in real time, test quickly, and scale what works.',
    }),
  },
];

export const OurWhy = () => {
  const t = useTranslations('aboutOurAgency.ourWhy');

  return (
    <section className="px-10 py-[70px] max-md:px-2">
      <section className="relative flex flex-col gap-20 overflow-hidden rounded-2xl bg-[#030213] px-10 py-20 max-md:gap-40 max-md:px-4">
        <div className="flex gap-20 max-lg:flex-col max-lg:gap-10">
          <section className="flex flex-col justify-between">
            <div className="flex flex-col gap-4">
              <Title capitalize>{t('title', { fallback: 'Our Why' })}</Title>
              <Text color="white">
                {t('text.0', {
                  fallback:
                    'We exist because too many brands settle for marketing that is',
                })}
                <br />
                {t('text.1', { fallback: 'Our driving force is impact:' })}
              </Text>
            </div>
            <Text color="white">
              {t('text.2', {
                fallback:
                  'We are motivated by curiosity and the belief that marketing is not a cost — it is a growth engine. That is why every project we deliver is designed to create both emotional connection and business value.',
              })}
            </Text>
          </section>
          <section className="flex flex-col gap-2.5">
            {getCardValues(t).map(item => (
              <Card key={item} value={item} />
            ))}
          </section>
        </div>
        <Image
          className="absolute top-[650px] -right-20 hidden rotate-[-66.821deg] max-md:block"
          src="/images/about/our-why.png"
          alt="our-why"
          width={759}
          height={759}
          unoptimized
        />
        <div className="flex gap-20 max-lg:flex-col-reverse max-lg:gap-10">
          <section className="flex flex-col gap-2.5">
            {getStepCards(t).map((item, i) => (
              <StepCard key={item.title} number={++i} {...item} />
            ))}
          </section>
          <section className="relative flex w-1/2 flex-col justify-between max-lg:w-full">
            <div className="flex flex-col gap-4">
              <Title className="max-md:text-[75px]">
                {t('title2', { fallback: 'The Edge' })}
              </Title>
              <Text color="white">
                {t('text2', {
                  fallback:
                    'Our advantage comes from the fusion of three disciplines:',
                })}
              </Text>
            </div>
            <Image
              className="absolute top-0 -right-10 h-[600px] w-[1000px] rotate-[-75.277deg] max-lg:hidden"
              src="/images/about/our-why.png"
              alt="our-why"
              width={759}
              height={759}
              unoptimized
            />
            <Text color="white">
              {t('text3.0', {
                fallback:
                  'Unlike traditional agencies, we do not hide behind long presentations or endless revisions. We bring ideas to market quickly, validate them with data, and scale only what proves to deliver ROI.',
              })}
              <br />
              <br />
              {t('text3.1', {
                fallback:
                  'This is why our campaigns consistently outperform the industry average.',
              })}
            </Text>
          </section>
        </div>
      </section>
    </section>
  );
};

const Card = ({ value }: { value: string }) => (
  <article className="flex flex-col rounded-[40px] bg-[rgba(227,227,227,0.30)] px-[50px] py-[30px] max-md:p-5">
    <Title as="h3" size="xl">
      {value}
    </Title>
  </article>
);

const StepCard = ({
  number,
  text,
  title,
}: {
  title: string;
  text: string;
  number: number;
}) => {
  return (
    <article
      className={cn(
        'flex flex-col gap-2 rounded-[80px] p-10 max-md:rounded-[40px] max-md:p-5',
        number === 1 && 'bg-[rgba(0,77,191,0.10)]',
        number === 2 && 'bg-[rgba(255,161,0,0.10)]',
        number === 3 && 'bg-[rgba(0,132,67,0.10)]',
      )}
    >
      <span className="flex items-center gap-3">
        <span className="text-jaguar flex h-[45px] w-[45px] flex-shrink-0 items-center justify-center rounded-full bg-white text-xl font-bold max-md:h-[32px] max-md:w-[32px] max-md:text-base">
          0{number}
        </span>
        <Text size="4xl" className="max-md:text-xl" color="white" weight={700}>
          {title}
        </Text>
      </span>
      <Text color="white" size="xl" className="max-md:text-base">
        {text}
      </Text>
    </article>
  );
};
