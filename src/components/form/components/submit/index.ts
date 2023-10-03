import { Block } from '../../../../classes/Block/index.ts';
import templateString from './template.ts';

export class Submit extends Block {
  static template = this.hbsCompile(templateString);
  render() {
    return this.compile(Submit.template, this.props);
  }
}
