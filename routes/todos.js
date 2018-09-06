"use strict";

const express = require('express');
const router  = express.Router();

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
    knex.transaction(function() {
      knex('todos')
      .where({ id: req.body.id})
      .delete()
      .then(function() {
        console.log('yay - item deleted!');
      })
    });
    res.status(201).send();
  });

  // move list item to new category
  router.post("/move", (req, res) => {
    knex.transaction(function() {
      knex('todos')
      .where({ id: req.body.id})
      .update({ category_id: req.body.category })
      .then(function() {
        console.log('yay - item moved!');
      })
    });
    res.status(201).send();
  });

  return router;
}
