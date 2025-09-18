'use client';

import { type ReactNode, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import { valibotResolver } from '@hookform/resolvers/valibot';
import {
  Close,
  Content,
  Description,
  Overlay,
  Portal,
  Root,
  Title as DTitle,
  Trigger,
} from '@radix-ui/react-dialog';
import { toast } from 'sonner';

import { CloseCircleIcon } from '@/shared/ui/icons/close-circle';
import { PlayIcon } from '@/shared/ui/icons/play';
import { Button } from '@/shared/ui/kit/button';
import { PhoneField } from '@/shared/ui/kit/phone-field';
import { Text } from '@/shared/ui/kit/text';
import { TextArea } from '@/shared/ui/kit/text-area';
import { TextField } from '@/shared/ui/kit/text-field';
import { Title } from '@/shared/ui/kit/title';

import { submitRequestForm } from '../api/send-request-form';
import { useRequestDialogStore } from '../model/request-dialog.store';
import { requestFormSchema } from '../model/schema';

export const RequestDialog = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  const t = useTranslations('requestDialog');

  const { open, setOpen, packageName, isShowSubtitle, setIsShowSubtitle } =
    useRequestDialogStore();

  const {
    handleSubmit,
    register,
    control,
    reset,
    formState: { isSubmitting, errors },
  } = useForm({
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      aboutProject: '',
      message: '',
    },
    resolver: valibotResolver(requestFormSchema),
  });

  const onSubmit = handleSubmit(async data => {
    const { success } = await submitRequestForm({ ...data, packageName });

    if (success) {
      setIsSuccess(true);
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
    <Root
      open={open}
      onOpenChange={v => {
        setOpen(v);
        setIsShowSubtitle(true);
      }}
    >
      <Trigger />
      <Portal>
        <Overlay className="animate-overlayShow fixed inset-0 z-[998] bg-black/50" />
        <Content
          className="animate-contentShow fixed top-1/2 left-1/2 z-[999] w-[1000px] -translate-x-1/2 -translate-y-1/2 transform overflow-hidden rounded-[40px] focus:outline-none max-lg:w-[96%]"
          onCloseAutoFocus={e => e.preventDefault()}
        >
          <DTitle />
          <Description asChild>
            {isSuccess ? (
              <section className="flex w-full flex-col gap-10 rounded-[40px] bg-[#030213] p-5">
                <div className="flex flex-col gap-4">
                  <Title as="h3">
                    {t('success.title', {
                      fallback: 'Your request has been sent!',
                    })}
                  </Title>
                  <Text size="base" color="white">
                    {t('success.description', {
                      fallback:
                        'Thanks for reaching out - our marketing team will review your details and get back to you shortly.',
                    })}
                  </Text>
                </div>
                <Close asChild>
                  <Button variant="reversed" size="md">
                    {t('close', { fallback: 'Close' })} <PlayIcon />
                  </Button>
                </Close>
              </section>
            ) : (
              <section className="flex flex-col items-center gap-3">
                {firstError && (
                  <div className="flex w-max flex-col rounded-[40px] bg-[#C70000] p-5 text-sm text-white">
                    <p>{firstError}</p>
                  </div>
                )}
                <form
                  className="flex w-full flex-col gap-10 rounded-[40px] bg-[#030213] p-5"
                  onSubmit={onSubmit}
                >
                  <div className="flex items-end gap-4">
                    <Title>{packageName}</Title>
                    {isShowSubtitle && (
                      <Text color="white" size="base">
                        {t('title', { fallback: 'Request Form' })}
                      </Text>
                    )}
                  </div>
                  <section className="flex flex-col gap-10">
                    <section className="flex gap-4 max-md:flex-col">
                      <FormColumn>
                        <TextField
                          placeholder={t('fullName', { fallback: 'Full Name' })}
                          {...register('fullName')}
                        />
                        <TextField
                          placeholder={t('email', { fallback: 'Email' })}
                          {...register('email')}
                        />
                      </FormColumn>
                      <FormColumn>
                        <Controller
                          control={control}
                          name="phone"
                          render={({ field }) => (
                            <PhoneField
                              name={field.name}
                              placeholder={t('phone', { fallback: 'Phone' })}
                              value={String(field.value)}
                              onBlur={field.onBlur}
                              onChange={value => field.onChange(value)}
                            />
                          )}
                        />
                        <TextField
                          placeholder={t('aboutProject', {
                            fallback: 'Tell us about your project',
                          })}
                          {...register('aboutProject')}
                        />
                      </FormColumn>
                      <TextArea
                        placeholder={t('message', {
                          fallback: 'Your message (optional)',
                        })}
                        {...register('message')}
                      />
                    </section>
                    <div className="flex gap-5">
                      <Close asChild>
                        <Button variant="reversed" size="md">
                          {t('cancel', { fallback: 'Cancel' })}{' '}
                          <CloseCircleIcon />
                        </Button>
                      </Close>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        variant="reversed"
                        size="md"
                      >
                        {isSubmitting ? (
                          t('submitting', { fallback: 'Submitting...' })
                        ) : (
                          <>
                            {t('submit', { fallback: 'Submit Request' })}{' '}
                            <PlayIcon />
                          </>
                        )}
                      </Button>
                    </div>
                  </section>
                </form>
              </section>
            )}
          </Description>
        </Content>
      </Portal>
    </Root>
  );
};

const FormColumn = ({ children }: { children: ReactNode }) => {
  return <div className="flex w-full flex-col gap-4">{children}</div>;
};
