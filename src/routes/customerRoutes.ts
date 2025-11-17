import express from 'express';
import {
  getCustomers,
  createCustomer,
  updateCustomer,
  deleteCustomer
} from '../controllers/customerController';

const router = express.Router();

/**
 * @swagger
 * /api/v1/customers:
 *   get:
 *     summary: Get all customers
 *     description: Fetch customers with optional filters like channel, tier, gender, flavors, and date range.
 *     parameters:
 *       - in: query
 *         name: channel
 *         schema:
 *           type: string
 *         description: Filter by channel (B2B, B2C, etc.)
 *       - in: query
 *         name: tier
 *         schema:
 *           type: string
 *         description: Filter by customer tier
 *       - in: query
 *         name: flavors
 *         schema:
 *           type: string
 *         description: Comma-separated list of favorite flavors
 *     responses:
 *       200:
 *         description: List of customers
 */
router.get('/', getCustomers);

/**
 * @swagger
 * /api/v1/customers:
 *   post:
 *     summary: Create a new customer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Customer'
 *     responses:
 *       201:
 *         description: Customer created successfully
 *       400:
 *         description: Validation error
 */
router.post('/', createCustomer);

/**
 * @swagger
 * /api/v1/customers/{id}:
 *   put:
 *     summary: Update an existing customer
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Customer ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Customer'
 *     responses:
 *       200:
 *         description: Customer updated successfully
 *       400:
 *         description: Validation error
 */
router.put('/:id', updateCustomer);

/**
 * @swagger
 * /api/v1/customers/{id}:
 *   delete:
 *     summary: Soft delete a customer
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Customer ID
 *     responses:
 *       200:
 *         description: Customer deactivated successfully
 *       404:
 *         description: Customer not found
 */
router.delete('/:id', deleteCustomer);

export default router;