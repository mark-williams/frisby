const sum = x => ({
  val: x,
  concat: ({ val: y }) => sum(x + y)
});

const all = x => ({
  val: x,
  concat: ({ val: y }) => all(x && y)
});

export { sum, all };
