const box = x => {
  return {
    map: f => box(f(x)),
    inspect: () => `Box(${x})`,
    unbox: f => f(x)
  };
};

const moneyToFloat = m => {
  return box(m)
    .map(s => s.replace(/\£/g, ''))
    .map(s => parseFloat(s));
};

const discountToFloat = d => {
  return box(d)
    .map(s => s.replace(/\%/g, ''))
    .map(s => parseFloat(s))
    .unbox(f => f * 0.01);
};

const applyDiscount = (amount, discount) => {
  return moneyToFloat(amount)
    .map(a => a - (a * discountToFloat(discount)))
    .unbox(x => x);
};

export default applyDiscount;

