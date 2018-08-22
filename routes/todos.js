"use strict";

const express = require('express');
const router  = express.Router();



// code will eventually funnel querys to search through separate APIs, unsure which route currently
module.exports = (knex) => {

  // delete list item
  router.delete("/todos/:id", (req, res) => {
    
  });

  // edit list item
  router.put("/todos/:id", (req, res) => {
    
  });

  // move list item to new category
  router.post("/todos/:id/move", (req, res) => {
    
  });

  return router;
}
