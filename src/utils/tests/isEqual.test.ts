import { expect } from 'chai';

import { isEqual } from '../isEqual.ts';

describe('isEqual', () => {
  it('should return true on equal objects', () => {
    const a = { a: 1 };
    const b = { a: 1 };

    expect(isEqual(a, b)).to.eq(true);
  });

  it('should return false on unequal objects', () => {
    const a = { a: 1 };
    const c = { c: 1 };

    expect(isEqual(a, c)).to.eq(false);
  });
});
