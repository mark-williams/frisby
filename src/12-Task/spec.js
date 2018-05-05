const { of, rejected } = require('folktale/concurrency/task');
import { penalty, penaltyTask, constants } from './';
/* eslint no-console: off */

describe('Task (from folktale', () => {
  let success;
  let reject;

  beforeEach(() => {
    success = jest.fn();
    reject = jest.fn();
  });

  describe('non-task implementation', () => {
    it("take 'good' penalty", () => {
      const takePen = penalty(reject, success);
      takePen({ shot: constants.topcorner });
      expect(reject).toHaveBeenCalledTimes(0);
      expect(success).toHaveBeenCalledTimes(1);
    });

    it("take 'poor' penalty", () => {
      const takePen = penalty(reject, success);
      takePen({ shot: constants.missing });
      expect(reject).toHaveBeenCalledTimes(0);
      expect(success).toHaveBeenCalledTimes(1);
    });

    it('cause infringement while taking penalty', () => {
      const takePen = penalty(reject, success);
      takePen({ shot: 'double kick' });
      expect(reject).toHaveBeenCalledTimes(1);
      expect(success).toHaveBeenCalledTimes(0);
    });
  });

  describe('task implementation', () => {
    it("task | take 'good' penalty", () => {
      return penaltyTask({ shot: constants.topcorner })
        .run()
        .promise()
        .then(r => {
          expect(r).toEqual(constants.penalty_scored);
        });
    });

    it('task | take penalty with unsupported shot type', () => {
      return penaltyTask({ shot: 'backward_pass' })
        .run()
        .promise()
        .then(success)
        .catch(e => expect(e).toEqual(constants.retake));
    });

    it('task | execute task and get result using future', done => {
      penaltyTask({ shot: constants.topcorner })
        .run()
        .future()
        .map(r => expect(r).toEqual(constants.penalty_scored));

      done();
    });
  });

  describe('task | simple construction: of and rejected', () => {
    it('of', () => {
      const task = of(117);
      return task
        .run()
        .promise()
        .then(x => expect(x).toEqual(117));
    });

    it('rejected', () => {
      const task = rejected('error');
      return task
        .run()
        .promise()
        .then(() => expect(true).toBe(false))
        .catch(err => expect(err).toEqual('error'));
    });
  });
});
