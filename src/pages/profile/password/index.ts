import type { TUpdatePassword } from '@api/UserAPI/types';
import { Block } from '@classes/Block';
import { router } from '@classes/Router';
import { userController } from '@controllers/UserController';
import templateString from '@pages/profile/password/template';

export class EditPasswordPage extends Block {
  static template = this.hbsCompile(templateString);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async handleEditPassword(value: TUpdatePassword, _: HTMLFormElement) {
    try {
      await userController.setPassword(value);
      router.go('/settings');
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    this.props.handleEditPassword = this.handleEditPassword;
    return this.compile(EditPasswordPage.template, this.props);
  }
}
