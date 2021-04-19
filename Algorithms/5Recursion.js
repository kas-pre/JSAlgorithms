// Recursion

// Alternative to recursion is an iterative approach
// Take one problem, and do it over on a smaller scale, until you get to the problem

// Objectives
// Define what recursion is & how it can be used
// Understand the two essential components of writing a recursive function
// Visualize the call stack to better debug and understand recursive functions
// Use helper method recursion and pure recursion to solve more difficult problems

// What is recursion?
// A process (a function in our case) that calls itself

// Why do i need to know this?
// Its everywhere. Its used all the time.
// JSON.parse / JSON.stringify --> written recursively
// document.getElementById and DOM traversal algorithms
// Object traversal
// We will see it with more complex data structures
// It's sometimes a cleaner alternative to iteration

// What happens behind the scene, when functions are called in JS
// In almost all programming languages, there's a built in data structure that manages what happens when functions are invoked.
// It's named the callstack

// The call stack
// It's a stack data structure- we will talk about that later.
// Anytime a function is invoked, it is placed (pushed) on the top of the call stack
// When JS sees the return keyword or when the function ends, the compiler will remove (pop) the top item from the stack.

// Consider this example CallStack
// function takeShower() {
// 	return 'Showering!';
// }
// function eatBreakfast() {
// 	let meal = cookFood();
// 	return `Eating ${meal}`;
// }
// function cookFood() {
// 	let items = [ 'Oatmeal', 'Eggs', 'Protein Shake' ];
// 	return items[Math.floor(Math.random() * items.length)];
// }
// function wakeUp() {
// 	takeShower();
// 	eatBreakfast();
// 	console.log('Ok, ready to go to work!');
// }

// wakeUp();

// Why do i care?
// You are used to functions being pushed on the call stack and popped off when they are done.
// When we write recursive functions, we keep pushing new functions onto the callstack.

// How recursive functions work
// Invoke the same function with a different input until you reach your base case

// Base Case
// The condition when the recursion ends. This is the most important concept to understand

// The two essential parts of a recursive function
// Base Case
// Different Input - the recursive call with a different piece of data

// Our first recursive function
// function countDown(num) {
// 	if (num <= 0) {
// 		console.log('All done!');
// 		return;
// 	}
// 	console.log(num);
// 	num--;
// 	countDown(num);
// }

// Done iteratively
// function countDown(num) {
//     for (var i = num; i > 0; i--) {
//         console.log(i);
//     }
//     console.log("All done!")
// }

// Our second recursive function
// function sumRange(num) {
// 	if (num === 1) return 1;
// 	return num + sumRange(num - 1);
// }

// Another example - factorial
// Iterative approach
// function factorial(num) {
// 	let total = 1;
// 	for (let i = num; i > 1; i--) {
// 		total *= i;
// 	}
// 	return total;
// }

// Recursive approach
// function factorial(num) {
// 	if (num === 1) return 1;
// 	return num * factorial(num - 1);
// }

// Where things go wrong
// No base case
// Forgotten to return or returning the wrong thing
// Stack overflow!

// Helper Method Recursion
// function outer(input) {
// 	var outerScopedVariable = [];

// 	function helper(helperInput) {
// 		// modify the outerScopedVariable
// 		helper(helperInput--);
// 	}
// 	helper(input);

// 	return outerScopedVariable;
// }

// Ex. 1
// Let's try to collect all the odd values in an array
// function collectOddValues(arr) {
// 	let result = [];

// 	function helper(helperInput) {
// 		if (helperInput.length === 0) {
// 			return;
// 		}

// 		if (helperInput[0] % 2 !== 0) {
// 			result.push(helperInput[0]);
// 		}

// 		helper(helperInput.slice(1));
// 	}

// 	helper(arr);

// 	return result;
// }

// console.log(collectOddValues([ 1, 2, 3, 4, 5, 6 ]));

// Pure Recursion
// function collectOddValues(arr) {
// 	let newArr = [];

// 	if (arr.length === 0) {
// 		return newArr;
// 	}

// 	if (arr[0] % 2 !== 0) {
// 		newArr.push(arr[0]);
// 	}

// 	newArr = newArr.concat(collectOddValues(arr.slice(1)));
// 	return newArr;
// }

// console.log(collectOddValues([ 1, 2, 3, 4, 5, 6 ]));

// Pure Recursion Tips
// For arrays, use methods like slice, the spread operator, and concat that make copies of arrays so you do not mutate them
// Remember that stirngs are immutable so you will need to use methods like slice, substr, or substring to make copies of strings
// To make copies of objects use Object.assign, or the spread operator
