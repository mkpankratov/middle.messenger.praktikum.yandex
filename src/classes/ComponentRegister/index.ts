import type { TComponentList } from '@classes/ComponentRegister/types';
import { register } from '@classes/ComponentRegister/utils/register';

export class ComponentRegister {
  private register = register;
  constructor(componentList: TComponentList) {
    Object.keys(componentList).forEach(componentName => {
      this.register(componentName, componentList[componentName]);
    });
  }
}
