import { Box, LazyBox } from './';

describe('Delay evaluation with LazyBox', () => {
  const trimString = s => s.trim();
  const stringToNumber = s => parseInt(s, 10);
  const increment = x => x + 1;

  describe("'Normal' Box", () => {
    it('should use Box to compose functions, returning answer using fold', () => {
      const result = Box(' 9    ')
        .map(trimString)
        .map(stringToNumber)
        .map(increment)
        .fold(x => x);

      expect(result).toEqual(10);
    });
  });

  describe('LazyBox', () => {
    it('should use LazyBox to compose functions, returning answer using fold', () => {
      const result = LazyBox(() => ' 9    ')
        .map(trimString)
        .map(stringToNumber)
        .map(increment)
        .fold(x => x);

      expect(result).toEqual(10);
    });

    describe("should postpone execution until 'fold'", () => {
      it('should not execute sequenced function', () => {
        const f = jest.fn();
        LazyBox(() => ' 9    ')
          .map(trimString)
          .map(stringToNumber)
          .map(increment)
          .map(f);

        expect(f).toHaveBeenCalledTimes(0);
      });

      it('should execute sequenced function once folded', () => {
        const f = jest.fn();
        LazyBox(() => ' 9    ')
          .map(trimString)
          .map(stringToNumber)
          .map(increment)
          .map(f)
          .fold(x => x);

        expect(f).toHaveBeenCalledTimes(1);
      });
    });
  });
});
