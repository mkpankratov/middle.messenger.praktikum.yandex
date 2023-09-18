import { resolve } from 'path';
import { defineConfig } from 'vite';
import mkcert from 'vite-plugin-mkcert';

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
      { find: '@api', replacement: resolve(__dirname, 'src/api') },
      { find: '@classes', replacement: resolve(__dirname, 'src/classes') },
      { find: '@fonts', replacement: resolve(__dirname, 'src/fonts') },
      { find: '@hocs', replacement: resolve(__dirname, 'src/hocs') },
      { find: '@components', replacement: resolve(__dirname, 'src/components') },
      { find: '@controllers', replacement: resolve(__dirname, 'src/controllers') },
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
    https: true,
    open: '/toc',
  },
  plugins: [mkcert()],
});
