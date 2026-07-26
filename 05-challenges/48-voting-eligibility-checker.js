function votingEligibilityChecker(age, hasID) {
  if (age >= 18) {
    if (hasID) {
      return "Eligible to Vote";
    }
    else {
      return "Valid ID required.";
    }
  }
  else {
    return "You aren't old enough to vote yet.";
  }
}
console.log(votingEligibilityChecker(20, true));
console.log(votingEligibilityChecker(43, false));
console.log(votingEligibilityChecker(17, true));