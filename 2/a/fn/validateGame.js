const validateSet = require('./validateSet.js');
const isTruthy = require('../../../utils/isTruthy.js');


function validateGame(gameSets = [], limit) {
	return gameSets
		.map(gameSet => validateSet(gameSet, limit))
		.every(isTruthy)
}

module.exports = validateGame;