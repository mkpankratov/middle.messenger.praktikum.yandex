import { Block } from '@classes/Block';
import templateString from '@components/chat/template';
import type { TChatProps } from '@components/chat/types';

export class Chat extends Block<TChatProps> {
  static template = this.hbsCompile(templateString);
  constructor(props: TChatProps) {
    super({
      ...props,
    });
  }
  render() {
    return this.compile(Chat.template, this.props);
  }
}
