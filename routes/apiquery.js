"use strict";

const express = require("express");
const router = express.Router();
const api = require("./api")();

// hard coded query data used for testing
let queryData = { user_id: 1, category_id: 2, query: "Eat Pray Love" };

// route funnels queries to APIs, then adds results to database
module.exports = function(knex) {
  // includes a GET to each API based on passed category id
  router.post("/", (req, res) => {

    let category_id = queryData.category_id;
    let user_id = queryData.user_id;

    // To Eat route
    if (category_id === 4) {
      api.toYelp(queryData.query, (err, result) => {
        console.log(result);

        knex.transaction(function() {
          knex('todos')
          .insert({name: result.name, description: result.description, category_id, user_id})
          .then(function() {
            console.log('yay - data logged');
          })
        });

        res.status(201).send();
      });
    // To Watch route
    } else if (category_id === 3) {
      api.toTMDB(queryData.query, (err, result) => {
        console.log(result);

        knex.transaction(function() {
          knex('todos')
          .insert({name: result.name, description: result.description, category_id, user_id})
          .then(function() {
            console.log('yay - data logged');
          })
        });

        res.status(201).send();
      });
    // To Read route
    } else if (category_id === 2) {
      api.toGR(queryData.query, (err, result) => {
        console.log(result);

        knex.transaction(function() {
          knex('todos')
          .insert({name: result.name, description: result.description, category_id, user_id})
          .then(function() {
            console.log('yay - data logged');
          })
        });

        res.status(201).send();
      });
    // To Buy route
    } else if (category_id === 1){
      knex.transaction(function() {
        knex('todos')
        .insert({name: result.name, description: result.description, category_id, user_id})
        .then(function() {
          console.log('yay - data logged');
        })
      });
      res.status(201).send();
    }
  });
  return router;
};
