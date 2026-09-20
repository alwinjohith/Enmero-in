import { FlatCompat } from '@eslint/eslintrc';
import { defineConfig, globalIgnores } from 'eslint/config';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const config = defineConfig([
  ...compat.extends('next/core-web-vitals'),
  ...compat.extends('next/typescript'),
  globalIgnores(['.next/**', 'node_modules/**', 'scripts/**', 'next-env.d.ts']),
]);

export default config;