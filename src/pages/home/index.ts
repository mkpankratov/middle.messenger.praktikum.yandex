import { Block } from '../../classes/Block/index.ts';
import templateString from './template.ts';

export class Home extends Block {
  static template = this.hbsCompile(templateString);
  render() {
    return this.compile(Home.template, this.props);
  }
}
