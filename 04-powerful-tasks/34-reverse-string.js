function reverseString(message) {

  let newMessage ="";

  for (let i = message.length - 1; i >= 0; i--) {
    newMessage += message[i];
  }

  return newMessage;

}

let message = "Aminul Islam";
let result = reverseString(message);
console.log(result);