const fs = require('node:fs');

let codes = readFile("Day1/calibration-input.txt");

//Part 1
getCalibrationSum(codes);

//Part 2
let wordsReplaced = replaceAllCodes(codes);
getCalibrationSum(wordsReplaced);


function getCalibrationSum(codes){
  let newNums = getNums(codes);
  let newSum = newNums.reduce((partialSum, a) => partialSum + a, 0);
  console.log("SUM: " + newSum);
}


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

function replaceAllCodes(codes){
  let newCodes = [];

  codes.forEach(element => {
    newCodes.push(replaceWithDigits(element));
  });

  return newCodes;

}

function replaceWithDigits(code){
  let wordsToNum = [{word: "one", replacement: "one1one"}, {word: "two", replacement: "two2two"}, {word: "three", replacement: "three3three"}, {word: "four", replacement: "four4four"},
                    {word: "five", replacement: "five5five"}, {word: "six", replacement: "six6six"}, {word: "seven", replacement: "seven7seven"}, {word: "eight", replacement: "eight8eight"},
                    {word: "nine", replacement: "nine9nine"}];
  let newCode = code;

  wordsToNum.forEach(element => {
    newCode = newCode.replaceAll(element.word, element.replacement);
  });

  return newCode;

}