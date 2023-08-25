import { Block } from '@classes/Block';
import templateString from '@pages/home/template';

export class Home extends Block {
  static template = this.hbsCompile(templateString);
  render() {
    return this.compile(Home.template, this.props);
  }
}
