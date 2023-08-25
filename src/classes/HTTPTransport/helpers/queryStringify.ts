import type { TOptions } from '@classes/HTTPTransport/types';

export const queryStringify = (data: TOptions['data']) => {
  if (data) {
    return Object.keys(data)
      .reduce((acc, i) => acc + i + '=' + data[i] + '&', '?')
      .slice(0, -1);
  }

  return '';
};
