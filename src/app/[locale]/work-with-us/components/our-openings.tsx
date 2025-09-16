'use client';

import type { ReactNode } from 'react';
import { useTranslations } from 'next-intl';

import { List } from '@/shared/ui/kit/list';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const getJobs = (t: ReturnType<typeof useTranslations>) => [
  {
    name: t('cards.0.title', {
      fallback: 'PPC Campaign Manager',
    }),
    description: (
      <>
        {t('cards.0.description.0', {
          fallback: 'We’re looking for a',
        })}{' '}
        <span className="font-bold">
          {t('cards.0.description.1', {
            fallback: 'PPC Campaign Manager',
          })}
        </span>
        {t('cards.0.description.2', {
          fallback:
            'who knows how to turn clicks into conversions and ad spend into real growth. You’ll be',
        })}
      </>
    ),
    dailyWork: [
      t('cards.0.dailyWork.0', {
        fallback:
          'Planning, launching, and optimizing multi-channel PPC campaigns.',
      }),
      t('cards.0.dailyWork.1', {
        fallback:
          'Conducting keyword research, competitor benchmarking, and audience targeting.',
      }),
      t('cards.0.dailyWork.2', {
        fallback:
          'Testing ad copy, visuals, and landing pages to boost performance.',
      }),
      t('cards.0.dailyWork.3', {
        fallback: 'Monitoring budgets closely to maximize ROI.',
      }),
      t('cards.0.dailyWork.4', {
        fallback:
          'Delivering clear, actionable reports to both clients and internal teams.',
      }),
    ],
    weExpect: [
      t('cards.0.weExpect.0', {
        fallback:
          'Proven experience managing paid campaigns with measurable results.',
      }),
      t('cards.0.weExpect.1', {
        fallback:
          'Strong knowledge of Google Ads, Bing Ads, and analytics tools.',
      }),
      t('cards.0.weExpect.2', {
        fallback:
          'Analytical mindset with the ability to turn data into action.',
      }),
      t('cards.0.weExpect.3', {
        fallback: 'Creative problem-solving and attention to detail.',
      }),
    ],
    whatYouGet: [
      t('cards.0.whatYouGet.0', {
        fallback: 'Global clients across industries.',
      }),
      t('cards.0.whatYouGet.1', {
        fallback: 'The freedom to test and innovate.',
      }),
      t('cards.0.whatYouGet.2', {
        fallback: 'A team that values performance as much as creativity.',
      }),
    ],
  },
  {
    name: t('cards.1.title', {
      fallback: 'Graphic Designer',
    }),
    description: (
      <>
        {t('cards.1.description.0', {
          fallback:
            'At Marketeloro, design isn’t decoration — it’s strategy made visible. We’re hiring a',
        })}{' '}
        <span className="font-bold">
          {t('cards.1.description.1', {
            fallback: 'Graphic Designer',
          })}
        </span>
        {t('cards.1.description.2', {
          fallback:
            'who can transform concepts into visuals that make brands unforgettable.',
        })}
      </>
    ),
    dailyWork: [
      t('cards.1.dailyWork.0', {
        fallback:
          'Create bold, eye-catching designs for digital campaigns, social media, and web.',
      }),
      t('cards.1.dailyWork.1', {
        fallback:
          'Support branding projects — from logo design to full visual identity systems.',
      }),
      t('cards.1.dailyWork.2', {
        fallback:
          'Collaborate with copywriters, marketers, and developers to ensure cohesion.',
      }),
      t('cards.1.dailyWork.3', {
        fallback:
          'Adapt designs across formats: ads, infographics, presentations, and motion graphics.',
      }),
      t('cards.1.dailyWork.4', {
        fallback:
          'Keep up with design trends while maintaining each client’s unique identity.',
      }),
    ],
    weExpect: [
      t('cards.1.weExpect.0', {
        fallback:
          'Solid portfolio that shows creative range and branding work.',
      }),
      t('cards.1.weExpect.1', {
        fallback:
          'Proficiency in Adobe Creative Suite (Illustrator, Photoshop, InDesign, XD).',
      }),
      t('cards.1.weExpect.2', {
        fallback:
          'Knowledge of typography, color theory, and digital-first design.',
      }),
      t('cards.1.weExpect.3', {
        fallback: 'Ability to manage multiple projects and meet deadlines.',
      }),
    ],
    whatYouGet: [
      t('cards.1.whatYouGet.0', {
        fallback: 'The chance to build visuals seen by global audiences.',
      }),
      t('cards.1.whatYouGet.1', {
        fallback: 'Creative freedom within structured campaigns.',
      }),
      t('cards.1.whatYouGet.2', {
        fallback: 'A collaborative environment that values bold ideas.',
      }),
    ],
  },
  {
    name: t('cards.2.title', {
      fallback: 'Conversion Rate Optimization (CRO) Specialist',
    }),
    description: (
      <>
        {t('cards.2.description.0', {
          fallback:
            'Clicks are easy. Conversions are earned. We’re looking for a',
        })}{' '}
        <span className="font-bold">
          {t('cards.2.description.1', {
            fallback: 'CRO Specialist',
          })}
        </span>{' '}
        {t('cards.2.description.2', {
          fallback:
            'who can analyze user behavior, identify friction points, and implement data-driven changes that boost performance across websites, funnels, and landing pages.',
        })}
      </>
    ),
    dailyWork: [
      t('cards.2.dailyWork.0', {
        fallback:
          'Running A/B and multivariate tests to find winning variations.',
      }),
      t('cards.2.dailyWork.1', {
        fallback:
          'Analyzing heatmaps, session recordings, and analytics reports.',
      }),
      t('cards.2.dailyWork.2', {
        fallback:
          'Working closely with designers and developers to implement improvements.',
      }),
      t('cards.2.dailyWork.3', {
        fallback: 'Developing hypotheses and structured testing roadmaps.',
      }),
      t('cards.2.dailyWork.4', {
        fallback:
          'Reporting results and advising clients on optimization opportunities.',
      }),
    ],
    weExpect: [
      t('cards.2.weExpect.0', {
        fallback: 'Experience in CRO, analytics, or UX optimization.',
      }),
      t('cards.2.weExpect.1', {
        fallback:
          'Familiarity with tools like Google Analytics, Hotjar, Optimizely, or VWO.',
      }),
      t('cards.2.weExpect.2', {
        fallback: 'Strong understanding of digital funnels and user journeys.',
      }),
      t('cards.2.weExpect.3', {
        fallback:
          'Ability to communicate insights in simple, actionable terms.',
      }),
    ],
    whatYouGet: [
      t('cards.2.whatYouGet.0', {
        fallback:
          'Projects across industries: e-commerce, SaaS, travel, lifestyle, and more.',
      }),
      t('cards.2.whatYouGet.1', {
        fallback:
          'The opportunity to turn small changes into massive growth results.',
      }),
      t('cards.2.whatYouGet.2', {
        fallback:
          'A team culture that thrives on experimentation and improvement.',
      }),
    ],
  },
];

