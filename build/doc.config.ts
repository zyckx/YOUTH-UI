import baseConfig from './base.config';
import { defineConfig } from 'vite';

export default defineConfig({
  ...baseConfig,
  base: '/Youth',
  build: {
    outDir: 'docs',
  },
});
