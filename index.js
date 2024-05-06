// A function is a block of code which can perform specific task as well as can be reused , write code many times same code with diffrent argument
// For creating a function in javascript we need a funcion keyboard followed by name then paranthesis()
// FunctionName will follow rules
function name() {
 
}
 
// Functions with Parameters - parameter is passed inside paranthesis
// value which comes inside those parameter is known as arguments
function name1(x) {
    console.log(x)
}
 
//Function will be executed when we invoke it
name1("Sarthak")
 
function test(testerName){
    console.log(testerName);
}
test('cghghfhmnb');
 
//Function with return statement when function returns value and reaches return statement it will stop executing
function myFunction(a, b) {
    return a * b;
}
let x = myFunction(5, 6);
console.log(x);
//we can pass function as variable value
let text = "Value of above is " + myFunction(5, 6);
console.log(text);
 
 
//Functions Expressions
function gfhfhgf(){
 
}
var gccghv=function(){};
gccghv();
// Function Expression are stored in a variable and are with or without a name
let y = function (a, b) { return a * b };
console.log(y(4, 5));
 
//Hoisting in Javascript
let k = 5;
function host() {
    return k;
}
console.log('Hoisting value '+host())
 
function host1() {
    return l;
}
console.log(host1())
var l = 5;
 
//Function with default parameter
function myFunctionDef(a, b = 9) {
    return a * b;
}
let defau = myFunctionDef(5);
console.log(defau);
 
//Arrow function
let fun1 = (a, b) => { return (a * b) };
console.log(fun1(9, 8))
 
//Function as a method and contructor only happens with objects
const myobj = {
    firstName: "Sarthak",
    lastName: "Singhal",
    fullNamee: function () { return this.firstName + ' ' + this.lastName }
}
console.log(myobj.fullNamee());
 
//Function Constructor
function myFunction1(arg1, arg2) {
    this.firstName = arg1;
    this.lastName = arg2;
}
const obj1 = new myFunction1('Sarthak', 'Singhal');
console.log(obj1.firstName)
 
 
//Function call method
// it will invoke a call and apply method with an owner object as an argument
const person = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
const person1 = {
    firstName: "John",
    lastName: "Doe"
}
const person2 = {
    firstName: "Mary",
    lastName: "Doe"
}
 
// This will return "John Doe":
person.fullName.call(person1);
 
//diff in call and apply is this in argupents passed in array and by coma
//   person.fullName.call(person1,"","");
//   person.fullName.apply(person1,["",""]);
 
 
//Javascript bind an object can borrow the method from another object
 
const person3 = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
 
const member = {
    firstName: "Hege",
    lastName: "Nilsen",
}
 
let fullName = person3.fullName.bind(member);
 
// Scope in Javascript
// In javascript has 2-type of scope local & global
// local varible only live inside certain parameters