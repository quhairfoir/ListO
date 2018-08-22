"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/login", (req, res) => {
    
  });

  router.post("/register", (req, res) => {
    
  });

  router.delete("/logout", (req, res) => {
    
  });

  router.put("/:user/edit", (req, res) => {
    
  });

  return router;
}