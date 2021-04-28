// Elementary Sorting Algorithms

// What is sorting?
// Sorting is the process of rearranging the items in a collection (eg an array) so that the items are in some kind of order.
// Sorting numbers from smallest to largest, names alphabetically, etc

// Why do we need to learn this?
// Sorting is an incredibly common task, so it is good to know how it works
// There are many different ways of sorting things, and different techniques have their own advantages and disadvantages

// Objectives
// Implement elementary/quadratic sorting algorithms; bubble, selection and insertion sorting algorithms
// Understand why it is important to learn these simpler sorting algorithms

// Javascript has a sort method
// Yes it foes, but it doesn't always work the way you expect.
// arr.sort();

// Telling Javascript how to sort
// The built in sort method accepts an optional comparator function
// You can use this comparator function to tell JS how you want it to sort
// The comparator looks at pairs of elements (a and b), determines their sort order based on the return value.
// if it returns a negative number, a should come before b
// If it returns a positive muber, a should come after b
// If it returns 0, a & b are the same as far as the sort is concerned

// Ex. 1
// function numberCompare(num1, num2) {
// 	return num1 - num2;
// }

// console.log([ 6, 4, 15, 10 ].sort(numberCompare));

// Ex. 2
// function compareByLen(str1, str2) {
// 	return str1.length - str2.length;
// }

// console.log([ 'Steele', 'Colt', 'Data Structures', 'Algorithms' ].sort(compareByLen));

// BubbleSort / Alt. Sinking Sort
// A sorting algorithm where the largest values bubble to the top

// Before we sort, we must swap!
// Many sorting algorithms involve some type of swapping functionality (eg swapping two numbers to put them in order)
// ES5
// function swap(arr, idx1, idx2) {
// 	var temp = arr[idx1];
// 	arr[idx1] = arr[idx2];
// 	arr[idx2] = temp;
// }
// ES15
// const swap = (arr, idx1, idx2) => {
// 	[ arr[idx1], arr[idx2] ] = [ arr[idx2], arr[idx1] ];
// };

// BubbleSort Pseudocode
// Start looping from end of array towards the beginnng with a variable called i at the end of the array towards the beginning
// Start an inner loop with a variable called j from the beginning until i - 1
// If arr[j] is greater than arr[j + 1], swap those two values.
// Return the sorted array

// function bubbleSort(arr) {
// 	for (var i = arr.length; i > 0; i--) {
// 		for (var j = 0; j < i - 1; j++) {
// 			if (arr[j] > arr[j + 1]) {
// 				// swap
// 				var temp = arr[j];
// 				arr[j] = arr[j + 1];
// 				arr[j + 1] = temp;
// 			}
// 		}
// 	}
// 	return arr;
// }
// console.log(bubbleSort([ 37, 45, 29, 8 ]));

// function bubbleSort(arr) {
// 	const swap = (arr, idx1, idx2) => {
// 		[ arr[idx1], arr[idx2] ] = [ arr[idx2], arr[idx1] ];
// 	};
// 	for (let i = arr.length; i > 0; i--) {
// 		for (let j = 0; j < i - 1; j++) {
// 			if (arr[j] > arr[j + 1]) {
// 				swap(arr, j, j + 1);
// 			}
// 		}
// 	}
// 	return arr;
// }
// console.log(bubbleSort([ 37, 45, 29, 8 ]));

// Optimized with noSwaps
// function bubbleSort(arr) {
// 	for (var i = arr.length; i > 0; i--) {
// 		var noSwaps;
// 		for (var j = 0; j < i - 1; j++) {
// 			if (arr[j] > arr[j + 1]) {
// 				// swap
// 				var temp = arr[j];
// 				arr[j] = arr[j + 1];
// 				arr[j + 1] = temp;
// 				noSwaps = false;
// 			}
// 		}
// 		if (noSwaps) break;
// 	}
// 	return arr;
// }
// console.log(bubbleSort([ 8, 1, 2, 3, 4, 5, 6, 7 ]));

// Time complexity of bubbleSort
// O(N^2) - Worst Case
// O(N) - Best Case
// Best to use bubbleSort when data is almost sorted

// Selection Sort
// Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position one at a time

// Selection Sort Pseudocode
// Store the first element as the smallest value you have seen so far
// Compare this item to the next item in the array until you find a smaller number
// If a smaller number is found, designate that smaller number to be the new minimum and continue until the end of the array
// If the minimum is not the value (index) you initially began with, swap the two values
// Repeat this with the next element until the array is sorted

// function selectionSort(arr) {
// 	for (var i = 0; i < arr.length; i++) {
// 		var lowest = i;
// 		for (var j = i + 1; j < arr.length; j++) {
// 			if (arr[j] < arr[lowest]) {
// 				lowest = j;
// 			}
// 		}
// 		if (i !== lowest) {
// 			var temp = arr[i];
// 			arr[i] = arr[lowest];
// 			arr[lowest] = temp;
// 		}
// 	}
// 	return arr;
// }
// console.log(selectionSort([ 34, 22, 10, 19, 17 ]));

