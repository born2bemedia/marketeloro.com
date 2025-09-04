'use client';

import { PlayIcon } from '@/shared/ui/icons/play';
import { TickCircleIcon } from '@/shared/ui/icons/tick-circle';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const features = [
  'Creates experiences your audience talks about',
  'Spots trends before they go mainstream',
  'Builds campaigns that stand the test of time',
  'Shares your passion for making an impact',
  'Uses smart insights to spark real connections',
  "Gives your brand a style people can't ignore",
];

export const AboutUs = () => {
  return (
    <section className="flex justify-between gap-[42px] px-10 py-[70px] max-md:flex-col max-md:px-2">
      <section className="flex flex-col gap-8">
        <Title color="jaguar">
          If you&apos;re looking for a marketing partner who…
        </Title>
        <div className="flex flex-col gap-[28px]">
          <Text>
            Then we&apos;re here to deliver the results your brand deserves.
            <br />
            Curious about how we work and who we are?
          </Text>
          <Button
            size="md"
            variant="transparent"
            className="hover:[&_svg]:fill-white"
          >
            Learn more <PlayIcon color="black" />
          </Button>
        </div>
      </section>
      <section className="flex shrink-0 flex-col gap-5">
        {features.map(f => (
          <Feature key={f} value={f} />
        ))}
      </section>
    </section>
  );
};

export const Feature = ({ value }: { value: string }) => (
  <div className="flex items-center gap-2 border-b border-black py-5">
    <TickCircleIcon />
    <Text size="xl" weight={400}>
      {value}
    </Text>
  </div>
);
