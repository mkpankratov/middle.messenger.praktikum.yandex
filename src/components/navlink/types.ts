import type { TPropsWithRouter } from '@hocs/withRouter/types';

export type TNavLinkBaseProps = TPropsWithRouter & {
  to: string;
  text: string;
  events?: {
    click: (e: MouseEvent) => void;
  };
};
