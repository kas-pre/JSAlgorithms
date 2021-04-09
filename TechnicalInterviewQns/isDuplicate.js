// Given an array of numbers 1 - 100, exactly one number is a duplicate
// Find the number

function findDup(arr) {
	var dup = [];
	var Obj = {};
	for (var i = 0; i < arr.length; i++) {
		if (!Obj[arr[i]]) {
			Obj[arr[i]] = 1;
		} else {
			// return arr[i];
			dup.push(arr[i]);
		}
	}
	return dup;
}

console.log(findDup([ 1, 2, 2, 3, 3, 2, 4, 5 ]));

// Time complexity for 2 for loops is larger
// Using objects makes it easier to iterate through the elements Key:Value pairs
