'use client';

import { useTranslations } from 'next-intl';

import { List } from '@/shared/ui/kit/list';
import { Text } from '@/shared/ui/kit/text';

import { ArticleLayout } from './article-layout';
import { ArticleSection } from './article-section';

export const HowWeTurnedArticle = () => {
  const t = useTranslations('articles.howWeTurned');

  return (
    <ArticleLayout>
      <ArticleSection title="The Channels That Actually Moved the Needle">
        <Text size="base">
          {t('0.0.0', {
            fallback:
              'One of the first lessons: not every platform deserves your money. At',
          })}
          <span className="font-bold">
            {t('0.0.1', {
              fallback:
                'Google Search, Display, Meta (Facebook/Instagram), and TikTok Ads.',
            })}
          </span>{' '}
          <br />
          {t('0.0.2', {
            fallback: 'Here’s what we found after a 3-week controlled test:',
          })}
          <br />
        </Text>
        <List
          values={[
            <>
              <span className="font-bold">Google Display</span> →{' '}
              {t('0.list.0', {
                fallback:
                  '82% of spend, but almost zero conversions. The impressions looked impressive, but the audience quality was poor.',
              })}
            </>,
            <>
              <span className="font-bold">Meta Ads</span> →{' '}
              {t('0.list.1', {
                fallback:
                  'modest spend, but high CTR (1.9%) and low CPA compared to benchmarks.',
              })}
            </>,
            <>
              <span className="font-bold">TikTok Ads</span> →{' '}
              {t('0.list.2', {
                fallback:
                  'cheaper CPMs, huge reach, but conversions weren’t cost-effective without creative adaptation.',
              })}
            </>,
            <>
              <span className="font-bold">Google Search</span> →{' '}
              {t('0.list.3', {
                fallback:
                  'the quiet winner. Purchase-intent keywords showed a 3.2% conversion rate with minimal optimization.',
              })}
            </>,
          ]}
        />
        <Text size="base">
          <span className="font-bold">
            {t('0.1.0', { fallback: 'Key takeaway:' })}
          </span>{' '}
          {t('0.1.1', {
            fallback:
              'the problem wasn’t the product — it was budget allocation. 62% of the',
          })}
        </Text>
      </ArticleSection>
      <ArticleSection
        title={t('1.title', {
          fallback: 'Creative That Converts, Not Just Impresses',
        })}
      >
        <Text size="base">
          {t('1.0.0', {
            fallback:
              'Ad fatigue was killing performance. The brand had been recycling the same creative for months — polished product shots, generic slogans like “Shop the Collection,” and zero storytelling.',
          })}
          <br />
          {t('1.0.1', {
            fallback: 'We tested',
          })}{' '}
          <span className="font-bold">
            {t('1.0.2', {
              fallback: '12 new ad variations',
            })}
          </span>{' '}
          {t('1.0.3', {
            fallback:
              'with micro-messaging angles, each focused on a different conversion driver:',
          })}
        </Text>
        <List
          values={[
            <>
              <span className="font-bold">
                {t('1.list.0.0', { fallback: 'Scarcity' })}
              </span>{' '}
              {t('1.list.0.1', {
                fallback: '(“Only 12 left in stock”) — CTR +1.2%',
              })}
            </>,
            <>
              <span className="font-bold">
                {t('1.list.1.0', { fallback: 'Social proof' })}
              </span>{' '}
              {t('1.list.1.1', {
                fallback: '(“Over 20,000 happy customers”) — CTR +2.7%',
              })}
            </>,
            <>
              <span className="font-bold">
                {t('1.list.2.0', { fallback: 'Problem/Solution' })}
              </span>{' '}
              {t('1.list.2.1', {
                fallback: '(“Stop wasting time on X. Here’s Y.”) — CTR +3.5%',
              })}
            </>,
            <>
              <span className="font-bold">
                {t('1.list.3.0', { fallback: 'Urgency + Offer' })}
              </span>{' '}
              {t('1.list.3.1', {
                fallback:
                  '(“Order in the next 24h for free shipping”) — best performer with a 4.1% CTR',
              })}
            </>,
          ]}
        />
        <Text size="base">
          {t('1.1.0', {
            fallback:
              'The creative that looked the least polished (UGC-style videos shot on iPhone, authentic voiceovers) outperformed studio-perfect visuals by',
          })}{' '}
          <span className="font-bold">
            {t('1.1.1', {
              fallback: 'over 250% in ROAS.',
            })}
          </span>
        </Text>
        <Text size="base">
          <span className="font-bold">
            {t('1.2.0', { fallback: 'Key takeaway:' })}
          </span>{' '}
          {t('1.2.1', {
            fallback:
              'polish doesn’t sell, relevance does. People don’t want brand theater — they want real voices.',
          })}
        </Text>
      </ArticleSection>
      <ArticleSection
        title={t('2.title', {
          fallback: 'Conversion Rate Optimization: The Silent Multiplier',
        })}
      >
        <Text size="base">
          {t('2.0.0', {
            fallback:
              'The website was the real bottleneck. We didn’t redesign the whole',
          })}{' '}
          <span className="font-bold">
            {t('2.0.1', {
              fallback: '3 friction points',
            })}
          </span>{' '}
          {t('2.0.2', {
            fallback: 'and fixed them fast:',
          })}
        </Text>
        <List
          type="number"
          values={[
            <>
              <span className="font-bold">
                {t('2.list.0.0', { fallback: 'Checkout flow' })}
              </span>{' '}
              —{' '}
              {t('2.list.0.1', {
                fallback:
                  '24% of users dropped after adding to cart. The culprit? A mandatory account creation step. We added a “Checkout as Guest” option → cart abandonment dropped by 38%.',
              })}
            </>,
            <>
              <span className="font-bold">
                {t('2.list.1.0', { fallback: 'Product page clarity' })}
              </span>{' '}
              —{' '}
              {t('2.list.1.1', {
                fallback:
                  'specs buried below the fold. We moved key info (sizes, delivery times, returns policy) above the fold → time on page +47%.',
              })}
            </>,
            <>
              <span className="font-bold">
                {t('2.list.2.0', { fallback: 'Speed' })}
              </span>{' '}
              —{' '}
              {t('2.list.2.1', {
                fallback:
                  'mobile load times were 5.7s. After image compression + lazy loading, we cut it to 2.1s → bounce rate dropped by 29%.',
              })}
            </>,
          ]}
        />
        <Text size="base">
          {t('2.3.0', {
            fallback:
              'The cumulative effect? Conversion rate went from 1.3% to 3.6% in under 2 months.',
          })}
          <br />
          <span className="font-bold">
            {t('2.3.1', { fallback: 'Key takeaway:' })}
          </span>{' '}
          {t('2.3.2', {
            fallback:
              'CRO is not about flashy redesigns. It’s about removing friction, step by step.',
          })}
        </Text>
      </ArticleSection>
      <ArticleSection
        title={t('3.title', {
          fallback: 'Retention and LTV: Where the Real Growth Hid',
        })}
      >
        <Text size="base">
          {t('3.0.0', {
            fallback:
              'The client had been obsessed with new customer acquisition, but',
          })}{' '}
          <span className="font-bold">
            {t('3.0.1', {
              fallback: 'repeat purchase potential',
            })}
          </span>
          .{' '}
          {t('3.0.2', {
            fallback: 'We launched',
          })}
          <span className="font-bold">
            {t('3.0.3', {
              fallback: '3-touch email flow:',
            })}
          </span>
        </Text>
        <List
          values={[
            <>
              <span className="font-bold">
                {t('3.list.0.0', { fallback: 'Welcome flow' })}
              </span>{' '}
              {t('3.list.0.1', {
                fallback:
                  '(Day 0–3): personalized brand intro + product education → 42% open rate.',
              })}
            </>,
            <>
              <span className="font-bold">
                {t('3.list.1.0', { fallback: 'Reactivation flow' })}
              </span>{' '}
              {t('3.list.1.1', {
                fallback:
                  '(Day 14): “Still thinking?” + small discount → 18% recovery of abandoned carts.',
              })}
            </>,
            <>
              <span className="font-bold">
                {t('3.list.2.0', { fallback: 'Loyalty flow' })}
              </span>{' '}
              {t('3.list.2.1', {
                fallback:
                  '(Day 30): “VIP Access” early product drops → 27% repeat purchase rate in first 60 days.',
              })}
            </>,
          ]}
        />
        <Text size="base">
          {t('3.1.0', {
            fallback:
              'This alone boosted Customer Lifetime Value (LTV) by 34% in the 4-month',
          })}
        </Text>
        <Text size="base">
          <span className="font-bold">
            {t('3.2.0', { fallback: 'Key takeaway:' })}
          </span>{' '}
          {t('3.2.1', {
            fallback:
              'profit isn’t in the first sale. Sustainable growth comes from turning one-time buyers into repeat customers.',
          })}
        </Text>
      </ArticleSection>
      <ArticleSection
        title={t('4.title', {
          fallback: 'The Numbers After 4 Months',
        })}
      >
        <List
          values={[
            <>
              <span className="font-bold">
                {t('4.list.0.0', { fallback: 'Revenue' })}
              </span>{' '}
              →{' '}
              {t('4.list.0.1', {
                fallback: '+167% increase compared to the plateau baseline.',
              })}
            </>,
            <>
              <span className="font-bold">
                {t('4.list.1.0', { fallback: 'ROAS' })}
              </span>{' '}
              →
              {t('4.list.1.1', {
                fallback: 'improved from 1.8x to 4.2x.',
              })}
            </>,
            <>
              <span className="font-bold">
                {t('4.list.2.0', { fallback: 'CPA' })}
              </span>{' '}
              →{' '}
              {t('4.list.2.1', {
                fallback: 'dropped by 37%.',
              })}
            </>,
            <>
              <span className="font-bold">
                {t('4.list.3.0', { fallback: 'Conversion rate' })}
              </span>{' '}
              →{' '}
              {t('4.list.3.1', {
                fallback: 'improved 2.3x after CRO fixes.',
              })}
            </>,
            <>
              <span className="font-bold">
                {t('4.list.4.0', { fallback: 'Repeat purchases' })}
              </span>{' '}
              →{' '}
              {t('4.list.4.1', {
                fallback: 'up 34%.',
              })}
            </>,
          ]}
        />
      </ArticleSection>
      <ArticleSection
        title={t('5.title', {
          fallback: 'Lessons for Any E-commerce Brand',
        })}
      >
        <List
          type="number"
          values={[
            <>
              <span className="font-bold">
                {t('5.list.0.0', { fallback: 'Cut dead weight channels.' })}
              </span>{' '}
              {t('5.list.0.1', {
                fallback:
                  'Don’t spread thin — double down where the ROI lives.',
              })}
            </>,
            <>
              <span className="font-bold">
                {t('5.list.1.0', { fallback: 'Test raw creative.' })}
              </span>{' '}
              {t('5.list.1.1', {
                fallback: 'Authenticity beats polish 9 out of 10 times.',
              })}
            </>,
            <>
              <span className="font-bold">
                {t('5.list.2.0', {
                  fallback: 'Fix the funnel before scaling ads.',
                })}
              </span>{' '}
              {t('5.list.2.1', {
                fallback: 'CRO multipliers make ad spend worth it.',
              })}
            </>,
            <>
              <span className="font-bold">
                {t('5.list.3.0', { fallback: 'Retention is growth fuel.' })}
              </span>{' '}
              {t('5.list.3.1', {
                fallback:
                  'Email automation is still one of the highest ROI moves you can make.',
              })}
            </>,
            <>
              <span className="font-bold">
                {t('5.list.4.0', { fallback: 'Growth isn’t magic.' })}
              </span>{' '}
              {t('5.list.4.1', {
                fallback:
                  'It’s structured testing, ruthless optimization, and reallocation of resources.',
              })}
            </>,
          ]}
        />
        <Text size="base">
          <span className="font-bold">
            {t('5.2.0', { fallback: 'Final thought:' })}
          </span>{' '}
          {t('5.2.1', {
            fallback:
              'Growth doesn’t come from working harder — it comes from working smarter, cutting the noise, and focusing on the few levers that really move the needle.',
          })}
        </Text>
      </ArticleSection>
    </ArticleLayout>
  );
};
