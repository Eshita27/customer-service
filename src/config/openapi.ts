import { OpenAPIRegistry, OpenApiGeneratorV3 } from '@asteasolutions/zod-to-openapi';
import { customerSchema } from '../validators/customerValidator';
import { z } from 'zod';

const registry = new OpenAPIRegistry();

// Register your schema
registry.register('Customer', customerSchema);

// Register operations
try
{
registry.registerPath({
  method: 'get',
  path: '/api/v1/customers',
  summary: 'Get all customers',
  responses: {
    200: {
      description: 'List of customers',
      content: {
        'application/json': {
          schema: z.array(customerSchema),
        },
      },
    },
  },
});
console.log('Registered path: GET /api/v1/customers');
}
catch (error) {
  console.error('❌ Failed to register GET /api/v1/customers:', error);
}

try {
registry.registerPath({
  method: 'post',
  path: '/api/v1/customers',
  summary: 'Create a new customer',
  request: {
    body: {
      content: {
        'application/json': {
          schema: customerSchema,
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Customer created successfully',
      content: {
        'application/json': {
          schema: customerSchema,
        },
      },
    },
  },
});
console.log('Registered path: POST /api/v1/customers');
} catch (error) {
  console.error('❌ Failed to register POST /api/v1/customers:', error);
}

try
{
registry.registerPath({
  method: 'put',
  path: '/api/v1/customers/{id}',
  summary: 'Update an existing customer',
  request: {
    params: z.object({
      id: z.string().uuid(),
    }),
    body: {
      content: {
        'application/json': {
          schema: customerSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Customer updated successfully',
      content: {
        'application/json': {
          schema: customerSchema,
        },
      },
    },
    400: {
      description: 'Validation error',
    },
  },
});
console.log('Registered path: PUT /api/v1/customers/{id}');
} catch (error) {
  console.error('❌ Failed to register PUT /api/v1/customers/{id}:', error);
}

try{
registry.registerPath({
  method: 'get',
  path: '/api/v1/customers/{id}',
  summary: 'Get customer by ID',
  request: {
    params: z.object({
      id: z.string().uuid(),
    }),
  },
  responses: {
    200: {
      description: 'Customer details',
      content: {
        'application/json': {
          schema: customerSchema,
        },
      },
    },
    404: {
      description: 'Customer not found',
    },
  },
});
console.log('Registered path: GET /api/v1/customers/{id}');
} catch (error) {
  console.error('❌ Failed to register GET /api/v1/customers/{id}:', error);
}

try
{
registry.registerPath({
  method: 'delete',
  path: '/api/v1/customers/{id}',
  summary: 'Soft delete a customer',
  request: {
    params: z.object({
      id: z.string().uuid(),
    }),
  },
  responses: {
    200: {
      description: 'Customer deactivated successfully',
    },
    404: {
      description: 'Customer not found',
    },
  },
});
console.log('Registered path: DELETE /api/v1/customers/{id}');
} catch (error) {
  console.error('❌ Failed to register DELETE /api/v1/customers/{id}:', error);
}

console.log('Registered paths:', Object.keys(registry.definitions.paths || {}));

// Create the generator
const generator = new OpenApiGeneratorV3(registry.definitions);

// Generate the OpenAPI document
export const openApiDocument = generator.generateDocument({
  openapi: '3.0.0',
  info: {
    title: 'Customer Service API',
    version: process.env.VERSION || 'v1.0.0',
    description: 'Auto-generated OpenAPI spec from Zod schemas',
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Local dev server',
    },
  ],
});