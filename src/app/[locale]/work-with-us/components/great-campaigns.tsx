'use client';

import type { ReactNode } from 'react';
import { useTranslations } from 'next-intl';

import { CompassCircleIcon } from '@/shared/ui/icons/circles/compass';
import { PlanCircleIcon } from '@/shared/ui/icons/circles/plan';
import { List } from '@/shared/ui/kit/list';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const GreatCampaigns = () => {
  const t = useTranslations('workWithUs.greatCampaigns');

  return (
    <section className="flex flex-col gap-[42px] p-10 max-md:px-2">
      <section className="flex flex-col gap-4">
        <Title as="h1" color="jaguar">
          {t('title.0', {
            fallback: 'Great campaigns are built here.',
          })}
          <br />
          {t('title.1', {
            fallback: 'Great careers too',
          })}
        </Title>
        <Text color="coldGrey">
          {t('text', {
            fallback: 'That’s why the work we do lasts.',
          })}
        </Text>
      </section>
      <section className="flex gap-10 max-md:flex-col">
        <CardLayout>
          <CompassCircleIcon className="max-md:h-[100px] max-md:w-[100px]" />
          <section className="flex flex-col gap-3">
            <Text size="3xl" weight={700} uppercase>
              {t('cards.0.title', {
                fallback: 'At Marketeloro, ambition means:',
              })}
            </Text>
            <List
              values={[
                <>
                  <span className="font-bold">
                    {t('cards.0.list.0.0', {
                      fallback: 'People',
                    })}
                  </span>{' '}
                  {t('cards.0.list.0.1', {
                    fallback: 'who move first, not follow.',
                  })}
                </>,
                <>
                  <span className="font-bold">
                    {t('cards.0.list.1.0', {
                      fallback: 'Strategists',
                    })}
                  </span>{' '}
                  {t('cards.0.list.1.1', {
                    fallback: 'who think big and act with precision.',
                  })}
                </>,
                <>
                  <span className="font-bold">
                    {t('cards.0.list.2.0', {
                      fallback: 'Teams',
                    })}
                  </span>{' '}
                  {t('cards.0.list.2.1', {
                    fallback: 'that care about real impact, not empty numbers.',
                  })}
                </>,
                <>
                  <span className="font-bold">
                    {t('cards.0.list.2.0', {
                      fallback: 'Teams',
                    })}
                  </span>{' '}
                  {t('cards.0.list.2.1', {
                    fallback: 'that care about real impact, not empty numbers.',
                  })}
                </>,
                <>
                  <span className="font-bold">
                    {t('cards.0.list.3.0', {
                      fallback: 'Colleagues',
                    })}
                  </span>{' '}
                  {t('cards.0.list.3.1', {
                    fallback: 'who grow impact, not empty numbers.',
                  })}
                </>,
                <>
                  <span className="font-bold">
                    {t('cards.0.list.4.0', {
                      fallback: 'Minds',
                    })}
                  </span>{' '}
                  {t('cards.0.list.4.1', {
                    fallback: 'that use both data and creativity to win.',
                  })}
                </>,
              ]}
            />
          </section>
        </CardLayout>
        <CardLayout>
          <PlanCircleIcon />
          <section className="flex flex-col gap-3">
            <Text size="3xl" weight={700} uppercase>
              {t('cards.1.title', {
                fallback: 'We’re not made for average.',
              })}
            </Text>
            <List
              values={[
                t('cards.1.list.0', {
                  fallback: 'Our people don’t follow trends - they set them.',
                }),
                t('cards.1.list.1', {
                  fallback:
                    'They see the world without borders but execute with focus.',
                }),
                t('cards.1.list.2', {
                  fallback: 'They define success by impact, not impressions.',
                }),
                t('cards.1.list.3', {
                  fallback:
                    'They rise by lifting others, not stepping over them.',
                }),
                t('cards.1.list.4', {
                  fallback:
                    'And they mix the logic of data with the power of creativity.',
                }),
              ]}
            />
          </section>
        </CardLayout>
      </section>
    </section>
  );
};

const CardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="flex w-1/2 gap-10 border-b border-[#D9D9D9] pb-10 max-md:w-full max-md:flex-col">
      {children}
    </section>
  );
};
