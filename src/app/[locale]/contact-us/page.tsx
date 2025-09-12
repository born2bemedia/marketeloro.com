import { PageHero } from '@/shared/ui/components/page-hero';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import { Contact } from './components';

export default function ContactUs() {
  return (
    <main>
      <section className="flex w-[60%] flex-col gap-5 px-20 py-10 max-md:w-full max-md:px-4">
        <Title as="h1" color="jaguar">
          Let’s Get to Work
        </Title>
        <Text size="base" color="darkBlue">
          Get in touch for a conversation about strategies, tailored marketing
          plans, or to discuss how we can help you grow.
        </Text>
      </section>
      <Contact />
      <section className="flex flex-col gap-10 p-10 max-md:px-2">
        <PageHero
          imgUrl="/images/contact-us/persian-carpet.jpg"
          className="!m-0 h-[400px]"
        />
        <section className="flex flex-col gap-6 rounded-xl bg-[#030213] px-10 pt-20 pb-10 max-md:px-2">
          <Title size="4xl">Your Data Stays Safe With Us</Title>
          <Text size="base" color="white">
            Your privacy comes first. Everything you share through this form or
            by email is secured and never shared with third parties.
            <br />
            We follow GDPR and international privacy standards.
          </Text>
        </section>
      </section>
      <section className="flex gap-10 bg-[rgba(236,236,240,0.20)] px-10 py-20 max-md:px-2">
        <div className="flex flex-col gap-3.5">
          <Title size="4xl" color="jaguar">
            Visit Us Offline
          </Title>
          <Text size="base" color="stormGrey">
            Prefer a face-to-face conversation? We’d love to host you at our
            office.
            <br />
            Book a visit, and we’ll prepare a space for a productive meeting.
          </Text>
          <div className="flex flex-col">
            <Text size="2xl" color="darkBlue">
              Business Hours:
            </Text>
            <Text size="2xl" color="darkBlue" weight={700}>
              9:00 – 6:00 (Mon–Fri)
            </Text>
          </div>
        </div>
      </section>
    </main>
  );
}
