function palindromeCheck(message) {
  let copyMessage = message;
  let message2 = copyMessage.split("").reverse().join("");

  if (message === message2) {
    return "Palindrome";
  }
  else {
    return "Not Palindrome";
  }

}
let message = "madam";
console.log(palindromeCheck(message));