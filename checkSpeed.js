const prompt = require("prompt-sync")();

let speed= prompt("Enter your speed?");

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerDemeritPoint = 5;

  if (speed <= speedLimit) {
    console.log("Ok");
  } else {
    const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);

    if (demeritPoints > 12) {
      return"License suspended";
    } else {
      console.log(`Points: ${demeritPoints}`);
    }
  }
}

console.log(checkSpeed(speed));