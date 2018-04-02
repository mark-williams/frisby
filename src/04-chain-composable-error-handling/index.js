import fs from 'fs';

const right = x => ({
  chain: f => f(x),
  map: f => right(f(x)),
  fold: (f, g) => g(x)
});

const left = x => ({
  chain: () => left(x),
  map: () => left(x),
  fold: (f) => f(x)
});

const tryCatch = f => {
  try {
    return right(f());
  } catch (e) {
    return left(e);
  }
};

const getVersion = fileName => {
  return tryCatch(() => fs.readFileSync(fileName))
    .chain(c => tryCatch(() => JSON.parse(c)))
    .fold(err => `ERROR [${err}]`, x => x.version);
};

export default getVersion;
