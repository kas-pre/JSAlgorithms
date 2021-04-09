// Linked Lists
// A common data structure where elements are stored in a nbode
// The node contains 2 pieces of information; the element itself, and the reference to the next node
// Like arrays, linked lists can be used to implement other data structures
// Linked lists have a dynamic size, efficient insertions and deletions, no random access, no waste of memory, and sequential access is slow because elements are not in contiguous memory locations
// Every linked list has a head pointer, a size(amount of nodes), each node pointing to the next in line, and the last null

function LinkedList() {
    var length = 0;
    var head = null;

    var Node = function(element) {
        this.element = element;
        this.next = null;
    };
    this.size = function(){
        return length;
    };
    this.add = function(element) {
        var node = new Node(element);
        if (head === null) {
            head = node;
        } else {
            currentNode = head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
        length++;
    };
    this.remove = function(element) {
        var currentNode = head;
        var previousNode;
        if (currentNode.element === element) {
            head = currentNode.next;
        } else {
            while(currentNode.element !== element) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
        }
        length --;
    };
    this.isEmpty = function() {
        return length === 0;
    };
    this.indexOf = function(element) {
        var currentNode = head;
        var index = -1;

        while(currentNode) {
            index++;
            if (currentNode.element === element) {
                return index;
            }
            currentNode = currentNode.next;
        }
        return -1
    };
    this.elementAt = function(index) {
        var currentNode = head;
        var count = 0;
        while(count < index) {
            count ++;
            currentNode = currentNode.next
        }
        return currentNode.element;
    };
    this.addAt = function(index, element) {
        var node = new Node(element);

        var currentNode = head;
        var previousNode;
        var currentIndex = 0;

        if (index > length) {
            return false;
        }
        if (index === 0) {
            node.next = currentNode;
            head = node;
        } else {
            while(currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            node.next = currentNode;
            previousNode.next = node;
        }
        length++;
    }
    this.removeAt = function(index) {
        var currentNode = head;
        var previousNode;
        var currentIndex = 0;
        if (index < 0 || index >= length)  {
            return null
        }
        if (index === 0) {
            head = currentNode.next;
        } else {
            while(currentIndex < index) {
                currentIndex ++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next
        }
        length--;
        return currentNode.element;
    }
}

var conga = new LinkedList();
conga.add('Kitten');
conga.add('Puppy');
conga.add('Dog');
conga.add('Cat');
conga.add('Fish');
console.log(conga.size());
console.log(conga.removeAt(3));
console.log(conga.elementAt(3));
console.log(conga.indexOf('Puppy'));
console.log(conga.size());