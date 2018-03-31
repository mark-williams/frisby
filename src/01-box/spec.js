import incrementAndReturnCharacter from './';

describe('boxing', () => {
  it('increments a keycode passed as a string and outputs its character', () => {
    const keycode = '100';
    expect(incrementAndReturnCharacter(keycode)).toBe('e');
  });

  it('ignores whitespace around keycode passed in', () => {
    const keycode = '   100    ';
    expect(incrementAndReturnCharacter(keycode)).toBe('e');
  });
});
