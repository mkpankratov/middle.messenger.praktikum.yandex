import type { TPropsWithRouter } from '../../hocs/withRouter/types.ts';

export type TNavLinkBaseProps = TPropsWithRouter & {
  to: string;
  text: string;
  className?: string;
  danger?: boolean;
  events?: {
    click: (e: MouseEvent) => void;
  };
};
