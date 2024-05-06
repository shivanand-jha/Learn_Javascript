



// Array methods with an example:
// 1. Array.prototype[@@iterator]:
//     ◦ This method returns an iterator object that can be used to iterate over the elements of an array. 
//     ◦ Example:
    //   const arr = [1, 2, 3];
    //   const iterator = arrSymbol.iterator;
    //   for (const value of iterator) {
    //     console.log(value);
    //   }
//       // Output: 1, 2, 3


// 2. Array.prototype.at():
//     ◦ This method returns the element at the specified index in the array. 
//     ◦ Example:
//       const arr = [10, 20, 30];
//       console.log(arr.at(1)); // Output: 20
      
// 3. Array.prototype.concat():
//     ◦ This method combines two or more arrays and returns a new array. 
//      ◦ Example:
//       const arr1 = [1, 2];
//       const arr2 = [3, 4];
//       const combinedArr = arr1.concat(arr2);
//       console.log(combinedArr); // Output: [1, 2, 3, 4]

// 4. Array.prototype.copyWithin():
//     ◦ This method copies a portion of an array to another location within the same array. 
//     ◦ Example:
//       const arr = [1, 2, 3, 4, 5];
//       arr.copyWithin(0, 2, 4);
//       console.log(arr); // Output: [3, 4, 3, 4, 5]

// 5. Array.prototype.entries():
//     ◦ This method returns an iterator that yields key-value pairs for each index in the array. 
//     ◦ Example:
//       const arr = ['a', 'b', 'c'];
//       const iterator = arr.entries();
//       for (const [index, value] of iterator) {
//         console.log(`Index ${index}: ${value}`);
//       }
      // Output: Index 0: a, Index 1: b, Index 2: 

// 6. Array.prototype.every():
//     ◦ This method checks if all elements in the array satisfy a given condition. 
//     ◦ Example:
    //   const arr = [10, 20, 30];
    //   const allGreaterThanZero = arr.every((num) => num > 0);
    //   console.log(allGreaterThanZero); // Output: true
// 7. Array.prototype.fill():
//     ◦ This method fills all elements of an array with a specified value. 
//     ◦ Example:
//       const arr = [1, 2, 3];
//       arr.fill(0);
//       console.log(arr); // Output: [0, 0, 0]
// 8. Array.prototype.filter():
//     ◦ This method creates a new array with all elements that pass a given test. 
//     ◦ Example:
//       const arr = [10, 20, 30, 40];
//       const filteredArr = arr.filter((num) => num > 20);
//       console.log(filteredArr); // Output: [30, 40]
// 9. Array.prototype.find():
//     ◦ This method returns the first element in the array that satisfies a given condition. 
//     ◦ Example:
//       const arr = [10, 20, 30];
//       const foundElement = arr.find((num) => num > 15);
//       console.log(foundElement); // Output: 20
// 10. Array.prototype.findIndex():
//     ◦ This method returns the index of the first element in the array that satisfies a given condition. 
//     ◦ Example:
//       const arr = [10, 20, 30];
//       const foundIndex = arr.findIndex((num) => num > 15);
//       console.log(foundIndex); // Output: 1
// 11. Array.prototype.findLast():
//     ◦ This method returns the last element in the array that satisfies a given condition. 
//     ◦ Example:
//       const arr = [10, 20, 30, 20];
//       const lastFoundElement = arr.findLast((num) => num === 20);
//       console.log(lastFoundElement); // Output: 20




// 12. Array.prototype.findLastIndex():
//     ◦ This method returns the index of the last element in the array that satisfies a given condition. 
//     ◦ Example:
//       const arr = [10, 20, 30, 20];
//       const lastFoundIndex = arr.findLastIndex((num) => num === 20);
//       console.log(lastFoundIndex); // Output: 3

// 13. Array.prototype.flat():
//     ◦ This method creates a new array by flattening subarrays within the original array. 
//     ◦ Example:
    //   const nestedArr = [1, [2, 3], [4, [5]]];
    //   const flatArr = nestedArr.flat();
    //   console.log(flatArr); // Output: [1, 2, 3, 4, [5]]
