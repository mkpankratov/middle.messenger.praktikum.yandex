import { Block } from '@classes/Block';
import type { TProps } from '@classes/Block/types';
import templateString from '@components/form/components/input/template';
import { validate } from '@utils/validate';
import type { TValidateEvent } from '@utils/validate/types';

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
