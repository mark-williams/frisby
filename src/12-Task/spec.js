const PENALTY_SCORED = 'Scores!!!';

/* eslint no-console: off */
const takePenalty = (rej, res) => {
  console.log('Shoots...');
  res(PENALTY_SCORED);
};

describe('Task (from folktale', () => {
  it('calls success', () => {
    const success = jest.fn();
    takePenalty(() => {}, success);
    expect(success).toBeCalledWith(PENALTY_SCORED);
  });
});
