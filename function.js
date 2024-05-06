
// *****************************************************  FUNCTION IN JS **************************************************************

// Function Declaration 

// 1)function name(parameter1, parameter2, ... parameterN) 
// {
// body
// }

// let arr = [  "Alice", "Bob", "Xander", "Yara", "Zoe"]

// const ages = arr.map(()=>{

// })
// console.log(ages);





// let arr = [  "Alice", "Bob", "Xander", "Yara", "Zoe"]

const { log } = require("console");

// const ages = arr.map((item)=>{

// })

// console.log(ages);

// const ages = arr.map((item)=>{
//   console.log(item);
// })

// const fruits = [
//   {
//     name: "Apple",
//     color: "Red",
//     price: 500,
//   },
//   {
//     name: "Banana",
//     color: "Yellow",
//     price: 50,
//   },
//   {
//     name: "Orange",
//     color: "Orange",
//     price: 51,
//   },
//   {
//     name: "Pineapple",
//     color: "Yellowish",
//     price: 100,
//   },
//   {
//     name: "grapes",
//     color: "green",
//     price: 150,
//   },
// ];

// const fruitsWithPrice = fruits.map((item)=>{
//   return item.price*1.5;
// })
// const fruitsWithOnlyColor = fruits.map((item)=>{
//   return item.color;
// })
// console.log(fruitsWithOnlyColor);

// const fruitsWithColor = fruits.map((item)=>{
//   return{
//     Name : item.name.toUpperCase(),
//     NewColor: item.color.toLowerCase()
//   }
// })
// console.log(fruitsWithColor);

// const fruitsWithName = fruits.map((item) => item.name);
// console.log(fruitsWithName)

// How to get only unique values

//  

//************************************  dynamic object keys ************************************

// const person = {
//   name : "Alice"
// }

// person.age = 32;
// person.name = "Bob";
// person.job = "Software Engineer";
// person.location = "New York";
// console.log(person);

// console.log(person.name);
// // console.log(person[name]); //bad // wrong
// console.log(person["name"]);

// const updateState = (obj,key, value) =>{
//   obj[key]=value;
// }

// console.log(person);
// updateState(person,"age",33);
// console.log(person);

// updateState(person,'school','cambridge');
// console.log(person);
// console.log(person.school);

// *************************************     Filter and find     *************************************

// const people = [
//   {
//     name: "Alice",
//     age: 30,
//     position: "Manager",
//     netWorth: 100000,
//   },
//   {
//     name: "Bob",
//     age: 35,
//     position: "Developer",
//     netWorth: 80000,
//   },
//   {
//     name: "Charlie",
//     age: 40,
//     position: "Designer",
//     netWorth: 70000,
//   },
//   {
//     name: "David",
//     age: 45,
//     position: "Analyst",
//     netWorth: 90000,
//   },
//   {
//     name: "Eve",
//     age: 28,
//     position: "Engineer",
//     netWorth: 75000,
//   },
//   {
//     name: "Frank",
//     age: 50,
//     position: "Director",
//     netWorth: 120000,
//   },
//   {
//     name: "Grace",
//     age: 33,
//     position: "Manager",
//     netWorth: 95000,
//   },
//   {
//     name: "Hannah",
//     age: 38,
//     position: "Designer",
//     netWorth: 85000,
//   },
//   {
//     name: "Ivan",
//     age: 42,
//     position: "Analyst",
//     netWorth: 110000,
//   },
//   {
//     name: "Jack",
//     age: 32,
//     position: "Developer",
//     netWorth: 82000,
//   },
// ];

// const young = people.filter((item) => {
//   return item.age < 30;
// });
// console.log(young);
// const rich = people.filter((item) =>item.netWorth>=80000)
// console.log(rich);


// **************************** Normal and Arrow Function **********************************


function regularFunction(parameter1, parameter2) {
    // function body
    return parameter1+parameter2;
}
const arrowFunction = (parameter1, parameter2) => {
    // function body
    return parameter1+parameter2;
  };