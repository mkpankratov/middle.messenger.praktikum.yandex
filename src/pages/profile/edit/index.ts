import { Block } from '@classes/Block';
import templateString from '@pages/profile/edit/template';

export class EditProfilePage extends Block {
  static template = this.hbsCompile(templateString);
  render() {
    return this.compile(EditProfilePage.template, this.props);
  }
}
