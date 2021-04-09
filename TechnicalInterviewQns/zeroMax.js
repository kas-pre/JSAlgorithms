// Zero Matrix Algorithm
// Write an alorith such that if an element in an NxN matrix is 0, its entire row and column are set to 0.

// Find the elemt and mark it
// Find the row and column numbers
// Make zero 0<row-1<n
// Make zero 0<col-1<n

const _matrix = [ [ 4, 1, 3 ], [ 2, -4, 0 ], [ 5, 9, 2 ] ];

const zeroMatrix = (matrix, n) => {
	// Mark the positions
	for (let r = 0; r < n; r++) {
		for (let c = 0; c < n; c++) {
			if (matrix[r][c] === 0) matrix[r][c] = true;
		}
	}
	// Find the locations and zero them
	for (let r = 0; r < n; r++) {
		for (let c = 0; c < n; c++) {
			if (matrix[r][c] === true) {
				// zero row
				for (let i = 0; i < n; i++) matrix[r][i] = 0;
				// zero col
				for (let i = 0; i < n; i++) matrix[c][i] = 0;
			}
		}
	}
	return matrix;
};

console.log(zeroMatrix(_matrix, 3))