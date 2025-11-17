import { OpenAPIRegistry, OpenApiGeneratorV3 } from '@asteasolutions/zod-to-openapi';
import { customerSchema } from '../validators/customerValidator';

const registry = new OpenAPIRegistry();

// Register your schema
registry.register('Customer', customerSchema);

// Create the generator
const generator = new OpenApiGeneratorV3(registry.definitions);

// Generate the OpenAPI document
export const openApiDocument = generator.generateDocument({
  openapi: '3.0.0',
  info: {
    title: 'Customer Service API',
    version: '0.1.0',
    description: 'Auto-generated OpenAPI spec from Zod schemas',
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Local dev server',
    },
  ],
});