import { METHODLIST } from '@classes/HTTPTransport/constants';
import { queryStringify } from '@classes/HTTPTransport/helpers/queryStringify';
import type { THttpMethod, TOptions } from '@classes/HTTPTransport/types';

export class HTTPTransport {
  get: THttpMethod = (url: string, options: TOptions = {}) => {
    return this.request(
      url + queryStringify(options.data),
      { ...options, method: METHODLIST.GET },
      options.timeout,
    );
  };

  put: THttpMethod = (url, options = {}) => {
    return this.request(url, { ...options, method: METHODLIST.PUT }, options.timeout);
  };
  post: THttpMethod = (url, options = {}) => {
    return this.request(url, { ...options, method: METHODLIST.POST }, options.timeout);
  };
  delete: THttpMethod = (url, options = {}) => {
    return this.request(url, { ...options, method: METHODLIST.DELETE }, options.timeout);
  };

  request = (url: string, options: TOptions, timeout = 5000) => {
    const { method, data } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      method && xhr.open(method, url);

      if (options.headers) {
        Object.keys(options.headers).forEach(key => {
          options.headers && xhr.setRequestHeader(key, options.headers[key]);
        });
      }

      xhr.onload = function () {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 0) {
          setTimeout(reject, timeout);
        }
      };

      if (method === METHODLIST.GET || !data) {
        xhr.send();
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  };
}
