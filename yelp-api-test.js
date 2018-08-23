const secrets = require("./secrets");
const request = require('request');

const yelpKey = secrets.YELP_KEY;

var options = { method: 'GET',
  url: 'https://api.yelp.com/v3/businesses/search',
  qs: { term: 'Starbucks', location: 'Montreal' },
  headers: 
   { 'Authorization': 'Bearer ' + yelpKey } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});