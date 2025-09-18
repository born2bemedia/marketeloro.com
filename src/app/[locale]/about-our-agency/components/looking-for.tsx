'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const LookingFor = () => {
  const t = useTranslations('aboutOurAgency.lookingFor');

  return (
    <section className="relative flex overflow-hidden px-10 py-[70px] max-lg:pb-[380px] max-md:px-2">
      <Image
        src="/images/about/about.png"
        alt="about"
        width={640}
        height={581}
        className="absolute -top-20 -right-38 rotate-[11.651deg] max-lg:top-120 max-lg:-right-20 max-md:h-[397px] max-md:w-[427px]"
        unoptimized
      />
      <section className="flex w-[60%] flex-col gap-8 max-lg:w-full">
        <Title color="jaguar" capitalize>
          {t('title', {
            fallback: 'Inside Marketeloro',
          })}
        </Title>
        <div className="flex flex-col gap-6">
          <Text>
            <span className="font-bold">Marketeloro</span>{' '}
            {t('text.0', {
              fallback:
                'is a full-service B2C marketing agency, created to help brands grow with confidence and creativity. ',
            })}
            <br />
            {t('text.1', {
              fallback:
                'We are a team of strategists, creators, analysts, and innovators who understand that marketing today is not about pushing messages but about creating experiences people care about.',
            })}
            <br />
            <br />
            {t('text.2', {
              fallback: 'Our work is rooted in combining',
            })}{' '}
            <span className="font-bold">
              {t('text.3', { fallback: 'market intelligence' })}
            </span>{' '}
            {t('text.4', { fallback: 'with' })}{' '}
            <span className="font-bold">
              {t('text.5', { fallback: 'emotional storytelling' })}
            </span>
            {t('text.6', {
              fallback:
                'We study how consumers think, what they expect from brands, and how they make decisions. Then we turn that knowledge into campaigns that don’t just reach people, but stay with them.',
            })}{' '}
            <br />
            {t('text.7', {
              fallback:
                'We are not a vendor. We are a partner who shares your ambition and works as closely with your team as if we were sitting in the same office.',
            })}
          </Text>
        </div>
      </section>
    </section>
  );
};
