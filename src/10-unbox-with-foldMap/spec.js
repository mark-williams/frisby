import { List } from 'immutable-ext';
import { Sum } from './';

describe('10 - unbox with foldMap', () => {
  it('should get total using reduce', () => {
    const result = [Sum(4), Sum(7), Sum(11)].reduce((acc, x) => acc.concat(x), Sum.empty());
    expect(result.val).toBe(22);
  });

  it('should get total using fold', () => {
    const result = List.of(Sum(4), Sum(7), Sum(11)).fold(Sum.empty());
    expect(result.val).toBe(22);
  });
});
