import { Block } from '@classes/Block';
import templateString from '@components/page/template';

export class Page extends Block {
  static template = this.hbsCompile(templateString);
  render() {
    document.title = this.props.title ? this.props.title : document.title;
    return this.compile(Page.template, this.props);
  }
}
