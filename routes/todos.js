"use strict";

const express = require('express');
const router  = express.Router();



// code will eventually funnel querys to search through separate APIs, unsure which route currently
module.exports = (knex) => {

  // get full list
  router.get("/", (req, res) => {
    knex
      .select("*")
      .from("todos")
      .then((results) => {
        res.json(results);
    });
  })

   // edit list item
   router.post("/:id", (req, res) => {
    console.log("Hello from todos PUT");
  });

  // delete list item
  router.post("/:id/delete", (req, res) => {
    console.log("Hello from todos DELETE");
  });

  // move list item to new category
  router.post("/:id/move", (req, res) => {
    console.log("Hello from todos POST");
  });

  return router;
}
