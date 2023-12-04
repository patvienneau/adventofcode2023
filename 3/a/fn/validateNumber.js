const specialCharacterRegexp = new RegExp('[^\w\.]');

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

	let isNumberValid = false;

	// Check row above
	if (rowIndex - 1 >= minRowIndex) {
		const minBoundIndex = Math.ceil(columnIndex - 1, minColumnIndex);
		const maxBoundIndex = Math.floor(columnIndex + length + 1, maxColumnIndex);

		const aboveStrSlice = inputArr[rowIndex - 1].substring(minBoundIndex, maxBoundIndex);

		if (specialCharacterRegexp.test(aboveStrSlice)) {
			isNumberValid = true;
		}
	}

	// Check same row (ends)
	if (columnIndex - 1 >= minColumnIndex) {
		const leftStrSlice = inputArr[rowIndex].substring(columnIndex - 1, columnIndex);

		if (specialCharacterRegexp.test(leftStrSlice)) {
			isNumberValid = true;
		}
	}

	if (columnIndex + length + 1 <= maxColumnIndex) {
		const rightStrSlice = inputArr[rowIndex].substring(columnIndex + length, columnIndex + length + 1);

		if (specialCharacterRegexp.test(rightStrSlice)) {
			isNumberValid = true;
		}
	}

	// Check row below
	if (rowIndex + 1 <= maxRowIndex) {
		const minBoundIndex = Math.ceil(columnIndex - 1, minColumnIndex);
		const maxBoundIndex = Math.floor(columnIndex + length + 1, maxColumnIndex);

		const belowStrSlice = inputArr[rowIndex + 1].substring(minBoundIndex, maxBoundIndex);

		if (specialCharacterRegexp.test(belowStrSlice)) {
			isNumberValid = true;
		}
	}

	return {
		...numberSpec,
		result: isNumberValid,
	}
}

module.exports = validateNumber;