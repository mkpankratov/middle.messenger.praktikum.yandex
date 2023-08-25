import { Block } from '@classes/Block';
import type { TProps, TPropsWithChildren } from '@classes/Block/types';

export const getChildrenAndProps = (propsWithChildren: TPropsWithChildren) => {
  const props: TProps = {};
  const children: Record<string, Block> = {};

  Object.entries(propsWithChildren).forEach(([key, value]) => {
    if (value instanceof Block) {
      children[key] = value;
    } else {
      props[key] = value;
    }
  });

  return { props, children };
};
