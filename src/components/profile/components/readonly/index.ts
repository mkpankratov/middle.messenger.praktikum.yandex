import { Block } from '@classes/Block';
import templateString from '@components/profile/components/readonly/template';

export class ProfileReadonly extends Block {
  static template = this.hbsCompile(templateString);
  render() {
    return this.compile(ProfileReadonly.template, this.props);
  }
}
