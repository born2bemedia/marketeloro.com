'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const getSlides = () => [
  {
    category: 'E-commerce',
    text: 'Driving traffic, boosting conversions, and building loyal customer bases',
    imgUrl: '/images/home/slides/e-commerce.webp',
  },
  {
    category: 'Hospitality & Travel',
    text: 'Creating demand, increasing bookings, and enhancing guest engagement',
    imgUrl: '/images/home/slides/e-commerce.webp',
  },
  {
    category: 'Technology & SaaS',
    text: 'Positioning complex solutions clearly and generating qualified leads',
    imgUrl: '/images/home/slides/e-commerce.webp',
  },
  {
    category: 'Lifestyle & Wellness',
    text: 'Building aspirational brands and fostering community connections',
    imgUrl: '/images/home/slides/e-commerce.webp',
  },
  {
    category: 'Fashion & Beauty',
    text: 'Elevating style-driven brands through impactful storytelling and visuals',
    imgUrl: '/images/home/slides/e-commerce.webp',
  },
  {
    category: 'Food & Beverage',
    text: 'Strengthening brand presence and driving repeat purchases',
    imgUrl: '/images/home/slides/e-commerce.webp',
  },
  {
    category: 'Education & e-Learning',
    text: 'Attracting students, increasing enrollments, and building trust',
    imgUrl: '/images/home/slides/e-commerce.webp',
  },
  {
    category: 'Real Estate',
    text: 'Generating qualified inquiries and showcasing properties effectively',
    imgUrl: '/images/home/slides/e-commerce.webp',
  },
  {
    category: 'Entertainment & Media',
    text: 'Expanding reach and boosting audience engagement',
    imgUrl: '/images/home/slides/e-commerce.webp',
  },
];

export const IndustriesWeServe = () => {
  const slides = getSlides();
  const autoplay = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true }),
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

  return (
    <section className="mx-5 my-20 flex flex-col gap-[56px] rounded-xl bg-[#030213] px-10 py-20 max-md:mx-2 max-md:px-5">
      <Title color="white">Industries We Serve</Title>
      <div className="flex gap-12 max-lg:flex-col">
        <ul
          ref={listRef}
          className="flex h-[450px] w-max shrink-0 flex-col gap-4 overflow-y-auto pr-4 text-white max-md:w-full"
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
