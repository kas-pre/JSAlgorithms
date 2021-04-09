// Print a fibonacci sequence using recursion
// Given a number, n, print the nth element of the fibonacci sequence.
// If n = 5, print the fifth Fibonacci number.
// Number in line is a sum of the two preceding numbers

//  n = 5
// fib(4)+fib(3)
// fib(3) + fib(2) + fib(2) + fib(1)
// fib(3) + 1 + 1 + 1

function fib(n) {
	if (n <= 2) {
		return 1;
	}
	return fib(n - 1) + fib(n - 2);
}

n = 6
console.log(fib(n));
