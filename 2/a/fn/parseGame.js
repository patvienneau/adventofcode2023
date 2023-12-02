const parseGameSets = require('./parseGameSets.js');

function parseGame(gameInput) {
	const [gameStatInput, gameSetsInput] = gameInput.split(':');

	const _gameStatId = gameStatInput.split(' ')[1];
	const gameSet = parseGameSets(gameSetsInput)

	return gameSet;
}

module.exports = parseGame