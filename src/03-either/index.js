const right = x => ({
  map: f => right(f(x)),
  fold: (f, g) => g(x)
});

const left = x => ({
  map: () => left(x),
  fold: (f, g) => f(x)
});

const colours = {
  'red': '#ff0000',
  'green': '#00ff00',
  'blue': '#0000ff'
};

const findColour = name => {
  const code = colours[name];
  return code ? right(code) : left(null);
};

const getColourFromName = name => {
  return findColour(name)
    .map(c => c.slice(1))
    .fold(() => 'NOT FOUND', x => x.toUpperCase());
};

export default getColourFromName;
