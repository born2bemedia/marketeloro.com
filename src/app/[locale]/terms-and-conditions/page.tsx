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
  title: 'Terms and Conditions | Marketeloro',
  description:
    'Review Marketeloro’s terms and conditions to understand our policies, services, and client agreements.',
  openGraph: {
    title: 'Terms and Conditions | Marketeloro',
    description:
      'Review Marketeloro’s terms and conditions to understand our policies, services, and client agreements.',
    images: 'https://marketeloro.com/meta.jpg',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms and Conditions | Marketeloro',
    description:
      'Review Marketeloro’s terms and conditions to understand our policies, services, and client agreements.',
    images: ['https://marketeloro.com/meta.jpg'],
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default async function TermsAndConditions() {
  const t = await getTranslations('termsAndConditions');

  return (
    <main>
      <PolicyHero title={t('title', { fallback: 'Terms and Conditions' })} />
      <PolicyLayout>
        <PolicySection>
          <Text size="base">
            {t('0.0.0', { fallback: 'Welcome to Marketeloro.' })} <br />
            {t('0.0.1', {
              fallback:
                'These Terms and Conditions (“Terms”) establish the guidelines under which you (“you,” “client,” or “user”) may browse our website and access any marketing or strategic services offered by us.',
            })}{' '}
            <br />
            {t('0.0.2', {
              fallback:
                'By visiting our site, submitting a request, purchasing a service, or',
            })}{' '}
          </Text>
          <Text size="base">
            <span className="font-bold">
              {t('0.1.0', { fallback: 'Disclaimer:' })}
            </span>{' '}
            {t('0.1.1', {
              fallback:
                'Any examples, visuals, testimonials, or case studies presented on the Marketeloro website are provided for demonstration and informational purposes only. They are not promises of identical results and may not always represent actual clients or internal team members.',
            })}
          </Text>
        </PolicySection>
        <PolicySection title={t('1.title', { fallback: 'Definitions' })}>
          <List
            values={[
              <span key="0">
                <span className="font-bold">
                  {t('1.list.0.0', { fallback: 'Company' })}
                </span>
                : “Marketeloro”,{' '}
                {t('1.list.0.1', {
                  fallback: '“we,” “our,” or “us” refers to',
                })}{' '}
                <span className="font-bold">Inteloro Limited</span>.{' '}
                {t('1.list.0.2', {
                  fallback:
                    'a registered company operating under the laws of the United Kingdom. The company’s registered office is located at 2nd Floor College House, 17 King Edwards Road, Ruislip, London, United Kingdom, HA4 7AE, registration number 16381595.',
                })}
              </span>,
              <span key="1">
                <span className="font-bold">
                  {t('1.list.1.0', { fallback: 'Device' })}
                </span>
                :{' '}
                {t('1.list.1.1', {
                  fallback:
                    'Any digital medium used to access the website, such as a smartphone, tablet, laptop, or desktop computer.',
                })}{' '}
              </span>,
              <span key="2">
                <span className="font-bold">
                  {t('1.list.2.0', { fallback: 'Services' })}
                </span>
                :{' '}
                {t('1.list.2.1', {
                  fallback:
                    'Any marketing, consulting, creative, or strategic solutions provided via the website or as part of a direct engagement with clients.',
                })}{' '}
              </span>,
              <span key="3">
                <span className="font-bold">
                  {t('1.list.3.0', { fallback: 'Third-Party Services' })}
                </span>
                :{' '}
                {t('1.list.3.1', {
                  fallback:
                    'Any external platforms, tools, or vendors not managed by Marketeloro, which may be referenced or integrated during service delivery.',
                })}{' '}
              </span>,
              <span key="4">
                <span className="font-bold">
                  {t('1.list.4.0', { fallback: 'Website' })}
                </span>
                : The official domain operated by the Company —{' '}
                {t('1.list.4.1', {
                  fallback: 'operated by the',
                })}{' '}
                Company —{' '}
                <Link
                  href="https://marketeloro.com"
                  target="_blank"
                  className="underline"
                >
                  https://marketeloro.com
                </Link>
                .
              </span>,
              <span key="5">
                <span className="font-bold">
                  {t('1.list.5.0', { fallback: 'You' })}
                </span>
                :{' '}
                {t('1.list.5.1', {
                  fallback:
                    'Any person or entity accessing the website, making inquiries, submitting a form, purchasing services, or otherwise interacting with Marketeloro.',
                })}
              </span>,
            ]}
          />
        </PolicySection>
        <PolicySection title={t('2.title', { fallback: 'Governing Law' })}>
          <Text size="base">
            {t('2.0', {
              fallback:
                'These Terms are governed by and interpreted according to the laws.',
            })}
          </Text>
          <Text size="base">
            {t('2.1', {
              fallback:
                'By continuing to use our website and services, you accept the latest version of these Terms. We reserve the right to amend or update them at any time without prior notice.',
            })}
          </Text>
        </PolicySection>
        <PolicySection title={t('3.title', { fallback: 'Cookies' })}>
          <Text size="base">
            {t('3.0.0', {
              fallback:
                'Marketeloro uses cookies (small data files stored on your device) to enhance functionality, analyze performance, and improve your browsing experience. By continuing to navigate our website, you consent to our use of cookies as described in our',
            })}{' '}
            <NavLink href="/cookie-policy" className="underline">
              {t('3.0.1', {
                fallback: 'Cookie Policy',
              })}
            </NavLink>
            .
          </Text>
        </PolicySection>
        <PolicySection
          title={t('4.title', { fallback: 'Intellectual Property' })}
        >
          <Text size="base">
            {t('4.0', {
              fallback:
                'All content available on the Marketeloro website, including text, visuals, creative materials, frameworks, downloadable resources, and design elements, is the property of Marketeloro or its licensors.',
            })}
          </Text>
          <Text size="base">
            {t('4.1', {
              fallback:
                'Such materials are protected under copyright, trademark, and intellectual property regulations. Copying, redistribution, or use of these materials for commercial purposes without prior written permission is prohibited, unless explicitly authorized by a specific service contract or license.',
            })}
          </Text>
        </PolicySection>
        <PolicySection
          title={t('5.title', { fallback: 'Payments and Billing' })}
        >
          <Text size="base">
            {t('5.0.0', {
              fallback: 'Any transactions processed through',
            })}{' '}
            <Link
              href="https://marketeloro.com"
              target="_blank"
              className="underline"
            >
              https://marketeloro.com
            </Link>{' '}
            {t('5.0.1', {
              fallback: 'will appear on your billing statement under',
            })}{' '}
            <span className="font-bold">Marketeloro</span>{' '}
            {t('5.0.2', {
              fallback: 'or',
            })}{' '}
            <span>Inteloro Limited</span>,{' '}
            {t('5.0.3', {
              fallback:
                'depending on your chosen payment method and regional processing.',
            })}
          </Text>
          <Text size="base">
            {t('5.1', {
              fallback:
                'Submitting payment confirms your agreement to the scope and terms of the corresponding service description or contract.',
            })}
          </Text>
        </PolicySection>
        <PolicySection
          title={t('6.title', { fallback: 'Copyright Complaints' })}
        >
          <Text size="base">
            {t('6.0', {
              fallback:
                'If you believe that content published by Marketeloro infringes upon',
            })}
          </Text>
          <List
            values={[
              t('6.list.0', {
                fallback:
                  'Your full legal name along with a physical or digital signature.',
              }),
              t('6.list.1', {
                fallback:
                  'A clear description of the copyrighted work you claim has been infringed.',
              }),
              t('6.list.2', {
                fallback:
                  'The exact location (URL) of the material in question.',
              }),
              t('6.list.3', {
                fallback:
                  'Your contact details, including address, email, and phone number.',
              }),
              t('6.list.4', {
                fallback:
                  'A statement confirming your good faith belief that the disputed use is not authorized by the copyright holder, their representative, or the law.',
              }),
              t('6.list.5', {
                fallback:
                  'A declaration, under penalty of perjury, that all information provided is accurate and that you are the rightful owner (or authorized agent).',
              }),
            ]}
          />
          <Text size="base">
            {t('6.1', {
              fallback:
                'Please send copyright-related inquiries to: info@marketeloro.com.',
            })}
          </Text>
        </PolicySection>
        <PolicySection
          title={t('7.title', { fallback: 'Promotions and Special Offers' })}
        >
          <Text size="base">
            {t('7.0', {
              fallback:
                'Occasionally, Marketeloro may run promotional campaigns — such as',
            })}
          </Text>
          <Text size="base">
            {t('7.1', {
              fallback:
                'Each promotion will include its own eligibility rules, conditions, and requirements (e.g., age, region, or other restrictions).',
            })}
          </Text>
          <Text size="base">
            {t('7.2', {
              fallback:
                'By joining any of these campaigns, you agree to follow the relevant',
            })}
          </Text>
        </PolicySection>
        <PolicySection
          title={t('8.title', { fallback: 'Updates to These Terms' })}
        >
          <Text size="base">
            {t('8.0.0', {
              fallback:
                'We may update these Terms and Conditions from time to time to',
            })}
            <br />
            {t('8.0.1', {
              fallback:
                'If substantial modifications are made, we will inform users through',
            })}
          </Text>
          <Text size="base">
            {t('8.1.0', {
              fallback: 'Your continued use of',
            })}{' '}
            <span className="font-bold">Marketeloro</span>{' '}
            {t('8.1.1', {
              fallback:
                'following such updates will be considered acceptance of the revised Terms. If you do not agree with the changes, you must discontinue use of our site and services.',
            })}
          </Text>
        </PolicySection>
        <PolicySection
          title={t('9.title', { fallback: 'Modifications to the Service' })}
        >
          <Text size="base">
            <span className="font-bold">Marketeloro</span>{' '}
            {t('9.0', {
              fallback:
                'reserves the right to adjust, suspend, or discontinue any part of its services at any moment, with or without prior notice. This may include introducing new features, updating the platform, restricting access, or deactivating certain accounts.',
            })}
          </Text>
          <Text size="base">
            {t('9.1', {
              fallback:
                'Should your access be restricted or terminated, you may lose related',
            })}
          </Text>
        </PolicySection>
        <PolicySection title={t('10.title', { fallback: 'Entire Agreement' })}>
          <Text size="base">
            {t('10.0.0', {
              fallback:
                'These Terms represent the full and exclusive agreement between you and',
            })}{' '}
            <span className="font-bold">Inteloro Limited</span>{' '}
            {t('10.0.1', {
              fallback:
                'concerning the use of the Marketeloro website and services. They supersede any prior communications, whether written, oral, or implied, related to this subject.',
            })}
          </Text>
        </PolicySection>
        <PolicySection title={t('11.title', { fallback: 'Amendments' })}>
          <Text size="base">
            {t('11.0', {
              fallback:
                'We may revise these Terms at any point. If we determine that a change is significant, we will provide advance notice — typically no less than 30 days — before the updated version becomes effective.',
            })}
          </Text>
          <Text size="base">
            {t('11.1', {
              fallback:
                'The definition of a “material change” will be determined solely at',
            })}
          </Text>
        </PolicySection>
        <PolicySection
          title={t('12.title', {
            fallback: 'Platform Changes and Technical Updates',
          })}
        >
          <Text size="base">
            {t('12.0.0', {
              fallback:
                'To improve user experience, service reliability, and security,',
            })}{' '}
            <span className="font-bold">Marketeloro</span>{' '}
            {t('12.0.1', {
              fallback:
                'may introduce technical enhancements or platform changes. These updates can include new features, design changes, system optimizations, or backend improvements.',
            })}
          </Text>
          <Text size="base">
            {t('12.1', {
              fallback:
                'We reserve the right to update, limit, restrict, or remove',
            })}
          </Text>
        </PolicySection>
        <PolicySection title={t('13.title', { fallback: 'External Links' })}>
          <Text size="base">
            {t('13.0.0', {
              fallback:
                'The Marketeloro website may include links to third-party websites or',
            })}{' '}
            <NavLink href="/privacy-policy" className="underline">
              {t('13.0.1', {
                fallback: 'Privacy Policy',
              })}
            </NavLink>{' '}
            {t('13.0.2', {
              fallback: 'no longer apply.',
            })}
          </Text>
        </PolicySection>
        <PolicySection
          title={t('14.title', { fallback: 'Third-Party Services' })}
        >
          <Text size="base">
            {t('14.0', {
              fallback:
                'In the course of delivering our marketing and consulting services,',
            })}{' '}
          </Text>
          <Text size="base">
            <span className="font-bold">Marketeloro</span>{' '}
            {t('14.1', {
              fallback:
                'accepts no responsibility for the availability, legality, performance, or reliability of third-party services.',
            })}
          </Text>
        </PolicySection>
        <PolicySection
          title={t('15.title', { fallback: 'Term and Termination' })}
        >
          <Text size="base">
            {t('15.0', {
              fallback:
                'These Terms remain in effect for 90 days after your service',
            })}
          </Text>
          <Text size="base">
            {t('15.1', {
              fallback:
                'You may terminate your relationship with Marketeloro at any time by',
            })}
          </Text>
          <Text size="base">
            {t('15.2', {
              fallback:
                'We reserve the right to suspend or revoke access to our services if',
            })}
          </Text>
        </PolicySection>
        <PolicySection title={t('16.title', { fallback: 'No Warranties' })}>
          <Text size="base">
            {t('16.0.0', {
              fallback: 'Our website and services are provided on an',
            })}{' '}
            <span className="font-bold">
              {t('16.0.1', { fallback: '“as is”' })}
            </span>{' '}
            {t('16.0.2', { fallback: 'and' })}{' '}
            <span className="font-bold">
              {t('16.0.3', { fallback: '“as available”' })}
            </span>{' '}
            {t('16.0.4', {
              fallback: 'basis, without warranties of any kind.',
            })}{' '}
            <br />
            {t('16.0.5', {
              fallback:
                'This includes, but is not limited to, warranties regarding:',
            })}
          </Text>
          <List
            values={[
              t('16.list.0', {
                fallback: 'Merchantability',
              }),
              t('16.list.1', {
                fallback: 'Fitness for a particular purpose',
              }),
              t('16.list.2', {
                fallback: 'Non-infringement',
              }),
              t('16.list.3', {
                fallback: 'Uninterrupted access or performance',
              }),
              t('16.list.4', {
                fallback: 'Accuracy or reliability of information',
              }),
              t('16.list.5', {
                fallback: 'Protection against errors, malware, or harmful code',
              }),
              t('16.list.6', {
                fallback: 'Non-infringement',
              }),
              t('16.list.7', {
                fallback: 'Uninterrupted access or performance',
              }),
              t('16.list.8', {
                fallback: 'Accuracy or reliability of information',
              }),
              t('16.list.9', {
                fallback: 'Protection against errors, malware, or harmful code',
              }),
            ]}
          />
          <Text size="base">
            {t('16.1', {
              fallback:
                'We do not guarantee that our website or services will meet every expectation or operate without interruptions. Some warranty exclusions may not apply in jurisdictions where limitations are restricted by law.',
            })}
          </Text>
        </PolicySection>
        <PolicySection
          title={t('17.title', { fallback: 'Limitation of Liability' })}
        >
          <Text size="base">
            {t('17.0.0', {
              fallback: 'To the maximum extent allowed under applicable law,',
            })}{' '}
            <span className="font-bold">Marketeloro</span>,{' '}
            {t('17.0.1', {
              fallback:
                'its affiliates, partners, and contractors will not be liable for any indirect, incidental, or consequential damages that result from your use of the website or services.',
            })}
          </Text>
          <Text size="base">
            {t('17.1', {
              fallback:
                'Our total liability under any claim is limited to the amount you',
            })}
          </Text>
        </PolicySection>
        <PolicySection title={t('18.title', { fallback: 'Indemnification' })}>
          <Text size="base">
            {t('18.0', {
              fallback: 'You agree to indemnify and hold harmless',
            })}{' '}
            <span className="font-bold">Marketeloro</span>,{' '}
            {t('18.1', {
              fallback:
                'its employees, affiliates, and partners against any claims, damages, or expenses (including reasonable legal fees) arising from:',
            })}
          </Text>
          <List
            values={[
              t('18.list.0', {
                fallback: 'Your use of our website or services',
              }),
              t('18.list.1', {
                fallback: 'Your breach of these Terms',
              }),
              t('18.list.2', {
                fallback: 'Your violation of laws or regulations',
              }),
              t('18.list.3', {
                fallback: 'Any infringement of third-party rights',
              }),
            ]}
          />
        </PolicySection>
        <PolicySection
          title={t('19.title', { fallback: 'Validity of Provisions' })}
        >
          <Text size="base">
            {t('19.0', {
              fallback:
                'If any clause within these Terms is ruled invalid, unlawful, or',
            })}
          </Text>
          <Text size="base">
            {t('19.1.0', {
              fallback: 'Any legal claim relating to your use of',
            })}{' '}
            <span className="font-bold">Marketeloro</span>{' '}
            {t('19.1.1', {
              fallback: 'must be initiated within',
            })}{' '}
            <span className="font-bold">
              {t('19.1.2', { fallback: 'one (1) year' })}
            </span>{' '}
            {t('19.1.3', {
              fallback: 'from the date the issue arose.',
            })}
          </Text>
        </PolicySection>
        <PolicySection
          title={t('20.title', { fallback: 'No Waiver of Rights' })}
        >
          <Text size="base">
            {t('20.0', {
              fallback:
                'If either party does not immediately enforce a right or condition under these Terms, it does not mean that the right is waived. A single waiver will not extend to future cases or similar circumstances.',
            })}
          </Text>
        </PolicySection>
        <PolicySection
          title={t('21.title', { fallback: 'Resolving Disputes' })}
        >
          <div className="flex flex-col">
            <Text size="2xl" weight={700}>
              {t('21.0.0', { fallback: 'Commitment to Arbitration' })}
            </Text>
            <Text size="base">
              {t('21.0.1', {
                fallback:
                  'Any disputes, disagreements, or claims tied to these Terms or your use of',
              })}{' '}
              <span className="font-bold">Marketeloro</span>{' '}
              {t('21.0.2', {
                fallback:
                  '(except matters involving intellectual property or urgent legal remedies) shall be handled through binding arbitration.',
              })}
            </Text>
          </div>
          <div className="flex flex-col">
            <Text size="2xl" weight={700}>
              {t('21.1.0', { fallback: 'Arbitration Process' })}
            </Text>
            <Text size="base">
              {t('21.1.1', {
                fallback:
                  'If informal negotiations do not resolve the issue, both parties agree to arbitration under the commercial arbitration rules of the United Kingdom.',
              })}{' '}
              <br />
              {t('21.1.2', {
                fallback: 'By agreeing to these Terms, both you and',
              })}{' '}
              <span className="font-bold">Marketeloro</span>{' '}
              {t('21.1.3', {
                fallback:
                  'give up the right to court proceedings or jury trials. Temporary legal remedies may be pursued during arbitration to safeguard rights.',
              })}
            </Text>
          </div>
          <Text size="base">
            {t('21.2', {
              fallback:
                'The party that does not prevail may be required to cover reasonable legal and administrative fees of the winning side.',
            })}
          </Text>
          <div className="flex flex-col">
            <Text size="2xl" weight={700}>
              {t('21.3.title', { fallback: 'Initiating a Dispute' })}
            </Text>
            <Text size="base">
              {t('21.3.0', {
                fallback:
                  'To begin the process, a Notice of Dispute must be provided, including:',
              })}
            </Text>
            <List
              values={[
                t('21.3.list.0', {
                  fallback: 'Full name and contact details',
                }),
                t('21.3.list.1', {
                  fallback: 'A clear explanation of the issue',
                }),
                t('21.3.list.2', {
                  fallback: 'A proposed resolution',
                }),
              ]}
            />
          </div>
          <Text size="base">
            {t('21.4', { fallback: 'Send notices to:' })} info@marketeloro.com.
          </Text>
          <Text size="base">
            {t('21.5.0', {
              fallback: 'Both parties agree to attempt resolution for up to',
            })}{' '}
            <span className="font-bold">
              {t('21.5.1', { fallback: '60 days' })}
            </span>{' '}
            {t('21.5.2', {
              fallback: 'before moving to arbitration.',
            })}
          </Text>
        </PolicySection>
        <PolicySection
          title={t('21.6.title', { fallback: 'Service Disclaimer' })}
        >
          <Text size="base">
            {t('21.6.0.0', { fallback: 'The' })}{' '}
            <span className="font-bold">Marketeloro</span>{' '}
            {t('21.6.0.1', {
              fallback:
                'platform, its tools, and related services are provided strictly on an',
            })}{' '}
            <span className="font-bold">
              {t('21.6.0.2', { fallback: '“as is”' })}
            </span>{' '}
            {t('21.6.0.3', { fallback: 'and' })}{' '}
            <span className="font-bold">
              {t('21.6.0.4', { fallback: '“as available”' })}
            </span>{' '}
            {t('21.6.0.5', { fallback: 'basis.' })} <br />
            {t('21.6.1', { fallback: 'We do not guarantee:' })}
          </Text>
          <List
            values={[
              t('21.6.list.0', {
                fallback: 'Uninterrupted operation or flawless performance',
              }),
              t('21.6.list.1', {
                fallback:
                  'Accuracy, timeliness, or completeness of any content',
              }),
              t('21.6.list.2', {
                fallback: 'Compatibility with all devices and browsers',
              }),
              t('21.6.list.3', {
                fallback:
                  'Complete protection from bugs, malware, or technical faults',
              }),
            ]}
          />
          <Text size="base">
            {t('21.6.2', {
              fallback:
                'We may adjust, update, or discontinue features and services at our discretion, without prior notice.',
            })}
          </Text>
        </PolicySection>
        <PolicySection
          title={t('21.7.title', {
            fallback: 'Eligibility and Age Verification',
          })}
        >
          <Text size="base">
            {t('21.7.0', { fallback: 'To use the' })}{' '}
            <span className="font-bold">Marketeloro</span>{' '}
            {t('21.7.1', {
              fallback:
                'website or engage with our services, you must confirm that you are at least',
            })}{' '}
            <span className="font-bold">
              {t('21.7.2', { fallback: '18 years old' })}
            </span>{' '}
            {t('21.7.3', {
              fallback: '(or the legal age of majority in your jurisdiction).',
            })}{' '}
            <br />
            {t('21.7.4', {
              fallback:
                'By creating an account, submitting a form, or purchasing any service, you represent and warrant that you meet the minimum age requirement and have the legal capacity to enter into binding agreements.',
            })}
          </Text>
          <Text size="base">
            {t('21.7.5', {
              fallback:
                'If we discover that a user has provided false information regarding their age, or is otherwise not legally permitted to use our services,',
            })}{' '}
            <span className="font-bold">Marketeloro</span>{' '}
            {t('21.7.6', {
              fallback:
                'reserves the right to restrict or terminate access immediately, without liability.',
            })}
          </Text>
          <Text size="base">
            {t('21.7.7', {
              fallback:
                'Parents or legal guardians who believe a minor has engaged with Marketeloro’s services should contact us directly at [insert support email], so that we can take appropriate action, including removal of data if applicable.',
            })}
          </Text>
        </PolicySection>
        <PolicySection
          title={t('21.8.title', { fallback: 'Acceptance of Terms' })}
        >
          {t('21.8.0', {
            fallback:
              'By browsing our site, submitting forms, or purchasing services, you',
          })}
        </PolicySection>
        <PolicySection
          title={t('21.9.title', { fallback: 'Feedback and Complaints' })}
        >
          <Text size="base">
            {t('21.9.0', {
              fallback:
                'If you experience issues with our services, please reach out and',
            })}
          </Text>
          <List
            values={[
              <span key="1">
                {t('21.9.list.1', { fallback: 'Email' })}:{' '}
                <Link href="mailto:info@marketeloro.com" className="underline">
                  info@marketeloro.com
                </Link>
              </span>,
              <span key="2">
                {t('21.9.list.2', { fallback: 'Phone' })}:{' '}
                <Link href="tel:+447365579232" className="underline">
                  +447365579232
                </Link>
              </span>,
              <span key="0">
                {t('21.9.list.0', { fallback: 'Website' })}:{' '}
                <Link href="https://marketeloro.com" className="underline">
                  https://marketeloro.com
                </Link>
              </span>,
            ]}
          />
          <Text size="base">
            {t('21.9.1', {
              fallback:
                'We aim to resolve all concerns fairly, promptly, and with',
            })}
          </Text>
        </PolicySection>
      </PolicyLayout>
    </main>
  );
}
