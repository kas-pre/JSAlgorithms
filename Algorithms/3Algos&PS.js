// Algorithms & Problem Solving Patterns
// Strategies/ Game Challenges etc

// Objectives
// Define what an algorithm is
// Devise a plan to solve algorithms
// Compare & contrast problem solving patterns including frequency counters, two pointer problems & divide & conquer

// What is an algorithm?
// A process or set of steps to accomplish a certain task.

// Why do I need to know this?
// Almost everything that you do in programming involves some kind of algorithm
// It's the foundation for being a successful problem solver & developer

// How do you improve?
// Decise a plan for solving problems
// Master common problem solving patterns

// Problem solving strategies
// A simple, foolproof, magical, miraculous, fail-safe approach to solving problems
// Problem Solving
// -Understand the Problem
// -Explore Concrete Examples
// -Break it Down
// -Solve/Simplify
// -Look Back & Refactor

// Note, many of these strategies are adapted from George Polya, whose book How to Solve It is a great resource for anyone who wants to become a better problem solver

// Understand the Problem
// Can i restate the problem in my own words?
// What are the inputs that go into the problem
// What are the outputs that should come from the solution to the problem
// Can the outputs be determined from the inputs? In other words, do i have enough information to solve the problem?
// You may not be able to answer the above question until you set about solving the problem.
// That is okay; it's still worth considering the question at this early stage.
// How should i label the important pieces of data that are part of the problem

// Ex.
// Write a function which takes two numbers and returns their sum
// Can i restate the problem in my own words?
// -implement addition
// What are the inputs that go into the problem
// -should it be an integer? a float? a string?
// What are the outputs that should come from the solution to the problem
// -should it be an integer? a float? a string?
// Can the outputs be determined from the inputs?
// -yes? but it is dependent.
// How should i label the important pieces of data that are part of the problem
// -num1, num2, sum

// Explore Concrete Examples
// Coming up with examples can help you understand the problem better
// Examples also provide sanity checks that your eventual solution works how it should
// This can apply on bigger prblems; e.g user stories; given input, whats the output, unit tests.
// -Start with simple examples
// -Progress to more complex examples
// -Explore examples with empty inputs
// -Explore examples with invalid inputs

// Ex.
// Write a function which takes in a string and returns counts of each character in the string
// charCount("aaaa"); // {a: 4}
// charCount("hello"); // {h: 1, e: 1, l: 2, o: 1}
// Should it return only the characters that are in there, or even others?
// "my phone number is 182763"
// "Hello hi"
// charCount("") // {}, null, false, undefined
// explore all other edge cases
// Handling errors

// Break it Down
// Take the actual steps of the solution & write it down
// Explicitly write out the steps you need to take
// This forces you to think about your code before you write it, and helps you catch any lingering conceptual issues or misunderstandings before you dive in & have to worry about details (eg language syntax as well)

// Ex.
// Write a function which takes in a string and returns counts of each character in the string
// function charCount(str) {
//     // do something
//     // return an object with keys that are a lowercase alphanumeric characters in the string; values should be the counts of those characters
// }

// function charCount(str) {
//     // make object to return at end
//     // loop over string, for each character
//         // if the char is a number/letter AND is a key in the object, add 1 to the count
//         // if the char is a number/letter AND is not in object, add it and set value to 1
//         // if char is something else(space, period, etc), don't do anything
//     // return object at end
// }

// Solve/Simplify
// Solve the problem, if you can't, solve a simpler problem
// Simplification
// Find the core difficulty in what you are trying to do
// Temporarily ignore that difficulty
// Write a simplified solution
// Then incorporate that difficulty back in

// Ex.
// Write a function which takes in a string and returns counts of each character in the string
// Identify the difficluties; change approach
// function charCount(str) {
// 	// make object to return at end
// 	var result = {};
// 	// loop over string, for each character
// 	for (var i = 0; i < str.length; i++) {
// 		var char = str[i].toLowerCase();
// 		// if the char is a number/letter AND is a key in the object, add 1 to the count
// 		if (result[char] > 0) {
// 			result[char]++;
// 			// if the char is a number/letter AND is not in object, add it and set value to 1
// 		} else {
// 			result[char] = 1;
// 		}
// 	}
// 	// if char is something else(space, period, etc), don't do anything
// 	// return object at end
// 	return result;
// }
// console.log(charCount('hello'));

// Look Back & Refactor
// Congrats on solving it, but you are not done!

// Refactoring questions
// Can you check the result?
// can you derive the result differently?
// Can you understand it at a glance?
// Can you use the result or method for some other problem?
// Can you improve the performance of your solution?
// Can you think of other ways to refactor?
// How have other people solved this problem?

// Ex. refactored 1
// function charCount(str) {
// 	var obj = {};
// 	for (var i = 0; i < str.length; i++) {
// 		var char = str[i].toLowerCase();
// 		if (/[a-z0-9]/.test(char)) {
// 			if (obj[char] > 0) {
// 				obj[char]++;
// 			} else {
// 				obj[char] = 1;
// 			}
// 		}
// 	}
// 	return obj;
// }
// console.log(charCount("Hi JS Code 2!"));

// Ex. refactored 2
// function charCount(str) {
// 	var obj = {};
// 	for (var char of str) {
// 		char = char.toLowerCase();
// 		if (/[a-z0-9]/.test(char)) {
// 			if (obj[char] > 0) {
// 				obj[char]++;
// 			} else {
// 				obj[char] = 1;
// 			}
// 		}
// 	}
// 	return obj;
// }
// console.log(charCount("Hi JS Code 2!"));

// Ex. refactored 3
// function charCount(str) {
// 	var obj = {};
// 	for (var char of str) {
// 		char = char.toLowerCase();
// 		if (/[a-z0-9]/.test(char)) {
// 			obj[char] = ++obj[char] || 1;
// 		}
// 	}
// 	return obj;
// }
// console.log(charCount("Hi JS Code 2!"));

// Ex. refactored 4
// function charCount(str) {
// 	let obj = {};
// 	for (let char of str) {
// 		if (isAlphaNumeric(char)) {
//             char = char.toLowerCase();
// 			obj[char] = ++obj[char] || 1;
// 		}
// 	}
// 	return obj;
// }
// console.log(charCount('Hi JS Code 2!'));

// function isAlphaNumeric(char) {
// 	var code = char.charCodeAt(0);
// 	if (
// 		!(code > 47 && code < 58) && //numeric (0-9)
// 		!(code > 64 && code < 91) && //upper alpha (A-Z)
// 		!(code > 96 && code < 123) //lower alpha (a-z)
// 	) {
// 		return false;
// 	}
// 	return true;
// }

