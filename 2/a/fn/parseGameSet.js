function parseGameSet(gameSetInput) {
	return gameSetInput
		.split(',')
		.map(inputString => inputString.trim(' '))
		.reduce((gameSetMap, colorInput) => {
			const [count, color] = colorInput.split(' ');

			gameSetMap[color] = parseInt(count);

			return gameSetMap;
		}, {});
}

module.exports = parseGameSet;