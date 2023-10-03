import { Block } from '../../../../../../classes/Block/index.ts';
import { withStore } from '../../../../../../classes/Store/index.ts';
import { chatListController } from '../../../../../../controllers/ChatListController/index.ts';
import { chatViewController } from '../../../../../../controllers/ChatViewController/index.ts';
import { messageListController } from '../../../../../../controllers/MessageListController/index.ts';
import templateString from './template.ts';
import type { TFeedProps } from './types.ts';

export class FeedBase extends Block<TFeedProps> {
  static template = this.hbsCompile(templateString);
  constructor(props: TFeedProps) {
    super({
      ...props,
      handleSendMessage: (value, formElement) => {
        if (typeof value.message === 'string') {
          messageListController.sendMessage(value.message);
        }

        formElement.reset();
      },
    });
  }

  public deleteSelectedChat() {
    chatListController.deleteSelectedChat();
  }

  public showAddUser() {
    chatViewController.showAddUser();
  }

  public showRemoveUser() {
    chatViewController.showRemoveUser();
  }

  render() {
    this.props.deleteSelectedChat = this.deleteSelectedChat;
    this.props.showAddUser = this.showAddUser;
    this.props.showRemoveUser = this.showRemoveUser;
    return this.compile(FeedBase.template, this.props);
  }
}

const withSelectedChatMessages = withStore<TFeedProps>(state => {
  const selectedChatId = state.selectedChat?.id || 0;

  return {
    messageList: (state.messageList || {})[selectedChatId] || [],
    selectedChat: { ...state.selectedChat },
    userId: state.user.id,
    isSelectedChatGroup: state.isSelectedChatGroup || false,
  };
});

export const Feed = withSelectedChatMessages(FeedBase);
