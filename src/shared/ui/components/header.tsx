'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { CartIcon } from '@/shared/ui/icons/cart';
import { MailIcon } from '@/shared/ui/icons/mail';
import { PhoneIcon } from '@/shared/ui/icons/phone';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';

import { SocialNetworks } from './social-networks';

export const Header = () => {
  const t = useTranslations('header');

  return (
    <header className="flex items-center justify-between px-10 pt-2 pb-3.5 max-md:px-2">
      <Image src="/logo.svg" alt="Logo" width={37} height={40} />
      <nav className="flex items-center gap-7 max-md:hidden">
        <Link href="/services">
          <Text>{t('services', { fallback: 'Services' })}</Text>
        </Link>
        <Link href="/about-us">
          <Text>{t('aboutUs', { fallback: 'About Us' })}</Text>
        </Link>
        <Link href="/about-us">
          <Text>{t('contact', { fallback: 'Contact' })}</Text>
        </Link>
      </nav>
      <section className="flex items-center gap-6 max-md:hidden">
        <div className="flex items-center gap-4">
          <Link href="tel:+15551234567" className="flex items-center gap-1">
            <PhoneIcon />
            <Text>+1 (555) 123-4567</Text>
          </Link>
          <Link
            href="mailto:hello@marketeloro.com"
            className="flex items-center gap-1"
          >
            <MailIcon />
            <Text>hello@marketeloro.com</Text>
          </Link>
        </div>
        <SocialNetworks />
        <Button>
          {t('cart', { fallback: 'Cart' })} <CartIcon />
        </Button>
      </section>
      <section className="hidden max-md:flex">
        <Text>{t('menu', { fallback: 'Menu' })}</Text>
      </section>
    </header>
  );
};
