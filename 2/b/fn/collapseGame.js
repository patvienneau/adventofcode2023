function collapseGame(gameSets = [], limit) {
	return gameSets
		.reduce((maxGameSet, gameSet) => {
			for (const color in gameSet) {
				if (!maxGameSet[color] || maxGameSet[color] < gameSet[color]) {
					maxGameSet[color] = gameSet[color];
				}
			}

			return maxGameSet;
		}, {})
}

module.exports = collapseGame