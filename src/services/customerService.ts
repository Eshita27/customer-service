import { PrismaClient } from '@prisma/client';
import { CustomerCreateInput, CustomerUpdateInput } from '../validators/customerValidator';

const prisma = new PrismaClient();

export const createCustomer = async (data: CustomerCreateInput) => {
  return await prisma.customer.create({
    data: {
      ...data,
      dob: data.dob ? new Date(data.dob) : undefined,
    },
  });
};


export const updateCustomer = async (id: string, data: CustomerUpdateInput) => {
  return await prisma.customer.update({
    where: { id },
    data: {
      ...data,
      dob: data.dob ? new Date(data.dob) : undefined,
    },
  });
};
