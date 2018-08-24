"use strict";

const express = require("express");
const router = express.Router();
const api = require("./api")();

let queryData = { user_id: 1, category_id: 4, query: "starbucks" };

// code will eventually funnel querys to search through separate APIs, unsure which route currently
module.exports = function(knex) {
  // includes a GET to each API based on
  router.post("/", (req, res) => {
    api.toYelp(queryData.query);
  });
  return router;
};


// function getNewEntry(something) {
//   return new Promise((resolve, reject) => {
//       setTimeout(() => {
//           if (!something) {
//               reject(new Error("Can't do something without a thing"));
//           } else {
//               resolve(something);
//           }
//       }, 1000);
//   });
// }
// getNewEntry(api.toYelp).then(console.log())





// let newEntry = {};

//     if (queryData.category_id === 4) {
//       // const getNewEntry = new Promise(function(resolve, reject) {
//         newEntry = api.toYelp(queryData.query)
//         console.log("This is newEntry from OUTSIDE api call:", newEntry);
//         // newEntry = api.toYelp(queryData.query);
//         // console.log(newEntry);
//         // if (!newEntry) {
//         //   const error = new Error("shit didn't work");
//         //   reject(error);
//         // } else if (newEntry) {
//           // resolve(newEntry)
//         // }
//       // });

//       // getNewEntry.then(newEntry => console.log(newEntry));
//       // will need: req.params.query (search text), req.params.user_id, req.params.category_id
//     }