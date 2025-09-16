'use client';

import { Title } from '@/shared/ui/kit/title';

export const PolicySection = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) => (
  <section className="mx-auto flex w-full max-w-[1200px] flex-col gap-5 rounded-[40px] bg-[rgba(227,227,227,0.30)] p-10 max-md:px-2">
    {title && (
      <Title size="4xl" color="jaguar">
        {title}
      </Title>
    )}
    {children}
  </section>
);
