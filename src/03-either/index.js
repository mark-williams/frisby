const colours = {
  'red': '#ff0000',
  'green': '#00ff00',
  'blue': '#0000ff'
};

const getColourFromName = name => {
  return colours[name].slice(1).toUpperCase();
};

export default getColourFromName;
