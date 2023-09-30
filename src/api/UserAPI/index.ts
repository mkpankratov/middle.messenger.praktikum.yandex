import BaseAPI from '@api/BaseAPI';
import type { TSeachUser, TUpdatePassword, TUpdateUser } from '@api/UserAPI/types';

export class UserAPI extends BaseAPI {
  constructor() {
    super('/user');
  }

  updateProfile(data: TUpdateUser) {
    return this.http.put('/profile', data);
  }

  setAvatar(data: FormData) {
    return this.http.put('/profile/avatar', data);
  }

  setPassword(data: TUpdatePassword) {
    return this.http.put('/password', data);
  }

  searchUser(data: TSeachUser) {
    return this.http.post('/search', data);
  }

  create = undefined;
  update = undefined;
  delete = undefined;
  read = undefined;
}

export const userAPI = new UserAPI();
