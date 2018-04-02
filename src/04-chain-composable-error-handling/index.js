import fs from 'fs';

const right = x => ({
  map: f => right(f(x)),
  fold: (f, g) => g(x)
});

const left = x => ({
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
    .map(c => JSON.parse(c))
    .fold(
      () => 'ERROR',
      p => p.version
    );
};

export default getVersion;
