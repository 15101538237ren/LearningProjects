
/* Variables */

let fruit = 'apple';
console.log(fruit);

fruit = 'banana';
console.log(fruit);

var sport = 'tennis';
sport = 'running';

/* Constant */

const song = 'let it be';

/* Primitive Types */

let name = 'Jessica'; //String
let age = 24; //Number
let isMale = false; //Boolean
let description = undefined; //Boolean
let favoriteFood = null; //Boolean

/* Reference Typing */

/* Object */
let jessica = {
    name : 'Jessica',
    age : 27,
    isMale : false
}; //Objects

console.log(jessica.name); // Dot notation


let tom = {
    name : 'Tom',
    age : 24,
    isMale : true
}; //Objects

console.log(tom['name']); // Bracket Notation


/* Array */
let people = [jessica, tom];
people[2] = 1; // Dynamic Typing
console.log(people[0]); // Access element of an array

console.log(people)

/* Function */

//Performing a task
function greeting(firstName, lastName) {
    console.log("Hello " + firstName + " " + lastName + "!");
}

firstName = "John";
lastName = "Smith";

greeting(firstName, lastName); 

//Calculating a number
function square(a) {
    return a * a;
}

console.log(square(107));