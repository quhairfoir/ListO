var request = require("request");

var options = { method: "GET",
  url: "https://api.themoviedb.org/3/search/movie",
  qs: { api_key: "f2670be02f10c2fbd7107a9f58a4f7ae", query: "hamlet" },
  headers: 
   { "Postman-Token": "ac555cc7-8ccb-47be-9cab-8a208c7c13d9",
     "Cache-Control": "no-cache" } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});