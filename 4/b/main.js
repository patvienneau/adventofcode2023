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
	.map(card => {
		const matches = card
		.selectedNumbers
		.reduce((matchCount, selectedNumber) => {
			if (card.winningNumbers.includes(selectedNumber)) {
				matchCount += 1;
			}

			return matchCount;
		}, 0);

		return {
			...card,
			matches,
			count: 1,
		};
	})
	.map((card, index, cardsArr) => {
		let matches = card.matches || 0;

		while (matches > 0) {
			const cardMultiplied = cardsArr[index + matches];

			cardMultiplied.count += card.count;

			matches--;
		}

		return card;
	})
	.map(card => card.count)
	.reduce(sum, 0);

console.warn(result);