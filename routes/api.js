"use strict";

const secrets = require("../secrets");
const request = require('request');


const yelpKey = secrets.YELP_KEY;
const TMDBKey = secrets.TMDB_KEY;
const GRKey = secrets.GR_KEY;

module.exports = function makeAPIHelpers() {
  return {
  
    toYelp: function(query) {
      let newEntry = {};

      var options = { method: 'GET',
      url: 'https://api.yelp.com/v3/businesses/search',
      qs: { term: query, location: 'Montreal' },
      headers: { 'Authorization': 'Bearer ' + yelpKey } };

      const getNewEntry = new Promise((resolve, reject) => {

        request(options, function (error, response, body) {
          if (error) throw new Error(error);
          var res = JSON.parse(body);
          newEntry.businessName = res.businesses[0].name;
          newEntry.address = res.businesses[0].location.display_address[0];
          newEntry.type = res.businesses[0].categories[0].alias;
          
          resolve(newEntry);
        })
      })
    
    return getNewEntry.then(newEntry => newEntry)

      // console.log(newEntry);
      // return newEntry;
    },

  callTMBD: function(query)  {

    }
  } 
}


