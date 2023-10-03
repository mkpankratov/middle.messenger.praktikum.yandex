import { Block } from '../../classes/Block/index.ts';
import templateString from './template.ts';

export class Page5XX extends Block {
  static template = this.hbsCompile(templateString);
  render() {
    return this.compile(Page5XX.template, this.props);
  }
}
