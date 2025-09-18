'use server';

import sgMail from '@sendgrid/mail';

import { ADMIN_EMAIL, FROM_EMAIL, SENDGRID_API_KEY } from '@/shared/config/env';

import type { ContactFormSchema } from '../model/schema';

export const submitContactForm = async (data: ContactFormSchema) => {
  try {
    sgMail.setApiKey(SENDGRID_API_KEY);

    const { firstName, lastName, email, companyName, message } = data;

    const msg = {
      to: ADMIN_EMAIL,
      from: FROM_EMAIL,
      subject: `New Contact Request`,
      html: `
      <h2>New Contact Request</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${companyName ?? 'N/A'}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
    };

    await sgMail.send(msg);

    return { success: true };
  } catch (err) {
    console.error(err);

    return { success: false };
  }
};
