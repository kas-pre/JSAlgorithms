// Check if a string is a palindrome (ie reversing a string)
// Lets say you get an array of strings, arr, and for each string, we want to determine if it is a palindrome.
// Return True or False for each item
// arr = ["The quick brown fox jumped over the sleeping dog", "oozy rat in a sanitary zoo", "carla loves chocolate"]

// Consider
// Is there going to punctuation?
//

// Procedure
// use a for/ for each loop
// put everything to lowerCase()
// Get rid of all spaces, using .replace()
// Create a new variable and reveerse it to see if its equal to the element we just reversed
// arr = [ 'The quick brown fox jumped over the sleeping dog', 'oozy rat in a sanitary zoo', 'carla loves chocolate' ];

function palindromeChecker(arr) {
	arr.forEach((element) => {
		element = element.toLowerCase();
		element = element.replace(/\s/g, '');
		newElement = element.split('').reverse().join('');

		if (newElement == element) {
			console.log('this is a palindrome');
			return true;
		} else {
			console.log('this is not a palindrome');
			return false;
		}
	});
}

arr = [ 'The quick brown fox jumped over the sleeping dog', 'oozy rat in a sanitary zoo', 'carla loves chocolate' ];

palindromeChecker(arr);

// Find palindromes; string reversal returns same value

// Reverse string
// Check with original string if they are the same

const Palindrome = (str) => {
	const isPalindrome = str.split('').reverse().join('');
	console.log(str === isPalindrome);
};
Palindrome('abbad');

(function(str) {
	let reversed = '';
	for (let x of str) {
		reversed = x + reversed;
	}
	console.log(str === reversed);
})('david');

// String is palindrome permutation
// Given a str, write a method to check if it is a palindrome permutation
// Convert string to lowercase
// remove whitespaces
// Create object map
// Check if string is odd -- return false if there is more than one odd number charcter count
// If string is even --return false if there is not an even number character count of each character
// Return true

// Create object map
const getObj = (str) => {
	let obj = {};
	for (let i of str) !obj[i] ? (obj[i] = 1) : obj[i]++;
	return obj;
};

const palindromePermutation = (str) => {
	// convert string to lowercase
	str = str.toLowerCase();
	// remove whitespaces between string
	str = str.replace(/ +/g, '');
	// get obj
	const obj = getObj(str);
	// check if odd
	if (str.length % 2 === 1) {
		// return false if more than 1 odd number character
		let counter = 0;
		for (let i of str) {
			if (obj[i] % 2 === 1 || obj[i] === 1) counter++;
			if (counter > 1) return false;
		}
	} else {
		// even
		for (let i of str) {
			if (obj[i] % 2 !== 0) return false;
		}
	}
	return true;
};

console.log({
	test: palindromePermutation('tacta')
});
