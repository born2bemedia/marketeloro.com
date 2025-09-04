'use client';

import { cn } from '@/shared/lib/utils/cn';

export const Divider = ({ className }: { className?: string }) => (
  <span className={cn('h-px w-full bg-[#D9D9D9]', className)} />
);
