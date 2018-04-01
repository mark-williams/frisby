const box = x => {
  return {
    map: f => box(f(x)),
    inspect: () => `Box(${x})`,
    fold: f => f(x)
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
    .map(f => f * 0.01);
};

const applyDiscount = (amount, discount) => (
  moneyToFloat(amount)
    .fold(total => (
      discountToFloat(discount)
        .fold(d => total - (total * d))
    ))
);


export default applyDiscount;

