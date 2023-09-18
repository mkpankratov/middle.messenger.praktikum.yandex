import type { TSigninData, TSignupData, TUser } from '@api/AuthAPI/types';
import BaseAPI from '@api/BaseAPI';

export class AuthAPI extends BaseAPI {
  constructor() {
    super('/auth');
  }

  signin(data: TSigninData) {
    return this.http.post('/signin', data);
  }

  signup(data: TSignupData) {
    return this.http.post('/signup', data);
  }

  read(): Promise<TUser> {
    return this.http.get('/user');
  }

  logout() {
    return this.http.post('/logout');
  }

  create = undefined;
  update = undefined;
  delete = undefined;
}

export const authAPI = new AuthAPI();
