import sum from './';

describe('06 - semigroups', () => {
  it('\'sum\' should implement \'val\' prop', () => {
    const _ = sum(100);
    expect(_.val).toEqual(100);
  });
});
