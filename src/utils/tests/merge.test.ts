import { expect } from 'chai';

import { merge } from '../set.ts';

describe('Merge', () => {
  it('merges two objects with shared properties', () => {
    const arg = { a: { b: { a: 2 } }, d: 5 };
    const arg1 = { a: { b: { c: 1 } } };

    const check = {
      a: {
        b: {
          a: 2,
          c: 1,
        },
      },
      d: 5,
    };

    expect(merge(arg, arg1)).deep.eq(check);
  });
});
