const Sum = x => ({
  val: x,
  concat: ({ val: y }) => Sum(x + y),
  inspect: () => `Sum(${x})`
});

Sum.empty = () => Sum(0);

const All = x => ({
  val: x,
  concat: ({ val: y }) => All(x && y),
  inspect: () => `All(${x})`
});
All.empty = () => All(true);

const First = x => ({
  val: x,
  concat: () => First(x),
  inspect: () => `Sum(${x})`
});

export { Sum, All, First };
