const fs = require('fs');
const textBlockSum = require('./fn/textBlockSum.js');
const input = fs.readFileSync('./input.txt', 'utf-8');

const sum = textBlockSum(input);
console.log(sum);



