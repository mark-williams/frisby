const Box = x => {
  return {
    map: f => Box(f(x)),
    fold: f => f(x)
  };
};

const incrementAndReturnCharacter = stringcode => {
  return Box(stringcode)
    .map(s => s.trim())
    .map(s => parseInt(s, 10))
    .map(i => i + 1)
    .map(k => String.fromCharCode(k))
    .fold(x => x);
};

export default incrementAndReturnCharacter;
