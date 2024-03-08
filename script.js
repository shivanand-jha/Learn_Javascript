// var foo = [1, 2];
// var bar = foo;

// bar[0] = 9;

// console.log(foo[0], bar[0],bar); // => 9, 9
// bad
// var superman = {
//     default: { clark: 'kent' },
//     private: true
//   };
//   console.log(superman);
//   // good
//   var superman = {
//     defaults: { clark: 'kent' },
//     hidden: true
//   };
//   console.log(superman);
//   // bad
// var superman = {
//     class: 'alien'
//   };
//   console.log(superman);
//   // bad
//   var superman = {
//     klass: 'alien'
//   };
//   console.log(superman);
//   // good
//   var superman = {
//     type: 'alien'
//   };
//   console.log(superman);

// var items = 'Shivanand kumar jha'
// var len = items.length;
// var itemsCopy = [];
// var i;

// console.log(itemsCopy);
// // bad
// for (i = 0; i < len; i++) {
//   itemsCopy[i] = items[i];
// }
// console.log(itemsCopy);
// var itemsCopy = [];
// // good
// itemsCopy = items.slice();
// console.log(itemsCopy);


// // bad
// var name = "Bob Parr";
// console.log(name);
// // good
// var name = 'Bob Parr';
// console.log(name);
// // bad
// var fullName = "Bob " + this.lastName;
// console.log(fullName);
// // good
// var fullName = 'Bob ' + this.lastName;
// console.log(fullName);




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

// const menu = [
//   {
//     name: "Item1",
//     category: "Category1",
//     price: 10,
//     id: 1,
//   },
//   {
//     name: "Item2",
//     category: "Category2",
//     price: 20,
//     id: 2,
//   },
//   {
//     name: "Item3",
//     category: "Category1",
//     price: 15,
//     id: 3,
//   },
//   {
//     name: "Item4",
//     category: "Category2",
//     price: 25,
//     id: 4,
//   },
//   {
//     name: "Item5",
//     category: "Category1",
//     price: 12,
//     id: 5,
//   },
//   {
//     name: "Item6",
//     category: "Category2",
//     price: 22,
//     id: 6,
//   },
//   {
//     name: "Item7",
//     category: "Category1",
//     price: 18,
//     id: 7,
//   },
//   {
//     name: "Item8",
//     category: "Category2",
//     price: 28,
//     id: 8,
//   },
//   {
//     name: "Item9",
//     category: "Category1",
//     price: 14,
//     id: 9,
//   },
//   {
//     name: "Item10",
//     category: "Category2",
//     price: 30,
//     id: 10,
//   }
// ];

// const uniqueCategory = [new Set(menu.map((item)=> item.category))];
// console.log(uniqueCategory);

// const uniqueCategory = [...new Set(menu.map((item)=> item.category))];
// console.log(uniqueCategory);

// console.log(uniqueCategory.map((item)=>item +' is '+'a great category'));

//************************************  dynamic oject keys ************************************

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

const people = [
  {
    name: "Alice",
    age: 30,
    position: "Manager",
    netWorth: 100000,
  },
  {
    name: "Bob",
    age: 35,
    position: "Developer",
    netWorth: 80000,
  },
  {
    name: "Charlie",
    age: 40,
    position: "Designer",
    netWorth: 70000,
  },
  {
    name: "David",
    age: 45,
    position: "Analyst",
    netWorth: 90000,
  },
  {
    name: "Eve",
    age: 28,
    position: "Engineer",
    netWorth: 75000,
  },
  {
    name: "Frank",
    age: 50,
    position: "Director",
    netWorth: 120000,
  },
  {
    name: "Grace",
    age: 33,
    position: "Manager",
    netWorth: 95000,
  },
  {
    name: "Hannah",
    age: 38,
    position: "Designer",
    netWorth: 85000,
  },
  {
    name: "Ivan",
    age: 42,
    position: "Analyst",
    netWorth: 110000,
  },
  {
    name: "Jack",
    age: 32,
    position: "Developer",
    netWorth: 82000,
  },
];

const young = people.filter((item) => {
  return item.age < 30;
});
// console.log(young);
const rich = people.filter((item) =>item.netWorth>=80000)
console.log(rich);


log('hello')
