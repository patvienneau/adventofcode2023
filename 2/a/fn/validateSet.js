function validateSet(gameSet = {}, limit) {
	let result = true;
	
	for(const color in limit) {
		if (gameSet[color] > limit[color]) {
			result = false;
		}
	}

	return result;
}

module.exports = validateSet;