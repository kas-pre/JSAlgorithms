// Write a function 'chunk(arr, n)' that returns chunked array of size n at the least

// Create an array called 'chunked = []'
// Get the last chunked array within last = chunked
// Check if last exists OR size of last equals to n
// If it does exist, then push into chunked. Else push into last
// Return chunked

const chunks = ((arr, n) => {
	const chunked = [];

	for (let elem of arr) {
		let last = chunked[chunked.length - 1];

		if (!last || last.length === n) chunked.push([ elem ]);
		else last.push( elem );
	}

	return chunked;
})([ 1, 4, 12, 3, 2, 6, -9, 0 ], 3);

console.log({
    chunks 
})