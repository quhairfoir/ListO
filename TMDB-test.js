const request = require('request');
function SOMETHING () {
  var api_key = 'f2670be02f10c2fbd7107a9f58a4f7ae';
  var query = 'Harry+Potter';

  const options = {
    url: 'https://api.themoviedb.org/3/search/movie?', //+ api_key + '={' + api_key + '}&query=' + query,
    headers: {
      'Authorization': 'f2670be02f10c2fbd7107a9f58a4f7ae'
    }
  };
 
  request(options, function (err, res, body) {
    var result = JSON.parse(body);
    console.log(result);
    // console.log(res);
  });
};
SOMETHING();