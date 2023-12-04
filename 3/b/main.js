const fs = require('fs');
const parseInput = require('../a/fn/parseInput.js');
const parseNumbers = require('../a/fn/parseNumbers.js');
const validateNumbers = require('./fn/validateNumbers.js');
const multiply = require('../../utils/multiply');
const parseInt = require('../../utils/parseInt');
const sum = require('../../utils/sum');

const input = fs.readFileSync('./input.txt', 'utf-8');

const inputArr = parseInput(input);
const numberSpecs = parseNumbers(input);
const gearRatios = validateNumbers(numberSpecs, inputArr);

const results = Object
	.values(gearRatios)
	.filter(gearRatio => gearRatio.length >= 2)
	.map(gearRatios => gearRatios
		.map(gearRatio => gearRatio.value)
		.map(parseInt)
		.reduce(multiply, 1)
	)
	.reduce(sum, 0);

console.warn(results);