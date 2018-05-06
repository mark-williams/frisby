import { getData } from './';

jest.useFakeTimers();

describe('13 - use Task for asynchronous actions', () => {
  describe("'normal' async function using callbacks", () => {
    it("getData will return 'SomeData' as long as it is given a path", () => {
      const cb = jest.fn();
      getData('world', cb);
      jest.runAllTimers();
      expect(cb.mock.calls[0][1]).toEqual('Some data (from world)');
    });

    it('getData will throw an error if a path is not supplied', () => {
      const cb = jest.fn();
      getData(null, cb);
      jest.runAllTimers();
      expect(cb.mock.calls[0][0]).toEqual(
        'Where am I meant to get the data from?'
      );
    });
  });
});
