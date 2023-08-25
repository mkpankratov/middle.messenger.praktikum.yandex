export type TOptions = {
  timeout?: number;
  headers?: TStringObject;
  method?: string;
  data?: TStringObject;
};

type TStringObject = {
  [key: string]: string;
};
