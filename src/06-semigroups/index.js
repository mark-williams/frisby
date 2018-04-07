const sum = x => ({
  val: x,
  concat: ({ val: y }) => sum(x + y)
});

export default sum;
