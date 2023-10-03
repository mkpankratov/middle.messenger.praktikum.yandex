import type { TChatInfo } from 'api/ChatListAPI/types.ts';
import type { TValue } from 'components/form/types.ts';
import type { TMessage } from 'controllers/MessageListController/types.ts';

export type TFeedProps = {
  selectedChat?: TChatInfo;
  messageList: TMessage[];
  handleSendMessage?: (value: TValue, formElement: HTMLFormElement) => void;
  userId: number;
  isSelectedChatGroup?: boolean;
  deleteSelectedChat?: () => void;
  showAddUser?: () => void;
  showRemoveUser?: () => void;
};
