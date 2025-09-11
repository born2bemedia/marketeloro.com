import { getTranslations } from 'next-intl/server';

import { PageHero } from '@/shared/ui/components/page-hero';
import { ArrowRightIcon } from '@/shared/ui/icons/arrow-right';

import { PackageSection } from './components';

export default async function TailoredPlans() {
  const t = await getTranslations('tailoredPlans');

  return (
    <main>
      <PageHero
        imgUrl="/images/tailored-plans/hero.jpg"
        title={t('hero.title', {
          fallback: 'Go Bigger, Starting Right Where You Are',
        })}
        description={
          <>
            {t('hero.description.0', {
              fallback:
                'Every brand has a story. Some are just starting the first chapter. Others are already turning the page to something bigger. ',
            })}
            <br />
            <br />
            {t('hero.description.1', {
              fallback:
                "Whether you're starting out or moving forward, our custom-made plans are here to propel you toward your next bold action, with strategic thinking, creativity, and execution tailored to you.",
            })}
            <br />
            {t('hero.description.2', {
              fallback: 'Explore the path that fits your growth stage best!',
            })}
          </>
        }
      />
      <PackageSection
        title={t('starterPlan.title', {
          fallback: 'Starter Plan',
        })}
        text={t('starterPlan.text', {
          fallback:
            'Best for early-stage brands looking to launch with clarity and consistency',
        })}
        data={{
          included: [
            t('starterPlan.included.0', {
              fallback: 'Marketing Strategy Development',
            }),
            t('starterPlan.included.1', {
              fallback: 'Brand Positioning & Messaging',
            }),
            t('starterPlan.included.2', {
              fallback: 'Social Media Management',
            }),
            t('starterPlan.included.3', {
              fallback:
                'Content Creation for Social Media (posts, stories, reels)',
            }),
            t('starterPlan.included.4', {
              fallback: 'Copywriting & Storytelling',
            }),
            t('starterPlan.included.5', {
              fallback: 'Email Marketing Campaigns',
            }),
            t('starterPlan.included.6', {
              fallback: 'Social Media Audit & Optimization',
            }),
          ],
          bonus: [
            t('starterPlan.bonus.0', {
              fallback: '1 Landing Page Creation & Optimization',
            }),
            t('starterPlan.bonus.1', {
              fallback: 'Basic Competitive Analysis',
            }),
          ],
          startPrice: '9560,00',
        }}
      />
      <PackageSection
        title={t('growthPlan.title', {
          fallback: 'Growth Plan',
        })}
        text={t('growthPlan.text', {
          fallback:
            'Designed for growing brands seeking multi-channel expansion and measurable ROI',
        })}
        data={{
          included: [
            t('growthPlan.included.0', {
              fallback: 'Marketing Strategy Development',
            }),
            t('growthPlan.included.1', {
              fallback:
                'Social Media Advertising (Meta Ads, TikTok Ads, LinkedIn Ads)',
            }),
            t('growthPlan.included.2', {
              fallback: 'Pay-Per-Click Advertising (Google Ads, Bing Ads)',
            }),
            t('growthPlan.included.3', {
              fallback: 'SEO (Search Engine Optimization)',
            }),
            t('growthPlan.included.4', {
              fallback: 'Campaign Planning & Roadmapping',
            }),
            t('growthPlan.included.5', {
              fallback: 'Influencer Marketing & Partnerships',
            }),
            t('growthPlan.included.6', {
              fallback: 'Marketing Automation',
            }),
            t('growthPlan.included.7', {
              fallback: 'Content Marketing Strategy',
            }),
            t('growthPlan.included.8', {
              fallback: 'Blog & Article Writing',
            }),
            t('growthPlan.included.9', {
              fallback: 'Email Marketing Campaigns',
            }),
            t('growthPlan.included.10', {
              fallback: 'Social Media Management',
            }),
            t('growthPlan.included.11', {
              fallback: 'Video Production (short-form, ads, brand videos)',
            }),
            t('growthPlan.included.12', {
              fallback: 'Graphic Design & Visual Branding',
            }),
          ],
          bonus: [
            t('growthPlan.bonus.0', {
              fallback: 'Conversion Rate Optimization (CRO)',
            }),
            t('growthPlan.bonus.1', {
              fallback: 'Social Media Audit & Optimization',
            }),
            t('growthPlan.bonus.2', {
              fallback: 'Retargeting & Remarketing Campaigns',
            }),
          ],
          startPrice: '12390,00',
        }}
      />
      <PackageSection
        title={t('enterprisePlan.title', {
          fallback: 'Enterprise Plan',
        })}
        text={t('enterprisePlan.text', {
          fallback:
            'Full-service support for established brands aiming for bold market leadership',
        })}
        data={{
          included: [
            t('enterprisePlan.included.0', {
              fallback: 'Marketing Strategy Development',
            }),
            t('enterprisePlan.included.1', {
              fallback: 'Market Research & Consumer Insights',
            }),
            t('enterprisePlan.included.2', {
              fallback: 'Go-to-Market Strategy',
            }),
            t('enterprisePlan.included.3', {
              fallback:
                'Brand Identity Development (logo, color palette, typography)',
            }),
            t('enterprisePlan.included.4', {
              fallback: 'Website Design & Development',
            }),
            t('enterprisePlan.included.5', {
              fallback: 'UX/UI Design for Digital Campaigns',
            }),
            t('enterprisePlan.included.6', {
              fallback: 'Creative Direction',
            }),
            t('enterprisePlan.included.7', {
              fallback: 'Brand Guidelines Creation',
            }),
          ],
          bonus: [
            t('enterprisePlan.bonus.0', {
              fallback: 'Rebranding Services',
            }),
            t('enterprisePlan.bonus.1', {
              fallback: 'E-commerce Marketing Strategy',
            }),
            t('enterprisePlan.bonus.2', {
              fallback: 'Visual Campaign Concepts',
            }),
            t('enterprisePlan.bonus.3', {
              fallback:
                'Content creation for social media (Posts, stories, reels)',
            }),
            t('enterprisePlan.bonus.4', {
              fallback: 'Paid Social Media Campaigns',
            }),
            t('enterprisePlan.bonus.5', {
              fallback: 'Retargeting & Remarketing Campaigns',
            }),
            t('enterprisePlan.bonus.6', {
              fallback: 'Video Production (Short-form, ads, brand videos)',
            }),
            t('enterprisePlan.bonus.7', {
              fallback: 'Email Marketing campaigns',
            }),
            t('enterprisePlan.bonus.8', {
              fallback: 'Search engine optimization (SEO)',
            }),
          ],
          startPrice: '15800,00',
        }}
        variant="secondary"
      />
      <PageHero
        imgUrl="/images/tailored-plans/plans.jpg"
        title={t('footer.title', {
          fallback: 'Need help choosing the right plan?',
        })}
        description={t('footer.description', {
          fallback: 'We’ll match your goals with the strategy that delivers.',
        })}
        metaButtons={[
          {
            text: t('footer.contactUs', {
              fallback: 'Contact us',
            }),
            href: '/contact-us',
            variant: 'secondary',
            icon: ArrowRightIcon,
          },
        ]}
        className="mb-10"
      />
    </main>
  );
}
