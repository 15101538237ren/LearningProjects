# Node.js and React Native learning path

## [*Fundamental of Modern JS* from Youtube](https://youtu.be/ZcQyJ-gxke0?list=PL4cUxeGkcC9jx2TTZk3IGWKSbtugYdrlu)

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

## [*ES6 Tutorial: Learn Modern JavaScript in 1 Hour* from Youtube](https://youtu.be/NCwa_xi0Uuc)





## [*Asynchronous JavaScript* from Youtube](https://youtu.be/ZcQyJ-gxke0?list=PL4cUxeGkcC9jx2TTZk3IGWKSbtugYdrlu)

### Lec 1. What is Async JS?

**Async**: start something now and finish it later ..

#### 1. Traditional JS

Time consuming jobs will block the thread. e.g. 

```

```