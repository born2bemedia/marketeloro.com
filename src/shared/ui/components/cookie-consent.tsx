'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

import { cn } from '@/shared/lib/utils/cn';
import { lsRead, lsWrite } from '@/shared/lib/utils/ls';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';

import { PlayIcon } from '../icons/play';
import { Title } from '../kit/title';

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  const t = useTranslations('cookieConsent');

  useEffect(() => {
    const hasAcceptedCookies = lsRead('isCookiesAccepted');
    if (!hasAcceptedCookies) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    lsWrite('isCookiesAccepted', 'true');
    setIsVisible(false);
  };

  const handleDecline = () => setIsVisible(false);

  return (
    <div
      className={cn(
        'fixed right-6 bottom-6 left-6 z-20 flex w-[70%] items-center gap-5 rounded-[40px] border border-[#030213] bg-[#030213] p-5 shadow-[0px_0px_25px_0px_rgba(0,0,0,0.05)] max-md:w-[90%] max-md:flex-col max-md:items-start',
        !isVisible && 'hidden',
      )}
    >
      <section className="flex flex-col gap-3">
        <Title as="h3" size="3xl">
          {t('title', { fallback: 'Cookie settings' })}
        </Title>
        <Text size="base" color="white">
          {t('description', {
            fallback:
              "Cookies help us improve our website. By clicking 'Accept,' you agree to our use of cookies for functionality, analytics, and personalized content. Learn more in our Cookie Policy.",
          })}
        </Text>
      </section>
      <div className="flex items-center gap-6">
        <Button
          onClick={handleDecline}
          size="md"
          variant="reversed"
          className="gap-3"
        >
          {t('decline', { fallback: 'Decline' })}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M6.99984 12.8333C10.2082 12.8333 12.8332 10.2083 12.8332 6.99996C12.8332 3.79163 10.2082 1.16663 6.99984 1.16663C3.7915 1.16663 1.1665 3.79163 1.1665 6.99996C1.1665 10.2083 3.7915 12.8333 6.99984 12.8333Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.34912 8.65079L8.65079 5.34912"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.65079 8.65079L5.34912 5.34912"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
        <Button
          onClick={handleAccept}
          size="md"
          variant="secondary"
          className="gap-3"
        >
          {t('accept', { fallback: 'Accept' })}
          <PlayIcon color="black" />
        </Button>
      </div>
    </div>
  );
};
