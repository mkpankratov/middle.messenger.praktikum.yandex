import { Block } from '@classes/Block';
import { withStore } from '@classes/Store';
import templateString from '@components/chat/components/viewChat/template';

export class ViewChatBase extends Block {
  static template = this.hbsCompile(templateString);

  render() {
    return this.compile(ViewChatBase.template, this.props);
  }
}

const withViewChatState = withStore(state => {
  return {
    chatView: state.chatView,
  };
});

export const ViewChat = withViewChatState(ViewChatBase);
