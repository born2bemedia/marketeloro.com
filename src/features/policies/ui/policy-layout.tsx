'use client';

export const PolicyLayout = ({ children }: { children: React.ReactNode }) => (
  <main className="flex flex-col gap-5 bg-[rgba(236,236,240,0.20)] px-5 py-10">
    {children}
  </main>
);
