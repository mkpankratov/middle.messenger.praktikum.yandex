import { Block } from '@classes/Block';
import type { TStringObject } from '@classes/Block/types';

export const getChildrenAndProps = <P extends TStringObject>(propsWithChildren: P) => {
  if (!propsWithChildren) return { props: {} as P, children: {} as P };

  const props: Record<string, unknown> = {};
  const children: Record<string, Block | Block[]> = {};

  Object.entries(propsWithChildren).forEach(([key, value]) => {
    if (value instanceof Block) {
      children[key] = value;
    } else {
      props[key] = value;
    }
  });

  return { props: props as P, children };
};
