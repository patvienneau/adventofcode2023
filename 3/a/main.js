const fs = require('fs');
const parseInput = require('./fn/parseInput.js');
const parseNumbers = require('./fn/parseNumbers.js');
const validateNumbers = require('./fn/validateNumbers.js');
const parseInt = require('../../utils/parseInt');
const sum = require('../../utils/sum');

const input = fs.readFileSync('./input.txt', 'utf-8');

const inputArr = parseInput(input);
const numberSpecs = parseNumbers(input);
const validatedNumberSpecs = validateNumbers(numberSpecs, inputArr);

const result = validatedNumberSpecs
	.map(numberSpec => numberSpec.value)
	.map(parseInt)
	.reduce(sum, 0);

console.warn(result);