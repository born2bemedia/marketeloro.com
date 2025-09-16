import { type ReactNode, useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';

import { ArrowDownIcon } from '../icons/arrow-down';

export type DropdownOptions = { value: string; label: React.ReactNode };

export const Dropdown = ({
  options,
  value,
  onChange,
}: {
  options: DropdownOptions[];
  value: ReactNode;
  onChange?: (value: string) => void;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <button className="flex w-full cursor-pointer items-center justify-between gap-1 rounded-2xl bg-white px-4 py-3 outline-0">
          <p className="text-jaguar/20 text-base">{value}</p>
          <ArrowDownIcon />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuPortal container={document.body}>
        <DropdownMenuContent
          sideOffset={10}
          className="z-[9999] flex min-w-[var(--radix-dropdown-menu-trigger-width)] flex-col gap-1 rounded-[40px] bg-white p-2"
        >
          {options.map(option => (
            <DropdownMenuItem
              key={option.value}
              onSelect={() => {
                onChange?.(option.value);
                setOpen(false);
              }}
              className="relative flex cursor-pointer px-4 py-3 transition-all duration-300 ease-in-out outline-none select-none"
            >
              <p className="text-base text-[#030303]/50">{option.label}</p>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  );
};
