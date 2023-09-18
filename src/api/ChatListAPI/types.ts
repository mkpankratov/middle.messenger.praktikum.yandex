import type { TUser } from '@api/AuthAPI/types';
import type { ChatsAPI } from '@api/ChatListAPI';
import type { TOptions } from '@classes/HTTPTransport/types';

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
