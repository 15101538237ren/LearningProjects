const express = require("express");

const app = express();

const cookieParser = require('cookie-parser');
const errMiddleware = require("./middlewares/errors");

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
//Import all routes

const products = require("./routes/product");
const auth = require("./routes/auth");

app.use("/api/v1", products);
app.use("/api/v1", auth);

//Middlewares to handle errors
app.use(errMiddleware);

module.exports = app;
