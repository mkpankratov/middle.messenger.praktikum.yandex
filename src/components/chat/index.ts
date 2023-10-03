import { Block } from '../../classes/Block/index.ts';
import templateString from './template.ts';
import type { TChatProps } from './types.ts';

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
