import { Block } from '../../../../../../../../classes/Block/index.ts';
import { withStore } from '../../../../../../../../classes/Store/index.ts';
import { chatListController } from '../../../../../../../../controllers/ChatListController/index.ts';
import { chatViewController } from '../../../../../../../../controllers/ChatViewController/index.ts';
import templateString from './template.ts';

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
