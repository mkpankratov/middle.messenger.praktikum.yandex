import { Block } from '@classes/Block';
import templateString from '@pages/chat/template';

export class ChatPage extends Block {
  static template = this.hbsCompile(templateString);
  render() {
    return this.compile(ChatPage.template, this.props);
  }
}
