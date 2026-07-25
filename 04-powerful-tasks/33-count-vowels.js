function countVowels(message) {

  let count = 0;
  message =message.toLowerCase();
  
  for (let vowels of message) {
    if (vowels === "a" || vowels === "e" || vowels === "i" || vowels === "o" || vowels === "u") {
      count++;
    }
  }
  return count;

}

let message = "A paragraph is a distinct section of writing focused on a single main idea, typically containing a topic sentence, supporting details, and a concluding sentence. ";

let result = (countVowels(message));
console.log(result);