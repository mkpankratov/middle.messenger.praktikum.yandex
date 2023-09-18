import { Block } from '@classes/Block';
import templateString from '@components/navlink/template';
import type { TNavLinkBaseProps } from '@components/navlink/types';
import { withRouter } from '@hocs/withRouter';

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
