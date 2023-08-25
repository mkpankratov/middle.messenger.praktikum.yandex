import type { Block } from '@classes/Block';
import type { TBlockConstructable } from '@classes/Block/types';

export type TRegister = (name: string, Component: TBlockConstructable) => void;

export interface Comp extends Block {}
