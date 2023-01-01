let a ;
// let  it is keyword which can only declare a variable 
a = 10;
// using for loop
// for - loops through a block of code a number of times
// for(let i =1; i<=a; i++)
// {
//     console.log("Count of ten using for  :"+ i);
// }

// using while loop
// while - loops through a block of code while a specified condition is true
// let i;
// i=1;
// while(i<=a)
// {
//     console.log("Count of ten using while : " + i);
//     i++;
// }
//      **************    REMEMBER THE SYNTAX    *************** //

// for/in - loops through the properties of an object
// its argument an object and the object's name. It then iterates over all the object's properties and returns a string that lists the property names and their values.

// for/of - loops through the values of an iterable object


// do/while - also loops through a block of code while a specified condition is true
let i = 0;
do {
  i += 1;
  console.log(i);
} while (i < a);
