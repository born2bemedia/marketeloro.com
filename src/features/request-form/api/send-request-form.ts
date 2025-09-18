'use server';

import sgMail from '@sendgrid/mail';

import { ADMIN_EMAIL, FROM_EMAIL, SENDGRID_API_KEY } from '@/shared/config/env';

import type { RequestFormSchema } from '../model/schema';

export const submitRequestForm = async (
  data: RequestFormSchema & { packageName: string },
) => {
  try {
    sgMail.setApiKey(SENDGRID_API_KEY);

    const { fullName, phone, email, aboutProject, message, packageName } = data;

    const msg = {
      to: ADMIN_EMAIL,
      from: FROM_EMAIL,
      subject: `New Request Form`,
      html: `
      <h2>New Request Form</h2>
      <p><strong>Package Name:</strong> ${packageName}</p>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>About Project:</strong> ${aboutProject}</p>
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
