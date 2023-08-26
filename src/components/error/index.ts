import { Block } from '@classes/Block';
import templateString from '@components/error/template';

export class Error extends Block {
  static template = this.hbsCompile(templateString);
  render() {
    return this.compile(Error.template, this.props);
  }
}
