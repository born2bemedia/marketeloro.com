'use client';

import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

import { useRequestDialogStore } from '@/features/request-form/model/request-dialog.store';

import { ArrowRightIcon } from '@/shared/ui/icons/arrow-right';
import { PlayIcon } from '@/shared/ui/icons/play';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import type { Service } from '../model/types';

export const ServicesSlider = ({
  title,
  values,
  children,
  color = 'jaguar',
}: {
  title: string;
  values: Service[];
  children?: React.ReactNode;
  color?: 'jaguar' | 'white';
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="relative flex flex-col gap-10 overflow-hidden">
      {children}
      <Title color={color} className="z-10">
        {title}
      </Title>
      <div className="relative z-10">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {values.map(value => (
              <div
                className="max-w-[80%] min-w-[80%] px-3 sm:max-w-[300px] sm:min-w-[300px]"
                key={value.name}
              >
                <ServiceCard {...value} color={color} />
              </div>
            ))}
          </div>
        </div>
        <div className="absolute top-1/2 right-5 flex -translate-y-1/2 gap-3">
          <Button
            size="md"
            variant={color === 'jaguar' ? 'secondary' : 'primary'}
            className="gap-3"
            onClick={scrollNext}
          >
            Next{' '}
            <ArrowRightIcon color={color === 'jaguar' ? '#030213' : '#fff'} />
          </Button>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({
  name,
  description,
  price,
  color,
}: Service & { color: 'jaguar' | 'white' }) => {
  const { setOpen, setPackageName, setIsShowSubtitle } =
    useRequestDialogStore();

  return (
    <article className="flex h-full w-full max-w-[300px] flex-col justify-between rounded-[40px] bg-[rgba(227,227,227,0.30)] p-5 backdrop-blur-xl">
      <section className="flex flex-col gap-5 p-5">
        <Title as="h3" size="xl" color={color}>
          {name}
        </Title>
        <Text size="base" color={color}>
          {description}
        </Text>
      </section>
      <div className="mt-auto flex items-center justify-between rounded-[40px] bg-[#030213] p-5">
        <Text size="xl" color="white">
          {price}
        </Text>
        <Button
          size="md"
          variant="reversed"
          onClick={() => {
            setOpen(true);
            setPackageName(name);
            setIsShowSubtitle(false);
          }}
        >
          Order <PlayIcon />
        </Button>
      </div>
    </article>
  );
};
