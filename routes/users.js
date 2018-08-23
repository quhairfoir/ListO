"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  // left as test
  router.get("/", (req, res) => {
    knex
      .select("*")
      .from("users")
      .then((results) => {
        res.json(results);
    });
  });

  // register user
  router.post("/", (req, res) => {
    
  });

  // edit user information
  router.post("/", (req, res) => {
    
  });

  return router;
}
