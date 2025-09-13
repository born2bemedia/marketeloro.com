'use client';

import Image from 'next/image';
import Link from 'next/link';

import { ArrowRightIcon } from '@/shared/ui/icons/arrow-right';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import type { ArticlePreviewDef } from '../model/types';

export const ArticlePreview = ({
  name,
  description,
  btnLabel,
  imgUrl,
  href,
}: ArticlePreviewDef) => {
  return (
    <article className="relative flex flex-col gap-8 overflow-hidden rounded-[40px] p-10">
      <section className="z-10 flex flex-col gap-2">
        <Title as="h3" size="4xl">
          {name}
        </Title>
        <Text size="xl" color="white">
          {description}
        </Text>
      </section>
      <div className="absolute inset-0 z-5 bg-black/20" />
      <Image
        className="z-0 object-cover"
        src={imgUrl}
        alt={name}
        fill
        unoptimized
      />
      <Link href={href} className="z-10">
        <Button variant="secondary" size="md">
          {btnLabel} <ArrowRightIcon />
        </Button>
      </Link>
    </article>
  );
};
