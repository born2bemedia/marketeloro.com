'use client';

import type { InputHTMLAttributes } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { cn } from '@/shared/lib/utils/cn';

const textFieldVariants = cva(
  'transition-all rounded-[16px] px-4 py-3 duration-300 w-full ease-in-out focus:outline-none',
  {
    variants: {
      variant: {
        primary:
          'bg-[#F2F2F2] border border-[#F2F2F2] text-[#030213] placeholder:text-[#030213]/20',
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

export type TextFieldVariants = VariantProps<typeof textFieldVariants>;

export const TextField = ({
  className,
  intent,
  variant,
  ...args
}: InputHTMLAttributes<HTMLInputElement> & TextFieldVariants) => {
  return (
    <label className="relative flex w-full flex-col gap-2">
      <input
        className={cn(textFieldVariants({ intent, variant }), className)}
        {...args}
      />
    </label>
  );
};
