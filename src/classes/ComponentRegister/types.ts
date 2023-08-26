import type { TBlockConstructable } from '@classes/Block/types';
import type { pageList } from '@pages/index';

export type TComponentList = {
  [key: string]: TBlockConstructable;
};

export type THelperList = TComponentList | typeof pageList;
