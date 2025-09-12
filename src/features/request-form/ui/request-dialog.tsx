'use client';

import type { ReactNode } from 'react';
import { Controller, useForm } from 'react-hook-form';
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

import { CloseCircleIcon } from '@/shared/ui/icons/close-circle';
import { PlayIcon } from '@/shared/ui/icons/play';
import { Button } from '@/shared/ui/kit/button';
import { PhoneField } from '@/shared/ui/kit/phone-field';
import { Text } from '@/shared/ui/kit/text';
import { TextArea } from '@/shared/ui/kit/text-area';
import { TextField } from '@/shared/ui/kit/text-field';
import { Title } from '@/shared/ui/kit/title';

import { useRequestDialogStore } from '../model/request-dialog.store';
import { requestFormSchema } from '../model/schema';

export const RequestDialog = () => {
  const { open, setOpen, packageName } = useRequestDialogStore();

  const {
    handleSubmit,
    register,
    control,
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

  const onSubmit = handleSubmit(data => {
    console.log(data);
  });

  const getFirstError = () => {
    return Object.entries(errors).map(([_, error]) => error?.message)[0];
  };

  const firstError = getFirstError();

  return (
    <Root open={open} onOpenChange={setOpen}>
      <Trigger />
      <Portal>
        <Overlay className="animate-overlayShow fixed inset-0 z-[998] bg-black/50" />
        <Content
          className="animate-contentShow fixed top-1/2 left-1/2 z-[999] w-[1000px] -translate-x-1/2 -translate-y-1/2 transform overflow-hidden rounded-[40px] focus:outline-none max-lg:w-[96%]"
          onCloseAutoFocus={e => e.preventDefault()}
        >
          <DTitle />
          <Description asChild>
            <section className="flex flex-col items-center gap-3">
              {firstError && (
                <div className="flex w-max flex-col rounded-[40px] bg-[#C70000] p-5 text-sm text-white">
                  <p className="font-bold">Invalid Email</p>
                  <p>{firstError}</p>
                </div>
              )}
              <form
                className="flex w-full flex-col gap-10 rounded-[40px] bg-[#030213] p-5"
                onSubmit={onSubmit}
              >
                <div className="flex items-end gap-4">
                  <Title>{packageName}</Title>
                  <Text color="white" size="base">
                    Request Form
                  </Text>
                </div>
                <section className="flex flex-col gap-10">
                  <section className="flex gap-4 max-md:flex-col">
                    <FormColumn>
                      <TextField
                        placeholder="Full Name"
                        {...register('fullName')}
                      />
                      <TextField placeholder="Email" {...register('email')} />
                    </FormColumn>
                    <FormColumn>
                      <Controller
                        control={control}
                        name="phone"
                        render={({ field }) => (
                          <PhoneField
                            name={field.name}
                            placeholder="Phone"
                            value={String(field.value)}
                            onBlur={field.onBlur}
                            onChange={value => field.onChange(value)}
                          />
                        )}
                      />
                      <TextField
                        placeholder="Tell us about your project"
                        {...register('aboutProject')}
                      />
                    </FormColumn>
                    <TextArea
                      placeholder="Your message (optional)"
                      {...register('message')}
                    />
                  </section>
                  <div className="flex gap-5">
                    <Close asChild>
                      <Button variant="reversed" size="md">
                        Cancel <CloseCircleIcon />
                      </Button>
                    </Close>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      variant="reversed"
                      size="md"
                    >
                      {isSubmitting ? (
                        'Submitting...'
                      ) : (
                        <>
                          Submit Request <PlayIcon />
                        </>
                      )}
                    </Button>
                  </div>
                </section>
              </form>
            </section>
          </Description>
        </Content>
      </Portal>
    </Root>
  );
};

const FormColumn = ({ children }: { children: ReactNode }) => {
  return <div className="flex w-full flex-col gap-4">{children}</div>;
};
