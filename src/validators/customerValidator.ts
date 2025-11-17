import { z } from 'zod';
import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi'; // ✅ Add this
import { Channel, Tier } from '@prisma/client';

extendZodWithOpenApi(z); // ✅ Call this before using .openapi()


export const customerSchema = z.object({
  firstName: z.string().openapi({ example: 'Eshita' }),
  lastName: z.string().openapi({ example: 'Chakraborty' }),
  email: z.string().email().openapi({ example: 'eshita@example.com' }),
  phone: z.string().optional().openapi({ example: '+91-9876543210' }),
  dob: z.string().optional().openapi({ example: '1995-08-15' }),
  gender: z.nativeEnum(Gender).optional().default(Gender.MALE).openapi({ example: 'FEMALE' }),
  channel: z.nativeEnum(Channel).optional().default(Channel.UNKNOWN).openapi({ example: 'B2C' }),
  companyName: z.string().optional().openapi({ example: 'BURHASTHCHS' }),
  contactPerson: z.string().optional().openapi({ example: 'Eshita Chakraborty' }),
  customerTier: z.nativeEnum(Tier).optional().default(Tier.BASIC).openapi({ example: 'PREMIUM' }),
  communication: z.string().optional().default('email').openapi({ example: 'email' }),
  favoriteFlavors: z.array(z.string()).optional().openapi({ example: ['vanilla', 'mango'] }),
  isActive: z.boolean().optional().default(true).openapi({ example: true }),
});

export const updateCustomerSchema = customerSchema.partial().refine(
  data => Object.keys(data).length > 0,
  { message: 'At least one field must be provided for update' }
);