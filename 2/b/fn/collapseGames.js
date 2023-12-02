const collapseGame = require('./collapseGame.js');

function collapseGames(games) {
	return games
		.map(game => collapseGame(game));
}

module.exports = collapseGames;