// Write a mmethod to replace all spaces in a string with %20
// Assume that there is sufficient space at the end

// Loop through the string until you encounter white space
// Replace with %20

// Check to see if the string last element is white space
// Convert string to array
// join with %20

// str - string
// n is size of string - ignoring ending white spaces
const Urlify = ((str, n) => {
    let newStr = "";
    for (let i = 0; i<n; i++) {
        if(str[i] === " ") 
            newStr += "%20";
        else 
         newStr += str[i]; 
    }
    console.log(newStr);
})("Mr John Smith", 13)

Urlify;
