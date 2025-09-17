'use client';

import { useCallback, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  Root,
} from '@radix-ui/react-dropdown-menu';

import { Text } from '@/shared/ui/kit/text';

import { DeIcon } from '../icons/countries/de';
import { EnIcon } from '../icons/countries/en';
import { ItIcon } from '../icons/countries/it';

export const LangSwitcher = () => {
  const [open, setOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const locale = useLocale();
  const t = useTranslations('langSwitcher');

  const switchLanguage = useCallback(
    (value: string) => {
      const pathWithoutLocale = pathname.replace(/^\/(en|de|it)/, '');
      const newPath = `/${value}${pathWithoutLocale}`;
      router.replace(newPath);
    },
    [pathname, router],
  );

  const languages = [
    { value: 'en', label: t('english', { fallback: 'English' }), icon: EnIcon },
    { value: 'de', label: t('german', { fallback: 'German' }), icon: DeIcon },
    { value: 'it', label: t('italian', { fallback: 'Italian' }), icon: ItIcon },
  ];

  return (
    <Root open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger className="flex cursor-pointer items-center gap-1 outline-0">
        <div className="flex items-center gap-1.5">
          <Text uppercase>
            {languages.find(({ value }) => value === locale)?.value}
          </Text>
        </div>
        <ChevronDown />
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent
          sideOffset={10}
          className="z-[900] flex w-[118px] animate-[slideDownAndFade_400ms_cubic-bezier(0.16,1,0.3,1)] flex-col overflow-hidden rounded-3xl border border-[rgba(3,2,19,0.05)] bg-white data-[side=bottom]:animate-[slideUpAndFade_400ms_cubic-bezier(0.16,1,0.3,1)] data-[side=left]:animate-[slideRightAndFade_400ms_cubic-bezier(0.16,1,0.3,1)] data-[side=right]:animate-[slideLeftAndFade_400ms_cubic-bezier(0.16,1,0.3,1)] data-[side=top]:animate-[slideDownAndFade_400ms_cubic-bezier(0.16,1,0.3,1)]"
        >
          {languages.map(({ icon: Icon, label, value }) => (
            <DropdownMenuItem
              key={label}
              onClick={() => {
                setOpen(false);
                switchLanguage(value);
              }}
              className="flex cursor-pointer items-center gap-2 border-b border-[rgba(3,2,19,0.05)] p-3 outline-0 last:border-b-0"
            >
              <Icon />
              <Text uppercase>{value}</Text>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </Root>
  );
};

const ChevronDown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
  >
    <mask id="path-1-inside-1_330_248" fill="white">
      <path d="M6.99989 9.80012C6.59156 9.80012 6.18322 9.64262 5.87406 9.33345L2.07072 5.53012C1.90156 5.36095 1.90156 5.08095 2.07072 4.91179C2.23989 4.74262 2.51989 4.74262 2.68906 4.91179L6.49239 8.71512C6.77239 8.99512 7.22739 8.99512 7.50739 8.71512L11.3107 4.91179C11.4799 4.74262 11.7599 4.74262 11.9291 4.91179C12.0982 5.08095 12.0982 5.36095 11.9291 5.53012L8.12572 9.33345C7.81656 9.64262 7.40822 9.80012 6.99989 9.80012Z" />
    </mask>
    <path
      d="M6.99989 9.80012C6.59156 9.80012 6.18322 9.64262 5.87406 9.33345L2.07072 5.53012C1.90156 5.36095 1.90156 5.08095 2.07072 4.91179C2.23989 4.74262 2.51989 4.74262 2.68906 4.91179L6.49239 8.71512C6.77239 8.99512 7.22739 8.99512 7.50739 8.71512L11.3107 4.91179C11.4799 4.74262 11.7599 4.74262 11.9291 4.91179C12.0982 5.08095 12.0982 5.36095 11.9291 5.53012L8.12572 9.33345C7.81656 9.64262 7.40822 9.80012 6.99989 9.80012Z"
      fill="#030213"
    />
    <path
      d="M5.87406 9.33345L4.8134 10.3941L5.87406 9.33345ZM2.07072 5.53012L3.13138 4.46946V4.46946L2.07072 5.53012ZM2.68906 4.91179L1.6284 5.97245L1.6284 5.97245L2.68906 4.91179ZM6.49239 8.71512L7.55305 7.65446L6.49239 8.71512ZM7.50739 8.71512L8.56805 9.77578L7.50739 8.71512ZM11.3107 4.91179L10.2501 3.85113L10.2501 3.85113L11.3107 4.91179ZM11.9291 5.53012L10.8684 4.46946V4.46946L11.9291 5.53012ZM8.12572 9.33345L9.18638 10.3941L8.12572 9.33345ZM6.99989 9.80012V8.30012C6.97562 8.30012 6.953 8.29107 6.93472 8.27279L5.87406 9.33345L4.8134 10.3941C5.41345 10.9942 6.20749 11.3001 6.99989 11.3001V9.80012ZM5.87406 9.33345L6.93472 8.27279L3.13138 4.46946L2.07072 5.53012L1.01006 6.59078L4.8134 10.3941L5.87406 9.33345ZM2.07072 5.53012L3.13138 4.46946C3.548 4.88608 3.548 5.55583 3.13138 5.97245L2.07072 4.91179L1.01006 3.85113C0.255109 4.60608 0.255109 5.83583 1.01006 6.59078L2.07072 5.53012ZM2.07072 4.91179L3.13138 5.97245C2.71476 6.38907 2.04502 6.38907 1.6284 5.97245L2.68906 4.91179L3.74972 3.85113C2.99476 3.09617 1.76502 3.09617 1.01006 3.85113L2.07072 4.91179ZM2.68906 4.91179L1.6284 5.97245L5.43173 9.77578L6.49239 8.71512L7.55305 7.65446L3.74972 3.85113L2.68906 4.91179ZM6.49239 8.71512L5.43173 9.77578C6.29752 10.6416 7.70226 10.6416 8.56805 9.77578L7.50739 8.71512L6.44673 7.65446C6.75252 7.34867 7.24726 7.34867 7.55305 7.65446L6.49239 8.71512ZM7.50739 8.71512L8.56805 9.77578L12.3714 5.97245L11.3107 4.91179L10.2501 3.85113L6.44673 7.65446L7.50739 8.71512ZM11.3107 4.91179L12.3714 5.97245C11.9548 6.38907 11.285 6.38907 10.8684 5.97245L11.9291 4.91179L12.9897 3.85113C12.2348 3.09617 11.005 3.09617 10.2501 3.85113L11.3107 4.91179ZM11.9291 4.91179L10.8684 5.97245C10.4518 5.55583 10.4518 4.88608 10.8684 4.46946L11.9291 5.53012L12.9897 6.59078C13.7447 5.83583 13.7447 4.60608 12.9897 3.85113L11.9291 4.91179ZM11.9291 5.53012L10.8684 4.46946L7.06506 8.27279L8.12572 9.33345L9.18638 10.3941L12.9897 6.59078L11.9291 5.53012ZM8.12572 9.33345L7.06506 8.27279C7.04678 8.29107 7.02416 8.30012 6.99989 8.30012V9.80012V11.3001C7.79229 11.3001 8.58633 10.9942 9.18638 10.3941L8.12572 9.33345Z"
      fill="#030213"
      mask="url(#path-1-inside-1_330_248)"
    />
  </svg>
);
