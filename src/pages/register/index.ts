import { Block } from '@classes/Block';
import templateString from '@pages/register/template';

export class RegisterPage extends Block {
  static template = this.hbsCompile(templateString);
  render() {
    return this.compile(RegisterPage.template, this.props);
  }
}
