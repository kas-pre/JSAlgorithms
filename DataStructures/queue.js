// Queues
// A way to hold data, similar to a stack, but it is FirstInFirstOut; consider buying stuff in a shop, or even printing. 
// A queue can as well be implemented in an array, but to limit a queue to the traditional methods, you must create one yourself
// Let's look at implementation

function Queue () {
    collection = [];
    this.print = function() {
        console.log(collection);
    };
    // Pushes first item onto the queue
    this.enqueue = function(element) {
        collection.push(element);
    };
    // Removes an item at the end of the queue
    this.dequeue = function() {
        return collection.shift();
    };
    // Returns the item at the front of the array, wwithout removing it
    this.front = function() {
        return collection[0];
    };
    // To get the size of the queue
    this.size = function() {
        return collection.length;
    };
    this.isEmpty = function() {
        return (collection.length === 0);
    };
}

// Example
// var q = new Queue();
// q.enqueue('a');
// q.enqueue('b');
// q.enqueue('c');
// q.print();
// q.dequeue();
// console.log(q.front());
// q.print()

// Another way to create a queue is to create a priority queue
function PriorityQueue () {
    var collection = [];
    this.printCollection = function () {
        (console.log(collection));
    };
    this.enqueue = function(element) {
        if (this.isEmpty()) {
            collection.push(element);
        } else {
            var added = false;
            for (var i = 0; i < collection.length; i++) {
                if (element[1] < collection[i][1]){
                    // checking priorities
                    collection.splice(i,0,element);
                    added = true;
                    break;
                }
            }
            if (!added) {
                collection.push(element);
            }
        }
    };
    this.dequeue = function() {
        var value = collection.shift();
        return value[0];
    };
    this.front = function() {
        return collection[0];
    };
    this.size = function() {
        return collection.length;
    };
    this.isEmpty = function() {
        return (collection.length === 0);
    };
}

var pq = new PriorityQueue();
pq.enqueue(['Beau Carnes', 2]);
pq.enqueue(['Quincy Larson', 3]);
pq.enqueue(['Kasasira Precious', 1])
pq.printCollection();
pq.dequeue();
pq.front();
pq.printCollection();