// ES15
// function selectionSort(arr) {
// 	const swap = (arr, idx1, idx2) => ([ arr[idx1], arr[idx2] ] = [ arr[idx2], arr[idx1] ]);

// 	for (let i = 0; i < arr.length; i++) {
// 		let lowest = i;
// 		for (let j = i + 1; j < arr.length; j++) {
// 			if (arr[lowest] > arr[j]) {
// 				lowest = j;
// 			}
// 		}
// 		if (i !== lowest) swap(arr, i, lowest);
// 	}
// 	return arr;
// }

// console.log(selectionSort([ 34, 22, 10, 19, 17 ]));

// Time Complexity of selection sort O(N^2)

// Insertion Sort
// Builds up the sort by gradually creating a larger left half which is always sorted

// Insertion sort pseudocode
// Start by picking the second element in the array
// Now compare the second element with the one before it and swap if necessary
// Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e the left side) to place the element in the correct place.
// Repeat until the array is sorted

// function insertionSort(arr) {
// 	for (var i = 1; i < arr.length; i++) {
// 		var currentVal = arr[i];
// 		for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
// 			arr[j + 1] = arr[j];
// 		}
// 		arr[j + 1] = currentVal;
// 		// console.log(arr);
// 	}
// 	return arr;
// }

// console.log(insertionSort([ 2, 1, 9, 76, 4 ]));

// Time complexity of insertion sort; worst case O(N^2)

// Big O of Sorting Algorithms

// Bubble Sort
// Time Complexity(Best); O(N)
// Time Complexity(Average); O(N^2)
// Time Complexity(Worst); O(N^2)
// Space Complexity; O(1)

// Insertion Sort
// Time Complexity(Best); O(N)
// Time Complexity(Average); O(N^2)
// Time Complexity(Worst); O(N^2)
// Space Complexity; O(1)

// Selection Sort
// Time Complexity(Best); O(N^2)
// Time Complexity(Average); O(N^2)
// Time Complexity(Worst); O(N^2)
// Space Complexity; O(1)

// Intermediate Sorting Algorithms

// Objectives
// Understand the limitations of the sorting  algorithms covered before
// Implement merge sort, quick sort, radix sort

// Why learn this?
// The sorting algorithms we have learned so far don't scale well
// Try out bubble sort on an array of l00000 elements, it will take quite some time.
// Faster sorts; a family of sorting algorithms that can improve time complexity from O(N^2) to O(NlogN)
// There is a tradeoff between efficiency and simplicity
// The more efficient algorithms are much less simple, and generally take longer to understand

// Merge Sort
// It's a combination of 2 things; splitting, merging,& sorting
// Exploits the fact that arrays of 0 or 1 element are always sorted
// Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array

// How does it work?
// Merging Arrays
// In order to implement merge sort, it is useful to first implement a function responsible for merging two sorted arrays
// Given 2 arrays which are sorted, this helperfunction should create a new array which is also sorted & consists of all of the elements in the 2 input arrays
// This function should run in O(N + M) time and O(N + M) space and should not modify the parameters passed to it

// Merging Arrays Pseudocode
// Create an empty array, take a look at the smallest values in each input array
// Where there are still values we haven't looked at, if the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array.
// If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array
// Once we exhaust one array, push in all remaining values from the other array

// function merge(arr1, arr2) {
// 	let results = [];
// 	let i = 0;
// 	let j = 0;
// 	while (i < arr1.length && j < arr2.length) {
// 		if (arr2[j] > arr1[i]) {
// 			results.push(arr1[i]);
// 			i++;
// 		} else {
// 			results.push(arr2[j]);
// 			j++;
// 		}
// 	}
// 	while (i < arr1.length) {
// 		results.push(arr1[i]);
// 		i++;
// 	}
// 	while (j < arr2.length) {
// 		results.push(arr2[j]);
// 		j++;
// 	}

// 	return results;
// }

// // mergeSort Pseudocode
// // Break up the array into halves until you have arrays that are empty or have one element
// // Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
// // Once the array has been merged back together, return the merged & sorted array

// function mergeSort(arr) {
// 	if (arr.length <= 1) return arr;
// 	// mergeSort()
// 	let mid = Math.floor(arr.length / 2);
// 	let left = mergeSort(arr.slice(0, mid));
// 	let right = mergeSort(arr.slice(mid));
// 	return merge(left, right);
// }

// console.log(mergeSort([ 10, 24, 76, 73, 72, 1, 9 ]));

// Big O of mergeSort

// Time Complexity(Best); O(N log N)
// Time Complexity(Average); O(N log N)
// Time Complexity(Worst); O(N log N)
// Space Complexity; O(N)

// Quick Sort
// Like merge sort, exploits the fact that arrays of 0 or 1 elements are always sorted
// Works by selecting one element (called the "pivot") and finding the index where the pivot should end up in the sorted array
// Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot

// How does it work?

