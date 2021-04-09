// Implement an algorithm to determine if a string has all unique characters

// str -> obj -> count values in obj

const IsUnique = (str) => {
	const obj = {};
	for (let i of str) !obj[i] ? (obj[i] = 1) : obj[i]++;
	for (let i in obj) {
		if (obj[i] > 1) return false;
	}
	return true;
};

console.log({
	IsUnique: IsUnique('kp')
});
