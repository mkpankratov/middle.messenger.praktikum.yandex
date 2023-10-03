import type { TUpdatePassword } from '../../../api/UserAPI/types.ts';
import { Block } from '../../../classes/Block/index.ts';
import { router } from '../../../classes/Router/index.ts';
import { userController } from '../../../controllers/UserController/index.ts';
import templateString from './template.ts';

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
