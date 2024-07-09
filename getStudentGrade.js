const prompt = require('prompt-sync')();

let marks = prompt("Enter your grade?");

function getStudentGrade(marks) {
  if (marks < 0 || marks > 100) {
    return "Marks should be between 0 and 100";
  }

  if (marks > 79) {
    return "A";
  } else if (marks >= 60) {
    return "B";
  } else if (marks >= 50) {
    return "C";
  } else if (marks >= 40) {
    return "D";
  } else {
    return "E";
  }
}

console.log(getStudentGrade(marks));
