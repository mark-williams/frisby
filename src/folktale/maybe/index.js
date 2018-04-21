import Maybe from 'folktale/maybe';

const findInArray = (arr, predicate) => {
  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i])) {
      return arr[i];
    }
  }
  return null;
};

const maybeFindInArray = (arr, predicate) => {
  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i])) {
      //return new Date();
      return Maybe.Just(arr[i]);
    }
  }
  return Maybe.Nothing();
};

export { maybeFindInArray };
export default findInArray;
