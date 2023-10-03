import { Block } from '../../../../../../classes/Block/index.ts';
import { store, withStore } from '../../../../../../classes/Store/index.ts';
import { chatListController } from '../../../../../../controllers/ChatListController/index.ts';
import { chatViewController } from '../../../../../../controllers/ChatViewController/index.ts';
import templateString from './template.ts';
import type { TRemoveUserProps } from './types.ts';

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
