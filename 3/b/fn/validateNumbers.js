const validateNumber = require('./validateNumber.js');
const concat = require('../../../utils/concat.js');

function validateNumbers(numberSpecs, inputArr) {
	return numberSpecs
		.map(numberSpec => validateNumber(numberSpec, inputArr))
		.reduce(concat, [])
		.reduce((acc, numberSpec) => {
			const gearPositionKey = `${numberSpec.gearPosition.rowIndex}-${numberSpec.gearPosition.columnIndex}`;

			if (!acc[gearPositionKey]) {
				acc[gearPositionKey] = []
			}

			acc[gearPositionKey].push(numberSpec);

			return acc;
		}, {});
}

module.exports = validateNumbers;