import {resolve} from 'path';
import {defineConfig, Plugin as IVitePlugin} from 'vite';
import handlebars from 'vite-plugin-handlebars';
import {inbox, message} from './src/mocks/inbox';

const root = resolve(__dirname);

const pageData = {
  '/src/pages/chat/index.html': {inbox, message},
};
const handlebarsPlugin = handlebars({
  context(pagePath) {
    return pageData[pagePath];
  },
  partialDirectory: resolve(__dirname, 'src/components'),
}) as IVitePlugin;

export default defineConfig({
  root,
  plugins: [handlebarsPlugin],
  build: {
    rollupOptions: {
      input: {
        main: resolve(root, '/index.html'),
        '404': resolve(root, 'src/pages/404/index.html'),
        '5XX': resolve(root, 'src/pages/5XX/index.html'),
        chat: resolve(root, 'src/pages/chat/index.html'),
        login: resolve(root, 'src/pages/login/index.html'),
        register: resolve(root, 'src/pages/register/index.html'),
        profile: resolve(root, 'src/pages/profile/index.html'),
        edit: resolve(root, 'src/pages/profile/edit/index.html'),
      },
    },
  },
  resolve: {
    alias: [
      {find: '@root', replacement: resolve(__dirname, 'src')},
      {find: '@fonts', replacement: resolve(__dirname, 'src/fonts')},
      {find: '@pages', replacement: resolve(__dirname, 'src/pages')},
      {find: '@components', replacement: resolve(__dirname, 'src/components')},
      {find: '@interfaces', replacement: resolve(__dirname, 'src/interfaces')},
      {find: '@styles', replacement: resolve(__dirname, 'src/styles')},
      {find: '@mocks', replacement: resolve(__dirname, 'src/mocks')},
      {find: '@icons', replacement: resolve(__dirname, 'src/icons')},
      {find: '@services', replacement: resolve(__dirname, 'src/services')},
    ],
  },
  server: {
    open: '/src/pages/',
  },
});
