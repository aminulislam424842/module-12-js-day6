function wordFrequency(sentence1, sentence2) {
  let frequency = {};

  let words = (sentence1 + " " + sentence2).split(" ");

  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    if (frequency[word]) {
      frequency[word]++;
    } else {
      frequency[word] = 1;
    }
  }

  return frequency;
}

let sentence1 = "I love JavaScript";
let sentence2 = "I love Coding";

let result = wordFrequency(sentence1, sentence2);

console.log(result);