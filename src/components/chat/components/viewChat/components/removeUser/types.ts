import type { TUser } from '@api/AuthAPI/types';

export type TRemoveUserProps = {
  groupChatUserList?: TUser[];
  events?: {
    click: (e: MouseEvent) => void;
  };
};
