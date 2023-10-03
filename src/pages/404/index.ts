import { Block } from '../../classes/Block/index.ts';
import templateString from './template.ts';

export class Page404 extends Block {
  static template = this.hbsCompile(templateString);
  render() {
    return this.compile(Page404.template, this.props);
  }
}
