import { Block } from '../../../../classes/Block/index.ts';
import type { TProps } from '../../../../classes/Block/types.ts';
import { validate } from '../../../../utils/validate/index.ts';
import type { TValidateEvent } from '../../../../utils/validate/types.ts';
import templateString from './template.ts';

export class Input extends Block {
  static template = this.hbsCompile(templateString);
  constructor(props: TProps) {
    super({
      ...props,
      events: {
        blur: (e: TValidateEvent) => {
          const error = validate(this.props.validate, e);

          this.props.errorMessage && this.props.errorMessage.setProps(error);
        },
      },
    });
  }

  render() {
    return this.compile(Input.template, this.props);
  }
}
