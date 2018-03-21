'use strict';

const mongoose = require('mongoose');

const songSchema = mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
});

const Song = module.exports = mongoose.model('song', songSchema);