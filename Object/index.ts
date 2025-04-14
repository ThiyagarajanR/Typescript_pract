import { Console } from "console"

let a: object = {
    b:'x'
}
// not accessible
//    console.log(a.b)

let c = {
    b : 'x'
}

console.log(c.b)

// Type Inference

let d : {b: number} = {
    b: 12
}

let k: {
    firstName: string
    lastName:string
} = {
    firstName: 'John',
    lastName: 'Doe'
}
// Accessing properties
console.log(k.firstName)
// Type Assertion
let e: any = {
    b: 13
}

let f = e as {b: number}
console.log(f.b)

// Type Assertion with angle brackets
let g = <{b: number}>e
console.log(g.b)

//Class

class Person {
    firstName: string
    lastName: string

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName
        this.lastName = lastName
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

let person = new Person('John', 'Doe')
console.log(person.getFullName())


// class wit the properties defined in the constructor
class Person2 {
    constructor(public firstName: string, public lastName: string) {
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}
let person2 = new Person2('John', 'boss') 
console.log(person2.getFullName())

// Object with optional properties

let ab : {
    b: number,
    c?:string,
    [key:number]:boolean
}

ab = {b:11} // c is option and array has zero element so valid

ab = { b: 13, c: undefined } // c is optional so valid

ab = { b: 14, c: 'x' } // c is optional so valid

ab = { b: 15, c: 'x', 0:true } // c is optional so valid and we have one array value

ab = { b: 16, c: 'x', 0:true, 1:false } // c is optional so valid and we have two array value

//ab = { 5:true} error because b is not defined

//ab = { b : 17, 33: 'true' } // error because 33 is not boolean

// Index Signatures

let airplaneSeatingAssignments : {
    [seatNumber: string] :string
} = 
{
    '1A': 'Thiyaga',
    '1B': 'Rajan',
    '2A': 'Thiyagarajan'
}

// Accessing properties
console.log(airplaneSeatingAssignments['1A'])
console.log(airplaneSeatingAssignments['1B'])
console.log(airplaneSeatingAssignments['2A'])
// Adding new properties
airplaneSeatingAssignments['2B'] = 'Raja'
console.log(airplaneSeatingAssignments['2B'])

// Readonly

let user : {
    readonly id: number,
    name: string
} = {
    id: 1,
    name: 'Thiyaga'
}


// Type Aliases

type Age = number

type PersonT = {
    name: string
    age: Age
}

let age: Age = 35

let driver: PersonT = {
    name: 'Thiyaga',
    age: age
}


type Color = 'red'

let x = Math.random() < .5

if(x)
{
    type Color = 'blue'
    let b:Color = 'blue'
}
else
{let c:Color = 'red'
}


// Union and Intersection Types

type Cat = {name:string, purrs:boolean}

type Dog = {name:string, barks:boolean, wags:boolean}

type CatOrDogOrBoth = Cat | Dog
type CatAndDog = Cat & Dog

// Cat

let aAnimal : CatOrDogOrBoth = {
    name: 'Bonkers',
    purrs: true
}

aAnimal = {
    name: 'Rover',
    barks: true,
    wags: true
}

aAnimal = {
    name: 'Rover',
    purrs: true,
    barks: true,
    wags: true
}


function combine(at: string, b: number) {
    return at || b;
}


let conbinetwo = function combine(at: string, b: number) {
    return at || b;
}
