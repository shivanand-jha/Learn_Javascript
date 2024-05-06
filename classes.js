// Javascript class are basically templates for Javascript objects
//Javascript classes help user to create an object without initializing object again and again
 
// Syntax for Js class is
// Class ClassName{
//     constuctor(){}
// }
class Car {
    constructor(name, year) {
        //It is called whenever new Object is created just like Java
        this.name = name;
        this.year = year;
    }
    age(x) {
        return x - this.year;
    }
}
const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("Audi", 2019);
myCar1.age(2050);
 
//we can also create methods inside class
 
//Inheritence - we use extends keyword for implementing it
// a class created with class inheritence extends all the methods from another class
// Inheritence is for reusibility of methods and properties of an existing class when we create new class
class Car {
    constructor(brand) {
        this.carname = brand;//This keyword always indicates the current object property
    }
    present() {
        return 'I have a ' + this.carname;
    }
}
 
class Model extends Car {
    constructor(brand, mod) {
        super(brand);//super keyword indicates parent object property
        this.model = mod;
    }
    show() {
        return this.present() + ', it is a ' + this.model;
    }
}
 
let myCar = new Model("Ford", "Mustang");