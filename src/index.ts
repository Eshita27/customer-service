import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import customerRoutes from './routes/customerRoutes';
import swaggerUi from 'swagger-ui-express';
import { openApiDocument } from './config/openapi';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/v1/customers', customerRoutes);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openApiDocument));