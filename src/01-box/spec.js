import incrementAndReturnCharacter from './';

describe('boxing', () => {
  it('increments a keyccode and outputs its character', () => {
    const keycode = 40;
    expect(incrementAndReturnCharacter(keycode)).toBe(keycode);
  });
});
