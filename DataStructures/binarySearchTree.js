// Binary Search Tree
// A tree data structure is a way to hold data, such that when visualized, it looks like a tree
// All data pints in the tree are called nodes, the top of the tree is called the root node, which branches out into additinal nodes, each of which may have additional nodes, and so on.
// Nodes with branches leading to othr branches are referred to as parent of the nodes of the branches leading to the child
// Leaf nodes are nodes at the end of the tree that have no children.
// Also, any children of a node,are parents of their own subtree.
// While the tree data structure can have any number of branches at any particular node, a binary tree can only have two branches for every node.
// Also, binary search trees are ordered.
// Each subtree is less than or equal to the parent node and each right subtree is greater than or equal to the parent node
// Because they use the principle of binary search, on average, operations are able to skip about half the tree, so that each lookup, insertion, or deletin, takes time proportional to the logarithm of the number of items stored on the tree
// This is much better, than the liner time reequired by key, and in an unsorted array, but slower than the corresponding operations on a harsh table

// Let's use classes to create a binary search tree
// Two classes; the node class and the BST (Binary Search Tree) class
// The node class represnts each node in the tree. It has only 3 data priperties; data, this.left, this.right; pointing to left and right node
// In the BST, we have a constructor that creates the root node; the top of the tree.

class Node {
	constructor(data, left = null, right = null) {
		this.data = data;
		this.left = left;
		this.right = right;
	}
}

class BST {
	constructor() {
		this.root = null;
	}
	add(data) {
		const node = this.root;
		if (node === null) {
			this.root = new Node(data);
			return;
		} else {
			const searchTree = function(node) {
				if (data < node.data) {
					if (node.left === null) {
						node.left = new Node(data);
						return;
					} else if (node.left !== null) {
						return searchTree(node.left);
					} else if (data > node.data) {
						if (node.right === null) {
							node.right = new Node(data);
							return;
						} else if (node.right !== null) {
							return searchTree(node.right);
						}
					} else {
						return null;
					}
				}
			};
			return searchTree(node);
		}
	}
	findMin() {
		let current = this.root;
		while (current.left !== null) {
			current = current.left;
		}
		return current.data;
	}
	findMax() {
		let current = this.root;
		while (current.right !== null) {
			current = current.right;
		}
		return current.data;
	}
	find(data) {
		let current = this.root;
		while (current.data !== data) {
			if (data < current.data) {
				current = current.left;
			} else {
				current = current.right;
			}
			if (current === null) {
				return null;
			}
		}
		return current;
	}
	isPresent(data) {
		let current = this.root;
		while (current) {
			if (data === current.data) {
				return true;
			}
			if (data < current.data) {
				current = current.left;
			} else {
				current = current.right;
			}
			return false;
		}
	}
	remove(data) {
		const removeNode = function(node, data) {
			if (node == null) {
				return null;
			}
			if (data == node.data) {
				// node has no children
				if (node.left == null && node.right == null) {
					return null;
				}
				// node has no left child
				if (node.left == null) {
					return node.right;
				}
				// node has no right child
				if (node.right == null) {
					return node.left;
				}
				// node has two children
				var tempNode = node.right;
				while (tempNode.left !== null) {
					tempNode = tempNode.left;
				}
				node.data = tempNode.data;
				node.right = removeNode(node.right, tempNode.data);
				return node;
			} else if (data < node.data) {
				node.left = removeNode(node.left, data);
				return node;
			} else {
				node.right = removeNode(node.right, data);
				return node;
			}
		};
		this.root = removeNode(this.root, data);
	}
	isBalanced() {
		return this.findMinHeight() >= this.findMaxHeight() - 1;
	}
	findMinHeight(node = this.root) {
		if (node == null) {
			return -1;
		}
		let left = this.findMinHeight(node.left);
		7;
		let right = this.findMinHeight(node.right);
		if (left < right) {
			return left + 1;
		} else {
			return right + 1;
		}
	}
	findMaxHeight(node = this.root) {
		if (node == null) {
			return -1;
		}
		let left = this.findMaxHeight(node.left);
		let right = this.findMaxHeight(node.right);
		if (left > right) {
			return left + 1;
		} else {
			return right + 1;
		}
	}
	inOrder() {
		if (this.root == null) {
			return null;
		} else {
			var result = new Array();
			function traverseInOrder(node) {
				node.left && traverseInOrder(node.left);
				result.push(node.data);
				node.right && traverseInOrder(node.right);
			}
			traverseInOrder(this.root);
			return result;
		}
	}
	preOrder() {
		if (this.root == null) {
			return null;
		} else {
			var result = new Array();
			function traversePreOrder(node) {
				result.push(node.data);
				node.keft && traversePreOrder(node.left);
				node.right && traversePreOrder(node.right);
			}
			traversePreOrder(this.root);
			return result;
		}
	}
	postOrder() {
		if (this.root == null) {
			return null;
		} else {
			var result = new Array();
			function traversePostOrder(node) {
				node.left && traversePostOrder(node.left);
				node.right && traversePostOrder(node.right);
				result.push(node.data);
			}
			traversePostOrder(this.root);
			return result;
		}
	}
	levelOrder() {
		let result = [];
		let Q = [];
		if (this.root != null) {
			Q.push(this.root);
			while (Q.length > 0) {
				let node = Q.shift();
				result.push(node.data);
				if (node.left != null) {
					Q.push(node.left);
				}
				if (node.right != null) {
					Q.push(node.right);
				}
			}
			return result;
		} else {
			return null;
		}
	}
}

// const bst = new BST();
// bst.add(4);
// bst.add(2);
// bst.add(6);
// bst.add(1);
// bst.add(3);
// bst.add(5);
// bst.add(7);
// bst.remove(4);
// console.log(bst.findMin());
// console.log(bst.findMax());
// bst.remove(7);
// console.log(bst.findMax());
// console.log(bst.isPresent(4));

// Binary Search Tree: Traversal & Height
// Height in a tree represents the distance from the root node to any given leaf node
// Different paths in a highly branched tree structure may have different heights, but for a guven tree, there will be a minimum and maximum height.
// If the tree is balanced, thse values will differ at most by 1
// Searching through a balanced tree is much more efficient

const bst = new BST();

bst.add(9);
bst.add(4);
bst.add(17);
bst.add(3);
bst.add(6);
bst.add(22);
bst.add(5);
bst.add(7);
bst.add(20);

console.log(bst.findMinHeight());
console.log(bst.findMaxHeight());
console.log(bst.isBalanced());
bst.add(10);
console.log(bst.findMinHeight());
console.log(bst.findMaxHeight());
console.log(bst.isBalanced());
console.log('inOrder: ' + bst.inOrder());
console.log('preOrder: ' + bst.preOrder());
console.log('postOrder: ' + bst.postOrder());
console.log('levelOrder: ' + bst.levelOrder());