'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { cn } from '@/shared/lib/utils/cn';
import { PlayIcon } from '@/shared/ui/icons/play';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import { Link } from '@/i18n/navigation';

const getFeatures = (t: ReturnType<typeof useTranslations>) => [
  {
    text: t('cards.0', {
      fallback: 'Creates experiences your audience talks about',
    }),
  },
  {
    text: t('cards.1', { fallback: 'Spots trends before they go mainstream' }),
    className: 'px-10 max-md:px-2',
  },
  {
    text: t('cards.2', {
      fallback: 'Builds campaigns that stand the test of time',
    }),
    className: 'px-20 max-md:px-4',
  },
  {
    text: t('cards.3', {
      fallback: 'Shares your passion for making an impact',
    }),
    className: 'px-[120px] max-md:px-6',
  },
  {
    text: t('cards.4', {
      fallback: 'Uses smart insights to spark real connections',
    }),
    className: 'px-[160px] max-md:px-[32px]',
  },
  {
    text: t('cards.5', {
      fallback: "Gives your brand a style people can't ignore",
    }),
    className: 'px-[200px] max-md:px-10',
  },
];

export const AboutUs = () => {
  const t = useTranslations('home.aboutUs');

  return (
    <section className="relative flex flex-col gap-[60px] px-10 py-[70px] max-md:px-2">
      <Image
        className="absolute top-1/2 right-0 -translate-y-1/2 max-lg:hidden"
        src="/images/home/looking-for.png"
        alt="looking-for"
        width={568}
        height={800}
        unoptimized
      />
      <Title color="jaguar" capitalize>
        {t('title', {
          fallback: "If you're looking for a marketing partner who…..",
        })}
      </Title>
      <section className="flex flex-col gap-5">
        {getFeatures(t).map(f => (
          <Feature key={f.text} value={f.text} className={f.className} />
        ))}
      </section>
      <div className="flex w-[800px] flex-col gap-7 max-md:w-full">
        <div className="flex flex-col">
          <Text>
            {t('text.0', {
              fallback:
                "Then we're here to deliver the results your brand deserves.",
            })}
          </Text>
          <Title color="jaguar" capitalize>
            {t('text.1', {
              fallback: 'Curious about how we work and who we are?',
            })}
          </Title>
        </div>
        <Link href="/about-our-agency">
          <Button
            size="md"
            variant="transparent"
            className="hover:[&_svg]:fill-white"
          >
            {t('learnMore', { fallback: 'Learn more' })}
            <PlayIcon color="black" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export const Feature = ({
  value,
  className,
}: {
  value: string;
  className?: string;
}) => (
  <div className={cn('flex flex-col border-b border-black/20 py-5', className)}>
    <Text size="3xl" weight={400}>
      ...{value}
    </Text>
  </div>
);
