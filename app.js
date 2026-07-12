// setup.. this is similar to when we use our default tags in html
const express = require('express');

// store the express function in a variable called app
const app = express();

// start the server and listen on port 3000
app.listen(3000, function () {
  console.log('Server is running on port 3000');
});

// making an api using routes.
// routes are used to handle browser requests and send responses back to the browser.
// This looks like URLs, the different is that when a browser requests a route, it is dynamically handled by using a functtion.

app.get('/', function (req, res) {
  res.send('Hello World');
});