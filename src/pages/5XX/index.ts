import { Block } from '@classes/Block';
import templateString from '@pages/5XX/template';

export class Page5XX extends Block {
  static template = this.hbsCompile(templateString);
  render() {
    return this.compile(Page5XX.template, this.props);
  }
}
