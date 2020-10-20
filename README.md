# Node.js and React Native learning path

## [1. *Fundamental of Modern JS* from Youtube](https://youtu.be/ZcQyJ-gxke0?list=PL4cUxeGkcC9jx2TTZk3IGWKSbtugYdrlu)

### 1. 1 Fundamental Questions about JS

#### (1) What JS is?
JS is the most popular language, and which can serve for both front-end and back-end. 

#### (2) What JS can do?
For a long time, JS had only been used in browser. But nowadays, JS can be used for developing Web/Mobile apps, read-networking Apps(chats, video streaming services, etc), command line tools, games, etc.

#### (3) Where does JS run?

Historically, JS ran on JS engine, e.g chrome V8; At 2009, a developer Ryan Dahl embed the open source JS engine chrome V8 into C++ program, which called Node. The program developed can be used out of browser.

#### (4). What is the difference between Javascript vs ECMAScript?

 ECMAScript is a specification, and Javascript is a language which conform with the specification. ES6 was released at 2015.

 ### 1.2 Set Up the  Development Environment

 [VSCode](https://code.visualstudio.com/) and [Node.js](https://nodejs.org/en/)

 You can add some plugins into VSCodes, which can really boost the development experience, see [this post](https://medium.com/react-native-training/vscode-for-react-native-526ec4a368ce).


### 1.3 Separation of Concerns

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

## [2. *Asynchronous JavaScript* from Youtube](https://youtu.be/ZcQyJ-gxke0?list=PL4cUxeGkcC9jx2TTZk3IGWKSbtugYdrlu)

### Lec 1. What is Async JS?

**Async**: start something now and finish it later ..

#### 1. Traditional JS

Time consuming jobs will block the thread. e.g. 

```

```