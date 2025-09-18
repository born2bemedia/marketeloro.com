'use client';

import type { ReactNode } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import useEmblaCarousel from 'embla-carousel-react';

import { StarsIcon } from '@/shared/ui/icons/stars';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const getCards = (t: ReturnType<typeof useTranslations>) => [
  {
    text: t('cards.0.text', {
      fallback:
        '"Marketeloro didn\'t just run ads — they built a strategy that finally unlocked our growth."',
    }),
    person: {
      avatarUrl: '/images/reviews/emma-r.svg',
      name: 'Emma R.',
      position: t('cards.0.position', { fallback: 'E-commerce Brand Owner' }),
    },
    before: t('cards.0.before', {
      fallback: 'Sales had plateaued despite consistent ad spend',
    }),
    after: (
      <div className="flex flex-col">
        <Text size="xl" color="white" weight={700}>
          +167%
        </Text>
        <Text size="xl" color="white">
          {t('cards.0.after', {
            fallback: 'in online revenue within 4 months',
          })}
        </Text>
      </div>
    ),
  },
  {
    text: t('cards.1.text', {
      fallback:
        '"The team\'s SEO expertise is next-level — we went from invisible to unavoidable."',
    }),
    person: {
      avatarUrl: '/images/reviews/daniel-p.svg',
      name: 'Daniel P.',
      position: t('cards.1.position', { fallback: 'Tech Startup Founder' }),
    },
    before: t('cards.1.before', {
      fallback: 'Struggling to gain visibility in a crowded SaaS market',
    }),
    after: (
      <Text size="xl" weight={700} color="white">
        {t('cards.1.after', {
          fallback: "Ranked in Google's top 3 for key industry terms",
        })}
      </Text>
    ),
  },
  {
    text: t('cards.2.text', {
      fallback: '"Their campaigns turned our low season into a profit season."',
    }),
    person: {
      avatarUrl: '/images/reviews/sofia-l.svg',
      name: 'Sofia L.',
      position: t('cards.2.position', { fallback: 'Boutique Hotel Managers' }),
    },
    before: t('cards.2.before', {
      fallback: 'Seasonal bookings left big revenue gaps',
    }),
    after: (
      <Text size="xl" weight={700} color="white">
        {t('cards.2.after', {
          fallback: 'Year-round occupancy rates up by 42%',
        })}
      </Text>
    ),
  },
  {
    text: t('cards.3.text', {
      fallback:
        '"Marketeloro helped me refine my brand voice and attract the right audience."',
    }),
    person: {
      avatarUrl: '/images/reviews/mark-t.svg',
      name: 'Mark T.',
      position: t('cards.3.position', { fallback: 'Lifestyle Influencer' }),
    },
    before: t('cards.3.before', {
      fallback: 'Engagement rate stuck under 2%',
    }),
    after: (
      <div className="flex flex-col">
        <Text size="xl" color="white" weight={700}>
          {t('cards.3.after.0', {
            fallback: 'Now averages 7.5%',
          })}
        </Text>
        <Text size="xl" color="white">
          {t('cards.3.after.1', {
            fallback: 'with a growing brand partnership list',
          })}
        </Text>
      </div>
    ),
  },
  {
    text: t('cards.4.text', {
      fallback:
        '"It felt like they became part of our in-house team — fully invested in our success."',
    }),
    person: {
      avatarUrl: '/images/reviews/claire-j.svg',
      name: 'Claire J.',
      position: t('cards.4.position', { fallback: 'Fashion Label CEO' }),
    },
    before: t('cards.4.before', {
      fallback: 'Weak online presence despite high-quality products',
    }),
    after: (
      <div className="flex flex-col">
        <Text size="xl" color="white" weight={700}>
          {t('cards.4.after.0', {
            fallback: 'Increased web traffic by 310%',
          })}
        </Text>
        <Text size="xl" color="white">
          {t('cards.4.after.1', {
            fallback: 'and boosted direct sales',
          })}
        </Text>
      </div>
    ),
  },
  {
    text: t('cards.5.text', {
      fallback: '"Their go-to-market strategy was a game changer for us."',
    }),
    person: {
      avatarUrl: '/images/reviews/anthony-s.svg',
      name: 'Anthony S.',
      position: t('cards.5.position', { fallback: 'Fitness App Founder' }),
    },
    before: t('cards.5.before', {
      fallback: 'Launch campaign failed to generate enough early adopters',
    }),
    after: (
      <div className="flex flex-col">
        <Text size="xl" color="white" weight={700}>
          {t('cards.5.after.0', {
            fallback: 'Achieved 50K+ downloads',
          })}
        </Text>
        <Text size="xl" color="white">
          {t('cards.5.after.1', {
            fallback: 'in the first 90 days post-relaunch',
          })}
        </Text>
      </div>
    ),
  },
  {
    text: t('cards.6.text', {
      fallback: '"They brought structure, creativity, and real returns."',
    }),
    person: {
      avatarUrl: '/images/reviews/laura-k.svg',
      name: 'Laura K.',
      position: t('cards.6.position', {
        fallback: 'Luxury Skincare Brand Owner',
      }),
    },
    before: t('cards.6.before', {
      fallback: 'Over-reliance on word of mouth',
    }),
    after: (
      <div className="flex flex-col">
        <Text size="xl" color="white" weight={700}>
          {t('cards.6.after.0', {
            fallback: 'Built a scalable paid ads system',
          })}
        </Text>
        <Text size="xl" color="white">
          {t('cards.6.after.1', {
            fallback: 'generating 4.2x ROAS',
          })}
        </Text>
      </div>
    ),
  },
  {
    text: t('cards.7.text', {
      fallback:
        '"They knew exactly which levers to pull to turn interest into revenue."',
    }),
    person: {
      avatarUrl: '/images/reviews/ben-m.svg',
      name: 'Ben M.',
      position: t('cards.7.position', {
        fallback: 'E-learning Platform Director',
      }),
    },
    before: t('cards.7.before', {
      fallback: 'Low conversion rate from free trial to paid plan',
    }),
    after: (
      <div className="flex flex-col">
        <Text size="xl" color="white" weight={700}>
          {t('cards.7.after.0', {
            fallback: 'Improved trial-to-paid conversions',
          })}
        </Text>
        <Text size="xl" color="white">
          {t('cards.7.after.1', {
            fallback: 'by 65%',
          })}
        </Text>
      </div>
    ),
  },
];

