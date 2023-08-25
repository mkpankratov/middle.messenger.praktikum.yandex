import { Block } from '@classes/Block';
import type { TProps } from '@classes/Block/types';
import templateString from '@components/form/components/fieldset/template';

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
