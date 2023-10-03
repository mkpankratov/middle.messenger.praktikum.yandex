import { Block } from '../../../../classes/Block/index.ts';
import type { TProps } from '../../../../classes/Block/types.ts';
import templateString from './template.ts';

export class Fieldset extends Block {
  static template = this.hbsCompile(templateString);
  constructor(props: TProps) {
    super({
      ...props,
    });
    this.refs.input.setProps({ errorMessage: this.refs.errorMessage });
  }

  render() {
    return this.compile(Fieldset.template, this.props);
  }
}
