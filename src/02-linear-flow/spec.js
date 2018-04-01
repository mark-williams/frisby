import applyDiscount from './';

describe('02 -linear flow', () => {
  it('should apply the percentage discount to the amount provided', () => {
    const result = applyDiscount('100', '10');
    expect(result).toEqual(90);
  });
  it('should accept amount as string with currency symbol', () => {
    const result = applyDiscount('£100', '10');
    expect(result).toEqual(90);
  });
  it('should accept amount as string with % symbol', () => {
    const result = applyDiscount('£100', '10%');
    expect(result).toEqual(90);
  });
});
