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

    console.log("This is category_id, user_id, query:", category_id, user_id, query);

    console.log("This is req.body:", req.body);

    // To Eat route
    if (Number(category_id) === 4) {
      api.toYelp(query, (err, result) => {
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
    } else if (Number(category_id) === 3) {
      api.toTMDB(query, (err, result) => {
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
    } else if (Number(category_id) === 2) {
      api.toGR(query, (err, result) => {
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
    } else if (Number(category_id) === 1){
      knex.transaction(function() {
        knex('todos')
        .insert({name: query, description: "item", category_id, user_id})
        .then(function() {
          console.log('yay - data logged');
        })
      });
      res.status(201).send();
    }
  });
  return router;
};
