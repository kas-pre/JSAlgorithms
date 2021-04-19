// Objectives
// The need for Big O Notation
// Describe what Big O Notation is
// Simplify Big O Expressions
// Define time complexoty & space complexity
// Evaluate the time complexity & space complexity of different algorithms using Big O Notation
// Descibe what a logarithm is

// Introduction
// Algorithms, solving problems, understanding Computer Science Data Structures & Algorithms
// Imagine we have multiple implementations of the same function. How can we determine which one is the best.
// Big O Notation helps us accomplish this task, of comparing code and understanding which approach is best suited for a certain problem
// Big O Notation provides a numeric representation of the performance of our code

// Ex. Write a function that accepts a string input & returns a reversed copy

// Who cares about Big O Notation
// The best solution is the one that you can get to work, but sometimes, algorithms implementations in terms of performance result in best outcomes
// It's important to have a precise vocabulary to talk about how our code performs.
// Useful for discussing trade-offs between different approaches
// When your code slows down, or crashes, identifying parts of the code that are inefficient can help us find points in our applications

// Ex. Suppose we want to write a function that calculates the sum of all numbers from 1 up to (and including) some number n.
// Imp.1
// function addUpTo(n) {
// 	let total = 0;
// 	for (let i = 1; i <= n; i++) {
// 		total += i;
// 	}
// 	return total;
// }
// console.log(addUpTo(6));
// Imp.2 Formula used here is derived from ZOMG WUT
// function addUpTo(n) {
// 	return n * (n + 1) / 2;
// }
// console.log(addUpTo(6));
// Of the above 2 implementations, which one is better?
// Does better mean faster code, less memory-intensive, more readable, brevity?
// Better is therefore more important in terms of how fast code is, and how less momeory intensive it is.
// Evaluating speed; the  simplest way, could be to use built in timing functions;
// Test in browser console
// function addUpTo(n) {
//     let total = 0;
//     for (let i = 1; i <= n; i++) {
//         total += i;
//     }
//     return total;
// }

// function addUpTo(n) {
// 	return n * (n + 1) / 2;
// }

// let t1 = performance.now();
// addUpTo(1000000000);
// let t2 = performance.now();
// console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);
// The above process shows Imp.2 as faster.  But this is not the most efficient way to determine which code is more efficient.

// The Problem with Time
// Different machines will record different times
// The same machine will record different times!
// For fast algorithms, speed measurements may not be precise enough.
// If not time, then what?
// Rather than counting seconds which are so variable, let's count the number of simple operations the computer has to perform.
// We can determine the time by the number of operations
// Counting Operations

// function addUpTo(n) {
// 	return n * (n + 1) / 2;
// }

// In this example, there are 3 operations (additon, multiplication & division), it doesn't matter what n is. There are only 3 calculations happening.

// function addUpTo(n) {
// 	let total = 0;
// 	for (let i = 1; i <= n; i++) {
// 		total += i;
// 	}
// 	return total;
// }

// Compared with this one, there are a few more operations; loop operations (n operations; n additions; n assignments), n additions, n assignments, n comparisons, 1 assignment ...
// Counting becomes hard then. Depending on what we count, the number of operations cab  be as low as 2n or as high as 5n + 2.
// But regardless of the exact number, the number of operations grows roughly proportonally with n, as n grows
// Big O focuses on the big picture, the general trend of the number of operations

// Introducing Big O
// Big O Notation is a way to formalize fuzzy counting
// It allows us to talk formally about how the runtime of an algorithm grows as the input grows
// We won't care about the details. Only the broad trends

// Big O definition
// We say that an algorithm is O(f(n)) if the number of simple operations the computer has to do is eventually less than a constant times f(n) as n increases.
// f(n) could be linear (f(n) = n)
// f(n) could be quadratic (f(n) = n^2)
// f(n) could be constant (f(n) = 1)
// f(n) could be something entirely different.

// When we talk about Big O, we are reflecting on the worst case scenario. On the upper bound for runtime

// function addUpTo(n) {
// 	return n * (n + 1) / 2;
// }

// In this example, where we only have 3 operations, and its constant; there is always 3 operations; we could say that this has a Big O of 1; O(1); always 3 operations.
// As n grows, there are no changes reflected in the runtime.

// function addUpTo(n) {
// 	let total = 0;
// 	for (let i = 1; i <= n; i++) {
// 		total += i;
// 	}
// 	return total;
// }

// In this example, there are a bunch of operations, the runtime grows, as n grows, probably in a 1:1 ratio. The number of operations is eventually bounded by a multiple of n(say, 10n). We eventually simplify it as O(n)
// Our basic concern is the order of magnitude.

// Another Ex.
// function countUpAndDown(n) {
// 	console.log('Going up!');
// 	for (let i = 0; i < n; i++) {
// 		console.log(i);
// 	}
// 	console.log('At the top!\nGoing down...');
// 	for (let j = n - 1; j >= 0; j--) {
// 		console.log(j);
// 	}
// 	console.log('Back down. Bye!');
// }
// console.log(countUpAndDown(10));
// In trying to figure out the Big O of this function; in the first loop, as n grows, we can say, we have n operations, thus O(n), similarly in the second loop, as n grows, we have n operations; thus O(n).
// ou might think that the Big O is 2n, but remember, we only care about the big picture. The number of operations is eventually bounded by a multiple of n(say, 10n). Therefore the BIg O is O(n).

