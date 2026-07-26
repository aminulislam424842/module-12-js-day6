let balance = 5000;

function deposit(amount) {
  balance += amount;
  return `Deposit Successful. Current Balance: ${balance}`;
}

function withdraw(amount) {
  if (amount > balance) {
    return "Insufficient Balance";
  }

  balance -= amount;
  return `Withdraw Successful. Current Balance: ${balance}`;
}

console.log(deposit(1000));     
console.log(withdraw(2000));    
console.log(withdraw(5000));   
console.log(withdraw(3000));   