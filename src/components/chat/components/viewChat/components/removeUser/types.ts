import type { TUser } from 'api/AuthAPI/types.ts';

export type TRemoveUserProps = {
  groupChatUserList?: TUser[];
  events?: {
    click: (e: MouseEvent) => void;
  };
};
