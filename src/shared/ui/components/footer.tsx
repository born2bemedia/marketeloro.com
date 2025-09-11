'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Divider } from '@/shared/ui/kit/divider';
import { Text } from '@/shared/ui/kit/text';

import { MailIcon } from '../icons/mail';
import { PhoneIcon } from '../icons/phone';
import { SocialNetworks } from './social-networks';

export const Footer = () => {
  const t = useTranslations('footer');

  return (
    <footer className="flex flex-col gap-[42px] overflow-hidden bg-[#030213] px-10 pt-[60px] max-md:px-2">
      <section className="mx-auto flex gap-7 max-md:mx-0 max-md:flex-col">
        <Image
          className="object-cover p-3"
          src="/images/footer.png"
          alt="footer-star"
          width={374}
          height={400}
          unoptimized
        />
        <section className="flex w-[444px] flex-col gap-5 max-[1040px]:w-full">
          <div className="flex flex-col gap-2.5">
            <Link href="tel:+15551234567" className="flex items-center gap-1">
              <PhoneIcon color="white" />
              <Text color="white">+1 (555) 123-4567</Text>
            </Link>
            <Link
              href="mailto:hello@marketeloro.com"
              className="flex items-center gap-1"
            >
              <MailIcon color="white" />
              <Text color="white">hello@marketeloro.com</Text>
            </Link>
          </div>
          <SocialNetworks iconsColor="white" />
          <nav className="flex flex-col gap-2">
            <Link href="/storytime">
              <Text color="white">
                {t('storytime', { fallback: 'StoryTime' })}
              </Text>
            </Link>
            <Link href="/contact-us">
              <Text color="white">
                {t('contactUs', { fallback: 'Contact Us' })}
              </Text>
            </Link>
          </nav>
          {/* <div className="flex flex-col gap-1">
            <Text color="white">Office address: [Office Address Here]</Text>
            <Text color="white">
              Registered address: [Registered Address Here]
            </Text>
          </div> */}
        </section>
        <section className="grid w-[444px] grid-cols-2 gap-7 max-[1040px]:w-full">
          <Navigation
            links={[
              {
                text: t('aboutOurAgency', { fallback: 'About Our Agency' }),
                href: '/about-our-agency',
              },
              {
                text: t('services', { fallback: 'Services' }),
                href: '/services',
              },
              {
                text: t('tailoredPlans', { fallback: 'Tailored Plans' }),
                href: '/tailored-plans',
              },
              {
                text: t('workWithUs', { fallback: 'Work with us' }),
                href: '/work-with-us',
              },
            ]}
            title={t('company', { fallback: 'COMPANY' })}
          />
          <Navigation
            links={[
              {
                text: t('termsAndConditions', {
                  fallback: 'Terms and Conditions',
                }),
                href: '/terms-and-conditions',
              },
              {
                text: t('privacyPolicy', { fallback: 'Privacy Policy' }),
                href: '/privacy-policy',
              },
              {
                text: t('cookiePolicy', { fallback: 'Cookie Policy' }),
                href: '/cookie-policy',
              },
              {
                text: t('refundPolicy', { fallback: 'Refund Policy' }),
                href: '/refund-policy',
              },
            ]}
            title={t('legal', { fallback: 'LEGAL' })}
          />
        </section>
      </section>
      <section className="flex flex-col gap-7">
        <Divider className="bg-white/20" />
        <div className="flex flex-col gap-4">
          <Text color="white">
            © {new Date().getFullYear()}{' '}
            {t('copyright', {
              fallback: 'Reserve INTELORO LIMITED. All Rights Reserved.',
            })}
          </Text>
          <Image
            className="h-auto w-full opacity-10"
            src="/images/footer-logo.png"
            alt="footer-logo"
            width={1360}
            height={192}
            unoptimized
          />
        </div>
      </section>
    </footer>
  );
};

const Navigation = ({
  links,
  title,
}: {
  title: string;
  links: { href: string; text: string }[];
}) => (
  <div className="flex flex-col gap-3.5">
    <Text color="white" weight={700} uppercase>
      {title}
    </Text>
    <nav className="flex flex-col gap-1.5">
      {links.map(link => (
        <Link href={link.href} key={link.href}>
          <Text color="white" size="base">
            {link.text}
          </Text>
        </Link>
      ))}
    </nav>
  </div>
);
