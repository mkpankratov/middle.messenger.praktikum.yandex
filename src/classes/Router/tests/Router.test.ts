import { expect } from 'chai';
import sinon from 'sinon';

import type { TBlockConstructable } from '../../Block/types.ts';
import { Route } from '../../Route/index.ts';
import { Router } from '../index.ts';

describe('Router', () => {
  const router = new Router();
  const getContentFake = sinon.fake.returns(document.createElement('div'));

  const BlockMock = class {
    getContent = getContentFake;
  } as unknown as TBlockConstructable;

  it('use() should return Router instance', () => {
    const result = router.use('/', BlockMock);

    expect(result).to.eq(router);
  });

  it('should render a page on start()', async () => {
    await router.use('/', BlockMock).start();

    expect(getContentFake.callCount).to.eq(1);
  });

  it('has .back() method', async () => {
    const spy = sinon.spy(global.window.history, 'back');

    await router.use('/', BlockMock).start();
    router.back();
    expect(spy.calledOnce).to.be.true;
  });

  it('has .forward() method', () => {
    const spy = sinon.spy(global.window.history, 'forward');

    router.use('/', BlockMock).start();
    router.forward();
    expect(spy.calledOnce).to.be.true;
  });

  it('goes to unprotected path', async () => {
    await router.use('/sign-up', BlockMock);
    router.go('/sign-up');
    expect(getContentFake.callCount).to.eq(1);
  });

  it('follows protected route if logged in', async () => {
    await router.use('/secret', BlockMock);
    router.go('/secret');
    expect(getContentFake.callCount).to.eq(1);
  });

  it('should .get() route by string', async () => {
    await router.use('/login', BlockMock);

    const route = router.getRoute('/login');

    expect(route instanceof Route).to.be.true;
  });

  it('should redirect get() if not found', async () => {
    await router.use('/404', BlockMock);

    const spy = sinon.spy(router, 'go');

    router.getRoute('/unfound');
    expect(spy.calledOnceWith('/404')).to.be.true;
  });
});
