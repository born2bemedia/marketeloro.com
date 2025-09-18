import type { Metadata } from 'next';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

import { PolicyHero } from '@/features/policies/ui/policy-hero';
import { PolicyLayout } from '@/features/policies/ui/policy-layout';
import { PolicySection } from '@/features/policies/ui/policy-section';

import { List } from '@/shared/ui/kit/list';
import { Text } from '@/shared/ui/kit/text';

export const metadata: Metadata = {
  title: 'Refund Policy | Marketeloro',
  description:
    'Understand Marketeloro’s refund policy for services, packages, and transactions.',
  openGraph: {
    title: 'Refund Policy | Marketeloro',
    description:
      'Understand Marketeloro’s refund policy for services, packages, and transactions.',
    images: 'https://marketeloro.com/meta.jpg',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Refund Policy | Marketeloro',
    description:
      'Understand Marketeloro’s refund policy for services, packages, and transactions.',
    images: ['https://marketeloro.com/meta.jpg'],
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default async function RefundPolicy() {
  const t = await getTranslations('refundPolicy');

  return (
    <main>
      <PolicyHero title={t('title', { fallback: 'Refund Policy' })} />
      <PolicyLayout>
        <PolicySection>
          <Text size="base">
            {t('0.0.0', { fallback: 'At' })} <span>Marketeloro</span>,{' '}
            {t('0.0.1', { fallback: 'operated by' })}{' '}
            <span className="font-bold">Inteloro Limited</span>,{' '}
            {t('0.0.2', {
              fallback: 'a company registered under the laws of',
            })}
          </Text>
          <Text size="base">
            {t('0.1.0', {
              fallback:
                'By purchasing our services, you acknowledge and accept that all completed transactions are',
            })}{' '}
            <span className="font-bold">
              {t('0.1.1', { fallback: 'final and non-refundable' })}
            </span>{' '}
            {t('0.1.2', {
              fallback:
                'as our work commences immediately upon order confirmation.',
            })}
          </Text>
        </PolicySection>
        <PolicySection title="Client Responsibility">
          <Text size="base">
            {t('1.0', {
              fallback:
                'Before placing an order, we encourage you to make well-informed',
            })}
            <br />
            {t('1.1', { fallback: 'Please be sure to:' })}
          </Text>
          <List
            values={[
              t('1.list.0', {
                fallback:
                  'Review service descriptions, packages, and pricing carefully.',
              }),
              t('1.list.1', {
                fallback:
                  'Reach out to our team for any clarifications prior to making payment.',
              }),
              t('1.list.2', {
                fallback:
                  'Understand that completing a purchase indicates your acceptance of this Refund Policy.',
              }),
            ]}
          />
        </PolicySection>
        <PolicySection
          title={t('2.title', { fallback: 'Possible Exceptions' })}
        >
          <Text size="base">
            {t('2.0', {
              fallback:
                'While our standard approach does not include refunds, we may',
            })}
          </Text>
          <List
            values={[
              <span key="0">
                <span className="font-bold">
                  {t('2.list.0.0', {
                    fallback: 'Duplicate or Accidental Payments',
                  })}
                </span>{' '}
                —{' '}
                {t('2.list.0.1', {
                  fallback: 'if you were mistakenly charged more than once.',
                })}
              </span>,
              <span key="1">
                <span className="font-bold">
                  {t('2.list.1.0', { fallback: 'Billing Errors' })}
                </span>{' '}
                —{' '}
                {t('2.list.1.1', {
                  fallback:
                    'where an overcharge has occurred due to our mistake.',
                })}
              </span>,
              <span key="2">
                <span className="font-bold">
                  {t('2.list.2.0', { fallback: 'Technical Failures' })}
                </span>{' '}
                —{' '}
                {t('2.list.2.1', {
                  fallback:
                    'failed or incomplete transactions caused by system errors.',
                })}
              </span>,
              <span key="3">
                <span className="font-bold">
                  {t('2.list.3.0', { fallback: 'Service Non-Delivery' })}
                </span>{' '}
                —{' '}
                {t('2.list.3.1', {
                  fallback:
                    'if a purchased service cannot be provided due to reasons directly attributable to Marketeloro.',
                })}
              </span>,
            ]}
          />
        </PolicySection>
        <PolicySection
          title={t('3.title', { fallback: 'Requesting a Refund' })}
        >
          <Text size="base">
            {t('3.0', {
              fallback:
                'If you believe your case qualifies for an exception, please send us',
            })}
          </Text>
          <List
            values={[
              <span key="1">
                {t('3.list.0.0', { fallback: 'Your' })}{' '}
                <span className="font-bold">
                  {t('3.list.0.1', { fallback: 'full name' })}
                </span>{' '}
                {t('3.list.0.2', { fallback: 'and' })}{' '}
                <span className="font-bold">
                  {t('3.list.0.3', { fallback: 'email' })}
                </span>{' '}
                {t('3.list.0.4', { fallback: 'used for the order' })}
              </span>,
              <span key="2">
                <span className="font-bold">
                  {t('3.list.1.0', { fallback: 'Date' })}
                </span>{' '}
                {t('3.list.1.1', { fallback: 'and' })}{' '}
                <span className="font-bold">
                  {t('3.list.1.2', { fallback: 'proof of transaction' })}
                </span>{' '}
                {t('3.list.1.3', { fallback: '(ID, receipt, or invoice)' })}
              </span>,
              t('3.list.2', { fallback: 'A short explanation of the issue' }),
            ]}
          />
          <Text size="base">
            {t('3.1', { fallback: 'Requests should be submitted via email:' })}{' '}
            <Link href="mailto:info@marketeloro.com" className="underline">
              info@marketeloro.com
            </Link>
          </Text>
        </PolicySection>
        <PolicySection title={t('4.title', { fallback: 'Review Procedure' })}>
          <List
            values={[
              <span key="1">
                <span className="font-bold">
                  {t('4.list.0.0', { fallback: 'Assessment' })}
                </span>
                :{' '}
                {t('4.list.0.1', {
                  fallback:
                    'Each request will be evaluated by our billing team.',
                })}
              </span>,
              <span key="2">
                <span className="font-bold">
                  {t('4.list.1.0', { fallback: 'Verification' })}
                </span>
                :{' '}
                {t('4.list.1.1', {
                  fallback: 'We will check payment records and service logs.',
                })}
              </span>,
              <span key="3">
                <span className="font-bold">
                  {t('4.list.2.0', { fallback: 'Response Time' })}
                </span>
                :{' '}
                {t('4.list.2.1', {
                  fallback: 'A decision will be provided within',
                })}{' '}
                <span className="font-bold">
                  {t('4.list.2.2', { fallback: '7 working days' })}
                </span>{' '}
                {t('4.list.2.3', {
                  fallback: 'of receiving your request.',
                })}
              </span>,
            ]}
          />
        </PolicySection>
        <PolicySection
          title={t('5.title', { fallback: 'Outcome Notification' })}
        >
          <Text size="base">
            {t('5.0', {
              fallback:
                'Once our review is complete, you will be informed of the result by email. Refund approvals are strictly case-based and guided by this policy.',
            })}
          </Text>
        </PolicySection>
        <PolicySection title={t('6.title', { fallback: 'Contact Us' })}>
          <Text size="base">
            {t('6.0', {
              fallback:
                'For questions or assistance regarding this policy, you can contact',
            })}
          </Text>
          <List
            values={[
              <span key="0">
                {t('6.list.1', { fallback: 'Email' })}:{' '}
                <Link href="mailto:info@marketeloro.com" className="underline">
                  info@marketeloro.com
                </Link>
              </span>,
              <span key="1">
                {t('6.list.0', { fallback: 'Contact Form' })}:{' '}
                <Link href="/contact-us" className="underline">
                  https://marketeloro.com/contact-us
                </Link>
              </span>,
            ]}
          />
          <Text size="base">
            {t('6.1', {
              fallback:
                'Our support team is available during business hours to assist with',
            })}
          </Text>
        </PolicySection>
        <PolicySection title={t('7.title', { fallback: 'Policy Changes' })}>
          <Text size="base">
            {t('7.0', {
              fallback:
                'Marketeloro reserves the right to update this Refund Policy at any time. Revised versions will be published here and considered effective immediately. Clients are encouraged to check this page periodically for updates.',
            })}
          </Text>
        </PolicySection>
      </PolicyLayout>
    </main>
  );
}
