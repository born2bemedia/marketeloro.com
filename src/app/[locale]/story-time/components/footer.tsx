'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const Footer = () => {
  const t = useTranslations('storyTime.footer');

  return (
    <footer className="m-5 flex flex-col gap-6 rounded-2xl bg-[#030213] px-10 pt-20 pb-10 max-md:mx-2 max-md:px-5">
      <Title size="4xl">
        {t('title', { fallback: 'Your story matters too!' })}
      </Title>
      <Text size="base" color="white">
        {t('description.0', {
          fallback:
            'StoryTime is a space for bold ideas and real experiences from our community.',
        })}
        <br />
        <br />
        {t('description.1', {
          fallback:
            'if you’ve got a story worth telling — a big win, a tough lesson, or a creative breakthrough — send it to us by email.',
        })}
        <br />
        <br />
        {t('description.2', {
          fallback: 'We’ll review it, and your story could be published here.',
        })}
        <br />
        <br />
        {t('share', { fallback: 'Share your story:' })}{' '}
        <Link href="mailto:info@marketeloro.com">info@marketeloro.com</Link>
      </Text>
    </footer>
  );
};
