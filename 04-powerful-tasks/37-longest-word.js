function longestWord(word) {
  let longestWord = "" ;
  let sentence = word.split(" ");
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i].length > longestWord.length) {
      longestWord = sentence[i];
    }
  }
  return longestWord;
}
let word = "I am javascript programming";
console.log(longestWord(word));