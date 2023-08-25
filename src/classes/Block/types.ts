import type { Block } from '@classes/Block';
import type { TInbox, TMessageList } from '@mocks/types';
import type { TPageName } from '@utils/route/types';
import type { TValidateEvent } from '@utils/validate/types';

export type TBlock = Block;

export type TBlockConstructable = {
  new (props: TProps): Block;
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
  | TPageName
  | string[]
  | (() => void)
  | Record<string, Block>
  | Block
  | TInbox[]
  | TMessageList[];

export type TProps = {
  [key: string]: TPropValue;
  events?: TEvents;
  title?: string;
  route?: TPageName;
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

export type TPropsWithChildren = {
  [key: string]: Block | TPropValue;
};

export type TContextAndStubs = TProps & {
  __refs?: TRefs;
  __children?: TChildren[];
};

export type TChildren = {
  component: Block;
  embed: (arg: DocumentFragment) => void;
};

type TRefs = {
  [key: string]: Block;
};
