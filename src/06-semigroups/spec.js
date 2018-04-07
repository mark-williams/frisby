import sum from './';

describe('06 - semigroups', () => {
  it('\'sum\' should implement \'val\' prop', () => {
    const result = sum(100);
    expect(result.val).toEqual(100);
  });

  it('should implement concat', () => {
    const x = 10;
    const y = 11;
    const result = sum(x).concat(sum(y));
    expect(result.val).toEqual(x + y);
  });
});
