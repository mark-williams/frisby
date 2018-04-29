import { task } from 'folktale/concurrency/task';

const TOPCORNER = 'topcorner';
const MISSING = 'missing';
const PENALTY_SCORED = 'Scores!!!';
// const PENALTY_SAVED = 'Saved!!!';

/* eslint no-console: off */
const penalty = (rej, res) => attempt => {
  if (attempt.shot === MISSING) {
    rej('Missed');
  } else {
    res(PENALTY_SCORED);
  }
};

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
      expect(reject).toHaveBeenCalledTimes(1);
      expect(success).toHaveBeenCalledTimes(0);
    });
  });

  describe('task implementation', () => {});
});
