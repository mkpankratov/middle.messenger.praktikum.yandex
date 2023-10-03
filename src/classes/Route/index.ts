import { renderDOM } from '../../utils/renderDOM.ts';
import type { Block } from '../Block/index.ts';
import type { TBlockConstructable } from '../Block/types.ts';
import type { TRouteProps } from '../Route/types.ts';

export class Route {
  private block?: Block;
  private blockClass: TBlockConstructable;
  private pathname;
  private props: TRouteProps | undefined;
  private defaultRoot = '#app';

  constructor(pathname: string, view: TBlockConstructable, props?: TRouteProps) {
    this.pathname = pathname;
    this.blockClass = view;
    this.block = undefined;
    this.props = props || undefined;
  }

  public navigate(pathname: string) {
    if (this.match(pathname)) {
      this.pathname = pathname;
      this.render();
    }
  }

  public leave() {
    this.block = undefined;
  }

  public match(pathname: string) {
    return pathname === this.pathname;
  }

  public render() {
    if (!this.block) {
      this.block = new this.blockClass(this.props?.blockProps || {});
      renderDOM(this.props?.rootProps || this.defaultRoot, this.block);
      return;
    }
  }
}
