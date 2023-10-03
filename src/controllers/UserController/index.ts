import { userAPI } from '../../api/UserAPI/index.ts';
import type { TUserAPI } from '../../api/UserAPI/types.ts';
import type { TSeachUser, TUpdatePassword, TUpdateUser } from '../../api/UserAPI/types.ts';
import { store } from '../../classes/Store/index.ts';

export class UserController {
  private readonly api: TUserAPI;

  constructor() {
    this.api = userAPI;
  }

  async updateProfile(data: TUpdateUser) {
    await this.api.updateProfile(data);
  }

  async setAvatar(data: FormData) {
    await this.api.setAvatar(data);
  }

  async setPassword(data: TUpdatePassword) {
    await this.api.setPassword(data);
  }

  async searchUser(data: TSeachUser) {
    const searchUserList = await this.api.searchUser(data);

    store.set('searchUserList', searchUserList);
  }
}

export const userController = new UserController();
