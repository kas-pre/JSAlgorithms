// Objectives
// Define what a singly linked list is
// Compare and contrast linked lists with arrays
// Implement insertion, removal and traversal methods on singly linked lists

// What is a linked list?
// A data structure that contains a head, tail and length property
// Linked lists consist of nodes, and each node has a value and a pointer to another node or null

// Comparisons with arrays
// Lists
// Do not have indexes.
// Connected via nodes with a next pointer
// Random acces is not allowed.

// Arrays
// Indexed in order
// Insertion and deletion can be expensive
// Can quickly be accessed at a specific index

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class SinglylinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	// Push - add a new node to the end of the linked list!
	// This function should accept a value
	// Create a new node using the value passed to the function
	// If there is no head property on the list, set the head and tail to be the newly created node
	// Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
	// Increment the length by one
	// Return the linked list
	push(val) {
		var newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}
	// Pop - removes a node from the end of the linked list
	// If there are no nodes in the list, return undefined
	// Loop through the list until you reach the tail
	// Set the next property of the 2nd to last node to be null
	// Setbthe tail to be the 2nd to last node
	// Decrement the length of the list by 1
	// Return the value of the node removed
	pop() {
		if (!this.head) return undefined;
		var current = this.head;
		var newTail = current;
		while (current.next) {
			newTail = current;
			current = current.next;
		}
		this.tail = newTail;
		this.tail.next = null;
		this.length--;
		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return current;
	}
	// Shift - remove a new node from the beginning of the linked list
	// If there are no nodes, return undefined
	// Store the current head property in a variable
	// Set the head property to be the current head's next property
	// Decrement the length by 1
	// Return the value of the node removed
	shift() {
		if (!this.head) return undefined;
		var currentHead = this.head;
		this.head = currentHead.next;
		this.length--;
		if (this.length === 0) {
			this.tail = null;
		}
		return currentHead;
	}
	// Unshift - adds a new node to the beginning of a linked list
	// This function should accept a value
	// Create a new node using the value passed to the function
	// If there is no head property on the list, set the head and tail to be the newly created node
	// Otherwise set the newly created node's next property to be the current head property on the list
	// Set the head property on the list to be that newly created node
	// Increment the length of the list by 1
	// Return the linked list
	unshift(val) {
		var newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode; // this.head
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return this;
	}
	// Get - retrieve a node by it's position in the linked list
	// This function should accept an index
	// If the index is less than 0, or greater than or equal to the length of the list, return null
	// Loop through the list until you reach the index and return the node at that specific index
	get(index) {
		if (index < 0 || index >= this.length) return null;
		var counter = 0;
		var current = this.head;
		while (counter !== index) {
			current = current.next;
			counter++;
		}
		return current;
	}
	// Set - change the value of a node based on it's position in the linked list
	// This function should accept a value and an index
	// Use your get function to find the specific node
	// If the node is not found, return false
	// If the node is found, set the value of that node to be the value passed to the function and return true
	set(index, val) {
		var foundNode = this.get(index);
		if (foundNode) {
			foundNode.val = val;
			return true;
		}
		return false;
	}
	// Insert - adds a node to the linked list at a specified position
	// This function should accept an index and a value
	// create a new node
	// If the index is less than zero, or greater than the length, return false
	// If the index is the same as the length, push a new node to the end of the list
	// If the index is 0, unshift a new node to the start of the list
	// Otherwise using the get method, access the node at the index -1
	// Set the next property on that node to be the new node
	// Set the next property on the new node to be the previous next
	// Increment the length
	// Return true
	insert(index, val) {
		if (index < 0 || index > this.length) return false;
		if (index === this.length) return this.push(val);
		if (index === 0) return this.unshift(val);
		var newNode = new Node(val);
		var prev = this.get(index - 1);
		var temp = prev.next;
		prev.next = newNode;
		newNode.next = temp;
		this.length++;
		return true;
	}
	// Remove - removes a node from the linked list at a specified position
	// This function accepts an index and a value
	// If the index is lees than 0 or greater than the length, return undefined
	// If the index is the same as the length-1, pop
	// If the index is 0, shift
	// Otherwise using the get method, access the node at index -1
	// Set the next property on that node to be the next of the next node
	// Decrement the length
	// Return the value of the node removed
	remove(index) {
		if (index < 0 || index >= this.length) return undefined;
		if (index === 0) return this.shift();
		if (index === this.length - 1) return this.pop();
		var previousNode = this.get(index - 1);
		var removed = previousNode.next;
		previousNode.next = removed.next;
		this.length--;
		return removed;
	}
	// Reverse - reverse the linked list in place
	// Swap the head and tail
	// Create a variable called next, another callled previous
	// Create a variable called node and initialise it to the head property
	// Loop through the list
	// Set next to be the next property on whatever node is
	// Set the next property  on the node to be whatver prev is
	// Set prev to be the value of the node variable
	// Set the node variable to be the value of the bext variable
	reverse() {
		var node = this.head;
		this.head = this.tail;
		this.tail = node;
		var next;
        var prev = null;
		for (var i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
	}
	print() {
		var arr = [];
		var current = this.head;
		while (current) {
			arr.push(current.val);
			current = current.next;
		}
		console.log(arr);
	}
}

var list = new SinglylinkedList();

list.push('Hi There');

list.push('Come Here');

list.push('We go home');

console.log(list);

list.unshift(10);

console.log(list.print());

// Big O of singly linked lists
// Insertion - O(1)
// Removal - It depends O(1) or O(N)
// Searching - O(N)
// Access - O(N)

// Singly linked lists excel at insertion & deletion


