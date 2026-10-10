import { defineConfig } from 'vite';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import babel from '@rolldown/plugin-babel';
import path from 'node:path';

export default defineConfig(({ isSsrBuild }) => ({
  build: {
    copyPublicDir: !isSsrBuild,
  },
  plugins: [
    react(),
    babel({
      presets: [reactCompilerPreset()]
    }),
  ],
  resolve: {
    alias: {
      '#components': path.resolve(import.meta.dirname, './src/components'),
      '#data': path.resolve(import.meta.dirname, './src/data'),
      '#pages': path.resolve(import.meta.dirname, './src/pages'),
      '#public': path.resolve(import.meta.dirname, './public')
    },
  },
}));
