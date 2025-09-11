'use client';

import { cn } from '@/shared/lib/utils/cn';
import type { TextVariants } from '@/shared/ui/kit/text';
import { Text } from '@/shared/ui/kit/text';

export const List = ({
  values,
  color = 'jaguar',
}: {
  values: string[];
  color?: TextVariants['color'];
}) => {
  return (
    <ul className="flex flex-col">
      {values.map(v => (
        <li
          key={v}
          className={cn(
            'relative pl-3 before:absolute before:top-2.5 before:left-0 before:h-1 before:w-1 before:rounded-full',
            color === 'white' && 'before:bg-white',
            color === 'jaguar' && 'before:bg-jaguar',
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
