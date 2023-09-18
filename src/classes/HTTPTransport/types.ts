import type { EMethodList } from '@classes/HTTPTransport/constants';

export type TOptions = {
  method: EMethodList;
  data?: any;
};

export type THttpMethod<T extends TOptions, K = unknown> = (url: string, options?: T) => Promise<K>;
