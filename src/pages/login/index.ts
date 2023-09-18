import type { TSigninData } from '@api/AuthAPI/types';
import { Block } from '@classes/Block';
import { router } from '@classes/Router';
import { authController } from '@controllers/AuthController';
import templateString from '@pages/login/template';

export class LoginPage extends Block {
  static template = this.hbsCompile(templateString);

  public async handleLogin(value: TSigninData, form: HTMLFormElement) {
    try {
      await authController.signin(value);
      router.go('/messenger');
    } catch (error: any) {
      if (error.reason === 'User already in system') {
        router.go('/messenger');
        return;
      }

      form.reset();
    }
  }

  render() {
    this.props.handleLogin = this.handleLogin;
    return this.compile(LoginPage.template, this.props);
  }
}
