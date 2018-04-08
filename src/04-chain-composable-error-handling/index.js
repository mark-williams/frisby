import fs from 'fs';

const Right = x => ({
  chain: f => f(x),
  map: f => Right(f(x)),
  fold: (f, g) => g(x)
});

const Left = x => ({
  chain: () => Left(x),
  map: () => Left(x),
  fold: (f) => f(x)
});

const tryCatch = f => {
  try {
    return Right(f());
  } catch (e) {
    return Left(e);
  }
};

const getVersion = fileName => {
  return tryCatch(() => fs.readFileSync(fileName))
    .chain(c => tryCatch(() => JSON.parse(c)))
    .fold(err => `ERROR [${err}]`, x => x.version);
};

export default getVersion;
