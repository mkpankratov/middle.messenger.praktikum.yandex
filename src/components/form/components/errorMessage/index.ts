import { Block } from '../../../../classes/Block/index.ts';
import type { TProps } from '../../../../classes/Block/types.ts';
import templateString from './template.ts';

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
