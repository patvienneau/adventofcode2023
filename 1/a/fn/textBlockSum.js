const isNumeric = require('../../../utils/isNumeric.js');

function textBlockSum(input) {
	return input
    .split('\n')
    .map(str => {
        const numberStrings = str
            .split('')
            .filter(isNumeric)

		return numberStrings;
    })
	.map(numericStr => {
		const firstNumberStr = numericStr[0];
        const lastNumberStr = numericStr[numericStr.length - 1];
        
        return `${firstNumberStr}${lastNumberStr}`;
	})
    .map(val => parseInt(val))
    .reduce((sum, val = 0) => {
        return sum + val
    }, 0);
}

module.exports = textBlockSum;