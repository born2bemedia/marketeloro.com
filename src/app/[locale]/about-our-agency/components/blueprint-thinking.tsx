'use client';

import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const getSteps = (t: ReturnType<typeof useTranslations>) => [
  {
    title: t('cards.0.title', { fallback: 'Market Research' }),
    text: t('cards.0.text', {
      fallback:
        'Detailed analysis of customer behavior, industry trends, and competitor activity.',
    }),
  },
  {
    title: t('cards.1.title', { fallback: 'Segmentation' }),
    text: t('cards.1.text', {
      fallback: 'Identifying micro-audiences and tailoring messages for each.',
    }),
  },
  {
    title: t('cards.2.title', { fallback: 'Positioning' }),
    text: t('cards.2.text', {
      fallback:
        'Defining the emotional and rational reason why your brand matters.',
    }),
  },
  {
    title: t('cards.3.title', { fallback: 'Roadmapping' }),
    text: t('cards.3.text', {
      fallback:
        'Building a long-term plan that balances quick wins with sustainable results.',
    }),
  },
];

export const BlueprintThinking = () => {
  const t = useTranslations('aboutOurAgency.blueprintThinking');

  return (
    <section className="flex gap-[60px] p-10 max-lg:flex-col-reverse max-md:gap-10 max-md:px-2">
      <div className="flex w-1/2 flex-col gap-10 max-lg:w-full">
        {getSteps(t).map(item => (
          <Card key={item.title} {...item} />
        ))}
      </div>
      <section className="flex w-1/2 flex-col justify-between gap-3.5 max-lg:w-full">
        <div className="flex flex-col gap-3.5">
          <Title color="jaguar">
            {t('title', { fallback: 'Blueprint Thinking' })}
          </Title>
          <Text color="stormGrey" size="base">
            {t('text', {
              fallback:
                'Each brand we work with gets a unique Blueprint Strategy:',
            })}
          </Text>
        </div>
        <Text color="stormGrey" size="base">
          {t('text2', {
            fallback:
              'Blueprint Thinking ensures that every campaign is not random but part of a larger system that moves your brand toward measurable goals.',
          })}
        </Text>
      </section>
    </section>
  );
};

const Card = ({ title, text }: { title: string; text: string }) => (
  <article className="flex flex-col gap-0.5 border-b border-[#D9D9D9] pb-2.5">
    <Text size="3xl" weight={700}>
      {title}
    </Text>
    <Text size="xl">{text}</Text>
  </article>
);
