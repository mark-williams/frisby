import getVersion from './';

describe('04-chain with nested eithers', () => {
  it('reads version from package file', () => {
    const version = getVersion('package.json');
    expect(version).toEqual('1.0.0');
  });

  it('returns "ERROR" if file does not exist', () => {
    const version = getVersion('____package.json');
    expect(version).toContain('no such file');
  });

  it('returns \'BAD ITEM\' if file isn\'t in JSON format', () => {
    const version = getVersion('.gitignore');
    expect(version).toContain('SyntaxError');
  });
});
