'use client';

import Link from 'next/link';

import { FacebookIcon } from '../icons/socials/facebook';
import { InstagramIcon } from '../icons/socials/instagram';
import { TwitterIcon } from '../icons/socials/twitter';

export const SocialNetworks = ({ iconsColor }: { iconsColor?: string }) => {
  return (
    <section className="flex items-center gap-5">
      <Link href="https://www.instagram.com">
        <InstagramIcon color={iconsColor} />
      </Link>
      <Link href="https://www.x.com">
        <TwitterIcon color={iconsColor} />
      </Link>
      <Link href="https://www.facebook.com">
        <FacebookIcon color={iconsColor} />
      </Link>
    </section>
  );
};
