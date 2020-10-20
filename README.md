# Node.js and React Native learning path

## [Summary of *Fundamental of Modern JS* from Youtube](https://youtu.be/ZcQyJ-gxke0?list=PL4cUxeGkcC9jx2TTZk3IGWKSbtugYdrlu)

### 1. Fundamental Questions about JS

#### (1) What JS is?
JS is the most popular language, and which can serve for both front-end and back-end. 

#### (2) What JS can do?
For a long time, JS had only been used in browser. But nowadays, JS can be used for developing Web/Mobile apps, read-networking Apps(chats, video streaming services, etc), command line tools, games, etc.

#### (3) Where does JS run?

Historically, JS ran on JS engine, e.g chrome V8; At 2009, a developer Ryan Dahl embed the open source JS engine chrome V8 into C++ program, which called Node. The program developed can be used out of browser.

#### (4). What is the difference between Javascript vs ECMAScript?

 ECMAScript is a specification, and Javascript is a language which conform with the specification. ES6 was released at 2015.

 ### 2 Set Up the  Development Environment

 [VSCode](https://code.visualstudio.com/) and [Node.js](https://nodejs.org/en/)

 You can add some plugins into VSCodes, which can really boost the development experience, see [this post](https://medium.com/react-native-training/vscode-for-react-native-526ec4a368ce).


### 3 Separation of Concerns

We want to separate the HTML code and JS code for the consideration of separation of concerns. e.g separate js and html into different file, linked by **src** tag.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script src="index.js"></script>
</body>
</html>
```

### 4 Javascript in Node
You can execute Javascript in Node by execute following command in cmd line or in integrated terminal in VSCode.

```bash
node index.js
```

### 5 Variable and Constant

To define and assign variables, you can do:

```javascript
let fruit = 'apple';
console.log(fruit);

fruit = 'banana';
console.log(fruit);

var sport = 'tennis';
sport = 'running';
```

where the difference between `var` and `let` keyword is that Variables defined by `var` is available in **global** scope, and the variables defined by `let` only available in **local** scape, e.g. function.

To define a constant, you can type:

```javascript
const song = 'let it be';
```

### 6 Primitive Types and Reference Types in Javascript

#### Primitive Types
There are 5 Primitive Types in Javascript, and they are: `String`, `Boolean`, `Number`, `undefined` and `null`. e.g.

```javascript
let name = 'Jessica'; //String
let age = 24; //Number
let isMale = false; //Boolean
let description = undefined; //Boolean
let favoriteFood = null; //Boolean
```

Javascript is a Dynamic Typing language, which means you can change the type of variables by assigning to different type values.

#### Reference Types
There are 3 Reference Types in Javascript, and they are: `Object`, `Array` and `Function`. e.g.

- #### Object

You can access property of an object by either `Dot notation` or `Bracket Notation`, the default choice would be Dot notation, unless interested field of the object is unknown until running time.

```javascript
console.log(jessica.name); // Dot notation


let tom = {
    name : 'Tom',
    age : 24,
    isMale : true
}; //Objects

console.log(tom['name']); // Bracket Notation
```

- #### Array

```javascript
console.log(jessica.name); // Dot notation

// Array
let people = [jessica, tom];
people[2] = 1; // Dynamic Typing
console.log(people[0]); // Access element of an array
```

- #### Function

```javascript
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
```

## [Summary of *ES6 Tutorial: Learn Modern JavaScript in 1 Hour* from Youtube](https://youtu.be/NCwa_xi0Uuc)

#### The `this` keyword

The `this` keyword is a super confusing thing in JS, because it does not always behave like its meaning.

```javascript
const person = {
    name : 'Jeremy',
    walk() {
        console.log(this);
        // `this` return a object which it is being called. when it is called out of object, it returns global object window
    }
}

person.walk(); // output person object, 'this' behave like its original meaning.

const walk = person.walk;
walk(); // output person undefined if strict mode enabled else window object, here, 'this' behave doesn't like its original meaning.
```

- #### Binding `this`

```javascript
const walk = person.walk.bind(person); // bind the value of this to person object.

walk(); // output person person, 'this' behave doesn't like its meaning
```

#### Arrow Function

```javascript
/* Arrow Function */

// traditional ways of defining function
const square = function(number) {
    return number * number;
}

// Arrow function
const squareAf = number => number * number;

console.log(squareAf(57));
```

The scenarios where arrow function are useful.

```javascript
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
```

- #### Arrow Functions and `this`

```javascript
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
```

#### `Array.map` Method

`Array.map` is useful when render a list in React Native.

```javascript
const colors = ['red', 'green', 'blue'];

const items = colors.map( color => `<li>${color}</li>`); // Template literal

console.log(items); //Output: ["<li>red</li>", "<li>green</li>", "<li>blue</li>"]
```
#### Destructing

```javascript
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

const { street : st } = street; //only use the street field in street object and assigned to st variable
```

#### Spread Operator

```javascript
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
```

#### Classes and Class Inheritance

```javascript
class Person {
    constructor(name) {
        this.name = name;
    }

    walk() {
        console.log(`${this.name} is walking`);
    }
}

const ariana = new Person('ariana');
ariana.name;
console.log(ariana);

class Teacher extends Person{

    constructor(name, degree){
        super(name);
        this.degree = degree;
    }

    teach(){
        console.log(`${this.name} is teaching with a ${this.degree} degree.`);
    }
}

const susan = new Teacher('susan', 'master');

console.log(susan.teach());
```

#### Modules

To organize the classes and files in js project, we partitioned classes into modules for the separation of concerns.

See instances at `person.js` and `teacher.js` files.

#### Named and Default Exports

Define a Default Export

```javascript
export default class Teacher extends Person{

    constructor(name, degree){
        super(name);
        this.degree = degree;
    }

    teach(){
        console.log(`${this.name} is teaching with a ${this.degree} degree.`);
    }
}
```

- Use Named and Default Export

Default: `import ... from ''`

Named: `import { ... } from ''`

e.g. `import React, {Component} from 'react'` in React Native.

## [Summary of *Asynchronous JavaScript* from Youtube](https://youtu.be/ZcQyJ-gxke0?list=PL4cUxeGkcC9jx2TTZk3IGWKSbtugYdrlu)

### Lec 1. What is Async JS?

**Async**: start something now and finish it later ..

#### 1. Traditional JS

Time consuming jobs will block the thread. e.g. 

```

```