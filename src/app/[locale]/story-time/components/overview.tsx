'use client';

import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const getItems = (t: ReturnType<typeof useTranslations>) => [
  {
    title: t('items.0.title', { fallback: 'Wins & Fails' }),
    text: t('items.0.text', { fallback: 'Raw case studies with numbers' }),
  },
  {
    title: t('items.1.title', { fallback: 'Future Signals' }),
    text: t('items.1.text', {
      fallback: 'Trends before they hit the mainstream',
    }),
  },
  {
    title: t('items.2.title', { fallback: 'Playbooks' }),
    text: t('items.2.text', {
      fallback: 'Practical steps you can steal and apply',
    }),
  },
  {
    title: t('items.3.title', { fallback: 'Voices' }),
    text: t('items.3.text', { fallback: 'Insights from the people behind' }),
  },
];

export const Overview = () => {
  const t = useTranslations('storyTime.overview');

  return (
    <section className="mx-5 mt-5 mb-20 flex flex-col gap-6 rounded-2xl bg-[#030213] px-10 pt-20 pb-10 max-md:px-5 max-md:py-10">
      <Title size="4xl">
        {t('title', { fallback: 'What To Expect Here' })}
      </Title>
      <section className="flex gap-6 max-md:flex-col">
        {getItems(t).map(item => (
          <Item key={item.title} {...item} />
        ))}
      </section>
    </section>
  );
};

const Item = ({ title, text }: { title: string; text: string }) => {
  return (
    <article className="flex flex-col gap-1 border-b border-white py-5">
      <Text size="xl" weight={700} color="white">
        {title}
      </Text>
      <Text size="xl" color="white">
        {text}
      </Text>
    </article>
  );
};
