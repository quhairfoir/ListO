"use strict";

const express = require('express');
const router  = express.Router();


// this will be session control, login/logout through req.session.ids
module.exports = (knex) => {

  // login
  router.get("/", (req, res) => {
    console.log("Hello from user GET (login)");
  });

  // logout
  router.post("/", (req, res) => {
    console.log("Hello from user DELETE logout");
  });

  return router;
}