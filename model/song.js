'use strict';

const mongoose = require('mongoose');
const Horoscope = require('./horoscope');

const songSchema = mongoose.Schema({
  title: {
    type: String,
    // required: true,
  },
  lyrics: {
    type: String,
    // required: true,
  },
});

const Song = module.exports = mongoose.model('song', songSchema);

Song.create = (title, lyrics) => {
  return new Song({title, lyrics}).save();
};

// Song.remove = (title, lyrics) => {
  
// }

