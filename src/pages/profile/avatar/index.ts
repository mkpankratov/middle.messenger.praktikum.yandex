import { Block } from '@classes/Block';
import { router } from '@classes/Router';
import { authController } from '@controllers/AuthController';
import { userController } from '@controllers/UserController';
import templateString from '@pages/profile/avatar/template';

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