export const OurOpenings = () => {
  const t = useTranslations('workWithUs.ourOpenings');

  return (
    <section className="relative flex gap-10 px-10 py-[70px] max-md:flex-col max-md:px-2">
      <div className="sticky top-2 self-start max-md:relative max-md:top-0">
        <Title color="jaguar">
          {t('title.0', {
            fallback: 'Our',
          })}
          <br className="max-md:hidden" />
          {t('title.1', {
            fallback: 'Openings',
          })}
        </Title>
      </div>
      <section className="flex flex-col gap-2">
        {getJobs(t).map(job => (
          <JobCard key={job.name} {...job} />
        ))}
      </section>
    </section>
  );
};

const JobCard = ({
  name,
  description,
  dailyWork,
  weExpect,
  whatYouGet,
}: {
  name: string;
  description: ReactNode;
  dailyWork: string[];
  weExpect: string[];
  whatYouGet: string[];
}) => {
  const t = useTranslations('workWithUs.ourOpenings');

  return (
    <article className="flex flex-col gap-10 rounded-[40px] bg-[rgba(227,227,227,0.30)] p-5">
      <section className="flex flex-col">
        <Text size="4xl" weight={700}>
          {name}
        </Text>
        <Text size="base">{description}</Text>
      </section>
      <section className="flex gap-5 max-md:flex-col">
        <div className="flex w-1/2 flex-col gap-2 p-5 max-md:w-full">
          <Text size="base" color="stormGrey">
            {t('yourDailyWork', { fallback: 'Your daily work will involve:' })}
          </Text>
          <List values={dailyWork} />
        </div>
        <section className="flex w-1/2 flex-col gap-6 rounded-[40px] bg-[#030213] p-5 max-md:w-full">
          <div className="flex flex-col gap-2">
            <Text size="base" color="white" className="opacity-50">
              {t('whatWeExpect', { fallback: 'What we expect:' })}
            </Text>
            <List values={weExpect} color="white" />
          </div>
          <div className="flex flex-col gap-2">
            <Text size="base" color="white" className="opacity-50">
              {t('whatYouGet', { fallback: 'What you get with us:' })}
            </Text>
            <List values={whatYouGet} color="white" />
          </div>
        </section>
      </section>
    </article>
  );
};
