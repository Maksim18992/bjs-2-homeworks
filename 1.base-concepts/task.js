"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2 - 4 * a * c;
  if (d < 0) {
    arr = [];
  } else if (d === 0 ) {
    arr = [-b / (2 * a)];
  } else {
    arr = [(-b + Math.sqrt(d) ) / (2 * a), (-b - Math.sqrt(d) ) / (2 * a)];
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (!isNaN(percent) && !isNaN(contribution) && !isNaN(amount)) {
    let percentMonth = percent/100/12;
    let amountReturn = amount - contribution;
    let monthlyPayment = amountReturn * (percentMonth + (percentMonth / (((1 + percentMonth)**countMonths) - 1)));
    let totalSum = parseFloat((monthlyPayment * countMonths).toFixed(2));
    return totalSum;
  }
  return false;
}