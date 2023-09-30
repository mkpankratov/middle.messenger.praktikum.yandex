import { ComponentRegister } from '@classes/ComponentRegister';
import { router } from '@classes/Router';
import { componentList } from '@components/index';
import { pageList } from '@pages/index';

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
