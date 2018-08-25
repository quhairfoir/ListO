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

  // delete list item
  router.post("/delete", (req, res) => {
    console.log("Hello from todos DELETE");
  });

   // edit list item
   router.post("/edit", (req, res) => {
    console.log("Hello from todos PUT");
  });

  // move list item to new category
  router.post("/move", (req, res) => {
    console.log("Hello from todos POST");
  });

  return router;
}
