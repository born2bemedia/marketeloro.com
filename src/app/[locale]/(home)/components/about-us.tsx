'use client';

import { useTranslations } from 'next-intl';

import { PlayIcon } from '@/shared/ui/icons/play';
import { TickCircleIcon } from '@/shared/ui/icons/tick-circle';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const getFeatures = (t: ReturnType<typeof useTranslations>) => [
  t('cards.0', { fallback: 'Creates experiences your audience talks about' }),
  t('cards.1', { fallback: 'Spots trends before they go mainstream' }),
  t('cards.2', { fallback: 'Builds campaigns that stand the test of time' }),
  t('cards.3', { fallback: 'Shares your passion for making an impact' }),
  t('cards.4', { fallback: 'Uses smart insights to spark real connections' }),
  t('cards.5', { fallback: "Gives your brand a style people can't ignore" }),
];

export const AboutUs = () => {
  const t = useTranslations('home.aboutUs');

  return (
    <section className="flex justify-between gap-[42px] px-10 py-[70px] max-md:flex-col max-md:px-2">
      <section className="flex flex-col gap-8">
        <Title color="jaguar">
          {t('title', {
            fallback: "If you're looking for a marketing partner who…",
          })}
        </Title>
        <div className="flex flex-col gap-[28px]">
          <Text>
            {t('text.0', {
              fallback:
                "Then we're here to deliver the results your brand deserves.",
            })}
            <br />
            {t('text.1', {
              fallback: 'Curious about how we work and who we are?',
            })}
          </Text>
          <Button
            size="md"
            variant="transparent"
            className="hover:[&_svg]:fill-white"
          >
            {t('learnMore', { fallback: 'Learn more' })}{' '}
            <PlayIcon color="black" />
          </Button>
        </div>
      </section>
      <section className="flex shrink-0 flex-col gap-5">
        {getFeatures(t).map(f => (
          <Feature key={f} value={f} />
        ))}
      </section>
    </section>
  );
};

export const Feature = ({ value }: { value: string }) => (
  <div className="flex items-center gap-2 border-b border-black py-5">
    <TickCircleIcon />
    <Text size="xl" weight={400}>
      {value}
    </Text>
  </div>
);
