import { Block } from '../../classes/Block/index.ts';
import { router } from '../../classes/Router/index.ts';
import { withStore } from '../../classes/Store/index.ts';
import { authController } from '../../controllers/AuthController/index.ts';
import templateString from './template.ts';

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
