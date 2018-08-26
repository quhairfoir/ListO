"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  // returns array with all user information
  router.get("/", (req, res) => {
    knex
      .select("*")
      .from("users")
      .then((results) => {
        res.json(results);
    });
  });

  // register user
  router.post("/register", (req, res) => {
    knex.transaction(function() {
      // console.log('in the function');
      knex('users')
      .insert({first_name: req.body.first_name,
            last_name: req.body.last_name,
            password: req.body.password,
            email: req.body.email,
            username: req.body.username
          })
      .then(function() {
        // console.log('yay');
      })
    })
    res.redirect("../");  
  });

  // edit user information
  router.post("/edit", (req, res) => {
    knex.transaction(function() {
      knex('users')
      .where({ id: req.body.id})
      .update({ first_name: req.body.first_name, last_name: req.body.last_name, email: req.body.email, username: req.body.username})
      .then(function() {
        // console.log('yay - person edited!');
      })
    });
    res.status(201).send();
  });

  return router;
}
