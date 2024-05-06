const { log } = require("console")


// These String methods works in both java as well as javascript programming language.


let a = "     so live a life you will remember     "

// 1. `length()`: Returns the length (number of characters) of the string.
log(a.length);

// 4. `charAt(int index)`: Returns the character at the specified index.
log(a.charAt(6));
// 5. `substring(int beginIndex, int endIndex)`: Extracts a substring from the original string based on the specified indices.
log(a.substring(4,12));
// 6. `startsWith(String prefix)`: Checks if the string starts with the specified prefix.
log(a.substring(4,12).startsWith(" so"));
// 7. `endsWith(String suffix)`: Checks if the string ends with the specified suffix.
log(a.endsWith("ber     "));
//  `toUpperCase()`: Converts the string to uppercase.
log(a.toUpperCase());
// `toLowerCase()`: Converts the string to lowercase.
log(a.toLowerCase());
// `trim()`: Removes leading and trailing whitespace from the string.
log(a.trim() ,a);
a= a.trim();
//  `indexOf(String str)`: Finds the index of the first occurrence of a substring within the string.
log(a.indexOf("so"));
//  `replace(char oldChar, char newChar)`: Replaces all occurrences of `oldChar` with `newChar`.
log(a.replace("so", "Yeah"));
//  `split(String regex)`: Splits the string into an array of substrings based on a regular expression.
log(a.split(" "));

//  `concat(String str)`: Concatenates the given string to the end of the original string.
log(a.concat(" OK Concatenation works "))
//  `valueOf(Object obj)`: Converts an object (including primitive types) to its string representation.
// log(a.valueOf(['so']));


