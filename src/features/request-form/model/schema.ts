import { v } from '@/shared/lib/forms';

export const requestFormSchema = v.object({
  fullName: v.pipe(
    v.string(),
    v.minLength(3, 'Please complete all required fields'),
  ),
  phone: v.pipe(
    v.string(),
    v.minLength(5, 'Please complete all required fields'),
  ),
  email: v.pipe(
    v.string(),
    v.email('Invalid email format. Please check and try again.'),
  ),
  aboutProject: v.pipe(
    v.string(),
    v.minLength(3, 'Please complete all required fields'),
  ),
  message: v.pipe(v.string()),
});
