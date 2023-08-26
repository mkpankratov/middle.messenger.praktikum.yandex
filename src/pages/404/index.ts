import { Block } from '@classes/Block';
import templateString from '@pages/404/template';

export class Page404 extends Block {
  static template = this.hbsCompile(templateString);
  render() {
    return this.compile(Page404.template, this.props);
  }
}
