export type TOptions = {
  timeout?: number;
  headers?: TStringObject;
  method?: string;
  data?: TStringObject;
};

type TStringObject = {
  [key: string]: string;
};

export type THttpMethod = (url: string, options?: TOptions) => Promise<unknown>;
