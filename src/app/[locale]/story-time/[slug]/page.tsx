import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';

import { getPreviews } from '@/features/articles/model/get-previews';
import { ArticleHero } from '@/features/articles/ui/article-hero';

import { PageHero } from '@/shared/ui/components/page-hero';
import { ArrowRightIcon } from '@/shared/ui/icons/arrow-right';

export default async function StoryTimePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const t = await getTranslations('storyTime.latestDrops');

  const article = getPreviews(t).find(article => article.slug === slug);

  console.log(slug);

  if (!article) {
    notFound();
  }

  const { content: Component, description, footer, imgUrl, name } = article;

  return (
    <main>
      <ArticleHero title={name} description={description} imgUrl={imgUrl} />
      <Component />
      <PageHero
        className="h-[444px]"
        overlayClassName="bg-black/50"
        imgUrl="/images/articles/footer.jpg"
        title={footer.title}
        metaButtons={footer.buttons.map(button => ({
          text: button.label,
          href: button.href,
          variant: 'secondary',
          icon: ArrowRightIcon,
        }))}
      />
    </main>
  );
}