// Another Ex.
// function printAllPairs(n) {
// 	for (var i = 0; i <= n; i++) {
// 		for (var j = 0; j <= n; j++) {
// 			console.log(i, j);
// 		}
// 	}
// }
// console.log(printAllPairs(5));
// In this example, we have a nested loop, the first loop is based off of n, as n grows, we have n operations, thus O(n). The second loop, a nested loop has O(n).
// But this is not O(2n), which would be simplified tO(n), because it is nested.
// O(n) operation inside of an O(n) operation is O(n^2). As n grows, the runtime, roughly grows at a rate of n^2
// As n grows, the runtime grows even larger.

// Simplifying Big O expressions
// When determining the time complexity of an algorithm, there are some helpful rule of thumbs for big O expressions
// These rules of thumb are consequences of the definition of big O notation
// Constants Don't matter. We only care about the broad picture
// O(2n) --> O(n)
// O(500) --> O(1)
// O(13n^2) --> O(n^2)
// Smaller Terms also don't matter
// O(n + 10) --> O(n)
// O(1000n + 50) --> O(n)
// O(n^2 + 5n + 8) --> O(n^2)

// Big O Shorthands
// When analyzing complexity with big O, things can get complicated.
// There are several rules of thumb that can help. These rules won't always work, but are helpful starting point.
// 1. Arithmetic operations are constant
// 2. Variable assignment is constant
// 3. Accessing elements in an array(by index) or object (by key) is constant
// 4. In a loop, the complexity is the length of the loop times the complexity of whatever happens inside the loop

// Another Ex.
// function logAtLeast5(n) {
// 	for (var i = 1; i <= Math.max(5, n); i++) {
// 		console.log(i);
// 	}
// }
// console.log(logAtLeast5(5));
// To figure out the Big O here, we have a loop, going from 1 to either 5 or n whichever is larger, we could worry about 5, but we could only do so as n is smaller.
// But as n grows larger, towards infinity, what happens to the runtime? We could simplify its Big O as O(n). As n grows, the number of operations grow, in proportion to n

// Another Ex.
// function logAtMost5(n) {
// 	for (var i = 1; i <= Math.min(5, n); i++) {
// 		console.log(i);
// 	}
// }
// In this example, as n grows, it doesn't matter. The loop can run at most 5 times, therefroe as n grows, the number of operations is constant. Therefore O(1)

// Space Complexity
// So far, we have been focusing on time complexity; how can we analyze the runtime of an algorithm as the size of the imputs increases?
// We can also use big O notation to analyze space complexity; how much additional memory do we need to allocate in order to run the code in our algorithm

// What about the inputs?
// As n grows, the size of the inputs equally grows.
// Sometimes, u'll hear the term auxiallry space complexity to refer to space required by the algorithm, not including space taken up by the inputs.
// We care about the space occupied by the algorithm itself. As n grows, we assume that the input n is going to grow.
// Unless otherwise noted, when we talk about space complexity, technically we'll be talking about auxillary space complexity (focusing on what happens inside the algorithm)

// Space Complexity in JS.
// Rules of Thumb
// Most primitives (booleans, numbers, undefined, null) are constant space.
// Strings require O(n) space where n is the string length.
// Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects)

// Ex.
// function sum(arr) {
// 	let total = 0;
// 	for (let i = 0; i < arr.length; i++) {
// 		total += arr[i];
// 	}
// 	return total;
// }
// Our focus here is on space complexity; this function called sum, takes an array and sums all the items in the array.
// We have a var total starting with 0, we have a loop going from 0 to the end of the arrat, and we are just adding in the value of each item to the total value and then we return it.
// In terms of space, no matter what the array length is, we have one var called total, one number, and we are looping through, we have an second declaration within the loop inside the for loop; let i = 0; and that's it for space.
// No matter what the sizze of the array is, n, it doesnt have an impact on the space that is taken up. We only maintaining the variables; we have constant space; O(1) space, no matter the suze of the input.

// Another Ex.
// function double(arr) {
// 	let newArr = [];
// 	for (let i = 0; i < arr.length; i++) {
// 		newArr.push(2 * arr[i]);
// 	}
// 	return newArr;
// }
// As the array length grows, as the input grows towards infinity, the space taken up is directly proportional to n; the array length; thus O(n) space.


// Logarithms
// We have encountered some of the most common complexities; O(1), O(n), O(n^2)
// Sometime big O expressions involve more complex mathematical expressions
// One that appears mmore often than you might like is the logarithm
// A logarithm is the inverse of exponentiation
// log2(8) = 3 --> 2^3 = 8 - log2(value) = exponent --> 2^exponent = value
// Logarithms aren't always working qith 2. It can be something else. 
// The most common are binary logarithms (log2), the base 10, & loge
// We care about the big picture though; log is only important here.
// The general trend is the most important. 
// The binary logarithm of a number roughly measures the number of times you can divide that number by 2 before you get a value less than or equal to one.

// Logarithm Time Complexity
// If you have an algorithm with O(log n) time complexity, its great. It compares favourably with O(1) & O(n), better than O(nlog n), O(n^2).

// Certain searching algorithms do have logarithmic time complexity.
// Efficient sorting algorithms involve logarithms
// Recursion sometimes involves logarithmic space complexity.
// ...etc

// Recap
// To analyze the performance of an algorithm, we use Big O Notation
// Big O Notation can give us a high level understanding of the time or space complexity of an algorithm
// Big O doesn't care about precision, only about general trends (linear? quadratic? constant?)
// The time or space complexity (as measured by Big O) depends only on the algorithm, not the hardware used to run the algorithm
// Big O Notation is everywhere, se let's get lots of practice!