'use client';

import { useTranslations } from 'next-intl';

import { List } from '@/shared/ui/kit/list';
import { Text } from '@/shared/ui/kit/text';

import { ArticleLayout } from './article-layout';
import { ArticleSection } from './article-section';

export const PpcTweaksArticle = () => {
  const t = useTranslations('articles.ppcTweaks');

  return (
    <ArticleLayout>
      <ArticleSection title={t('0.title', { fallback: 'The Situation' })}>
        <Text size="base">
          {t('0.0.0', {
            fallback:
              'A SaaS client came to us with a painful problem: They were spending',
          })}{' '}
          <span className="font-bold">
            {t('0.0.1', { fallback: '$65,000/month' })}
          </span>{' '}
          {t('0.0.2', {
            fallback:
              'on Google Ads and Meta campaigns, but the ROI wasn’t adding up. Leads were coming in, but the cost per acquisition (CPA) was spiraling out of control.',
          })}
        </Text>
        <Text size="base">
          {t('0.1.0', {
            fallback: 'Instead of “more budget, more clicks,” we decided to',
          })}{' '}
          <span className="font-bold">
            {t('0.1.1', { fallback: 'audit and optimize' })}
          </span>{' '}
          {t('0.1.2', {
            fallback: 'ruthlessly. Within 90 days, five tactical changes saved',
          })}{' '}
          <span className="font-bold">
            {t('0.1.3', { fallback: '$42,000' })}
          </span>{' '}
          {t('0.1.4', { fallback: 'without hurting lead flow.' })}
        </Text>
      </ArticleSection>
      <ArticleSection
        title={t('1.title', {
          fallback: 'Tweak #1 — Kill the Zombie Keywords',
        })}
      >
        <Text size="base">
          {t('1.0.0', {
            fallback:
              'We found dozens of keywords that were eating budget but driving zero',
          })}
          <br />
          {t('1.0.1', { fallback: 'Examples included:' })}
        </Text>
        <List
          values={[
            t('1.list.0', { fallback: 'Broad terms like “software tools”' }),
            t('1.list.1', {
              fallback: 'High-cost competitors with no realistic conversion',
            }),
            t('1.list.2', {
              fallback: 'Irrelevant long-tails triggered by sloppy match types',
            }),
          ]}
        />
        <Text size="base">
          {t('1.1.0', {
            fallback:
              'By pausing 17 underperforming keywords and tightening match types, we',
          })}{' '}
          <span className="font-bold">
            {t('1.1.1', { fallback: '$12,000/month.' })}
          </span>{' '}
        </Text>
        <Text size="base">
          <span className="font-bold">
            {t('1.2.0', { fallback: 'Action tip:' })}
          </span>{' '}
          {t('1.2.1', {
            fallback:
              'Audit your keyword report weekly. If it hasn’t been converted in 90 days and has high spend, kill it.',
          })}
        </Text>
      </ArticleSection>
      <ArticleSection title="Tweak #2 — Tighten Geo-Targeting">
        <Text size="base">
          {t('2.0.0', {
            fallback:
              'The client was running campaigns globally, but 73% of conversions came from just',
          })}{' '}
          <span className="font-bold">
            {t('2.0.1', { fallback: '3 countries' })}
          </span>
          .{' '}
          {t('2.0.2', {
            fallback:
              'We reallocated the budget to those markets, while excluding low-value',
          })}
        </Text>
        <Text size="base">
          {t('2.1.0', {
            fallback:
              'Result → CTR improved by 22%, CPA dropped by 19%. Monthly savings:',
          })}{' '}
          <span className="font-bold">$8,000</span>.
        </Text>
        <Text size="base">
          <span className="font-bold">
            {t('2.2.0', { fallback: 'Action tip:' })}
          </span>{' '}
          {t('2.2.1', {
            fallback:
              'If you don’t need global reach, don’t pay for it. Focus on where your best customers actually live.',
          })}
        </Text>
      </ArticleSection>
      <ArticleSection
        title={t('3.title', {
          fallback: 'Tweak #3 — Stop Overpaying for Top Position',
        })}
      >
        <Text size="base">
          {t('3.0.0', {
            fallback:
              'The client was obsessed with ranking #1 on Google Search. The problem?',
          })}
          <br />
          {t('3.0.1', {
            fallback:
              'Top placement cost 35–40% more per click, but position #2 or #3',
          })}
          <br />
          {t('3.0.2', {
            fallback:
              'We shifted the bidding strategy from “Maximize Position” to “Target',
          })}
        </Text>
        <Text size="base">
          {t('3.1.0', {
            fallback: 'Result → CPC dropped by 28%, and we saved',
          })}{' '}
          <span className="font-bold">$11,000</span>{' '}
          {t('3.1.1', { fallback: 'in the first month.' })}
        </Text>
        <Text size="base">
          <span className="font-bold">
            {t('3.2.0', { fallback: 'Action tip:' })}
          </span>{' '}
          {t('3.2.1', {
            fallback:
              'Position #1 is ego. Position #2 can be profitable. Test it.',
          })}
        </Text>
      </ArticleSection>
      <ArticleSection
        title={t('4.title', {
          fallback: 'Tweak #4 — Ad Copy Stress-Test',
        })}
      >
        <Text size="base">
          {t('4.0.0', {
            fallback:
              'Most ads had been running unchanged for 9+ months. Click-through rates were stagnant. We A/B tested 6 new ad variations with sharper hooks:',
          })}
        </Text>
        <List
          values={[
            t('4.list.0', { fallback: 'Old: “Get the Best Software Today”' }),
            t('4.list.1', {
              fallback: 'New: “Cut Costs 32% With Smarter Software”',
            }),
          ]}
        />
        <Text size="base">
          {t('4.1.0', {
            fallback:
              'Result → CTR lifted by 34%, Quality Score improved, CPC decreased by',
          })}{' '}
          {t('4.1.1', { fallback: 'Savings:' })}{' '}
          <span className="font-bold">
            {t('4.1.2', { fallback: '$6,000/month.' })}
          </span>
        </Text>
        <Text size="base">
          <span className="font-bold">
            {t('4.2.0', { fallback: 'Action tip:' })}
          </span>{' '}
          {t('4.2.1', {
            fallback:
              'Never let ad copy go stale. Rotate every 6–8 weeks to protect Quality Score.',
          })}
        </Text>
      </ArticleSection>
      <ArticleSection
        title={t('5.title', {
          fallback: 'Tweak #5 — Retarget Smarter, Not Harder',
        })}
      >
        <Text size="base">
          {t('5.0.0', {
            fallback:
              'The client was blasting retargeting ads to everyone who visited their site, regardless of intent.',
          })}
        </Text>
        <div className="flex flex-col">
          <Text size="base">{t('5.1', { fallback: 'We segmented:' })}</Text>
          <List
            values={[
              <>
                <span className="font-bold">
                  {t('5.list.0.0', { fallback: 'Hot leads' })}
                </span>{' '}
                —{' '}
                {t('5.list.0.1', {
                  fallback:
                    'cart abandoners, pricing page visitors → full retarget budget.',
                })}
              </>,
              <>
                <span className="font-bold">
                  {t('5.list.1.0', { fallback: 'Cold visitors' })}
                </span>{' '}
                —{' '}
                {t('5.list.1.1', {
                  fallback:
                    'blog readers, bounced users → capped frequency + smaller budget.',
                })}
              </>,
            ]}
          />
        </div>
        <Text size="base">
          {t('5.2', {
            fallback:
              'Result → retargeting CPA dropped 40%, with $5,000 in monthly savings.',
          })}
        </Text>
        <Text size="base">
          <span className="font-bold">
            {t('5.3.0', { fallback: 'Action tip:' })}
          </span>{' '}
          {t('5.3.1', {
            fallback:
              'Treat retargeting audiences differently. Not all visitors deserve the same spend.',
          })}
        </Text>
      </ArticleSection>
      <ArticleSection
        title={t('6.title', { fallback: 'The Numbers After 90 Days' })}
      >
        <List
          values={[
            <>
              <span className="font-bold">
                {t('6.list.0.0', { fallback: 'Ad spend saved:' })}
              </span>{' '}
              $42,000
            </>,
            <>
              <span className="font-bold">
                {t('6.list.1.0', { fallback: 'CPA reduced:' })}
              </span>{' '}
              –31%
            </>,
            <>
              <span className="font-bold">
                {t('6.list.2.0', { fallback: 'Lead volume:' })}
              </span>{' '}
              {t('6.list.2.1', { fallback: 'steady (no drop despite cuts)' })}
            </>,
            <>
              <span className="font-bold">
                {t('6.list.3.0', { fallback: 'Quality Score:' })}
              </span>{' '}
              {t('6.list.3.1', {
                fallback: 'improved across 80% of ad groups',
              })}
            </>,
          ]}
        />
      </ArticleSection>
      <ArticleSection
        title={t('7.title', { fallback: 'Takeaways You Can Apply Today' })}
      >
        <List
          values={[
            t('7.list.0', {
              fallback: 'Audit and pause keywords that don’t convert.',
            }),
            t('7.list.1', {
              fallback: 'Narrow geo-targeting to your top-performing regions.',
            }),
            t('7.list.2', {
              fallback: 'Don’t overpay for position #1 — test smarter bidding.',
            }),
            t('7.list.3', {
              fallback: 'Keep ad copy fresh to protect CTR and Quality Score.',
            }),
            t('7.list.4', {
              fallback: 'Retarget based on intent, not just visits.',
            }),
          ]}
        />
        <Text size="base">
          <span className="font-bold">
            {t('7.0.0', { fallback: 'Final Thought:' })}
          </span>{' '}
          <br />
          {t('7.0.1', {
            fallback:
              'PPC waste hides in plain sight. With a few sharp tweaks, you can save thousands — and reinvest into the channels and audiences that actually drive growth.',
          })}
        </Text>
      </ArticleSection>
    </ArticleLayout>
  );
};
