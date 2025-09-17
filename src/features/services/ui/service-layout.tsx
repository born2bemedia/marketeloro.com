'use client';

export const ServiceLayout = ({ children }: { children: React.ReactNode }) => (
  <section className="flex flex-col py-[70px] pl-10 max-md:pl-2">
    {children}
  </section>
);
