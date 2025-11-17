import fs from 'fs';
import path from 'path';
import yaml from 'yaml';
import { openApiDocument } from '../config/openapi';

const outputPath = path.join(__dirname, '../../docs/customer-service-v1.0.0.yaml');
const yamlContent = yaml.stringify(openApiDocument);

fs.writeFileSync(outputPath, yamlContent);
console.log(`✅ OpenAPI spec exported to ${outputPath}`);