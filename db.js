const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://sdev255:sdev255@cluster0.brgvopn.mongodb.net/song_app_db?appName=Cluster0');
console.log(`Connected to database...`);

module.exports = mongoose;