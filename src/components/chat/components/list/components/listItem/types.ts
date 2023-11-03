import type { TChatInfo } from 'api/ChatListAPI/types.ts';

export type TListItemProps = {
  data: TChatInfo;
  events: TChatItemClick;
  activeClass: string;
  selectedChat: TChatInfo;
  isMyLastWord: boolean;
  displayTime: string;
  myLogin: string;
};

type TChatItemClick = {
  click: (e: MouseEvent) => void;
};
