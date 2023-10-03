import { Page5XX } from './5XX/index.ts';
import { Page404 } from './404/index.ts';
import { ChatPage } from './chat/index.ts';
import { Home } from './home/index.ts';
import { LoginPage } from './login/index.ts';
import { EditAvatarPage } from './profile/avatar//index.ts';
import { EditProfilePage } from './profile/edit//index.ts';
import { ProfilePage } from './profile/index.ts';
import { EditPasswordPage } from './profile/password//index.ts';
import { RegisterPage } from './register/index.ts';

export const pageList = {
  Home,
  Page5XX,
  Page404,
  ChatPage,
  LoginPage,
  ProfilePage,
  EditProfilePage,
  EditAvatarPage,
  EditPasswordPage,
  RegisterPage,
};
