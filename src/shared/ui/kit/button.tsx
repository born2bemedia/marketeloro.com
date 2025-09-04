'use client';

import type { ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/shared/lib/utils/cn';

const btnVariants = cva(
  'transition duration-300 ease-in-out cursor-pointer flex items-center gap-1',
  {
    variants: {
      variant: {
        primary:
          'bg-jaguar border border-jaguar text-white text-sm hover:bg-black',
        secondary:
          'bg-white border border-white text-jaguar text-sm hover:bg-[#f7f7f7]',
        reversed:
          'bg-transparent border border-white text-white text-sm hover:bg-white hover:text-jaguar',
        transparent:
          'bg-transparent border border-jaguar text-jaguar text-sm hover:bg-jaguar hover:text-white',
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
