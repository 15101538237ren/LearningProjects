# Node.js and React Native learning path

## Table of Contents
========================
  - [Summary of *Fundamental of Modern JS* from Youtube](#summary-of-fundamental-of-modern-js-from-youtube)
    - [1. Fundamental Questions about JS](#1-fundamental-questions-about-js)
      - [(1) What JS is?](#1-what-js-is)
      - [(2) What JS can do?](#2-what-js-can-do)
      - [(3) Where does JS run?](#3-where-does-js-run)
      - [(4). What is the difference between Javascript vs ECMAScript?](#4-what-is-the-difference-between-javascript-vs-ecmascript)
    - [2 Set Up the  Development Environment](#2-set-up-the--development-environment)
    - [3 Separation of Concerns](#3-separation-of-concerns)
    - [4 Javascript in Node](#4-javascript-in-node)
    - [5 Variable and Constant](#5-variable-and-constant)
    - [6 Primitive Types and Reference Types in Javascript](#6-primitive-types-and-reference-types-in-javascript)
      - [Primitive Types](#primitive-types)
      - [Reference Types](#reference-types)
  - [Summary of *ES6 Tutorial: Learn Modern JavaScript in 1 Hour* from Youtube](#summary-of-es6-tutorial-learn-modern-javascript-in-1-hour-from-youtube)
      - [The `this` keyword](#the-this-keyword)
      - [Arrow Function](#arrow-function)
      - [`Array.map` Method](#arraymap-method)
      - [Destructing](#destructing)
      - [Spread Operator](#spread-operator)
      - [Classes and Class Inheritance](#classes-and-class-inheritance)
      - [Modules](#modules)
      - [Named and Default Exports](#named-and-default-exports)
  - [Summary of *Asynchronous JavaScript* from Youtube](#summary-of-asynchronous-javascript-from-youtube)
    - [1. What is Async JS?](#1-what-is-async-js)
    - [2. HTTP Request](#2-http-request)
    - [3. Status Codes, Callback & JSON Data](#3-status-codes-callback--json-data)
    - [4. `Callback Hell`, sequentially execute functions until data arrive](#4-callback-hell-sequentially-execute-functions-until-data-arrive)
      - [5. `Promise` and Chaining Promises](#5-promise-and-chaining-promises)
      - [`Fetch` API](#fetch-api)
      - [`await` and `async`](#await-and-async)
      - [Throw errors](#throw-errors)
  - [Summary of *Node.js Crash Course* from Youtube](#summary-of-nodejs-crash-course-from-youtube)
    - [Intro and Setup](#intro-and-setup)
      - [Intro to Node.js](#intro-to-nodejs)
      - [Advantage of using Node.js](#advantage-of-using-nodejs)
      - [Prerequisite](#prerequisite)
      - [Syllabus](#syllabus)
      - [Install Node.js](#install-nodejs)
    - [Node.js Basics](#nodejs-basics)
      - [`Global Object`](#global-object)
      - [`module` & `require`](#module--require)
        - [Module `people.js`](#module-peoplejs)
        - [Require `module.js`](#require-modulejs)
      - [The File System](#the-file-system)
      - [Streams & Buffers](#streams--buffers)
    - [Client & Server](#client--server)
    - [`npm` - Node Package Manager](#npm---node-package-manager)
    - [Express](#express)
    - [View Engines](#view-engines)
      - [`EJS`](#ejs)
    - [Middleware](#middleware)
      - [3rd party middleware](#3rd-party-middleware)
    - [MangoDB](#mangodb)
      - [`MangoDB`(Nosql DB) vs SQL DB](#mangodbnosql-db-vs-sql-db)
      - [`Mangoose`](#mangoose)
      - [CRUD of Cloud MangoDB in Node](#crud-of-cloud-mangodb-in-node)
    - [Get, Post & Delete Requests](#get-post--delete-requests)
    - [Express Router & MVC](#express-router--mvc)
      - [MVC](#mvc)
  - [Summary of ReactJS Tutorial](#summary-of-reactjs-tutorial)
    - [1. Introduction](#1-introduction)
      - [What is React?](#what-is-react)
      - [Why learn React?](#why-learn-react)
      - [Component Based Architecture](#component-based-architecture)
      - [Channel Content](#channel-content)
    - [2. Hello World](#2-hello-world)
    - [3. Folder Structure](#3-folder-structure)
    - [4. Components](#4-components)
    - [5. Stateless Functional Component](#5-stateless-functional-component)
    - [6. Stateful Class Component](#6-stateful-class-component)
    - [8. JSX](#8-jsx)
    - [9. Props](#9-props)
    - [10. State](#10-state)
      - [Props vs State Components](#props-vs-state-components)
    - [11. setState](#11-setstate)
    - [12. Destructing `props` and `state`](#12-destructing-props-and-state)
    - [14. Event Binding](#14-event-binding)
    - [15. Method as `Props`](#15-method-as-props)
    - [16. Conditional rendering](#16-conditional-rendering)
    - [17. List Rendering](#17-list-rendering)
    - [18. List and Keys](#18-list-and-keys)
    - [Project: Todo List App](#project-todo-list-app)

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
let description = undefined; //undefined
let favoriteFood = null; //null
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
### More resources
- [The Modern JavaScript Tutorial](https://javascript.info/)
- [W3Schools – JavaScript Tutorial](https://www.w3schools.com/js/default.asp)
- [Interaction: alert, prompt, confirm](https://javascript.info/alert-prompt-confirm)
- [Function Expressions](https://javascript.info/function-expressions)

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

- Define a Default Export

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

### 1. What is Async JS?

**Async**: start something now and finish it later ..

An typical example in async js task:

```javascript
statement 1

statement 2

statement 3: fetch data -> take some time;

statement 4: process the data when it arrived.

statement 5 independent of data fetching
```
In Sync JS, time consuming jobs will block the thread. If it is async like follows, it won't affect the remaining tasks.

```javascript
console.log(1);
console.log(2);

setTimeout(() => {
    console.log("Callback called");
}, 2000);

console.log(3);
console.log(4);
/* 
Output:
1
2
3
4
Callback called
*/
```


### 2. HTTP Request

The traditional way:

```javascript
const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
    if (request.readyState == 4){
            console.log(request.responseText);
    }
})

request.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
request.send();
```

See more [`XMLHttpRequest.readyState`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState)

### 3. Status Codes, Callback & JSON Data

```javascript

const getTodos = (callback) => { // callback in parameter
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        request.addEventListener('readystatechange', () => {
            if (request.readyState == 4 && request.status == 200){
                const data = JSON.parse(request.responseText);
                callback(undefined, data);
            }else if (request.readyState == 4){
                callback("could not find data", undefined);
            }
        })
    })

    request.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
    request.send();
}
console.log(1);
console.log(2);

getTodos( (err, data) => {
    //depend on the error or data, perform differently.
    console.log("Callback fired");
    if (err){
        console.log(err);
    }else{
        console.log(data);
    }
    
}); // Async function

console.log(3);
console.log(4);
```

See more [`HTTP response status codes`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)


### 4. `Callback Hell`, sequentially execute functions until data arrive

Traditional way will cause the `Callback Hell` by nesting callbacks, and it is very hard to read and maintain if things get more complicated. But we do need the wait until function in a readable way. To do that, we need `Promise` in modern JS.

```javascript
const getTodos = (resource, callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if (request.readyState == 4 && request.status == 200){
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
        }else if (request.readyState == 4){
            callback("could not find data", undefined);
        }
    })

    request.open("GET", resource);
    request.send();
}
console.log(1);
console.log(2);


getTodos("todos/mario.json", (err, data) => {
    console.log("Callback fired");
    console.log(data);
    getTodos("todos/shaun.json", (err, data) => {
        console.log("Callback fired");
        console.log(data);
        getTodos("todos/luigi.json", (err, data) => {
            console.log("Callback fired");
            console.log(data);
        });
    });
});

console.log(3);
console.log(4);
```

#### 5. `Promise` and Chaining Promises

* `Promise`

Following code is an example of implementing promise with either catching error when `reject` is called, or handling data when `resolve` is called.

```javascript
const getTodos = (resource, callback) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', () => {
            if (request.readyState == 4 && request.status == 200){
                const data = JSON.parse(request.responseText);
                resolve(data);
            }else if (request.readyState == 4){
                reject("could not find data");
            }
        })
        request.open("GET", resource);
        request.send();
    })
}

getTodos("todos/mario.json")
    .then(data => {
        console.log("Promise resolved,", data);
    })
    .catch(err => {
        console.log("Promise rejected,", err);
    })
```

* Chaining `Promise`

We can chain Promises sequentially by `return` a new `Promise`

```javascript
// Chaining Promises
getTodos("todos/mario.json")
    .then(data => {
        console.log("Promise 1 resolved,", data);
        return getTodos("todos/shaun.json");
    })
    .then(data => {
        console.log("Promise 2 resolved,", data);
        return getTodos("todos/luigis.json");
    })
    .then(data => {
        console.log("Promise 3 resolved,", data);
    })
    .catch(err => {
        console.log("Promise rejected,", err);
    })
    
```

#### `Fetch` API

We can use the `Fetch` API to implement the `getTodos()` in a easier way.

```javascript
fetch("todos/mario.json")
    .then(response => {
        console.log("Promise 1 resolved,", response);
        return response.json();
    })
    .then(data => {
        console.log("Data,", data);
    })
    .catch(err => {
        console.log("Promise rejected,", err);
    })
    
```

#### `await` and `async`

Whenever a function is with `async` keyword, it automatically return a `Promise`. When a `await` is put in front of a function, the return value will be assigned when the function return a `Promise`. Which both together will make the code more readable and cleaner. e.g.

```javascript
const getTodos = async () => {
    const response = await fetch("todos/mario.json");
    const data = await response.json();
    return data;
}

console.log(1);
console.log(2);

getTodos().then(data => {
    console.log("Data,", data);
}); // Non Blocking

console.log(3);
console.log(4);
```

#### Throw errors

```javascript
const getTodos = async () => {
    const response = await fetch("todos/marios.json");
    if (response.status !== 200){
        throw new Error("Can't fetch the data");
    }
    const data = await response.json();
    return data;
}

getTodos().then(data => {
    console.log("Data,", data);
}).catch(error => {
    console.log("Error, ", error);
});
```

## [Summary of *Node.js Crash Course* from Youtube](https://youtu.be/zb3Qk8SG5Ms)

### Intro and Setup

#### Intro to Node.js
Node.js is written in C++ which wraps V8 engine. V8 engine compile JS into machine code. Therefore, Node.js is able to do all server functions like: 
- Read & write files on computer
- Connect to DB
- Act as server for content.

#### Advantage of using Node.js

- No need to learn extra language for server, which can also share code between front and back end.
- Node.js has a massive community and with massive third-party packages & tools to help.

#### Prerequisite

- Fundation of JS(functions, `async`, `Promise`, etc)
- `HTML` & `CSS`


#### Syllabus
1. How to install `Node.js` and use it to run JS.
2. How to `read` and `write` files
3. How to create a `server` to create a website
4. How to create a `Express` App / website
5. How to use MangoDb (a NoSql Database)
6. Hoe to use template engine to easily create HTML views
7. Put everything together to create a Blog site

#### Install Node.js

1. Download Node from https://nodejs.org/ and install 
2. Run in command line by typing `node`.


### Node.js Basics

#### `Global Object`

`window` is a global object, which has `setTimeout()`, `alert()`, and many other methods or properties, which can be used without need to call the global object name. e.g:

```javascript
setTimeout(()=>{
    alert("alert");
}, 2000)
```

In `Node`, the global object is `global`.

```javascript
global.setTimeout(()=>{
    console.log("Timeout");
    clearInterval(interval);
}, 3000);

var nsec = 0;

const interval = global.setInterval(() => {
    nsec += 1;
    console.log(`${nsec}s`);
}, 1000);


console.log(__dirname);
console.log(__filename);
```

#### `module` & `require`

##### Module `people.js`

In `people.js`, define variables `people` and `ages` and exporting them in module.exports

```javascript
const people = ["Mario", "Shaun", "Luigi"];
const ages = [20, 30, 40];

module.exports = {
    people, ages
}
```

##### Require `module.js`

In `module.js`, import variables `people` and `ages` in `people.js` through `require`

```javascript
const {people, ages} = require("./people.js");
console.log(people, ages)

const os = require("os"); // OS module is very useful in Node

console.log(os.platform(), os.homedir());
```

#### The File System

```javascript
const fs = require("fs");

const dir = "./blogs";
const fp1 = `${dir}/blog1.txt`;
const fp2 = `${dir}/blog2.txt`;

// read files
const read = (fp) =>{
    fs.readFile(fp, (err, data) => {
        if (err) {
            console.log(err);
        }else{
            console.log(data.toString());
        }
    });
}

const write = (fp) =>{
    fs.writeFile(fp, `Hello ${fp}!`, (err) =>{
        if (err) {
            console.log(err);
        }else{
            console.log(`File ${fp} is written!`);
        }
    });
}

const delete_file = (fp) =>{
    if (fs.existsSync(fp)){
        // deleting files
        fs.unlink(fp, (err) =>{
            if (err) {
                console.log(err);
            }else{
                console.log(`File ${fp} is deleted!`);
            }
        });
    }
}

// directories
const pipeline = () => {
    if (!fs.existsSync(dir)){
        fs.mkdir(dir, (err)=>{
            if (err){
                console.log(err);
            }else{
                console.log(`folder ${dir} created`);
                // writing files
                write(fp1);
                write(fp2);
            }
        });
    }else{
        delete_file(fp1);
        delete_file(fp2);
        fs.rmdir(dir, (err) =>{
            if (err){
                console.log(err);
            }else{
                console.log(`folder ${dir} deleted`);
            }
        });
    }
};

pipeline();
```

#### Streams & Buffers

Stream: start using data before it has finished loading. e.g. Netflix video loading.

```javascript
const fs = require("fs");

const fp = "./carpe diem.txt";
const fp2 = "./carpe diem.txt.bk";

const readStream = fs.createReadStream(fp, { encoding : "utf-8" });

const writeStream = fs.createWriteStream(fp2);

const lineSeparator = "\n------------A NEW DATA CHUNK------------\n";

const readStart = () =>{
    readStream.on('data', (chunk) => {
        console.log(lineSeparator);
        console.log(chunk.toString());
        
        writeStream.write(lineSeparator);
        writeStream.write(chunk);
    });
};

// readStart();

//piping
readStream.pipe(writeStream);
```

### Client & Server

- `IP address`

Each computer connected to Internet have a unique `IP address`.

- `Domain`
A mask of IP, make the server identifier easier to remember.

- Server

In Node, we create a server **manually**.

```javascript
const http = require("http");

const port = 3000; // port number likes 'doors' into a computer.
const domain = 'localhost'; // IP : '127.0.0.1'

const server = http.createServer( (req, res) => {
    console.log("request made");
});

server.listen(port, domain, () => {
    console.log(`Listening for request on port ${port}`);
});
```

- `Request` & `Response`

```javascript
const http = require("http");
const fs = require("fs");

const port = 3000; // port number likes 'doors' into a computer.
const domain = 'localhost'; // IP : '127.0.0.1'
const views = "./views";

const server = http.createServer( (req, res) => {
    console.log(req.url, req.method);

    res.setHeader('Content-Type', 'text/html');

    let view = views;
    switch(req.url){
        case "/":
            view = `${view}/index.html`;
            res.statusCode = 200;
            break;
        case "/about":
            view = `${view}/about.html`;
            res.statusCode = 200;
            break;
        case "/about-me":
            res.setHeader('Location', '/about');
            res.statusCode = 301;
            res.end();
            break;
        default:
            view = `${view}/404.html`;
            res.statusCode = 404;
            break;
    }

    fs.readFile(view, (err, data) => {
        if (err){
            console.log(err);
        }else{
            res.write(data);
        }
        res.end()
    });
});

server.listen(port, domain, () => {
    console.log(`Listening for request on port ${port}`);
});
```

- Status Codes
1. 100 Range: informational response
2. 200 Range: success codes
3. 300 Range: codes for redirect
4. 400 Range: user/client error codes
5. 500 Range: server error codes

### `npm` - Node Package Manager

`npm` is automatically installed when you installing Node. You can install node packages by searching on https://www.npmjs.com, and install them according to their documentation.


- `package.json` File & Dependencies

Any local package dependencies for the project are recorded at `package.json`. You can install the dependencies by running  `npm install`.

### [Express](https://www.npmjs.com/package/express)

`Express` is a web framework for node.

```javascript
const express = require("express");

const app = express();

app.listen(3000);

app.get('/', (req, res) =>{
    res.sendFile('./views/index.html', { root : __dirname });
});

app.get('/about', (req, res) =>{
    res.sendFile('./views/about.html', { root : __dirname });
});

app.get('/about-us', (req, res) =>{
    res.redirect('/about');
});

// 404 page
app.use( (req, res) => {
    res.status(404).sendFile('./views/404.html', { root : __dirname });
});
```

### View Engines

#### `EJS`

[EJS](https://www.npmjs.com/package/ejs), Embedded JavaScript templates

- using `app.set('view engine', 'ejs')` to set default template engine.

- create `*.ejs` template file in `views` folder. Otherwise, you have to set `app.set('views', 'your view folder')`.

- you can JS statement in `.ejs` file by `<% js statement; %>`

- you can insert values from JS into html by `<%= %>` (with escaping), or `<%- %>` (raw html).

- render the ejs file by `res.render('template', { vars : var_values})`

- if logic in .ejs
```javascript
<% if ()  {%>
    <% blogs.foreach(blog => { %>
        <p> <%= blog.name%> </p>
    <% })%>
<% }%>

```
- The procedure that EJS render `.ejs file: .ejs -> EJS view engine processing -> HTML`


- include partials: e.g. headers, footers by `
<%- include("head.ejs") %>`

- middleware & static files: `app.use(express.static('static'))`

### Middleware

`Request` -> `Middleware` -> `Response`

Middlewares like `app.use()` are processed for all request, but `app.get()` only process GET request. You can use next to continue the middleware list when a middleware is completed. e.g.

```javascript
app.use((req, res, next) => {
    console.log('logging');
    next();
})
```
#### 3rd party middleware
Middleware examples:

1. `Logging`, e.g. `morgan`
2. `Authentication` check for protected routes.
3. Parsing `JSON` middlewares from requests.
4. Return `404` pages

### MangoDB

#### `MangoDB`(Nosql DB) vs SQL DB
`Collections` vs Tables & `Documents` vs Rows. e.g.

Blog Collection: Blog Document 1, Blog Document 2, etc.

`MangoDB Atlas` can be used for free cloud MangoDB service.

#### `Mangoose`

Mangoose is an ODM library - Object Document Mapping Library. e.g. User model -> User.get(), User.findById().

- Schemas & Models: schema defines the structure of a type of data/document, format: property name, property type.e.g.

User Schema: name (string, required), age(number), etc.

```javascript
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blog_schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  snippet: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true
  },
}, { timestamps: true });

const Blog = mongoose.model('Blog', blog_schema);
module.exports = Blog;
```

#### CRUD of Cloud MangoDB in Node
```javascript
//Retrieve
Blog.find().sort({ createdAt: -1 })
    .then(result => {
      res.render('index', { blogs: result, title: 'All blogs' });
    })
    .catch(err => {
      console.log(err);
    });

//Retrieve
Blog.findById(id)...

const blog = new Blog(req.body);
//Create Or Update
blog.save()

//Delete
Blog.findByIdAndDelete(id)

```

### Get, Post & Delete Requests

When designing the system, it is better to figure out the REST APIs will be used:e.g.

- GET   blogs  /
- GET   blogs  /create
- GET   blogs   /:id
- POST   blogs /
- PUT   blogs   /:id
- DELETE   blogs   /:id

### Express Router & MVC

For better organize and module the project, it is better to split the routers in different module and files.

e.g. the router for all `/blog` request can be put in `blog_routes.js`

```javascript
const express = require('express');
const blog_controller = require('../controllers/blog_controller');

const router = express.Router();

router.get('/create', blog_controller.blog_create_get);
router.get('/', blog_controller.blog_index);
router.post('/', blog_controller.blog_create_post);
router.get('/:id', blog_controller.blog_details);
router.delete('/:id', blog_controller.blog_delete);

module.exports = router;
```

and in `App.js`, you just need to import your router and add it into middlewares.

```javascript
const blog_routes = require('./routes/blog_routes');

// blog routes
app.use('/blogs', blog_routes);
```

#### MVC

Model - Controller - Views, e.g. `controllers` can be separated from App.js or routers.js by:

```javascript
const Blog = require('../models/blog');

const blog_index = (req, res) => {

  Blog.find().sort({ createdAt: -1 })
    .then(result => {
      res.render('index', { blogs: result, title: 'All blogs' });
    })
    .catch(err => {
      console.log(err);
    });
}

module.exports = {
  blog_index
}
```

## [Summary of ReactJS Tutorial](https://www.youtube.com/playlist?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3)

### 1. Introduction

#### What is React?

React is an `open source` , `javascript library`, not a framework, and focusing on building `UI` with rich ecosystem.

#### Why learn React?

- Create and maintened by Meta.
- Huge community
- Lots job demands.

#### Component Based Architecture

- Components for reusable code
- React is declarative: tell what you want and React will build the actual UI
- React will handle efficiently updating and rendering of components; DOM updates are handled gracefully in React; 

#### Channel Content

1. Fundamentals of React
2. HTTP
3. Routing
4. Redux - State Management
5. Utilities

### 2. Hello World

Run the following cmd in terminal with the `node` installed.

```bash
npx create-react-app helloworld
cd helloworld
npm start
```

`npx` is a npm package runner already installed with `npm`.

### 3. Folder Structure

Folders & Files: 

`node_modules`, `public`, `src`, `package.json`

### 4. Components

Components describe a part of the UI, and they are reusable and can be nested inside other components.

Component types

`Stateless Functional Component`: Javascript functions.

`Stateful Class Component`: Class extending Component class Render method returning HTML

### 5. Stateless Functional Component

Example: Greet.js, can be compiled and explained by `Babel` compiler.

```javascript
import React from 'react'

const Greet = () => <h1>Hello World!</h1>

export default Greet
```

### 6. Stateful Class Component

- Essentially a `ES6` class, can optially receive properties (`props`) and return HTML (`JSX`). 

- The class component can also maintain a private state.

| Function                                     | Class                           |
| -------------------------------------------- | ------------------------------- |
| Simple Functions                             | More  feature rich              |
| Use functional component as much as possible | Maintain their own data - state |
| Stateless/Dumb/Presentational                | Stateful/Smart/Container        |
| Mainly responsible for UI                    | provide lifecycle hooks         |

### 8. JSX

- `JSX` stands for `JavaScript XML`, a extension to the javascript language syntax

- Eable write XML-like code for elements and components.

- JSX tags have a tag name, attributes, and children.

- JSX is not required to write React Applications, but it can make your React code more simpler and elegant. 

- It ultimately transpiles to pure JavaScript which is understood by the browsers.

See the difference between JSX and non-JSX version below:

```javascript
import React from 'react'

const JSXVersion = () => {
    return (
        <div id="hello" class="dummyClass">
            <h1>Hello</h1>
        </div>
    )
}

const NonJSX = () => {
    return React.createElement('div',
    {id: "hello", className:"dummyClass"},
    React.createElement('h1', null, "Hello"))
}

export default {JSXVersion, NonJSX}
```

### 9. Props

The properties of components, which are immutable and enable components to be dynamic. If you want change the values of properties, consider the states.

Example in functional stateless component:

In `App.js`:

```javascript
import Greet from "./components/Greet";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greet name="Honglei">
          <p>This is a children element</p>
        </Greet>

        <Greet name="Junhao"></Greet>

        <Greet name="Yusong"></Greet>
      </header>
    </div>
  );
}
```

In `Greet.js`:

```javascript
import React from "react";

const Greet = (props) => (
  <div>
    <h1>Hello {props.name}!</h1> {props.children}
  </div>
);

export default Greet;
```

If using class stateful component, In `Greet.js`:

```javascript
import React from "react";

const Greet = (props) => (
  <div>
    <h1>Hello {props.name}!</h1> {props.children}
  </div>
);

export default Greet;
```

### 10. State

#### Props vs State Components
| `props`                              | `state`                                 |
| ------------------------------------ | --------------------------------------- |
| `props` get passed to the components | `state` is managed within the component |
| Functional parameters                | Variables declared in the function body |
| `props` are immutable                | `state` can be changed                  |
| Usage: `props`                       | Usage:  `useState`                      |

Example code:

```javascript
import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome visitor!",
    };
  }

  changeMessage() {
    this.setState({
      message: "Thanks for subscribing!",
    }, ()=>console.log("Subscribed callback"));
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    );
  }
}
```

### 11. setState

- Always use `setState` and never modify the `state` directly.
- Use `callback` function if there is code has to be executed after the states have been updated, which is the second parameter of the `setState` method.
- When you update the `state` based on the previous state value, pass in a function as an argument instead of the regular object.

```javascript
import React, { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  increment() {
    this.setState(
      (previousState, props) => ({
        counter: previousState.counter + 1,
      }),
      () => console.log("Callback of setState is called")
    );
  }
  incrementFive() {
    for (var i = 0; i < 5; i++) {
      this.increment();
    }
  }
  render() {
    return (
      <div>
        <h1>Counter - {this.state.counter}</h1>
        <button
          onClick={() => {
            this.incrementFive();
          }}
        >
          Increment 5
        </button>
      </div>
    );
  }
}

export default Counter;
```

### 12. Destructing `props` and `state`

For functional components:
```javascript
const {name, hereoName} = props
```

For class components, usually destructing them in the `render` method:

```javascript
render(){
    const {name, hereoName} = this.props
}

```


### 14. Event Binding

Note the `onClick={this.clickHandler.bind(this)` part can be changed to `onClick={() => this.clickHandler()`

```javascript
import React, { Component } from "react";

export class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };
  }

  clickHandler(){
    this.setState({
        message:"Goodbye"
    })
  }
  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={this.clickHandler.bind(this)}>Click</button>
      </div>
    );
  }
}

export default EventBind;
```

### 15. Method as `Props`

Ex. A child component call its parent component's function

In `ParentComponent.js`:

```javascript
import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "parent",
    };
    this.greetParent = this.greetParent.bind(this);
  }

  greetParent() {
    alert("Hello " + this.state.parentName);
  }

  render() {
    return <div><ChildComponent parentHandler={this.greetParent}></ChildComponent></div>;
  }
}

export default ParentComponent;
```

In `ChildComponent.js`:

```javascript
import React from 'react'

function ChildComponent(props) {
  return (
    <div><button onClick={props.parentHandler}>ChildComponent</button></div>
  )
}

export default ChildComponent
```

### 16. Conditional rendering

Three ways:

1. If-else statement

```javascript
if (condition) {
    
} else {
    
}
```

1. Conditional operator

```javascript
condition ? A : B
```

3. Short-circuit operator
```javascript
condition && element
```

### 17. List Rendering

```javascript
function NameList(){
    const names = ["A", "B", "C"]
    const NameList = names.map(name => <h2>{name}</h2>)
    return (
        <div>
            {NameList}
        </div>
    )
}
```

### 18. List and Keys

- A "key" is a special string attribute you need to include when creating lists of elements.
- Keys give the elements a stable identity.
- Keys helps React identify which items have changed, are added or are removed.
- Help in efficient update of the UI.

### Project: Todo List App

[Install MangoDB community server](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/)

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)" # install brew

brew tap mongodb/brew

brew install mongodb-community@4.2 #

brew services start mongodb-community@4.2 # start service

brew services stop mongodb-community@4.2
```

Or
```bash
TARGET_DB_DIR=/Users/bytedance/data/db

mkdir -p $TARGET_DB_DIR

chmod -R 777 $TARGET_DB_DIR

mongod --dbpath=$TARGET_DB_DIR
```
