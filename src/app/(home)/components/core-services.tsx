'use client';

import type { JSX } from 'react';

import { cn } from '@/shared/lib/utils/cn';
import { AimCircleIcon } from '@/shared/ui/icons/circles/aim';
import { GraphCircleIcon } from '@/shared/ui/icons/circles/graph';
import { PaletteCircleIcon } from '@/shared/ui/icons/circles/palette';
import { PenCircleIcon } from '@/shared/ui/icons/circles/pen';
import { TvCircleIcon } from '@/shared/ui/icons/circles/tv';
import { UsersCircleIcon } from '@/shared/ui/icons/circles/users';
import { Button } from '@/shared/ui/kit/button';
import { Divider } from '@/shared/ui/kit/divider';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const cards = [
  {
    icon: AimCircleIcon,
    title: 'Strategy & Consulting',
    text: 'Data-driven strategies tailored to your business goals and market position',
    border: true,
  },
  {
    icon: UsersCircleIcon,
    title: 'Social Media & Community',
    text: 'Building engaged communities and managing your social media presence',
    border: true,
  },
  {
    icon: PenCircleIcon,
    title: 'Content & Creative',
    text: 'Compelling content that resonates with your audience and drives action',
  },
  {
    icon: PaletteCircleIcon,
    title: 'Branding & Design',
    text: 'Creating memorable brand identities that stand out in the marketplace',
    border: true,
  },
  {
    icon: GraphCircleIcon,
    title: 'Digital Marketing',
    text: 'Performance-driven campaigns across all digital channels',
    border: true,
  },
  {
    icon: TvCircleIcon,
    title: 'Web & Digital Experience',
    text: 'User-focused websites and digital experiences that convert',
  },
];

export const CoreServices = () => {
  return (
    <section className="flex flex-col gap-[60px] p-10 max-md:px-2">
      <Title color="jaguar">
        Marketeloro <br /> Core Services
      </Title>
      <section className="grid grid-cols-3 gap-10 max-md:grid-cols-1">
        {cards.map(c => (
          <Card key={c.title} {...c} />
        ))}
      </section>
      <section className="ml-auto flex w-[600px] flex-col gap-7 max-md:w-full">
        <Title as="h3" size="4xl" color="jaguar">
          Discover all our services and find the perfect match for your goals
        </Title>
        <Button size="md">Explore Services</Button>
      </section>
    </section>
  );
};

const Card = ({
  icon: Icon,
  title,
  text,
  border = false,
}: {
  icon: () => JSX.Element;
  title: string;
  text: string;
  border?: boolean;
}) => {
  return (
    <article
      className={cn(
        'flex flex-col gap-5 px-10 pb-10',
        border && 'border-r border-[#D9D9D9] last:border-r-0 max-md:border-r-0',
      )}
    >
      <Divider />
      <Icon />
      <Divider />
      <div className="flex flex-col gap-3">
        <Text size="2xl" weight={700}>
          {title}
        </Text>
        <Text size="xl">{text}</Text>
      </div>
    </article>
  );
};
