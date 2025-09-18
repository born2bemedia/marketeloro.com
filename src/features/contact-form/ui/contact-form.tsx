'use client';

import { type ReactNode } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import { valibotResolver } from '@hookform/resolvers/valibot';
import { toast } from 'sonner';

import { PlayIcon } from '@/shared/ui/icons/play';
import { Button } from '@/shared/ui/kit/button';
import { TextField } from '@/shared/ui/kit/text-field';
import { Title } from '@/shared/ui/kit/title';

import { submitContactForm } from '../api/send-contact-form';
import { contactFormSchema } from '../model/schema';

export const ContactForm = () => {
  const t = useTranslations('contactForm');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      companyName: '',
    },
    resolver: valibotResolver(contactFormSchema),
  });

  const onSubmit = handleSubmit(async data => {
    const { success } = await submitContactForm(data);

    if (success) {
      toast.success(
        t('success', {
          fallback:
            'Thank you! Your request has been received. We’ll get back to you shortly to schedule your consultation.',
        }),
      );
      reset();
    } else {
      toast.warning(
        t('error', {
          fallback:
            'Hmm, something went wrong. Please try again or contact us directly at info@marketeloro.com.',
        }),
      );
    }
  });

  const getFirstError = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return Object.entries(errors).map(([_, error]) => error?.message)[0];
  };

  const firstError = getFirstError();

  return (
    <form
      className="relative flex h-full flex-col justify-center gap-10 rounded-[40px] bg-[#030213] p-5"
      onSubmit={onSubmit}
    >
      {firstError && (
        <div className="absolute -top-22 left-1/2 flex -translate-x-1/2 flex-col rounded-[40px] bg-[#C70000] p-5 text-sm text-white max-md:-top-20">
          <p>{firstError}</p>
        </div>
      )}
      <Title>{t('title', { fallback: 'Contact Form' })}</Title>
      <section className="flex gap-4">
        <FormColumn>
          <TextField
            placeholder={t('firstName', { fallback: 'First Name' })}
            {...register('firstName')}
          />
          <TextField
            placeholder={t('email', { fallback: 'Email' })}
            {...register('email')}
          />
        </FormColumn>
        <FormColumn>
          <TextField
            placeholder={t('lastName', { fallback: 'Last Name' })}
            {...register('lastName')}
          />
          <TextField
            placeholder={t('companyName', { fallback: 'Company Name' })}
            {...register('companyName')}
          />
        </FormColumn>
      </section>
      <Button
        variant="reversed"
        size="md"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting
          ? t('submitting', { fallback: 'Sending...' })
          : t('submit', { fallback: 'Send Message' })}{' '}
        <PlayIcon />
      </Button>
    </form>
  );
};

const FormColumn = ({ children }: { children: ReactNode }) => (
  <div className="flex w-full flex-col gap-4">{children}</div>
);
