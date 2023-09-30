import { Block } from '@classes/Block';
import { withStore } from '@classes/Store';
import templateString from '@components/chat/components/list/template';
import { chatViewController } from '@controllers/ChatViewController';

export class ListBase extends Block {
  static template = this.hbsCompile(templateString);

  render() {
    this.props.showCreateSingle = chatViewController.showCreateSingle;
    this.props.showCreateMultiple = chatViewController.showCreateMultiple;

    return this.compile(ListBase.template, this.props);
  }
}

const withChatList = withStore(state => {
  return {
    chatList: [...(state.chatList || [])],
    selectedChat: state.selectedChat || undefined,
    myLogin: state.user.login,
  };
});

export const List = withChatList(ListBase);
