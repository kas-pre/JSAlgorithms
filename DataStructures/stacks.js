// Stacks
// Consider a stack of books; the topmost book was put last, removing it, exposes the book put before the last book. Stacks offer a LastInFastOut type of service. Similarly, the way the browser's back button operates
// Functions: push, pop, peek, length
// The array object can be used as a stack, since it already has much of these functions
// Can be used to determine palindromes

// Let's create our array stack and use it to find palindromes
var letters = [];

var word = 'freeCodeCamp';
// var word = "racecar"

var rword = '';

// Put letters of the word into the stack
for (var i = 0; i < word.length; i++) {
	letters.push(word[i]);
}

// Pop off the stack in reverse order
for (var i = 0; i < word.length; i++) {
	rword += letters.pop();
}

if (rword === word) {
	console.log(word + ' is a palindrome.');
} else {
	console.log(word + ' is not a palindrome.');
}

// The above demonstrates usage of an array as a stack

// Lets see how to implement a stack in JS
// // Creates a stack using ES15 class constructor method
// class Stack {
// 	constructor() {
// 		this.count = 0;
// 		this.storage = {};

// 		// Adds a value onto the end of a stack
// 		this.push = function(value) {
// 			this.storage[this.count] = value;
// 			this.count++;
// 		};
// 		// Removes and returns the value at the end of the stack
// 		this.pop = function() {
// 			if (this.count === 0) {
// 				return undefined;
// 			}

// 			this.count--;
// 			var result = this.storage[this.count];
// 			delete this.storage[this.count];
// 			return result;
// 		};

// 		this.size = function() {
// 			return this.count;
// 		};
// 		// Returns the value at the end of the stack
// 		this.peek = function(value) {
// 			return this.storage[this.count - 1];
// 		};
// 	}
// }

// Creates a stack normally
var Stack = function() {
	this.count = 0;
	this.storage = {};

	// Adds a value onto the end of a stack
	this.push = function(value) {
		this.storage[this.count] = value;
		this.count++;
	};
	// Removes and returns the value at the end of the stack
	this.pop = function() {
		if (this.count === 0) {
			return undefined;
		}

		this.count--;
		var result = this.storage[this.count];
		delete this.storage[this.count];
		return result;
	};

	this.size = function() {
		return this.count;
	};
	// Returns the value at the end of the stack
	this.peek = function() {
		return this.storage[this.count - 1];
	};
};

// // Example usage of the stack
// var myStack = new Stack();

// myStack.push(1);
// myStack.push(2);
// console.log(myStack.peek());
// console.log(myStack.pop());
// console.log(myStack.peek());
// myStack.push("freeCodeCamp");
// console.log(myStack.storage);
// console.log(myStack.size());