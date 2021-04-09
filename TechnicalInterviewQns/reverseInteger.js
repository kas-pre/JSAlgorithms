// Write an algorithm to reverse an integer

// Convert to a string
// turn into array
// Reverse method
// Back to string
// Back to int

const reverseInt = (n) => {
	if (n < 0) return -1 * parseInt(n.toString().split('').reverse().join(''));
	return parseInt(n.toString().split('').reverse().join(''));
};

console.log({
	testcase1: reverseInt(51),
	testcase2: reverseInt(500),
	testcase3: reverseInt(-15),
	testcase4: reverseInt(-900)
});
