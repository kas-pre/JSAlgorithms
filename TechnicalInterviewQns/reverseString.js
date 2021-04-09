// Given a string, reverse it

// Given a string, convert it into array
// reverse the array
// Turn the array back into a string
const revString = (str) => {
	const arr = str.split('');
	arr.reverse();
	str = arr.join('');
	console.log(str);
};

revString('apple');

// Given string, create empty string
// Loop through each character
// return the reversed

(function(str) {
	let reversed = '';
	for (let character of str) {
		reversed = character + reversed;
	}
	console.log({
		reversed_value: reversed
	});
})('mamamia!');
