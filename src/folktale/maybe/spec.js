import findInArray from './';

describe('folktale | maybe', () => {
  describe('maybe', () => {
    it('findInArray returns item matching predicate', () => {
      const isEqualTo = j => k => j === k;
      const result = findInArray([1, 2, 3, 4], isEqualTo(3));
      expect(result).toBe(3);
    });
  });
});
