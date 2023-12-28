const fs = require('node:fs');

let codes = readFile("Day1/calibration-input.txt");
let nums = getNums(codes);
let sum = nums.reduce((partialSum, a) => partialSum + a, 0);
console.log("SUM: " + sum);

function readFile(file) {
  const data = fs.readFileSync(file).toString();
  let lines = data.split("\n");

  return lines;
}

function firstDigit(data){
  let res = data.match(/\D*(\d).*/i);
  return res;
}

function lastDigit(data){
  let res = data.match(/.*(\d)\D*$/i);
  return res;

}

function parseCode(code){
  let first = firstDigit(code)[1];
  let last = lastDigit(code)[1];

  let num = parseInt(first.concat(last));

  return num;

}

function getNums(codes){
  let nums = [];

  codes.forEach(element => {
    nums.push(parseCode(element));
  });

  return nums;

}