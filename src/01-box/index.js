const incrementAndReturnCharacter = stringcode => {
  const keycode = stringcode.trim();
  const code = parseInt(keycode, 10);
  const incrementedCode = code + 1;

  return String.fromCharCode(incrementedCode);
};

export default incrementAndReturnCharacter;
