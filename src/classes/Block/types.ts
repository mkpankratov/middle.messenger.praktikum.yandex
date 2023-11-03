import type { TInbox } from '../../mocks/types.ts';
import type { Block } from './index.ts';

export type TBlock<P extends Record<string, any>> = Block<P>;

export type TBlockConstructable<P extends Record<string, any> = any> = {
  new (props: P): Block<P>;
};

export type TMeta = {
  props: TProps;
};

export type TProps<T = unknown> = T & {
  events?: TEvents;
  title?: string;
  validate?: string;
  validateRules?: string[];
  errorMessage?: Block;
  inbox?: TInbox[];
};

type TEvents = {
  [key: string]: () => void;
};

export type TComponentDidUpdate = (oldProps?: TProps, newProps?: TProps) => boolean;

export type TContextAndStubs = TProps & {
  __refs?: TRefs;
  __children?: TChildren[];
};

export type TChildren = {
  component: Block;
  embed: (arg: DocumentFragment) => void;
};

export type TRefs = {
  [key: string]: Block;
};

export type TStringObject = {
  [key: string]: any;
};
