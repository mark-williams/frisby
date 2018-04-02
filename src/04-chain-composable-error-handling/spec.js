import getVersion from './';

describe('04-chain with nested eithers', () => {
  it('reads version from package file', () => {
    const version = getVersion();
    expect(version).toEqual('1.0.0');
  });
});
