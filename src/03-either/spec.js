import getColourFromName from './';

describe('03-either', () => {
  it('returns hex code for colour name red', () => {
    const code = getColourFromName('red');
    expect(code).toBe('FF0000');
  });

  it('returns NOT FOUND for unrecognised colour', () => {
    const code = getColourFromName('BADCOLOUR');
    expect(code).toBe('NOT FOUND');
  });
});
