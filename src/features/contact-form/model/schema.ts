import { v } from '@/shared/lib/forms';

export const contactFormSchema = v.object({
  firstName: v.pipe(
    v.string(),
    v.minLength(
      1,
      'We need a bit more information. Please fill in all required fields to send your message',
    ),
  ),
  lastName: v.pipe(
    v.string(),
    v.minLength(
      1,
      'We need a bit more information. Please fill in all required fields to send your message',
    ),
  ),
  email: v.pipe(
    v.string(),
    v.email(
      'That doesn’t look like a valid email. Please enter the correct one so we can reach you.',
    ),
  ),
  companyName: v.pipe(
    v.string(),
    v.minLength(
      1,
      'We need a bit more information. Please fill in all required fields to send your message',
    ),
  ),
});
