// Find the most frequent item in an array
// Given an array of integers and characters, find which integer/character appears most frequently

// nested for loops
function mostFrequent(arr) {
	// Lets create counter for most frequent occurance
	mf = 1;
	// Current occurence counter
	m = 0;
	// Item occuring most frequently
	var item;

	for (i = 0; i < arr.length; i++) {
		for (j = i; j < arr.length; j++) {
			if (arr[i] == arr[j]) {
				m++;
			}
			if (mf < m) {
				mf = m;
				item = arr[i];
			}
		}
		m = 0;
	}
	console.log(item + ' times: ' + mf);
}

arr = [ 2, 'b', 1, 'a', 2, 6, 'a', 3, 'b', 2, 9, 3, 2 ];

mostFrequent(arr);

// Number of times a character appears in a string
function count(params, string) {
	// var Obj = {}
	var count = 0;
	for (var i = 0; i < string.length; i++) {
		if (string[i] === params) {
			count++;
		}
	}
	console.log(count);
}
count('c', 'constance');