import { ComponentRegister } from './src/classes/ComponentRegister/index.ts';
import { router } from './src/classes/Router/index.ts';
import { componentList } from './src/components/index.ts';
import { pageList } from './src/pages/index.ts';

document.addEventListener('DOMContentLoaded', async () => {
  new ComponentRegister({ ...componentList, ...pageList });

  router
    .use('/', pageList.LoginPage)
    .use('/toc', pageList.Home)
    .use('/sign-up', pageList.RegisterPage)
    .use('/settings', pageList.ProfilePage)
    .use('/settings/edit', pageList.EditProfilePage)
    .use('/settings/password', pageList.EditPasswordPage)
    .use('/settings/avatar', pageList.EditAvatarPage)
    .use('/messenger', pageList.ChatPage)
    .use('/404', pageList.Page404)
    .use('/5XX', pageList.Page5XX)
    .start();
});
