'use client';

export const ArticleLayout = ({ children }: { children: React.ReactNode }) => (
  <article className="flex flex-col gap-10 bg-[rgba(236,236,240,0.20)] px-5 py-10 max-md:px-4">
    {children}
  </article>
);
