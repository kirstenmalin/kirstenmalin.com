import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { pluginSsrDevFoucFix } from './ssr-dev-fouc-fix.ts';

export default defineConfig(({ isSsrBuild }) => ({
  build: {
    copyPublicDir: !isSsrBuild,
  },
  plugins: [
    react({ compiler: true }),
    pluginSsrDevFoucFix(),
  ],
  resolve: {
    alias: {
      '#components': path.resolve(import.meta.dirname, './src/components'),
      '#data': path.resolve(import.meta.dirname, './src/data'),
      '#pages': path.resolve(import.meta.dirname, './src/pages'),
      '#public': path.resolve(import.meta.dirname, './public'),
      '#server': path.resolve(import.meta.dirname, './src/server'),
      '#utils': path.resolve(import.meta.dirname, './src/utils'),
    },
  },
}));
