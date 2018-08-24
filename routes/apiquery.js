"use strict";

const express = require('express');
const router  = express.Router();



// code will eventually funnel querys to search through separate APIs, unsure which route currently
module.exports = (knex) => {

  router.get("/", (req, res) => {
    knex
    .select('name')
    .from('categories')
    .then((results) => {
      res.json(results);
      console.log(results);
    })

    // console.log("Hello from api GET");
  });

  router.post("/", (req, res) => {
    console.log("Hello from api POST");
  });

  return router;
}


// router.get("/", (req, res) => {
//   knex
//     .select("*")
//     .from("users")
//     .then((results) => {
//       res.json(results);
//   });
// });