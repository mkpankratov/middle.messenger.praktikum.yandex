import { Block } from '@classes/Block';
import { router } from '@classes/Router';
import { withStore } from '@classes/Store';
import { authController } from '@controllers/AuthController';
import templateString from '@pages/profile/template';

export class ProfilePageBase extends Block {
  static template = this.hbsCompile(templateString);

  public async logOut() {
    await authController.logout();
    router.go('/');
  }
  render() {
    this.props.clickHandler = this.logOut;
    return this.compile(ProfilePageBase.template, this.props);
  }
}

const withUser = withStore(state => ({ ...state.user }));

export const ProfilePage = withUser(ProfilePageBase);
