// Check Permutations
// Given two strings, write a method to decide if one is a permutation of the other

// Check if they are the same exact string else
// Check the lenghts of both strings else
// Create objects of each one
// Check if the objects character count are equal else
// Return true

const A = 'kunle';
const B = 'eunlk';
const C = 'boyds';

const IsObj = (str) => {
	let obj = {};
	for (let i of str) !obj[i] ? (obj[i] = 1) : obj[i]++;
	return obj;
};

const IsPermutation = (str1, str2) => {
	// Check if same exact string
	if (str1 === str2) return true;
	else {
		// Check the lengths of both strings
		if (str1.length !== str2.length) return false;
		else {
			// Create object of each one
            const obj1 = IsObj(str1);
            const obj2 = IsObj(str2);
            // Check if the objects character count are equal
            for (let i in obj1) {
                if(obj1[i] !== obj2[i])
                    return false;   
            }
		}
	}
    return true;
};

console.log({
    IsPermutation: IsPermutation(A, B)
})