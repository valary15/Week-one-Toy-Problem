const prompt = require("prompt-sync")();

let salary = prompt("Enter your Salary?");

function calculatePAYE(grossPay) {
  let taxToDeduct = 0;

  if (grossPay <= 24000) {
    taxToDeduct = grossPay * 0.1;
  } else if (grossPay <= 32333) {
    taxToDeduct = grossPay * 0.25;
  } else if (grossPay <= 500000) {
    taxToDeduct = grossPay * 0.3;
  } else if (grossPay <= 800000) {
    taxToDeduct = grossPay * 0.325;
  } else {
    taxToDeduct = grossPay * 0.35;
  }

  return taxToDeduct;
}

function calculateNHIF(grossPay) {
  if (grossPay <= 5999) {
    return 150;
  } else if (grossPay <= 7999) {
    return 300;
  } else if (grossPay <= 11999) {
    return 400;
  } else if (grossPay <= 14999) {
    return 500;
  } else if (grossPay <= 19999) {
    return 600;
  } else if (grossPay <= 24999) {
    return 750;
  } else if (grossPay <= 29999) {
    return 850;
  } else if (grossPay <= 34999) {
    return 900;
  } else if (grossPay <= 39999) {
    return 950;
  } else if (grossPay <= 44999) {
    return 1000;
  } else if (grossPay <= 49999) {
    return 1100;
  } else if (grossPay <= 59999) {
    return 1200;
  } else if (grossPay <= 69999) {
    return 1300;
  } else if (grossPay <= 79999) {
    return 1400;
  } else if (grossPay <= 89999) {
    return 1500;
  } else if (grossPay <= 99999) {
    return 1600;
  } else {
    return 1700;
  }
}

function calculateNSSF(grossPay) {
  let nssfDeduction = grossPay * 0.06;

  if (nssfDeduction > 7000) {
    nssfDeduction = 7000;
  }

  return nssfDeduction;
}

function calculateNetSalary(salary) {
  const payeDeduction = calculatePAYE(salary);
  const nhifDeduction = calculateNHIF(salary);
  const nssfDeduction = calculateNSSF(salary);

  const totalDeductions = payeDeduction + nhifDeduction + nssfDeduction;
  const netIncome = salary - totalDeductions;

  return netIncome;
}

console.log(calculateNetSalary(salary));
