const sum = x => ({
  val: x,
  concat: y => sum(x + y.val)
});

export default sum;
