import { expect } from 'chai';
import type { SinonFakeXMLHttpRequest, SinonFakeXMLHttpRequestStatic } from 'sinon';
import sinon from 'sinon';

import { HTTPTransport } from '../index.ts';

declare const global: any;

describe('HTTPTransport', () => {
  let xhr: SinonFakeXMLHttpRequestStatic;
  let instance: HTTPTransport;
  let requests: SinonFakeXMLHttpRequest[] = [];

  beforeEach(() => {
    xhr = sinon.useFakeXMLHttpRequest();

    global.XMLHttpRequest = xhr;

    xhr.onCreate = (request: SinonFakeXMLHttpRequest) => {
      requests.push(request);
    };

    instance = new HTTPTransport('/auth');
  });

  afterEach(() => {
    requests = [];
  });

  it('sends GET request on .get()', () => {
    instance.get('/user');

    const [request] = requests;

    expect(request.method).to.eq('Get');
  });

  it('sends POST request on .post() ', () => {
    instance.post('/user');

    const [request] = requests;

    expect(request.method).to.eq('Post');
  });

  it('sends PUT request on .put() ', () => {
    instance.put('/user', []);

    const [request] = requests;

    expect(request.method).to.eq('Put');
  });

  it('sends PATCH request on .patch()', () => {
    instance.patch('/user', []);

    const [request] = requests;

    expect(request.method).to.eq('Patch');
  });

  it('sends DELETE request on .delete() ', () => {
    instance.delete('/user');

    const [request] = requests;

    expect(request.method).to.eq('Delete');
  });
});
