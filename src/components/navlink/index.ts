import { Block } from '@classes/Block';
import type { TProps } from '@classes/Block/types';
import templateString from '@components/navlink/template';
import { routeTo } from '@utils/route';

export class NavLink extends Block {
  static template = this.hbsCompile(templateString);
  constructor(props: TProps) {
    super({
      ...props,
      events: {
        click: (e: MouseEvent) => {
          e.preventDefault();
          routeTo(this.props.route);
        },
      },
    });
  }
  render() {
    return this.compile(NavLink.template, this.props);
  }
}
