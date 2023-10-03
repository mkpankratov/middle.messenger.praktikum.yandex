import type { Block } from '../../classes/Block/index.ts';
import type { TBlock } from '../../classes/Block/types.ts';
import { router } from '../../classes/Router/index.ts';
import type { TPropsWithRouter } from './types.ts';

export function withRouter(Component: typeof Block<any>) {
  type Props = typeof Component extends TBlock<infer P> ? P : any;

  return class WithRouter extends Component {
    constructor(props: Props & TPropsWithRouter) {
      super({ ...props, router });
    }
  };
}