// 14. Array.prototype.flatMap():
//     ◦ This method combines mapping and flattening by applying a function to each element and then flattening the result. 
//     ◦ Example:
//       const arr = [1, 2, 3];
//       const doubledAndFlattened = arr.flatMap((num) => [num * 2]);
//       console.log(doubledAndFlattened); // Output: [2, 4, 6]
// 15. Array.prototype.forEach():
//     ◦ This method executes a provided function once for each array element. 
//     ◦ Example:
//       const arr = [10, 20, 30];
//       arr.forEach((num) => {
//         console.log(`Number: ${num}`);
//       });
//       // Output: Number: 10, Number: 20, Number: 30
// 16. Array.from():
//     ◦ This static method creates a new array from an iterable object (e.g., array-like objects or strings). 
//     ◦ Example:
//       const str = 'hello';
//       const charArray = Array.from(str);
//       console.log(charArray); // Output: ['h', 'e', 'l', 'l', 'o']

// 17. Array.prototype.includes():
//     ◦ This method checks if an array contains a specific element and returns a boolean. 
//     ◦ Example:
//       const arr = [10, 20, 30];
//       const hasTwenty = arr.includes(20);
//       console.log(hasTwenty); // Output: true

// 18. Array.prototype.indexOf():
//     ◦ This method returns the first index at which a given element can be found in the array. 
//     ◦ Example:
//       const arr = [10, 20, 30];
//       const index = arr.indexOf(20);
//       console.log(index); // Output: 1

// 19. Array.isArray():
//     ◦ This static method checks if a value is an array. 
//     ◦ Example:
//       const arr = [1, 2, 3];
//       const isArr = Array.isArray(arr);
//       console.log(isArr); // Output: true
// 20. Array.prototype.join():
//     ◦ This method joins all elements of an array into a single string using a specified separator. 
//     ◦ Example:
//       const arr = ['apple', 'banana', 'cherry'];
//       const joinedString = arr.join(', ');
//       console.log(joinedString); // Output: 'apple, banana, cherry'
// 21. Array.prototype.lastIndexOf():
//     ◦ This method returns the last index at which a given element can be found in the array, searching from right to left. 
//     ◦ Example:
//       const arr = [10, 20, 30, 20];
//       const lastIndex = arr.lastIndexOf(20);
//       console.log(lastIndex); // Output: 3



// 22. Array.prototype.map():
//     ◦ This method creates a new array by applying a function to each element in the original array. 
//     ◦ Example:
//       const arr = [1, 2, 3];
//       const squaredArr = arr.map((num) => num * num);
//       console.log(squaredArr); // Output: [1, 4, 9]
// 23. Array.of():
//     ◦ This static method creates a new array with the specified elements. 
//     ◦ Example:
//       const newArr = Array.of(10, 20, 30);
//       console.log(newArr); // Output: [10, 20, 30]
// 24. Array.prototype.pop():
//     ◦ This method removes the last element from an array and returns that element. 
//     ◦ Example:
//       const arr = [1, 2, 3];
//       const poppedElement = arr.pop();
//       console.log(poppedElement); // Output: 3
// 25. Array.prototype.push():
//     ◦ This method adds one or more elements to the end of an array and returns the new length of the array. 
//     ◦ Example:
//       const arr = [1, 2];
//       const newLength = arr.push(3, 4);
//       console.log(arr); // Output: [1, 2, 3, 4]
//       console.log(newLength); // Output: 4
// 26. Array.prototype.reduce():
//     ◦ This method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value. 
//     ◦ Example:
//       const arr = [1, 2, 3, 4];
//       const sum = arr.reduce((acc, num) => acc + num, 0);
//       console.log(sum); // Output: 10


// 27. Array.prototype.reduceRight():
//     ◦ This method is similar to reduce(), but it processes the array from right to left. 
//     ◦ Example:
//       const arr = [1, 2, 3, 4];
//       const reversedSum = arr.reduceRight((acc, num) => acc + num, 0);
//       console.log(reversedSum); // Output: 10
// 28. Array.prototype.reverse():
//     ◦ This method reverses the order of elements in an array. 
//     ◦ Example:
//       const arr = [1, 2, 3];
//       arr.reverse();
//       console.log(arr); // Output: [3, 2, 1]
// 29. Array.prototype.shift():
//     ◦ This method removes the first element from an array and returns that element. 
//     ◦ Example:
//       const arr = [1, 2, 3];
//       const shiftedElement = arr.shift();
//       console.log(shiftedElement); // Output: 1
// 30. Array.prototype.slice():
//     ◦ This method extracts a section of an array and returns a new array. 
//     ◦ Example:
//       const arr = [1, 2, 3, 4, 5];
//       const slicedArr = arr.slice(1, 4);
//       console.log(slicedArr); // Output: [2, 3, 4]
      
