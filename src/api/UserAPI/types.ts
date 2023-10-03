import type { UserAPI } from './index.ts';

export type TUserAPI = UserAPI;

export type TUpdateUser = {
  first_name?: string;
  second_name?: string;
  login?: string;
  email?: string;
  password?: string;
  phone?: string;
  avatar?: string;
};

export type TUpdatePassword = {
  oldPassword: 'string';
  newPassword: 'string';
};

export type TSeachUser = {
  login: string;
};
