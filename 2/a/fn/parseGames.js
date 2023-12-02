const parseGame = require('./parseGame.js');

function parseGames(input) {
	return input
		.split('\n')
		.map(parseGame)
}

module.exports = parseGames;