//import { task } from 'folktale/concurrency/task';

const TOPCORNER = 'topcorner';
const MISSING = 'missing';
const PENALTY_SCORED = 'Scores!!!';
// const PENALTY_SAVED = 'Saved!!!';

/* eslint no-console: off */
const penalty = attempt => (rej, res) => {
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

  it("take 'good' penalty", () => {
    const takePen = penalty({ shot: TOPCORNER });
    takePen(reject, success);
    expect(reject).toHaveBeenCalledTimes(0);
    expect(success).toHaveBeenCalledTimes(1);
  });

  it("take 'poor' penalty", () => {
    const takePen = penalty({ shot: MISSING });
    takePen(reject, success);
    expect(reject).toHaveBeenCalledTimes(1);
    expect(success).toHaveBeenCalledTimes(0);
  });
});
