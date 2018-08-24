"use strict";

const express = require("express");
const router = express.Router();
const api = require("./api")();

let queryData = { user_id: 1, category_id: 2, query: "Harry Potter" };

// code will eventually funnel querys to search through separate APIs, unsure which route currently
module.exports = function(knex) {
  // includes a GET to each API based on passed category id
  router.post("/", (req, res) => {

    console.log("this is api", api);
    let category_id = queryData.category_id;
    let user_id = queryData.user_id;
    if (category_id === 4) {
      api.toYelp(queryData.query, (err, result) => {
        console.log(result);

      knex('todos')
        .insert({name: result.name, description: result.description, category_id, user_id});

        res.status(201).send();
      });
    } else if (category_id === 3) {
      api.toTMDB(queryData.query, (err, result) => {
        console.log(result);

        // info to db

        res.status(201).send();
      });
    } else if (category_id === 2) {
      api.toGR(queryData.query, (err, result) => {
        console.log(result);

        knex('todos')
        .insert({name: result.name, description: result.description, category_id, user_id});

        res.status(201).send();
      });
    } else {
      // something in here adding to "to buy"
    }
  });
  return router;
};