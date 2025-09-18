import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { NextIntlClientProvider } from 'next-intl';
import { GoogleAnalytics } from '@next/third-parties/google';

import { RequestDialog } from '@/features/request-form/ui/request-dialog';

import { cn } from '@/shared/lib/utils/cn';
import { CookieConsent } from '@/shared/ui/components/cookie-consent';
import { Footer } from '@/shared/ui/components/footer';
import { Header } from '@/shared/ui/components/header';

import './globals.css';

const trjnDaVinci = localFont({
  src: [
    {
      path: '../../../public/fonts/trjn-davinci/regular.otf',
      weight: '400',
      style: 'normal',
    },
  ],
});

const clashGrotesk = localFont({
  src: [
    {
      path: '../../../public/fonts/clash-grotesk/light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/clash-grotesk/regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/clash-grotesk/medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/clash-grotesk/semibold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/clash-grotesk/bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
});

export const metadata: Metadata = {
  title: 'Memorable Marketing That Drives Real Growth | Marketeloro',
  description:
    'Discover Marketeloro, a full-service B2C marketing agency helping brands achieve +142% growth. We create campaigns people love — built on strategy, creativity, and data.',
  openGraph: {
    title: 'Memorable Marketing That Drives Real Growth | Marketeloro',
    description:
      'Discover Marketeloro, a full-service B2C marketing agency helping brands achieve +142% growth. We create campaigns people love — built on strategy, creativity, and data.',
    images: 'https://marketeloro.com/meta.jpg',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Memorable Marketing That Drives Real Growth | Marketeloro',
    description:
      'Discover Marketeloro, a full-service B2C marketing agency helping brands achieve +142% growth. We create campaigns people love — built on strategy, creativity, and data.',
    images: ['https://marketeloro.com/meta.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId="G-QY0JG07K55" />
      <body
        className={cn(
          trjnDaVinci.className,
          clashGrotesk.className,
          'antialiased',
        )}
      >
        <NextIntlClientProvider>
          <Header />
          {children}
          <RequestDialog />
          <CookieConsent />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
