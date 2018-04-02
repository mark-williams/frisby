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
    .map(
      c => tryCatch(() => JSON.parse(c))
        .fold(() => 'CANNOT PARSE', j => j.version))
    .fold(() => 'ERROR', x => x);
};

export default getVersion;
