'use client';

import { Title } from '@/shared/ui/kit/title';

export const PolicyHero = ({ title }: { title: string }) => {
  return (
    <section className="px-20 py-10">
      <Title as="h1" color="jaguar">
        {title}
      </Title>
    </section>
  );
};
