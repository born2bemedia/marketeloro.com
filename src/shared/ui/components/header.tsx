'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { MailIcon } from '@/shared/ui/icons/mail';
import { Text } from '@/shared/ui/kit/text';

import { Button } from '../kit/button';
import { BurgerMenu } from './burger-menu';
import { LangSwitcher } from './lang-switcher';
import { Link as NavLink } from '@/i18n/navigation';

export const Header = () => {
  const t = useTranslations('header');

  return (
    <header className="flex items-center justify-between px-10 pt-2 pb-3.5 max-md:px-2">
      <NavLink href="/">
        <Image src="/logo.svg" alt="Logo" width={148} height={24} />
      </NavLink>
      <nav className="flex items-center gap-7 max-md:hidden">
        <NavLink href="/services">
          <Text>{t('services', { fallback: 'Services' })}</Text>
        </NavLink>
        <NavLink href="/tailored-plans">
          <Text>{t('plans', { fallback: 'Plans' })}</Text>
        </NavLink>
        <NavLink href="/about-our-agency">
          <Text>{t('aboutUs', { fallback: 'About Us' })}</Text>
        </NavLink>
        <NavLink href="/story-time">
          <Text>{t('storyTime', { fallback: 'Story Time' })}</Text>
        </NavLink>
      </nav>
      <section className="flex items-center gap-6 max-md:hidden">
        <div className="flex items-center gap-4">
          {/* <Link href="tel:+15551234567" className="flex items-center gap-1">
            <PhoneIcon />
            <Text>+1 (555) 123-4567</Text>
          </Link> */}
          <Link
            href="mailto:info@marketeloro.com"
            className="flex items-center gap-1"
          >
            <MailIcon />
            <Text>info@marketeloro.com</Text>
          </Link>
        </div>
        {/* <SocialNetworks /> */}
        <div className="flex items-center gap-6">
          <NavLink href="/contact-us">
            <Button className="py-1">
              {t('contactUs', { fallback: 'Contact Us' })}
            </Button>
          </NavLink>
          <LangSwitcher />
        </div>
      </section>
      <section className="hidden max-md:flex">
        <BurgerMenu />
      </section>
    </header>
  );
};
