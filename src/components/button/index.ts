import { Block } from '../../classes/Block/index.ts';
import templateString from './template.ts';
import type { TButtonProps } from './types.ts';

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
