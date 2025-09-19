'use client';

import type { ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/shared/lib/utils/cn';

const btnVariants = cva(
  'transition disabled:cursor-not-allowed disabled:opacity-50 duration-300 font-medium ease-in-out cursor-pointer flex items-center gap-1',
  {
    variants: {
      variant: {
        primary:
          'bg-jaguar border border-jaguar text-white text-sm hover:bg-black',
        secondary:
          'bg-white border border-white text-jaguar text-sm hover:bg-[#f7f7f7]',
        reversed:
          'bg-transparent border border-white text-white text-sm hover:border-white/60',
        transparent:
          'bg-transparent border border-jaguar text-jaguar text-sm hover:bg-jaguar hover:text-white',
        shadow:
          'bg-white border border-white text-jaguar text-sm shadow-[0_83px_23px_0_rgba(0,0,0,0.00),0_53px_21px_0_rgba(0,0,0,0.01),0_30px_18px_0_rgba(0,0,0,0.05),0_13px_13px_0_rgba(0,0,0,0.09),0_3px_7px_0_rgba(0,0,0,0.10)]',
      },
      size: {
        sm: 'px-2 py-1 rounded-3xl',
        md: 'px-4 h-[60px] rounded-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'sm',
    },
  },
);

export type ButtonVariants = VariantProps<typeof btnVariants>;

export const Button = ({
  children,
  className,
  variant,
  onClick,
  disabled,
  size,
  fullWidth = false,
  type = 'button',
}: {
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
} & ButtonVariants) => {
  return (
    <button
      className={cn(
        btnVariants({ variant, size }),
        fullWidth ? 'w-full' : 'w-max',
        className,
      )}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
