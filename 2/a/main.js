const fs = require('fs');
const parseGames = require('./fn/parseGames.js');
const validateGames = require('./fn/validateGames.js');
const isTruthy = require('../../utils/isTruthy.js');

const input = fs.readFileSync('./input.txt', 'utf-8');
const limits = JSON.parse(fs.readFileSync('./limits.json', 'utf-8'));

const games = parseGames(input);
const gameResults = validateGames(games, limits);

const result = gameResults.reduce((sum, results, gameIndex) => {
	const gameId = gameIndex + 1;

	if (isTruthy(results)) {
		sum += gameId;
	}

	return sum;
}, 0);

console.warn(result);