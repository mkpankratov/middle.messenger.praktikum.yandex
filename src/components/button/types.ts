export type TButtonProps = {
  to: string;
  text: string;
  clickHandler: (e: MouseEvent) => void;
  events?: {
    click: (e: MouseEvent) => void;
  };
};
