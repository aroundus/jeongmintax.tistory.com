import { resolve } from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import { stylex } from 'vite-plugin-stylex-dev';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
      output: {
        entryFileNames: 'script.js',
        chunkFileNames: '[name].js',
        assetFileNames: ({ name }) => {
          if (name) {
            if (name.endsWith('.css')) {
              return 'style.css';
            }
          }

          return '[name].[ext]';
        },
      },
    },
  },
  plugins: [
    checker({
      typescript: true,
    }),
    react(),
    stylex(),
    svgr(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    preTransformRequests: false,
  },
});
