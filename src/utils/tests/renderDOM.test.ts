import { expect } from 'chai';
import sinon from 'sinon';

import type { Block } from '../../classes/Block/index.ts';
import { renderDOM } from '../renderDOM.ts';

describe('renderDOM', () => {
  it('returns null if doesn`t find root', () => {
    const BlockFake = {
      getContent: sinon.fake.returns('<div></div>'),
    } as unknown as Block;

    expect(renderDOM('#nonExistentId', BlockFake)).to.eq(null);
  });

  it('returns swapped root', () => {
    const fakeElement = window.document.createElement('div');

    fakeElement.id = 'swapped';

    const BlockFake = {
      getContent: sinon.fake.returns(fakeElement),
    } as unknown as Block;

    const element = window.document.createElement('div');

    element.id = 'root';
    window.document.querySelector('body')?.appendChild(element);

    renderDOM('#root', BlockFake);

    const isOldElementBoolean = Boolean(window.document.querySelector('body')?.querySelector('#root'));
    const isNewElementBoolean = Boolean(window.document.querySelector('body')?.querySelector('#swapped'));

    expect(isOldElementBoolean).to.eq(false);
    expect(isNewElementBoolean).to.eq(true);
  });
});
