"use strict";

const express = require('express');
const router  = express.Router();



// code will eventually funnel querys to search through separate APIs, unsure which route currently
module.exports = (knex) => {

  router.get("/", (req, res) => {
    console.log("Hello from api GET");
  });

  router.post("/", (req, res) => {
    console.log("Hello from api POST");
  });

  return router;
}
