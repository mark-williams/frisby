import { All, Sum, First } from './';

describe('06 - semigroups', () => {
  describe('semigroups | integers', () => {
    it('\'Sum\' should implement \'val\' prop', () => {
      const result = Sum(100);
      expect(result.val).toEqual(100);
    });

    it('should implement concat', () => {
      const x = 10;
      const y = 11;
      const result = Sum(x).concat(Sum(y));
      expect(result.val).toEqual(x + y);
    });
  });

  describe('semigroups - booleans (all)', () => {
    it('\'All\' should support concat of booleans - result is true if values all are true', () => {
      const a = true;
      const b = true;
      const result = All(a).concat(All(b));

      expect(result.val).toBe(true);
    });

    it('\'All\' should support concat of booleans - result is fasle if not all values all are true', () => {
      const testValues = [true, false, false, true];
      const result = testValues.reduce((r, c) => {
        return r.concat(All(c));
      }, All(true));

      expect(result.val).toBe(false);
    });
  });

  describe('semigroups - First', () => {
    it('should take first term when combining', () => {
      const a = 'One';
      const b = 'Two';
      const result = First(a).concat(First(b));

      expect(result.val).toBe(a);
    });
  });
});

