const Sum = x => ({
  val: x,
  concat: ({ val: y }) => Sum(x + y),
  inspect: () => `Sum(${x})`
});

const All = x => ({
  val: x,
  concat: ({ val: y }) => All(x && y),
  inspect: () => `All(${x})`
});

const First = x => ({
  val: x,
  concat: () => First(x),
  inspect: () => `First(${x})`
});

export { Sum, All, First };
