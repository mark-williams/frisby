const findInArray = (arr, predicate) => {
  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i])) {
      return arr[i];
    }
  }
  return null;
};

export default findInArray;
