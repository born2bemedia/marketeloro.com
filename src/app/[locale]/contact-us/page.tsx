import { getTranslations } from 'next-intl/server';

import { PageHero } from '@/shared/ui/components/page-hero';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import { Contact } from './components';

export default async function ContactUs() {
  const t = await getTranslations('contactUs');

  return (
    <main>
      <section className="flex w-[60%] flex-col gap-5 px-20 py-10 max-md:w-full max-md:px-4">
        <Title as="h1" color="jaguar">
          {t('title', { fallback: 'Let’s Get to Work' })}
        </Title>
        <Text size="base" color="darkBlue">
          {t('description', {
            fallback:
              'Get in touch for a conversation about strategies, tailored marketing plans, or to discuss how we can help you grow.',
          })}
        </Text>
      </section>
      <Contact />
      <section className="flex flex-col gap-10 p-10 max-md:px-2">
        <PageHero
          imgUrl="/images/contact-us/persian-carpet.jpg"
          className="!m-0 h-[400px]"
        />
        <section className="flex flex-col gap-6 rounded-xl bg-[#030213] px-10 pt-20 pb-10 max-md:px-2">
          <Title size="4xl">
            {t('title2', { fallback: 'Your Data Stays Safe With Us' })}
          </Title>
          <Text size="base" color="white">
            {t('description2.0', {
              fallback:
                'Your privacy comes first. Everything you share through this form or by email is secured and never shared with third parties.',
            })}
            <br />
            {t('description2.1', {
              fallback: 'We follow GDPR and international privacy standards.',
            })}
          </Text>
        </section>
      </section>
      <section className="flex gap-10 bg-[rgba(236,236,240,0.20)] px-10 py-20 max-md:px-2">
        <div className="flex flex-col gap-3.5">
          <Title size="4xl" color="jaguar">
            {t('title3', { fallback: 'Visit Us Offline' })}
          </Title>
          <Text size="base" color="stormGrey">
            {t('description3.0', {
              fallback:
                'Prefer a face-to-face conversation? We’d love to host you at our office.',
            })}
            <br />
            {t('description3.1', {
              fallback:
                'Book a visit, and we’ll prepare a space for a productive meeting.',
            })}
          </Text>
          <div className="flex flex-col">
            <Text size="2xl" color="darkBlue">
              {t('businessHours', { fallback: 'Business Hours:' })}
            </Text>
            <Text size="2xl" color="darkBlue" weight={700}>
              {t('businessHoursValue', {
                fallback: '9:00 – 6:00 (Mon–Fri)',
              })}
            </Text>
          </div>
        </div>
      </section>
    </main>
  );
}
