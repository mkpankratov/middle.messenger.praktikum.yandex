import { authAPI } from '@api/AuthAPI';
import type { TAuthAPI, TSigninData, TSignupData } from '@api/AuthAPI/types';
import { router } from '@classes/Router';
import { store } from '@classes/Store';
import { messageListController } from '@controllers/MessageListController/';

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