export const Outcomes = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' });
  const t = useTranslations('home.outcomes');

  const cards = getCards(t);

  return (
    <section className="relative flex flex-col gap-[56px] overflow-hidden pt-[70px] pb-[120px] pl-10 max-md:pb-[90px] max-md:pl-2">
      <Image
        className="absolute -top-30 -right-70 max-md:hidden"
        src="/images/home/reviews.webp"
        alt="outcomes"
        width={926}
        height={1086}
        unoptimized
      />
      <Title color="jaguar" className="z-10" capitalize>
        {t('title', { fallback: 'Proven Collaboration Outcomes' })}
      </Title>
      <div className="cursor-grab overflow-hidden" ref={emblaRef}>
        <div className="flex gap-5">
          {cards.map((card, idx) => (
            <div
              className="flex-[0_0_80%] last:pr-5 sm:flex-[0_0_400px]"
              key={idx}
            >
              <Card {...card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Card = ({
  text,
  person,
  before,
  after,
}: {
  text: string;
  person: {
    avatarUrl: string;
    name: string;
    position: string;
  };
  before: ReactNode;
  after: ReactNode;
}) => {
  const t = useTranslations('home.outcomes');

  return (
    <article className="flex w-full flex-col gap-3 rounded-[40px] bg-[rgba(227,227,227,0.30)] p-2.5 backdrop-blur-md select-none">
      <section className="flex flex-col gap-5 p-5">
        <StarsIcon />
        <Title size="xl" as="h4" color="jaguar">
          {text}
        </Title>
        <div className="flex gap-2">
          <Image
            className="rounded-full"
            src={person.avatarUrl}
            alt="avatar"
            width={40}
            height={40}
          />
          <div className="flex flex-col gap-0.5">
            <Text weight={600}>{person.name}</Text>
            <Text className="opacity-50">{person.position}</Text>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-5 rounded-[40px] bg-[#030213] p-5">
        <div className="flex flex-col gap-1">
          <Text color="white" className="opacity-50">
            {t('before', { fallback: 'Before' })}:
          </Text>
          <Text size="xl" color="white">
            {before}
          </Text>
        </div>
        <div className="flex flex-col gap-1">
          <Text color="white" className="opacity-50">
            {t('after', { fallback: 'After' })}:
          </Text>
          {after}
        </div>
      </section>
    </article>
  );
};
