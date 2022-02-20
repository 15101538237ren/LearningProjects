/* The `this` keyword */

const person = {
    name : 'Jeremy',
    walk() {
        console.log(this);
    }
}

// this return a object which it is being called. when it is called out of object, it returns global object window
person.walk(); // output person object, 'this' behave like its meaning

const walk = person.walk;
walk(); // output person undefined, 'this' behave doesn't like its meaning

const walkBind = person.walk.bind(person); // bind the value of this to person object.
walkBind(); // output person person, 'this' behave doesn't like its meaning


/* Arrow Function */

// traditional ways of defining function
const square = function(number) {
    return number * number;
}

// Arrow function
const squareAf = number => number * number;

console.log(squareAf(57));

/* The scenarios where arrow function are useful. */

const jobs = [
    {id : 1, isActive: false},
    {id : 2, isActive: true},
    {id : 3, isActive: true},
    {id : 4, isActive: false}
]

//Traditional
const activeJobs = jobs.filter(function(job) {return job.isActive});

//ES6
const activeJobsAf = jobs.filter(job => job.isActive);

/* Arrow Functions and `this` */

// Traditional function won't inherit `this` reference when called in timeout or async function
const Jimmy = {
    name : 'Jimmy',
    walk() {
        setTimeout(function(){
            console.log(this);
        }, 1000);
    }
}

Jimmy.walk(); // returns window object instead of dog!

// Arrow function will inherit `this` reference when called in timeout or async function
const Perry = {
    name : 'Perry',
    walk() {
        setTimeout(() => {console.log(this)}, 1000);
    }
}

Perry.walk();

/* Array.map */
// `Array.map` is useful when render a list in React Native.

const colors = ['red', 'green', 'blue'];

const items = colors.map( color => `<li>${color}</li>`); // Template literal

console.log(items);

/* Destructing */

// Without Destructing
const address = {
    street: 'Adobe Circle Road',
    city: 'Irvine',
    country: 'US'
};

const street = address.street;
const city = address.city;
const country = address.country;


// With Destructing

const { street : st } = street; //only use the street field in street obj and assigned to st variable

// Spread Operator

// Without Spread Operator

const firstArr = [1, 2, 3];
const secondArr = [4, 5, 6];

const combinedArr = firstArr.concat(secondArr);

// With Spread Operator

const combinedWithSpread = [...firstArr, 'a', ...secondArr, 'b']; // The final look of the array is much clear than without spread.

// Combined Object using Spread Operator

const firstObj = {name : 'Josh'};
const secondObj = {job : 'SDE', age: 28};
const combined = {...firstObj, ...secondObj, 'Street': 'Cupertino'};

console.log(combined);

const clone = {...combined};//clone a object

/* Classes and Class Inheritance*/

import Person from './person.mjs'
const ariana = new Person('ariana');
ariana.name;
console.log(ariana);

const Teacher  = require('./teacher.mjs')
//import { Teacher } from './teacher'
const susan = new Teacher('susan', 'master');

console.log(susan.teach());