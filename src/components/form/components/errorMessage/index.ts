import { Block } from '@classes/Block';
import type { TProps } from '@classes/Block/types';
import templateString from '@components/form/components/errorMessage/template';

export class ErrorMessage extends Block {
  static template = this.hbsCompile(templateString);
  constructor(props: TProps) {
    super({
      ...props,
    });
  }

  render() {
    return this.compile(ErrorMessage.template, this.props);
  }
}
