import { getData, getDataTask } from './';

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

  describe("using 'Task'", () => {
    it('should retrieve data if given a valid path', () => {
      expect.assertions(1);
      const task = getDataTask('moon').run();
      jest.runAllTimers();

      return task
        .promise()
        .then(x => expect(x).toEqual('Some data (from moon)'));
    });

    it("handle success and process the results using 'chain'", () => {
      const toUppercase = s => s.toUpperCase();
      const task = getDataTask('moon').run();
      jest.runAllTimers();

      return task
        .promise()
        .then(toUppercase)
        .then(r => expect(r).toEqual('SOME DATA (FROM MOON)'));
    });

    describe("handle task errors with 'listen'", () => {
      it("given a valid call should call listen's onResolved", () => {
        const task = getDataTask('moon').run();
        expect.assertions(1);
        jest.runAllTimers();

        task.listen({
          onResolved: d => expect(d).toEqual('Some data (from moon)'),
          onRejected: () => expect(true).toBe(false)
        });
      });

      it("given an invalid call should call listen's onRejected", () => {
        const task = getDataTask(null).run();
        expect.assertions(1);
        jest.runAllTimers();

        task.listen({
          onResolved: () => () => expect(true).toBe(false),
          onRejected: err =>
            expect(err).toBe('Where am I meant to get the data from?')
        });
      });
    });
  });
});
