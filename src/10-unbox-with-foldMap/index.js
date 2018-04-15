const Sum = x => ({
  val: x,
  concat: ({ val: y }) => Sum(x + y),
  inspect: () => `Sum(${x})`
});

Sum.empty = () => Sum(0);

export { Sum };


