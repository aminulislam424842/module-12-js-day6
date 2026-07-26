function cricketScoreSummary(runs, balls, wickets) {

  let strikeRate = {};

  if (balls === 0) {
    strikeRate = 0;
  }
  else {
    strikeRate = Number(((runs / balls) * 100).toFixed(2));
  }

  let variable = {
    Runs: runs,
    Balls: balls,
    Wickets: wickets,
    StrikeRate: strikeRate
  };

  return variable;

}

console.log(cricketScoreSummary(41, 34, 2));