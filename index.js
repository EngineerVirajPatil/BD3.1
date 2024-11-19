const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

let numbers = [1, 2, 3, 10, 101, 4, 5];

let strings = ['hello', 'world', 'javascript', 'node'];

function addToArray(numbers, num) {
  numbers.push(num);
  return numbers;
}

function addToString(strings, str) {
  strings.push(str);
  return strings;
}

function sumofNumbersInArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  return sum;
}

function findMax(numbers) {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

// /numbers/add
app.get('/numbers/add', (req, res) => {
  let result = addToArray(numbers, 6);
  res.json(result);
});

// '/strings/add'
app.get('/strings/add', (req, res) => {
  let stringsCopy = strings.slice();
  let result = addToString(stringsCopy, 'express');
  res.json(result);
});

// /numbers/sum
app.get('/numbers/sum', (req, res) => {
  let result = sumofNumbersInArray(numbers);
  res.json({ sum: result });
});

app.get('/numbers/max', (req, res) => {
  let result = findMax(numbers);
  res.json({ max: result });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
