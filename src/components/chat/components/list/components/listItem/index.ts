import { Block } from '@classes/Block';
import templateString from '@components/chat/components/list/components/listItem/template';

export class ListItem extends Block {
  static template = this.hbsCompile(templateString);
  render() {
    return this.compile(ListItem.template, this.props);
  }
}
