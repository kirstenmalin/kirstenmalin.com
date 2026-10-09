import path from 'node:path';
import { defineConfig } from 'vite';
import { reactRouter } from '@react-router/dev/vite';
import babel from '@rolldown/plugin-babel';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';

export default defineConfig(({ isSsrBuild }) => ({
  build: {
    copyPublicDir: !isSsrBuild,
  },
  optimizeDeps: {
    exclude: ['virtual:react-router/server-build'],
  },
  plugins: [
    react(),
    reactRouter(),
    babel({
      presets: [reactCompilerPreset()]
    }),
  ],
  resolve: {
    alias: {
      '#components': path.resolve(import.meta.dirname, './src/components'),
      '#pages': path.resolve(import.meta.dirname, './src/pages'),
      '#public': path.resolve(import.meta.dirname, './public')
    },
  },
}));
