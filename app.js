// setup.. this is similar to when we use our default tags in html
const express = require('express');
const jwt = require('jwt-simple');
const bodyParser = require('body-parser');
const Song = require('./models/songs');
const User = require('./models/users');

// use cors in other to host frontend and backend on the same device. 
// This is because the browser will block requests from different origins.
let cors = require('cors');

// store the express function in a variable called app
const app = express();

// create a router object to handle routes
const router = express.Router();
const secret = 'supersecret'

app.use(cors());
app.use(bodyParser.json());

// all request starts with /api... e.g. the url would be http://localhost:3000/api/song.
app.use('/api', router);

// start the server and listen on port 3000
app.listen(3000, function () {
  console.log('Server is running on port 3000');
});

// get all songs in db
router.get('/song', async (req, res) => {
  try {
    const songs = await Song.find({});
    res.send(songs);
    console.log(songs);
  } catch (error) {
    console.error(error);
  }
});


// get a single song
router.get('/song/:id', async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);
    res.json(song);
  } catch (error) {
    res.status(400).json(error);
    console.error(error);
  }
});

// create a song
router.post('/song', async (req, res) => {
  try {
    const song = new Song(req.body);

    await song.save();
    res.status(201).json(song);
    console.log(song);
  } catch (error) {
    res.status(400).json(error);
    console.error(error);
  }
});

// update a song information 
router.put('/song/:id', async (req, res) => {
  try {
    const song = req.body;
    await Song.updateOne({_id : req.params.id}, song);
    res.sendStatus(204);
  } catch (error) {
    res.status(400).json(error);
    console.error(error);
  }
});

// delete a song
router.delete('/song/:id', async (req, res) => {

  try {
    await Song.deleteOne({_id: req.params.id});
    res.sendStatus(204);
  } catch (error) {
    res.status(400).send(error);
  }

});


// Users router
// create user
router.post('/user', async (req, res) => {
  if (!req.body.username || !req.body.password) {
    res.status(400).json({error: 'Missing username or password'});
  }

  const newUser = new User({
    username: req.body.username,
    password: req.body.password,
    status: req.body.status
  });

  try {
    await newUser.save();
    res.sendStatus(201).json(newUser);
  } catch (error) {
    res.status(400).json(error);
  }
});
