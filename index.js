'use strict';

module.exports = arr => {
	if (!Array.isArray(arr)) {
		throw new TypeError('Expected an array');
	}

	if (arr.length === 1) {
		return (arr[0]);
	}

	let min = Infinity;
	let len = arr.length;
	let valid = 0;

	while (len--) {
		if (parseFloat(arr[len]) < parseFloat(min) && !arr[len].isNaN) {
			valid++;
			min = arr[len];
		}
	}
	if (valid === 0) {
		throw new TypeError('Expected at least 1 number in the array');
	}
	return min;
};
