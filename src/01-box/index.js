const incrementAndReturnCharacter = stringcode => {
  // const keycode = stringcode.trim();
  // const code = parseInt(keycode, 10);
  // const incrementedCode = code + 1;

  // return String.fromCharCode(incrementedCode);
  const result = [stringcode]
    .map(s => s.trim())
    .map(s => parseInt(s, 10))
    .map(i => i + 1)
    .map(k => String.fromCharCode(k));

  return result[0];
};

export default incrementAndReturnCharacter;
