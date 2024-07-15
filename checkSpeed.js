const prompt = require("prompt-sync")();

let speed;
do {
  speed = prompt("Enter your speed? ");
  speed = parseFloat(speed); // convert input to a float
  if (isNaN(speed)) {
    console.log("Please enter a valid number.");
  }
} while (isNaN(speed));
function checkSpeed(speed) {

  const speedLimit = 70;
  const kmPerDemeritPoint = 5;

  if (speed <= speedLimit) {
    return "Ok";
  } else {
    const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);

    if (demeritPoints > 12) {
      return "License suspended";
    } else {
      return `Points: ${demeritPoints}`;
    }
  }
}

console.log(checkSpeed(speed));
