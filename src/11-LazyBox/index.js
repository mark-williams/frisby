const Box = x => ({
  map: f => Box(f(x)),
  fold: f => f(x)
});

const LazyBox = g => ({
  map: f => LazyBox(() => f(g())),
  fold: f => f(g())
});

export { Box, LazyBox };
