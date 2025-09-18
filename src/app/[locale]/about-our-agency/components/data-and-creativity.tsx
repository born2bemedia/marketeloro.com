'use client';

import type { ReactNode } from 'react';
import { useTranslations } from 'next-intl';

import { cn } from '@/shared/lib/utils/cn';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import { Link } from '@/i18n/navigation';

const getOneTeamList = (t: ReturnType<typeof useTranslations>) => [
  <>
    {t('list1.0.0', { fallback: 'You get' })}{' '}
    <span className="font-bold">
      {t('list1.0.1', { fallback: 'direct access' })}
    </span>{' '}
    {t('list1.0.2', {
      fallback:
        'to strategists, creatives, and analysts — no endless layers of account managers.',
    })}
  </>,
  <>
    {t('list1.1.0', { fallback: 'We' })}{' '}
    <span className="font-bold">
      {t('list1.1.1', { fallback: 'co-create' })}
    </span>{' '}
    {t('list1.1.2', {
      fallback:
        '— involving you in the process, ensuring strategies fit your culture and audience.',
    })}
  </>,
  <>
    {t('list1.2.0', { fallback: 'We' })}{' '}
    <span className="font-bold">
      {t('list1.2.1', { fallback: 'adapt in real time' })}
    </span>{' '}
    {t('list1.2.2', {
      fallback: '— adjusting based on your feedback and market signals.',
    })}
  </>,
];

const getAlwaysTestingList = (t: ReturnType<typeof useTranslations>) => [
  <>
    <span className="font-bold">
      {t('list2.0.0', { fallback: 'If something works' })}
    </span>{' '}
    {t('list2.0.1', { fallback: 'we scale it.' })}
  </>,
  <>
    <span className="font-bold">
      {t('list2.1.0', { fallback: "If something doesn't" })}
    </span>{' '}
    {t('list2.1.1', { fallback: 'we learn fast and adjust.' })}
  </>,
];

export const DataAndCreativity = () => {
  const t = useTranslations('aboutOurAgency.dataAndCreativity');

  return (
    <section className="py-20g px-10 max-md:px-2">
      <section className="flex flex-col gap-14 rounded-[12px] bg-[#030213] px-10 py-20 max-md:px-2">
        <div className="flex flex-col gap-3.5 text-center">
          <Title>
            {t('title', {
              fallback:
                'Data x Creativity – Connecting Numbers and Imagination',
            })}
          </Title>
          <Text size="base" color="white">
            {t('text', {
              fallback: 'Our campaigns succeed because we connect two worlds:',
            })}
          </Text>
        </div>
        <div className="flex gap-10 max-[1200px]:flex-col">
          <section className="flex w-1/2 gap-5 max-[1200px]:w-full">
            <Card
              title={t('data', { fallback: 'Data' })}
              text={t('text2', {
                fallback:
                  'tells us what people do — their clicks, searches, behaviors, and patterns.',
              })}
            />
            <Card
              title={t('creativity', { fallback: 'Creativity' })}
              text={t('text3', {
                fallback:
                  'tells us why they do it — their feelings, aspirations, and culture.',
              })}
            />
          </section>
          <Text size="base" color="white" className="w-1/2 max-[1200px]:w-full">
            {t('text4', {
              fallback:
                'We use predictive analytics, A/B testing, and consumer insights to identify the most promising opportunities. Then our creative team turns those insights into stories, visuals, and experiences that inspire action.',
            })}
            <br />
            {t('text5', {
              fallback:
                'This balance means our campaigns are never just pretty or just technical — they are effective.',
            })}
          </Text>
        </div>
        <List
          title={t('text6', { fallback: 'One Team With You' })}
          description={t('text7', {
            fallback:
              'We don’t just deliver projects and disappear. We embed ourselves as part of your team.',
          })}
          appendix={t('text8', {
            fallback:
              'This way of working creates transparency, trust, and faster execution. Many of our clients describe us not as an agency but as their extended marketing department.',
          })}
          list={getOneTeamList(t)}
        />
        <List
          title={t('text9', { fallback: 'Always Testing, Always Learning' })}
          description={t('text10', {
            fallback:
              'For us, every campaign is a live experiment. We test everything — from ad copy and visuals to audience segments and landing pages.',
          })}
          appendix={t('text11', {
            fallback:
              'This cycle of testing and learning ensures that we are never static. It keeps us, and our clients, ahead of competitors who rely on outdated “best practices.”',
          })}
          list={getAlwaysTestingList(t)}
          className="ml-auto max-lg:ml-0"
        />
        <div className="flex w-[800px] flex-col gap-6 max-lg:w-full">
          <Title>{t('title2', { fallback: 'Proof in Practice' })}</Title>
          <div className="flex flex-col gap-4">
            <Text size="base" color="white">
              {t('text12', {
                fallback:
                  'At Marketeloro, strategy only matters if it delivers in the real world. That’s why we test, measure, and share our results openly — every case study is proof that bold ideas backed by data drive real growth.',
              })}
            </Text>
            <Text size="base" color="white" weight={700}>
              {t('text13', {
                fallback: 'Now it’s your turn. ',
              })}
            </Text>
          </div>
        </div>
      </section>
    </section>
  );
};

const Card = ({ text, title }: { title: string; text: string }) => (
  <article className="flex flex-1 flex-col gap-2 rounded-[60px] bg-white px-2 pt-2 pb-5 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.10),0_4px_6px_-4px_rgba(0,0,0,0.10)] max-md:rounded-4xl">
    <div className="rounded-full bg-[#030213] p-5 text-center">
      <Text size="5xl" color="white" weight={700} uppercase>
        {title}
      </Text>
    </div>
    <Text size="base" color="jaguar" className="text-center">
      {text}
    </Text>
  </article>
);

const List = ({
  title,
  description,
  appendix,
  list,
  className,
}: {
  title: string;
  description: string;
  appendix: string;
  list: ReactNode[];
  className?: string;
}) => (
  <section
    className={cn('flex w-[65%] flex-col gap-6 max-lg:w-full', className)}
  >
    <Title>{title}</Title>
    <div className="flex flex-col gap-4">
      <Text size="base" color="white">
        {description}
      </Text>
      <ul className="w-max max-lg:w-full">
        {list.map((item, i) => (
          <li key={i} className="border-b border-white py-2">
            <Text size="base" color="white">
              {item}
            </Text>
          </li>
        ))}
      </ul>
      <Text size="base" color="white">
        {appendix}
      </Text>
    </div>
  </section>
);
