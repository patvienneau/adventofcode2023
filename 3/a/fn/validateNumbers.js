const validateNumber = require('./validateNumber.js');

function validateNumbers(numberSpecs, inputArr) {
	return numberSpecs
		.map(numberSpec => validateNumber(numberSpec, inputArr))
		.filter(numberSpec => numberSpec.result);
}

module.exports = validateNumbers;