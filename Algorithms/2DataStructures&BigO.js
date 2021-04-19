// Built-In Data Structures Through the lens of Big O
// Let's spend some time analyzing the things we do all the time in JS; working with arrays, objects & built-in methods.

// Objectives
// Understand how objects & arrays work through the lens of Big O
// Explain why adding elements to the beginning of an arrat is costly.
// Compare & contrast the runtime for arrays & objects as well as built-in methods

// Onjects; Unorded data structures, storing everything in key value pairs
// Ex.
// let instructor = {
// 	firstName: 'Kelly',
// 	isInstructor: true,
// 	favoriteNumbers: [ 1, 2, 3, 4 ]
// };
// When to use objects
// When you don't need order.
// When you need fast access/insertion & removal

// Big O of objects
// Insertion- O(1)
// Removal- O(1)
// Searching- O(N)
// Access- O(1)

// When you don't need any ordering, objects are an excellent choice.

// Big O of object methods
// Object.keys- O(N)
// Object.values- O(N)
// Object.entries- O(N)
// hasOwnProperty- O(1)

// Arrays; Ordered lists; there is an intrinsic ordering to the data, often useful when we need order, although this can come at a cost
// Ex.
// let names = ["Micheal", "Mellisa", "Andrea"];
// let values = [true, {}, [], 2, "awesome"];
// When to use arrays
// When you need order
// When you need fast access/insertion & removal(sort of ...)

// Big O of arrays
// Insertion- it depends ... where the insertion is to be made; at the beginning--> O(N) time, and at the end--> O(1) 
// Removal- It depends ... where the deletion is to be made; at the beginning--> O(N) time, and at the end--> O(1) 
// Searching- O(N)
// Access- O(1)
// push & pop always faster than shift & unshift.

// Big O of array methods
// push- O(1)
// pop- O(1)
// shift- O(N) ; we have to reindex every element in the array
// unshift- O(N) ; we have to reindex every element in the array
// concat- O(N)
// slice- O(N)
// splice- O(N)
// sort- O(N * log N)
// forEach/map/filter/reduce/etc. - O(N)

 