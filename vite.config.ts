import { resolve } from 'path';
import { defineConfig } from 'vite';

const root = resolve(__dirname, 'src/pages');

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(root, '/index.html'),
      },
    },
    outDir: resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: [
      { find: '@classes', replacement: resolve(__dirname, 'src/classes') },
      { find: '@fonts', replacement: resolve(__dirname, 'src/fonts') },
      { find: '@components', replacement: resolve(__dirname, 'src/components') },
      { find: '@types', replacement: resolve(__dirname, 'src/types') },
      { find: '@mocks', replacement: resolve(__dirname, 'src/mocks') },
      { find: '@pages', replacement: resolve(__dirname, 'src/pages') },
      { find: '@icons', replacement: resolve(__dirname, 'src/icons') },
      { find: '@images', replacement: resolve(__dirname, 'src/images') },
      { find: '@services', replacement: resolve(__dirname, 'src/services') },
      { find: '@styles', replacement: resolve(__dirname, 'src/styles') },
      { find: '@utils', replacement: resolve(__dirname, 'src/utils') },
    ],
  },
  server: {
    open: '/',
  },
});
