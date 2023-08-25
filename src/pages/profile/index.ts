import { Block } from '@classes/Block';
import templateString from '@pages/profile/template';

export class ProfilePage extends Block {
  static template = this.hbsCompile(templateString);
  render() {
    return this.compile(ProfilePage.template, this.props);
  }
}
