import type { TSignupData } from '@api/AuthAPI/types';
import { Block } from '@classes/Block';
import { router } from '@classes/Router';
import { authController } from '@controllers/AuthController';
import templateString from '@pages/register/template';

export class RegisterPage extends Block {
  static template = this.hbsCompile(templateString);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async handleRegister(value: TSignupData, _: HTMLFormElement) {
    try {
      await authController.signup(value);
      router.go('/');
    } catch (error: any) {
      console.error(error);
    }
  }
  render() {
    this.props.handleRegister = this.handleRegister;
    return this.compile(RegisterPage.template, this.props);
  }
}
