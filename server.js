"use strict";

require('dotenv').config();

const PORT        = process.env.PORT || 8080;
const ENV         = process.env.ENV || "development";
const express     = require("express");
const bodyParser  = require("body-parser");
const sass        = require("node-sass-middleware");
const app         = express();

const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const morgan      = require('morgan');
const knexLogger  = require('knex-logger');
const cookieSession = require('cookie-session');

// Seperated Routes for each Resource
const usersRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const TODOsRoutes = require("./routes/todos");
const APIroutes = require("./routes/apiquery");

app.use(cookieSession({
  name: 'session',
  keys: ['1234'],

  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));

// Mount all resource routes
app.use("/users", usersRoutes(knex));
app.use("/auth", authRoutes(knex));
app.use("/todos", TODOsRoutes(knex));
app.use("/api", APIroutes(knex));

// Home page
app.get("/", (req, res) => {
  let userFound = false;
  console.log(req.session);
  let templateVars = {};
  if(req.session.user) {
    userFound = true;
    templateVars.user = req.session.user;
  } 
  if (!userFound) {
    res.redirect('/login');
  } else {
    res.render('index', templateVars);
  }
});

app.get('/login', (req, res) => {
  res.render('login');
})

app.post("/login", (req, res) => {
    knex('users').where({email: req.body.email})
    .select().then(result => {
      console.log(result);
      
      req.session.user = result[0];
      res.redirect('/')
    });
})



app.post("/login/register", (req, res) => {
  knex.transaction(function() {
    console.log('in the function');
    knex('users')
    .insert({first_name: req.body.first_name,
          last_name: req.body.last_name,
          password: req.body.password,
          email: req.body.email,
          username: req.body.username
        })
    .then(function() {
      console.log('yay');
    })
  })
  res.redirect("/");  
});



 app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});