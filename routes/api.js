"use strict";

const secrets = require("../secrets");
const request = require("request");
const convert = require("xml-js");

const yelpKey = secrets.YELP_KEY;
const GRKey = secrets.GR_KEY;
const traktKey = secrets.TRAKT_KEY;

// exports helper functions used by GET to "/api"
module.exports = function makeAPIHelpers() {
  return {
    toTrakt: function(query, cb) {
      let newEntry = {};

      const options = {
        method: "GET",
        url: "https://api.trakt.tv/search",
        qs: { query, type: "movie,show" },
        headers: {
          "Cache-Control": "no-cache",
          "trakt-api-version": "2",
          "trakt-api-key": traktKey,
          "Content-type": "application/json"
        }
      };

      request(options, function(error, response, body) {
        if (error) throw new Error(error);
        const res = JSON.parse(body);
        const data = res[0].show ? res[0].show : res[0].movie;
        newEntry.name = data.title;
        newEntry.description =
          res[0].type + ", " + data.overview.slice(0, 50) + "...";
        cb(error, newEntry);
      });
    },

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
        const data = res.businesses[0];
        newEntry.name = data.name;
        newEntry.description =
          data.categories[0].alias + ", " + data.location.display_address[0];
        cb(error, newEntry);
      });
    },

    toGR: function(query, cb) {
      let newEntry = {};

      var options = {
        method: "GET",
        url: "https://www.goodreads.com/search.xml",
        qs: { key: GRKey, q: query }
      };

      request(options, function(error, response, body) {
        if (error) throw new Error(error);
        const res = JSON.parse(
          convert.xml2json(body, { compact: true, spaces: 4 })
        );
        const data = res.GoodreadsResponse.search.results.work[0].best_book;
        newEntry.name = data.title._text + ", by " + data.author.name._text;
        newEntry.description = data._attributes.type;

        cb(error, newEntry);
      });
    }
  };
};
