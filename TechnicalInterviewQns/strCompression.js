// Implement a method to perform a basic string compression using the counts of repreated characters.
// Forexample 'abcdd'--> 'abcd2'
// If characters are not unique, just return the string as it is

// We need a count variable to keep track of each character (count=1);
// We also need another count variable for cases when each characters are unique
// Loop(
//     if arr[i] = arr[i+1], count++;
//     increment i
//     else output: a[i]+count
//     uniqCount++
//     increment i
// )
// If totCount = str length, then return str

const stringCompression = (str) => {
    const n = str.length;
    let count=1, output='', uniqCount=0;
    for(let i = 0; i < n; i++) {
        if(str[i] === str[i+1])
            count++;
        else {
            output += str[i]+count;
            count = 1;
            uniqCount++;
        }
    }
    if (uniqCount===n) return str;
    else return output;
}

console.log({
    "aabccccaaa": stringCompression("aabccccaaa"),
    "abcd": stringCompression("abcd")
})