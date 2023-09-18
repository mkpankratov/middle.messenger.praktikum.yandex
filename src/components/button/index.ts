import { Block } from '@classes/Block';
import templateString from '@components/button/template';
import type { TButtonProps } from '@components/button/types';

export class Button extends Block<TButtonProps> {
  static template = this.hbsCompile(templateString);
  constructor(props: TButtonProps) {
    super({
      ...props,
      events: {
        click: (e: MouseEvent) => {
          e.preventDefault();
          this.props.clickHandler(e);
        },
      },
    });
  }

  render() {
    return this.compile(Button.template, this.props);
  }
}
