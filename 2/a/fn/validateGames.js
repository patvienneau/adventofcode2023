const validateGame = require('./validateGame.js');

function validateGames(games, limit) {
	return games
		.map(game => validateGame(game, limit));
}

module.exports = validateGames;