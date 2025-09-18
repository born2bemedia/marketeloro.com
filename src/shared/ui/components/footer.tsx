'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Divider } from '@/shared/ui/kit/divider';
import { Text } from '@/shared/ui/kit/text';

import { MailIcon } from '../icons/mail';
import { Link as NavLink } from '@/i18n/navigation';

export const Footer = () => {
  const t = useTranslations('footer');

  return (
    <footer className="flex flex-col gap-[42px] overflow-hidden bg-[#030213] px-10 pt-[60px] max-md:px-2">
      <section className="flex justify-between gap-7 max-md:mx-0 max-md:flex-col">
        <div className="flex gap-7 max-md:flex-col">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="199"
            height="200"
            viewBox="0 0 199 200"
            fill="none"
          >
            <path
              d="M118.714 58.9969H122.179C122.949 54.3739 122.564 50.9066 126.028 47.4393C129.493 43.972 151.821 27.4061 154.901 26.2503C166.065 21.6273 176.459 31.6439 172.61 43.2015L141.812 86.35C146.432 87.891 149.127 82.1122 154.516 81.7269C159.906 81.3417 184.543 85.5795 189.163 87.1205C201.482 90.5878 202.637 107.924 190.318 112.162C177.999 116.4 156.441 116.785 142.582 119.097C128.723 121.408 146.432 123.72 147.972 124.49C151.051 126.031 168.76 149.146 171.07 153.384C177.999 166.098 168.76 176.885 155.286 173.032L113.71 142.212C110.245 146.45 117.174 149.917 117.174 155.696C117.174 161.475 113.71 185.746 112.17 190.754C108.32 203.082 91.3815 203.082 87.1469 190.754L80.2175 140.671H77.1378L73.2882 151.843C65.5888 155.696 48.6502 172.647 41.7208 174.188C30.5568 176.114 23.2424 167.639 26.3221 156.852C28.6319 150.687 57.8894 116.785 57.1195 114.474C56.3496 110.236 49.805 116.785 47.8802 117.17C43.6456 118.326 12.4634 114.088 7.84378 112.547C-4.09019 107.924 -1.78058 89.8173 10.5384 87.5057L59.8143 80.1859L58.6592 77.1039C55.1945 76.7186 50.9601 76.3334 48.2653 74.0218C45.5705 71.7103 29.4017 49.7508 27.8619 46.2835C21.3174 33.9554 32.0967 21.6273 44.4156 27.0208C56.7346 32.4144 71.7482 49.7508 84.0672 56.3002C96.3861 62.8495 85.992 57.4559 87.1469 57.0707C87.1469 51.6771 82.5272 50.1361 82.5272 44.3573C82.5272 38.5784 85.9919 14.6926 87.5317 9.29909C91.3814 -3.4143 109.475 -3.029 112.94 10.0696L119.869 59.7674L118.714 58.9969Z"
              fill="white"
            />
          </svg>
          <section className="flex w-[444px] flex-col gap-5 max-[1040px]:w-full">
            <div className="flex flex-col gap-2.5">
              {/* <Link href="tel:+15551234567" className="flex items-center gap-1">
              <PhoneIcon color="white" />
              <Text color="white">+1 (555) 123-4567</Text>
            </Link> */}
              <Link
                href="mailto:info@marketeloro.com"
                className="flex items-center gap-1"
              >
                <MailIcon color="white" />
                <Text color="white">info@marketeloro.com</Text>
              </Link>
            </div>
            {/* <SocialNetworks iconsColor="white" /> */}
            <Text color="white">
              {t('officeAddress', { fallback: 'Office Address:' })}
              <br /> 2-8 Anton St, Lower Clapton, London, United Kingdom, E8 2AD
            </Text>
          </section>
        </div>
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
              {
                text: t('storytime', { fallback: 'StoryTime' }),
                href: '/story-time',
              },
              {
                text: t('contactUs', { fallback: 'Contact Us' }),
                href: '/contact-us',
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
              fallback: 'Inteloro Limited. All Rights Reserved.',
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
        <NavLink href={link.href} key={link.href}>
          <Text color="white" size="base">
            {link.text}
          </Text>
        </NavLink>
      ))}
    </nav>
  </div>
);
