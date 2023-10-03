import { Block } from '../../classes/Block/index.ts';
import { withRouter } from '../../hocs/withRouter/index.ts';
import templateString from './template.ts';
import type { TNavLinkBaseProps } from './types.ts';

export class NavLinkBase extends Block<TNavLinkBaseProps> {
  static template = this.hbsCompile(templateString);
  constructor(props: TNavLinkBaseProps) {
    super({
      ...props,
      events: {
        click: (e: MouseEvent) => {
          e.preventDefault();
          this.navigate();
        },
      },
    });
  }
  navigate() {
    this.props.router.go(this.props.to);
  }
  render() {
    return this.compile(NavLinkBase.template, this.props);
  }
}

export const NavLink = withRouter(NavLinkBase);
