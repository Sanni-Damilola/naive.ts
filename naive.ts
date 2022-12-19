//  Native Search
const NativeSearch = (word: string, value: string): number => {
  let store = 0;
  word = word.toLowerCase();
  value = value.toLowerCase();
  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < value.length; j++) {
      // console.log(word[i], value[j]);
      // console.log(i, j);

      if (value[j] !== word[i + j]) {
        break;
      } else if (j === value.length - 1) {
        store++;
      }
    }
  }

  return store;
};

console.log(
  NativeSearch(
    "you can be what you want to be, if you believe just trust the PROCESS",
    "you believe"
  )
);
