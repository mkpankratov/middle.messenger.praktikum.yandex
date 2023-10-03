import { authAPI } from '../../api/AuthAPI/index.ts';
import type { TAuthAPI, TSigninData, TSignupData } from '../../api/AuthAPI/types.ts';
import { router } from '../../classes/Router/index.ts';
import { store } from '../../classes/Store/index.ts';
import { messageListController } from '../MessageListController/index.ts';

export class AuthController {
  private readonly api: TAuthAPI;

  constructor() {
    this.api = authAPI;
  }

  async signin(data: TSigninData) {
    await this.api.signin(data);
    await this.fetchUser();
  }

  async signup(data: TSignupData) {
    try {
      await this.api.signup(data);

      await this.fetchUser();

      router.go('/settings');
    } catch (e: any) {
      console.error(e.message);
    }
  }

  async fetchUser() {
    const user = await this.api.read();

    store.set('user', user);
  }

  async logout() {
    try {
      messageListController.closeAll();

      await this.api.logout();

      router.go('/');
    } catch (e: any) {
      console.error(e.message);
    }
  }
}

export const authController = new AuthController();
