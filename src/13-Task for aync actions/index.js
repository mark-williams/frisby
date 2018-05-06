// getData is just a simple function using callbacks. Prof Frisby used
// fs.readFile in his course, but I wanted to use one without side effects.
// All this does is return some data and provides a way to trigger an error.
const getData = (path, cb) => {
  setTimeout(() => {
    if (path) {
      cb(null, `Some data (from ${path})`);
    } else {
      cb('Where am I meant to get the data from?', null);
    }
  }, 1000);
};

export { getData };
