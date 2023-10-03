import type { TOptions } from '../../classes/HTTPTransport/types.ts';
import type { TUser } from '../AuthAPI/types.ts';
import type { ChatsAPI } from '../ChatListAPI/index.ts';

export type TChatsAPI = ChatsAPI;

export type TChatInfo = {
  id?: number;
  title?: string;
  avatar?: string;
  unread_count?: number;
  last_message?: TLastMessage;
};

type TLastMessage = {
  user: TUser;
  time: string;
  content: string;
};

export type TOptionsChatList = TOptions & {
  title?: string;
  chatId?: number;
  users?: number[];
};

export type TGetTokenResponse = { token: string };

export type TReturnType = Array<TUser & { role: string }> | TChatInfo[] | { token: string };

export type TCreateResponse = {
  id: number;
};
