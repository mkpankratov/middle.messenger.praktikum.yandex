import type { Block } from '@classes/Block';
import type { TBlock } from '@classes/Block/types';
import { router } from '@classes/Router';
import type { TPropsWithRouter } from '@hocs/withRouter/types';

export function withRouter(Component: typeof Block<any>) {
  type Props = typeof Component extends TBlock<infer P> ? P : any;

  return class WithRouter extends Component {
    constructor(props: Props & TPropsWithRouter) {
      super({ ...props, router });
    }
  };
}
