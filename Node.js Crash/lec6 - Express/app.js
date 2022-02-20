const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blog_routes = require('./routes/blog_routes');

// express app
const app = express();

// connect to mongodb & listen for requests
const dbURI = "mongodb+srv://username:password@url/dbname";

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => {
    console.log("DB Connected")
    app.listen(3000);
  })
  .catch(err => console.log(err));

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('static'));

app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// routes
app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// blog routes
app.use('/blogs', blog_routes);

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});