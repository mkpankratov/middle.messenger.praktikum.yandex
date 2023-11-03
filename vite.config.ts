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

  server: {
    open: '/toc',
  },
});
