import { Block } from '@classes/Block';
import templateString from '@pages/login/template';

export class LoginPage extends Block {
  static template = this.hbsCompile(templateString);
  render() {
    return this.compile(LoginPage.template, this.props);
  }
}
