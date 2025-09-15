'use client';

import type { ReactNode } from 'react';

import { cn } from '@/shared/lib/utils/cn';
import type { TextVariants } from '@/shared/ui/kit/text';
import { Text } from '@/shared/ui/kit/text';

export const List = ({
  values,
  color = 'jaguar',
  type = 'disc',
}: {
  values: ReactNode[];
  color?: TextVariants['color'];
  type?: 'disc' | 'alpha' | 'number';
}) => {
  return (
    <ul
      className={cn(
        'flex flex-col',
        type === 'alpha' && 'list-[lower-alpha] pl-3 marker:mr-1',
        type === 'number' && 'list-decimal pl-3 font-bold',
      )}
    >
      {values.map((v, i) => (
        <li
          key={i}
          className={cn(
            'relative',
            type === 'disc' &&
              'pl-3 before:absolute before:top-2.5 before:left-0 before:h-1 before:w-1 before:rounded-full',
            color === 'white' && type === 'disc' && 'before:bg-white',
            color === 'jaguar' && type === 'disc' && 'before:bg-jaguar',
          )}
        >
          <Text size="base" color={color}>
            {v}
          </Text>
        </li>
      ))}
    </ul>
  );
};
