'use client';

import type { InputHTMLAttributes } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { cn } from '@/shared/lib/utils/cn';

const textAreaVariants = cva(
  'transition-all rounded-[16px] px-4 py-3 h-[116px] resize-none duration-300 w-full ease-in-out focus:outline-none',
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

export type TextAreaVariants = VariantProps<typeof textAreaVariants>;

export const TextArea = ({
  className,
  intent,
  variant,
  ...args
}: InputHTMLAttributes<HTMLTextAreaElement> & TextAreaVariants) => {
  return (
    <label className="relative flex w-full flex-col gap-2">
      <textarea
        className={cn(textAreaVariants({ intent, variant }), className)}
        {...args}
      />
    </label>
  );
};
