'use client';

import { useTranslations } from 'next-intl';

import { List } from '@/shared/ui/kit/list';
import { Text } from '@/shared/ui/kit/text';

import { ArticleLayout } from './article-layout';
import { ArticleSection } from './article-section';

export const SafeBrandingArticle = () => {
  const t = useTranslations('articles.safeBranding');

  return (
    <ArticleLayout>
      <ArticleSection
        title={t('0.title', { fallback: 'The Trap of Playing It Safe' })}
      >
        <Text size="base">
          {t('0.0', {
            fallback:
              'Most brands think safety equals stability. They avoid sharp opinions, bold visuals, or anything that might “offend” or stand out too much. Instead, they pick neutral colors, generic taglines, and copy that sounds like everyone else.',
          })}
        </Text>
        <Text size="base">
          {t('0.1', {
            fallback:
              'The result? Silence. No controversy, but no attention either.',
          })}
        </Text>
        <Text size="base">
          {t('0.2', {
            fallback:
              'And in a market overflowing with ads, silence is the same as invisibility.',
          })}
        </Text>
      </ArticleSection>
      <ArticleSection
        title={t('1.title', { fallback: 'What Safe Branding Looks Like' })}
      >
        <Text size="base">
          {t('1.0', { fallback: 'We see it every day:' })}
        </Text>
        <List
          values={[
            t('1.list.0', {
              fallback:
                'Taglines that could belong to any brand: “Quality you can trust,” “Innovation for the future.”',
            }),
            t('1.list.1', {
              fallback: 'Logos that blend into the same five templates.',
            }),
            t('1.list.2', {
              fallback:
                'Campaigns designed by committee — where every risky idea is trimmed until nothing remains.',
            }),
          ]}
        />
        <Text size="base">
          {t('1.1', {
            fallback:
              'Safe branding feels comfortable in the boardroom. But in the marketplace, it disappears.',
          })}
        </Text>
      </ArticleSection>
      <ArticleSection
        title={t('2.title', { fallback: 'The Boldness Advantage' })}
      >
        <Text size="base">
          {t('2.0', {
            fallback:
              'Brands that win aren’t the ones who “fit in” — they’re the ones who',
          })}{' '}
        </Text>
        <div className="flex flex-col">
          <Text size="base">
            {t('2.list.examples', { fallback: 'Examples:' })}
          </Text>
          <List
            values={[
              <>
                <span className="font-bold">
                  {t('2.list.0.0', { fallback: 'Nike’s “Just Do It.”' })}
                </span>{' '}
                {t('2.list.0.1', {
                  fallback:
                    'It wasn’t about shoes. It was about identity, courage, and personal struggle.',
                })}
              </>,
              <>
                <span className="font-bold">
                  {t('2.list.1.0', {
                    fallback: 'Oatly’s disruptive packaging',
                  })}
                </span>{' '}
                {t('2.list.1.1', {
                  fallback:
                    'Handwritten fonts, quirky copy (“Wow no cow!”) — it broke every “rule” of serious food branding.',
                })}
              </>,
              <>
                <span className="font-bold">
                  {t('2.list.2.0', { fallback: 'Liquid Death' })}
                </span>{' '}
                {t('2.list.2.1', {
                  fallback:
                    'A water brand with a heavy metal aesthetic — and it worked, because it turned plain water into a statement.',
                })}
              </>,
            ]}
          />
        </div>
        <Text size="base">
          <span className="font-bold">
            {t('2.1.0', { fallback: 'Lesson:' })}
          </span>{' '}
          {t('2.1.1', {
            fallback:
              'Bold branding doesn’t mean shocking for the sake of shock. It means',
          })}{' '}
        </Text>
      </ArticleSection>
      <ArticleSection
        title={t('3.title', {
          fallback: 'Practical Ways to Be Bold Without Being Reckless',
        })}
      >
        <List
          type="number"
          values={[
            <>
              <span className="font-bold">
                {t('3.list.0.0', { fallback: 'Choose a stance.' })}
              </span>{' '}
              {t('3.list.0.1', {
                fallback:
                  'Stop trying to please everyone. Bold brands are clear about what they believe.',
              })}
            </>,
            <>
              <span className="font-bold">
                {t('3.list.1.0', { fallback: 'Cut the jargon.' })}
              </span>{' '}
              {t('3.list.1.1', {
                fallback:
                  'If your tagline could be copy-pasted onto any competitor, it’s worthless.',
              })}
            </>,
            <>
              <span className="font-bold">
                {t('3.list.2.0', { fallback: 'Visual risk = visual memory.' })}
              </span>{' '}
              {t('3.list.2.1', {
                fallback:
                  'Use colors, typography, and design elements that don’t look safe. That’s what makes people remember.',
              })}
            </>,
            <>
              <span className="font-bold">
                {t('3.list.3.0', { fallback: 'Say it sharper.' })}
              </span>{' '}
              {t('3.list.3.1', {
                fallback:
                  'Instead of “Our app helps you save time,” try: “Stop wasting hours — cut them in half with one click.”',
              })}
            </>,
            <>
              <span className="font-bold">
                {t('3.list.4.0', { fallback: 'Be consistent.' })}
              </span>{' '}
              {t('3.list.4.1', {
                fallback:
                  'Boldness only works when it’s carried across every touchpoint — ads, packaging, emails, even error pages.',
              })}
            </>,
          ]}
        />
      </ArticleSection>
      <ArticleSection
        title={t('4.title', {
          fallback: 'The Cost of Forgettable Branding',
        })}
      >
        <div className="flex flex-col">
          <Text size="base">
            {t('4.0', {
              fallback:
                'A “safe” brand can survive — but it will never lead. It will always fight for scraps of attention, needing higher ad spend to stay visible.',
            })}
          </Text>
          <Text size="base">
            {t('4.1.0', { fallback: 'Bold brands, by contrast,' })}{' '}
            <span className="font-bold">
              {t('4.1.1', { fallback: 'earn memory.' })}
            </span>
          </Text>
        </div>
        <Text size="base">
          {t('4.2', {
            fallback:
              'They cut acquisition costs because people actually recognize them.',
          })}
        </Text>
        <Text size="base">
          {t('4.3', {
            fallback:
              'They build loyalty because customers buy into the attitude, not just the product.',
          })}
        </Text>
      </ArticleSection>
      <ArticleSection title={t('5.title', { fallback: 'Final Thought' })}>
        <Text size="base">
          {t('5.0', {
            fallback:
              'In marketing, blending in is the riskiest move you can make.',
          })}
        </Text>
        <Text size="base">
          {t('5.1', {
            fallback:
              'Safe feels secure, but it kills momentum. Bold feels dangerous, but it',
          })}
        </Text>
        <Text size="base" weight={700}>
          {t('5.2', {
            fallback: 'Be remembered, or be ignored. The choice is yours!',
          })}
        </Text>
      </ArticleSection>
    </ArticleLayout>
  );
};
