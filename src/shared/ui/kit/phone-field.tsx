'use client';

import {
  defaultCountries,
  PhoneInput,
  type PhoneInputProps,
} from 'react-international-phone';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { excludedCountries } from '@/shared/lib/countries';
import { useCountryCode } from '@/shared/lib/hooks/use-country-code';
import { cn } from '@/shared/lib/utils/cn';

import 'react-international-phone/style.css';

const phoneFieldVariants = cva(
  '!px-4 !py-3 !rounded-r-[16px] transition-all !border !text-base !text-[#030213] !placeholder:text-[#030213]/20 duration-300 !w-full !h-full ease-in-out focus:outline-none',
  {
    variants: {
      variant: {
        primary: '!border-[#F2F2F2] !bg-[#F2F2F2]',
      },
      intent: {
        primary: '',
      },
    },
    defaultVariants: {
      intent: 'primary',
      variant: 'primary',
    },
  },
);

export type PhoneFieldVariants = VariantProps<typeof phoneFieldVariants>;

export const PhoneField = ({
  variant,
  intent,
  ...args
}: PhoneInputProps & PhoneFieldVariants) => {
  const country = useCountryCode();

  return (
    <label className="relative w-full">
      <PhoneInput
        defaultCountry={
          defaultCountries.some(
            ([, iso2]) => iso2 === country && !excludedCountries.includes(iso2),
          )
            ? country
            : 'gb'
        }
        className={cn('!h-[50px] !rounded-[16px]')}
        inputClassName={cn(
          phoneFieldVariants({
            variant,
            intent,
          }),
        )}
        countries={defaultCountries.filter(
          ([, iso2]) => !excludedCountries.includes(iso2),
        )}
        countrySelectorStyleProps={{
          buttonClassName: cn(
            '!h-full !bg-[#F2F2F2] !border-none !rounded-l-[16px] !pr-3 !pl-2.5',
            variant === 'primary' && '!bg-[#E1DFF6]/20 !border-[#E1DFF6]/20',
          ),
          dropdownStyleProps: {
            className: '!outline-none',
          },
        }}
        {...args}
      />
    </label>
  );
};
