'use client';

import { ContactForm } from '@/features/contact-form/ui/contact-form';

import { List } from '@/shared/ui/kit/list';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const Contact = () => {
  return (
    <section className="flex items-center gap-10 bg-[rgba(236,236,240,0.20)] p-10 max-md:flex-col max-md:items-start max-md:px-2">
      <section className="h-full w-1/2 max-md:w-full">
        <ContactForm />
      </section>
      <section className="flex w-1/2 flex-col gap-10 max-md:w-full">
        <div className="flex flex-col gap-3.5">
          <Title size="4xl" color="jaguar" as="h3">
            Prefer a Call Instead?
          </Title>
          <Text size="base" color="stormGrey">
            Prefer human-to-human over screen-to-screen?
          </Text>
        </div>
        <div className="flex flex-col rounded-[40px] bg-[rgba(227,227,227,0.30)] p-5">
          <Text size="4xl" color="jaguar" weight={700}>
            Response Time
          </Text>
          <Text size="base" color="darkBlue">
            We know your time matters. That’s why every message sent to
            Marketeloro gets a quick response.
            <br />
            <br />
          </Text>
          <List
            values={[
              <>
                Standard inquiries: within{' '}
                <span className="font-bold">24 hours</span> on business days.
              </>,
              <>
                Project requests & proposals: first reply usually within
                <span className="font-bold">12 hours</span>.
              </>,
              <>
                Client support cases: handled with{' '}
                <span className="font-bold">priority attention</span> — most
                resolved in under{' '}
                <span className="font-bold">1 business day</span>.
              </>,
            ]}
          />
          <Text>
            <br /> You’ll never be left hanging!
          </Text>
        </div>
      </section>
    </section>
  );
};
