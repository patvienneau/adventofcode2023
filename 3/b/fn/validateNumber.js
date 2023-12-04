const specialCharacterRegexp = new RegExp('[\*]', 'g');

function validateNumber(numberSpec, inputArr) {
	const minRowIndex = 0;
	const maxRowIndex = inputArr.length - 1;
	const minColumnIndex = 0;
	const maxColumnIndex = inputArr[0].length - 1;

	const {
		columnIndex,
		rowIndex,
		length,
	} = numberSpec;

	let gearPositions = [];

	// Check row above
	if (rowIndex - 1 >= minRowIndex) {
		const minBoundIndex = Math.max(columnIndex - 1, minColumnIndex);
		const maxBoundIndex = Math.min(columnIndex + length + 1, maxColumnIndex);

		const aboveStrSlice = inputArr[rowIndex - 1].substring(minBoundIndex, maxBoundIndex);

		const matches = aboveStrSlice.matchAll(specialCharacterRegexp);

		for(const match of matches) {
			const matchColumnIndex = match.index;
		
			gearPositions.push({
				columnIndex: minBoundIndex + matchColumnIndex,
				rowIndex: rowIndex - 1,
			})
		}
	}

	// Check same row (ends)
	if (columnIndex - 1 >= minColumnIndex) {
		const leftStrSlice = inputArr[rowIndex].substring(columnIndex - 1, columnIndex);

		const matches = leftStrSlice.matchAll(specialCharacterRegexp);

		for(const match of matches) {
			gearPositions.push({
				columnIndex: columnIndex - 1,
				rowIndex: rowIndex,
			})
		}
	}

	if (columnIndex + length + 1 <= maxColumnIndex) {
		const rightStrSlice = inputArr[rowIndex].substring(columnIndex + length, columnIndex + length + 1);

		const matches = rightStrSlice.matchAll(specialCharacterRegexp);

		for(const match of matches) {
			gearPositions.push({
				columnIndex: columnIndex + length,
				rowIndex: rowIndex,
			})
		}
	}

	// Check row below
	if (rowIndex + 1 <= maxRowIndex) {
		const minBoundIndex = Math.max(columnIndex - 1, minColumnIndex);
		const maxBoundIndex = Math.min(columnIndex + length + 1, maxColumnIndex);

		const belowStrSlice = inputArr[rowIndex + 1].substring(minBoundIndex, maxBoundIndex);

		const matches = belowStrSlice.matchAll(specialCharacterRegexp);

		for(const match of matches) {
			const matchColumnIndex = match.index;
		
			gearPositions.push({
				columnIndex: minBoundIndex + matchColumnIndex,
				rowIndex: rowIndex + 1,
			})
		}
	}

	return gearPositions.map(gearPosition => ({
		...numberSpec,
		gearPosition,
	}))
}

module.exports = validateNumber;