'use client';

import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const getCards = (t: ReturnType<typeof useTranslations>) => [
  {
    title: t('cards.0.title', {
      fallback: 'Freelance & Partnerships',
    }),
    text: t('cards.0.text', {
      fallback:
        'Collaborate on campaigns, projects, and big ideas that cross industries.',
    }),
  },
  {
    title: t('cards.1.title', {
      fallback: 'Join the Team',
    }),
    text: t('cards.1.text', {
      fallback:
        'We’re always looking for strategists, creators, and digital explorers who want to grow with us.',
    }),
  },
  {
    title: t('cards.2.title', {
      fallback: 'Internships & Learning',
    }),
    text: t('cards.2.text', {
      fallback:
        'A hands-on experience for those ready to learn from real campaigns, not textbooks.',
    }),
  },
];

export const WorkWith = () => {
  const t = useTranslations('workWithUs.workWith');

  return (
    <section className="flex gap-[42px] px-10 py-[70px] max-md:flex-col max-md:px-2">
      <Title color="jaguar" className="shrink-0">
        {t('title.0', {
          fallback: 'Ways to',
        })}
        <br />
        {t('title.1', {
          fallback: 'Work With Us',
        })}
      </Title>
      <section className="flex w-full flex-col gap-2">
        {getCards(t).map(card => (
          <Card key={card.title} {...card} />
        ))}
      </section>
    </section>
  );
};

const Card = ({ title, text }: { title: string; text: string }) => (
  <article className="flex flex-col rounded-[40px] bg-[#030213] p-5">
    <Text size="4xl" color="white">
      {title}
    </Text>
    <Text size="base" color="white">
      {text}
    </Text>
  </article>
);
