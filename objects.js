// CREATE JS OBJECTS 
// 1 USING OBJHECT LITERALS

const { log } = require("console");

// let obj = {first:"hello",second:"good",third:"ok"};

// 2 USING CURLY BRACES
// let abc = {}

// abc.age = 32
// abc.salary = "$5000";
// abc.name = "Shivanand"



// 3 USING NEW KEYWORD BEFORE OPBJECT CONSTRUCTOR

// let x = new Object();

// x.age = 92;
// x.salary = "$1000";
// x.name = "micheal";


// 4 USING COPYING ANOTHER OBJECT 

// let y = x;
// log(x ,y);


// Access the properties of objects
// let z = "age"
// object.propertyName || object["PropertyName"]
// log(abc.age,abc["age"],abc[z])


//iterators or we can say to get every property of an object we 
// use the a for in loop 

// for(let v in abc){
//     log("Key is :", v ,"    Value is :", abc[v])
// }


//Using Object.values(ObjectName)

// log(Object.values(abc));

// Using JSON.Stringify()
// log(JSON.stringify(abc))


//delete property of an object but be careful with inherited property and nested property 

// log(abc)
// delete abc.name;
// log(abc)


// We can create a nested object as well 
// let g = abc ;
// g.c = x;
// log(g);

// we can store a function in a object as a value of a key as 
// function is also an object in js 
//

// g.fun = function greet(){
//     log("hello");
// }

// log(g);
// output :
// {
//   age: 32,
//   salary: '$5000',
//   name: 'Shivanand',
//   c: { age: 92, salary: '$1000', name: 'micheal' },
//   fun: [Function: greet]
// }

// g.fun(); // output : hello



// const obj = {counter : 2};

// Define setters and getters
// Object.defineProperty(obj, "reset", {
//   get : function () {this.counter = 0;}
// });
// Object.defineProperty(obj, "increment", {
//   get : function () {this.counter++;}
// });
// Object.defineProperty(obj, "decrement", {
//   get : function () {this.counter--;}
// });
// Object.defineProperty(obj, "add", {
//   set : function (value) {this.counter += value;}
// });
// Object.defineProperty(obj, "subtract", {
//   set : function (value) {this.counter -= value;}
// });

// Play with the counter:
// log(obj);
// obj.reset;
// log(obj);
// obj.add = 5;
// log(obj);
// obj.subtract = 1;
// log(obj);
// obj.increment;
// log(obj);
// obj.decrement;
// log(obj);


// log(x);

// function x2(umr , kamai , naam){
//     this.age = umr;
//     this.salary = kamai;
//     this.name = naam;
// }


// let ab = new x2(90,"$1000000000","Old Man");
// log(ab.age);



// ***************************** Shallow Copy of Object *********************************

// A shallow copy creates a new object and copies the values of the original object’s properties. However, when it comes to nested objects, a shallow copy only copies references to those objects, not the objects themselves. This means changes to nested objects in the copy will affect the original object and vice versa.

// const originalObject = {
//   name: 'John',
//   age: 30,
//   address: {
//     city: 'New York',
//     country: 'USA'
//   }
// };

// Using spread operator for shallow copy
// const shallowCopy = { ...originalObject };

// Modify a property in the shallow copy
// shallowCopy.address.city = 'San Francisco';

// Changes are reflected in the original object
// console.log(originalObject.address.city); // Output: San Francisco

//*******************************************   Deep copy ************************************

// A deep copy, on the other hand, creates a new object and recursively copies all nested objects within the original object. Consequently, changes to nested objects in the copy won’t affect the original object, and vice versa.

// const originalObject = {
//   name: 'John',
//   age: 30,
//   address: {
//     city: 'New York',
//     country: 'USA'
//   }
// };

// Using JSON.stringify and JSON.parse for deep copy
// const deepCopy = JSON.parse(JSON.stringify(originalObject));

// Modify a property in the deep copy
// deepCopy.address.city = 'Los Angeles';

// Changes in the deep copy do not affect the original object
// console.log(originalObject.address.city); // Output: New York


let x = [
    {
      "id": 1,
      "text": "Sample text 1",
      "day": "Monday",
      "reminder": true
    },
    {
      "id": 2,
      "text": "Sample text 2",
      "day": "Tuesday",
      "reminder": false
    },
    {
      "id": 3,
      "text": "Sample text 3",
      "day": "Wednesday",
      "reminder": true
    },
    {
      "id": 4,
      "text": "Sample text 4",
      "day": "Thursday",
      "reminder": false
    },
    {
      "id": 5,
      "text": "Sample text 5",
      "day": "Friday",
      "reminder": true
    },
    {
      "id": 6,
      "text": "Sample text 6",
      "day": "Saturday",
      "reminder": false
    },
    {
      "id": 7,
      "text": "Sample text 7",
      "day": "Sunday",
      "reminder": true
    },
    {
      "id": 8,
      "text": "Sample text 8",
      "day": "Monday",
      "reminder": false
    },
    {
      "id": 9,
      "text": "Sample text 9",
      "day": "Tuesday",
      "reminder": true
    },
    {
      "id": 10,
      "text": "Sample text 10",
      "day": "Wednesday",
      "reminder": false
    }
  ]
  console.log(x)
  