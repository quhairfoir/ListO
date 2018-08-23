var request = require("request");

var options = { method: 'GET',
  url: 'https://www.goodreads.com/search.xml',
  qs: { key: '4UGJGjue5hYwOv5gxWCjg', q: 'Starbucks' },
  };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
