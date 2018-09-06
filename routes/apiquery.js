"use strict";

const express = require("express");
const router = express.Router();
const api = require("./api")();

// route funnels queries to APIs, then adds results to database
module.exports = function(knex) {
  // includes a GET to each API based on passed category id
  router.post("/", (req, res) => {
    let category_id = req.body.category_id;
    let user_id = req.body.user_id;
    let query = req.body.query;

    // To Eat route
    if (Number(category_id) === 4) {
      api.toYelp(query, (err, result) => {
        knex.transaction(function() {
          knex("todos")
            .insert({
              name: result.name,
              description: result.description,
              category_id,
              user_id
            })
            .then(function() {
              console.log("Data from Yelp sucessfully logged");
            });
        });

        res.status(201).send();
      });
      // To Watch route
    } else if (Number(category_id) === 3) {
      api.toTrakt(query, (err, result) => {
        knex.transaction(function() {
          knex("todos")
            .insert({
              name: result.name,
              description: result.description,
              category_id,
              user_id
            })
            .then(function() {
              console.log("Data from Trakt sucessfully logged");
            });
        });

        res.status(201).send();
      });
      // To Read route
    } else if (Number(category_id) === 2) {
      api.toGR(query, (err, result) => {
        knex.transaction(function() {
          knex("todos")
            .insert({
              name: result.name,
              description: result.description,
              category_id,
              user_id
            })
            .then(function() {
              console.log("Data from GoodReads sucessfully logged");
            });
        });

        res.status(201).send();
      });
      // To Buy route
    } else if (Number(category_id) === 1) {
      knex.transaction(function() {
        knex("todos")
          .insert({ name: query, description: "item", category_id, user_id })
          .then(function() {
            console.log("User data sucessfully logged");
          });
      });
      res.status(201).send();
    }
  });
  return router;
};
