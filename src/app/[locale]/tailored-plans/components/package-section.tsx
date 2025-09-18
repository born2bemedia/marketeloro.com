'use client';

import { useTranslations } from 'next-intl';

import { useRequestDialogStore } from '@/features/request-form/model/request-dialog.store';

import { cn } from '@/shared/lib/utils/cn';
import { PlayIcon } from '@/shared/ui/icons/play';
import { Button } from '@/shared/ui/kit/button';
import { List } from '@/shared/ui/kit/list';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const PackageSection = ({
  text,
  title,
  data,
  variant = 'primary',
  id,
}: {
  title: string;
  text: string;
  data: {
    included: string[];
    bonus: string[];
    startPrice: string;
  };
  variant?: 'primary' | 'secondary';
  id?: string;
}) => {
  const t = useTranslations('packageSection');

  const { setOpen, setPackageName } = useRequestDialogStore();

  return (
    <section
      className="flex gap-10 px-10 py-[70px] max-md:flex-col max-md:gap-6 max-md:px-2"
      id={id}
    >
      <div className="flex flex-col gap-4">
        <Title color="jaguar">{title}</Title>
        <Text size="base" className="w-full max-w-[520px] max-md:w-full">
          {text}
        </Text>
      </div>
      <article
        className={cn(
          'flex gap-5 rounded-4xl bg-[rgba(227,227,227,0.30)] p-5 max-[1065px]:flex-col',
          variant === 'secondary' && 'flex-col',
        )}
      >
        {variant === 'primary' ? (
          <>
            <div className="flex flex-col gap-2 p-5">
              <Text size="base" color="stormGrey">
                {t('includedServices', { fallback: 'Included Services:' })}
              </Text>
              <List values={data.included} />
            </div>
            <section className="flex flex-col rounded-[40px] bg-[#030213] p-5">
              <div className="flex flex-col gap-2">
                <Text size="base" color="stormGrey">
                  {t('bonus', { fallback: 'Bonus:' })}
                </Text>
                <List color="white" values={data.bonus} />
              </div>
              <div className="mt-auto flex items-center gap-8 max-md:flex-col max-md:items-start max-md:gap-6">
                <div className="flex flex-col">
                  <Text color="white" className="opacity-50">
                    {t('startingAt', { fallback: 'Starting at' })}
                  </Text>
                  <Text size="4xl" color="white" uppercase>
                    €{data.startPrice}
                  </Text>
                </div>
                <Button
                  variant="reversed"
                  size="md"
                  className="max-md:h-[60px] max-md:w-full max-md:justify-center"
                  onClick={() => {
                    setPackageName(title);
                    setOpen(true);
                  }}
                >
                  {t('getStarted', { fallback: 'Get Started' })} <PlayIcon />
                </Button>
              </div>
            </section>
          </>
        ) : (
          <>
            <div className="flex flex-col gap-2 p-5">
              <Text size="base" color="stormGrey">
                {t('includedServices', { fallback: 'Included Services:' })}
              </Text>
              <div className="flex gap-2 max-md:flex-col max-md:gap-0">
                <List values={data.included} />
                <List values={data.bonus} />
              </div>
            </div>
            <section className="flex items-center justify-between rounded-[40px] bg-[#030213] p-5 max-md:flex-col max-md:items-start">
              <div className="flex flex-col">
                <Text color="white" className="opacity-50">
                  {t('startingAt', { fallback: 'Starting at' })}
                </Text>
                <Text size="4xl" color="white" uppercase>
                  €{data.startPrice}
                </Text>
              </div>
              <Button
                variant="reversed"
                size="md"
                className="max-md:w-full max-md:justify-center"
                onClick={() => {
                  setPackageName(title);
                  setOpen(true);
                }}
              >
                {t('getStarted', { fallback: 'Get Started' })} <PlayIcon />
              </Button>
            </section>
          </>
        )}
      </article>
    </section>
  );
};
