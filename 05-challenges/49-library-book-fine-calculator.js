// way-01
function libraryFineCalculator (days,fine) {
  return days*fine;
}
console.log(libraryFineCalculator(43,60));



// Way-02
function fineCalculator (days,fine) {
  if (days<=0) {
    return "No Fine";
  }
  else if (fine < 0) {
    return "Invalid Fine Amount";
  }
  else{
    return days*fine;
  }
}
console.log(fineCalculator(43,60));