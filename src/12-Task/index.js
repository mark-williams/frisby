import { task } from 'folktale/concurrency/task';

const constants = {
  topcorner: 'topcorner',
  missing: 'missing',
  penalty_scored: 'Scores!!!',
  penalty_missed: 'Saved!!!',
  retake: 'Retake'
};

const penalty = (rej, res) => attempt => {
  switch (attempt.shot) {
    case constants.missing:
      res(constants.penalty_missed);
      break;
    case constants.topcorner:
      res(constants.penalty_scored);
      break;

    default:
      rej(constants.retake);
  }
};

const penaltyTask = attempt =>
  task(resolver => {
    switch (attempt.shot) {
      case constants.missing:
        resolver.resolve(constants.penalty_missed);
        break;
      case constants.topcorner:
        resolver.resolve(constants.penalty_scored);
        break;

      default:
        resolver.reject(constants.retake);
    }
  });

export { penalty, penaltyTask, constants };
