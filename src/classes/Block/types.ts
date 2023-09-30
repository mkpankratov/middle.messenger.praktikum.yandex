import type { Block } from '@classes/Block';
import type { TInbox, TMessageList } from '@mocks/types';
import type { TValidateEvent } from '@utils/validate/types';

export type TBlock<P extends Record<string, any>> = Block<P>;

export type TBlockConstructable<P extends Record<string, any> = any> = {
  new (props: P): Block<P>;
};

export type TMeta = {
  props: TProps;
};

export type TPropValue =
  | string
  | TEvents
  | TFocusEvents
  | TSubmitEvents
  | TMouseEvents
  | undefined
  | string[]
  | (() => void)
  | Record<string, Block>
  | Block
  | TInbox[]
  | TMessageList[];

export type TProps<T = unknown> = T & {
  [key: string]: TPropValue;
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

type TFocusEvents = {
  [key: string]: (e: TValidateEvent) => void;
};

type TSubmitEvents = {
  [key: string]: (e: SubmitEvent) => void;
};

type TMouseEvents = {
  [key: string]: (e: MouseEvent) => void;
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
