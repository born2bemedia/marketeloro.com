import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

import { PolicyHero } from '@/features/policies/ui/policy-hero';
import { PolicyLayout } from '@/features/policies/ui/policy-layout';
import { PolicySection } from '@/features/policies/ui/policy-section';

import { List } from '@/shared/ui/kit/list';
import { Text } from '@/shared/ui/kit/text';

export default async function CookiePolicy() {
  const t = await getTranslations('cookiePolicy');

  return (
    <main>
      <PolicyHero title={t('title', { fallback: 'Cookie Policy' })} />
      <PolicyLayout>
        <PolicySection>
          {/* <Text size="base">
            {t('0.0', {
              fallback: 'This Cookie Policy applies to the website',
            })}{' '}
            <Link
              href="https://marketeloro.com"
              target="_blank"
              className="underline"
            >
              https://marketeloro.com
            </Link>
            , {t('0.1', { fallback: 'which is operated by' })}{' '}
            <span className="font-bold">Reserve INTELORO LIMITED</span>,{' '}
            {t('0.2', { fallback: 'a company registered under the laws of' })}{' '}
            [insert jurisdiction]{' '}
            {t('0.3', {
              fallback: 'and conducting business under the brand name',
            })}{' '}
            <span className="font-bold">Marketeloro</span>,{' '}
            {t('0.4', { fallback: 'with its registered office at' })} [insert
            full registered address].
          </Text> */}
          <Text size="base">
            {t('0.5', {
              fallback:
                'By browsing or using the Site, you consent to the use of cookies and',
            })}
          </Text>
          <Text size="base">
            {t('0.6', {
              fallback:
                'You may manage or disable cookies at any time through your browser settings, though certain features of the Site may not function properly as a result.',
            })}
          </Text>
        </PolicySection>
        <PolicySection title="Understanding Cookies">
          <Text size="base">
            {t('1.0', {
              fallback:
                'Cookies are small data files that are placed on your device',
            })}
          </Text>
          <Text size="base">There are two main categories:</Text>
          <List
            values={[
              <span key="0">
                <span className="font-bold">
                  {t('1.list.0.0', { fallback: 'Session cookies' })}
                </span>{' '}
                –{' '}
                {t('1.list.0.1', {
                  fallback:
                    'Temporary files that disappear once you close your browser.',
                })}
              </span>,
              <span key="1">
                <span className="font-bold">
                  {t('1.list.1.0', { fallback: 'Persistent cookies' })}
                </span>{' '}
                –{' '}
                {t('1.list.1.1', {
                  fallback:
                    'Remain stored on your device until deleted by you or until their expiration date.',
                })}
              </span>,
            ]}
          />
          <Text size="base">
            {t('1.2.0', { fallback: 'Cookies on the' })}{' '}
            <span className="font-bold">Marketeloro</span>{' '}
            {t('1.2.1', {
              fallback:
                'site may be placed by us directly or by authorized third parties that provide tools and integrations.',
            })}
          </Text>
        </PolicySection>
        <PolicySection title={t('2.title', { fallback: 'Why We Use Cookies' })}>
          <Text size="base">
            {t('2.0.0', {
              fallback:
                'Cookies help ensure the smooth operation of our platform, improve performance, and deliver more relevant experiences to visitors.',
            })}
            <br />
            {t('2.0.1', {
              fallback: 'Specifically, they are used to:',
            })}
          </Text>
          <List
            values={[
              t('2.list.0', {
                fallback:
                  'Maintain secure login sessions and essential site functionality',
              }),
              t('2.list.1', {
                fallback:
                  'Recognize repeat users and apply stored preferences (e.g., language or location)',
              }),
              t('2.list.2', {
                fallback:
                  'Measure engagement with different sections of the website',
              }),
              t('2.list.3', {
                fallback:
                  'Optimize speed, design, and navigation based on user behavior',
              }),
              t('2.list.4', {
                fallback:
                  'Support advertising and promotional campaigns across partner platforms',
              }),
            ]}
          />
          <Text size="base">
            {t('2.1', {
              fallback:
                'By enabling cookies, we can continuously adapt and improve how the website serves your needs.',
            })}
          </Text>
        </PolicySection>
        <PolicySection
          title={t('3.title', { fallback: 'Categories of Cookies We Apply' })}
        >
          <div className="flex flex-col">
            <Text size="base" weight={700}>
              {t('3.0.0', { fallback: '1. Essential Cookies' })}
            </Text>
            <Text size="base">
              {t('3.0.1', {
                fallback:
                  'These are fundamental for the website to function. They enable login processes, checkout steps, secure form submissions, and other core features. If disabled, the Site may not operate as intended.',
              })}
            </Text>
          </div>
          <div className="flex flex-col">
            <Text size="base" weight={700}>
              {t('3.1.0', { fallback: '2. Analytics & Performance Cookies' })}
            </Text>
            <Text size="base">
              {t('3.1.1', {
                fallback:
                  'Used to understand how visitors interact with our pages. Tools like Google Analytics help track statistics such as session duration, navigation flows, and bounce rates. This information allows us to refine our services and enhance usability.',
              })}
            </Text>
          </div>
          <div className="flex flex-col">
            <Text size="base" weight={700}>
              {t('3.2.0', { fallback: '3. Preference Cookies' })}
            </Text>
            <Text size="base">
              {t('3.2.1', {
                fallback:
                  'These cookies save your choices — such as language, location, or autofill data, and provide a more personalized browsing experience during future visits.',
              })}
            </Text>
          </div>
          <div className="flex flex-col">
            <Text size="base" weight={700}>
              {t('3.3.0', { fallback: '4. Marketing & Targeting Cookies' })}
            </Text>
            <Text size="base">
              {t('3.3.1', {
                fallback:
                  'Set by us or third-party advertising partners, these cookies deliver tailored promotions on external platforms. They may also limit ad frequency and help us measure the success of campaigns.',
              })}
            </Text>
          </div>
        </PolicySection>
        <PolicySection
          title={t('4.title', { fallback: 'Use of Third-Party Cookies' })}
        >
          <Text size="base">
            {t('4.0', {
              fallback:
                'Some features of our Site rely on integrations with external',
            })}
          </Text>
          <div className="flex flex-col">
            <Text size="base">
              {t('4.1', { fallback: 'Examples include:' })}
            </Text>
            <List
              values={[
                <span key="0">
                  <span className="font-bold">
                    {t('4.list.0.0', { fallback: 'Google Analytics' })}
                  </span>{' '}
                  –{' '}
                  {t('4.list.0.1', {
                    fallback:
                      'website traffic insights and visitor behavior analysis',
                  })}
                </span>,
                <span key="1">
                  <span className="font-bold">
                    {t('4.list.1.0', { fallback: 'Meta (Facebook) Pixel' })}
                  </span>{' '}
                  –{' '}
                  {t('4.list.1.1', {
                    fallback:
                      'tracking advertising effectiveness and conversions',
                  })}
                </span>,
                <span key="2">
                  <span className="font-bold">
                    {t('4.list.2.0', { fallback: 'YouTube / Vimeo' })}
                  </span>{' '}
                  –{' '}
                  {t('4.list.2.1', {
                    fallback: 'enabling embedded video playback',
                  })}
                </span>,
              ]}
            />
          </div>
          <Text size="base">
            {t('4.2', {
              fallback:
                'Each third party is responsible for its own cookie practices. For further details, please review their respective policies.',
            })}
          </Text>
        </PolicySection>
        <PolicySection
          title={t('5.title', { fallback: 'Managing Cookie Settings' })}
        >
          <Text size="base">
            {t('5.0.0', {
              fallback:
                'You can manage or disable cookies at any time through your browser',
            })}
            <br />
            {t('5.0.1', {
              fallback: 'Most browsers allow you to:',
            })}
          </Text>
          <List
            values={[
              t('5.list.0', {
                fallback: 'View existing cookies',
              }),
              t('5.list.1', {
                fallback: 'Block cookies from specific websites',
              }),
              t('5.list.2', {
                fallback: 'Delete cookies manually',
              }),
              t('5.list.3', {
                fallback: 'Prevent all cookies from being saved',
              }),
            ]}
          />
          <Text size="base">
            {t('5.1.0', {
              fallback:
                'Please note: blocking or removing cookies may affect website performance, prevent login, or disable preference saving.',
            })}
            <br />
            {t('5.1.1', {
              fallback: 'When you first visit',
            })}{' '}
            <span className="font-bold">Marketeloro</span>
            {t('5.1.2', {
              fallback:
                'you will see a cookie banner. This allows you to adjust your cookie preferences before proceeding to use the Site.',
            })}
          </Text>
        </PolicySection>
        <PolicySection
          title={t('6.title', { fallback: '“Do Not Track” Signals' })}
        >
          <Text size="base">
            {t('6.0.0', {
              fallback:
                'Some browsers allow you to send “Do Not Track” (DNT) requests. At',
            })}{' '}
            <span className="font-bold">Marketeloro</span>{' '}
            {t('6.0.1', {
              fallback:
                'does not respond to DNT signals, as no global technical standard has yet been adopted for honoring such requests.',
            })}
          </Text>
        </PolicySection>
        <PolicySection
          title={t('7.title', { fallback: 'Age Verification and Cookie Use' })}
        >
          <Text size="base">
            {t('7.0.0.0', {
              fallback:
                'The Marketeloro platform is intended for use only by individuals who',
            })}{' '}
            <span className="font-bold">
              {t('7.0.0.1', { fallback: '18 years of age or older' })}
            </span>{' '}
            {t('7.0.0.2', {
              fallback:
                '(or the age of majority under applicable law in their jurisdiction).',
            })}
          </Text>
          <Text size="base">
            {t('7.0.1', {
              fallback:
                'We do not knowingly place cookies or collect personal data from minors. If we become aware that cookies have been used to track activity of a user under the required age, we will take immediate steps to disable tracking and delete related data.',
            })}
          </Text>
          <Text size="base">
            {t('7.0.2', {
              fallback:
                'In certain cases, we may request proof of age or apply verification tools before providing access to services, accounts, or promotional features that rely on cookies and related technologies.',
            })}
          </Text>
        </PolicySection>
        <PolicySection
          title={t('8.title', { fallback: 'Updates to This Policy' })}
        >
          <Text size="base">
            {t('8.0', {
              fallback:
                'We may revise this Cookie Policy occasionally to reflect changes in technology, applicable regulations, or how we use cookies. The “Last Updated” date will always indicate the most recent version.',
            })}
          </Text>
          <Text size="base">
            {t('8.1', {
              fallback:
                'In case of significant modifications, we will notify users via our website or through other appropriate communication channels.',
            })}
          </Text>
        </PolicySection>
        <PolicySection
          title={t('9.title', { fallback: 'Contact Information' })}
        >
          <Text size="base">
            {t('9.0', {
              fallback:
                'If you have questions or concerns about how cookies are used on our',
            })}
          </Text>
          <List
            values={[
              <span key="0">
                {t('9.1', { fallback: 'Website' })}:{' '}
                <Link
                  href="https://marketeloro.com"
                  target="_blank"
                  className="underline"
                >
                  https://marketeloro.com
                </Link>
              </span>,
            ]}
          />
        </PolicySection>
      </PolicyLayout>
    </main>
  );
}
