"use strict";

const secrets = require("../secrets");
const request = require("request");


const yelpKey = secrets.YELP_KEY;

module.exports = function makeAPIHelpers() {
  return {
  
    toYelp: function(query) {
      let newEntry = {};

      var options = { method: 'GET',
        url: 'https://api.yelp.com/v3/businesses/search',
        qs: { term: query, location: 'Montreal' },
        headers: { 'Authorization': 'Bearer ' + yelpKey }
      };
      
      request(options, function (error, response, body) {
        if (error) throw new Error(error);
        const res = JSON.parse(body);
        newEntry.businessName = res.businesses[0].name;
        newEntry.address = res.businesses[0].location.display_address[0];
        newEntry.type = res.businesses[0].categories[0].alias;
      });
      
      console.log("This is newEntry from INSIDE the GET:", newEntry);
      return (newEntry);
    },

    callTMBD: function()  {

    }
  }
}



// 

  // let queryData = { user_id: 1, category_id: 4, query: "starbucks" };

  
  // return getNewEntry.then(newEntry => newEntry)

    // console.log(newEntry);
    // return newEntry;


    // fetch version, only can get body
    // var options = { method: 'GET',
    //     url: 'https://api.yelp.com/v3/businesses/search?term=' + queryData.query + '%location=Montreal',
    //     headers: { 'Authorization': 'Bearer ' + yelpKey } };

     

    //   fetch(('https://api.yelp.com/v3/businesses/search?term=Starbucks&location=Montreal'), options)
    //     .then(res => newEntry = res.json())
    //     .then(body => console.log(newEntry))
  