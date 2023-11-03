import { expect } from 'chai';

import { set } from '../set.ts';

describe('Set', () => {
  it('adds path to object taken as args', () => {
    const check = { foo: 5, bar: { baz: 10 } };

    expect(set({ foo: 5 }, 'bar.baz', 10)).deep.eq(check);
    expect(set(3, 'foo.bar', 'baz')).deep.eq(3);
  });

  it('does not add path to primitive', () => {
    expect(set(3, 'foo.bar', 'baz')).deep.eq(3);
  });
});
