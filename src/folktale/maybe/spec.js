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
      expect(Maybe.hasInstance(result)).toBe(true);
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

  describe('extracting values', () => {
    it('extract value from Maybe.Just', () => {
      const result = maybeFindInArray([1, 2, 3, 4], isEqualTo(2));
      const extractedValue = result.getOrElse('Not found');
      expect(extractedValue).toBe(2);
    });
  });

  describe('transforming, chaining', () => {
    const increment = x => Maybe.Just(x + 1);
    const transform = y => Maybe.Just({ value: y });

    describe('transforming values', () => {
      it('increment found item', () => {
        const result = maybeFindInArray([7, 3, 5, 2], isEqualTo(5));
        // NB transforming function DOESN'T return Maybe
        const incremented = result.map(x => x + 1);

        expect(Maybe.hasInstance(incremented)).toBe(true);
        expect(incremented.getOrElse('')).toEqual(6);
      });
    });

    describe("sequencing transforms (each function applied returns a Maybe, so use 'chain')", () => {
      it('increment found number and transform into object', () => {
        const result = maybeFindInArray([7, 3, 5, 2], isEqualTo(2));
        const transformed = result
          .chain(increment)
          .chain(increment)
          .chain(transform);

        expect(transformed.getOrElse('')).toEqual({ value: 4 });
      });

      it('will only apply transforms Maybe.Just', () => {
        const result = maybeFindInArray([], isEqualTo(2));
        const transformed = result.chain(increment).chain(transform);

        expect(transformed.getOrElse('Not found')).toEqual('Not found');
      });
    });

    describe('error handling', () => {
      it("handles errors using 'orElse'", () => {
        const result = maybeFindInArray([], isEqualTo(2)).orElse(() =>
          Maybe.Just('Element not in array')
        );

        expect(result.getOrElse('')).toEqual('Element not in array');
      });

      it("'orElse' will ignore non-errors (ie Just values)", () => {
        const result = maybeFindInArray([11, 9, 3, 4, 2, 8], isEqualTo(2))
          .orElse(() => Maybe.Just('Element not in array'))
          .chain(increment);

        expect(result.getOrElse('')).toEqual(3);
      });
    });
  });
});
