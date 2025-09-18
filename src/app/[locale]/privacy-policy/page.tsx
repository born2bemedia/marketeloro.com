import type { Metadata } from 'next';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

import { PolicyHero } from '@/features/policies/ui/policy-hero';
import { PolicyLayout } from '@/features/policies/ui/policy-layout';
import { PolicySection } from '@/features/policies/ui/policy-section';

import { List } from '@/shared/ui/kit/list';
import { Text } from '@/shared/ui/kit/text';

import { Link as NavLink } from '@/i18n/navigation';

export const metadata: Metadata = {
  title: 'Privacy Policy | Marketeloro',
  description:
    'Your privacy matters. Read Marketeloro’s policy on data protection, GDPR compliance, and how we safeguard your information.',
  openGraph: {
    title: 'Privacy Policy | Marketeloro',
    description:
      'Your privacy matters. Read Marketeloro’s policy on data protection, GDPR compliance, and how we safeguard your information.',
    images: 'https://marketeloro.com/meta.jpg',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Marketeloro',
    description:
      'Your privacy matters. Read Marketeloro’s policy on data protection, GDPR compliance, and how we safeguard your information.',
    images: ['https://marketeloro.com/meta.jpg'],
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default async function PrivacyPolicy() {
  const t = await getTranslations('privacyPolicy');

  return (
    <main>
      <PolicyHero title={t('title', { fallback: 'Privacy Policy' })} />
      <PolicyLayout>
        <PolicySection>
          <Text size="base">
            {t('0.0.0', {
              fallback: 'This Policy explains how',
            })}{' '}
            <span className="font-bold">Marketeloro</span>{' '}
            {t('0.0.1', {
              fallback:
                '(“Company,” “we,” or “our”) collects, processes, and safeguards personal data when you visit',
            })}
            <Link href="https://marketeloro.com">https://marketeloro.com</Link>,
            {t('0.0.2', {
              fallback:
                'request marketing services, download materials, or otherwise engage with our team and platform (together, the “Site”).',
            })}{' '}
            <br />
            {t('0.0.3', {
              fallback: 'Marketeloro is operated by',
            })}{' '}
            <span className="font-bold">Inteloro Limited</span>, a
            {t('0.0.4', {
              fallback:
                'company registered under the laws of [insert jurisdiction]. The Company conducts its activities under the brand name',
            })}{' '}
            <span className="font-bold">“Marketeloro”.</span>
          </Text>
          <Text size="base">
            {t('0.3', {
              fallback:
                'Registered Address: 2nd Floor College House, 17 King Edwards Road, Ruislip, London, United Kingdom, HA4 7AE.',
            })}
          </Text>
          <Text size="base">
            {t('0.4', {
              fallback: 'Registered number: 16381595',
            })}
          </Text>
          <Text size="base">
            {t('0.1', {
              fallback:
                'We take your privacy seriously and are committed to handling all personal data in a lawful, transparent, and secure manner. By using the Marketeloro website or services, you confirm that you have read and accepted the practices outlined in this Policy.',
            })}
          </Text>
          <Text size="base">
            {t('0.2', {
              fallback:
                'For any questions or concerns regarding data management, you may reach us at',
            })}{' '}
            <Link href="mailto:info@marketeloro.com" className="underline">
              info@marketeloro.com
            </Link>
            .
          </Text>
        </PolicySection>
        <PolicySection
          title={t('3.title', { fallback: 'Personal Details You Provide' })}
        >
          <Text size="base">
            {t('3.0', {
              fallback:
                'We collect personal information that you voluntarily share with us',
            })}
          </Text>
          <List
            values={[
              <span key="0">
                <span className="font-bold">
                  {t('3.list.0.0', {
                    fallback:
                      'Fill out a contact form or submit a consultation request',
                  })}
                </span>
                ,{' '}
                {t('3.list.0.1', {
                  fallback:
                    'providing the details necessary for us to respond to your',
                })}
              </span>,
              <span key="1">
                <span className="font-bold">
                  {t('3.list.1.0', {
                    fallback:
                      'Purchase services, subscriptions, or tailored packages',
                  })}
                </span>
                ,{' '}
                {t('3.list.1.1', {
                  fallback:
                    'which requires us to gather payment information and essential',
                })}
              </span>,
              <span key="2">
                <span className="font-bold">
                  {t('3.list.2.0', {
                    fallback:
                      'Subscribe to newsletters, updates, or case studies',
                  })}
                </span>
                ,{' '}
                {t('3.list.2.1', {
                  fallback:
                    'allowing us to keep you informed about marketing insights,',
                })}
              </span>,
              <span key="3">
                <span className="font-bold">
                  {t('3.list.3.0', {
                    fallback:
                      'Engage in direct communication with our consultants or support',
                  })}
                </span>
                ,{' '}
                {t('3.list.3.1', {
                  fallback:
                    'whether by email, phone, or chat, in the course of receiving',
                })}
              </span>,
              <span key="4">
                <span className="font-bold">
                  {t('3.list.4.0', {
                    fallback:
                      'Provide responses through surveys, questionnaires, or',
                  })}
                </span>
                ,{' '}
                {t('3.list.4.1', {
                  fallback:
                    'helping us refine our services and better understand your',
                })}
              </span>,
              <span key="5">
                <span className="font-bold">
                  {t('3.list.5.0', {
                    fallback:
                      'Apply for open positions, internships, or collaborative opportunities',
                  })}
                </span>
                ,{' '}
                {t('3.list.5.1', {
                  fallback:
                    'where we may request additional details such as your CV, portfolio, or professional background.',
                })}
              </span>,
            ]}
          />
          <Text size="base">
            {t('3.1', {
              fallback:
                'The types of personal information we may collect or store include,',
            })}
          </Text>
          <List
            values={[
              <span key="0">
                <span className="font-bold">
                  {t('3.list2.0.0', {
                    fallback:
                      'Your full name, email address, and contact phone number',
                  })}
                </span>
                ,{' '}
                {t('3.list2.0.1', {
                  fallback: 'which are used to identify and reach you.',
                })}
              </span>,
              <span key="1">
                <span className="font-bold">
                  {t('3.list2.1.0', {
                    fallback:
                      'Billing information, payment details, and postal address',
                  })}
                </span>
                ,{' '}
                {t('3.list2.1.1', {
                  fallback:
                    'required for processing orders and issuing invoices.',
                })}
              </span>,
              <span key="2">
                <span className="font-bold">
                  {t('3.list2.2.0', {
                    fallback: 'Company or brand details',
                  })}
                </span>
                ,{' '}
                {t('3.list2.2.1', {
                  fallback:
                    'including the name of your business and relevant identifiers, to ensure proper service alignment.',
                })}
              </span>,
              <span key="3">
                <span className="font-bold">
                  {t('3.list2.3.0', {
                    fallback:
                      'Business stage, industry sector, and growth objectives',
                  })}
                </span>
                , which help us tailor strategies to your specific situation.
              </span>,
              <span key="4">
                <span className="font-bold">
                  {t('3.list2.4.0', {
                    fallback:
                      'Preferences and interests regarding services, content, or communication frequency',
                  })}
                </span>
                ,{' '}
                {t('3.list2.4.1', {
                  fallback: 'which allow us to customize your experience.',
                })}
              </span>,
              <span key="5">
                <span className="font-bold">
                  {t('3.list2.5.0', {
                    fallback:
                      'Any additional information you voluntarily provide',
                  })}
                </span>
                ,{' '}
                {t('3.list2.5.1', {
                  fallback:
                    'such as notes about your project, special requirements, or context for collaboration.',
                })}
              </span>,
            ]}
          />
          <Text size="base">
            {t('3.2', {
              fallback:
                'This data is used exclusively for the purposes of delivering services, fulfilling contractual obligations, maintaining accurate internal records, and complying with applicable legal or regulatory requirements.',
            })}
          </Text>
        </PolicySection>
        <PolicySection
          title={t('4.title', {
            fallback: 'Information Collected Automatically',
          })}
        >
          <Text size="base">
            {t('4.0', {
              fallback:
                'When you visit the Marketeloro website, certain technical data may be logged automatically, such as:',
            })}
          </Text>
          <List
            values={[
              t('4.list.0', {
                fallback: 'IP address and approximate geolocation',
              }),
              t('4.list.1', {
                fallback: 'Browser type, device model, and operating system',
              }),
              t('4.list.2', {
                fallback: 'Language preferences',
              }),
              t('4.list.3', {
                fallback: 'Pages visited, time spent, and navigation patterns',
              }),
              t('4.list.4', {
                fallback: 'Entry sources (ads, search results, referral links)',
              }),
              t('4.list.5', {
                fallback:
                  'Session data including clicks and on-site interactions',
              }),
            ]}
          />
          <Text size="base">
            {t('4.1.0', {
              fallback:
                'This data is gathered through cookies, tracking tools, and analytics software. It helps us improve performance, understand user behavior, and enhance your browsing experience.',
            })}
            <br />
            <span>
              {t('4.1.1.0', {
                fallback: 'See our',
              })}{' '}
              <NavLink href="/cookie-policy" className="underline">
                {t('4.1.1.1', {
                  fallback: 'Cookie Policy',
                })}
              </NavLink>{' '}
              {t('4.1.1.2', {
                fallback: 'See our Cookie Policy for full details.',
              })}
            </span>
          </Text>
        </PolicySection>
        <PolicySection
          title={t('5.title', { fallback: 'Managing Cookies and Tracking' })}
        >
          <Text size="base">
            {t('5.0', {
              fallback:
                'You can decide how cookies are used on your device by adjusting',
            })}
          </Text>
          <Text size="base">
            <span className="font-bold">
              {t('5.1.0', { fallback: 'Please note:' })}
            </span>{' '}
            {t('5.1.1', {
              fallback:
                'turning off certain cookies may limit functionality or prevent parts',
            })}
          </Text>
        </PolicySection>
        <PolicySection
          title={t('6.title', {
            fallback: 'Data Combination for Better Services',
          })}
        >
          <Text size="base">
            {t('6.0', {
              fallback:
                'We may merge data from different interactions (e.g., forms,',
            })}
          </Text>
        </PolicySection>
        <PolicySection
          title={t('7.title', { fallback: 'When Information Is Missing' })}
        >
          <Text size="base">
            {t('7.0', {
              fallback:
                'Certain data is necessary for us to process services effectively. For instance, without a valid email address or payment details, we may not be able to confirm your booking or fulfill your request.',
            })}
          </Text>
          <Text size="base">
            {t('7.1', {
              fallback:
                'You are responsible for making sure the information you provide is accurate and up to date.',
            })}
          </Text>
        </PolicySection>
        <PolicySection
          title={t('8.title', { fallback: 'Protection of Minors' })}
        >
          <Text size="base">
            {t('8.0', {
              fallback:
                'Marketeloro does not intentionally collect or store personal',
            })}
          </Text>
        </PolicySection>
        <PolicySection
          title={t('9.title', { fallback: 'How We Use Collected Data' })}
        >
          <Text size="base">
            {t('9.0', {
              fallback:
                'We handle your personal information based on one or more legal grounds, depending on the nature of your interaction with Marketeloro:',
            })}
          </Text>
          <div className="flex flex-col">
            <Text size="base" weight={700}>
              {t('9.1', { fallback: '1. Contractual Necessity' })}
            </Text>
            <Text size="base">
              {t('9.2', {
                fallback:
                  'To fulfill our agreement with you and deliver requested services,',
              })}
            </Text>
          </div>
          <List
            values={[
              t('9.list.0', {
                fallback: 'Process service bookings, invoices, and payments',
              }),
              t('9.list.1', {
                fallback: 'Grant access to deliverables or project materials',
              }),
              t('9.list.2', {
                fallback: 'Verify your identity to secure account access',
              }),
              t('9.list.3', {
                fallback:
                  'Send important service-related notices or updates about your order, campaign, or consultation',
              }),
            ]}
          />
          <Text>
            {t('9.3', {
              fallback:
                'These activities allow us to maintain a reliable and professional',
            })}
          </Text>
          <div className="flex flex-col">
            <Text size="base" weight={700}>
              {t('9.4', { fallback: '2. Legitimate Business Purposes' })}
            </Text>
            <Text size="base">
              {t('9.5.0', {
                fallback:
                  'We may process your data to operate, improve, and protect',
              })}{' '}
              <span className="font-bold">Marketeloro’s</span>{' '}
              {t('9.5.1', {
                fallback: 'platform and services, such as by:',
              })}
            </Text>
          </div>
          <List
            values={[
              t('9.list2.0', {
                fallback: 'Enhancing navigation and usability on our website',
              }),
              t('9.list2.1', {
                fallback:
                  'Personalizing content and recommendations based on your preferences',
              }),
              t('9.list2.2', {
                fallback:
                  'Providing client support and responding to inquiries',
              }),
              t('9.list2.3', {
                fallback: 'Suggesting relevant resources, services, or updates',
              }),
              t('9.list2.4', {
                fallback:
                  'Tracking engagement to evaluate and improve services',
              }),
              t('9.list2.5', {
                fallback: 'Safeguarding against fraud or unauthorized use',
              }),
              t('9.list2.6', {
                fallback: 'Conducting surveys, research, or usability testing',
              }),
            ]}
          />
          <Text size="base">
            {t('9.6', {
              fallback:
                'Where permitted by law, we may also use your contact details to send updates or marketing content. You may opt out of promotional messages at any time. All such use is carefully balanced with your privacy rights.',
            })}
          </Text>
        </PolicySection>
        <PolicySection
          title={t('10.title', {
            fallback: 'Aggregated & Anonymized Data',
          })}
        >
          <Text size="base">
            {t('10.0', {
              fallback:
                'We may process information in an anonymized or combined form to',
            })}
          </Text>
        </PolicySection>
        <PolicySection
          title={t('11.title', { fallback: 'Sharing of Information' })}
        >
          <Text size="base">
            {t('11.0', {
              fallback:
                'We do not sell, trade, or lease your personal information. Data is',
            })}
          </Text>
          <div className="flex flex-col">
            <Text size="base" weight={700}>
              {t('11.1', { fallback: '1. Trusted Service Providers' })}
            </Text>
            <Text size="base">
              {t('11.2', {
                fallback:
                  'We partner with third parties that support the operation of Marketeloro, such as:',
              })}
            </Text>
          </div>
          <List
            values={[
              t('11.list.0', {
                fallback: 'Hosting and cloud infrastructure services',
              }),
              t('11.list.1', {
                fallback: 'Payment gateways and billing systems',
              }),
              t('11.list.2', {
                fallback: 'CRM and email marketing platforms',
              }),
              t('11.list.3', {
                fallback: 'Analytics and performance tracking tools',
              }),
              t('11.list.4', {
                fallback:
                  'Scheduling, communication, and project management solutions',
              }),
              t('11.list.5', {
                fallback:
                  'Professional advisors (legal, financial, or compliance-related)',
              }),
            ]}
          />
          <Text size="base">
            {t('11.3', {
              fallback:
                'Each of these providers is carefully vetted and bound by contractual obligations to safeguard your data.',
            })}
          </Text>
          <div className="flex flex-col">
            <Text size="base" weight={700}>
              {t('11.4', { fallback: '2. Legal & Regulatory Requirements' })}
            </Text>
            <Text size="base">
              {t('11.5', {
                fallback:
                  'We may disclose information if legally required to do so,',
              })}
            </Text>
          </div>
          <List
            values={[
              t('11.list2.0', {
                fallback:
                  'Responding to government or regulatory authority requests',
              }),
              t('11.list2.1', {
                fallback:
                  'Complying with tax, financial reporting, or audit obligations',
              }),
              t('11.list2.2', {
                fallback:
                  'Investigating potential violations of our Terms and Conditions',
              }),
              t('11.list2.3', {
                fallback:
                  'Protecting the safety, rights, or property of our users, staff, or partners',
              }),
            ]}
          />
          <Text size="base">
            {t('11.6', {
              fallback:
                'Such disclosures occur only when strictly necessary and in',
            })}
          </Text>
          <div className="flex flex-col">
            <Text size="base" weight={700}>
              {t('11.7', { fallback: '3. Security & Fraud Prevention' })}
            </Text>
            <Text size="base">
              {t('11.8', {
                fallback:
                  'We may access, monitor, or share data when needed to:',
              })}
            </Text>
          </div>
          <List
            values={[
              t('11.list3.0', {
                fallback: 'Detect or prevent fraudulent activity',
              }),
              t('11.list3.1', {
                fallback:
                  'Investigate abuse, misuse, or technical vulnerabilities',
              }),
              t('11.list3.2', {
                fallback: 'Respond to security risks or incidents',
              }),
            ]}
          />
          <Text size="base">
            {t('11.9', {
              fallback:
                'These actions are taken solely to protect both you and our platform',
            })}
          </Text>
          <div className="flex flex-col">
            <Text size="base" weight={700}>
              {t('11.10', { fallback: '4. With Your Authorization' })}
            </Text>
            <Text size="base">
              {t('11.11', {
                fallback:
                  'We will share your information in additional ways only if:',
              })}
            </Text>
          </div>
          <List
            values={[
              t('11.list4.0', {
                fallback: 'You provide explicit consent, or',
              }),
              t('11.list4.1', {
                fallback:
                  'You were informed at the time of collection that such sharing would occur',
              }),
            ]}
          />
          <Text size="base">
            {t('11.12', {
              fallback:
                'Your consent-based sharing is always optional, and you retain the right to withdraw it at any time.',
            })}
          </Text>
        </PolicySection>
        <PolicySection
          title={t('12.title', {
            fallback: 'Safeguarding Your Information and Data Storage',
          })}
        >
          <Text size="base">
            {t('12.0', {
              fallback:
                'We take the protection of your personal data seriously. Marketeloro',
            })}
          </Text>
          <div className="flex flex-col">
            <Text size="base">
              {t('12.1', {
                fallback: 'These may include:',
              })}
            </Text>
            <List
              values={[
                t('12.list.0', {
                  fallback: 'SSL encryption of data transfers',
                }),
                t('12.list.1', {
                  fallback: 'Role-based permissions and restricted access',
                }),
                t('12.list.2', {
                  fallback: 'Secure hosting environments with regular backups',
                }),
                t('12.list.3', {
                  fallback:
                    'Internal protocols and employee training on data handling',
                }),
              ]}
            />
          </div>
          <Text size="base">
            {t('12.13', {
              fallback:
                'While we strive to apply industry best practices, no system is',
            })}
          </Text>
          <div className="flex flex-col">
            <Text size="base">
              {t('12.14', {
                fallback:
                  'We keep personal data only for as long as it is necessary to:',
              })}
            </Text>
            <List
              values={[
                t('12.list5.0', {
                  fallback: 'Deliver contracted services',
                }),
                t('12.list5.1', {
                  fallback: 'Meet legal, tax, or compliance obligations',
                }),
                t('12.list5.2', {
                  fallback: 'Resolve disputes or enforce agreements',
                }),
              ]}
            />
            <Text size="base">
              {t('12.15', {
                fallback:
                  'Once data is no longer required, it is either deleted securely or',
              })}
            </Text>
          </div>
        </PolicySection>
        <PolicySection
          title={t('13.title', {
            fallback: 'Managing and Accessing Your Information',
          })}
        >
          <Text size="base">
            {t('13.0.0', {
              fallback: 'If you maintain an account with',
            })}{' '}
            <span className="font-bold">Marketeloro</span>,{' '}
            {t('13.0.1', {
              fallback:
                'you can view or update your details through your account dashboard or by contacting us directly.',
            })}{' '}
            <br />
            {t('13.0.2', {
              fallback:
                'Depending on your jurisdiction and applicable data protection laws,',
            })}{' '}
          </Text>
          <List
            values={[
              t('13.list.0', {
                fallback:
                  'Request a copy of the personal data we hold about you',
              }),
              t('13.list.1', {
                fallback: 'Ask us to update or delete incorrect information',
              }),
              t('13.list.2', {
                fallback: 'Restrict or object to certain types of processing',
              }),
              t('13.list.3', {
                fallback:
                  'Request a machine-readable copy of your data (data portability)',
              }),
            ]}
          />
          <Text size="base">
            {t('13.16', {
              fallback:
                'Please note that some data is essential for delivering our services.',
            })}
          </Text>
        </PolicySection>
        <PolicySection
          title={t('14.title', {
            fallback: 'Public Contributions and Shared Content',
          })}
        >
          <Text size="base">
            {t('14.0', {
              fallback:
                'If you choose to participate in community features such as webinars, workshops, feedback sessions, or group discussions, any content you share may be visible to other participants.',
            })}
          </Text>
          <Text size="base">
            {t('14.1', {
              fallback:
                'We encourage caution when disclosing personal or sensitive details in such spaces. For files, media, or documents uploaded, we recommend removing hidden metadata or unnecessary private information before submission.',
            })}{' '}
            <br />
            {t('14.2', {
              fallback: 'Unless otherwise requested, we',
            })}
          </Text>
        </PolicySection>
        <PolicySection
          title={t('15.title', {
            fallback: 'Policy Updates',
          })}
        >
          <Text size="base">
            {t('15.0.0', {
              fallback:
                'This Privacy Policy may be revised periodically to reflect changes in',
            })}{' '}
            <span className="font-bold">Marketeloro’s</span>{' '}
            {t('15.0.1', {
              fallback: 'services, business practices, or legal obligations.',
            })}
          </Text>
          <Text size="base">
            {t('15.1', {
              fallback:
                'When material updates occur, we will notify users via our website or through official communication channels. Continued use of our services after such updates indicates acceptance of the revised policy.',
            })}
          </Text>
        </PolicySection>
        <PolicySection
          title={t('16.title', {
            fallback: 'Age Verification and Eligibility',
          })}
        >
          <Text size="base">
            {t('16.0.0', {
              fallback:
                'Our services are intended only for individuals who are legally permitted to enter into binding agreements under applicable law. By accessing or using the Marketeloro website, you confirm that you are at least',
            })}{' '}
            <span className="font-bold">
              {t('16.0.1', { fallback: '18 years of age' })}
            </span>{' '}
            {t('16.0.2', {
              fallback:
                '(or the age of majority in your jurisdiction, if higher).',
            })}
          </Text>
          <Text size="base">
            {t('16.1', {
              fallback:
                'We may request proof of age or other verification documents where',
            })}
          </Text>
          <Text size="base">
            {t('16.2', {
              fallback:
                'Marketeloro does not knowingly enter into agreements or collect',
            })}
          </Text>
        </PolicySection>
        <PolicySection title={t('17.title', { fallback: 'Contacting Us' })}>
          <Text size="base">
            {t('17.0', {
              fallback:
                'If you have questions regarding this Privacy Policy, or if you wish to exercise your data protection rights, please contact us using the details below:',
            })}
          </Text>
          <List
            values={[
              <span key="0">
                {t('17.list.1', { fallback: 'Email' })}:{' '}
                <Link href="mailto:info@marketeloro.com" className="underline">
                  info@marketeloro.com
                </Link>
              </span>,
              <span key="1">
                {t('17.list.0', { fallback: 'Website:' })}{' '}
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
          <Text size="base">
            {t('17.1', {
              fallback:
                'We aim to respond to all requests in a timely and respectful manner.',
            })}
          </Text>
        </PolicySection>
      </PolicyLayout>
    </main>
  );
}
