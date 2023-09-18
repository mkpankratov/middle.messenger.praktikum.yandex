import { Block } from '@classes/Block';
import { store, withStore } from '@classes/Store';
import templateString from '@components/chat/components/viewChat/components/removeUser/template';
import type { TRemoveUserProps } from '@components/chat/components/viewChat/components/removeUser/types';
import { chatListController } from '@controllers/ChatListController';
import { chatViewController } from '@controllers/ChatViewController';

export class RemoveUserBase extends Block<TRemoveUserProps> {
  static template = this.hbsCompile(templateString);
  constructor(props: TRemoveUserProps) {
    super({ ...props });
    this.props.events = { click: this.handleRemoveUser };
  }

  public handleRemoveUser = (e: MouseEvent) => {
    if (!(e.target instanceof HTMLElement)) {
      return;
    }

    if (!e.target.dataset.removeId) {
      return;
    }

    const chatId = store.getState().selectedChat.id;
    const userId = e.target.dataset.removeId;

    chatListController.deleteUserFromChat([Number(userId)], chatId);
    chatViewController.showFeed();
  };

  render() {
    this.props.events = { click: this.handleRemoveUser };
    return this.compile(RemoveUserBase.template, this.props);
  }
}

const withGroupUserIdList = withStore<TRemoveUserProps>(state => {
  return {
    groupChatUserList: state.groupChatUserList || [],
  };
});

export const RemoveUser = withGroupUserIdList(RemoveUserBase);
