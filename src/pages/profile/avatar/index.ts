import { Block } from '../../../classes/Block/index.ts';
import { router } from '../../../classes/Router/index.ts';
import { authController } from '../../../controllers/AuthController/index.ts';
import { userController } from '../../../controllers/UserController/index.ts';
import templateString from './template.ts';

export class EditAvatarPage extends Block {
  static template = this.hbsCompile(templateString);

  public async handleEditAvatar(_: unknown, form: HTMLFormElement) {
    const data = new FormData(form);

    try {
      await userController.setAvatar(data);
      await authController.fetchUser();
      router.go('/settings');
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    this.props.handleEditAvatar = this.handleEditAvatar;
    return this.compile(EditAvatarPage.template, this.props);
  }
}
