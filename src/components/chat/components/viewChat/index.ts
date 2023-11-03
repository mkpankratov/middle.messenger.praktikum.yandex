import { Block } from '../../../../classes/Block/index.ts';
import { withStore } from '../../../../classes/Store/index.ts';
import templateString from './template.ts';

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
