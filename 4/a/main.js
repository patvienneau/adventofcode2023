const fs = require('fs');
const parseInt = require('../../utils/parseInt');
const sum = require('../../utils/sum');

const input = fs.readFileSync('./input.txt', 'utf-8');

const result = input
	.split('\n')
	.map(card => card
		.split(':')
		.at(1)
		.split('|')
		.map(numbers =>
			numbers
				.split(' ')
				.filter(Boolean)
				.map(parseInt)
		)
	)
	.map(card => ({
		winningNumbers: card[0],
		selectedNumbers: card[1],
	}))
	.map(card => card
		.selectedNumbers
		.reduce((matchCount, selectedNumber) => {
			if (card.winningNumbers.includes(selectedNumber)) {
				matchCount += 1;
			}

			return matchCount;
		}, 0)
	)
	.filter(matchCount => matchCount > 0)
	.map(matchCount => matchCount -1 )
	.map(matchCount => Math.pow(2, matchCount))
	.reduce(sum, 0)

console.warn(result);