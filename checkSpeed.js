function checkSPeed(speed) {
  if (speed <= 70) {
    console.log("OK");
  } else {
    const points = (speed - 70) / 5;

    if (points > 12) {
      console.log("License suspended");
    } else {
      console.log("Points ", points);
    }
  }
}

checkSPeed(80);
