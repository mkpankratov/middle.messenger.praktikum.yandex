import { Block } from '@classes/Block';
import templateString from '@components/form/components/submit/template';

export class Submit extends Block {
  static template = this.hbsCompile(templateString);
  render() {
    return this.compile(Submit.template, this.props);
  }
}
