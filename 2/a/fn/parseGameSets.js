const parseGameSet = require('./parseGameSet');

function parseGameSets(gameSetsInput) {
	return gameSetsInput
		.split(';')
		.map(parseGameSet)
}

module.exports = parseGameSets