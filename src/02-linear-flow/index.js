const box = x => {
  return {
    map: f => box(f(x)),
    unbox: f => f(x)
  };
};

const moneyToFloat = m => (parseFloat(m.replace(/\£/g, '')));
const discountToFloat = d => parseFloat(d.replace(/\%/g, ''));

const applyDiscount = (amount, discount) => {
  const total = moneyToFloat(amount);
  const disc = discountToFloat(discount);
  return total - (total * (disc / 100));
};

export default applyDiscount;

