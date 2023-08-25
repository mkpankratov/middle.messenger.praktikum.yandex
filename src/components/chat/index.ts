import { Block } from '@classes/Block';
import templateString from '@components/chat/template';

export class Chat extends Block {
  static template = this.hbsCompile(templateString);
  render() {
    return this.compile(Chat.template, this.props);
  }
}
