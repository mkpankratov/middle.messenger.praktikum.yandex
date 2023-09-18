import type { TBlockConstructable } from '@classes/Block/types';

export type TRegister = (name: string, Component: TBlockConstructable) => void;
