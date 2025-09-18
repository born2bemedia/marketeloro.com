'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const getSlides = (t: ReturnType<typeof useTranslations>) => [
  {
    category: t('slides.0.category', { fallback: 'E-commerce' }),
    text: t('slides.0.text', {
      fallback:
        'Driving traffic, boosting conversions, and building loyal customer bases',
    }),
    imgUrl: '/images/home/slides/e-commerce.webp',
  },
  {
    category: t('slides.1.category', { fallback: 'Hospitality & Travel' }),
    text: t('slides.1.text', {
      fallback:
        'Creating demand, increasing bookings, and enhancing guest engagement',
    }),
    imgUrl: '/images/home/slides/travel.jpg',
  },
  {
    category: t('slides.2.category', { fallback: 'Technology & SaaS' }),
    text: t('slides.2.text', {
      fallback:
        'Positioning complex solutions clearly and generating qualified leads',
    }),
    imgUrl: '/images/home/slides/tech.jpg',
  },
  {
    category: t('slides.3.category', { fallback: 'Lifestyle & Wellness' }),
    text: t('slides.3.text', {
      fallback:
        'Building aspirational brands and fostering community connections',
    }),
    imgUrl: '/images/home/slides/life.jpg',
  },
  {
    category: t('slides.4.category', { fallback: 'Fashion & Beauty' }),
    text: t('slides.4.text', {
      fallback:
        'Elevating style-driven brands through impactful storytelling and visuals',
    }),
    imgUrl: '/images/home/slides/fashion.jpg',
  },
  {
    category: t('slides.5.category', { fallback: 'Food & Beverage' }),
    text: t('slides.5.text', {
      fallback: 'Strengthening brand presence and driving repeat purchases',
    }),
    imgUrl: '/images/home/slides/food.jpg',
  },
  {
    category: t('slides.6.category', { fallback: 'Education & e-Learning' }),
    text: t('slides.6.text', {
      fallback:
        'Attracting students, increasing enrollments, and building trust',
    }),
    imgUrl: '/images/home/slides/edu.jpg',
  },
  {
    category: t('slides.7.category', { fallback: 'Real Estate' }),
    text: t('slides.7.text', {
      fallback:
        'Generating qualified inquiries and showcasing properties effectively',
    }),
    imgUrl: '/images/home/slides/estate.jpg',
  },
  {
    category: t('slides.8.category', { fallback: 'Entertainment & Media' }),
    text: t('slides.8.text', {
      fallback: 'Expanding reach and boosting audience engagement',
    }),
    imgUrl: '/images/home/slides/media.jpg',
  },
];

export const IndustriesWeServe = () => {
  const t = useTranslations('home.industriesWeServe');

  const autoplay = useRef(
    Autoplay({
      delay: 10000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      axis: 'y',
      loop: false,
      align: 'start',
    },
    [autoplay.current],
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const listRef = useRef<HTMLUListElement | null>(null);
  const buttonsRef = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    if (!emblaApi) return undefined;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect();

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  const scrollSelectedToTop = useCallback((index: number) => {
    const container = listRef.current;
    const activeBtn = buttonsRef.current[index];
    if (!container || !activeBtn) return;

    const containerRect = container.getBoundingClientRect();
    const activeRect = activeBtn.getBoundingClientRect();

    const targetScrollTop =
      activeRect.top - containerRect.top + container.scrollTop;

    container.scrollTo({
      top: Math.max(0, Math.floor(targetScrollTop)),
      behavior: 'smooth',
    });
  }, []);

  useEffect(() => {
    scrollSelectedToTop(selectedIndex);
  }, [selectedIndex, scrollSelectedToTop]);

  const slides = getSlides(t);

  return (
    <section className="mx-5 my-20 flex flex-col gap-[56px] rounded-xl bg-[#030213] px-10 py-20 max-md:mx-2 max-md:px-5">
      <Title color="white" capitalize>
        {t('title', {
          fallback: 'Industries We Serve',
        })}
      </Title>
      <div className="flex gap-12 max-lg:flex-col">
        <ul
          ref={listRef}
          className="flex h-[450px] w-max shrink-0 flex-col gap-4 overflow-y-auto pr-4 text-white [-ms-overflow-style:none] [scrollbar-width:none] max-md:w-full"
        >
          {slides.map((s, i) => (
            <button
              key={i}
              ref={el => {
                buttonsRef.current[i] = el;
              }}
              className="flex cursor-pointer flex-col gap-2 text-left"
              onClick={() => {
                emblaApi?.scrollTo(i);
                scrollSelectedToTop(i);
              }}
            >
              <Text
                size="4xl"
                color={selectedIndex === i ? 'blue' : 'white'}
                weight={700}
                uppercase
              >
                {s.category.toUpperCase()}
              </Text>
              <span className="h-px w-full bg-white" />
            </button>
          ))}
        </ul>
        <div className="w-[65%] max-lg:w-full">
          <div
            ref={emblaRef}
            className="relative h-[542px] overflow-hidden rounded-2xl"
          >
            <div className="flex h-full flex-col">
              {slides.map((s, i) => (
                <div key={i} className="relative h-full flex-none px-2">
                  <div className="relative h-full w-full overflow-hidden rounded-2xl">
                    <Image
                      src={s.imgUrl}
                      alt={s.category}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="absolute right-0 bottom-6 left-0 mx-6 w-[60%] rounded-[20px] bg-white p-5 max-lg:mx-4 max-lg:w-auto">
                    <Text size="xl" color="jaguar">
                      {s.text}
                    </Text>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
