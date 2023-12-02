function isNumeric(s) {
    return !isNaN(s - parseFloat(s));
}

module.exports = isNumeric;