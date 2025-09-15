'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { ArrowLeftIcon } from '@/shared/ui/icons/arrow-left';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const ArticleHero = ({
  description,
  imgUrl,
  title,
}: {
  title: string;
  description: string;
  imgUrl: string;
}) => {
  const t = useTranslations('articles');

  return (
    <section className="flex flex-col px-10 max-md:px-2">
      <Link href="/story-time">
        <Button variant="shadow" size="md">
          <ArrowLeftIcon />
          {t('back', { fallback: 'Back' })}
        </Button>
      </Link>
      <header className="flex flex-col gap-5 p-10 max-md:px-2">
        <Title as="h1" color="jaguar">
          {title}
        </Title>
        <Text size="base" weight={500}>
          {description}
        </Text>
        <Image
          className="h-[400px] w-full rounded-[40px] object-cover"
          src={imgUrl}
          alt="hero"
          width={1200}
          height={400}
          unoptimized
        />
      </header>
    </section>
  );
};
