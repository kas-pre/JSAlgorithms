// Common Searching Algorithms
// How these work behind the scenes and how we can implement our own

// Objectives
// Describe what a searching algorithm is
// Implement linear search on arrays
// Implement binary search on sorted arrays
// Implement a naive string searching algorithm
// Implement the KMP string searching algorithm

// How do we search?

// Let's first focus on searching an array!
// Given an array, the simplest way to search for a value is to look at every element in the array and check if it's the value we want

// Javascript has search!
// There are many different search methods on arrays in Javascript;
// indexOf
// includes
// find
// findIndex
// But how do these functions work?

// Linear Search
// We start at the beginning of an array, move through each item in the array, until we find the item we are searching for.

// Linear Search Pseudocode
// This function accepts an array and a value
// Loop through the array  and check if the current array element is equal to the value
// If it is, return the index at which the value is found.
// If the value is never found, return -1

// Time complexity - O(N)
// function linearSearch(arr, val) {
// 	for (var i = 0; i < arr.length; i++) {
// 		if (arr[i] === val) {
// 			return arr.indexOf(val); // return i
// 		}
// 	}
// 	return -1;
// }

// console.log(linearSearch([ 34, 56, 1, 2 ], 2));

// Linear Search Big O
// O(1) - Best Case
// O(N) - Worst Case
// O(N) - Average Case

// Binary Search
// A significant improvement; a much faster form of search.
// Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time.
// Binary search only works on sorted arrays.

// Implementation - Divide & Conquer
// Binary Search Psuedocode
// This function accepts a sorted array and a value
// Create a left pointer at the start of the array, and a right pointer at the end of the array
// While the left pointer comes before the right pointer; create a pointer in the middle, if you find the value you want, return the index, if the value is too small, move the left pointer up, if the value is too large, move the right pointer down.
// If you never find the value, return -1

// function binarySearch(arr, elem) {
// 	var start = 0;
// 	var end = arr.length - 1;
// 	var middle = Math.floor((start + end) / 2);
// 	// console.log(start, middle, end)
// 	while (arr[middle] !== elem && start <= end) {
// 		if (elem < arr[middle]) {
// 			end = middle - 1;
// 		} else {
// 			start = middle + 1;
// 		}
// 		middle = Math.floor((start + end) / 2);
// 		// console.log(start, middle, end);
// 	}
// 	if (arr[middle] == elem) {
// 		return middle;
// 	}
// 	return -1;
// }

// console.log(binarySearch([ 2, 5, 6, 9, 13, 28 ], 13));

// function binarySearch(arr, elem) {
// 	var start = 0;
// 	var end = arr.length - 1;
// 	var middle = Math.floor((start + end) / 2);
// 	while (arr[middle] !== elem && start <= end) {
// 		if (elem < arr[middle]) end = middle - 1;
// 		else start = middle + 1;
// 		middle = Math.floor((start + end) / 2);
// 	}
//     return arr[middle] === elem ? middle : -1
// }

// console.log(binarySearch([ 2, 5, 6, 9, 13, 28 ], 13));

// Binary Search Big O
// O(log N) - worst & average case
// O(1) - best case

// Naive String Search
// Searching for substrings in a larger string.
// Suppose you want to count the number of times a smaller string appears in a longer string
// A straightforward approach involves checking pairs of characters individually

// Naive String Search Pseudocode
// Loop over the longer string
// Loop over the shorter string
// If the characters don't match, break out of the inner loop
// if the characters do match, keep going
// If you complete the inner loo[ and ginf a match, increment the count of matches
// Return the count

// function naiveSearch(long, short) {
// 	var count = 0;
// 	for (var i = 0; i < long.length; i++) {
// 		for (var j = 0; j < short.length; j++) {
// 			if (short[j] !== long[i + j]) break;
// 			if (j === short.length - 1) count++;
// 		}
// 	}
// 	return count;
// }

// console.log(naiveSearch('lorie loled', 'lo'));
