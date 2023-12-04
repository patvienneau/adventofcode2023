function parseNumber(value, columnIndex = 0, rowIndex = 0) {
	return {
		value,
		columnIndex,
		rowIndex,
		length: value.length,
	}
}

module.exports = parseNumber;