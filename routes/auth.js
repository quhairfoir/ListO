"use strict";

const express = require('express');
const router  = express.Router();


// this will be session control, login/logout through req.session.ids
module.exports = (knex) => {

  // render login page
  router.get("/", (req, res) => {
    res.render('login');
  })

  // login
  router.post("/login", (req, res) => {
    knex('users').where({email: req.body.email})
    .select().then(result => {
      console.log(result);
      
      req.session.user = result[0];
      res.redirect('/')
    });
  });

  // logout
  router.post("/logout", (req, res) => {
    req.session = null;
    res.redirect("/auth")
  });

  return router;
}