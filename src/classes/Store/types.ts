import type { TUser } from '@api/AuthAPI/types';
import type { TChatInfo } from '@api/ChatListAPI/types';
import type { TMessage } from '@controllers/MessageListController/types';

export type TState = {
  user: TUser;
  chatList: TChatInfo[];
  messageList: Record<number, TMessage[]>;
  selectedChat?: TChatInfo;
  searchUserList?: TUser[];
  chatView: string;
  multipleUserList: TUser[];
  isSelectedChatGroup?: boolean;
  groupChatUserList?: TUser[];
};
