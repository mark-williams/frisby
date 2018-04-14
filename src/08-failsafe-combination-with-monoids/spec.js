import { Map } from 'immutable-ext';
import { Sum, All, First } from './';

describe('08 - failsafe comination with monoids', () => {
  describe('Sum monoid - semigroup with identity', () => {
    it('empty function should return a result that doesn\'t affect concat if applied first', () => {
      const a = Sum(1).concat(Sum(2)).concat(Sum(3));
      const b = Sum.empty().concat(a);

      expect(b.val).toEqual(a.val);
    });

    it('empty function should return a result that doesn\'t affect concat if applied last', () => {
      const a = Sum(1).concat(Sum(2)).concat(Sum(3));
      const b = a.concat(Sum.empty());

      expect(b.val).toEqual(a.val);
    });
  });

  describe('All monoid - semigroup with identity', () => {
    describe('empty function should return a result that doesn\'t affect concat if applied first (original = false', () => {
      it('should return false if original is false', () => {
        const a = All(true).concat(All(false)).concat(All(true));
        const b = All.empty().concat(a);

        expect(b.val).toEqual(a.val);
      });

      it('should return true if original is true', () => {
        const a = All(true).concat(All(true)).concat(All(true));
        const b = All.empty().concat(a);

        expect(b.val).toEqual(a.val);
      });
    });
  });
});
