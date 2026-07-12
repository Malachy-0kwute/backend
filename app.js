// setup.. this is similar to when we use our default tags in html
const express = require('express');

// use cors in other to host frontend and backend on the same device. 
// This is because the browser will block requests from different origins.
let cors = require('cors');

// store the express function in a variable called app
const app = express();
app.use(cors());

// create a router object to handle routes
const router = express.Router();

// start the server and listen on port 3000
app.listen(3000, function () {
  console.log('Server is running on port 3000');
});

// making an api using routes.
// routes are used to handle browser requests and send responses back to the browser.
// This looks like URLs, the different is that when a browser requests a route, it is dynamically handled by using a functtion.

router.get('/songs', function (req, res) {

  const song = [
    {
      title: 'We found love',
      artist: 'Rihanna',
      popularity: 10,
      genre: ['Pop', 'Dance'],
      releaseDate: '2011-09-22'
    },

    {
      title: 'Shape of you',
      artist: 'Ed Sheeran',
      popularity: 9,
      genre: ['Pop', 'Dancehall'],
      releaseDate: '2017-01-06'
    }
  ]
  
  res.json(song);
});

// all request that usually use an api starts with /api... e.g. the url would be http://localhost:3000/api/songs.
app.use('/api', router);
