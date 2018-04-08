const Right = x => ({
  map: f => Right(f(x)),
  fold: (f, g) => g(x)
});

const Left = x => ({
  map: () => Left(x),
  fold: (f) => f(x)
});

const colours = {
  'red': '#ff0000',
  'green': '#00ff00',
  'blue': '#0000ff'
};

const fromNullable = x => (
  x ? Right(x) : Left(null)
);

const findColour = name => {
  return fromNullable(colours[name]);
};

const getColourFromName = name => {
  return findColour(name)
    .map(c => c.slice(1))
    .fold(
      () => 'NOT FOUND',
      x => x.toUpperCase()
    );
};

export default getColourFromName;