// 31. Array.prototype.some():
//     ◦ This method checks if at least one element in the array satisfies a given condition. 
//     ◦ Example:
//       const arr = [10, 20, 30];
//       const hasTwenty = arr.some((num) => num === 20);
//       console.log(hasTwenty); // Output: true
// 32. Array.prototype.sort():
//     ◦ This method sorts the elements of an array in place (mutates the original array). 
//     ◦ Example:
//       const arr = [3, 1, 2];
//       arr.sort();
//       console.log(arr); // Output: [1, 2, 3]
// 33. Array.prototype.splice():
//     ◦ This method changes the contents of an array by removing, replacing, or adding elements. 
//     ◦ Example:
//       const arr = [1, 2, 3, 4];
//       arr.splice(1, 2, 'a', 'b');
//       console.log(arr); // Output: [1, 'a', 'b', 4]
// 34. Array.prototype.toLocaleString():
//     ◦ This method returns a string representing the elements of the array, localized according to the user’s locale. 
//     ◦ Example:
//       const arr = [1000, 2000, 3000];
//       const localizedString = arr.toLocaleString('en-US');
//       console.log(localizedString); // Output: '1,000, 2,000, 3,000'
// 35. Array.prototype.toReversed():
//     ◦ (Note: This method is fictional and created for illustrative purposes.) 
//     ◦ Hypothetically, this method could reverse the order of elements in an array. 
//     ◦ Example (hypothetical):
//       const arr = [1, 2, 3];
//       const reversedArr = arr.toReversed();
//       console.log(reversedArr); // Output: [3, 2, 1]
// 36. Array.prototype.toSorted():
//     ◦ (Note: This method is fictional and created for illustrative purposes.) 
//     ◦ Hypothetically, this method could sort the elements of an array. 
//     ◦ Example (hypothetical):
//       const arr = [3, 1, 2];
//       const sortedArr = arr.toSorted();
//       console.log(sortedArr); // Output: [1, 2, 3]
// 37. Array.prototype.toSpliced():
//     ◦ (Note: This method is fictional and created for illustrative purposes.) 
//     ◦ Hypothetically, this method could splice elements in an array. 
//     ◦ Example (hypothetical):
//       const arr = [1, 2, 3, 4];
//       const splicedArr = arr.toSpliced(1, 2, 'a', 'b');
//       console.log(splicedArr); // Output: [1, 'a', 'b', 4]


// 38. Array.prototype.toString():
//     ◦ This method converts an array to a string representation. 
//     ◦ Example:
//       const arr = [1, 2, 3];
//       const arrString = arr.toString();
//       console.log(arrString); // Output: '1,2,3'
// 39. Array.prototype.unshift():
//     ◦ This method adds one or more elements to the beginning of an array and returns the new length. 
//     ◦ Example:
//       const arr = [2, 3];
//       const newLength = arr.unshift(1);
//       console.log(arr); // Output: [1, 2, 3]
//       console.log(newLength); // Output: 3

//       // Output: 'a', 'b', 'c'
// 41. Array.prototype.with():
//    
// const arr = [1, 2, 3, 4, 5];
// console.log(arr.with(2, 6)); // [1, 2, 6, 4, 5]
// console.log(arr); // [1, 2, 3, 4, 5]


// function categorizeArray(arr, condition) {
//     const categorizedArr = arr.filter(condition);
//     return categorizedArr;
//   }
  
  // Example usage
//   const arr = [10, 20, 30, 40, 50];
//   const categorizedArr = categorizeArray(arr, (num) => num === 30);
//   console.log(categorizedArr); // Output: [30]
//    Output: [[10, 20], [30], [40, 50]]