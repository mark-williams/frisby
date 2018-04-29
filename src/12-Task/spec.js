import { task } from 'folktale/concurrency/task';

const TOPCORNER = 'topcorner';
const MISSING = 'missing';
const PENALTY_SCORED = 'Scores!!!';
const PENALTY_MISSED = 'Saved!!!';
const RETAKE = 'Retake';

/* eslint no-console: off */

const penalty = (rej, res) => attempt => {
  switch (attempt.shot) {
    case MISSING:
      res(PENALTY_MISSED);
      break;
    case TOPCORNER:
      res(PENALTY_SCORED);
      break;

    default:
      rej(RETAKE);
  }
};

const penaltyTask = attempt =>
  task(resolver => {
    if (attempt.shot === MISSING) {
      resolver.reject(PENALTY_MISSED);
    } else {
      resolver.resolve(PENALTY_SCORED);
    }
  });

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
      takePen({ shot: TOPCORNER });
      expect(reject).toHaveBeenCalledTimes(0);
      expect(success).toHaveBeenCalledTimes(1);
    });

    it("take 'poor' penalty", () => {
      const takePen = penalty(reject, success);
      takePen({ shot: MISSING });
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
      return penaltyTask({ shot: TOPCORNER })
        .run()
        .promise()
        .then(r => {
          expect(r).toEqual(PENALTY_SCORED);
        });
    });

    it("task | take 'good' penalty", () => {
      return penaltyTask({ shot: MISSING })
        .run()
        .promise()
        .then(success)
        .catch(e => expect(e).toEqual(PENALTY_MISSED));
    });
  });
});
