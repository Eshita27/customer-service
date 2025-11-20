import fs from 'fs';
import path from 'path';
import yaml from 'yaml';
import { openApiDocument } from '../config/openapi';

const version = process.env.VERSION || 'v1.0.0';
const outputDir = path.join(__dirname, `../../specs/${version}`);
fs.mkdirSync(outputDir, { recursive: true });

const yamlContent = yaml.stringify(openApiDocument);
const jsonContent = JSON.stringify(openApiDocument, null, 2);

fs.writeFileSync(path.join(outputDir, 'openapi.yaml'), yamlContent);
fs.writeFileSync(path.join(outputDir, 'openapi.json'), jsonContent);

console.log(`✅ OpenAPI spec exported to /specs/${version}/`);