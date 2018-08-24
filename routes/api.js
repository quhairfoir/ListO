"use strict";

const secrets = require("../secrets");
const request = require("request");
const convert = require("xml-js");

const yelpKey = secrets.YELP_KEY;

module.exports = function makeAPIHelpers() {
  return {
    toYelp: function(query, cb) {
      let newEntry = {};

      const options = {
        method: "GET",
        url: "https://api.yelp.com/v3/businesses/search",
        qs: { term: query, location: "Montreal" },
        headers: { Authorization: "Bearer " + yelpKey }
      };

      request(options, function(error, response, body) {
        if (error) throw new Error(error);
        const res = JSON.parse(body);
        console.log(res);
        newEntry.name = res.businesses[0].name;
        newEntry.description =
          res.businesses[0].categories[0].alias +
          ", " +
          res.businesses[0].location.display_address[0];
        cb(error, newEntry);
      });
    },

    toTMDB: function(query, cb) {
      let newEntry = {};

      const options = {
        method: "GET",
        url: "https://api.themoviedb.org/3/search/movie",
        qs: { api_key: "f2670be02f10c2fbd7107a9f58a4f7ae", query }
      };

      request(options, function(error, response, body) {
        if (error) throw new Error(error);

        const res = JSON.parse(body);

        newEntry.name = res.results[0].title;
        newEntry.description = res.results[0].overview;

        cb(error, newEntry);
      });
    },

    toGR: function(query, cb) {
      let newEntry = {};

      var options = { method: 'GET',
        url: 'https://www.goodreads.com/search.xml',
        qs: { key: '4UGJGjue5hYwOv5gxWCjg', q: 'Wuthering Heights' },
      };

      request(options, function(error, response, body) {
        if (error) throw new Error(error);
        console.log(body);
        const res = convert.xml2json(body, {compact: true, spaces: 4});
        console.log(res);
        newEntry.name = "";
        newEntry.description = "";

        cb(error, newEntry);
      });
    }
  };
};
