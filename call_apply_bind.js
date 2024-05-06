const { log } = require("console");

// ********************************         Call ***************************************

// function greet(name , name1) {
//     console.log(`Hello, ${name}${name1}!`);
// }
// names = ["Shiva","nand"]
// greet.call(null, names[0],names[1]);


// function show() {
//     console.log('show function');
//   }
  
//   show();
// let obj =  {name:"Shiv"};
// function show() {
//     console.log('show function');
//     log(obj.name);
//   }
  
//   show.call(obj);
//   show.apply(obj);

// *************************        Apply *****************************************
// function sum(a, b) {
//     return a + b;
// }
// function sum(a, b , c) {
//     return a + b + c;
// }
// const numbers = [5, 3 , 8];
// const result = sum.apply({} , numbers);
// console.log(result);
// ****************************         Bind **************************************
// function greetPerson(name) {
//     console.log(`Hello, ${name}!`);
// }

// const greetAlice = greetPerson.bind(null, 'Alice');
// greetAlice();

