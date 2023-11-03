import type { TBlockConstructable } from '../../Block/types.ts';

export type TRegister = (name: string, Component: TBlockConstructable) => void;
