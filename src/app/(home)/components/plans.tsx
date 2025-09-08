'use client';

import { cn } from '@/shared/lib/utils/cn';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const Plans = () => {
  return (
    <section className="bg-[rgba(236,236,240,0.2)] py-20">
      <section className="mx-5 flex flex-col gap-[56px] rounded-xl bg-[#030213] px-10 pt-20 pb-10 max-md:mx-2 max-md:px-5">
        <div className="flex flex-col gap-3.5 text-center">
          <Title>
            Tailored Plans That <br /> Fit Your Growth Stage
          </Title>
          <Text color="white">
            Choose a plan aligned with your current momentum, and your future
            ambition.
          </Text>
        </div>
        <div className="mx-auto flex items-center gap-5 max-[1380px]:flex-wrap max-md:mx-0 max-md:flex-col">
          <PlanCard
            title="Starter Plan"
            text="Best for early-stage brands looking to launch with clarity and consistency"
            price="$2,500"
          />
          <PlanCard
            title="Growth Plan"
            text="Designed for growing brands seeking multi-channel expansion and measurable ROI"
            price="$6,000"
            popular
          />
          <PlanCard
            title="Enterprise Plan"
            text="Full-service support for established brands aiming for bold market leadership"
            price="$10,500"
          />
        </div>
      </section>
    </section>
  );
};

const PlanCard = ({
  price,
  text,
  title,
  popular,
}: {
  title: string;
  text: string;
  price: string;
  popular?: boolean;
}) => {
  return (
    <article
      className={cn(
        'relative flex h-full max-w-[470px] flex-1 flex-col rounded-[60px] bg-white px-2 pt-5 pb-2 max-md:w-full',
        popular ? 'min-h-[500px] border-4 border-[#004DBF]' : 'min-h-[470px]',
      )}
    >
      {popular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 rounded-[0_0_33554400px_33554400px] bg-[#004DBF] px-3.5 py-0.5">
          <Text size="xs" color="white">
            Most Popular
          </Text>
        </div>
      )}
      <section className="flex flex-col gap-1.5 px-6 pt-10 text-center">
        <Text
          className="text-[52px] leading-[52px] break-words"
          weight={700}
          uppercase
        >
          {title}
        </Text>
        <Text size="xl" weight={400}>
          {text}
        </Text>
      </section>
      <section className="mt-auto flex flex-col items-center gap-5 rounded-[60px] bg-[#030213] p-5">
        <div className="flex flex-col text-center">
          <Text color="white">Starting at</Text>
          <div className="flex items-end">
            <Text color="white" className="text-[40px] leading-9" weight={700}>
              {price}
            </Text>
            <Text className="opacity-50" color="white" weight={400}>
              /month
            </Text>
          </div>
        </div>
        <Button size="md" variant="secondary">
          Learn more
        </Button>
      </section>
    </article>
  );
};
