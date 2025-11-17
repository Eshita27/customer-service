import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import { buildCustomerFilters } from '../utils/buildCustomerFilters';
import { customerSchema } from '../validators/customerValidator';
import { updateCustomerSchema } from '../validators/customerValidator';

const prisma = new PrismaClient();

export const getCustomers = async (req: Request, res: Response) => {
  try {
    const filters = buildCustomerFilters(req.query);
    const customers = await prisma.customer.findMany({ where: filters });
    res.json(customers);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch customers' });
  }
};


export const createCustomer = async (req: Request, res: Response) => {
  try {
    const parsed = customerSchema.safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json({
        error: 'Validation failed',
        details: parsed.error.flatten().fieldErrors
      });
    }

    const customer = await prisma.customer.create({
      data: {
        ...parsed.data,
        dob: parsed.data.dob ? new Date(parsed.data.dob) : undefined
      }
    });

    res.status(201).json(customer);
  } catch (err) {
    res.status(400).json({ error: 'Error creating customer' });
  }
};

export const updateCustomer = async (req: Request, res: Response) => {
  try {
    const parsed = updateCustomerSchema.safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json({
        error: 'Validation failed',
        details: parsed.error.flatten().fieldErrors
      });
    }

    const customer = await prisma.customer.update({
      where: { id: req.params.id },
      data: {
        ...parsed.data,
        dob: parsed.data.dob ? new Date(parsed.data.dob) : undefined
      }
    });

    res.json(customer);
  } catch (err) {
    res.status(400).json({ error: 'Error updating customer' });
  }
};

export const deleteCustomer = async (req: Request, res: Response) => {
  try {
    const existing = await prisma.customer.findUnique({ where: { id: req.params.id } });
    if (!existing) {
      return res.status(404).json({ error: 'Customer not found' });
    }

    const customer = await prisma.customer.update({
      where: { id: req.params.id },
      data: { isActive: false }
    });

    res.json({ message: 'Customer deactivated successfully', id: customer.id });
  } catch (err) {
    res.status(400).json({ error: 'Error deleting customer' });
  }
};