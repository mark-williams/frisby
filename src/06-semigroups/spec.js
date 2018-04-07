import { all, sum } from './';

describe('06 - semigroups', () => {
  describe('semigroups | integers', () => {
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

  describe('semigroups - booleans (all)', () => {
    it('\'all\' should support concat of booleans - result is true if values all are true', () => {
      const a = true;
      const b = true;
      const result = all(a).concat(all(b));

      expect(result.val).toBe(true);
    });

    it('\'all\' should support concat of booleans - result is fasle if not all values all are true', () => {
      const testValues = [true, false, false, true];
      const result = testValues.reduce((r, c) => {
        return r.concat(all(c));
      }, all(true));

      expect(result.val).toBe(false);
    });
  });
});

