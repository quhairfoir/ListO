"use strict";

const express = require('express');
const router  = express.Router();


// this will be session control, login/logout through req.session.ids
module.exports = (knex) => {

  // login
  router.get("/", (req, res) => {
    
  });

  // logout
  router.delete("/", (req, res) => {
    
  });

  return router;
}