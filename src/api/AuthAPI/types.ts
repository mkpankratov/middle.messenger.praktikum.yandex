import type { AuthAPI } from './index.ts';

export type TAuthAPI = AuthAPI;

export type TSigninData = {
  login: string;
  password: string;
};
export type TSignupData = {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
};

export type TUser = {
  id: number;
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
  avatar: string;
  display_name: string;
};