// Pivot Helper
// In order to implement merge sort, it's useful to first implement a function responsible arranging elements in an array on either side of a pivot
// Given an array, this helper function should designate an element as the pivot
// It should then rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot, and all values greater than the pivot are moved to the right of the pivot
// The order of elements on either side of the pivot doesn't matter
// The helper should do this in place that is; it should not create a new array
// When complete, the helper should return the index of the pivot

// Picking a pivot
// The runtime of quick sort depends in part on how one selects the pivot
// Ideally, the pivot should be chosen so that it's roughly the median value in the data set you are sorting
// For simplicity, we will always choose the pivot to be the first element (we'll talk about consequences of this later)

// Pivot Pseudocode
// It will help to accept three arguments; an array, a start index, and an end index (these can default to 0 and the array length minus 1, respectively)
// Grab the pivot from the start of the array
// Store the current pivot index in a variable (this will keep track of where the pivot should end up)
// Loop through the arrayt from start until end. If the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index
// Swap the starting element (i.e the pivot) with the pivot index
// Return the pivot index

// function pivot(arr, start = 0, end = arr.length + 1) {
// 	function swap(array, i, j) {
// 		var temp = array[i];
// 		array[i] = array[j];
// 		array[j] = temp;
// 	}
// 	var pivot = arr[start];
// 	var swapIdx = start;

// 	for (var i = start + 1; i < arr.length; i++) {
// 		if (pivot > arr[i]) {
// 			swapIdx++;
// 			swap(arr, swapIdx, i);
// 		}
// 	}
// 	swap(arr, start, swapIdx);
// 	return swapIdx;
// }

// // Quicksort Pesudocode
// // Call the pivot helper on the array
// // When the helper returns to you the updated pivot index, recursively call the pivot helper on the subarray to the left of that index and the subarray to the right of that index

// function quickSort(arr, left = 0, right = arr.length - 1) {
// 	if (left < right) {
// 		let pivotIndex = pivot(arr, left, right);
// 		// left
// 		quickSort(arr, left, pivotIndex - 1);
// 		// right
// 		quickSort(arr, pivotIndex + 1, right);
// 	}
// 	return arr;
// }

// console.log(quickSort([ 4, 8, 2, 1, -6, 5, 7, 6, 3 ]));

// Big O of quickSort

// Time Complexity(Best); O(N log N)
// Time Complexity(Average); O(N log N)
// Time Complexity(Worst); O(N^2)
// Space Complexity; O(log N)

// Comparison sorts
// Average Time Complexity

// Bubble Sort- O(N^2)
// Insertion Sort- O(N^2)
// Selection Sort- O(N^2)
// Quick Sort- O(N log (N))
// Merge Sort- O(N log (N))

// We can do better in terms of sorting by using sorting algorithms that take advantage of special properties of the data
// Ex. Radix Sort
// A special sorting algorithm, that works on lists of numbers
// It never makes comparisons between elements
// It exploits the fact that information about the size of a number is encoded in the number of digits
// More digits means a big number.

// How does it work?

// Radix Sort Helpers
// In order to impelement radix sort, it's helpful to build a few helper functions first:

// // getDigit(num, place) - returns the digit in num at the given place value
// function getDigit(num, i) {
// 	return Math.floor((Math.abs(num) / Math.pow(10, i)) % 10);
// }

// // digitCount(num) - returns the number of digits in num
// function digitCount(num) {
// 	if (num === 0) return 1;
// 	return Math.floor(Math.log10(Math.abs(num))) + 1;
// }

// // mostDigits(nums) - Given an array of numbers, returns the number of digits in the largest numbers in the list
// function mostDigits(nums) {
// 	let maxDigits = 0;
// 	for (let i = 0; i < nums.length; i++) {
// 		maxDigits = Math.max(maxDigits, digitCount(nums[i]));
// 	}
// 	return maxDigits;
// }

// // Radix Sort Implementation
// // Pseudocode
// // Define a function that accepts a list of numbers
// // Figure out how many digits the largest number has
// // Loop from k = 0 up to this largest number of digits
// // For each iteration of the loop; create buckets for each digit(0 to 9), place each number in the corresponding bucket based on its kth digit
// // Replace our existing array with values in our buckets starting with 0 and going up to 9
// // Return the list at the end

// function radixSort(nums) {
// 	let maxDigitCount = mostDigits(nums);
// 	for (let k = 0; k < maxDigitCount; k++) {
// 		let digitBuckets = Array.from({ length: 10 }, () => []);
// 		for (let i = 0; i < nums.length; i++) {
// 			let digit = getDigit(nums[i], k);
// 			digitBuckets[digit].push(nums[i]);
// 		}
// 		nums = [].concat(...digitBuckets);
// 	}
// 	return nums;
// }
// console.log(radixSort([ 123, 100, 56, 1768, 373 ]));

// Big O of radixSort

// Time Complexity(Best); O(NK)
// Time Complexity(Average); O(NK)
// Time Complexity(Worst); O(NK)
// Space Complexity; O(N + K)

// N - length of the array
// K - number of digits(average)
