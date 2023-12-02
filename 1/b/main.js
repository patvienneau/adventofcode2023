const fs = require('fs');
const textBlockSum = require('../a/fn/textBlockSum.js');

const input = fs.readFileSync('./input.txt', 'utf-8');
const dictionary = JSON.parse(fs.readFileSync('./dictionary.json', 'utf8'));

const parsedInput = input
	.split('\n')
	.map(str => {
		let numerizedString = str;

		for(let ii = 0; ii < numerizedString.length; ii++) {
			for(const numberWord in dictionary) {
				const regexp = new RegExp(`^(.{${ii}})(${numberWord})(.*)`, 'gi')

				numerizedString = numerizedString.replace(
					regexp,
					(_match, p1, p2, p3) => {
						const number = dictionary[p2];

						const p2_mod = p2.substring(1);

						return `${p1}${number}${p2_mod}${p3}`;
					}
				);
			}
		}

		return numerizedString;
	})
	.join('\n');

const sum = textBlockSum(parsedInput);
console.log(sum);