import { Block } from '../../../../classes/Block/index.ts';
import { withStore } from '../../../../classes/Store/index.ts';
import { chatViewController } from '../../../../controllers/ChatViewController/index.ts';
import templateString from './template.ts';

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
