import type { TProps } from '@classes/Block/types';

export type IListener = {
  [key: string]: TFunction[];
};

export type TFunction = (oldProps?: TProps, newProps?: TProps) => void;
