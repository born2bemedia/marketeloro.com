'use client';

import type { JSX } from 'react';
import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/shared/lib/utils/cn';
import type { ButtonVariants } from '@/shared/ui/kit/button';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import type { IconProps } from '../icons/types';

export const PageHero = ({
  title,
  description,
  imgUrl,
  metaButtons,
  className,
}: {
  title: string;
  description?: ReactNode;
  imgUrl: string;
  metaButtons?: {
    text: string;
    href: string;
    variant: ButtonVariants['variant'];
    icon?: (props: IconProps) => JSX.Element;
  }[];
  className?: string;
}) => {
  return (
    <section
      className={cn(
        'relative mx-10 flex flex-col gap-5 overflow-hidden rounded-[40px] p-10 max-md:mx-2 max-md:px-3',
        className,
      )}
    >
      <Image className="object-cover" src={imgUrl} alt="hero-img" fill />
      <div className="absolute inset-0 bg-black/30" />
      <Title as="h1" className="z-10 w-[80%] max-md:w-full">
        {title}
      </Title>
      {description && (
        <Text
          size="base"
          color="white"
          className="z-10 w-[672px] max-md:w-full"
          weight={500}
        >
          {description}
        </Text>
      )}
      {metaButtons && (
        <div className="z-10 flex items-center gap-3.5">
          {metaButtons.map(({ href, text, variant, icon: Icon }) => (
            <Link key={href} href={href}>
              <Button size="md" variant={variant}>
                {text} {Icon && <Icon />}
              </Button>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
};
