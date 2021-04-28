// Introduction to data structures

// What do they do?
// Data structures are collections of values, the relationships among them, and the functions or operations that can be applied to the data

// Why are they so many?
// Different data structures excel at different things.
// Some are highly specialized, while others (like arrays) are more generally used.

// Why care?
// The more time you spend as a developer, the more you likely need to use one of these data structures
// You have already worked with many of them unknowingly
// Prep interviews

// There is no one best data structure. They all excel in different situations.

// Eg. working with map/location data? use a graph. Need an ordered list with fast inserts/removals at the beginning and the end? use a linked list.
// Web scraping nested HTML? use a tree.
// Need to write a scheduler? use a binary heap.

// Now we just need to learn a bit of ES2015 syntax that we will use along the way

// ES2015 Class Syntax
// Objectives
// Explain what a class is
// Understand how JS implements the idea of classes
// Define terms like abstraction, encapsulation & polymorphism
// Use ES2015 classes to implement data structures

// What is a class?
// A blueprint for creating objects with predetermined properties and methods

// Why do we need to learn this?
// We are going to implement data structures as classes

// The Syntax
// class Student {
// 	constructor(firstName, lastName) {
// 		this.firstName = firstName;
// 		this.lastName = lastName;
// 	}
// }

// The method to create new objects must be called constructor
// The class keyword creates a constant, so you cannot redefine it.
// Watch out for the syntax as well.

// Creating objects from classes
// We use the new keyword
// class Student {
// 	constructor(firstName, lastName, year) {
// 		this.firstName = firstName;
// 		this.lastName = lastName;
//         this.grade = year;
// 	}
// }

// let firstStudent = new Student('Colt', 'Steele');
// let secondStudent = new Student('Blue', 'Steele');

// console.log(firstStudent.firstName)

// Instance Methods
// class Student {
// 	constructor(firstName, lastName, year) {
// 		this.firstName = firstName;
// 		this.lastName = lastName;
// 		this.grade = year;
// 		this.tardies = 0;
// 		this.scores = [];
// 	}
// 	fullName() {
// 		return `Your full name is ${this.firstName} ${this.lastName}`;
// 	}
// 	markLate() {
// 		this.tardies += 1;
// 		if (this.tardies >= 3) {
// 			return 'YOU HAVE BEEN EXPELLED!!!!';
// 		}
// 		return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
// 	}
// 	addScore(score) {
// 		this.scores.push(score);
// 		return this.scores;
// 	}
// 	calculateAverage() {
// 		let sum = this.scores.reduce(function(a, b) {
// 			return a + b;
// 		});
// 		return sum / this.scores.length;
// 	}
// }

// let firstStudent = new Student('Colt', 'Steele', 3, 6);

// console.log(firstStudent.markLate());

// console.log(firstStudent.addScore(87));

// console.log(firstStudent.addScore(96));

// console.log(firstStudent.calculateAverage());

// Class Methods
// class Student {
// 	constructor(firstName, lastName, year) {
// 		this.firstName = firstName;
// 		this.lastName = lastName;
// 		this.grade = year;
// 		this.tardies = 0;
// 		this.scores = [];
// 	}
// 	fullName() {
// 		return `Your full name is ${this.firstName} ${this.lastName}`;
// 	}
// 	static enrollStudents(...students) {
// 		// maybe send an email here
// 	}
// }

// let firstStudent = new Student('Colt', 'Steele');

// let secondStudent = new Student('Blue', 'Steele');

// console.log(Student.enrollStudents([ firstStudent, secondStudent ]));

// Ex. 2
// class Point {
// 	constructor(x, y) {
// 		this.x = x;
// 		this.y = y;
// 	}

// 	static distance(a, b) {
// 		const dx = a.x - b.x;
// 		const dy = a.y - b.y;

// 		return Math.hypot((dx, dy));
// 	}
// }

// const p1 = new Point(5, 5);
// const p2 = new Point(10, 10);

// console.log(Point.distance(p1, p2));

// How we will be using classes
// class DataStructure {
//     constructor() {
//         // What default properties should it have?
//     }
//     someInstanceMethod() {
//         // What should each object created from this class be able to do?
//     }
// }

// We will be using the constructor and instance methods quite a bit.
// We will almost never be using static methods

// Remember, inside all of our instance methods and constructor, the keyword `this` refers to the object created from that class (also known as an instance)

// Recap
// Classes are blueprints that when created make objects known as instances
// Classes are created with the new keyword
// The constructor function is a special function that gets run when the class is instantiated
// Instance methods can be added to classes similar to methods in objects
// Class methods can be added using the static keyword