import { Block } from '@classes/Block';
import { withStore } from '@classes/Store';
import templateString from '@components/chat/components/viewChat/components/createChat/components/createGroupChatButton/template';
import { chatListController } from '@controllers/ChatListController';
import { chatViewController } from '@controllers/ChatViewController';

export class CreateGroupChatButtonBase extends Block {
  static template = this.hbsCompile(templateString);

  public async handleCreateChat() {
    await chatListController.createGroupChat();
    chatViewController.showFeed();
  }

  render() {
    this.props.handleCreateChat = this.handleCreateChat;
    return this.compile(CreateGroupChatButtonBase.template, this.props);
  }
}

const withSelectedUserList = withStore(state => {
  return {
    hasData: Boolean(state.multipleUserList?.length > 1),
  };
});

export const CreateGroupChatButton = withSelectedUserList(CreateGroupChatButtonBase);
