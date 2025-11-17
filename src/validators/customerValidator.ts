import { z } from 'zod';
import { Channel, Tier } from '@prisma/client';

export const customerSchema = z.object({
  firstName: z.string({ required_error: 'First name is required' }),
  lastName: z.string({ required_error: 'Last name is required' }),
  email: z.string({ required_error: 'Email is required' }).email('Invalid email format'),
  phone: z.string().optional(),
  dob: z.string().optional(), // ISO string
  gender: z.enum(['male', 'female', 'other']).optional(),
  channel: z.nativeEnum(Channel, {
    errorMap: () => ({ message: 'Channel must be one of B2B, B2C, HYBRID, or UNKNOWN' })
  }).optional().default(Channel.UNKNOWN),
  companyName: z.string().optional(),
  contactPerson: z.string().optional(),
  customerTier: z.nativeEnum(Tier, {
    errorMap: () => ({ message: 'Tier must be one of BASIC, PREMIUM, or ELITE' })
  }).optional().default(Tier.BASIC),
  communication: z.string().optional().default('email'),
  favoriteFlavors: z.array(z.string()).optional(),
  isActive: z.boolean().optional().default(true)
});

export const updateCustomerSchema = customerSchema.partial().refine(
  data => Object.keys(data).length > 0,
  { message: 'At least one field must be provided for update' }
);