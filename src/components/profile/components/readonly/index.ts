import { Block } from '../../../../classes/Block/index.ts';
import templateString from './template.ts';

export class ProfileReadonly extends Block {
  static template = this.hbsCompile(templateString);
  render() {
    return this.compile(ProfileReadonly.template, this.props);
  }
}
