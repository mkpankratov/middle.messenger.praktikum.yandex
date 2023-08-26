import { Block } from '@classes/Block';
import templateString from '@components/chat/components/list/template';
import { inbox } from '@mocks/chat';

export class List extends Block {
  static template = this.hbsCompile(templateString);
  constructor() {
    super({ inbox });
  }
  render() {
    return this.compile(List.template, this.props);
  }
}
