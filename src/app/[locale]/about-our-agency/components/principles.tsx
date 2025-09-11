'use client';

import type { ReactNode } from 'react';
import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const getCards = (t: ReturnType<typeof useTranslations>) => [
  {
    title: t('cards.0.title', { fallback: 'Bold Thinking' }),
    text: t('cards.0.text', {
      fallback:
        'We never copy-paste. Each brand deserves ideas strong enough to cut through the noise.',
    }),
  },
  {
    title: (
      <>
        {t('cards.1.title.0', { fallback: 'Precision' })}{' '}
        <br className="max-md:hidden" />
        {t('cards.1.title.1', { fallback: 'Execution' })}
      </>
    ),
    text: t('cards.1.text', {
      fallback:
        'Big strategies matter, but they fail without detail. We execute with discipline, testing every assumption.',
    }),
  },
  {
    title: t('cards.2.title', { fallback: 'Collaboration' }),
    text: t('cards.2.text', {
      fallback: 'We see clients as partners. We succeed only if you succeed.',
    }),
  },
  {
    title: (
      <>
        {t('cards.3.title.0', { fallback: 'Continuous' })}{' '}
        <br className="max-md:hidden" />
        {t('cards.3.title.1', { fallback: 'Learning' })}
      </>
    ),
    text: t('cards.3.text', {
      fallback:
        'Marketing evolves daily. We analyze every campaign to extract insights for the next one.',
    }),
  },
  {
    title: t('cards.4.title', { fallback: 'Responsibility' }),
    text: t('cards.4.text', {
      fallback:
        'Growth must be sustainable. We respect audiences, build trust, and protect brand reputation at every step.',
    }),
  },
];

export const Principles = () => {
  const t = useTranslations('aboutOurAgency.principles');

  return (
    <section className="flex flex-col gap-[56px] px-10 py-[70px] max-md:px-2">
      <div className="flex flex-col gap-6">
        <Title color="jaguar">
          {t('title', { fallback: 'Principles in Action' })}
        </Title>
        <Text size="base" color="stormGrey">
          {t('text.0', {
            fallback:
              'Our principles guide every project, every meeting, and every client relationship ',
          })}{' '}
          <br />
          {t('text.1', {
            fallback:
              'These principles are not words on a slide — they are actions we take daily:',
          })}
        </Text>
      </div>
      <section className="flex gap-7 max-[1080px]:flex-col max-lg:gap-4">
        {getCards(t).map(item => (
          <Card key={item.text} {...item} />
        ))}
      </section>
    </section>
  );
};

const Card = ({ title, text }: { title: ReactNode; text: string }) => (
  <article className="flex h-max flex-1 flex-col gap-3 rounded-[40px] bg-[rgba(227,227,227,0.30)] p-2.5">
    <div className="px-5 pt-5">
      <Title as="h3" size="2xl" color="jaguar">
        {title}
      </Title>
    </div>
    <section className="rounded-[40px] bg-[#030213] p-5">
      <Text color="white">{text}</Text>
    </section>
  </article>
);
