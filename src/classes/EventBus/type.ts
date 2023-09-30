export type IListener<P> = {
  [key: string]: TFunction<P>[];
};

export type TFunction<P> = (oldProps?: P, newProps?: P) => void;
