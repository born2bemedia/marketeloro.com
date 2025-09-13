'use client';

import { useTranslations } from 'next-intl';

import { getPreviews } from '@/features/articles/model/get-previews';
import { ArticlePreview } from '@/features/articles/ui/article-preview';

import { Title } from '@/shared/ui/kit/title';

export const LatestDrops = () => {
  const t = useTranslations('storyTime.latestDrops');

  return (
    <section className="relative flex gap-[42px] px-10 py-[70px] max-lg:flex-col max-md:px-2">
      <Title
        color="jaguar"
        className="sticky top-3 h-fit shrink-0 max-lg:relative max-lg:top-0"
      >
        {t('title', { fallback: 'Latest drops' })}
      </Title>
      <section className="flex flex-col gap-[42px]">
        {getPreviews(t).map(preview => (
          <ArticlePreview key={preview.name} {...preview} />
        ))}
      </section>
    </section>
  );
};
