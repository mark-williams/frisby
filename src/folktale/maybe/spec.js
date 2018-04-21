import findInArray, { maybeFindInArray } from './';
import Maybe from 'folktale/maybe';

const isEqualTo = j => k => j === k;

describe('folktale | maybe', () => {
  describe('maybe', () => {
    it('findInArray returns item matching predicate', () => {
      const result = findInArray([1, 2, 3, 4], isEqualTo(3));
      expect(result).toBe(3);
    });

    it('maybeFindInArray returns Maybe', () => {
      const result = maybeFindInArray([1, 2, 3, 4], isEqualTo(13));
      expect(Maybe.hasInstance(result));
    });

    it('maybeFindInArray returns Maybe.Just', () => {
      const result = maybeFindInArray([1, 2, 3, 4], isEqualTo(3));
      expect(result.getOrElse('Not found')).toBe(3);
    });

    it('if item not found maybeFindInArray returns Maybe.Nothing', () => {
      const result = maybeFindInArray([1, 2, 3, 4], isEqualTo(6));
      expect(result.getOrElse('Not found')).toBe('Not found');
    });
  });
});
