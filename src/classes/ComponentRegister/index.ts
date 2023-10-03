import type { TComponentList } from './types.ts';
import { register } from './utils/register.ts';

export class ComponentRegister {
  private register = register;
  constructor(componentList: TComponentList) {
    Object.keys(componentList).forEach(componentName => {
      this.register(componentName, componentList[componentName]);
    });
  }
}
