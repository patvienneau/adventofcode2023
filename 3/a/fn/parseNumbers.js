const parseNumber = require('./parseNumber.js');
const parseInput = require('./parseInput.js');
const concat = require('../../../utils/concat.js');

function parseNumbers(input) {
	return parseInput(input)
		.map((inputArrayItem, rowIndex) => {
			const matches = inputArrayItem.matchAll(/\d+/g);

			const numberSpecs = [];

			for(const match of matches) {
				const keyword = match[0];
				const columnIndex = match.index;

				numberSpecs.push(parseNumber(keyword, columnIndex, rowIndex));
			}

			return numberSpecs;
		}).reduce(concat, [])
}

module.exports = parseNumbers;