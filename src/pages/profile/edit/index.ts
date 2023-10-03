import type { TUpdateUser } from '../../../api/UserAPI/types.ts';
import { Block } from '../../../classes/Block/index.ts';
import { router } from '../../../classes/Router/index.ts';
import { withStore } from '../../../classes/Store/index.ts';
import { store } from '../../../classes/Store/index.ts';
import { authController } from '../../../controllers/AuthController/index.ts';
import { userController } from '../../../controllers/UserController/index.ts';
import templateString from './template.ts';

export class EditProfilePageBase extends Block {
  static template = this.hbsCompile(templateString);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async handleEditProfile(value: TUpdateUser, _: HTMLFormElement) {
    Object.keys(value).forEach(key => {
      if (value[key as keyof TUpdateUser] === store.getState().user?.[key]) {
        delete value[key as keyof TUpdateUser];
      }
    });

    try {
      await userController.updateProfile(value);
      await authController.fetchUser();
      router.go('/settings');
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    this.props.handleEditProfile = this.handleEditProfile;
    return this.compile(EditProfilePageBase.template, this.props);
  }
}

const withUser = withStore(state => ({ ...state.user }));

export const EditProfilePage = withUser(EditProfilePageBase);
