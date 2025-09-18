'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import {
  Close,
  Content,
  Description,
  Portal,
  Root,
  Title,
  Trigger,
} from '@radix-ui/react-dialog';

import { SmsIcon } from '../icons/sms';
import { Text } from '../kit/text';
import { LangSwitcher } from './lang-switcher';
import { Link as NavLink } from '@/i18n/navigation';

export const BurgerMenu = () => {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : '';

    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [open]);

  const t = useTranslations('header');

  return (
    <Root open={open} onOpenChange={setOpen}>
      <Trigger>
        <section className="hidden max-md:flex">
          <Text>{t('menu', { fallback: 'Menu' })}</Text>
        </section>
      </Trigger>
      <Portal>
        <Content className="fixed bottom-0 left-0 z-[998] h-screen w-screen animate-[menuOpen_0.3s_ease-out_forwards] overflow-x-hidden overflow-y-auto bg-white">
          <Title />
          <Description asChild>
            <section className="flex h-full flex-col justify-between gap-5 px-2 pt-2 pb-4">
              <section className="flex flex-col gap-5">
                <section className="flex items-center justify-between">
                  <NavLink href="/">
                    <Image src="/logo.svg" alt="Logo" width={148} height={24} />
                  </NavLink>
                  <div className="flex items-center gap-5">
                    <LangSwitcher />
                    <Close>
                      <Text>{t('close', { fallback: 'Close' })}</Text>
                    </Close>
                  </div>
                </section>
                <section className="flex flex-col gap-5">
                  <NavLink href="/services" className="pl-2.5">
                    <Text size="xl">
                      {t('services', { fallback: 'Services' })}
                    </Text>
                  </NavLink>
                  <NavLink href="/tailored-plans" className="pl-2.5">
                    <Text size="xl">{t('plans', { fallback: 'Plans' })}</Text>
                  </NavLink>
                  <NavLink href="/about-us" className="pl-2.5">
                    <Text size="xl">
                      {t('aboutUs', { fallback: 'About Us' })}
                    </Text>
                  </NavLink>
                  <NavLink href="/story-time" className="pl-2.5">
                    <Text size="xl">
                      {t('storyTime', { fallback: 'Story Time' })}
                    </Text>
                  </NavLink>
                  <NavLink
                    href="/contact-us"
                    className="rounded-3xl bg-[#030213] px-2.5 py-1"
                  >
                    <Text size="xl" color="white">
                      {t('contactUs', { fallback: 'Contact Us' })}
                    </Text>
                  </NavLink>
                </section>
              </section>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-4 px-2.5">
                  {/* <Link
                    href="tel:+15551234567"
                    className="flex items-center gap-1"
                  >
                    <PhoneIcon />
                    +1 (555) 123-4567
                  </Link> */}
                  <Link
                    href="mailto:info@marketeloro.com"
                    className="flex items-center gap-1"
                  >
                    <SmsIcon />
                    info@marketeloro.com
                  </Link>
                </div>
                {/* <SocialNetworks /> */}
              </div>
            </section>
          </Description>
        </Content>
      </Portal>
    </Root>
  );
};
