"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let a = {
    b: 'x'
};
// not accessible
//    console.log(a.b)
let c = {
    b: 'x'
};
console.log(c.b);
// Type Inference
let d = {
    b: 12
};
let k = {
    firstName: 'John',
    lastName: 'Doe'
};
// Accessing properties
console.log(k.firstName);
// Type Assertion
let e = {
    b: 13
};
let f = e;
console.log(f.b);
// Type Assertion with angle brackets
let g = e;
console.log(g.b);
//Class
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
let person = new Person('John', 'Doe');
console.log(person.getFullName());
// class wit the properties defined in the constructor
class Person2 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
let person2 = new Person2('John', 'boss');
console.log(person2.getFullName());
// Object with optional properties
let ab;
ab = { b: 11 }; // c is option and array has zero element so valid
ab = { b: 13, c: undefined }; // c is optional so valid
ab = { b: 14, c: 'x' }; // c is optional so valid
ab = { b: 15, c: 'x', 0: true }; // c is optional so valid and we have one array value
ab = { b: 16, c: 'x', 0: true, 1: false }; // c is optional so valid and we have two array value
//ab = { 5:true} error because b is not defined
//ab = { b : 17, 33: 'true' } // error because 33 is not boolean
// Index Signatures
let airplaneSeatingAssignments = {
    '1A': 'Thiyaga',
    '1B': 'Rajan',
    '2A': 'Thiyagarajan'
};
// Accessing properties
console.log(airplaneSeatingAssignments['1A']);
console.log(airplaneSeatingAssignments['1B']);
console.log(airplaneSeatingAssignments['2A']);
// Adding new properties
airplaneSeatingAssignments['2B'] = 'Raja';
console.log(airplaneSeatingAssignments['2B']);
// Readonly
let user = {
    id: 1,
    name: 'Thiyaga'
};
user[id] = 5;
