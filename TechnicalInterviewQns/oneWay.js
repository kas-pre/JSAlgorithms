// There are three types of edits that can be performed on strings;7
// Insert a charcter, Remove a character, Replace a character
// Given two strings, write a method to determine if they are one edit away from each other
//  eg {pale, ple}, {pales, pale}, {pale, kale}

// If strings are identical to each other, return false
// Create character maps of both strings
// Check if each character has the same type and value
// If they are not, incre the counter
// If counter is 2 or more, return false
// Else return true

const charMap = (str) => {
	let obj = {};
	for (let i of str) !obj[i] ? (obj[i] = 1) : obj[i]++;
	return obj;
};

const oneWay = (str1, str2) => {
	if (str1 === str2) return false;
	const obj1 = charMap(str1);
	const obj2 = charMap(str2);
	let counter = 0;
	for (let i in obj1) {
		if (obj1[i] !== obj2[i]) counter++;
		else if (counter >= 2) {
			return false;
		}
	}
	return true;
};

console.log(oneWay('pale', 'bale'));
