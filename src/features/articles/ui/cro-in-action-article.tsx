'use client';

import { useTranslations } from 'next-intl';

import { List } from '@/shared/ui/kit/list';
import { Text } from '@/shared/ui/kit/text';

import { ArticleLayout } from './article-layout';
import { ArticleSection } from './article-section';

export const CroInActionArticle = () => {
  const t = useTranslations('articles.croInAction');

  return (
    <ArticleLayout>
      <ArticleSection title={t('0.title', { fallback: 'The Situation' })}>
        <Text size="base">
          {t('0.0.0', {
            fallback:
              'A mid-sized online retailer came to us frustrated. They had steady traffic from ads and organic search, but sales weren’t matching the effort. The data told a clear story: lots of visitors, too few buyers.',
          })}
        </Text>
        <Text size="base">
          {t('0.0.1.0', {
            fallback: 'Instead of throwing more money into ads, we decided to',
          })}{' '}
          <span className="font-bold">
            {t('0.0.1.1', {
              fallback: 'turn the website itself into a conversion machine',
            })}
          </span>
          .
        </Text>
      </ArticleSection>
      <ArticleSection
        title={t('1.title', {
          fallback: 'Step 1 — Headlines That Speak to People, Not Algorithms',
        })}
      >
        <Text size="base">
          {t('1.0.0', {
            fallback:
              'The original product pages used generic headers like “Our Best Collection Yet.”',
          })}
          <br />
          {t('1.0.1', {
            fallback: 'After surveying customers, we rewrote them to highlight',
          })}{' '}
          <span className="font-bold">
            {t('1.0.2', {
              fallback: 'value and urgency',
            })}
          </span>
        </Text>
        <List
          values={[
            t('1.list.0', {
              fallback: 'Old: “New Summer Collection”',
            }),
            t('1.list.1', {
              fallback:
                'New: “Stay Cool This Summer — Limited Stock, Ships in 24h”',
            }),
          ]}
        />
        <Text size="base">
          {t('1.1.0', {
            fallback:
              'Result → Bounce rate dropped by 19%, add-to-cart clicks up by 27%.',
          })}
        </Text>
        <Text size="base">
          <span className="font-bold">
            {t('1.1.1', { fallback: 'Insight:' })}
          </span>{' '}
          {t('1.1.2', {
            fallback:
              'Customers don’t want poetry, they want clarity + a reason to act now.',
          })}
        </Text>
      </ArticleSection>
      <ArticleSection title="Step 2 — The Button That Changed Everything">
        <Text size="base">
          {t('2.0.0', {
            fallback:
              'Their CTA button said: “Buy Now”. It blended with the rest of the design — gray text on a pale background.',
          })}
        </Text>
        <Text size="base">
          {t('2.0.1', { fallback: 'We tested two changes:' })}
        </Text>
        <List
          type="number"
          values={[
            <>
              <span className="font-bold">
                {t('2.list.0.0', { fallback: 'Color contrast' })}
              </span>{' '}
              →{' '}
              {t('2.list.0.1', {
                fallback: 'switched to a bold orange that stood out.',
              })}
            </>,
            <>
              <span className="font-bold">
                {t('2.list.1.0', { fallback: 'Copy tweak' })}
              </span>{' '}
              →{' '}
              {t('2.list.1.1', {
                fallback: 'from “Buy Now” to “Get Yours Today.”',
              })}
            </>,
          ]}
        />
        <Text size="base">
          {t('2.1', {
            fallback:
              'Result → CTR on the button increased by 46%, and completed purchases rose by 21% within 3 weeks.',
          })}
        </Text>
        <Text size="base">
          <span className="font-bold">
            {t('2.2.0', { fallback: 'Insight:' })}
          </span>{' '}
          {t('2.2.1', {
            fallback:
              'Small visual and copy tweaks can outperform massive redesigns.',
          })}
        </Text>
      </ArticleSection>
      <ArticleSection
        title={t('3.title', {
          fallback: 'Step 3 — Trust Signals at the Right Place',
        })}
      >
        <Text size="base">
          {t('3.0', {
            fallback:
              'Most reviews and guarantees were buried at the bottom of the page. We moved them directly under the “Add to Cart” button.',
          })}
        </Text>
        <Text size="base">
          {t('3.1.0', {
            fallback: 'Result → Conversion rate went from 2.1% to 3.8%.',
          })}
          <br />
          {t('3.1.1.0', {
            fallback: 'That’s an extra',
          })}{' '}
          <span className="font-bold">
            {t('3.1.1.1', {
              fallback: '$72,000 in revenue',
            })}
          </span>{' '}
          {t('3.1.1.2', {
            fallback: 'in just 2 months — without increasing traffic.',
          })}
        </Text>
        <Text size="base">
          <span className="font-bold">
            {t('3.2.0', { fallback: 'Insight:' })}
          </span>{' '}
          {t('3.2.1', {
            fallback:
              'People don’t read — they scan. The right placement makes trust signals stick.',
          })}
        </Text>
      </ArticleSection>
      <ArticleSection
        title={t('4.title', {
          fallback: 'Step 4 — Mobile First, Always',
        })}
      >
        <Text size="base">
          {t('4.0', {
            fallback:
              '70% of the store’s traffic was mobile, but forms were clunky. We simplified checkout from 5 steps → 3 steps, added auto-fill, and improved load speed (4.9s → 2.2s).',
          })}
        </Text>
        <Text size="base">
          {t('4.1', {
            fallback: 'Result → Mobile conversions jumped by 62%.',
          })}
        </Text>
        <Text size="base">
          <span className="font-bold">
            {t('4.2.0', { fallback: 'Insight:' })}
          </span>{' '}
          {t('4.2.1', {
            fallback:
              'Mobile isn’t “secondary.” For most e-com brands, it is the main store.',
          })}
        </Text>
      </ArticleSection>
      <ArticleSection
        title={t('5.title', {
          fallback: 'The Numbers After 60 Days',
        })}
      >
        <List
          values={[
            t('5.list.0', {
              fallback: 'Conversion rate → from 2.1% to 4.2% (+100%)',
            }),
            t('5.list.1', {
              fallback: 'Revenue increase → +$120,000 without extra ad spend',
            }),
            t('5.list.2', { fallback: 'Checkout abandonment → down 35%' }),
            t('5.list.3', { fallback: 'Mobile conversions → up 62%' }),
          ]}
        />
      </ArticleSection>
      <ArticleSection
        title={t('6.title', {
          fallback: 'Takeaways You Can Apply Today',
        })}
      >
        <List
          values={[
            t('6.list.0', {
              fallback: 'Rewrite headlines to highlight benefit + urgency.',
            }),
            t('6.list.1', {
              fallback:
                'Make your CTA button impossible to ignore — visually and verbally.',
            }),
            t('6.list.2', {
              fallback: 'Place trust signals exactly where hesitation happens.',
            }),
            t('6.list.3', {
              fallback: 'Cut checkout friction, especially on mobile.',
            }),
          ]}
        />
        <Text size="base">
          <span className="font-bold">
            {t('6.0.0', { fallback: 'Final Thought:' })}
          </span>{' '}
          <br />
          {t('6.0.1', {
            fallback:
              'In CRO, small changes are often the big wins. You don’t always need a full redesign. Sometimes, the difference between mediocre and outstanding results is as simple as a button color or a headline rewrite.',
          })}
        </Text>
      </ArticleSection>
    </ArticleLayout>
  );
};
