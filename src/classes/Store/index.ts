import { isEqual } from '../../utils/isEqual.ts';
import { set } from '../../utils/set.ts';
import type { TBlockConstructable } from '../Block/types.ts';
import { EventBus } from '../EventBus/index.ts';
import type { TState } from '../Store/types.ts';

export enum StoreEvents {
  Updated = 'updated',
}

export class Store extends EventBus {
  private state: any = {};

  public set(keypath: string, data: unknown) {
    set(this.state, keypath, data);
    this.emit(StoreEvents.Updated, this.getState());
  }

  public getState() {
    return this.state;
  }
}

export const store = new Store();

export function withStore<SP extends Record<string, any>>(mapStateToProps: (state: TState) => SP) {
  return function wrap<P extends Record<string, any>>(Component: TBlockConstructable<SP & P>) {
    return class WithStore extends Component {
      constructor(props: Omit<P, keyof SP>) {
        let previousState = mapStateToProps(store.getState());

        super({ ...(props as P), ...previousState });

        store.on(StoreEvents.Updated, () => {
          const stateProps = mapStateToProps(store.getState());

          if (isEqual(previousState, stateProps)) {
            return;
          }

          previousState = stateProps;

          this.setProps({ ...stateProps } as SP & P);
        });
      }
    };
  };
}
