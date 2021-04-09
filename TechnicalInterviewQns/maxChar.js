// Find maximum appearing character in a string and how many times it appears

// For a given string,
// Generate a key-value pair
// Create an object
// If ther character of str doesn't exist in obj, then set it's value to 1
// If it does, do an increment
// Loop through the values of the object to see which one has the highest value

const maxChar = (str) => {
	let Obj = {};
	for (let char of str) !Obj[char] ? (Obj[char] = 1) : Obj[char]++;

	let maxNum = 0;
	let maximumChar = '';

	for (let char in Obj) {
		if (Obj[char] >= maxNum) {
			maxNum = Obj[char];
			maximumChar = char;
		}
	}
	console.log(`${maximumChar} appears ${maxNum} times`);
};

maxChar('heLLLoo$$3p');
