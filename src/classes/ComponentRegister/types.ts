import type { pageList } from '../../pages/index.ts';
import type { TBlockConstructable } from '../Block/types.ts';

export type TComponentList = {
  [key: string]: TBlockConstructable;
};

export type THelperList = TComponentList | typeof pageList;
