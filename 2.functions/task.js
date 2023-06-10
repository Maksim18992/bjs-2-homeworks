"use strict"

function getArrayParams(...arr) {
  if (!arr.length > 0) { 
    return 0; 
  }
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let total = arr.reduce((a, b) => (a + b));
  let avg = Number((total / [...arr].length).toFixed(2)); 
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (!arr.length > 0) { 
    return 0; 
  }

  let max = Math.max(...arr);
  let min = Math.min(...arr);
  
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 == 0){
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (!arr.length > 0) { 
    return 0; 
  }

  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 == 0){
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }
  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    let maximum = func(...arrOfArr[i]);
    if(maxWorkerResult < maximum) {
      maxWorkerResult = maximum;
    }
  }
  return maxWorkerResult;
}
