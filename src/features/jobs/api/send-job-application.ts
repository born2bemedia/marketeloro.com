'use server';

import sgMail from '@sendgrid/mail';

import { ADMIN_EMAIL, FROM_EMAIL, SENDGRID_API_KEY } from '@/shared/config/env';

import type { ApplyToJobSchema } from '../model/schema';

export const sendJobApplication = async (data: ApplyToJobSchema) => {
  try {
    sgMail.setApiKey(SENDGRID_API_KEY);

    const { cv, email, fullName, message, phone, position } = data;

    const fileBuffer = await cv.arrayBuffer();
    const base64File = Buffer.from(fileBuffer).toString('base64');

    const msg = {
      to: ADMIN_EMAIL,
      from: FROM_EMAIL,
      subject: `New Job Application`,
      html: `
        <h2>New Job Application</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Position:</strong> ${position}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
      attachments: [
        {
          content: base64File,
          filename: cv.name,
          type: cv.type,
          disposition: 'attachment',
        },
      ],
    };

    await sgMail.send(msg);

    return { success: true };
  } catch (err) {
    console.error(err);
    return { success: false };
  }
};
