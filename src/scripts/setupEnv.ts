import { existsSync, copyFileSync } from 'fs';
import { resolve } from 'path';

const envPath = resolve(__dirname, '../.env');
const examplePath = resolve(__dirname, '../.env.example');

if (existsSync(envPath)) {
  console.log('✅ .env already exists. No action needed.');
} else if (existsSync(examplePath)) {
  copyFileSync(examplePath, envPath);
  console.log('✅ .env file created from .env.example');
} else {
  console.error('❌ .env.example not found. Cannot create .env');
}